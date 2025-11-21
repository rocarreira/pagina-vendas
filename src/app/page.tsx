"use client"

import { Camera, Clock, Mail, Users, Calendar, CheckCircle, Star, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
              <Camera className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                Para Fotógrafos Profissionais
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Transforme sua rotina fotográfica:{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Conheça o SnapFlow
              </span>{" "}
              e deixe a burocracia para trás!
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Gerencie suas tarefas e concentre-se no que realmente importa: capturar momentos inesquecíveis.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/auth">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Experimente Gratuitamente
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Ver Demonstração
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 pt-4">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>14 dias de garantia • Sem compromisso</span>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Text */}
      <section className="py-12 sm:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Se você é fotógrafo, sabe que o talento não é tudo. Entre atender clientes, criar orçamentos e organizar agendamentos, o tempo voa. O <strong className="text-purple-600 dark:text-purple-400">SnapFlow</strong> é a solução que você estava esperando! Com uma interface intuitiva e funcionalidades sob medida, você se tornará o mestre da sua própria agenda.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Benefícios que Facilitarão sua Vida
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar seu negócio fotográfico em um só lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Benefit 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-purple-500/50">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Geração Rápida de Orçamentos
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Crie orçamentos personalizados em minutos e impressione seus clientes com a agilidade!
                </p>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-500/50">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  E-mails Profissionais em Um Clique
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Com modelos prontos, basta personalizar e enviar. Menos rascunhos, mais atendimento!
                </p>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-purple-500/50">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Portfólio Atraente
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Mostre seu trabalho de forma elegante e organizada. Deixe que suas fotos falem por você.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 4 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-500/50">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Gerenciamento de Clientes
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Mantenha todas as informações de contato e histórico de serviços a um clique de distância.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 5 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-purple-500/50">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Agenda Inteligente
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Organize compromissos e receba lembretes automáticos. Nunca perca uma oportunidade!
                </p>
              </CardContent>
            </Card>

            {/* Benefit 6 - Extra visual balance */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-500/50">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Tudo Integrado
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Uma plataforma completa para todas as suas necessidades profissionais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Escolha o Plano Ideal para Você
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Planos flexíveis que se adaptam ao seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Plano Mensal */}
            <Card className="relative hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-purple-500/50">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Plano Mensal
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Ideal para começar
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-gray-900 dark:text-gray-100">9.99€</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">por mês</p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Geração de orçamentos ilimitados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Modelos de e-mail profissionais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Gerenciamento de clientes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Agenda inteligente</span>
                  </li>
                </ul>

                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                  onClick={() => {
                    // Estrutura pronta para integração com Keoto
                    window.location.href = '#checkout-keoto-mensal'
                  }}
                >
                  Começar Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Plano Semestral - Destaque */}
            <Card className="relative hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-purple-500 shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  MAIS POPULAR
                </span>
              </div>
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Plano Semestral
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Melhor custo-benefício
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-gray-900 dark:text-gray-100">39.99€</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">a cada 6 meses</p>
                  <p className="text-sm font-semibold text-green-600">Economize 33%</p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Tudo do plano mensal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Portfólio personalizado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Suporte prioritário</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Relatórios avançados</span>
                  </li>
                </ul>

                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                  onClick={() => {
                    // Estrutura pronta para integração com Keoto
                    window.location.href = '#checkout-keoto-semestral'
                  }}
                >
                  Começar Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>

            {/* Plano Anual */}
            <Card className="relative hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 hover:border-blue-500/50">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Plano Anual
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Máxima economia
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-gray-900 dark:text-gray-100">69.99€</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">por ano</p>
                  <p className="text-sm font-semibold text-green-600">Economize 42%</p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Tudo do plano semestral</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Armazenamento ilimitado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Suporte VIP 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Acesso antecipado a novidades</span>
                  </li>
                </ul>

                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                  onClick={() => {
                    // Estrutura pronta para integração com Keoto
                    window.location.href = '#checkout-keoto-anual'
                  }}
                >
                  Começar Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Todos os planos incluem 14 dias de garantia de reembolso
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              O Que Nossos Usuários Dizem
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Fotógrafos reais, resultados reais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "Com o SnapFlow, finalmente consegui organizar minha rotina. Agora, posso focar em fotografar sem me preocupar com a parte chata!"
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold">
                    CM
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-gray-100">Carla Mendes</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Fotógrafa de Retratos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "O programa reduziu meu tempo de burocracia pela metade! Recomendo para todos os fotógrafos."
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold">
                    RA
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-gray-100">Ricardo Alves</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Fotógrafo de Eventos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Pronto para dominar sua rotina fotográfica?
            </h2>
            <p className="text-lg sm:text-xl text-purple-100">
              Clique no botão abaixo e comece a usar o SnapFlow hoje mesmo!
            </p>
            <Link href="/auth">
              <Button 
                size="lg" 
                className="bg-white text-purple-700 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 text-lg px-8 py-6"
              >
                Experimente Gratuitamente!
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center justify-center gap-2 text-purple-100 pt-4">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Experimente sem compromisso! Se não ficar satisfeito dentro de 14 dias, devolveremos seu dinheiro!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-12 sm:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
              A hora é agora!
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Não deixe que a gestão prejudique sua paixão pela fotografia. Entre para a comunidade de fotógrafos que já transformaram suas rotinas com o <strong className="text-purple-600 dark:text-purple-400">SnapFlow</strong>. Faça parte dessa revolução!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-50 dark:bg-slate-950 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-purple-600" />
              <span className="font-bold text-gray-900 dark:text-gray-100">SnapFlow</span>
            </div>
            <p>© 2024 SnapFlow. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
