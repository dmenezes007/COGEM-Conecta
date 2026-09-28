import React from 'react';
import { 
  X, 
  Target, 
  CheckCircle2, 
  Circle, 
  Clock, 
  FileText, 
  User, 
  Tag, 
  Calendar,
  Layers,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { CogemAction, DocumentAsset, Axis, AxisId, ActionStatus } from '../types/cogem';

interface ActionDetailModalProps {
  action: CogemAction | null;
  axes: Axis[];
  documents: DocumentAsset[];
  onClose: () => void;
  onToggleDeliverable: (actionId: string, index: number) => void;
  onChangeStatus: (actionId: string, newStatus: ActionStatus) => void;
  onOpenDocument: (doc: DocumentAsset) => void;
  onSelectGlossaryTerm: (sigla: string) => void;
}

export const ActionDetailModal: React.FC<ActionDetailModalProps> = ({
  action,
  axes,
  documents,
  onClose,
  onToggleDeliverable,
  onChangeStatus,
  onOpenDocument,
  onSelectGlossaryTerm
}) => {
  if (!action) return null;

  const axis = axes.find(a => a.id === action.axisId);
  const linkedDocs = documents.filter(d => action.linkedDocumentIds?.includes(d.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div 
        className="bg-white w-full max-w-3xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/50">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-mono text-slate-400 font-semibold">{action.id}</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-slate-700">
                Eixo {axis?.number}: {axis?.title}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-indigo-600 font-medium">{action.scopeTag}</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              {action.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700">
          
          {/* Status and Progress banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div>
              <span className="text-slate-400 block text-[11px] mb-1">Status da Iniciativa:</span>
              <div className="flex items-center gap-1.5">
                {(['Planejado', 'Em Andamento', 'Concluído'] as ActionStatus[]).map((st) => (
                  <button
                    key={st}
                    onClick={() => onChangeStatus(action.id, st)}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors border ${
                      action.status === st
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-right">
              <span className="text-slate-400 block text-[11px] mb-1">Progresso Global:</span>
              <div className="flex items-center gap-2">
                <div className="w-28 bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      action.progress === 100 ? 'bg-emerald-600' : 'bg-indigo-600'
                    }`}
                    style={{ width: `${action.progress}%` }}
                  />
                </div>
                <span className="font-bold text-slate-900 tabular-nums">{action.progress}%</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Objetivo e Justificativa
            </h4>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
              {action.description}
            </p>
          </div>

          {/* Deliverables Checklist (Interactive!) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Marcos e Entregas Pactuadas
              </h4>
              <span className="text-slate-400 text-xs">
                Clique para marcar como concluído
              </span>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-2">
              {action.deliverables.map((del, idx) => (
                <div
                  key={idx}
                  onClick={() => onToggleDeliverable(action.id, idx)}
                  className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-slate-200/80 cursor-pointer hover:border-emerald-300 transition-colors"
                >
                  {del.done ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-slate-300 hover:text-slate-500 shrink-0" />
                  )}
                  <span className={`flex-1 text-xs ${del.done ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                    {del.title}
                  </span>
                  {del.targetDate && (
                    <span className="text-[11px] text-slate-400 font-mono shrink-0">
                      Prazo: {del.targetDate}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Knowledge Management classification */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-emerald-50/40 p-4 rounded-xl border border-emerald-100">
            <div>
              <span className="text-emerald-900 block text-[11px] font-semibold mb-0.5">
                Processo de Gestão do Conhecimento:
              </span>
              <span className="text-slate-800 font-medium text-xs">
                {action.knowledgeProcess}
              </span>
            </div>
            <div>
              <span className="text-emerald-900 block text-[11px] font-semibold mb-0.5">
                Natureza do Saber Envolvido:
              </span>
              <span className="text-slate-800 font-medium text-xs">
                Conhecimento {action.knowledgeType}
              </span>
            </div>
          </div>

          {/* Acronyms and Stakeholders */}
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-slate-800 text-xs block mb-1.5">
                Siglas do Glossário Associadas:
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {action.acronyms.map((sigla) => (
                  <button
                    key={sigla}
                    onClick={() => {
                      onClose();
                      onSelectGlossaryTerm(sigla);
                    }}
                    className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded border border-emerald-200 transition-colors"
                  >
                    {sigla} ↗
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <div>
                <strong className="text-slate-700">Responsável:</strong> {action.responsible}
              </div>
              <span aria-hidden="true">·</span>
              <div>
                <strong className="text-slate-700">Início:</strong> {action.startDate}
              </div>
              <span aria-hidden="true">·</span>
              <div>
                <strong className="text-slate-700">Previsão:</strong> {action.targetDate}
              </div>
            </div>
          </div>

          {/* Linked Documents */}
          {linkedDocs.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Documentos Técnicos Vinculados
              </h4>
              <div className="space-y-1.5">
                {linkedDocs.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => {
                      onClose();
                      onOpenDocument(doc);
                    }}
                    className="p-3 bg-white hover:bg-slate-50 rounded-lg border border-slate-200 cursor-pointer flex items-center justify-between gap-3 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="font-semibold text-slate-800 text-xs block">
                          {doc.title}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {doc.type} · {doc.reliability}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            Última atualização: {action.lastUpdate}
          </span>
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
