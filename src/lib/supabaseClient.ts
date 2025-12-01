import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uygkzfevnqeiptexlfhe.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5Z2t6ZmV2bnFlaXB0ZXhsZmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2MTMzNjIsImV4cCI6MjA4MDE4OTM2Mn0.nKno6JYzBf8jk5Bv7Uu1iEnEUXKy5o4U875yObUfTj4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
export default supabase;