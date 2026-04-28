import { DataTable } from "@/components/data-table";
import { PageHeader } from "@/components/page-header";
import { skus } from "@/lib/sample-data";

export default function SkusPage() {
  return (
    <main>
      <PageHeader title="SKUs" description="Manage product master data, costing, lifecycle status, and categories." />
      <section className="p-5 sm:p-7">
        <DataTable
          rows={skus}
          columns={[
            { key: "sku", label: "SKU" },
            { key: "name", label: "Name" },
            { key: "category", label: "Category" },
            { key: "status", label: "Status" },
            { key: "unitCost", label: "Unit cost", align: "right", render: (row) => currency(row.unitCost as number) }
          ]}
        />
      </section>
    </main>
  );
}

function currency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}
