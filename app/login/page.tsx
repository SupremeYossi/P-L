import { Lock, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-canvas lg:grid-cols-[0.95fr_1.05fr]">
      <section className="flex items-center justify-center bg-ink px-6 py-12 text-white">
        <div className="w-full max-w-md">
          <div className="mb-10 inline-flex h-11 w-11 items-center justify-center rounded bg-harbor text-white">
            <ShieldCheck size={23} aria-hidden="true" />
          </div>
          <h1 className="text-4xl font-semibold tracking-normal">OpsBoard</h1>
          <p className="mt-4 max-w-sm text-base leading-7 text-slate-300">
            A focused operating room for orders, inventory, shipments, costs, and exceptions.
          </p>
          <div className="mt-10 grid gap-3 text-sm text-slate-300">
            <div className="rounded border border-white/10 bg-white/5 p-4">
              Sample access: <span className="font-medium text-white">ops@example.com</span>
            </div>
            <div className="rounded border border-white/10 bg-white/5 p-4">
              Supabase Auth can replace this form when your project keys are configured.
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center px-6 py-12">
        <form className="w-full max-w-md rounded border border-line bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold">Sign in</h2>
          <p className="mt-2 text-sm text-slate-600">Use sample mode for now. No live data is written.</p>

          <label className="mt-8 block text-sm font-medium text-slate-700" htmlFor="email">
            Email
          </label>
          <div className="mt-2 flex items-center gap-2 rounded border border-line bg-white px-3">
            <Mail size={18} className="text-slate-400" aria-hidden="true" />
            <input
              id="email"
              defaultValue="ops@example.com"
              className="h-11 w-full border-0 bg-transparent outline-none"
              type="email"
            />
          </div>

          <label className="mt-5 block text-sm font-medium text-slate-700" htmlFor="password">
            Password
          </label>
          <div className="mt-2 flex items-center gap-2 rounded border border-line bg-white px-3">
            <Lock size={18} className="text-slate-400" aria-hidden="true" />
            <input
              id="password"
              defaultValue="sample-mode"
              className="h-11 w-full border-0 bg-transparent outline-none"
              type="password"
            />
          </div>

          <Link
            href="/dashboard"
            className="mt-8 flex h-11 w-full items-center justify-center rounded bg-harbor px-4 text-sm font-semibold text-white transition hover:bg-[#0A585B]"
          >
            Enter dashboard
          </Link>
        </form>
      </section>
    </main>
  );
}
