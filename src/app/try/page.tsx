import type { Metadata } from "next";
import Link from "next/link";

const DEMO_ENTER = "https://latticeplugins.com/try/?demo_enter=1";

export const metadata: Metadata = {
  title: "Try Lattice plugins live — safe WordPress demo",
  description:
    "Explore every Lattice plugin in a real WordPress + WooCommerce admin. Safe, isolated, and reset to a clean snapshot every hour.",
  alternates: { canonical: "https://latticeplugins.com/try" },
};

const canDo = [
  "Browse every plugin's real admin screens",
  "Use all premium features — no free-tier limits",
  "Change plugin settings and see them live",
  "Explore WooCommerce products, orders, and settings",
  "Test Lattice SEO, CRM, Commerce Suite, Migrate, Subscribify, and Stripe Payments",
];

const cannotDo = [
  "Install, edit, or upload code, plugins, or themes",
  "Create users or change the demo account",
  "Send email or make real payments",
  "Break anything permanently — everything resets hourly",
];

export default function TryDemoPage() {
  return (
    <main className="min-h-screen">
      <section className="container-x pb-16 pt-14 lg:pt-20">
        <div className="lattice-grid relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white sm:px-10 lg:px-12 lg:py-16">
          <div className="relative max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
              Live demo
            </p>
            <h1 className="font-display text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Try every Lattice plugin in a safe WordPress demo.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A real WordPress + WooCommerce admin with all 7 Lattice plugins installed — fully
              unlocked (premium), so you see every feature, not the free tier. No signup, no
              password, nothing you can break — the whole environment resets to a clean snapshot every hour.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={DEMO_ENTER}
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Launch the live demo
              </a>
              <Link
                href="/compare"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Compare plugins first
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              The launch button logs you into a locked demo role. You never see or need a password.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
            <h2 className="font-display text-2xl font-bold text-slate-950">What you can do</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {canDo.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 font-bold text-emerald-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
            <h2 className="font-display text-2xl font-bold text-slate-950">What you can&apos;t do</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {cannotDo.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 font-bold text-slate-400">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-amber-100 bg-amber-50 p-6 text-sm leading-6 text-slate-700 sm:p-8">
          <strong className="text-slate-950">How it stays safe:</strong> the demo runs in its own isolated
          WordPress + database, with file edits, installs, uploads, user creation, and email disabled.
          Anything anyone changes is wiped automatically every hour when the environment restores its clean
          snapshot.
        </div>
      </section>
    </main>
  );
}
