import React from 'react';
import { 
  X, 
  Target, 
  FileText, 
  BookMarked, 
  ArrowRight, 
  Users, 
  CheckCircle2, 
  Scale, 
  Layers, 
  ExternalLink,
  Sparkles,
  BarChart3,
  BrainCircuit
} from 'lucide-react';
import { Axis, CogemAction, DocumentAsset, GlossaryItem, AxisId } from '../types/cogem';

interface AxisDetailModalProps {
  axis: Axis | null;
  actions: CogemAction[];
  documents: DocumentAsset[];
  glossary: GlossaryItem[];
  onClose: () => void;
  onOpenActionDetail: (action: CogemAction) => void;
  onOpenDocument: (doc: DocumentAsset) => void;
  onSelectGlossaryTerm: (sigla: string) => void;
  onGoToAxisTab: (axisId: AxisId) => void;
}

export const AxisDetailModal: React.FC<AxisDetailModalProps> = ({
  axis,
  actions,
  documents,
  glossary,
  onClose,
  onOpenActionDetail,
  onOpenDocument,
  onSelectGlossaryTerm,
  onGoToAxisTab
}) => {
  if (!axis) return null;

  // Actions for this axis
  const axisActions = actions.filter(a => a.axisId === axis.id);
  // Documents for this axis
  const axisDocs = documents.filter(d => d.axisId === axis.id);
  // Glossary items related to this axis
  const axisGlossary = glossary.filter(g => g.eixosRelacionados.includes(axis.id));

  const completedCount = axisActions.filter(a => a.status === 'Concluído').length;
  const avgProgress = Math.round(
    axisActions.reduce((acc, a) => acc + a.progress, 0) / (axisActions.length || 1)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/70">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="w-5 h-5 rounded bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
                {axis.number}
              </span>
              <span>EIXO ESTRATÉGICO DA COGEM</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700">ENAP</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              {axis.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm">
          
          {/* Executive Overview & Metrics Banner */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div>
              <span className="text-slate-400 block text-[11px]">Progresso Médio</span>
              <span className="text-xl font-bold text-slate-900 tabular-nums">{avgProgress}%</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Ações Totais</span>
              <span className="text-xl font-bold text-slate-900 tabular-nums">{axisActions.length}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Concluídas</span>
              <span className="text-xl font-bold text-emerald-700 tabular-nums">{completedCount}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Documentos</span>
              <span className="text-xl font-bold text-indigo-700 tabular-nums">{axisDocs.length}</span>
            </div>
          </div>

          {/* Description & Scope (from official spreadsheet) */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Descrição Estratégica & Abrangência Oficial
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {axis.description}
            </p>

            <div className="bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100">
              <span className="font-semibold text-emerald-950 block text-xs mb-1">
                Abrangência tabulada na planilha da COGEM:
              </span>
              <p className="font-mono text-xs text-emerald-900 leading-relaxed">
                "{axis.scopeSummary}"
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {axis.scopeItems.map((item, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md border border-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Related Glossary Terms (Interactive!) */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-emerald-600" />
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Termos e Siglas do Glossário Neste Eixo ({axisGlossary.length})
                </h4>
              </div>
              <span className="text-xs text-slate-400">
                Clique na sigla para ver a definição detalhada
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {axisGlossary.map((item) => (
                <div
                  key={item.sigla}
                  onClick={() => {
                    onClose();
                    onSelectGlossaryTerm(item.sigla);
                  }}
                  className="p-3 bg-white hover:bg-emerald-50/40 rounded-xl border border-slate-200 hover:border-emerald-300 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono font-bold text-xs text-slate-900 bg-slate-100 group-hover:bg-emerald-100 group-hover:text-emerald-900 px-2 py-0.5 rounded border border-slate-200 transition-colors">
                      {item.sigla}
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-emerald-700 font-medium">
                      Ver no Glossário ↗
                    </span>
                  </div>
                  <div className="font-semibold text-slate-800 text-xs mb-1">
                    {item.extenso}
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {item.definicao}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Priority Actions */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-600" />
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Ações e Projetos em Execução ({axisActions.length})
                </h4>
              </div>
            </div>

            <div className="space-y-2">
              {axisActions.map((action) => (
                <div
                  key={action.id}
                  onClick={() => {
                    onClose();
                    onOpenActionDetail(action);
                  }}
                  className="p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono text-slate-400 font-medium">{action.id}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-medium text-slate-700">{action.scopeTag}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-indigo-600">{action.knowledgeProcess}</span>
                    </div>
                    <div className="font-semibold text-slate-900 text-xs sm:text-sm">
                      {action.title}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`text-[11px] px-2 py-0.5 rounded font-medium border ${
                      action.status === 'Concluído'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-indigo-50 text-indigo-800 border-indigo-200'
                    }`}>
                      {action.status} ({action.progress}%)
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technical Documents */}
          {axisDocs.length > 0 && (
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-600" />
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                  Documentos Técnicos deste Eixo ({axisDocs.length})
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {axisDocs.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => {
                      onClose();
                      onOpenDocument(doc);
                    }}
                    className="p-3 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 hover:border-emerald-300 transition-all cursor-pointer flex items-start justify-between gap-2"
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded block w-fit mb-1">
                        {doc.type} · {doc.reliability}
                      </span>
                      <div className="font-semibold text-slate-800 text-xs leading-snug">
                        {doc.title}
                      </div>
                      <span className="text-[11px] text-slate-400 mt-0.5 block">
                        {doc.readTime} · {doc.downloadSize}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Strategic alignment & governance */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <div>
              <strong className="text-slate-800">Alinhamento Estratégico Institucional:</strong>{' '}
              {axis.strategicAlignment.join(' · ')}
            </div>
            <div>
              <strong className="text-slate-800">Pontos Focais na Enap:</strong>{' '}
              {axis.keyLeaders.join(' · ')}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onGoToAxisTab(axis.id);
            }}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            <span>Ver todas as ações deste eixo na aba dedicada</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
