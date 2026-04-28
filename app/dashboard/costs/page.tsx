import { DataTable } from "@/components/data-table";
import { PageHeader } from "@/components/page-header";
import { costs } from "@/lib/sample-data";

export default function CostsPage() {
  return (
    <main>
      <PageHeader title="Costs" description="Compare operating cost categories, vendors, and accounting periods." />
      <section className="p-5 sm:p-7">
        <DataTable
          rows={costs}
          columns={[
            { key: "id", label: "Cost ID" },
            { key: "category", label: "Category" },
            { key: "vendor", label: "Vendor" },
            { key: "period", label: "Period" },
            { key: "amount", label: "Amount", align: "right", render: (row) => currency(row.amount as number) }
          ]}
        />
      </section>
    </main>
  );
}

function currency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}
