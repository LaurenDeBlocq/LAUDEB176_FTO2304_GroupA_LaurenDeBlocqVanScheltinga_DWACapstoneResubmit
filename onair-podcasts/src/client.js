import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://usoblofyaksrhhooaimp.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzb2Jsb2Z5YWtzcmhob29haW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNTEwMTQsImV4cCI6MjAxMzkyNzAxNH0.CzIIgW87jhhC7acvrblPdM3BeSihXUBJK-Cm_H3cdg4"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
