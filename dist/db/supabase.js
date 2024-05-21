"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
// Replace these with your actual Supabase URL and Key
const supabaseUrl = "https://mfnkeebawzkpazhcpbad.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbmtlZWJhd3prcGF6aGNwYmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyODg1NTMsImV4cCI6MjAzMTg2NDU1M30.BLo2GsT0SzXpJxlFptbG54-TaLG1sVMjuTnogUAt5NY";
// Initialize the Supabase client
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
//# sourceMappingURL=supabase.js.map