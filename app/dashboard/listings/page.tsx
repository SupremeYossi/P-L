import { DataTable } from "@/components/data-table";
import { PageHeader } from "@/components/page-header";
import { listings } from "@/lib/sample-data";

export default function ListingsPage() {
  return (
    <main>
      <PageHeader title="Listings" description="Track channel catalog health, price alignment, and suppressed listings." />
      <section className="p-5 sm:p-7">
        <DataTable
          rows={listings}
          columns={[
            { key: "id", label: "Listing" },
            { key: "sku", label: "SKU" },
            { key: "channel", label: "Channel" },
            { key: "title", label: "Title" },
            { key: "status", label: "Status" },
            { key: "price", label: "Price", align: "right", render: (row) => currency(row.price as number) }
          ]}
        />
      </section>
    </main>
  );
}

function currency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}
