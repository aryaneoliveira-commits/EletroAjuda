import React from 'react';
import { ViewType } from '../types';
import { useProgress, ALL_BADGES } from '../context/ProgressContext';
import { modulesData } from '../data/modulesData';
import { 
  Award, 
  Zap, 
  CheckCircle2, 
  Circle, 
  Clock, 
  ArrowRight, 
  RotateCcw, 
  ShieldCheck, 
  Trophy, 
  BookOpen, 
  CheckSquare,
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface StudentDashboardViewProps {
  onNavigate: (view: ViewType, moduleId?: number) => void;
}

export const StudentDashboardView: React.FC<StudentDashboardViewProps> = ({ onNavigate }) => {
  const { 
    progress, 
    overallPercentage, 
    markModuleComplete, 
    unmarkModuleComplete, 
    resetProgress 
  } = useProgress();

  const nextModule = modulesData.find(m => !progress.completedModules.includes(m.id)) || modulesData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full mb-2">
            <Award className="w-3.5 h-3.5" />
            Área Pessoal do Estudante
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Painel de Desempenho e Progresso
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Seu histórico de estudos, exercícios, medalhas e pontuação salvos automaticamente no navegador.
          </p>
        </div>

        <button
          onClick={resetProgress}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-rose-300 text-slate-500 hover:text-rose-600 text-xs font-semibold hover:bg-rose-50/50 transition-colors self-start sm:self-auto"
          title="Zerar dados locais"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Zerar Progresso Local
        </button>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Points */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Pontuação Acumulada</span>
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          <div className="text-3xl font-black text-slate-900">{progress.totalPoints} XP</div>
          <p className="text-[11px] text-slate-400">Ganhe +100 XP por aula e +25 XP por questão</p>
        </div>

        {/* Modules completed */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Módulos Concluídos</span>
            <BookOpen className="w-4 h-4 text-sky-600" />
          </div>
          <div className="text-3xl font-black text-slate-900">
            {progress.completedModules.length} <span className="text-lg font-bold text-slate-400">/ 10</span>
          </div>
          <p className="text-[11px] text-slate-400">{10 - progress.completedModules.length} módulos restantes</p>
        </div>

        {/* General Progress */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Progresso Geral</span>
            <span className="text-xs font-bold text-cyan-600">{overallPercentage}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200 my-2">
            <div
              className="bg-gradient-to-r from-sky-500 to-cyan-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${overallPercentage}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-400">Com base nas 10 aulas teóricas</p>
        </div>

        {/* Badges Unlocked */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Conquistas & Medalhas</span>
            <Trophy className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-3xl font-black text-slate-900">
            {progress.unlockedBadges.length} <span className="text-lg font-bold text-slate-400">/ {ALL_BADGES.length}</span>
          </div>
          <p className="text-[11px] text-slate-400">Desbloqueie concluindo metas</p>
        </div>
      </div>

      {/* Continue Learning Fast Shortcut */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-sky-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg border border-sky-900">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
            Atalho Rápido para Continuar Estudando
          </span>
          <h3 className="text-xl font-bold text-white">
            {nextModule.title}
          </h3>
          <p className="text-xs text-slate-300">
            {nextModule.subtitle}
          </p>
        </div>

        <button
          onClick={() => onNavigate('module-detail', nextModule.id)}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
        >
          <span>Retomar Estudos</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Badges Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            Galeria de Conquistas do Técnico
          </h2>
          <span className="text-xs text-slate-500">
            {progress.unlockedBadges.length} de {ALL_BADGES.length} conquistadas
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALL_BADGES.map(badge => {
            const isUnlocked = progress.unlockedBadges.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                  isUnlocked
                    ? 'bg-amber-50/40 border-amber-300 shadow-sm'
                    : 'bg-slate-50/60 border-slate-200 opacity-60'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isUnlocked
                      ? 'bg-amber-100 text-amber-700 shadow-sm'
                      : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  <Award className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-slate-900">{badge.title}</h4>
                    {isUnlocked && (
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">
                        Desbloqueado
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modules Progress Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sky-600" />
              Módulos Estudados & Checklist
            </h2>
            <p className="text-xs text-slate-500">Acompanhe seu avanço individual em cada aula do curso.</p>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {modulesData.map(mod => {
            const isCompleted = progress.completedModules.includes(mod.id);
            return (
              <div
                key={mod.id}
                className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/60 px-2 rounded-xl transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <button
                    onClick={() => {
                      if (isCompleted) unmarkModuleComplete(mod.id);
                      else markModuleComplete(mod.id);
                    }}
                    className="mt-0.5 sm:mt-0 p-1 text-slate-400 hover:text-emerald-600 transition-colors"
                    title={isCompleted ? 'Desmarcar conclusão' : 'Marcar como concluído'}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 hover:text-slate-500" />
                    )}
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900">{mod.title}</span>
                      <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded font-medium">
                        {mod.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{mod.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="text-[11px] text-slate-400 mr-2 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {mod.readTime}
                  </span>
                  <button
                    onClick={() => onNavigate('module-detail', mod.id)}
                    className="px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold transition-colors"
                  >
                    Estudar Aula
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Privacy & Storage note */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-500 flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>
          <strong>Privacidade Total:</strong> Todo o seu progresso fica armazenado localmente em seu navegador (localStorage). Nenhuma informação pessoal ou cadastro obrigatório é exigido.
        </span>
      </div>
    </div>
  );
};
