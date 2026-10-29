import React, { useState } from 'react';
import { ViewType } from '../types';
import { useProgress } from '../context/ProgressContext';
import { 
  Zap, 
  BookOpen, 
  Calculator, 
  Cpu, 
  HelpCircle, 
  CheckSquare, 
  Award, 
  Menu, 
  X,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType, moduleId?: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { progress, overallPercentage } = useProgress();

  const navItems: { label: string; view: ViewType; icon: React.ReactNode }[] = [
    { label: 'Início', view: 'home', icon: <Zap className="w-4 h-4" /> },
    { label: 'Aulas & Módulos', view: 'modules', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Calculadoras', view: 'calculators', icon: <Calculator className="w-4 h-4" /> },
    { label: 'Componentes', view: 'catalog', icon: <Cpu className="w-4 h-4" /> },
    { label: 'Exercícios', view: 'exercises', icon: <CheckSquare className="w-4 h-4" /> },
    { label: 'Dúvidas', view: 'qna', icon: <HelpCircle className="w-4 h-4" /> },
    { label: 'Meu Progresso', view: 'dashboard', icon: <Award className="w-4 h-4" /> },
  ];

  const handleNavClick = (view: ViewType) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-sky-900/60 text-white shadow-lg backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-400 text-white shadow-electric group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 fill-sky-200 text-white" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-300"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white">Eletro<span className="text-cyan-400">Ajuda</span></span>
                <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">Técnico</span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Assistente de Estudos em Eletroeletrônica</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map(item => {
              const isActive = currentView === item.view || (item.view === 'modules' && currentView === 'module-detail');
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-sky-600/20 text-cyan-300 border border-sky-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <span className={isActive ? 'text-cyan-400' : 'text-slate-400'}>{item.icon}</span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Status (XP & Progress) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('dashboard')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 transition-colors"
              title="Ver painel de progresso"
            >
              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Zap className="w-3.5 h-3.5 fill-amber-400" />
                <span>{progress.totalPoints} XP</span>
              </div>
              <span className="text-slate-600">|</span>
              <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <div className="w-12 bg-slate-700 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-sky-500 to-cyan-400 h-1.5 rounded-full transition-all duration-500" 
                    style={{ width: `${overallPercentage}%` }}
                  />
                </div>
                <span>{overallPercentage}%</span>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('dashboard')}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-xs text-amber-400 font-bold"
            >
              <Zap className="w-3 h-3 fill-amber-400" />
              <span>{progress.totalPoints} XP</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map(item => {
            const isActive = currentView === item.view || (item.view === 'modules' && currentView === 'module-detail');
            return (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-sky-600/30 text-cyan-300 border border-sky-500/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span className={isActive ? 'text-cyan-400' : 'text-slate-400'}>{item.icon}</span>
                {item.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>NR-10 & Circuitos Didáticos</span>
            </div>
            <span>{progress.completedModules.length} de 10 aulas</span>
          </div>
        </div>
      )}
    </header>
  );
};
