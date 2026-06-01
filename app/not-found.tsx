import type { Metadata } from "next";
import Link from "next/link";
import { Frame } from "@/components/Frame";
import { MonoLabel } from "@/components/ui/MonoLabel";

export const metadata: Metadata = {
  title: "404 — Lost? Shame on you.",
  description: "The page you tried to access doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen">
      <Frame />

      <section className="section gutter min-h-screen flex items-center">
        <div className="max-w-page mx-auto w-full grid grid-cols-12 gap-x-6 gap-y-12 items-end">
          {/* Left: the verdict */}
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-6 flex items-center gap-3">
              <MonoLabel>§ 404 / not found</MonoLabel>
              <span className="rule h-px w-12" />
              <MonoLabel>status · ● dead</MonoLabel>
            </div>

            <h1 className="font-display font-semibold text-display-xl text-[var(--fg)] leading-[0.92]">
              <span className="block text-[var(--accent)]">404.</span>
              <span className="block">SHAME ON YOU.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg md:text-xl leading-snug text-[var(--fg-2)]">
              The page isn&apos;t missing.{" "}
              <span className="text-[var(--fg)] underline decoration-1 underline-offset-4">
                Your URL is.
              </span>{" "}
              We&apos;ve been over this in the docs you didn&apos;t read.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/" className="btn-primary">
                <span aria-hidden>←</span>
                take me home
              </Link>
              <Link href="/#projects" className="btn-secondary">
                see projects instead
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>

          {/* Right: the post-mortem */}
          <div className="col-span-12 lg:col-span-4">
            <div className="brutal-border bg-[var(--bg)] p-5 font-mono text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-rule">
                <span className="opacity-60">~/error.log</span>
                <span className="inline-flex items-center gap-2 text-[var(--accent)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  rip
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-[13px]">
                <li>
                  <span className="opacity-50">{">"}</span> request:{" "}
                  <span className="font-medium">whatever you typed</span>
                </li>
                <li>
                  <span className="opacity-50">{">"}</span> response:{" "}
                  <span className="font-medium">404 not found</span>
                </li>
                <li>
                  <span className="opacity-50">{">"}</span> root cause:{" "}
                  <span className="font-medium">skill issue</span>
                </li>
                <li>
                  <span className="opacity-50">{">"}</span> 404s this session:{" "}
                  <span className="font-medium">1 (you)</span>
                </li>
                <li>
                  <span className="opacity-50">{">"}</span> shame level:{" "}
                  <span className="text-[var(--accent)] font-medium">
                    maximum
                  </span>
                </li>
                <li>
                  <span className="opacity-50">{">"}</span> recommended action:{" "}
                  <span className="font-medium">touch grass</span>
                </li>
              </ul>
              <div className="mt-5 pt-3 border-t border-rule text-[11px] uppercase tracking-[0.1em] opacity-60">
                stack trace:{" "}
                <span className="lowercase">
                  at user.brain (skill.js:1:1)
                </span>
              </div>
            </div>
          </div>

          {/* Closer */}
          <div className="col-span-12 mt-16 md:mt-24 border-t border-rule pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="font-mono text-base md:text-xl text-[var(--fg-2)]">
              <span className="opacity-60">{"// "}</span>
              this URL has been git-rebased out of existence. shame.
            </p>
            <p className="font-mono text-meta uppercase opacity-60">
              error code · ENOTYOU
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
