import React, { useState } from 'react';
import { 
  Target, 
  Search, 
  Filter, 
  Plus, 
  CheckCircle2, 
  Circle, 
  Clock, 
  FileText, 
  User, 
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Layers,
  Sparkles
} from 'lucide-react';
import { Axis, CogemAction, DocumentAsset, AxisId, ActionStatus, KnowledgeProcess } from '../types/cogem';

interface AxesViewProps {
  axes: Axis[];
  actions: CogemAction[];
  documents: DocumentAsset[];
  selectedAxisId: AxisId | 'all';
  setSelectedAxisId: (axisId: AxisId | 'all') => void;
  onOpenActionDetail: (action: CogemAction) => void;
  onOpenDocument: (doc: DocumentAsset) => void;
  onOpenNewActionWithAxis: (axisId: AxisId) => void;
  onToggleDeliverable: (actionId: string, deliverableIndex: number) => void;
  onSelectGlossaryTerm: (sigla: string) => void;
}

export const AxesView: React.FC<AxesViewProps> = ({
  axes,
  actions,
  documents,
  selectedAxisId,
  setSelectedAxisId,
  onOpenActionDetail,
  onOpenDocument,
  onOpenNewActionWithAxis,
  onToggleDeliverable,
  onSelectGlossaryTerm
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [processFilter, setProcessFilter] = useState<string>('all');

  const filteredActions = actions.filter(action => {
    const matchesAxis = selectedAxisId === 'all' || action.axisId === selectedAxisId;
    const matchesStatus = statusFilter === 'all' || action.status === statusFilter;
    const matchesProcess = processFilter === 'all' || action.knowledgeProcess === processFilter;
    const matchesSearch = 
      action.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      action.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      action.scopeTag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      action.responsible.toLowerCase().includes(searchTerm.toLowerCase()) ||
      action.acronyms.some(sigla => sigla.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesAxis && matchesStatus && matchesProcess && matchesSearch;
  });

  const currentAxis = selectedAxisId !== 'all' ? axes.find(a => a.id === selectedAxisId) : null;

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Selector: 4 Axes Tabs */}
      <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setSelectedAxisId('all')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              selectedAxisId === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Todos os 4 Eixos ({actions.length})
          </button>
          {axes.map(axis => {
            const count = actions.filter(a => a.axisId === axis.id).length;
            const isSelected = selectedAxisId === axis.id;
            return (
              <button
                key={axis.id}
                onClick={() => setSelectedAxisId(axis.id)}
                className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className={`w-4 h-4 rounded-sm text-[10px] font-bold flex items-center justify-center ${
                  isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-200 text-slate-700'
                }`}>
                  {axis.number}
                </span>
                <span className="truncate max-w-[200px]">{axis.title}</span>
                <span className="text-[11px] opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Axis Banner (if single axis is selected) */}
      {currentAxis ? (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                <span>EIXO ESTRATÉGICO {currentAxis.number}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700">COORDENAÇÃO COGEM / ENAP</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {currentAxis.title}
              </h2>
            </div>
            <button
              onClick={() => onOpenNewActionWithAxis(currentAxis.id)}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1.5 self-start shrink-0"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Adicionar Ação neste Eixo</span>
            </button>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {currentAxis.description}
          </p>

          {/* Scope from Spreadsheet */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="text-xs font-semibold text-slate-800 block mb-1">
              Abrangência das Atividades (Documento Oficial COGEM):
            </span>
            <p className="text-xs font-mono text-slate-700 leading-relaxed mb-3">
              {currentAxis.scopeSummary}
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-600">
              {currentAxis.scopeItems.map((item, idx) => (
                <span key={idx} className="bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <div>
              <strong className="text-slate-700">Alinhamento Estratégico:</strong>{' '}
              {currentAxis.strategicAlignment.join(' · ')}
            </div>
            <span aria-hidden="true">|</span>
            <div>
              <strong className="text-slate-700">Liderança / Pontos Focais:</strong>{' '}
              {currentAxis.keyLeaders.join(' · ')}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Todas as Ações dos 4 Eixos da COGEM</h2>
            <p className="text-xs text-slate-500">
              Visualização consolidada do portfólio de modernização da gestão de pessoas da Enap
            </p>
          </div>
          <button
            onClick={() => onOpenNewActionWithAxis('eixo-1')}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Nova Ação</span>
          </button>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filtrar ações por termo, sigla ou tag..."
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 focus:border-emerald-600 rounded-lg outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto flex-wrap justify-end">
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Filter className="w-3.5 h-3.5" />
            <span>Status:</span>
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-xs py-1.5 px-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none"
          >
            <option value="all">Todos os Status</option>
            <option value="Planejado">Planejado</option>
            <option value="Em Andamento">Em Andamento</option>
            <option value="Concluído">Concluído</option>
          </select>

          <div className="flex items-center gap-1 text-xs text-slate-500 ml-2">
            <span>Processo GC:</span>
          </div>
          <select
            value={processFilter}
            onChange={(e) => setProcessFilter(e.target.value)}
            className="text-xs py-1.5 px-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none"
          >
            <option value="all">Todos os Processos</option>
            <option value="Registrar e Sistematizar">Registrar e Sistematizar</option>
            <option value="Compartilhar e Disseminar">Compartilhar e Disseminar</option>
            <option value="Utilizar e Acessar">Utilizar e Acessar</option>
            <option value="Adquirir e Desenvolver">Adquirir e Desenvolver</option>
          </select>
        </div>
      </div>

      {/* Action Cards List */}
      {filteredActions.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-xl border border-slate-200">
          <Layers className="w-8 h-8 mx-auto text-slate-300 mb-2" />
          <h3 className="text-sm font-semibold text-slate-800">Nenhuma ação encontrada</h3>
          <p className="text-xs text-slate-500 mt-1">
            Tente ajustar os filtros ou os termos da pesquisa.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredActions.map((action) => {
            const axis = axes.find(a => a.id === action.axisId);
            const linkedDocs = documents.filter(d => action.linkedDocumentIds?.includes(d.id));

            return (
              <div 
                key={action.id}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs transition-all space-y-4"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap text-xs text-slate-500">
                      <span className="font-mono text-slate-400 font-semibold">{action.id}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-slate-700">
                        Eixo {axis?.number}: {axis?.title}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="text-indigo-600 font-medium">{action.scopeTag}</span>
                    </div>

                    <h3 
                      onClick={() => onOpenActionDetail(action)}
                      className="text-base font-bold text-slate-900 hover:text-emerald-700 cursor-pointer transition-colors"
                    >
                      {action.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 self-start shrink-0">
                    <span className={`text-xs px-2.5 py-1 rounded-md font-medium border ${
                      action.status === 'Concluído'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : action.status === 'Em Andamento'
                        ? 'bg-indigo-50 text-indigo-800 border-indigo-200'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {action.status}
                    </span>

                    <button
                      onClick={() => onOpenActionDetail(action)}
                      className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100"
                      title="Ver ficha completa da ação"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {action.description}
                </p>

                {/* Acronym Tags & Knowledge Management tags */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-xs text-slate-400">Siglas relacionadas:</span>
                  {action.acronyms.map((sigla) => (
                    <button
                      key={sigla}
                      onClick={() => onSelectGlossaryTerm(sigla)}
                      className="text-xs font-mono font-bold text-slate-700 bg-slate-100 hover:bg-emerald-100 hover:text-emerald-800 px-2 py-0.5 rounded transition-colors"
                      title={`Ver significado e contexto de ${sigla} no Glossário`}
                    >
                      {sigla}
                    </button>
                  ))}

                  <span className="text-slate-300 mx-1">|</span>

                  <span className="text-xs text-slate-500">
                    Processo GC: <strong className="text-slate-700">{action.knowledgeProcess}</strong>
                  </span>

                  <span aria-hidden="true" className="text-slate-300">·</span>

                  <span className="text-xs text-slate-500">
                    Tipo de Saber: <strong className="text-slate-700">{action.knowledgeType}</strong>
                  </span>
                </div>

                {/* Interactive Deliverables / Entregas */}
                <div className="bg-slate-50/80 p-3.5 rounded-lg border border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">
                      Entregas e Marcos de Execução ({action.deliverables.filter(d => d.done).length}/{action.deliverables.length})
                    </span>
                    <span className="text-slate-500 font-mono text-[11px] tabular-nums">
                      Progresso calculado: {action.progress}%
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {action.deliverables.map((del, idx) => (
                      <div 
                        key={idx}
                        onClick={() => onToggleDeliverable(action.id, idx)}
                        className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer hover:bg-white p-1 rounded transition-colors group"
                      >
                        {del.done ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-300 group-hover:text-slate-500 shrink-0" />
                        )}
                        <span className={`flex-1 ${del.done ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                          {del.title}
                        </span>
                        {del.targetDate && (
                          <span className="text-[11px] text-slate-400 font-mono shrink-0">
                            {del.targetDate}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with linked docs and responsible */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Responsável: <strong className="text-slate-700">{action.responsible}</strong></span>
                    <span aria-hidden="true">·</span>
                    <span>Atualizado: {action.lastUpdate}</span>
                  </div>

                  {linkedDocs.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-slate-400">Documentos vinculados:</span>
                      {linkedDocs.map((doc) => (
                        <button
                          key={doc.id}
                          onClick={() => onOpenDocument(doc)}
                          className="flex items-center gap-1 text-[11px] text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200 transition-colors"
                        >
                          <FileText className="w-3 h-3" />
                          <span className="truncate max-w-[140px]">{doc.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
