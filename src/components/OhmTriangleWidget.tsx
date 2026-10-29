import React, { useState } from 'react';
import { HelpCircle, Sparkles } from 'lucide-react';

export const OhmTriangleWidget: React.FC = () => {
  const [selected, setSelected] = useState<'V' | 'I' | 'R'>('V');

  return (
    <div className="bg-white rounded-2xl border border-sky-100 shadow-md p-6 max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-500" />
            Triângulo Interativo da Lei de Ohm
          </h3>
          <p className="text-xs text-slate-500">Clique na grandeza que deseja descobrir para isolar a fórmula:</p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 bg-sky-50 text-sky-700 rounded-full border border-sky-200">
          V = R · I
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 justify-center my-4">
        {/* Interactive SVG Triangle */}
        <div className="relative w-48 h-44 select-none">
          <svg viewBox="0 0 200 180" className="w-full h-full drop-shadow-sm">
            {/* Top Sector: V */}
            <path
              d="M 100 10 L 155 90 L 45 90 Z"
              onClick={() => setSelected('V')}
              className={`cursor-pointer transition-all duration-200 ${
                selected === 'V'
                  ? 'fill-sky-500 stroke-sky-600 stroke-2 filter brightness-110'
                  : 'fill-slate-100 hover:fill-sky-100 stroke-slate-300 stroke-1'
              }`}
            />
            {/* Horizontal dividing line */}
            <line x1="45" y1="90" x2="155" y2="90" stroke="#0284c7" strokeWidth="2.5" />

            {/* Bottom Left Sector: I */}
            <path
              d="M 45 90 L 100 90 L 100 170 L 10 170 Z"
              onClick={() => setSelected('I')}
              className={`cursor-pointer transition-all duration-200 ${
                selected === 'I'
                  ? 'fill-cyan-500 stroke-cyan-600 stroke-2 filter brightness-110'
                  : 'fill-slate-100 hover:fill-cyan-100 stroke-slate-300 stroke-1'
              }`}
            />

            {/* Vertical dividing line */}
            <line x1="100" y1="90" x2="100" y2="170" stroke="#0284c7" strokeWidth="2.5" />

            {/* Bottom Right Sector: R */}
            <path
              d="M 100 90 L 155 90 L 190 170 L 100 170 Z"
              onClick={() => setSelected('R')}
              className={`cursor-pointer transition-all duration-200 ${
                selected === 'R'
                  ? 'fill-emerald-500 stroke-emerald-600 stroke-2 filter brightness-110'
                  : 'fill-slate-100 hover:fill-emerald-100 stroke-slate-300 stroke-1'
              }`}
            />

            {/* Text labels */}
            <text
              x="100"
              y="68"
              textAnchor="middle"
              className={`text-2xl font-black pointer-events-none ${selected === 'V' ? 'fill-white' : 'fill-slate-700'}`}
            >
              V
            </text>
            <text
              x="58"
              y="142"
              textAnchor="middle"
              className={`text-2xl font-black pointer-events-none ${selected === 'I' ? 'fill-white' : 'fill-slate-700'}`}
            >
              I
            </text>
            <text
              x="142"
              y="142"
              textAnchor="middle"
              className={`text-2xl font-black pointer-events-none ${selected === 'R' ? 'fill-white' : 'fill-slate-700'}`}
            >
              R
            </text>
          </svg>
        </div>

        {/* Formula breakdown and explanation */}
        <div className="flex-1 space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-left w-full">
          {selected === 'V' && (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Calculando Tensão (V)</span>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">V = R · I</div>
              <p className="text-xs text-slate-600 mt-1">
                Para encontrar a <strong>Tensão</strong> (em Volts), multiplique a <strong>Resistência</strong> (em Ohms) pela <strong>Corrente</strong> (em Ampères).
              </p>
              <div className="mt-2 text-[11px] bg-sky-50 text-sky-800 p-2 rounded border border-sky-100">
                <strong>Exemplo rápido:</strong> R = 100 Ω e I = 0,2 A → V = 100 × 0,2 = <strong>20 V</strong>.
              </div>
            </div>
          )}

          {selected === 'I' && (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">Calculando Corrente (I)</span>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">I = V / R</div>
              <p className="text-xs text-slate-600 mt-1">
                Para encontrar a <strong>Corrente</strong> (em Ampères), divida a <strong>Tensão</strong> (em Volts) pela <strong>Resistência</strong> (em Ohms).
              </p>
              <div className="mt-2 text-[11px] bg-cyan-50 text-cyan-800 p-2 rounded border border-cyan-100">
                <strong>Exemplo rápido:</strong> V = 12 V e R = 24 Ω → I = 12 / 24 = <strong>0,5 A (500 mA)</strong>.
              </div>
            </div>
          )}

          {selected === 'R' && (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Calculando Resistência (R)</span>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">R = V / I</div>
              <p className="text-xs text-slate-600 mt-1">
                Para encontrar a <strong>Resistência</strong> (em Ohms), divida a <strong>Tensão</strong> (em Volts) pela <strong>Corrente</strong> (em Ampères).
              </p>
              <div className="mt-2 text-[11px] bg-emerald-50 text-emerald-800 p-2 rounded border border-emerald-100">
                <strong>Exemplo rápido:</strong> V = 5 V e I = 0,02 A (20 mA) → R = 5 / 0,02 = <strong>250 Ω</strong>.
              </div>
            </div>
          )}

          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1 border-t border-slate-200">
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>Tape a letra no triângulo para lembrar a fórmula na hora da prova!</span>
          </div>
        </div>
      </div>
    </div>
  );
};
