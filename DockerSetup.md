# Docker Setup Guide: ICP Developers Community

Step-by-step walkthrough to containerize and run this app, in the order you'd actually do it.

## Step 1: Enable standalone output in next.config.mjs

Next.js needs to produce a self-contained server build that doesn't depend on the rest of `node_modules` to run. Open `next.config.mjs` and add `output: 'standalone'`:

```js
const nextConfig = {
  output: "standalone",
  // ...your existing config
};

export default nextConfig;
```

Skip this and the Docker build will succeed almost all the way through, then fail at the final stage because `.next/standalone` doesn't exist.

## Step 2: Create the Dockerfile

In your project root, create a file named exactly `Dockerfile`. Capital D, nothing else capitalized. Build environments are case-sensitive, so `dockerfile` or `DockerFile` won't be picked up.

```dockerfile
# 1. Install dependencies
FROM node:22-alpine AS deps
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# 2. Build the app
FROM node:22-alpine AS builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Only needed if you have NEXT_PUBLIC_* vars (see Step 5):
# ARG NEXT_PUBLIC_SOME_VAR
# ENV NEXT_PUBLIC_SOME_VAR=$NEXT_PUBLIC_SOME_VAR

RUN pnpm build

# 3. Run it
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
```

Three stages, three jobs:

- **deps**: installs packages with pnpm (via corepack, since the base image doesn't have pnpm by default). Kept separate so a code change doesn't force a full reinstall.
- **builder**: has full source and runs `pnpm build`. Its output gets used, the stage itself doesn't ship.
- **runner**: the actual image you run. Only the built output, no source code, no dev dependencies, runs as a non-root user.

## Step 3: Create .dockerignore

Same folder as the Dockerfile:

```
node_modules
.next
.git
.env
.env.local
```

Without this, your local `node_modules` gets copied into the build (slower, version mismatches) and your `.env` could get copied into an image layer, where it stays permanently and is extractable by anyone with the image.

## Step 4: Build the image

```bash
docker build -t icp-community .
```

Runs deps then builder then runner, tags the final result `icp-community`.

## Step 5: Create your .env file and pass it as an argument

On whatever machine runs the container, create a plain `.env` file:

```
GITHUB_TOKEN=abc123
HCAPTCHA_SECRET=xyz456
```

No quotes, no spaces around `=`. `--env-file` parsing is stricter than what Next.js tolerates locally, quotes or extra spaces either fail to parse or get passed in as literal characters.

Lock it down:

```bash
chmod 600 .env
```

This file is never copied into the image and never referenced inside the Dockerfile. Instead, you hand it to `docker run` as the `--env-file` argument:

```bash
docker run --env-file /path/to/.env -p 3000:3000 icp-community
```

What that argument does: Docker reads the file on the host, parses each `KEY=value` line, and injects them as environment variables inside the container at the moment it starts, not baked into any layer. This is why the same image works in any environment, you just point `--env-file` at a different `.env` per machine.

Exception: variables prefixed `NEXT_PUBLIC_` get compiled into the client-side JS bundle during `pnpm build`, not read at runtime, so `--env-file` won't reach them. Those need `--build-arg` at build time, paired with the `ARG`/`ENV` lines commented in the Dockerfile above:

```bash
docker build --build-arg NEXT_PUBLIC_SOME_VAR=value -t icp-community .
```

## Step 6: Run the container

```bash
docker run -d --env-file /path/to/.env -p 3000:3000 --name icp-app icp-community
```

`-d` runs it in the background. `--name` gives you something to reference for the next step.

## Step 7: Confirm it's working

```bash
docker logs icp-app
```

Look for a ready/listening message. Then open the app in a browser and test anything that depends on your env vars, e.g. `/api/apply`, to confirm `lib/github.ts` and `lib/hcaptcha.ts` are actually reading the values rather than failing on `undefined`.
