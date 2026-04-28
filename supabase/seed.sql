insert into public.skus (sku, name, category, status, unit_cost) values
  ('SKU-AX-100', 'Axis Carry Case', 'Accessories', 'Active', 12.40),
  ('SKU-TR-220', 'Trail Sensor Kit', 'Electronics', 'Active', 49.80),
  ('SKU-BX-410', 'Boxed Filter Pack', 'Consumables', 'Review', 7.15),
  ('SKU-LM-031', 'Lumen Mount', 'Hardware', 'Retiring', 18.90)
on conflict (sku) do update set
  name = excluded.name,
  category = excluded.category,
  status = excluded.status,
  unit_cost = excluded.unit_cost;

insert into public.orders (id, customer, channel, status, total, ordered_at) values
  ('ORD-10491', 'Atlas Supply', 'Shopify', 'Ready', 1840.00, '2026-04-28'),
  ('ORD-10490', 'Northstar Labs', 'Amazon', 'Hold', 620.00, '2026-04-28'),
  ('ORD-10489', 'Harbor Home', 'Wholesale', 'Packed', 4210.00, '2026-04-27'),
  ('ORD-10488', 'Fieldline Co.', 'Walmart', 'Shipped', 960.00, '2026-04-27')
on conflict (id) do update set
  customer = excluded.customer,
  channel = excluded.channel,
  status = excluded.status,
  total = excluded.total,
  ordered_at = excluded.ordered_at;

insert into public.listings (id, sku, channel, title, status, price) values
  ('LST-8842', 'SKU-AX-100', 'Shopify', 'Axis Carry Case - Black', 'Live', 34.00),
  ('LST-8841', 'SKU-TR-220', 'Amazon', 'Trail Sensor Kit', 'Live', 119.00),
  ('LST-8839', 'SKU-BX-410', 'Walmart', 'Replacement Filter Pack', 'Suppressed', 22.00),
  ('LST-8836', 'SKU-LM-031', 'Wholesale', 'Lumen Mount Bracket', 'Draft', 48.00)
on conflict (id) do update set
  sku = excluded.sku,
  channel = excluded.channel,
  title = excluded.title,
  status = excluded.status,
  price = excluded.price;

insert into public.inventory (sku, warehouse, available, reserved, reorder_point) values
  ('SKU-AX-100', 'PHL-1', 420, 82, 180),
  ('SKU-TR-220', 'LAX-2', 86, 40, 100),
  ('SKU-BX-410', 'DFW-1', 1210, 218, 500),
  ('SKU-LM-031', 'PHL-1', 34, 12, 75)
on conflict (sku, warehouse) do update set
  available = excluded.available,
  reserved = excluded.reserved,
  reorder_point = excluded.reorder_point;

insert into public.shipments (id, order_id, carrier, status, eta) values
  ('SHP-5918', 'ORD-10488', 'UPS', 'In transit', '2026-04-29'),
  ('SHP-5917', 'ORD-10489', 'FedEx', 'Delivered', '2026-04-27'),
  ('SHP-5915', 'ORD-10490', 'DHL', 'Delayed', '2026-04-30'),
  ('SHP-5913', 'ORD-10491', 'USPS', 'Label created', '2026-05-01')
on conflict (id) do update set
  order_id = excluded.order_id,
  carrier = excluded.carrier,
  status = excluded.status,
  eta = excluded.eta;

insert into public.costs (id, category, vendor, amount, period) values
  ('CST-3301', 'Freight', 'UPS', 2840.00, 'Apr 2026'),
  ('CST-3298', 'Storage', 'PHL-1 3PL', 1790.00, 'Apr 2026'),
  ('CST-3293', 'Marketplace fees', 'Amazon', 3920.00, 'Apr 2026'),
  ('CST-3287', 'Packaging', 'PackRight', 640.00, 'Apr 2026')
on conflict (id) do update set
  category = excluded.category,
  vendor = excluded.vendor,
  amount = excluded.amount,
  period = excluded.period;

insert into public.discrepancy_alerts (id, type, severity, owner, status, detected_at) values
  ('ALT-2104', 'Inventory mismatch', 'High', 'Warehouse', 'Open', '2026-04-28 09:20:00-04'),
  ('ALT-2103', 'Listing price drift', 'Medium', 'Marketplace', 'Investigating', '2026-04-28 08:05:00-04'),
  ('ALT-2101', 'Shipment scan gap', 'High', 'Logistics', 'Open', '2026-04-27 16:45:00-04'),
  ('ALT-2099', 'Cost variance', 'Low', 'Finance', 'Resolved', '2026-04-27 11:10:00-04')
on conflict (id) do update set
  type = excluded.type,
  severity = excluded.severity,
  owner = excluded.owner,
  status = excluded.status,
  detected_at = excluded.detected_at;
