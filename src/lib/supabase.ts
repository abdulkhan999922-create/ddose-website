import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Brand {
  id: string;
  name: string;
  dose: string;
  form: string;
  price_range: string;
  is_recommended: boolean;
  display_order: number;
  created_at: string;
}

export interface ContactSubmission {
  name: string;
  question: string;
  blood_report_values?: string;
}
