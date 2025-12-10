import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://aftnevcikbxuxankkybh.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmdG5ldmNpa2J4dXhhbmtreWJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1OTU1MjQsImV4cCI6MjA4MDE3MTUyNH0.SSf1bLw138F9MaR0qQKFuvs097N1cTSiSQSU_sXe4I8";
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
export default supabase;