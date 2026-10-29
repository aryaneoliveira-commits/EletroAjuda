import React, { useState } from 'react';
import { ExerciseQuestion } from '../types';
import { questionsData } from '../data/questionsData';
import { useProgress } from '../context/ProgressContext';
import { 
  CheckSquare, 
  Award, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  Filter,
  Zap,
  HelpCircle,
  Trophy
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ExercisesView: React.FC = () => {
  const { recordQuizScore, addPoints, unlockBadge } = useProgress();

  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('Todos');
  const [selectedType, setSelectedType] = useState<string>('Todos');
  const [questionCount, setQuestionCount] = useState<number>(10);

  // Challenge game session state
  const [inQuiz, setInQuiz] = useState(false);
  const [quizQueue, setQuizQueue] = useState<ExerciseQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userHistory, setUserHistory] = useState<{
    question: ExerciseQuestion;
    userChoice: number;
    isCorrect: boolean;
  }[]>([]);

  // Filter pool
  const filteredPool = questionsData.filter(q => {
    const matchDiff = selectedDifficulty === 'Todos' || q.difficulty === selectedDifficulty;
    const matchType = selectedType === 'Todos' || q.type === selectedType;
    return matchDiff && matchType;
  });

  const startQuiz = () => {
    // Shuffle and pick
    const shuffled = [...filteredPool].sort(() => 0.5 - Math.random());
    const queue = shuffled.slice(0, Math.min(questionCount, shuffled.length));

    setQuizQueue(queue);
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setQuizFinished(false);
    setUserHistory([]);
    setInQuiz(true);
  };

  const handleSelectOption = (idx: number) => {
    if (showFeedback) return;
    setSelectedOption(idx);
    setShowFeedback(true);

    const currentQ = quizQueue[currentIndex];
    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setUserHistory(prev => [
      ...prev,
      {
        question: currentQ,
        userChoice: idx,
        isCorrect
      }
    ]);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < quizQueue.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setQuizFinished(true);
    const finalScore = score + (selectedOption === quizQueue[currentIndex].correctIndex ? 0 : 0);
    recordQuizScore('challenge_general', score, quizQueue.length);

    if (score / quizQueue.length >= 0.8) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      unlockBadge('quiz-champion');
    }
  };

  const resetChallenge = () => {
    setInQuiz(false);
    setQuizFinished(false);
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setUserHistory([]);
  };

  const currentQ = quizQueue[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full mb-2">
          <CheckSquare className="w-3.5 h-3.5" />
          Arena de Exercícios & Desafios
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Questões Interativas de Eletroeletrônica
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Níveis Fácil, Intermediário e Avançado. Pratique cálculos e conceitos com feedback instantâneo e ganhe XP.
        </p>
      </div>

      {!inQuiz ? (
        /* Configuration Screen */
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-slate-900">Configure sua Sessão de Estudos</h2>
            <p className="text-xs text-slate-500">Personalize a quantidade e a dificuldade das questões:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Difficulty Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Nível de Dificuldade:
              </label>
              <select
                value={selectedDifficulty}
                onChange={e => setSelectedDifficulty(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800"
              >
                <option value="Todos">Todos os Níveis</option>
                <option value="Fácil">Fácil (Conceitos básicos)</option>
                <option value="Intermediário">Intermediário (Cálculos de circuitos)</option>
                <option value="Avançado">Avançado (Malhas e projetos)</option>
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Tipo de Questão:
              </label>
              <select
                value={selectedType}
                onChange={e => setSelectedType(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800"
              >
                <option value="Todos">Mistas (Conceituais e Cálculos)</option>
                <option value="conceitual">Apenas Conceituais</option>
                <option value="calculo">Apenas Questões com Cálculos</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Quantidade de Questões:
              </label>
              <select
                value={questionCount}
                onChange={e => setQuestionCount(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800"
              >
                <option value={5}>5 Questões (Rápido)</option>
                <option value={10}>10 Questões (Recomendado)</option>
                <option value={15}>15 Questões (Simulado)</option>
                <option value={30}>Todas as 30 Questões</option>
              </select>
            </div>
          </div>

          <div className="p-4 bg-sky-50/80 rounded-2xl border border-sky-100 flex items-center justify-between text-xs text-sky-900">
            <span>
              Questões disponíveis no banco para este filtro: <strong>{filteredPool.length}</strong>
            </span>
            <span className="font-semibold text-sky-700">+25 XP por acerto</span>
          </div>

          <button
            onClick={startQuiz}
            disabled={filteredPool.length === 0}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-500 hover:to-cyan-400 text-white font-extrabold text-sm shadow-electric transition-all disabled:opacity-40"
          >
            Iniciar Desafio de Questões
          </button>
        </div>
      ) : !quizFinished ? (
        /* Active Quiz Screen */
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Progress Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span className="text-sky-700">
                Questão {currentIndex + 1} de {quizQueue.length}
              </span>
              <span className="text-emerald-700">Pontuação: {score} acertos</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
              <div
                className="bg-gradient-to-r from-sky-500 to-cyan-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / quizQueue.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Badges */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              Módulo: {currentQ.moduleName}
            </span>
            <span
              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                currentQ.difficulty === 'Fácil'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : currentQ.difficulty === 'Intermediário'
                  ? 'bg-sky-50 text-sky-700 border border-sky-200'
                  : 'bg-purple-50 text-purple-700 border border-purple-200'
              }`}
            >
              {currentQ.difficulty}
            </span>
            <span className="text-[11px] font-semibold text-slate-500 uppercase">
              • {currentQ.type === 'calculo' ? 'Cálculo' : 'Conceitual'}
            </span>
          </div>

          {/* Question Title */}
          <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
            {currentQ.question}
          </h2>

          {/* Options List */}
          <div className="space-y-2.5 pt-2">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              let style = 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200';

              if (showFeedback) {
                if (idx === currentQ.correctIndex) {
                  style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-500';
                } else if (isSelected && idx !== currentQ.correctIndex) {
                  style = 'bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400';
                } else {
                  style = 'bg-slate-50/50 text-slate-400 border-slate-200 opacity-60';
                }
              } else if (isSelected) {
                style = 'bg-sky-50 border-sky-500 text-sky-900 font-semibold ring-1 ring-sky-500';
              }

              return (
                <button
                  key={idx}
                  disabled={showFeedback}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white border border-slate-300 font-bold text-xs flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {showFeedback && idx === currentQ.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {showFeedback && isSelected && idx !== currentQ.correctIndex && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Immediate Feedback Box */}
          {showFeedback && (
            <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200 space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center gap-2">
                {selectedOption === currentQ.correctIndex ? (
                  <span className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Parabéns, resposta correta! (+25 XP)
                  </span>
                ) : (
                  <span className="text-xs font-bold text-rose-700 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    Resposta incorreta. Veja a explicação abaixo:
                  </span>
                )}
              </div>

              <div className="text-xs text-slate-700 leading-relaxed">
                <strong className="text-slate-900">Explicação Técnica:</strong> {currentQ.explanation}
              </div>

              {currentQ.formulaUsed && (
                <div className="text-[11px] font-mono text-sky-800 pt-1">
                  <strong>Fórmula de referência:</strong> {currentQ.formulaUsed}
                </div>
              )}
            </div>
          )}

          {/* Action Button: Next or Cancel */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={resetChallenge}
              className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
            >
              Cancelar Desafio
            </button>

            {showFeedback && (
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                {currentIndex + 1 < quizQueue.length ? 'Próxima Questão' : 'Ver Resultado Final'}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Final Score Screen */
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-400 text-white flex items-center justify-center mx-auto shadow-electric">
            <Trophy className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Desafio Concluído!</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Sua Pontuação Final
            </h2>
            <div className="text-5xl font-black text-slate-900 mt-2">
              {score} <span className="text-2xl text-slate-400 font-normal">/ {quizQueue.length}</span>
            </div>
            <div className="text-xs text-slate-500">
              Taxa de acertos: <strong>{Math.round((score / quizQueue.length) * 100)}%</strong> • XP conquistado: <strong>+{score * 25} XP</strong>
            </div>
          </div>

          {/* Feedback badge */}
          <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 max-w-md mx-auto text-xs text-sky-900">
            {score / quizQueue.length >= 0.8 ? (
              <p>
                🎉 <strong>Desempenho Excelente!</strong> Você demonstrou domínio sólido sobre os conceitos e cálculos da eletroeletrônica.
              </p>
            ) : score / quizQueue.length >= 0.5 ? (
              <p>
                👍 <strong>Bom Trabalho!</strong> Você compreendeu grande parte dos conteúdos. Revise as explicações abaixo para gabaritar na próxima.
              </p>
            ) : (
              <p>
                📚 <strong>Continue Praticando!</strong> Consulte os 10 Módulos de Aprendizagem e as Calculadoras Passo a Passo para reforçar sua base.
              </p>
            )}
          </div>

          {/* Review of all answers */}
          <div className="text-left space-y-4 pt-4 border-t border-slate-200">
            <h3 className="text-sm font-bold text-slate-900">Revisão Detalhada das Questões:</h3>
            <div className="space-y-3">
              {userHistory.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border text-xs space-y-2 ${
                    item.isCorrect
                      ? 'bg-emerald-50/40 border-emerald-200'
                      : 'bg-rose-50/40 border-rose-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-bold text-slate-900">
                      {idx + 1}. {item.question.question}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {item.isCorrect ? 'Acertou' : 'Errou'}
                    </span>
                  </div>

                  <div className="text-slate-600">
                    Sua resposta: <strong>{item.question.options[item.userChoice]}</strong>
                  </div>
                  {!item.isCorrect && (
                    <div className="text-emerald-700">
                      Resposta correta: <strong>{item.question.options[item.question.correctIndex]}</strong>
                    </div>
                  )}
                  <div className="text-slate-500 pt-1 border-t border-slate-100">
                    💡 <em>{item.question.explanation}</em>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex justify-center gap-3">
            <button
              onClick={startQuiz}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <RotateCcw className="w-4 h-4" /> Tentar Novamente
            </button>
            <button
              onClick={resetChallenge}
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
            >
              Mudar Filtros
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
