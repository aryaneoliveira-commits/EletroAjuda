import React, { useState } from 'react';
import { Sun, CheckCircle, Info } from 'lucide-react';

interface LedPreset {
  name: string;
  colorHex: string;
  vf: number;
}

const LED_PRESETS: LedPreset[] = [
  { name: 'Vermelho', colorHex: '#ef4444', vf: 2.0 },
  { name: 'Amarelo', colorHex: '#eab308', vf: 2.1 },
  { name: 'Verde', colorHex: '#22c55e', vf: 2.2 },
  { name: 'Azul', colorHex: '#3b82f6', vf: 3.2 },
  { name: 'Branco', colorHex: '#94a3b8', vf: 3.2 },
];

const STANDARD_E24 = [
  10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82,
  100, 120, 150, 180, 220, 270, 330, 390, 470, 560, 680, 820,
  1000, 1200, 1500, 1800, 2200, 2700, 3300, 3900, 4700, 5600, 6800, 8200, 10000
];

function getNearestCommercialE24(val: number): number {
  if (val <= 0) return 0;
  for (const std of STANDARD_E24) {
    if (std >= val) return std;
  }
  return Math.ceil(val / 100) * 100;
}

export const LedResistorWidget: React.FC = () => {
  const [selectedLed, setSelectedLed] = useState<LedPreset>(LED_PRESETS[0]);
  const [supplyVoltage, setSupplyVoltage] = useState<number>(5.0);
  const [ledCurrentMa, setLedCurrentMa] = useState<number>(15.0);
  const [customVf, setCustomVf] = useState<number>(2.0);
  const [isCustom, setIsCustom] = useState<boolean>(false);

  const activeVf = isCustom ? customVf : selectedLed.vf;

  // Validation
  const voltageDiff = supplyVoltage - activeVf;
  const isValid = voltageDiff > 0 && ledCurrentMa > 0;

  // Calculation
  const currentAmps = ledCurrentMa / 1000;
  const calculatedResistor = isValid ? voltageDiff / currentAmps : 0;
  const commercialResistor = isValid ? getNearestCommercialE24(calculatedResistor) : 0;
  const resistorPowerWatts = isValid ? voltageDiff * currentAmps : 0;
  const realCurrentWithCommercial = commercialResistor > 0 ? (voltageDiff / commercialResistor) * 1000 : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-5">
        <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-200">
          <Sun className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Calculadora de Resistor Limitador para LED
          </h3>
          <p className="text-xs text-slate-500">
            Evite queimar o LED dimensionando a resistência e a potência adequada
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Preset LED Buttons */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            1. Escolha a cor do LED (Queda de tensão Vf):
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {LED_PRESETS.map(led => (
              <button
                key={led.name}
                type="button"
                onClick={() => {
                  setSelectedLed(led);
                  setIsCustom(false);
                }}
                className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                  !isCustom && selectedLed.name === led.name
                    ? 'border-sky-500 bg-sky-50 shadow-sm ring-1 ring-sky-500'
                    : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <div
                  className="w-4 h-4 rounded-full shadow-sm"
                  style={{ backgroundColor: led.colorHex }}
                />
                <span className="text-xs font-semibold text-slate-800">{led.name}</span>
                <span className="text-[10px] text-slate-500">{led.vf.toFixed(1)}V</span>
              </button>
            ))}
            <button
              type="button"
              onClick={() => setIsCustom(true)}
              className={`p-2 rounded-xl border flex flex-col items-center justify-center transition-all ${
                isCustom
                  ? 'border-sky-500 bg-sky-50 shadow-sm ring-1 ring-sky-500'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
              }`}
            >
              <span className="text-xs font-semibold text-slate-800">Personalizado</span>
              <span className="text-[10px] text-slate-500">Manual</span>
            </button>
          </div>

          {isCustom && (
            <div className="mt-2 flex items-center gap-2">
              <label className="text-xs text-slate-600 font-medium">Tensão direta do LED personalizada (Vf):</label>
              <input
                type="number"
                step="0.1"
                min="0.5"
                max="10"
                value={customVf}
                onChange={e => setCustomVf(parseFloat(e.target.value) || 0)}
                className="w-24 p-1.5 text-xs border border-slate-300 rounded bg-white text-slate-900 font-bold"
              />
              <span className="text-xs text-slate-500">Volts</span>
            </div>
          )}
        </div>

        {/* Inputs for Supply Voltage & Desired Current */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              2. Tensão da Fonte (Vcc):
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="0.1"
                min="1"
                max="50"
                value={supplyVoltage}
                onChange={e => setSupplyVoltage(parseFloat(e.target.value) || 0)}
                className="w-full p-2.5 text-sm border border-slate-300 rounded-lg text-slate-900 font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
              <span className="text-xs font-bold text-slate-500">V</span>
            </div>
            {/* Quick voltage badges */}
            <div className="flex gap-1.5 mt-2">
              <button
                type="button"
                onClick={() => setSupplyVoltage(3.3)}
                className="px-2 py-0.5 rounded text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                3.3V (ESP32)
              </button>
              <button
                type="button"
                onClick={() => setSupplyVoltage(5.0)}
                className="px-2 py-0.5 rounded text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                5.0V (Arduino)
              </button>
              <button
                type="button"
                onClick={() => setSupplyVoltage(9.0)}
                className="px-2 py-0.5 rounded text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                9V (Bateria)
              </button>
              <button
                type="button"
                onClick={() => setSupplyVoltage(12.0)}
                className="px-2 py-0.5 rounded text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                12V (Fonte)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              3. Corrente desejada no LED (Iled):
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="1"
                min="1"
                max="50"
                value={ledCurrentMa}
                onChange={e => setLedCurrentMa(parseFloat(e.target.value) || 0)}
                className="w-full p-2.5 text-sm border border-slate-300 rounded-lg text-slate-900 font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none"
              />
              <span className="text-xs font-bold text-slate-500">mA</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1.5">
              Faixa recomendada: 10 mA (econômico) a 20 mA (brilho padrão).
            </p>
          </div>
        </div>

        {/* Results Box */}
        {isValid ? (
          <div className="mt-5 p-5 bg-gradient-to-br from-sky-50/80 to-cyan-50/50 rounded-xl border border-sky-200 text-slate-900">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-sky-200/80 gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Resistor Comercial Recomendado (E24)</span>
                <div className="text-3xl font-black text-sky-900 mt-0.5">
                  {commercialResistor} Ω
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500">Valor Exato Calculado</span>
                <div className="text-lg font-bold text-slate-700">
                  {calculatedResistor.toFixed(1)} Ω
                </div>
              </div>
            </div>

            {/* Step by step display */}
            <div className="py-3 text-xs space-y-1.5 text-slate-700 font-mono">
              <div className="font-semibold text-sky-900 font-sans">Passo a passo do cálculo:</div>
              <div>1. Queda de tensão sobre o resistor: VR = Vcc - Vled = {supplyVoltage.toFixed(1)}V - {activeVf.toFixed(1)}V = <strong>{voltageDiff.toFixed(2)} V</strong></div>
              <div>2. Lei de Ohm: R = VR / Iled = {voltageDiff.toFixed(2)}V / {(ledCurrentMa / 1000).toFixed(4)}A = <strong>{calculatedResistor.toFixed(1)} Ω</strong></div>
              <div>3. Potência dissipada no resistor: P = VR · I = {voltageDiff.toFixed(2)}V × {(ledCurrentMa / 1000).toFixed(4)}A = <strong>{(resistorPowerWatts * 1000).toFixed(1)} mW</strong> ({resistorPowerWatts.toFixed(3)} W)</div>
            </div>

            <div className="pt-3 border-t border-sky-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs gap-2">
              <div className="flex items-center gap-1.5 text-emerald-800">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>
                  Resistor comum de <strong>1/4 W (0,25 W = 250 mW)</strong> é perfeito (opera com {Math.round((resistorPowerWatts / 0.25) * 100)}% da capacidade térmica).
                </span>
              </div>
              <span className="text-[11px] text-slate-500">
                Corrente real: ~{realCurrentWithCommercial.toFixed(1)} mA
              </span>
            </div>
          </div>
        ) : (
          <div className="mt-5 p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-center gap-2">
            <Info className="w-4 h-4 text-rose-600 shrink-0" />
            <span>
              <strong>Tensão insuficiente:</strong> A tensão da fonte ({supplyVoltage}V) deve ser superior à tensão de condução do LED ({activeVf}V) para que ele possa acender!
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
