import { DataTable } from "@/components/data-table";
import { PageHeader } from "@/components/page-header";
import { inventory } from "@/lib/sample-data";

export default function InventoryPage() {
  return (
    <main>
      <PageHeader title="Inventory" description="Review available, reserved, and reorder exposure by warehouse." />
      <section className="p-5 sm:p-7">
        <DataTable
          rows={inventory}
          columns={[
            { key: "sku", label: "SKU" },
            { key: "warehouse", label: "Warehouse" },
            { key: "available", label: "Available", align: "right" },
            { key: "reserved", label: "Reserved", align: "right" },
            { key: "reorderPoint", label: "Reorder point", align: "right" },
            {
              key: "coverage",
              label: "Coverage",
              render: (row) => (Number(row.available) < Number(row.reorderPoint) ? "Below reorder" : "Healthy")
            }
          ]}
        />
      </section>
    </main>
  );
}
