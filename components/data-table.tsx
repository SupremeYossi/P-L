import type { ReactNode } from "react";
import { StatusBadge } from "@/components/status-badge";

export type Column<T> = {
  key: keyof T | string;
  label: string;
  align?: "left" | "right";
  render?: (row: T) => ReactNode;
};

export function DataTable<T extends object>({
  columns,
  rows
}: {
  columns: Column<T>[];
  rows: T[];
}) {
  return (
    <div className="overflow-hidden rounded border border-line bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-line text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={`whitespace-nowrap px-4 py-3 font-semibold ${
                    column.align === "right" ? "text-right" : "text-left"
                  }`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row, index) => (
              <tr key={String(rowKey(row, index))} className="hover:bg-slate-50">
                {columns.map((column) => {
                  const rawValue = row[column.key as keyof T] as unknown;
                  const content =
                    column.render?.(row) ??
                    (typeof rawValue === "string" && isStatusLike(column.label) ? (
                      <StatusBadge value={rawValue} />
                    ) : (
                      String(rawValue)
                    ));

                  return (
                    <td
                      key={String(column.key)}
                      className={`whitespace-nowrap px-4 py-3 text-slate-700 ${
                        column.align === "right" ? "text-right tabular-nums" : "text-left"
                      }`}
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function isStatusLike(label: string) {
  return ["Status", "Severity"].includes(label);
}

function rowKey<T extends object>(row: T, index: number) {
  const keyedRow = row as Record<string, unknown>;
  return keyedRow.id ?? keyedRow.sku ?? index;
}
