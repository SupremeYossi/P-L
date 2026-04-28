import { createClient } from "@supabase/supabase-js";

type Table<Row> = {
  Row: Row;
  Insert: Partial<Row>;
  Update: Partial<Row>;
  Relationships: [];
};

export type Database = {
  public: {
    Tables: {
      orders: Table<{
          id: string;
          customer: string;
          channel: string;
          status: string;
          total: number;
          ordered_at: string;
        }>;
      skus: Table<{
          sku: string;
          name: string;
          category: string;
          status: string;
          unit_cost: number;
        }>;
      listings: Table<{
          id: string;
          sku: string;
          channel: string;
          title: string;
          status: string;
          price: number;
        }>;
      inventory: Table<{
          sku: string;
          warehouse: string;
          available: number;
          reserved: number;
          reorder_point: number;
        }>;
      shipments: Table<{
          id: string;
          order_id: string;
          carrier: string;
          status: string;
          eta: string;
        }>;
      costs: Table<{
          id: string;
          category: string;
          vendor: string;
          amount: number;
          period: string;
        }>;
      discrepancy_alerts: Table<{
          id: string;
          type: string;
          severity: string;
          owner: string;
          status: string;
          detected_at: string;
        }>;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient<Database>(supabaseUrl!, supabaseAnonKey!)
  : null;
