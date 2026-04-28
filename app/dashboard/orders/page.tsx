import { DataTable } from "@/components/data-table";
import { PageHeader } from "@/components/page-header";
import { orders } from "@/lib/sample-data";

export default function OrdersPage() {
  return (
    <main>
      <PageHeader title="Orders" description="Prioritize holds, packing flow, and channel demand." />
      <section className="p-5 sm:p-7">
        <DataTable
          rows={orders}
          columns={[
            { key: "id", label: "Order" },
            { key: "customer", label: "Customer" },
            { key: "channel", label: "Channel" },
            { key: "status", label: "Status" },
            { key: "orderedAt", label: "Ordered" },
            { key: "total", label: "Total", align: "right", render: (row) => currency(row.total as number) }
          ]}
        />
      </section>
    </main>
  );
}

function currency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}
