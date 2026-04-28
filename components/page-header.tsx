import { Search, SlidersHorizontal } from "lucide-react";

export function PageHeader({
  title,
  description,
  action = "Export"
}: {
  title: string;
  description: string;
  action?: string;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-line bg-white px-5 py-5 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-normal text-ink">{title}</h1>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label className="flex h-10 min-w-64 items-center gap-2 rounded border border-line bg-white px-3 text-sm text-slate-500">
          <Search size={17} aria-hidden="true" />
          <input className="w-full border-0 bg-transparent outline-none" placeholder="Search sample data" />
        </label>
        <button className="inline-flex h-10 items-center justify-center gap-2 rounded border border-line bg-white px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          <SlidersHorizontal size={17} aria-hidden="true" />
          {action}
        </button>
      </div>
    </div>
  );
}
