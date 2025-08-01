// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://mqnfqjnzjvyqhuuqnyuj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbmZxam56anZ5cWh1dXFueXVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MTQyNTYsImV4cCI6MjA2OTI5MDI1Nn0.BECxx67Xrc5TbqU5E-UNVzMCJWhnOxdv3yUqo9g9YIw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});