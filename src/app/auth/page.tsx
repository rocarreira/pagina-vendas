"use client"

import { useState } from "react"
import { Camera, Mail, Lock, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function AuthPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      if (isLogin) {
        // Login
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        })

        if (error) throw error

        // Redirecionar para dashboard
        router.push('/dashboard')
      } else {
        // Registro
        if (formData.password !== formData.confirmPassword) {
          throw new Error("As senhas não coincidem")
        }

        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.name,
            }
          }
        })

        if (error) throw error

        // Criar perfil do usuário
        if (data.user) {
          const { error: profileError } = await supabase
            .from('profiles')
            .insert({
              id: data.user.id,
              email: formData.email,
              name: formData.name
            })

          if (profileError) console.error('Erro ao criar perfil:', profileError)
        }

        // Redirecionar para dashboard
        router.push('/dashboard')
      }
    } catch (err: any) {
      setError(err.message || "Ocorreu um erro. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="w-full max-w-md relative">
        {/* Back to Home Link */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-white hover:text-purple-100 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para página inicial</span>
        </Link>

        <Card className="shadow-2xl border-0">
          <CardHeader className="space-y-4 text-center pb-6">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="space-y-2">
              <CardTitle className="text-2xl sm:text-3xl font-bold">
                {isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}
              </CardTitle>
              <CardDescription className="text-base">
                {isLogin 
                  ? "Entre para acessar sua conta SnapFlow" 
                  : "Comece sua jornada com o SnapFlow gratuitamente"}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Mensagem de erro */}
              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                  {error}
                </div>
              )}

              {/* Nome (apenas no registro) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Nome completo
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 h-11"
                      required={!isLogin}
                      disabled={loading}
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 h-11"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Senha */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 h-11"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Confirmar Senha (apenas no registro) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirmar senha
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="pl-10 h-11"
                      required={!isLogin}
                      disabled={loading}
                    />
                  </div>
                </div>
              )}

              {/* Esqueceu a senha (apenas no login) */}
              {isLogin && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
                    disabled={loading}
                  >
                    Esqueceu a senha?
                  </button>
                </div>
              )}

              {/* Botão de Submit */}
              <Button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
                disabled={loading}
              >
                {loading ? "Carregando..." : (isLogin ? "Entrar" : "Criar conta")}
              </Button>

              {/* Divisor */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">ou</span>
                </div>
              </div>

              {/* Toggle entre Login e Registro */}
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600">
                  {isLogin ? "Ainda não tem uma conta?" : "Já tem uma conta?"}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin)
                    setError(null)
                  }}
                  className="text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                  disabled={loading}
                >
                  {isLogin ? "Criar conta gratuitamente" : "Fazer login"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Trust Badge */}
        <div className="text-center mt-6 text-white text-sm">
          <p className="opacity-90">
            🔒 Seus dados estão seguros e protegidos
          </p>
        </div>
      </div>
    </div>
  )
}
