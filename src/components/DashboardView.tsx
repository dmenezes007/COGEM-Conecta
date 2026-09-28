import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  FileText, 
  Target, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  BookMarked, 
  Users, 
  Database, 
  Lightbulb, 
  TrendingUp, 
  Activity,
  Layers,
  Award,
  BookOpen,
  ChevronRight,
  GitBranch,
  Network
} from 'lucide-react';
import { Axis, CogemAction, DocumentAsset, GlossaryItem, AxisId } from '../types/cogem';

interface DashboardViewProps {
  axes: Axis[];
  actions: CogemAction[];
  documents: DocumentAsset[];
  glossary: GlossaryItem[];
  onSelectAxis: (axisId: AxisId) => void;
  onOpenAxisDetailModal: (axis: Axis) => void;
  onOpenActionDetail: (action: CogemAction) => void;
  onOpenDocument: (doc: DocumentAsset) => void;
  onNavigateToTab: (tab: string) => void;
  onSelectGlossaryTerm: (sigla: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  axes,
  actions,
  documents,
  glossary,
  onSelectAxis,
  onOpenAxisDetailModal,
  onOpenActionDetail,
  onOpenDocument,
  onNavigateToTab,
  onSelectGlossaryTerm
}) => {
  const [activeConceptNode, setActiveConceptNode] = useState<AxisId | null>(null);

  const completedActions = actions.filter(a => a.status === 'Concluído').length;
  const inProgressActions = actions.filter(a => a.status === 'Em Andamento').length;
  const avgProgress = Math.round(actions.reduce((acc, curr) => acc + curr.progress, 0) / (actions.length || 1));

  return (
    <div className="space-y-8 pb-12">
      
      {/* Institutional Hero Banner */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 overflow-hidden shadow-sm border border-slate-800">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden md:block">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            <span>Enap · Escola Nacional de Administração Pública</span>
            <span aria-hidden="true">·</span>
            <span>COGEM</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            Painel Interativo de Gestão Estratégica & do Conhecimento
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Plataforma modular da <strong className="text-white font-medium">Coordenação de Gestão Estratégica e Modernização (COGEM/Enap)</strong>. 
            Organize os 4 eixos de desenvolvimento, consulte acervos documentais com download, acesse People Analytics e explore o glossário de siglas interligadas.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateToTab('axes')}
              className="px-4 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Ver Portfólio de Ações</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigateToTab('documents')}
              className="px-4 py-2 text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Consulta de Documentos</span>
            </button>
            <button
              onClick={() => onNavigateToTab('glossary')}
              className="px-4 py-2 text-xs font-semibold bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <BookMarked className="w-3.5 h-3.5 text-amber-400" />
              <span>Glossário de Siglas</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary Metric Grid - Tabular Numerals */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium">Iniciativas Cadastradas</span>
            <Target className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900 tabular-nums">
              {actions.length}
            </span>
            <span className="text-xs text-slate-500">
              ({completedActions} entregues)
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
            <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-indigo-600 h-full rounded-full transition-all duration-500" 
                style={{ width: `${avgProgress}%` }}
              />
            </div>
            <span className="font-semibold text-slate-700 tabular-nums">{avgProgress}%</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium">Acervo & Memória Técnica</span>
            <FileText className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900 tabular-nums">
              {documents.length}
            </span>
            <span className="text-xs text-slate-500">
              documentos ativos
            </span>
          </div>
          <div className="mt-3 text-xs text-emerald-700 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>100% com download disponível</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium">Dimensionamento (DFT)</span>
            <TrendingUp className="w-4 h-4 text-amber-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900 tabular-nums">
              82%
            </span>
            <span className="text-xs text-emerald-600 font-medium">
              +14% vs. 2025
            </span>
          </div>
          <div className="mt-3 text-xs text-slate-500">
            Meta 2026: 100% das diretorias
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-medium">Maturidade em GC (SBGC)</span>
            <Award className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900 tabular-nums">
              730 <span className="text-xs font-normal text-slate-500">/ 1000 pts</span>
            </span>
          </div>
          <div className="mt-3 text-xs text-blue-700 font-medium">
            Estágio: Expansão Institucional
          </div>
        </div>

      </div>

      {/* The 4 Axes Cards from Spreadsheet (Interactive with Modal) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Eixos Estruturantes da COGEM</h2>
            <p className="text-xs text-slate-500">
              Clique em qualquer eixo para abrir a ficha com detalhes operacionais e termos relacionados do glossário
            </p>
          </div>
          <button
            onClick={() => onNavigateToTab('axes')}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            <span>Ver tabela completa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {axes.map((axis) => {
            const axisActions = actions.filter(a => a.axisId === axis.id);
            const axisProgress = Math.round(
              axisActions.reduce((acc, a) => acc + a.progress, 0) / (axisActions.length || 1)
            );
            const axisDocs = documents.filter(d => d.axisId === axis.id);
            const axisGlossary = glossary.filter(g => g.eixosRelacionados.includes(axis.id));

            return (
              <div
                key={axis.id}
                onClick={() => onOpenAxisDetailModal(axis)}
                className="group cursor-pointer bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {axis.number}
                      </span>
                      <h3 className="font-semibold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                        {axis.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                      Ver Ficha ↗
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                    {axis.description}
                  </p>

                  {/* Scope items / Abrangência da planilha */}
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-3">
                    <span className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Abrangência das ações (Planilha COGEM):
                    </span>
                    <p className="text-xs text-slate-600 font-mono text-[11px] leading-relaxed">
                      "{axis.scopeSummary}"
                    </p>
                  </div>

                  {/* Interactive Glossary pills in card */}
                  <div className="flex items-center gap-1.5 flex-wrap mb-2">
                    <span className="text-[11px] text-slate-400">Siglas do Eixo:</span>
                    {axisGlossary.slice(0, 5).map(g => (
                      <button
                        key={g.sigla}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectGlossaryTerm(g.sigla);
                        }}
                        className="text-[10px] font-mono font-bold text-slate-700 bg-slate-100 hover:bg-emerald-100 hover:text-emerald-800 px-1.5 py-0.5 rounded border border-slate-200"
                        title={g.extenso}
                      >
                        {g.sigla}
                      </button>
                    ))}
                    {axisGlossary.length > 5 && (
                      <span className="text-[10px] text-slate-400">+{axisGlossary.length - 5}</span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-3">
                    <span><strong>{axisActions.length}</strong> iniciativas</span>
                    <span aria-hidden="true">·</span>
                    <span><strong>{axisDocs.length}</strong> documentos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-emerald-600 h-full rounded-full"
                        style={{ width: `${axisProgress}%` }}
                      />
                    </div>
                    <span className="font-semibold text-slate-700 tabular-nums">{axisProgress}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MAPA CONCEITUAL INTERATIVO DE GESTÃO DO CONHECIMENTO */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
              <Network className="w-4 h-4" />
              <span>Mapa Conceitual Integrado da COGEM</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Interconexão entre Eixos, Conhecimento & Indicadores
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Clique em um dos nós para destacar os fluxos e impactos diretos na gestão de pessoas da Enap
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setActiveConceptNode(null)}
              className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                activeConceptNode === null 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Visão Global
            </button>
          </div>
        </div>

        {/* Visual Conceptual Map diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
          {axes.map((axis) => {
            const isNodeActive = activeConceptNode === axis.id;
            const axisDocs = documents.filter(d => d.axisId === axis.id);
            const axisActions = actions.filter(a => a.axisId === axis.id);
            const axisGlossary = glossary.filter(g => g.eixosRelacionados.includes(axis.id));

            return (
              <div
                key={axis.id}
                onClick={() => setActiveConceptNode(isNodeActive ? null : axis.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isNodeActive
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-md bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                      0{axis.number}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-800 font-semibold">
                      {axisGlossary.map(g => g.sigla).slice(0, 3).join(', ')}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug mb-1">
                    {axis.title}
                  </h4>

                  <p className="text-[11px] text-slate-500 line-clamp-3">
                    {axis.scopeSummary}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Ações Estratégicas:</span>
                    <strong className="text-slate-800">{axisActions.length}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Acervo Documental:</span>
                    <strong className="text-slate-800">{axisDocs.length}</strong>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenAxisDetailModal(axis);
                    }}
                    className="w-full mt-2 py-1 text-center font-semibold text-[11px] text-emerald-700 hover:text-emerald-800 bg-white rounded border border-slate-200"
                  >
                    Abrir Detalhes →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Contextual callout if node selected */}
        {activeConceptNode && (
          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-3 animate-in fade-in duration-200">
            <div>
              <strong>Conexão Sistêmica do Eixo Selecionado:</strong> As entregas deste eixo retroalimentam 
              as tomadas de decisão da Direção da Enap e alimentam os painéis de People Analytics e acervo da COGEM.
            </div>
            <button
              onClick={() => {
                const found = axes.find(a => a.id === activeConceptNode);
                if (found) onOpenAxisDetailModal(found);
              }}
              className="px-3 py-1.5 font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shrink-0"
            >
              Ver Ficha Completa
            </button>
          </div>
        )}
      </div>

      {/* Cadeia de Valor do Conhecimento (André Saito & UTFPR framework) */}
      <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800">
        <div className="max-w-2xl mb-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
            <span>Fundamento Metodológico de GC</span>
          </div>
          <h3 className="text-base font-bold text-white">
            Cadeia de Valor do Conhecimento na Gestão Pública
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            "Conhecimento só gera valor quando é utilizado nas decisões cotidianas e na modernização dos serviços."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
            <div className="text-[11px] font-semibold text-emerald-400 mb-1">01. Aprendizagem</div>
            <div className="text-sm font-bold text-white mb-1">Adquirir Saber Novo</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pesquisas, benchmarking, capacitação contínua e experimentação de novos métodos de trabalho.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
            <div className="text-[11px] font-semibold text-indigo-400 mb-1">02. Conhecimento</div>
            <div className="text-sm font-bold text-white mb-1">Cuidar do Existente</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Memória técnica, manuais de processos, repositórios de notas e captura de lições aprendidas.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
            <div className="text-[11px] font-semibold text-amber-400 mb-1">03. Estratégia e Gestão</div>
            <div className="text-sm font-bold text-white mb-1">Usar no PGD e DFT</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Aplicação direta na pactuação de metas, dimensionamento equilibrado e decisões baseadas em dados.
            </p>
          </div>

          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/80">
            <div className="text-[11px] font-semibold text-blue-400 mb-1">04. Valor e Entregas</div>
            <div className="text-sm font-bold text-white mb-1">Impacto na Sociedade</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Melhoria da experiência do colaborador, clima saudável e excelência formativa para o Brasil.
            </p>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Recent Actions & Interactive Glossary Quick Access */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Ações Estratégicas em Destaque */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">
              Ações Prioritárias em Execução
            </h2>
            <button
              onClick={() => onNavigateToTab('axes')}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <span>Ver todas ({actions.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
            {actions.slice(0, 5).map((action) => (
              <div 
                key={action.id}
                className="p-4 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer"
                onClick={() => onOpenActionDetail(action)}
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2 flex-wrap text-xs text-slate-500">
                    <span className="font-mono text-slate-400">{action.id}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-slate-700">{action.scopeTag}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-indigo-600">{action.knowledgeProcess}</span>
                  </div>

                  <h4 className="font-semibold text-slate-900 text-sm hover:text-emerald-700 transition-colors">
                    {action.title}
                  </h4>

                  <p className="text-xs text-slate-500 line-clamp-1">
                    {action.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0 justify-between sm:justify-end">
                  <div className="text-right">
                    <div className="text-xs font-semibold text-slate-800 tabular-nums">
                      {action.progress}%
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {action.status}
                    </div>
                  </div>

                  <div className="w-20 bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        action.progress === 100 ? 'bg-emerald-600' : 'bg-indigo-600'
                      }`}
                      style={{ width: `${action.progress}%` }}
                    />
                  </div>

                  <button 
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100"
                    title="Detalhes da Ação"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Glossário Oficial & Siglas */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">
              Glossário de Termos
            </h2>
            <button
              onClick={() => onNavigateToTab('glossary')}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <span>Ver todos ({glossary.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <p className="text-xs text-slate-500">
              Termos e siglas fundamentais da planilha da COGEM para nivelamento conceitual na Enap:
            </p>

            <div className="space-y-2">
              {glossary.slice(0, 6).map((item) => (
                <div
                  key={item.sigla}
                  onClick={() => onSelectGlossaryTerm(item.sigla)}
                  className="p-2.5 rounded-lg hover:bg-slate-50 border border-slate-100 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-900 group-hover:text-emerald-700 font-mono">
                      {item.sigla}
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-slate-600">
                      detalhes →
                    </span>
                  </div>
                  <div className="text-xs font-medium text-slate-700 truncate mt-0.5">
                    {item.extenso}
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {item.definicao}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigateToTab('glossary')}
              className="w-full py-2 text-xs font-semibold text-center text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            >
              Consultar Glossário Completo
            </button>
          </div>

          {/* Strategic Alignments Badge Box */}
          <div className="bg-slate-100/70 p-4 rounded-xl border border-slate-200">
            <span className="text-xs font-bold text-slate-800 block mb-2">
              Marcos Normativos & Alinhamentos
            </span>
            <div className="flex flex-col gap-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                <span>PDI Enap 2024-2027 (Objetivo Gestão Estratégica)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                <span>PGD (Decreto nº 11.072/2022 & IN MGI 24/2023)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                <span>Acórdão TCU nº 2.474/2023 (Índice ESG - iESGo)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                <span>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
