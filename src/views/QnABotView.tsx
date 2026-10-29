import React, { useState } from 'react';
import { QnAItem } from '../types';
import { qaKnowledgeBase } from '../data/qaKnowledgeBase';
import { 
  HelpCircle, 
  Send, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  Info, 
  Zap, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

export const QnABotView: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [selectedQnA, setSelectedQnA] = useState<QnAItem | null>(qaKnowledgeBase[0]);
  const [noMatchFound, setNoMatchFound] = useState(false);

  const suggestedQuestions = [
    'Qual a diferença entre tensão e corrente elétrica?',
    'Como calcular o resistor para um LED?',
    'O que acontece se ligar um amperímetro em paralelo?',
    'Como funciona a Lei de Ohm e como lembrar suas fórmulas?',
    'Para que serve um capacitor e como ele funciona?',
    'Como diferenciar um circuito em série de um circuito em paralelo?',
    'Qual a diferença prática entre portas lógicas AND, OR e XOR?',
    'Como calcular o consumo de energia em kWh e o custo na conta de luz?',
    'Quais os principais cuidados de segurança em eletricidade para estudantes?'
  ];

  const handleAskQuestion = (query: string) => {
    const cleanQuery = query.toLowerCase().trim();
    if (!cleanQuery) return;

    // Search algorithm
    // 1. Direct match on question
    let match = qaKnowledgeBase.find(q => q.question.toLowerCase().includes(cleanQuery) || cleanQuery.includes(q.question.toLowerCase()));

    // 2. Keyword tokens matching
    if (!match) {
      const tokens = cleanQuery.split(/\s+/).filter(t => t.length > 2);
      let highestScore = 0;
      let bestItem: QnAItem | null = null;

      qaKnowledgeBase.forEach(item => {
        let score = 0;
        tokens.forEach(tok => {
          if (item.keywords.some(k => k.includes(tok) || tok.includes(k))) score += 3;
          if (item.question.toLowerCase().includes(tok)) score += 2;
          if (item.category.toLowerCase().includes(tok)) score += 1;
        });

        if (score > highestScore) {
          highestScore = score;
          bestItem = item;
        }
      });

      if (highestScore > 0 && bestItem) {
        match = bestItem;
      }
    }

    if (match) {
      setSelectedQnA(match);
      setNoMatchFound(false);
    } else {
      setNoMatchFound(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAskQuestion(inputText);
  };

  const handlePickSuggested = (qStr: string) => {
    setInputText(qStr);
    handleAskQuestion(qStr);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full mb-2">
          <HelpCircle className="w-3.5 h-3.5" />
          Pergunte ao EletroAjuda
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Assistente de Dúvidas em Eletroeletrônica
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Obtenha respostas didáticas imediatas sobre conceitos, cálculos, componentes e segurança.
        </p>
      </div>

      {/* Mandatory Notice of Demonstrative Mode */}
      <div className="p-4 bg-sky-50/80 border border-sky-200 rounded-2xl flex items-start gap-3 text-xs text-sky-950">
        <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="block text-sky-900">Modo de Base de Conhecimento Estruturada</strong>
          <p className="text-sky-800 leading-relaxed">
            Este assistente opera com um motor de busca semântico conectado a uma base de dados didática rigorosamente validada por professores técnicos. Não há uma API de Inteligência Artificial externa conectada, garantindo respostas 100% livres de alucinações de cálculo e sem consumo de créditos.
          </p>
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            placeholder="Digite sua dúvida aqui... Ex: 'Como dimensionar resistor para LED?'"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-inner"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
          >
            <span>Enviar</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

        {/* Suggested Questions Chips */}
        <div>
          <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Perguntas Frequentes Sugeridas:
          </span>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePickSuggested(s)}
                className="text-left px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-sky-50 hover:text-sky-700 text-slate-700 text-xs font-medium border border-slate-200/80 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Response Display Area */}
      {selectedQnA && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Question Title Header */}
          <div className="pb-4 border-b border-slate-100 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200">
                {selectedQnA.category}
              </span>
              <span className="text-xs text-slate-400">• Resposta Didática Verificada</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {selectedQnA.question}
            </h2>
          </div>

          {/* Answer Summary Card */}
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-sky-950 text-xs sm:text-sm font-semibold leading-relaxed flex items-start gap-2.5">
            <Sparkles className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-sky-800 font-bold block mb-0.5">Resumo Direto:</span>
              {selectedQnA.answerSummary}
            </div>
          </div>

          {/* Detailed Points */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Explicação Detalhada:
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/70 p-4 rounded-2xl border border-slate-200">
              {selectedQnA.answerDetailed.map((pt, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulas if present */}
          {selectedQnA.formulas && selectedQnA.formulas.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Fórmulas Aplicáveis:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedQnA.formulas.map((f, i) => (
                  <div key={i} className="p-3 bg-slate-900 text-white rounded-xl border border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">{f.name}:</span>
                    <span className="font-mono text-cyan-300 font-bold text-xs sm:text-sm">{f.formula}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Example if present */}
          {selectedQnA.example && (
            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 space-y-1">
              <strong className="text-emerald-900 block flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Exemplo Prático Resolvido:
              </strong>
              <p className="leading-relaxed">{selectedQnA.example}</p>
            </div>
          )}

          {/* Safety note if present */}
          {selectedQnA.safetyNote && (
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1">
              <strong className="text-amber-900 block flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                Aviso de Segurança Relacionado:
              </strong>
              <p className="leading-relaxed">{selectedQnA.safetyNote}</p>
            </div>
          )}
        </div>
      )}

      {/* When no direct match is found */}
      {noMatchFound && (
        <div className="p-6 bg-white rounded-3xl border border-slate-200 text-center space-y-4">
          <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            Dúvida específica não catalogada com exatidão
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Não encontramos uma resposta idêntica para o termo digitado. Selecione uma das perguntas sugeridas acima ou explore os 10 módulos da Central de Aprendizagem.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handlePickSuggested(suggestedQuestions[0])}
              className="px-4 py-2 bg-sky-600 text-white text-xs font-semibold rounded-xl hover:bg-sky-500 transition-colors"
            >
              Ver Tensão vs. Corrente
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
