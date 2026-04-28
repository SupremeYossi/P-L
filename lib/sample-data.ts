export type StatusTone = "good" | "warning" | "danger" | "neutral" | "info";

export const orders = [
  { id: "ORD-10491", customer: "Atlas Supply", channel: "Shopify", status: "Ready", total: 1840, orderedAt: "2026-04-28" },
  { id: "ORD-10490", customer: "Northstar Labs", channel: "Amazon", status: "Hold", total: 620, orderedAt: "2026-04-28" },
  { id: "ORD-10489", customer: "Harbor Home", channel: "Wholesale", status: "Packed", total: 4210, orderedAt: "2026-04-27" },
  { id: "ORD-10488", customer: "Fieldline Co.", channel: "Walmart", status: "Shipped", total: 960, orderedAt: "2026-04-27" }
];

export const skus = [
  { sku: "SKU-AX-100", name: "Axis Carry Case", category: "Accessories", status: "Active", unitCost: 12.4 },
  { sku: "SKU-TR-220", name: "Trail Sensor Kit", category: "Electronics", status: "Active", unitCost: 49.8 },
  { sku: "SKU-BX-410", name: "Boxed Filter Pack", category: "Consumables", status: "Review", unitCost: 7.15 },
  { sku: "SKU-LM-031", name: "Lumen Mount", category: "Hardware", status: "Retiring", unitCost: 18.9 }
];

export const listings = [
  { id: "LST-8842", sku: "SKU-AX-100", channel: "Shopify", title: "Axis Carry Case - Black", status: "Live", price: 34 },
  { id: "LST-8841", sku: "SKU-TR-220", channel: "Amazon", title: "Trail Sensor Kit", status: "Live", price: 119 },
  { id: "LST-8839", sku: "SKU-BX-410", channel: "Walmart", title: "Replacement Filter Pack", status: "Suppressed", price: 22 },
  { id: "LST-8836", sku: "SKU-LM-031", channel: "Wholesale", title: "Lumen Mount Bracket", status: "Draft", price: 48 }
];

export const inventory = [
  { sku: "SKU-AX-100", warehouse: "PHL-1", available: 420, reserved: 82, reorderPoint: 180 },
  { sku: "SKU-TR-220", warehouse: "LAX-2", available: 86, reserved: 40, reorderPoint: 100 },
  { sku: "SKU-BX-410", warehouse: "DFW-1", available: 1210, reserved: 218, reorderPoint: 500 },
  { sku: "SKU-LM-031", warehouse: "PHL-1", available: 34, reserved: 12, reorderPoint: 75 }
];

export const shipments = [
  { id: "SHP-5918", orderId: "ORD-10488", carrier: "UPS", status: "In transit", eta: "2026-04-29" },
  { id: "SHP-5917", orderId: "ORD-10487", carrier: "FedEx", status: "Delivered", eta: "2026-04-27" },
  { id: "SHP-5915", orderId: "ORD-10483", carrier: "DHL", status: "Delayed", eta: "2026-04-30" },
  { id: "SHP-5913", orderId: "ORD-10480", carrier: "USPS", status: "Label created", eta: "2026-05-01" }
];

export const costs = [
  { id: "CST-3301", category: "Freight", vendor: "UPS", amount: 2840, period: "Apr 2026" },
  { id: "CST-3298", category: "Storage", vendor: "PHL-1 3PL", amount: 1790, period: "Apr 2026" },
  { id: "CST-3293", category: "Marketplace fees", vendor: "Amazon", amount: 3920, period: "Apr 2026" },
  { id: "CST-3287", category: "Packaging", vendor: "PackRight", amount: 640, period: "Apr 2026" }
];

export const discrepancyAlerts = [
  { id: "ALT-2104", type: "Inventory mismatch", severity: "High", owner: "Warehouse", status: "Open", detectedAt: "2026-04-28 09:20" },
  { id: "ALT-2103", type: "Listing price drift", severity: "Medium", owner: "Marketplace", status: "Investigating", detectedAt: "2026-04-28 08:05" },
  { id: "ALT-2101", type: "Shipment scan gap", severity: "High", owner: "Logistics", status: "Open", detectedAt: "2026-04-27 16:45" },
  { id: "ALT-2099", type: "Cost variance", severity: "Low", owner: "Finance", status: "Resolved", detectedAt: "2026-04-27 11:10" }
];

export const statusTone: Record<string, StatusTone> = {
  Active: "good",
  Delivered: "good",
  Live: "good",
  Packed: "info",
  Ready: "info",
  Shipped: "good",
  "In transit": "info",
  "Label created": "neutral",
  Draft: "neutral",
  Review: "warning",
  Retiring: "warning",
  Suppressed: "danger",
  Delayed: "danger",
  Hold: "warning",
  High: "danger",
  Medium: "warning",
  Low: "neutral",
  Open: "danger",
  Investigating: "warning",
  Resolved: "good"
};

export const metrics = [
  { label: "Open orders", value: "128", detail: "+14 today" },
  { label: "Fill rate", value: "94.2%", detail: "2.1 pts under target" },
  { label: "Inventory value", value: "$428K", detail: "Across 3 warehouses" },
  { label: "Open alerts", value: "11", detail: "3 high severity" }
];

export const trend = [
  { label: "Mon", orders: 82, alerts: 5 },
  { label: "Tue", orders: 96, alerts: 8 },
  { label: "Wed", orders: 75, alerts: 4 },
  { label: "Thu", orders: 114, alerts: 7 },
  { label: "Fri", orders: 128, alerts: 11 }
];
