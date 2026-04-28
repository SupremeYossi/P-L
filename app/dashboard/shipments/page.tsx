import { DataTable } from "@/components/data-table";
import { PageHeader } from "@/components/page-header";
import { shipments } from "@/lib/sample-data";

export default function ShipmentsPage() {
  return (
    <main>
      <PageHeader title="Shipments" description="Monitor carrier handoffs, delivery dates, and delayed movements." />
      <section className="p-5 sm:p-7">
        <DataTable
          rows={shipments}
          columns={[
            { key: "id", label: "Shipment" },
            { key: "orderId", label: "Order" },
            { key: "carrier", label: "Carrier" },
            { key: "status", label: "Status" },
            { key: "eta", label: "ETA" }
          ]}
        />
      </section>
    </main>
  );
}
