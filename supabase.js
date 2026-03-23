import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm"

const supabaseUrl = "https://yqxbwgxfhibbdkgglydw.supabase.co"
const supabaseKey = "sb_publishable_2yjmy16CcD7Vtn5ydaYkfw_b4CJyz2V"

export const supabase = createClient(supabaseUrl, supabaseKey)