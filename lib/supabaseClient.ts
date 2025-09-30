// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js"

// URL de tu proyecto Supabase
const SUPABASE_URL = "https://asyybwsvilcmpyvygnlf.supabase.co"

// Tu anon public key
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzeXlid3N2aWxjbXB5dnlnbmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxMjYyMTcsImV4cCI6MjA3NDcwMjIxN30.s3N1ZttnP0v8S6Y-_fAm6W8nB3LzikDfFXNR8nUa5TY"

// Inicializa el cliente Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
