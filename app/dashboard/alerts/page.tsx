import { DataTable } from "@/components/data-table";
import { PageHeader } from "@/components/page-header";
import { discrepancyAlerts } from "@/lib/sample-data";

export default function AlertsPage() {
  return (
    <main>
      <PageHeader title="Discrepancy Alerts" description="Surface mismatches between orders, listings, inventory, shipments, and costs." />
      <section className="p-5 sm:p-7">
        <DataTable
          rows={discrepancyAlerts}
          columns={[
            { key: "id", label: "Alert" },
            { key: "type", label: "Type" },
            { key: "severity", label: "Severity" },
            { key: "owner", label: "Owner" },
            { key: "status", label: "Status" },
            { key: "detectedAt", label: "Detected" }
          ]}
        />
      </section>
    </main>
  );
}
