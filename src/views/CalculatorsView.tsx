import React, { useState } from 'react';
import { 
  Calculator, 
  Activity, 
  Flame, 
  Share2, 
  Sliders, 
  RefreshCw, 
  ArrowRightLeft, 
  Sun,
  AlertCircle, 
  CheckCircle2, 
  Plus, 
  Trash2,
  HelpCircle
} from 'lucide-react';
import { ResistorColorCodeWidget } from '../components/ResistorColorCodeWidget';
import { LedResistorWidget } from '../components/LedResistorWidget';
import { useProgress } from '../context/ProgressContext';

type CalcTab = 'ohm' | 'potencia' | 'serie' | 'paralelo' | 'unidades' | 'cores' | 'led';

export const CalculatorsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CalcTab>('ohm');
  const { unlockBadge, addPoints } = useProgress();

  const handleCalculated = () => {
    addPoints(10);
    unlockBadge('calculator-pro');
  };

  // ==========================================
  // 1. LEI DE OHM STATE & LOGIC
  // ==========================================
  const [ohmTarget, setOhmTarget] = useState<'V' | 'I' | 'R'>('V');
  const [ohmV, setOhmV] = useState<string>('12');
  const [ohmI, setOhmI] = useState<string>('0.5');
  const [ohmR, setOhmR] = useState<string>('24');
  const [ohmVUnit, setOhmVUnit] = useState<number>(1); // 1 = V, 0.001 = mV, 1000 = kV
  const [ohmIUnit, setOhmIUnit] = useState<number>(1); // 1 = A, 0.001 = mA, 0.000001 = µA
  const [ohmRUnit, setOhmRUnit] = useState<number>(1); // 1 = Ω, 1000 = kΩ, 1000000 = MΩ
  const [ohmResult, setOhmResult] = useState<{
    calculatedValue: number;
    unitLabel: string;
    steps: string[];
    formulaStr: string;
  } | null>(null);
  const [ohmError, setOhmError] = useState<string>('');

  const calculateOhm = () => {
    setOhmError('');
    setOhmResult(null);

    if (ohmTarget === 'V') {
      const iVal = parseFloat(ohmI);
      const rVal = parseFloat(ohmR);
      if (isNaN(iVal) || isNaN(rVal)) {
        setOhmError('Por favor, informe valores numéricos válidos para Corrente e Resistência.');
        return;
      }
      if (iVal < 0 || rVal < 0) {
        setOhmError('Corrente e Resistência não podem ser negativas em circuitos passivos.');
        return;
      }
      const iSI = iVal * ohmIUnit;
      const rSI = rVal * ohmRUnit;
      const vSI = rSI * iSI;

      setOhmResult({
        calculatedValue: vSI,
        unitLabel: 'Volts (V)',
        formulaStr: 'V = R · I',
        steps: [
          `1. Converter Corrente para o SI: ${iVal} × ${ohmIUnit} = ${iSI} A`,
          `2. Converter Resistência para o SI: ${rVal} × ${ohmRUnit} = ${rSI} Ω`,
          `3. Aplicar a 1ª Lei de Ohm: V = ${rSI} Ω × ${iSI} A = ${vSI.toFixed(4)} V`
        ]
      });
      handleCalculated();
    } else if (ohmTarget === 'I') {
      const vVal = parseFloat(ohmV);
      const rVal = parseFloat(ohmR);
      if (isNaN(vVal) || isNaN(rVal)) {
        setOhmError('Por favor, informe valores numéricos válidos para Tensão e Resistência.');
        return;
      }
      if (rVal <= 0) {
        setOhmError('A resistência deve ser maior que zero para evitar divisão por zero (curto-circuito).');
        return;
      }
      if (vVal < 0) {
        setOhmError('Tensão não pode ser negativa nesta calculadora básica.');
        return;
      }
      const vSI = vVal * ohmVUnit;
      const rSI = rVal * ohmRUnit;
      const iSI = vSI / rSI;

      setOhmResult({
        calculatedValue: iSI,
        unitLabel: 'Ampères (A)',
        formulaStr: 'I = V / R',
        steps: [
          `1. Converter Tensão para o SI: ${vVal} × ${ohmVUnit} = ${vSI} V`,
          `2. Converter Resistência para o SI: ${rVal} × ${ohmRUnit} = ${rSI} Ω`,
          `3. Aplicar a Lei de Ohm: I = ${vSI} V / ${rSI} Ω = ${iSI.toFixed(6)} A (${(iSI * 1000).toFixed(2)} mA)`
        ]
      });
      handleCalculated();
    } else {
      // Target R
      const vVal = parseFloat(ohmV);
      const iVal = parseFloat(ohmI);
      if (isNaN(vVal) || isNaN(iVal)) {
        setOhmError('Por favor, informe valores numéricos válidos para Tensão e Corrente.');
        return;
      }
      if (iVal <= 0) {
        setOhmError('A corrente deve ser estritamente maior que zero para calcular a resistência.');
        return;
      }
      if (vVal < 0) {
        setOhmError('Tensão não pode ser negativa nesta calculadora básica.');
        return;
      }
      const vSI = vVal * ohmVUnit;
      const iSI = iVal * ohmIUnit;
      const rSI = vSI / iSI;

      setOhmResult({
        calculatedValue: rSI,
        unitLabel: 'Ohms (Ω)',
        formulaStr: 'R = V / I',
        steps: [
          `1. Converter Tensão para o SI: ${vVal} × ${ohmVUnit} = ${vSI} V`,
          `2. Converter Corrente para o SI: ${iVal} × ${ohmIUnit} = ${iSI} A`,
          `3. Aplicar a Lei de Ohm: R = ${vSI} V / ${iSI} A = ${rSI.toFixed(2)} Ω`
        ]
      });
      handleCalculated();
    }
  };

  // ==========================================
  // 2. POTÊNCIA ELÉTRICA STATE & LOGIC
  // ==========================================
  const [powerMode, setPowerMode] = useState<'VI' | 'RI' | 'VR'>('VI');
  const [powV, setPowV] = useState<string>('12');
  const [powI, setPowI] = useState<string>('2');
  const [powR, setPowR] = useState<string>('6');
  const [powResult, setPowResult] = useState<{
    watts: number;
    formula: string;
    steps: string[];
  } | null>(null);
  const [powError, setPowError] = useState<string>('');

  const calculatePower = () => {
    setPowError('');
    setPowResult(null);

    if (powerMode === 'VI') {
      const v = parseFloat(powV);
      const i = parseFloat(powI);
      if (isNaN(v) || isNaN(i) || v < 0 || i < 0) {
        setPowError('Insira valores positivos e válidos para Tensão (V) e Corrente (I).');
        return;
      }
      const p = v * i;
      setPowResult({
        watts: p,
        formula: 'P = V · I',
        steps: [
          `1. Identificar dados: V = ${v} V, I = ${i} A`,
          `2. Multiplicação direta: P = ${v} × ${i} = ${p.toFixed(3)} W`,
          `3. Equivalência: ${(p * 1000).toFixed(1)} mW ou ${(p / 1000).toFixed(4)} kW`
        ]
      });
      handleCalculated();
    } else if (powerMode === 'RI') {
      const r = parseFloat(powR);
      const i = parseFloat(powI);
      if (isNaN(r) || isNaN(i) || r < 0 || i < 0) {
        setPowError('Insira valores positivos e válidos para Resistência (Ω) e Corrente (I).');
        return;
      }
      const p = r * Math.pow(i, 2);
      setPowResult({
        watts: p,
        formula: 'P = R · I²',
        steps: [
          `1. Elevar a corrente ao quadrado: I² = (${i})² = ${(i * i).toFixed(4)} A²`,
          `2. Multiplicar pela resistência: P = ${r} Ω × ${(i * i).toFixed(4)} = ${p.toFixed(3)} W (Efeito Joule)`
        ]
      });
      handleCalculated();
    } else {
      const v = parseFloat(powV);
      const r = parseFloat(powR);
      if (isNaN(v) || isNaN(r) || v < 0 || r <= 0) {
        setPowError('Insira tensão válida e resistência estritamente maior que zero.');
        return;
      }
      const p = Math.pow(v, 2) / r;
      setPowResult({
        watts: p,
        formula: 'P = V² / R',
        steps: [
          `1. Elevar a tensão ao quadrado: V² = (${v})² = ${(v * v).toFixed(2)} V²`,
          `2. Dividir pela resistência: P = ${(v * v).toFixed(2)} / ${r} Ω = ${p.toFixed(3)} W`
        ]
      });
      handleCalculated();
    }
  };

  // ==========================================
  // 3. RESISTÊNCIA EM SÉRIE
  // ==========================================
  const [seriesResistors, setSeriesResistors] = useState<{ id: number; val: string; unit: number }[]>([
    { id: 1, val: '100', unit: 1 },
    { id: 2, val: '220', unit: 1 },
    { id: 3, val: '470', unit: 1 },
  ]);
  const [seriesResult, setSeriesResult] = useState<{
    req: number;
    steps: string[];
  } | null>(null);
  const [seriesError, setSeriesError] = useState<string>('');

  const addSeriesResistor = () => {
    setSeriesResistors(prev => [...prev, { id: Date.now(), val: '100', unit: 1 }]);
  };

  const removeSeriesResistor = (id: number) => {
    if (seriesResistors.length <= 2) {
      setSeriesError('Mantenha ao menos 2 resistores para formar uma associação.');
      return;
    }
    setSeriesResistors(prev => prev.filter(r => r.id !== id));
  };

  const updateSeriesResistor = (id: number, val: string, unit: number) => {
    setSeriesResistors(prev => prev.map(r => r.id === id ? { ...r, val, unit } : r));
  };

  const calculateSeries = () => {
    setSeriesError('');
    setSeriesResult(null);

    let total = 0;
    const stepsList: string[] = [];

    for (let i = 0; i < seriesResistors.length; i++) {
      const num = parseFloat(seriesResistors[i].val);
      if (isNaN(num) || num <= 0) {
        setSeriesError(`Resistor R${i + 1} possui valor inválido. Digite um número positivo.`);
        return;
      }
      const siVal = num * seriesResistors[i].unit;
      total += siVal;
      stepsList.push(`R${i + 1} = ${num} × ${seriesResistors[i].unit} = ${siVal} Ω`);
    }

    setSeriesResult({
      req: total,
      steps: [
        'Fórmula: Req = R1 + R2 + ... + Rn',
        ...stepsList,
        `Soma total: Req = ${total.toLocaleString('pt-BR', { maximumFractionDigits: 3 })} Ω`
      ]
    });
    handleCalculated();
  };

  // ==========================================
  // 4. RESISTÊNCIA EM PARALELO
  // ==========================================
  const [parallelResistors, setParallelResistors] = useState<{ id: number; val: string; unit: number }[]>([
    { id: 1, val: '60', unit: 1 },
    { id: 2, val: '40', unit: 1 },
  ]);
  const [parallelResult, setParallelResult] = useState<{
    req: number;
    steps: string[];
  } | null>(null);
  const [parallelError, setParallelError] = useState<string>('');

  const addParallelResistor = () => {
    setParallelResistors(prev => [...prev, { id: Date.now(), val: '100', unit: 1 }]);
  };

  const removeParallelResistor = (id: number) => {
    if (parallelResistors.length <= 2) {
      setParallelError('Mantenha ao menos 2 resistores para associação paralela.');
      return;
    }
    setParallelResistors(prev => prev.filter(r => r.id !== id));
  };

  const updateParallelResistor = (id: number, val: string, unit: number) => {
    setParallelResistors(prev => prev.map(r => r.id === id ? { ...r, val, unit } : r));
  };

  const calculateParallel = () => {
    setParallelError('');
    setParallelResult(null);

    let sumConductance = 0;
    const stepsList: string[] = [];

    for (let i = 0; i < parallelResistors.length; i++) {
      const num = parseFloat(parallelResistors[i].val);
      if (isNaN(num) || num <= 0) {
        setParallelError(`Resistor R${i + 1} possui valor inválido. Digite um número positivo.`);
        return;
      }
      const siVal = num * parallelResistors[i].unit;
      sumConductance += 1 / siVal;
      stepsList.push(`1/R${i + 1} = 1 / ${siVal} = ${(1 / siVal).toFixed(6)} S (Siemens)`);
    }

    const req = 1 / sumConductance;

    const specialSteps: string[] = [];
    if (parallelResistors.length === 2) {
      const r1 = parseFloat(parallelResistors[0].val) * parallelResistors[0].unit;
      const r2 = parseFloat(parallelResistors[1].val) * parallelResistors[1].unit;
      specialSteps.push(`Método alternativo para 2 resistores (Produto pela Soma):`);
      specialSteps.push(`Req = (R1 · R2) / (R1 + R2) = (${r1} · ${r2}) / (${r1} + ${r2}) = ${(r1 * r2)} / ${(r1 + r2)} = ${req.toFixed(3)} Ω`);
    }

    setParallelResult({
      req,
      steps: [
        'Fórmula Geral: 1/Req = 1/R1 + 1/R2 + ... + 1/Rn',
        ...stepsList,
        `Soma dos inversos: 1/Req = ${sumConductance.toFixed(6)}`,
        `Invertendo o resultado: Req = 1 / ${sumConductance.toFixed(6)} = ${req.toFixed(3)} Ω`,
        ...specialSteps
      ]
    });
    handleCalculated();
  };

  // ==========================================
  // 5. CONVERSOR DE UNIDADES ELÉTRICAS
  // ==========================================
  const [convCategory, setConvCategory] = useState<'tensao' | 'corrente' | 'resistencia' | 'potencia' | 'capacitancia'>('tensao');
  const [convValue, setConvValue] = useState<string>('1');
  const [convFromUnit, setConvFromUnit] = useState<string>('V');
  const [convResult, setConvResult] = useState<{ [unit: string]: number } | null>(null);

  const CONVERSIONS = {
    tensao: {
      base: 'V',
      units: [
        { key: 'µV', factor: 0.000001, label: 'Microvolts (µV)' },
        { key: 'mV', factor: 0.001, label: 'Milivolts (mV)' },
        { key: 'V', factor: 1, label: 'Volts (V) [SI]' },
        { key: 'kV', factor: 1000, label: 'Quilovolts (kV)' },
        { key: 'MV', factor: 1000000, label: 'Megavolts (MV)' },
      ]
    },
    corrente: {
      base: 'A',
      units: [
        { key: 'µA', factor: 0.000001, label: 'Microampères (µA)' },
        { key: 'mA', factor: 0.001, label: 'Miliampères (mA)' },
        { key: 'A', factor: 1, label: 'Ampères (A) [SI]' },
        { key: 'kA', factor: 1000, label: 'Quiloampères (kA)' },
      ]
    },
    resistencia: {
      base: 'Ω',
      units: [
        { key: 'mΩ', factor: 0.001, label: 'Miliohms (mΩ)' },
        { key: 'Ω', factor: 1, label: 'Ohms (Ω) [SI]' },
        { key: 'kΩ', factor: 1000, label: 'Quilo-ohms (kΩ)' },
        { key: 'MΩ', factor: 1000000, label: 'Megaohms (MΩ)' },
      ]
    },
    potencia: {
      base: 'W',
      units: [
        { key: 'mW', factor: 0.001, label: 'Miliwatts (mW)' },
        { key: 'W', factor: 1, label: 'Watts (W) [SI]' },
        { key: 'kW', factor: 1000, label: 'Quilowatts (kW)' },
        { key: 'MW', factor: 1000000, label: 'Megawatts (MW)' },
        { key: 'HP', factor: 745.7, label: 'Horse Power (HP)' },
        { key: 'CV', factor: 735.5, label: 'Cavalo-Vapor (CV)' },
      ]
    },
    capacitancia: {
      base: 'F',
      units: [
        { key: 'pF', factor: 1e-12, label: 'Picofarads (pF)' },
        { key: 'nF', factor: 1e-9, label: 'Nanofarads (nF)' },
        { key: 'µF', factor: 1e-6, label: 'Microfarads (µF)' },
        { key: 'mF', factor: 1e-3, label: 'Milifarads (mF)' },
        { key: 'F', factor: 1, label: 'Farads (F) [SI]' },
      ]
    }
  };

  const handleConvert = () => {
    const val = parseFloat(convValue);
    if (isNaN(val)) return;

    const currentCat = CONVERSIONS[convCategory];
    const sourceUnitObj = currentCat.units.find(u => u.key === convFromUnit) || currentCat.units[0];
    const baseVal = val * sourceUnitObj.factor;

    const out: { [unit: string]: number } = {};
    currentCat.units.forEach(u => {
      out[u.key] = baseVal / u.factor;
    });
    setConvResult(out);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div>
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full mb-2">
          <Calculator className="w-3.5 h-3.5" />
          Ferramentas Numéricas de Bancada
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Calculadoras Elétricas Funcionais
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Resultados matematicamente exatos, validação de entradas, fórmulas exibidas e resolução passo a passo.
        </p>
      </div>

      {/* Tabs Menu */}
      <div className="flex overflow-x-auto gap-2 border-b border-slate-200 pb-2 no-scrollbar">
        <button
          onClick={() => setActiveTab('ohm')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeTab === 'ohm'
              ? 'bg-sky-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Activity className="w-4 h-4" /> Lei de Ohm (V, I, R)
        </button>

        <button
          onClick={() => setActiveTab('potencia')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeTab === 'potencia'
              ? 'bg-sky-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Flame className="w-4 h-4" /> Potência Elétrica
        </button>

        <button
          onClick={() => setActiveTab('serie')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeTab === 'serie'
              ? 'bg-sky-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Share2 className="w-4 h-4" /> Resistor em Série
        </button>

        <button
          onClick={() => setActiveTab('paralelo')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeTab === 'paralelo'
              ? 'bg-sky-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Share2 className="w-4 h-4" /> Resistor em Paralelo
        </button>

        <button
          onClick={() => setActiveTab('unidades')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeTab === 'unidades'
              ? 'bg-sky-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <ArrowRightLeft className="w-4 h-4" /> Conversor de Unidades
        </button>

        <button
          onClick={() => setActiveTab('cores')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeTab === 'cores'
              ? 'bg-sky-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Sliders className="w-4 h-4" /> Código de Cores
        </button>

        <button
          onClick={() => setActiveTab('led')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
            activeTab === 'led'
              ? 'bg-sky-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Sun className="w-4 h-4" /> Resistor para LED
        </button>
      </div>

      {/* ========================================================
          TAB 1: LEI DE OHM
      ======================================================== */}
      {activeTab === 'ohm' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 max-w-3xl mx-auto">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Activity className="w-5 h-5 text-sky-600" />
              Calculadora da Primeira Lei de Ohm
            </h2>
            <p className="text-xs text-slate-500">Escolha qual variável deseja descobrir e informe os outros dois dados.</p>
          </div>

          {/* Radio Target Selection */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              O que você deseja calcular?
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => { setOhmTarget('V'); setOhmResult(null); }}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                  ohmTarget === 'V' ? 'bg-sky-600 text-white shadow-sm' : 'bg-white border text-slate-700 hover:bg-slate-100'
                }`}
              >
                Tensão (V)
              </button>
              <button
                type="button"
                onClick={() => { setOhmTarget('I'); setOhmResult(null); }}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                  ohmTarget === 'I' ? 'bg-sky-600 text-white shadow-sm' : 'bg-white border text-slate-700 hover:bg-slate-100'
                }`}
              >
                Corrente (I)
              </button>
              <button
                type="button"
                onClick={() => { setOhmTarget('R'); setOhmResult(null); }}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                  ohmTarget === 'R' ? 'bg-sky-600 text-white shadow-sm' : 'bg-white border text-slate-700 hover:bg-slate-100'
                }`}
              >
                Resistência (R)
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Field: Voltage (if not target) */}
            {ohmTarget !== 'V' && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tensão Elétrica (V)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="any"
                    value={ohmV}
                    onChange={e => setOhmV(e.target.value)}
                    placeholder="Ex: 12"
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                  <select
                    value={ohmVUnit}
                    onChange={e => setOhmVUnit(parseFloat(e.target.value))}
                    className="p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-700"
                  >
                    <option value={0.001}>mV</option>
                    <option value={1}>V</option>
                    <option value={1000}>kV</option>
                  </select>
                </div>
              </div>
            )}

            {/* Field: Current (if not target) */}
            {ohmTarget !== 'I' && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Corrente Elétrica (I)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="any"
                    value={ohmI}
                    onChange={e => setOhmI(e.target.value)}
                    placeholder="Ex: 0.5"
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                  <select
                    value={ohmIUnit}
                    onChange={e => setOhmIUnit(parseFloat(e.target.value))}
                    className="p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-700"
                  >
                    <option value={0.000001}>µA</option>
                    <option value={0.001}>mA</option>
                    <option value={1}>A</option>
                  </select>
                </div>
              </div>
            )}

            {/* Field: Resistance (if not target) */}
            {ohmTarget !== 'R' && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Resistência Elétrica (R)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="any"
                    value={ohmR}
                    onChange={e => setOhmR(e.target.value)}
                    placeholder="Ex: 24"
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                  <select
                    value={ohmRUnit}
                    onChange={e => setOhmRUnit(parseFloat(e.target.value))}
                    className="p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-700"
                  >
                    <option value={1}>Ω</option>
                    <option value={1000}>kΩ</option>
                    <option value={1000000}>MΩ</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Error Message */}
          {ohmError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{ohmError}</span>
            </div>
          )}

          {/* Action Button */}
          <button
            type="button"
            onClick={calculateOhm}
            className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-all"
          >
            Calcular {ohmTarget === 'V' ? 'Tensão' : ohmTarget === 'I' ? 'Corrente' : 'Resistência'}
          </button>

          {/* Result Presentation */}
          {ohmResult && (
            <div className="p-5 bg-sky-50/70 border border-sky-200 rounded-xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-sky-200 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Resultado Oficial</span>
                  <div className="text-3xl font-black text-sky-950 mt-0.5">
                    {ohmResult.calculatedValue.toLocaleString('pt-BR', { maximumFractionDigits: 5 })}{' '}
                    <span className="text-lg font-bold text-sky-700">{ohmResult.unitLabel}</span>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-white border border-sky-300 rounded-lg font-mono text-xs font-bold text-sky-800 self-start sm:self-auto">
                  {ohmResult.formulaStr}
                </div>
              </div>

              {/* Step by step */}
              <div className="space-y-1.5 text-xs text-slate-700 font-mono pt-1">
                <span className="font-sans font-bold text-slate-900 block">Demonstração Passo a Passo:</span>
                {ohmResult.steps.map((st, i) => (
                  <div key={i}>{st}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          TAB 2: POTÊNCIA ELÉTRICA
      ======================================================== */}
      {activeTab === 'potencia' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 max-w-3xl mx-auto">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-500" />
              Calculadora de Potência Elétrica
            </h2>
            <p className="text-xs text-slate-500">Calcule a potência dissipada ou fornecida a partir de qualquer par de grandezas.</p>
          </div>

          <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-xl text-xs font-bold">
            <button
              onClick={() => { setPowerMode('VI'); setPowResult(null); }}
              className={`py-2 rounded-lg transition-colors ${powerMode === 'VI' ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-600'}`}
            >
              Com Tensão e Corrente (P = V · I)
            </button>
            <button
              onClick={() => { setPowerMode('RI'); setPowResult(null); }}
              className={`py-2 rounded-lg transition-colors ${powerMode === 'RI' ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-600'}`}
            >
              Com Resistência e Corrente (P = R · I²)
            </button>
            <button
              onClick={() => { setPowerMode('VR'); setPowResult(null); }}
              className={`py-2 rounded-lg transition-colors ${powerMode === 'VR' ? 'bg-white text-sky-700 shadow-sm' : 'text-slate-600'}`}
            >
              Com Tensão e Resistência (P = V² / R)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(powerMode === 'VI' || powerMode === 'VR') && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tensão Elétrica (Volts)</label>
                <input
                  type="number"
                  step="any"
                  value={powV}
                  onChange={e => setPowV(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            )}

            {(powerMode === 'VI' || powerMode === 'RI') && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Corrente Elétrica (Ampères)</label>
                <input
                  type="number"
                  step="any"
                  value={powI}
                  onChange={e => setPowI(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            )}

            {(powerMode === 'RI' || powerMode === 'VR') && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Resistência Elétrica (Ohms)</label>
                <input
                  type="number"
                  step="any"
                  value={powR}
                  onChange={e => setPowR(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>
            )}
          </div>

          {powError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{powError}</span>
            </div>
          )}

          <button
            type="button"
            onClick={calculatePower}
            className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-all"
          >
            Calcular Potência Elétrica
          </button>

          {powResult && (
            <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-amber-200 gap-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Potência Calculada</span>
                  <div className="text-3xl font-black text-amber-950 mt-0.5">
                    {powResult.watts.toLocaleString('pt-BR', { maximumFractionDigits: 4 })}{' '}
                    <span className="text-lg font-bold text-amber-800">Watts (W)</span>
                  </div>
                </div>
                <div className="px-3 py-1.5 bg-white border border-amber-300 rounded-lg font-mono text-xs font-bold text-amber-900 self-start sm:self-auto">
                  {powResult.formula}
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-700 font-mono">
                <span className="font-sans font-bold text-slate-900 block">Passo a Passo:</span>
                {powResult.steps.map((st, i) => (
                  <div key={i}>{st}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          TAB 3: RESISTÊNCIA EM SÉRIE
      ======================================================== */}
      {activeTab === 'serie' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-sky-600" />
                Resistência Equivalente em Série
              </h2>
              <p className="text-xs text-slate-500">Adicione quantos resistores quiser. A corrente é a mesma em todos eles.</p>
            </div>
            <button
              onClick={addSeriesResistor}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-xl text-xs font-bold border border-sky-200 transition-colors self-start sm:self-auto"
            >
              <Plus className="w-4 h-4" /> Adicionar Resistor
            </button>
          </div>

          <div className="space-y-3">
            {seriesResistors.map((r, idx) => (
              <div key={r.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-600 w-8">R{idx + 1}:</span>
                <input
                  type="number"
                  step="any"
                  value={r.val}
                  onChange={e => updateSeriesResistor(r.id, e.target.value, r.unit)}
                  className="w-full p-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold"
                  placeholder="Valor"
                />
                <select
                  value={r.unit}
                  onChange={e => updateSeriesResistor(r.id, r.val, parseFloat(e.target.value))}
                  className="p-2 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700"
                >
                  <option value={1}>Ω</option>
                  <option value={1000}>kΩ</option>
                  <option value={1000000}>MΩ</option>
                </select>
                <button
                  onClick={() => removeSeriesResistor(r.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Remover resistor"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {seriesError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{seriesError}</span>
            </div>
          )}

          <button
            type="button"
            onClick={calculateSeries}
            className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-all"
          >
            Calcular Resistência Equivalente (Req Série)
          </button>

          {seriesResult && (
            <div className="p-5 bg-sky-50/70 border border-sky-200 rounded-xl space-y-3">
              <div className="pb-3 border-b border-sky-200">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Resistência Equivalente Total</span>
                <div className="text-3xl font-black text-sky-950 mt-0.5">
                  {seriesResult.req.toLocaleString('pt-BR', { maximumFractionDigits: 3 })}{' '}
                  <span className="text-lg font-bold text-sky-700">Ω</span>{' '}
                  {seriesResult.req >= 1000 && (
                    <span className="text-sm font-normal text-slate-600">
                      ({(seriesResult.req / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 3 })} kΩ)
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-700 font-mono">
                <span className="font-sans font-bold text-slate-900 block">Passo a Passo:</span>
                {seriesResult.steps.map((st, i) => (
                  <div key={i}>{st}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          TAB 4: RESISTÊNCIA EM PARALELO
      ======================================================== */}
      {activeTab === 'paralelo' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-cyan-600" />
                Resistência Equivalente em Paralelo
              </h2>
              <p className="text-xs text-slate-500">Todos os ramos ficam submetidos à mesma ddp. O resultado é sempre menor que o menor resistor.</p>
            </div>
            <button
              onClick={addParallelResistor}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 rounded-xl text-xs font-bold border border-cyan-200 transition-colors self-start sm:self-auto"
            >
              <Plus className="w-4 h-4" /> Adicionar Ramo
            </button>
          </div>

          <div className="space-y-3">
            {parallelResistors.map((r, idx) => (
              <div key={r.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-600 w-8">R{idx + 1}:</span>
                <input
                  type="number"
                  step="any"
                  value={r.val}
                  onChange={e => updateParallelResistor(r.id, e.target.value, r.unit)}
                  className="w-full p-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold"
                  placeholder="Valor"
                />
                <select
                  value={r.unit}
                  onChange={e => updateParallelResistor(r.id, r.val, parseFloat(e.target.value))}
                  className="p-2 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700"
                >
                  <option value={1}>Ω</option>
                  <option value={1000}>kΩ</option>
                  <option value={1000000}>MΩ</option>
                </select>
                <button
                  onClick={() => removeParallelResistor(r.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Remover resistor"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {parallelError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{parallelError}</span>
            </div>
          )}

          <button
            type="button"
            onClick={calculateParallel}
            className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md transition-all"
          >
            Calcular Resistência Equivalente (Req Paralelo)
          </button>

          {parallelResult && (
            <div className="p-5 bg-cyan-50/70 border border-cyan-200 rounded-xl space-y-3">
              <div className="pb-3 border-b border-cyan-200">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-800">Resistência Equivalente Paralela</span>
                <div className="text-3xl font-black text-cyan-950 mt-0.5">
                  {parallelResult.req.toLocaleString('pt-BR', { maximumFractionDigits: 3 })}{' '}
                  <span className="text-lg font-bold text-cyan-800">Ω</span>{' '}
                  {parallelResult.req >= 1000 && (
                    <span className="text-sm font-normal text-slate-600">
                      ({(parallelResult.req / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 3 })} kΩ)
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-700 font-mono">
                <span className="font-sans font-bold text-slate-900 block">Demonstração Passo a Passo:</span>
                {parallelResult.steps.map((st, i) => (
                  <div key={i}>{st}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          TAB 5: CONVERSOR DE UNIDADES
      ======================================================== */}
      {activeTab === 'unidades' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6 max-w-3xl mx-auto">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-sky-600" />
              Conversor Universal de Grandezas Elétricas
            </h2>
            <p className="text-xs text-slate-500">Converta instantaneamente múltiplos e submúltiplos do Sistema Internacional (SI).</p>
          </div>

          {/* Grandezas Buttons */}
          <div className="flex flex-wrap gap-2">
            {(['tensao', 'corrente', 'resistencia', 'potencia', 'capacitancia'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setConvCategory(cat);
                  setConvFromUnit(CONVERSIONS[cat].units[2]?.key || CONVERSIONS[cat].units[0].key);
                  setConvResult(null);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors ${
                  convCategory === cat
                    ? 'bg-sky-600 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat === 'tensao' ? 'Tensão (V)' : cat === 'corrente' ? 'Corrente (A)' : cat === 'resistencia' ? 'Resistência (Ω)' : cat === 'potencia' ? 'Potência (W)' : 'Capacitância (F)'}
              </button>
            ))}
          </div>

          {/* Value input and unit */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1">Valor a converter</label>
              <input
                type="number"
                step="any"
                value={convValue}
                onChange={e => setConvValue(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-semibold"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Unidade de origem</label>
              <select
                value={convFromUnit}
                onChange={e => setConvFromUnit(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800"
              >
                {CONVERSIONS[convCategory].units.map(u => (
                  <option key={u.key} value={u.key}>
                    {u.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="button"
            onClick={handleConvert}
            className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-all"
          >
            Converter Unidades
          </button>

          {/* Results Table */}
          {convResult && (
            <div className="overflow-hidden border border-slate-200 rounded-xl">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Unidade</th>
                    <th className="p-3">Valor Convertido</th>
                    <th className="p-3">Notação Científica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {CONVERSIONS[convCategory].units.map(u => {
                    const val = convResult[u.key];
                    return (
                      <tr key={u.key} className={u.key === convFromUnit ? 'bg-sky-50/50 font-bold' : ''}>
                        <td className="p-3 text-slate-800">{u.label}</td>
                        <td className="p-3 font-mono text-slate-900 font-bold">
                          {val.toLocaleString('pt-BR', { maximumFractionDigits: 8 })} {u.key}
                        </td>
                        <td className="p-3 font-mono text-slate-500">
                          {val.toExponential(4)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          TAB 6: CÓDIGO DE CORES
      ======================================================== */}
      {activeTab === 'cores' && (
        <div>
          <ResistorColorCodeWidget />
        </div>
      )}

      {/* ========================================================
          TAB 7: RESISTOR PARA LED
      ======================================================== */}
      {activeTab === 'led' && (
        <div>
          <LedResistorWidget />
        </div>
      )}
    </div>
  );
};
