import type { ReactNode } from "react";
import Link from "next/link";
import { AlertTriangle, Boxes, ClipboardList, Database, DollarSign, Home, LogOut, Ship, ShoppingCart, Tags } from "lucide-react";
import { isSupabaseConfigured } from "@/lib/supabase";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: Home },
  { href: "/dashboard/orders", label: "Orders", icon: ShoppingCart },
  { href: "/dashboard/skus", label: "SKUs", icon: Tags },
  { href: "/dashboard/listings", label: "Listings", icon: ClipboardList },
  { href: "/dashboard/inventory", label: "Inventory", icon: Boxes },
  { href: "/dashboard/shipments", label: "Shipments", icon: Ship },
  { href: "/dashboard/costs", label: "Costs", icon: DollarSign },
  { href: "/dashboard/alerts", label: "Discrepancy Alerts", icon: AlertTriangle }
];

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="border-b border-line bg-white lg:min-h-screen lg:border-b-0 lg:border-r">
        <div className="flex h-16 items-center justify-between px-5">
          <Link href="/dashboard" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded bg-harbor text-white">
              <Database size={20} aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold text-ink">OpsBoard</span>
          </Link>
        </div>

        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex h-10 shrink-0 items-center gap-3 rounded px-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-ink"
              >
                <Icon size={18} aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden px-5 pt-8 lg:block">
          <div className="rounded border border-line bg-slate-50 p-4 text-sm">
            <div className="font-semibold text-ink">Database</div>
            <p className="mt-1 text-slate-600">
              {isSupabaseConfigured ? "Connected to Supabase" : "Sample mode, Supabase keys pending"}
            </p>
          </div>
        </div>
      </aside>

      <div className="min-w-0">
        <header className="flex h-16 items-center justify-between border-b border-line bg-white px-5 sm:px-7">
          <div className="text-sm font-medium text-slate-600">Operations Command Center</div>
          <Link href="/login" className="inline-flex h-9 items-center gap-2 rounded border border-line px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            <LogOut size={16} aria-hidden="true" />
            Log out
          </Link>
        </header>
        {children}
      </div>
    </div>
  );
}
