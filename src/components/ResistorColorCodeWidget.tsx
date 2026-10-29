import React, { useState } from 'react';
import { Sliders, RefreshCw, CheckCircle2 } from 'lucide-react';

interface ColorBand {
  name: string;
  hex: string;
  textDark?: boolean;
  value?: number;
  multiplier?: number;
  tolerance?: number;
}

const DIGIT_COLORS: ColorBand[] = [
  { name: 'Preto (0)', hex: '#0f172a', value: 0 },
  { name: 'Marrom (1)', hex: '#854d0e', value: 1 },
  { name: 'Vermelho (2)', hex: '#dc2626', value: 2 },
  { name: 'Laranja (3)', hex: '#ea580c', value: 3 },
  { name: 'Amarelo (4)', hex: '#eab308', textDark: true, value: 4 },
  { name: 'Verde (5)', hex: '#16a34a', value: 5 },
  { name: 'Azul (6)', hex: '#2563eb', value: 6 },
  { name: 'Violeta (7)', hex: '#7c3aed', value: 7 },
  { name: 'Cinza (8)', hex: '#64748b', value: 8 },
  { name: 'Branco (9)', hex: '#f8fafc', textDark: true, value: 9 },
];

const MULTIPLIER_COLORS: ColorBand[] = [
  { name: 'Preto (×1)', hex: '#0f172a', multiplier: 1 },
  { name: 'Marrom (×10)', hex: '#854d0e', multiplier: 10 },
  { name: 'Vermelho (×100)', hex: '#dc2626', multiplier: 100 },
  { name: 'Laranja (×1k)', hex: '#ea580c', multiplier: 1000 },
  { name: 'Amarelo (×10k)', hex: '#eab308', textDark: true, multiplier: 10000 },
  { name: 'Verde (×100k)', hex: '#16a34a', multiplier: 100000 },
  { name: 'Azul (×1M)', hex: '#2563eb', multiplier: 1000000 },
  { name: 'Dourado (×0.1)', hex: '#d97706', multiplier: 0.1 },
  { name: 'Prateado (×0.01)', hex: '#94a3b8', multiplier: 0.01 },
];

const TOLERANCE_COLORS: ColorBand[] = [
  { name: 'Dourado (±5%)', hex: '#d97706', tolerance: 5 },
  { name: 'Prateado (±10%)', hex: '#94a3b8', tolerance: 10 },
  { name: 'Marrom (±1%)', hex: '#854d0e', tolerance: 1 },
  { name: 'Vermelho (±2%)', hex: '#dc2626', tolerance: 2 },
  { name: 'Verde (±0.5%)', hex: '#16a34a', tolerance: 0.5 },
];

export const ResistorColorCodeWidget: React.FC = () => {
  const [bandsMode, setBandsMode] = useState<4 | 5>(4);
  const [band1, setBand1] = useState(1); // Marrom = 1
  const [band2, setBand2] = useState(0); // Preto = 0
  const [band3_5b, setBand3_5b] = useState(0); // 3º dígito no modo 5 faixas
  const [bandMult, setBandMult] = useState(2); // Vermelho = x100 (1000 Ω)
  const [bandTol, setBandTol] = useState(0); // Dourado = 5%

  // Calculations
  const multValue = MULTIPLIER_COLORS[bandMult]?.multiplier ?? 1;
  const tolValue = TOLERANCE_COLORS[bandTol]?.tolerance ?? 5;

  let rawResistance = 0;
  if (bandsMode === 4) {
    const d1 = DIGIT_COLORS[band1].value ?? 0;
    const d2 = DIGIT_COLORS[band2].value ?? 0;
    rawResistance = (d1 * 10 + d2) * multValue;
  } else {
    const d1 = DIGIT_COLORS[band1].value ?? 0;
    const d2 = DIGIT_COLORS[band2].value ?? 0;
    const d3 = DIGIT_COLORS[band3_5b].value ?? 0;
    rawResistance = (d1 * 100 + d2 * 10 + d3) * multValue;
  }

  // Format with units
  const formatResistance = (val: number) => {
    if (val >= 1000000) return `${(val / 1000000).toLocaleString('pt-BR', { maximumFractionDigits: 2 })} MΩ`;
    if (val >= 1000) return `${(val / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 2 })} kΩ`;
    return `${val.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} Ω`;
  };

  const minVal = rawResistance * (1 - tolValue / 100);
  const maxVal = rawResistance * (1 + tolValue / 100);

  // Reset to popular 1kΩ
  const handleReset = () => {
    setBand1(1);
    setBand2(0);
    setBand3_5b(0);
    setBandMult(2);
    setBandTol(0);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Sliders className="w-5 h-5 text-sky-600" />
            Calculadora de Código de Cores de Resistores
          </h3>
          <p className="text-xs text-slate-500">Selecione as cores das faixas para decodificar o valor em Ohms</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg bg-slate-100 p-1 text-xs font-semibold">
            <button
              onClick={() => setBandsMode(4)}
              className={`px-2.5 py-1 rounded-md transition-colors ${bandsMode === 4 ? 'bg-white shadow text-sky-700' : 'text-slate-600 hover:text-slate-900'}`}
            >
              4 Faixas
            </button>
            <button
              onClick={() => setBandsMode(5)}
              className={`px-2.5 py-1 rounded-md transition-colors ${bandsMode === 5 ? 'bg-white shadow text-sky-700' : 'text-slate-600 hover:text-slate-900'}`}
            >
              5 Faixas (Precisão)
            </button>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
            title="Resetar para 1kΩ"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Visual Resistor Graphic */}
      <div className="my-6 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-50 to-slate-100/60 rounded-xl border border-slate-200/80">
        <div className="relative w-72 sm:w-80 h-24 flex items-center justify-center">
          {/* Wire left */}
          <div className="absolute left-0 w-14 h-2 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300 rounded-l shadow-inner" />
          {/* Wire right */}
          <div className="absolute right-0 w-14 h-2 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300 rounded-r shadow-inner" />

          {/* Resistor Body */}
          <div className="relative w-52 h-16 bg-[#d4b08c] rounded-full shadow-lg border-2 border-[#b89574] flex items-center justify-between px-7 overflow-hidden">
            {/* Color Band 1 */}
            <div
              className="w-3.5 h-full transition-colors duration-200 shadow-sm"
              style={{ backgroundColor: DIGIT_COLORS[band1].hex }}
              title={`Faixa 1: ${DIGIT_COLORS[band1].name}`}
            />
            {/* Color Band 2 */}
            <div
              className="w-3.5 h-full transition-colors duration-200 shadow-sm"
              style={{ backgroundColor: DIGIT_COLORS[band2].hex }}
              title={`Faixa 2: ${DIGIT_COLORS[band2].name}`}
            />

            {/* Color Band 3 (Only in 5-band mode) */}
            {bandsMode === 5 && (
              <div
                className="w-3.5 h-full transition-colors duration-200 shadow-sm"
                style={{ backgroundColor: DIGIT_COLORS[band3_5b].hex }}
                title={`Faixa 3: ${DIGIT_COLORS[band3_5b].name}`}
              />
            )}

            {/* Multiplier Band */}
            <div
              className="w-3.5 h-full transition-colors duration-200 shadow-sm"
              style={{ backgroundColor: MULTIPLIER_COLORS[bandMult].hex }}
              title={`Multiplicador: ${MULTIPLIER_COLORS[bandMult].name}`}
            />

            {/* Spacer */}
            <div className="w-4 h-full" />

            {/* Tolerance Band */}
            <div
              className="w-3.5 h-full transition-colors duration-200 shadow-sm"
              style={{ backgroundColor: TOLERANCE_COLORS[bandTol].hex }}
              title={`Tolerância: ${TOLERANCE_COLORS[bandTol].name}`}
            />
          </div>
        </div>

        {/* Big Result Badge */}
        <div className="text-center mt-3">
          <div className="text-3xl font-black text-slate-900 tracking-tight">
            {formatResistance(rawResistance)}{' '}
            <span className="text-lg font-bold text-sky-600">±{tolValue}%</span>
          </div>
          <div className="text-xs text-slate-500 mt-1 flex items-center justify-center gap-2">
            <span>Faixa de tolerância:</span>
            <span className="font-mono text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
              {formatResistance(minVal)} — {formatResistance(maxVal)}
            </span>
          </div>
        </div>
      </div>

      {/* Band Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        {/* Band 1 */}
        <div>
          <label className="block font-semibold text-slate-700 mb-1">1ª Faixa (1º dígito)</label>
          <select
            value={band1}
            onChange={e => setBand1(Number(e.target.value))}
            className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
          >
            {DIGIT_COLORS.slice(1).map((c, i) => (
              <option key={c.name} value={i + 1}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Band 2 */}
        <div>
          <label className="block font-semibold text-slate-700 mb-1">2ª Faixa (2º dígito)</label>
          <select
            value={band2}
            onChange={e => setBand2(Number(e.target.value))}
            className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
          >
            {DIGIT_COLORS.map((c, i) => (
              <option key={c.name} value={i}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Band 3 (5-band only) or Multiplier (4-band) */}
        {bandsMode === 5 ? (
          <div>
            <label className="block font-semibold text-slate-700 mb-1">3ª Faixa (3º dígito)</label>
            <select
              value={band3_5b}
              onChange={e => setBand3_5b(Number(e.target.value))}
              className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
            >
              {DIGIT_COLORS.map((c, i) => (
                <option key={c.name} value={i}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        {/* Multiplier Band */}
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            {bandsMode === 5 ? '4ª Faixa (Mult.)' : '3ª Faixa (Mult.)'}
          </label>
          <select
            value={bandMult}
            onChange={e => setBandMult(Number(e.target.value))}
            className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
          >
            {MULTIPLIER_COLORS.map((c, i) => (
              <option key={c.name} value={i}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Tolerance Band */}
        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            {bandsMode === 5 ? '5ª Faixa (Tol.)' : '4ª Faixa (Tol.)'}
          </label>
          <select
            value={bandTol}
            onChange={e => setBandTol(Number(e.target.value))}
            className="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none"
          >
            {TOLERANCE_COLORS.map((c, i) => (
              <option key={c.name} value={i}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 p-3 bg-sky-50/70 border border-sky-100 rounded-xl flex items-start gap-2 text-xs text-sky-900">
        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
        <div>
          <strong>Dica prática de bancada:</strong> O resistor mais comum em kits didáticos de Arduino é o de <strong>220 Ω</strong> (Vermelho-Vermelho-Marrom-Dourado) e o de <strong>10 kΩ</strong> (Marrom-Preto-Laranja-Dourado).
        </div>
      </div>
    </div>
  );
};
