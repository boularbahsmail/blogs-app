import { createClient } from "@supabase/supabase-js";

// Replace these with your actual Supabase URL and Key
const supabaseUrl: string | any = "https://mfnkeebawzkpazhcpbad.supabase.co";
const supabaseKey: string | any =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbmtlZWJhd3prcGF6aGNwYmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyODg1NTMsImV4cCI6MjAzMTg2NDU1M30.BLo2GsT0SzXpJxlFptbG54-TaLG1sVMjuTnogUAt5NY";

// Initialize the Supabase client
export const supabase: any = createClient(supabaseUrl, supabaseKey);
