import { clsx } from "clsx";
import { statusTone } from "@/lib/sample-data";

const toneClasses = {
  good: "border-emerald-200 bg-emerald-50 text-emerald-700",
  warning: "border-amber-200 bg-amber-50 text-amber-800",
  danger: "border-red-200 bg-red-50 text-red-700",
  neutral: "border-slate-200 bg-slate-50 text-slate-600",
  info: "border-cyan-200 bg-cyan-50 text-cyan-800"
};

export function StatusBadge({ value }: { value: string }) {
  const tone = statusTone[value] ?? "neutral";

  return (
    <span
      className={clsx(
        "inline-flex min-w-16 items-center justify-center rounded border px-2.5 py-1 text-xs font-semibold",
        toneClasses[tone]
      )}
    >
      {value}
    </span>
  );
}
