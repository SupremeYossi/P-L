import type { ReactNode } from "react";
import { AlertTriangle, ArrowUpRight, PackageCheck, Truck } from "lucide-react";
import { DataTable } from "@/components/data-table";
import { orders, discrepancyAlerts, metrics, trend } from "@/lib/sample-data";

export default function DashboardPage() {
  const maxOrders = Math.max(...trend.map((item) => item.orders));

  return (
    <main>
      <section className="border-b border-line bg-white px-5 py-6 sm:px-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-ink">Overview</h1>
            <p className="mt-1 text-sm text-slate-600">Sample operating snapshot for April 28, 2026.</p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="rounded border border-line px-3 py-2 text-slate-600">3 warehouses</div>
            <div className="rounded border border-line px-3 py-2 text-slate-600">4 channels</div>
            <div className="rounded border border-line px-3 py-2 text-slate-600">Sample data</div>
          </div>
        </div>
      </section>

      <section className="space-y-6 p-5 sm:p-7">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded border border-line bg-white p-5">
              <div className="text-sm font-medium text-slate-500">{metric.label}</div>
              <div className="mt-3 text-3xl font-semibold tracking-normal text-ink">{metric.value}</div>
              <div className="mt-2 text-sm text-slate-600">{metric.detail}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded border border-line bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-ink">Order volume</h2>
                <p className="mt-1 text-sm text-slate-600">Daily orders vs. active discrepancies.</p>
              </div>
              <ArrowUpRight className="text-harbor" size={20} aria-hidden="true" />
            </div>
            <div className="mt-8 flex h-64 items-end gap-3">
              {trend.map((item) => (
                <div key={item.label} className="flex h-full flex-1 flex-col justify-end gap-2">
                  <div className="flex items-end justify-center gap-1">
                    <div
                      className="w-1/2 rounded-t bg-harbor"
                      style={{ height: `${(item.orders / maxOrders) * 100}%` }}
                    />
                    <div className="w-1/3 rounded-t bg-marigold" style={{ height: `${item.alerts * 8}%` }} />
                  </div>
                  <div className="text-center text-xs font-medium text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <ActionCard icon={<PackageCheck size={20} />} title="Cycle count" detail="SKU-TR-220 under reorder point in LAX-2." />
            <ActionCard icon={<Truck size={20} />} title="Shipment review" detail="DHL scan gap needs carrier follow-up." />
            <ActionCard icon={<AlertTriangle size={20} />} title="High severity" detail="3 alerts are open and unassigned to a resolution date." />
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <section>
            <h2 className="mb-3 text-base font-semibold text-ink">Recent orders</h2>
            <DataTable
              rows={orders}
              columns={[
                { key: "id", label: "Order" },
                { key: "customer", label: "Customer" },
                { key: "status", label: "Status" },
                { key: "total", label: "Total", align: "right", render: (row) => currency(row.total as number) }
              ]}
            />
          </section>
          <section>
            <h2 className="mb-3 text-base font-semibold text-ink">Discrepancy alerts</h2>
            <DataTable
              rows={discrepancyAlerts}
              columns={[
                { key: "id", label: "Alert" },
                { key: "type", label: "Type" },
                { key: "severity", label: "Severity" },
                { key: "status", label: "Status" }
              ]}
            />
          </section>
        </div>
      </section>
    </main>
  );
}

function ActionCard({ icon, title, detail }: { icon: ReactNode; title: string; detail: string }) {
  return (
    <div className="rounded border border-line bg-white p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded bg-cyan-50 text-harbor">{icon}</span>
        <h2 className="text-base font-semibold text-ink">{title}</h2>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{detail}</p>
    </div>
  );
}

function currency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}
