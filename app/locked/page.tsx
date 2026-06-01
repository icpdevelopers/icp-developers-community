import type { Metadata } from "next";
import Link from "next/link";
import { Frame } from "@/components/Frame";
import { MonoLabel } from "@/components/ui/MonoLabel";

export const metadata: Metadata = {
  title: "401 — Members only. Nice try.",
  description:
    "This content is locked behind club membership. Join, ship, and maybe — just maybe — you get the key.",
  robots: { index: false, follow: false },
};

export default function Locked({
  searchParams,
}: {
  searchParams: { from?: string };
}) {
  const fromRaw = searchParams?.from;
  // Clamp to keep weird/long URLs from blowing out the panel layout.
  const from = (fromRaw && fromRaw.trim().slice(0, 80)) || "private repo";

  return (
    <main className="relative min-h-screen">
      <Frame />

      <section className="section gutter min-h-screen flex items-center">
        <div className="max-w-page mx-auto w-full grid grid-cols-12 gap-x-6 gap-y-12 items-end">
          {/* Left: the taunt */}
          <div className="col-span-12 lg:col-span-8">
            <div className="mb-6 flex items-center gap-3">
              <MonoLabel>§ 401 / locked</MonoLabel>
              <span className="rule h-px w-12" />
              <MonoLabel>status · ● gated</MonoLabel>
            </div>

            <h1 className="font-display font-semibold text-display-xl text-[var(--fg)] leading-[0.92]">
              <span className="block text-[var(--accent)]">NAH NAH NAH.</span>
              <span className="block">NICE TRY.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg md:text-xl leading-snug text-[var(--fg-2)]">
              This one&apos;s behind the velvet rope. We&apos;re not
              gatekeeping — we&apos;re{" "}
              <span className="text-[var(--fg)] underline decoration-1 underline-offset-4">
                vibekeeping
              </span>
              . Join the club. Ship something. Maybe — just maybe — you get in.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#join" className="btn-primary">
                join the club
                <span aria-hidden>→</span>
              </Link>
              <Link href="/" className="btn-secondary">
                <span aria-hidden>←</span>
                back to home
              </Link>
            </div>
          </div>

          {/* Right: the access log */}
          <div className="col-span-12 lg:col-span-4">
            <div className="brutal-border bg-[var(--bg)] p-5 font-mono text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-rule">
                <span className="opacity-60">~/access.log</span>
                <span className="inline-flex items-center gap-2 text-[var(--accent)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  forbidden
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-[13px]">
                <li className="break-words">
                  <span className="opacity-50">{">"}</span> resource:{" "}
                  <span className="font-medium">{from}</span>
                </li>
                <li>
                  <span className="opacity-50">{">"}</span> your clearance:{" "}
                  <span className="font-medium">outsider</span>
                </li>
                <li>
                  <span className="opacity-50">{">"}</span> membership:{" "}
                  <span className="font-medium">not yet</span>
                </li>
                <li>
                  <span className="opacity-50">{">"}</span> vibes check:{" "}
                  <span className="font-medium">pending</span>
                </li>
                <li>
                  <span className="opacity-50">{">"}</span> unlock cost:{" "}
                  <span className="text-[var(--accent)] font-medium">
                    1 application
                  </span>
                </li>
                <li>
                  <span className="opacity-50">{">"}</span> next step:{" "}
                  <span className="font-medium">apply</span>
                </li>
              </ul>
              <div className="mt-5 pt-3 border-t border-rule text-[11px] uppercase tracking-[0.1em] opacity-60">
                hint: members ship. you can too.
              </div>
            </div>
          </div>

          {/* Closer */}
          <div className="col-span-12 mt-16 md:mt-24 border-t border-rule pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="font-mono text-base md:text-xl text-[var(--fg-2)]">
              <span className="opacity-60">{"// "}</span>
              the door is locked. the application form is not.
            </p>
            <p className="font-mono text-meta uppercase opacity-60">
              error code · EOUTSIDER
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
