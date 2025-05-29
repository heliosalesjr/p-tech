import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://SUA-URL.supabase.co"; // Substitua pela sua
const supabaseAnonKey = "SUA-CHAVE-ANON"; // Copie do painel do projeto

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
