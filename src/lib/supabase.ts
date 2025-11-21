import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types para o banco de dados
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          subscription_plan: 'free' | 'monthly' | 'semestral' | 'annual' | null
          subscription_status: 'active' | 'inactive' | 'trial' | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          subscription_plan?: 'free' | 'monthly' | 'semestral' | 'annual' | null
          subscription_status?: 'active' | 'inactive' | 'trial' | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          subscription_plan?: 'free' | 'monthly' | 'semestral' | 'annual' | null
          subscription_status?: 'active' | 'inactive' | 'trial' | null
          created_at?: string
          updated_at?: string
        }
      }
      clients: {
        Row: {
          id: string
          user_id: string
          name: string
          email: string
          phone: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          email: string
          phone?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          email?: string
          phone?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      appointments: {
        Row: {
          id: string
          user_id: string
          client_id: string | null
          title: string
          description: string | null
          date: string
          time: string
          status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          client_id?: string | null
          title: string
          description?: string | null
          date: string
          time: string
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          client_id?: string | null
          title?: string
          description?: string | null
          date?: string
          time?: string
          status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
      }
      quotes: {
        Row: {
          id: string
          user_id: string
          client_id: string | null
          title: string
          description: string | null
          amount: number
          status: 'draft' | 'sent' | 'accepted' | 'rejected'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          client_id?: string | null
          title: string
          description?: string | null
          amount: number
          status?: 'draft' | 'sent' | 'accepted' | 'rejected'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          client_id?: string | null
          title?: string
          description?: string | null
          amount?: number
          status?: 'draft' | 'sent' | 'accepted' | 'rejected'
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
