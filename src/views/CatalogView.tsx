import React, { useState } from 'react';
import { ComponentItem } from '../types';
import { componentsData } from '../data/componentsData';
import { 
  Search, 
  Cpu, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  X, 
  Info,
  Layers,
  Activity,
  Sliders,
  BatteryCharging,
  Sun,
  Zap,
  Tag
} from 'lucide-react';

export const CatalogView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [modalComponent, setModalComponent] = useState<ComponentItem | null>(null);

  const categories = [
    'Todos',
    'Passivos',
    'Semicondutores',
    'Eletromecânicos',
    'Circuitos Integrados',
    'Acessórios & Montagem'
  ];

  const filteredComponents = componentsData.filter(c => {
    const matchesCat = selectedCategory === 'Todos' || c.category === selectedCategory;
    const matchesQuery = 
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.technicalName.toLowerCase().includes(search.toLowerCase()) ||
      c.functionality.toLowerCase().includes(search.toLowerCase()) ||
      c.operatingPrinciple.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full mb-2">
            <Cpu className="w-3.5 h-3.5" />
            Biblioteca Visual Técnica
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Catálogo de Componentes Eletrônicos
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Símbolos esquemáticos, pinagem, funcionamento físico e cuidados de manuseio em bancada.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por componente, símbolo..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Component Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map(comp => (
          <div
            key={comp.id}
            className="bg-white rounded-2xl border border-slate-200 hover:border-sky-400 hover:shadow-electric transition-all p-5 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              {/* Card top */}
              <div className="flex items-start justify-between gap-3">
                <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                  {comp.category}
                </span>

                {/* Schematic symbol preview badge */}
                <div className="px-2 py-1 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono font-semibold text-slate-600">
                  {comp.symbol}
                </div>
              </div>

              {/* Title & Technical name */}
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {comp.name}
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  {comp.technicalName}
                </span>
              </div>

              {/* Functionality */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
                <strong className="text-slate-900 block mb-1">Função Principal:</strong>
                {comp.functionality}
              </div>

              {/* Quick Specs Snippet */}
              <div className="space-y-1 text-xs text-slate-600">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Especificações Típicas:</div>
                {comp.typicalSpecs.slice(0, 2).map((sp, i) => (
                  <div key={i} className="flex justify-between border-b border-slate-100 pb-1 text-[11px]">
                    <span className="text-slate-500">{sp.label}:</span>
                    <span className="font-semibold text-slate-800">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-amber-700 flex items-center gap-1 font-medium">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                Cuidados de manuseio
              </span>
              <button
                onClick={() => setModalComponent(comp)}
                className="px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs border border-sky-200 transition-colors"
              >
                Ver Ficha Completa
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
          <Info className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">Nenhum componente encontrado</h3>
          <p className="text-xs text-slate-500">Tente buscar por outro termo ou mude a categoria selecionada.</p>
        </div>
      )}

      {/* Detail Modal */}
      {modalComponent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              onClick={() => setModalComponent(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1 pr-8">
              <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                {modalComponent.category}
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                {modalComponent.name}
              </h2>
              <p className="text-xs text-slate-500 font-mono">
                {modalComponent.technicalName} • Símbolo: {modalComponent.symbol}
              </p>
            </div>

            {/* Pinout Section if available */}
            {modalComponent.pinout && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Terminais & Pinagem:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {modalComponent.pinout.map((pin, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 font-mono text-slate-800">
                      <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 font-bold text-[11px] flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span>{pin}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Operating Principle */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-sky-600" />
                Princípio Físico de Funcionamento
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-sky-50/40 p-4 rounded-xl border border-sky-100">
                {modalComponent.operatingPrinciple}
              </p>
            </div>

            {/* Practical Examples */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Exemplos de Utilização Prática
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {modalComponent.practicalApplications.map((app, i) => (
                  <li key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Handling Precautions & Safety */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-amber-900 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                Cuidados de Manuseio e Proteção em Bancada
              </h4>
              <ul className="space-y-2 bg-amber-50/80 p-4 rounded-xl border border-amber-200 text-xs text-amber-950/90">
                {modalComponent.handlingPrecautions.map((prec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 shrink-0 font-bold">•</span>
                    <span>{prec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications Grid */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-slate-900">Especificações Técnicas Típicas</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {modalComponent.typicalSpecs.map((spec, i) => (
                  <div key={i} className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between">
                    <span className="text-slate-500">{spec.label}:</span>
                    <span className="font-semibold text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Did you know curiosity */}
            {modalComponent.didYouKnow && (
              <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-xs text-indigo-900 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Curiosidade Histórica:</strong> {modalComponent.didYouKnow}
                </div>
              </div>
            )}

            {/* Bottom button */}
            <div className="pt-3 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setModalComponent(null)}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors"
              >
                Fechar Ficha Técnica
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
