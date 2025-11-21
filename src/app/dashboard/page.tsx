"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Camera, Users, Calendar, FileText, LogOut, Plus, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Profile = {
  id: string
  email: string
  full_name: string | null
  subscription_plan: string | null
  subscription_status: string | null
}

type Stats = {
  clients: number
  appointments: number
  quotes: number
}

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [stats, setStats] = useState<Stats>({ clients: 0, appointments: 0, quotes: 0 })

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/auth')
        return
      }

      // Buscar perfil do usuário
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (profileData) {
        setProfile(profileData)
      }

      // Buscar estatísticas
      const [clientsRes, appointmentsRes, quotesRes] = await Promise.all([
        supabase.from('clients').select('id', { count: 'exact', head: true }).eq('user_id', user.id),
        supabase.from('appointments').select('id', { count: 'exact', head: true }).eq('user_id', user.id),
        supabase.from('quotes').select('id', { count: 'exact', head: true }).eq('user_id', user.id),
      ])

      setStats({
        clients: clientsRes.count || 0,
        appointments: appointmentsRes.count || 0,
        quotes: quotesRes.count || 0,
      })
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg mx-auto animate-pulse">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-600 dark:text-gray-400">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">SnapFlow</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dashboard</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Olá, {profile?.full_name || 'Fotógrafo'}! 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Bem-vindo ao seu painel de controle fotográfico
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total de Clientes
              </CardTitle>
              <Users className="w-5 h-5 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.clients}</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Clientes cadastrados
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Agendamentos
              </CardTitle>
              <Calendar className="w-5 h-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.appointments}</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Sessões agendadas
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Orçamentos
              </CardTitle>
              <FileText className="w-5 h-5 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.quotes}</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Orçamentos criados
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Comece a gerenciar seu negócio fotográfico</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button
                className="h-auto py-6 flex flex-col gap-2 bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
              >
                <Plus className="w-6 h-6" />
                <span>Novo Cliente</span>
              </Button>
              <Button
                className="h-auto py-6 flex flex-col gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                <Plus className="w-6 h-6" />
                <span>Novo Agendamento</span>
              </Button>
              <Button
                className="h-auto py-6 flex flex-col gap-2 bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              >
                <Plus className="w-6 h-6" />
                <span>Novo Orçamento</span>
              </Button>
              <Button
                className="h-auto py-6 flex flex-col gap-2 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <TrendingUp className="w-6 h-6" />
                <span>Ver Relatórios</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Subscription Info */}
        <Card className="border-2 border-purple-500/20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>Seu Plano</span>
              <span className="text-sm font-normal px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                {profile?.subscription_plan === 'free' ? 'Gratuito' : 
                 profile?.subscription_plan === 'monthly' ? 'Mensal' :
                 profile?.subscription_plan === 'semestral' ? 'Semestral' :
                 profile?.subscription_plan === 'annual' ? 'Anual' : 'Trial'}
              </span>
            </CardTitle>
            <CardDescription>
              Status: {profile?.subscription_status === 'trial' ? 'Período de teste' : 
                       profile?.subscription_status === 'active' ? 'Ativo' : 'Inativo'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {profile?.subscription_plan === 'free' || profile?.subscription_status === 'trial' 
                ? 'Você está no período de teste. Faça upgrade para desbloquear todos os recursos!'
                : 'Obrigado por ser um membro premium do SnapFlow!'}
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              {profile?.subscription_plan === 'free' || profile?.subscription_status === 'trial'
                ? 'Fazer Upgrade'
                : 'Gerenciar Assinatura'}
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
