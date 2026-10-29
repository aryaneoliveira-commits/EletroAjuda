import React from 'react';
import { ViewType } from '../types';
import { useProgress } from '../context/ProgressContext';
import { modulesData } from '../data/modulesData';
import { 
  Zap, 
  BookOpen, 
  Calculator, 
  Cpu, 
  CheckSquare, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  HelpCircle,
  PlayCircle
} from 'lucide-react';
import { OhmTriangleWidget } from '../components/OhmTriangleWidget';
import { SafetyAlertBanner } from '../components/SafetyAlertBanner';

interface HomeViewProps {
  onNavigate: (view: ViewType, moduleId?: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const { progress, overallPercentage } = useProgress();

  // Find continue module
  const nextModuleId = progress.completedModules.length < 10
    ? (modulesData.find(m => !progress.completedModules.includes(m.id))?.id || 1)
    : 1;
  const continueModule = modulesData.find(m => m.id === nextModuleId) || modulesData[0];

  return (
    <div className="space-y-14 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-sky-950/80">
        {/* Glow & Circuit Background */}
        <div className="absolute inset-0 circuit-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/80 border border-sky-800 text-cyan-300 text-xs font-semibold shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Plataforma Aberta para Alunos do Ensino Médio & Técnico
          </div>

          {/* Mandatory Main Title and Subtitle */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Domine a Eletroeletrônica de forma <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-200">simples e prática.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
            Aprenda conceitos, resolva cálculos e teste seus conhecimentos em um só lugar.
          </p>

          {/* Mandatory CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => onNavigate('modules')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-bold text-sm shadow-electric hover:shadow-electric-lg transition-all transform hover:-translate-y-0.5"
            >
              <PlayCircle className="w-5 h-5" />
              Começar a estudar
            </button>

            <button
              onClick={() => onNavigate('exercises')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700/90 text-white font-semibold text-sm border border-slate-700 shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <CheckSquare className="w-5 h-5 text-cyan-400" />
              Resolver exercícios
            </button>

            <button
              onClick={() => onNavigate('calculators')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-sky-900 shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <Calculator className="w-5 h-5 text-sky-400" />
              Abrir calculadoras
            </button>
          </div>

          {/* Stats quick bar */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-center border-t border-slate-800/80">
            <div>
              <div className="text-2xl font-black text-white">10</div>
              <div className="text-xs text-slate-400">Módulos Completos</div>
            </div>
            <div>
              <div className="text-2xl font-black text-cyan-400">6+</div>
              <div className="text-xs text-slate-400">Calculadoras Interativas</div>
            </div>
            <div>
              <div className="text-2xl font-black text-sky-400">16+</div>
              <div className="text-xs text-slate-400">Componentes Detalhados</div>
            </div>
            <div>
              <div className="text-2xl font-black text-emerald-400">30+</div>
              <div className="text-xs text-slate-400">Exercícios & Desafios</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        {/* Mandatory Quick Cards: Lei de Ohm, Circuitos elétricos, Componentes eletrônicos, Exercícios */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Acesso Rápido aos Pilares</h2>
              <p className="text-xs text-slate-500">Explore diretamente os tópicos centrais de estudos</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Lei de Ohm */}
            <div
              onClick={() => onNavigate('module-detail', 3)}
              className="group cursor-pointer bg-white p-5 rounded-2xl border border-slate-200/90 hover:border-sky-400 hover:shadow-electric transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  Lei de Ohm
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Relação fundamental entre Tensão, Corrente e Resistência. 1ª e 2ª Leis com o triângulo mnemônico.
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600">
                <span>Acessar Módulo 3</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Circuitos elétricos */}
            <div
              onClick={() => onNavigate('module-detail', 5)}
              className="group cursor-pointer bg-white p-5 rounded-2xl border border-slate-200/90 hover:border-cyan-400 hover:shadow-electric transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  Circuitos Elétricos
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Associação em série e em paralelo, Leis de Kirchhoff (LKC e LKT), divisor de tensão e resistências equivalentes.
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-cyan-600">
                <span>Acessar Módulo 5</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Componentes eletrônicos */}
            <div
              onClick={() => onNavigate('catalog')}
              className="group cursor-pointer bg-white p-5 rounded-2xl border border-slate-200/90 hover:border-indigo-400 hover:shadow-electric transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Componentes Eletrônicos
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Biblioteca visual de resistores, diodos, capacitores, LEDs, transistores BJT/MOSFET e circuitos integrados.
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
                <span>Ver Catálogo Visual</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: Exercícios */}
            <div
              onClick={() => onNavigate('exercises')}
              className="group cursor-pointer bg-white p-5 rounded-2xl border border-slate-200/90 hover:border-emerald-400 hover:shadow-electric transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Exercícios & Desafios
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Quizzes interativos com feedback imediato, explicações passo a passo, níveis fácil a avançado e XP.
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-600">
                <span>Praticar Questões</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Continue Aprendendo */}
        <section className="bg-gradient-to-br from-slate-900 to-sky-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-sky-900/60 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-cyan-500/10 to-transparent pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                Continue Aprendendo
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {continueModule.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {continueModule.subtitle}
              </p>

              {/* Progress status */}
              <div className="pt-2 flex items-center gap-4 text-xs text-slate-300">
                <span>Progresso geral do curso:</span>
                <div className="w-32 bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                  <div
                    className="bg-gradient-to-r from-sky-400 to-cyan-300 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${overallPercentage}%` }}
                  />
                </div>
                <span className="font-bold text-cyan-300">{overallPercentage}% ({progress.completedModules.length}/10 concluídos)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => onNavigate('module-detail', continueModule.id)}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-md transition-all"
              >
                Retomar aula agora
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('modules')}
                className="flex items-center justify-center px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
              >
                Ver todos os 10 módulos
              </button>
            </div>
          </div>
        </section>

        {/* Interactive Feature Spotlight: Triângulo de Ohm */}
        <section className="space-y-4">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Ferramenta Interativa em Destaque</span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Experimente a Lei de Ohm em Tempo Real</h2>
            <p className="text-xs text-slate-500 mt-1">Interaja com o triângulo mnemônico para entender como as equações são isoladas.</p>
          </div>
          <OhmTriangleWidget />
        </section>

        {/* Benefits of the Platform */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-extrabold text-slate-900">Por que o EletroAjuda acelera seu aprendizado?</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
              Projetado especificamente para superar as maiores dificuldades dos alunos do curso Técnico em Eletroeletrônica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Cálculos Passo a Passo Reais</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Chega de fórmulas decoradas sem sentido. Nossas calculadoras mostram a fórmula matemática, o passo a passo com unidades e validação rigorosa de dados.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Catálogo com Símbolos e Pinout</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Aprenda a reconhecer resistores, diodos, transistores BJT/MOSFET e Arduino tanto na bancada real quanto nos esquemas esquemáticos de prova.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Tire Dúvidas Imediatamente</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Área &quot;Pergunte ao EletroAjuda&quot; com respostas didáticas validadas, analogias práticas e fórmulas claras para as 35+ dúvidas mais frequentes de laboratório.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Education Section */}
        <section>
          <SafetyAlertBanner />
        </section>

      </div>
    </div>
  );
};
