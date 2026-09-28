import React, { useState, useEffect } from 'react';
import { 
  BookMarked, 
  Search, 
  Filter, 
  ExternalLink, 
  Target, 
  FileText, 
  CheckCircle2, 
  Scale, 
  ArrowRight,
  BookOpen,
  Sparkles,
  Link as LinkIcon
} from 'lucide-react';
import { GlossaryItem, AxisId, CogemAction, DocumentAsset, Axis } from '../types/cogem';

interface GlossaryViewProps {
  glossary: GlossaryItem[];
  actions: CogemAction[];
  documents: DocumentAsset[];
  axes: Axis[];
  selectedTermSigla?: string | null;
  onClearSelectedTerm?: () => void;
  onSelectAxis: (axisId: AxisId) => void;
  onOpenDocument: (doc: DocumentAsset) => void;
  onOpenActionDetail: (action: CogemAction) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({
  glossary,
  actions,
  documents,
  axes,
  selectedTermSigla,
  onClearSelectedTerm,
  onSelectAxis,
  onOpenDocument,
  onOpenActionDetail
}) => {
  const [searchTerm, setSearchTerm] = useState(selectedTermSigla || '');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GlossaryItem | null>(null);

  useEffect(() => {
    if (selectedTermSigla) {
      setSearchTerm(selectedTermSigla);
      const found = glossary.find(g => g.sigla.toUpperCase() === selectedTermSigla.toUpperCase());
      if (found) setActiveItem(found);
    }
  }, [selectedTermSigla, glossary]);

  const categories = Array.from(new Set(glossary.map(g => g.categoria)));

  const filteredItems = glossary.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.categoria === selectedCategory;
    const matchesSearch = 
      item.sigla.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.extenso.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definicao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.contextoEnap.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.fundamentoLegal.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-12">
      
      {/* Title */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <span>VOCABULÁRIO CONTROLADO & GESTÃO DO CONHECIMENTO</span>
            <span aria-hidden="true">·</span>
            <span>COGEM / ENAP</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Glossário Pesquisável de Termos e Siglas Estratégicas
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Consulte a conceituação detalhada, aplicação real na Enap, embasamento legal e conexões diretas com 
            os eixos de atuação e os documentos técnicos catalogados.
          </p>
        </div>

        <div className="text-xs text-slate-500 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 shrink-0">
          Total: <strong>{glossary.length} siglas oficiais</strong> tabuladas
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar por sigla (EX, DFT, PGD, GC...), termo ou conceito..."
            className="w-full pl-9 pr-8 py-1.5 text-xs bg-slate-50 border border-slate-200 focus:border-emerald-600 rounded-lg outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                if (onClearSelectedTerm) onClearSelectedTerm();
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Todas as Categorias
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Selected Term Drawer / Highlight (if user clicked or searched specific term) */}
      {activeItem && (
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 text-white p-6 rounded-2xl border border-emerald-900 shadow-md space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xl font-bold bg-emerald-700 text-white px-3 py-1 rounded-lg">
                  {activeItem.sigla}
                </span>
                <span className="text-xs text-emerald-300 font-medium bg-emerald-900/60 px-2.5 py-1 rounded-md border border-emerald-700/60">
                  {activeItem.categoria}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {activeItem.extenso}
              </h3>
            </div>
            <button
              onClick={() => setActiveItem(null)}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-slate-800"
            >
              ✕ Fechar destaque
            </button>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {activeItem.definicao}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 text-xs">
              <strong className="text-emerald-400 block mb-1">Aplicação Prática na Enap:</strong>
              <span className="text-slate-200 leading-relaxed">{activeItem.contextoEnap}</span>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 text-xs">
              <strong className="text-amber-400 block mb-1">Fundamento Normativo / Legal:</strong>
              <span className="text-slate-200 leading-relaxed">{activeItem.fundamentoLegal}</span>
            </div>
          </div>

          {/* Connected axes & relevant documents */}
          <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Eixos correspondentes:</span>
              {activeItem.eixosRelacionados.map(eId => (
                <button
                  key={eId}
                  onClick={() => onSelectAxis(eId)}
                  className="font-semibold text-emerald-300 hover:text-emerald-100 bg-slate-800 px-2 py-1 rounded border border-slate-700"
                >
                  {eId.replace('eixo-', 'Eixo ')} ↗
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400">Ações com esta sigla:</span>
              <span className="font-bold text-emerald-400">
                {actions.filter(a => a.acronyms.includes(activeItem.sigla)).length} ações
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Glossary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => {
          const relatedActions = actions.filter(a => a.acronyms.includes(item.sigla));
          const relatedDocs = documents.filter(d => d.acronyms.includes(item.sigla));
          const isSelected = activeItem?.sigla === item.sigla;

          return (
            <div
              key={item.sigla}
              onClick={() => setActiveItem(item)}
              className={`bg-white p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                isSelected 
                  ? 'border-emerald-600 ring-2 ring-emerald-600/20 shadow-sm' 
                  : 'border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base font-bold text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">
                      {item.sigla}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      {item.categoria}
                    </span>
                  </div>

                  <span className="text-xs text-slate-400 font-mono">
                    {relatedActions.length} ações vinculadas
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm">
                  {item.extenso}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.definicao}
                </p>
              </div>

              {/* Contexto Enap and Legal Foundation */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs">
                <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100 text-emerald-950">
                  <strong className="block text-[11px] text-emerald-800 mb-0.5">
                    Aplicação na Enap:
                  </strong>
                  <span>{item.contextoEnap}</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <Scale className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{item.fundamentoLegal}</span>
                </div>

                {/* Eixos vinculados com Links */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <span>Eixos:</span>
                    {item.eixosRelacionados.map((eId) => (
                      <button
                        key={eId}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectAxis(eId);
                        }}
                        className="font-semibold text-slate-700 hover:text-emerald-700 bg-slate-100 px-1.5 py-0.5 rounded transition-colors"
                        title={`Ir para detalhes do ${eId.replace('eixo-', 'Eixo ')}`}
                      >
                        {eId.replace('eixo-', 'Eixo ')} ↗
                      </button>
                    ))}
                  </div>

                  {relatedDocs.length > 0 ? (
                    <div className="flex items-center gap-1">
                      <span className="text-[11px] text-indigo-700 font-medium">
                        {relatedDocs.length} doc{relatedDocs.length > 1 ? 's' : ''}:
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenDocument(relatedDocs[0]);
                        }}
                        className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 underline"
                      >
                        {relatedDocs[0].title.slice(0, 20)}...
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
