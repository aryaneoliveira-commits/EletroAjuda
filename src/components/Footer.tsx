import React from 'react';
import { ViewType } from '../types';
import { Zap, ShieldAlert, Heart, BookOpen, Calculator, Cpu, HelpCircle, CheckSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 mt-auto">
      {/* Safety highlight strip */}
      <div className="bg-amber-950/40 border-b border-amber-800/40 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-200/90">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Aviso de Segurança Elétrica (NR-10 Didática):</strong> Todos os exemplos e experimentos propostos utilizam extra-baixa tensão de segurança (pilhas, fontes de bancada de 5V/12V e Arduino).
            </span>
          </div>
          <span className="text-amber-300 font-medium whitespace-nowrap">
            Nunca realize experimentos em tomadas ou rede energizada sem supervisão técnica!
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-600 text-white">
                <Zap className="w-5 h-5 fill-sky-200" />
              </div>
              <span className="text-lg font-bold">Eletro<span className="text-cyan-400">Ajuda</span></span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Plataforma educacional desenvolvida especialmente para apoiar estudantes do Ensino Médio Integrado e Cursos Técnicos em Eletroeletrônica, Eletrotécnica e Mecatrônica.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs bg-slate-900 border border-slate-800 text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Ambiente de Aprendizado 100% Gratuito
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Navegação Rápida</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-sky-400" /> Página Inicial
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('modules')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-sky-400" /> 10 Módulos de Aprendizagem
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculators')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5 text-sky-400" /> Calculadoras Elétricas Passo a Passo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('catalog')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-sky-400" /> Catálogo Visual de Componentes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('exercises')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-sky-400" /> Desafios & Questões Interativas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('qna')} className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-sky-400" /> Pergunte ao EletroAjuda
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Ferramentas & Calculadoras */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Calculadoras Incluídas</h4>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Lei de Ohm (Tensão, Corrente e Resistência)
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Potência Elétrica (P = V·I, R·I², V²/R)
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Resistores em Série (Req = R1 + R2 + ...)
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Resistores em Paralelo (1/Req e R1·R2/(R1+R2))
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Código de Cores de Resistores (4 e 5 Faixas)
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Resistor Limitador de Corrente para LED
              </li>
            </ul>
          </div>

          {/* Col 4: Normas e Referências Técnicas */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Diretrizes Educacionais</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Conteúdos alinhados às diretrizes curriculares nacionais de Educação Profissional e Tecnológica (MEC) e às normas técnicas <strong>ABNT NBR 5410</strong> e <strong>NR-10</strong> (Segurança em Instalações e Serviços em Eletricidade).
            </p>
            <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
              <span className="text-cyan-400 font-semibold block mb-0.5">Nota de Transparência:</span>
              O assistente &quot;Pergunte ao EletroAjuda&quot; opera em modo com base didática demonstrativa estruturada, fornecendo respostas tecnicamente validadas e imediatas.
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} EletroAjuda. Todos os direitos reservados. Feito com dedicação para a educação técnica brasileira.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para futuros técnicos e engenheiros eletricistas.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
