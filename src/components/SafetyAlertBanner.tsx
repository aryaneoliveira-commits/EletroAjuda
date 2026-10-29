import React from 'react';
import { AlertTriangle, ShieldCheck, BatteryCharging, XCircle } from 'lucide-react';

interface SafetyAlertBannerProps {
  compact?: boolean;
}

export const SafetyAlertBanner: React.FC<SafetyAlertBannerProps> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="flex items-center gap-2 p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-900 text-xs font-medium">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
        <span>
          <strong>Atenção de Segurança:</strong> Pratique montagens em bancada utilizando apenas pilhas, baterias de 9V ou fontes seguras de bancada (&lt; 24V CC).
        </span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-amber-500 p-4 sm:p-5 rounded-r-xl shadow-sm my-6">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2">
            Segurança em Instalações e Experimentos Didáticos (NR-10 Básica)
          </h4>
          <p className="text-xs text-amber-950/80 leading-relaxed">
            A eletricidade é fascinante, mas exige respeito rigoroso. Para sua proteção durante a fase de aprendizado técnico:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700">
            <div className="flex items-start gap-1.5 p-2 rounded bg-white/70 border border-amber-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Priorize Extra-Baixa Tensão:</strong> Trabalhe sempre com circuitos didáticos de até 12V (Arduino, pilhas e fontes reguladas).</span>
            </div>
            <div className="flex items-start gap-1.5 p-2 rounded bg-white/70 border border-amber-200">
              <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <span><strong>Nunca use tomadas residenciais:</strong> Não realize testes experimentais diretamente em tomadas de 127V ou 220V sem a supervisão presencial de um professor habilitado.</span>
            </div>
            <div className="flex items-start gap-1.5 p-2 rounded bg-white/70 border border-amber-200">
              <BatteryCharging className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span><strong>Desenergize antes de montar:</strong> Sempre desligue a chave de alimentação da protoboard antes de alterar qualquer componente ou fio de ligação.</span>
            </div>
            <div className="flex items-start gap-1.5 p-2 rounded bg-white/70 border border-amber-200">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Atenção a curtos e aquecimento:</strong> Componentes como resistores sobrecarregados e reguladores de tensão podem atingir altas temperaturas e causar queimaduras.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
