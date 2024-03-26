
import { createClient } from '@supabase/supabase-js'
console.log(import.meta.env.REACT_APP_SUPABASE_URL)
const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY
// const supabaseUrl = "https://tmqavgnyvxxeyibweiox.supabase.co"
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtcWF2Z255dnh4ZXlpYndlaW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2MzU4OTYsImV4cCI6MjAxNjIxMTg5Nn0.S-VIk_rcd4-uR4F0XPInY7HAYUxuODHjnmeYvuEqwVI"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase