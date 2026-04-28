create table if not exists public.orders (
  id text primary key,
  customer text not null,
  channel text not null,
  status text not null,
  total numeric(12, 2) not null,
  ordered_at date not null
);

create table if not exists public.skus (
  sku text primary key,
  name text not null,
  category text not null,
  status text not null,
  unit_cost numeric(12, 2) not null
);

create table if not exists public.listings (
  id text primary key,
  sku text not null references public.skus(sku),
  channel text not null,
  title text not null,
  status text not null,
  price numeric(12, 2) not null
);

create table if not exists public.inventory (
  sku text not null references public.skus(sku),
  warehouse text not null,
  available integer not null,
  reserved integer not null,
  reorder_point integer not null,
  primary key (sku, warehouse)
);

create table if not exists public.shipments (
  id text primary key,
  order_id text not null references public.orders(id),
  carrier text not null,
  status text not null,
  eta date not null
);

create table if not exists public.costs (
  id text primary key,
  category text not null,
  vendor text not null,
  amount numeric(12, 2) not null,
  period text not null
);

create table if not exists public.discrepancy_alerts (
  id text primary key,
  type text not null,
  severity text not null,
  owner text not null,
  status text not null,
  detected_at timestamp with time zone not null
);
