import React, { useState } from 'react';
import { ViewType, LearningModule } from '../types';
import { modulesData } from '../data/modulesData';
import { useProgress } from '../context/ProgressContext';
import { 
  BookOpen, 
  CheckCircle2, 
  Circle, 
  Search, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  ArrowLeft, 
  Calculator, 
  CheckSquare, 
  ShieldAlert,
  HelpCircle,
  Award,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LearningCenterViewProps {
  initialModuleId?: number;
  onNavigate: (view: ViewType, moduleId?: number) => void;
}

export const LearningCenterView: React.FC<LearningCenterViewProps> = ({ 
  initialModuleId, 
  onNavigate 
}) => {
  const { progress, markModuleComplete, unmarkModuleComplete, recordQuizScore } = useProgress();
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(initialModuleId ?? null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'teoria' | 'formulas' | 'exemplos' | 'pratica' | 'quiz'>('teoria');

  // Quiz state for the current module
  const [quizAnswers, setQuizAnswers] = useState<{ [qId: string]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const selectedModule = selectedModuleId ? modulesData.find(m => m.id === selectedModuleId) : null;

  // Filter modules
  const filteredModules = modulesData.filter(m => {
    const q = searchQuery.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.subtitle.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      m.category.toLowerCase().includes(q)
    );
  });

  const handleSelectModule = (id: number) => {
    setSelectedModuleId(id);
    setActiveTab('teoria');
    setQuizAnswers({});
    setQuizSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleComplete = (id: number) => {
    if (progress.completedModules.includes(id)) {
      unmarkModuleComplete(id);
    } else {
      markModuleComplete(id);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  const handleQuizAnswer = (qId: string, optionIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [qId]: optionIdx }));
  };

  const handleQuizSubmit = () => {
    if (!selectedModule) return;
    setQuizSubmitted(true);
    let correctCount = 0;
    selectedModule.quiz.forEach(q => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    recordQuizScore(`module_${selectedModule.id}`, correctCount, selectedModule.quiz.length);

    if (correctCount === selectedModule.quiz.length) {
      markModuleComplete(selectedModule.id);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
    }
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* If looking at all modules */}
      {!selectedModule ? (
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                Central de Aprendizagem Técnica
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                10 Módulos de Eletroeletrônica
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fundamentos conceituais, fórmulas com significado das variáveis, exemplos resolvidos e questionários.
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por assunto, fórmula..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
              />
            </div>
          </div>

          {/* Module Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredModules.map(module => {
              const isCompleted = progress.completedModules.includes(module.id);
              return (
                <div
                  key={module.id}
                  onClick={() => handleSelectModule(module.id)}
                  className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                    isCompleted
                      ? 'bg-emerald-50/20 border-emerald-300 hover:border-emerald-400 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-sky-400 hover:shadow-electric'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                        {module.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="flex items-center gap-1 text-slate-400">
                          <Clock className="w-3.5 h-3.5" />
                          {module.readTime}
                        </span>
                        {isCompleted && (
                          <span className="flex items-center gap-1 text-emerald-600 font-semibold bg-emerald-100/70 px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Concluído
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {module.subtitle}
                    </p>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {module.description}
                    </p>

                    {/* Summary bullets */}
                    <div className="pt-2 border-t border-slate-100 space-y-1">
                      {module.summaryPoints.slice(0, 2).map((pt, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0"></span>
                          <span className="truncate">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600">
                    <span className="group-hover:underline">Abrir módulo completo</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Detailed View of a Module */
        <div className="space-y-6">
          {/* Top Bar Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <button
              onClick={() => setSelectedModuleId(null)}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para todos os módulos
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleToggleComplete(selectedModule.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  progress.completedModules.includes(selectedModule.id)
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {progress.completedModules.includes(selectedModule.id) ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Módulo Concluído (+100 XP)
                  </>
                ) : (
                  <>
                    <Circle className="w-4 h-4 text-slate-400" />
                    Marcar como concluído
                  </>
                )}
              </button>

              {/* Prev and Next Module Buttons */}
              <div className="flex items-center gap-1">
                <button
                  disabled={selectedModule.id === 1}
                  onClick={() => handleSelectModule(selectedModule.id - 1)}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none"
                  title="Módulo Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  disabled={selectedModule.id === 10}
                  onClick={() => handleSelectModule(selectedModule.id + 1)}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none"
                  title="Próximo Módulo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Module Title Header Card */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-sky-950 text-white rounded-3xl shadow-lg border border-sky-900/60">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-sky-900/80 px-2.5 py-0.5 rounded-full border border-sky-700">
                    Módulo {selectedModule.id} • {selectedModule.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedModule.readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedModule.title}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                  {selectedModule.subtitle}
                </p>
              </div>
            </div>

            {/* Quick bullets */}
            <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {selectedModule.summaryPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Navigation Tabs */}
          <div className="flex overflow-x-auto border-b border-slate-200 no-scrollbar gap-2 pt-2">
            <button
              onClick={() => setActiveTab('teoria')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'teoria'
                  ? 'bg-white border-t-2 border-x border-t-sky-600 border-x-slate-200 text-sky-700 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/70'
              }`}
            >
              <BookOpen className="w-4 h-4" /> Teoria & Explicação
            </button>
            <button
              onClick={() => setActiveTab('formulas')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'formulas'
                  ? 'bg-white border-t-2 border-x border-t-sky-600 border-x-slate-200 text-sky-700 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/70'
              }`}
            >
              <Zap className="w-4 h-4" /> Fórmulas & Variáveis ({selectedModule.formulas.length})
            </button>
            <button
              onClick={() => setActiveTab('exemplos')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'exemplos'
                  ? 'bg-white border-t-2 border-x border-t-sky-600 border-x-slate-200 text-sky-700 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/70'
              }`}
            >
              <Calculator className="w-4 h-4" /> Exemplos Passo a Passo ({selectedModule.examples.length})
            </button>
            <button
              onClick={() => setActiveTab('pratica')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'pratica'
                  ? 'bg-white border-t-2 border-x border-t-sky-600 border-x-slate-200 text-sky-700 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/70'
              }`}
            >
              <Award className="w-4 h-4" /> Aplicações & Segurança
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'quiz'
                  ? 'bg-white border-t-2 border-x border-t-sky-600 border-x-slate-200 text-sky-700 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100/70'
              }`}
            >
              <CheckSquare className="w-4 h-4" /> Questionário ({selectedModule.quiz.length} questões)
            </button>
          </div>

          {/* TAB 1: Teoria */}
          {activeTab === 'teoria' && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8 shadow-sm">
              {selectedModule.theorySections.map((section, idx) => (
                <article key={idx} className="space-y-3 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-6 rounded bg-sky-600"></span>
                    {section.title}
                  </h3>
                  <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </article>
              ))}

              {/* Next Tab Callout */}
              <div className="p-4 bg-sky-50 rounded-xl border border-sky-100 flex items-center justify-between">
                <span className="text-xs text-sky-900 font-medium">
                  Pronto para ver as fórmulas matemáticas e o significado das variáveis?
                </span>
                <button
                  onClick={() => setActiveTab('formulas')}
                  className="px-3 py-1.5 rounded-lg bg-sky-600 text-white text-xs font-semibold hover:bg-sky-500 transition-colors"
                >
                  Ver Fórmulas →
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Fórmulas */}
          {activeTab === 'formulas' && (
            <div className="space-y-6">
              {selectedModule.formulas.map((f, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                    <div>
                      <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Fórmula {idx + 1}</span>
                      <h3 className="text-lg font-bold text-slate-900">{f.name}</h3>
                    </div>
                    <div className="px-4 py-2 bg-slate-900 text-cyan-300 font-mono text-xl font-black rounded-xl tracking-wider shadow-inner self-start sm:self-auto">
                      {f.expression}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600">{f.description}</p>

                  {/* Variables Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                      <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-2.5 w-24">Símbolo</th>
                          <th className="p-2.5">Nome da Grandeza</th>
                          <th className="p-2.5 w-32">Unidade no SI</th>
                          <th className="p-2.5">Significado Físico</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {f.variables.map((v, vIdx) => (
                          <tr key={vIdx} className="hover:bg-slate-50/50">
                            <td className="p-2.5 font-mono font-bold text-sky-700 bg-sky-50/30">{v.symbol}</td>
                            <td className="p-2.5 font-semibold text-slate-900">{v.name}</td>
                            <td className="p-2.5 font-mono text-slate-600">{v.unit}</td>
                            <td className="p-2.5 text-slate-600">{v.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Exemplos Resolvidos */}
          {activeTab === 'exemplos' && (
            <div className="space-y-6">
              {selectedModule.examples.map((ex, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
                  <div className="pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Exemplo Didático {idx + 1}</span>
                    <h3 className="text-lg font-bold text-slate-900">{ex.title}</h3>
                  </div>

                  {/* Problem statement */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 leading-relaxed font-medium">
                    <strong>Enunciado:</strong> {ex.problem}
                  </div>

                  {/* Given data */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Dados fornecidos:</span>
                    <div className="flex flex-wrap gap-2">
                      {ex.givenData.map((d, dIdx) => (
                        <div key={dIdx} className="px-3 py-1 bg-sky-50 border border-sky-200 rounded-lg text-xs font-mono text-sky-900">
                          <strong>{d.label}:</strong> {d.value}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step by step */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Resolução Passo a Passo:</span>
                    <div className="space-y-2 bg-slate-50/60 p-4 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-700">
                      {ex.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2">
                          <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {sIdx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final answer */}
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm space-y-1">
                    <div className="font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Resposta Final:
                    </div>
                    <div>{ex.finalAnswer}</div>
                  </div>

                  <p className="text-xs text-slate-500 italic">
                    💡 <strong>Comentário do professor:</strong> {ex.explanation}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Prática & Segurança */}
          {activeTab === 'pratica' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-sky-600" />
                  Aplicações no Mundo Real e na Indústria
                </h3>
                <p className="text-xs text-slate-500">
                  Onde esses conhecimentos teóricos são aplicados na vida profissional de um técnico em eletroeletrônica:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  {selectedModule.practicalApplications.map((app, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block"></span>
                      <p className="leading-relaxed font-medium">{app}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety alert */}
              <div className="bg-amber-50/80 rounded-2xl border border-amber-200 p-6 sm:p-8 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-amber-900 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-amber-600" />
                  Cuidados de Segurança e Boas Práticas do Módulo
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-amber-950/80">
                  {selectedModule.safetyTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold shrink-0">⚠️</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 5: Questionário de Fixação */}
          {activeTab === 'quiz' && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
                <div>
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Avaliação de Aprendizado</span>
                  <h3 className="text-lg font-bold text-slate-900">Questionário do Módulo {selectedModule.id}</h3>
                  <p className="text-xs text-slate-500">Teste seus conhecimentos com feedback imediato</p>
                </div>

                {quizSubmitted && (
                  <button
                    onClick={handleResetQuiz}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors self-start sm:self-auto"
                  >
                    Tentar Novamente
                  </button>
                )}
              </div>

              {/* Questions */}
              <div className="space-y-6">
                {selectedModule.quiz.map((q, qIdx) => {
                  const userAnswer = quizAnswers[q.id];
                  const isAnswered = userAnswer !== undefined;
                  const isCorrect = isAnswered && userAnswer === q.correctIndex;

                  return (
                    <div
                      key={q.id}
                      className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-sm font-bold text-slate-900">
                          {qIdx + 1}. {q.question}
                        </h4>
                        {quizSubmitted && (
                          <span
                            className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                              isCorrect
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {isCorrect ? 'Correto!' : 'Incorreto'}
                          </span>
                        )}
                      </div>

                      {/* Options */}
                      <div className="space-y-2 pt-1">
                        {q.options.map((opt, optIdx) => {
                          const selected = userAnswer === optIdx;
                          let btnStyle = 'bg-white border-slate-200 hover:border-sky-300 text-slate-700';

                          if (selected) {
                            btnStyle = 'bg-sky-50 border-sky-500 text-sky-900 font-semibold ring-1 ring-sky-500';
                          }

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold ring-1 ring-emerald-500';
                            } else if (selected && optIdx !== q.correctIndex) {
                              btnStyle = 'bg-rose-50 border-rose-300 text-rose-800';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={quizSubmitted}
                              onClick={() => handleQuizAnswer(q.id, optIdx)}
                              className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && optIdx === q.correctIndex && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Feedback Explanation */}
                      {quizSubmitted && (
                        <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 mt-2">
                          <strong className="text-slate-800">Explicação:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit Quiz Action */}
              {!quizSubmitted ? (
                <div className="pt-2 flex justify-end">
                  <button
                    disabled={Object.keys(quizAnswers).length < selectedModule.quiz.length}
                    onClick={handleQuizSubmit}
                    className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all disabled:opacity-40 disabled:pointer-events-none"
                  >
                    Confirmar Respostas e Ver Pontuação
                  </button>
                </div>
              ) : (
                <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-sky-950">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-sky-600" />
                    <span>
                      Você acertou{' '}
                      <strong>
                        {selectedModule.quiz.filter(q => quizAnswers[q.id] === q.correctIndex).length} de {selectedModule.quiz.length}
                      </strong>{' '}
                      questões deste módulo!
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      if (selectedModule.id < 10) {
                        handleSelectModule(selectedModule.id + 1);
                      } else {
                        onNavigate('exercises');
                      }
                    }}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    {selectedModule.id < 10 ? 'Avançar para o Próximo Módulo →' : 'Ir para Desafios Gerais →'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
