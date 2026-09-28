import React, { useState } from 'react';
import { 
  BrainCircuit, 
  RotateCw, 
  Share2, 
  FileCheck2, 
  Layers, 
  Sparkles, 
  Plus, 
  HelpCircle, 
  Clock, 
  ChevronRight, 
  ExternalLink,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { KM_SECI_QUADRANTS, KM_SBGC_MATURITY_DATA, LESSONS_LEARNED } from '../data/cogemData';
import { LessonLearned, KnowledgeProcess } from '../types/cogem';

interface KnowledgeManagementViewProps {
  lessons: LessonLearned[];
  onOpenNewLessonModal: () => void;
  onSelectGlossaryTerm: (sigla: string) => void;
}

export const KnowledgeManagementView: React.FC<KnowledgeManagementViewProps> = ({
  lessons,
  onOpenNewLessonModal,
  onSelectGlossaryTerm
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'seci' | 'processos' | 'aar' | 'maturidade'>('seci');
  const [selectedQuadrant, setSelectedQuadrant] = useState<string>('socializacao');
  const [selectedProcess, setSelectedProcess] = useState<KnowledgeProcess>('Registrar e Sistematizar');

  const currentQuadrant = KM_SECI_QUADRANTS.find(q => q.id === selectedQuadrant) || KM_SECI_QUADRANTS[0];

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <span>MODELO METODOLÓGICO DE GESTÃO DO CONHECIMENTO</span>
            <span aria-hidden="true">·</span>
            <span>SBGC & ENAP</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Estrutura de Gestão do Conhecimento & Aprendizagem
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Fundamentos teóricos e instrumentais (Modelo de Referência SBGC / Ciclo SECI de Nonaka & Takeuchi) 
            mobilizados pela COGEM para que o saber dos servidores seja convertido em inovação e entregas sustentáveis.
          </p>
        </div>

        <button
          onClick={onOpenNewLessonModal}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs shrink-0 self-start md:self-auto"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Registrar Lição Aprendida (AAR)</span>
        </button>
      </div>

      {/* Sub-Tab Navigation */}
      <div className="bg-white p-1.5 rounded-xl border border-slate-200 flex items-center gap-1 overflow-x-auto scrollbar-none shadow-xs">
        <button
          onClick={() => setActiveSubTab('seci')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeSubTab === 'seci' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Ciclo SECI de Conversão (Nonaka & Takeuchi)
        </button>
        <button
          onClick={() => setActiveSubTab('processos')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeSubTab === 'processos' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Os 4 Processos de Conhecimento
        </button>
        <button
          onClick={() => setActiveSubTab('aar')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeSubTab === 'aar' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Rituais de Aprendizagem (AAR · Lições)
        </button>
        <button
          onClick={() => setActiveSubTab('maturidade')}
          className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            activeSubTab === 'maturidade' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Maturidade em GC (Modelo SBGC)
        </button>
      </div>

      {/* SUBTAB 1: SECI */}
      {activeSubTab === 'seci' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="max-w-2xl">
              <h3 className="font-bold text-slate-900 text-base">
                A Espiral do Conhecimento: Tácito vs. Explícito
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                O conhecimento não é estático; ele evolui continuamente quando indivíduos dialogam, 
                formalizam seus métodos em guias, cruzam informações em painéis e aprendem na prática.
              </p>
            </div>

            {/* 4 Quadrants Interactive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {KM_SECI_QUADRANTS.map((quad) => {
                const isSelected = selectedQuadrant === quad.id;
                return (
                  <div
                    key={quad.id}
                    onClick={() => setSelectedQuadrant(quad.id)}
                    className={`p-5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/40 shadow-xs ring-1 ring-emerald-600/20'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-slate-900">
                        {quad.name}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                        {quad.fromTo}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-slate-700 mb-2">
                      {quad.subtitle}
                    </p>

                    <p className="text-xs text-slate-500 leading-relaxed mb-3">
                      {quad.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-800 font-medium">
                      Exemplo Enap: {quad.enapExamples}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Selected Quadrant Insights */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                  Mecanismos Práticos na COGEM / Enap
                </span>
                <h4 className="text-lg font-bold text-white">
                  Práticas de {currentQuadrant.name} ({currentQuadrant.fromTo})
                </h4>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                Ambiente Capacitante (Ba)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQuadrant.practices.map((practice, idx) => (
                <div key={idx} className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 text-xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-slate-200">{practice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: 4 PROCESSOS DE CONHECIMENTO */}
      {activeSubTab === 'processos' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                id: 'Registrar e Sistematizar',
                title: 'Registrar e Sistematizar',
                color: 'emerald',
                motto: 'Tornar visível e organizar',
                methods: ['Normas e procedimentos', 'Manuais e checklists', 'Entrevistas de captura tácita', 'Repositórios digitais'],
                products: ['Guias de decisão', 'Modelos e formulários', 'Base de precedentes', 'Mapeamento de processos']
              },
              {
                id: 'Compartilhar e Disseminar',
                title: 'Compartilhar e Disseminar',
                color: 'blue',
                motto: 'Troca mútua e colaboração',
                methods: ['Comunidades de Prática (CoPs)', 'Mentoria técnica sênior', 'Fóruns de alinhamento', 'Workshops temáticos'],
                products: ['Notas de entendimento', 'Rodas de debate de casos', 'Plataformas colaborativas', 'Encontros de integração']
              },
              {
                id: 'Utilizar e Acessar',
                title: 'Utilizar e Acessar',
                color: 'indigo',
                motto: 'Acesso ágil no fluxo de trabalho',
                methods: ['Mecanismos de busca no SEI', 'Páginas Amarelas de talentos', 'Curadoria de conteúdos', 'Trilhas por área técnica'],
                products: ['Portais de conhecimento', 'Templates prontos para uso', 'Catálogo de especialistas', 'Helpdesk sob demanda']
              },
              {
                id: 'Adquirir e Desenvolver',
                title: 'Adquirir e Desenvolver',
                color: 'amber',
                motto: 'Evolução e inovação contínua',
                methods: ['Benchmarking com outros órgãos', 'Pesquisa e People Analytics', 'Cooperação com universidades', 'Prototipação ágil'],
                products: ['Painéis de BI', 'Estudos de impacto empírico', 'Novas competências em IA', 'Parcerias interinstitucionais']
              }
            ].map((proc) => {
              const isSelected = selectedProcess === proc.id;
              return (
                <div
                  key={proc.id}
                  onClick={() => setSelectedProcess(proc.id as KnowledgeProcess)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-slate-900 bg-white shadow-xs ring-1 ring-slate-900'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                      {proc.motto}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mb-3">
                      {proc.title}
                    </h4>

                    <div className="space-y-2 text-xs">
                      <div>
                        <strong className="text-[11px] text-slate-700 block">Métodos:</strong>
                        <ul className="text-slate-500 list-disc list-inside space-y-0.5 mt-0.5">
                          {proc.methods.slice(0, 2).map((m, idx) => (
                            <li key={idx} className="truncate">{m}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <strong className="text-[11px] text-slate-700 block">Produtos Gerados:</strong>
                        <ul className="text-slate-500 list-disc list-inside space-y-0.5 mt-0.5">
                          {proc.products.slice(0, 2).map((p, idx) => (
                            <li key={idx} className="truncate">{p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] text-emerald-700 font-semibold mt-3 block">
                    {isSelected ? '✓ Selecionado' : 'Clique para detalhar →'}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Processo em Foco: {selectedProcess}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No modelo da COGEM, este processo assegura que o conhecimento técnico circule sem atrito entre as diretorias, 
              evitando que a saída ou remanejamento de servidores provoque perda de memória técnica ou retrabalho.
            </p>
          </div>
        </div>
      )}

      {/* SUBTAB 3: AAR / LIÇÕES APRENDIDAS */}
      {activeSubTab === 'aar' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  Rotina "Aprender Antes - Durante - Depois" (After Action Review)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Captura ágil de erros, acertos e raciocínio técnico logo após a conclusão de marcos importantes.
                </p>
              </div>

              <button
                onClick={onOpenNewLessonModal}
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1.5 self-start sm:self-auto shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Registrar Nova Lição</span>
              </button>
            </div>

            {/* Canonical 4 questions banner */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
              <div className="p-2">
                <span className="font-bold text-slate-800 block mb-1">1. O que era esperado?</span>
                <span className="text-slate-500">Planos, metas pactuadas e premissas iniciais.</span>
              </div>
              <div className="p-2">
                <span className="font-bold text-slate-800 block mb-1">2. O que aconteceu?</span>
                <span className="text-slate-500">Fatos objetivos, desvios e surpresas na execução.</span>
              </div>
              <div className="p-2">
                <span className="font-bold text-slate-800 block mb-1">3. Por que aconteceu?</span>
                <span className="text-slate-500">Causas fundamentais de acertos e gargalos.</span>
              </div>
              <div className="p-2">
                <span className="font-bold text-emerald-800 block mb-1">4. O que faremos?</span>
                <span className="text-slate-500">Recomendações práticas acionáveis para o futuro.</span>
              </div>
            </div>
          </div>

          {/* Lessons List */}
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono text-slate-400 font-semibold">{lesson.id}</span>
                      <span aria-hidden="true">·</span>
                      <span>Autor: <strong className="text-slate-700">{lesson.author}</strong></span>
                      <span aria-hidden="true">·</span>
                      <span>{lesson.date}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {lesson.title}
                    </h4>
                  </div>

                  <span className="text-xs px-2.5 py-0.5 rounded font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 self-start shrink-0">
                    {lesson.reliability}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <strong className="text-slate-800 block mb-1">Situação Observada & Esperado vs. Real:</strong>
                    <p className="text-slate-600 leading-relaxed mb-2">{lesson.situation}</p>
                    <p className="text-slate-500 italic">{lesson.expectedVsActual}</p>
                  </div>

                  <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100">
                    <strong className="text-emerald-900 block mb-1">Causa Raiz & Recomendação Prática:</strong>
                    <p className="text-slate-700 leading-relaxed mb-2">{lesson.rootCauses}</p>
                    <p className="text-emerald-950 font-medium">{lesson.recommendations}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap pt-1">
                  <span className="text-xs text-slate-400">Siglas:</span>
                  {lesson.acronyms.map((sigla) => (
                    <button
                      key={sigla}
                      onClick={() => onSelectGlossaryTerm(sigla)}
                      className="text-[10px] font-mono font-bold text-slate-700 bg-slate-100 hover:bg-emerald-100 px-1.5 py-0.5 rounded"
                    >
                      {sigla}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 4: MATURIDADE SBGC */}
      {activeSubTab === 'maturidade' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="max-w-2xl">
              <h3 className="font-bold text-slate-900 text-base">
                Modelo de Avaliação de Maturidade em GC (SBGC v1.3)
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Estruturado em 3 dimensões e 12 componentes (escala de 1000 pontos). 
                A Enap pontua atualmente em <strong>730 pontos</strong>, situando-se no estágio de <strong>Expansão</strong> rumo à Excelência.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center">
                <span className="text-xs text-slate-500">Estágio 1: Evolução</span>
                <div className="text-xl font-bold text-slate-700 tabular-nums">500 pts</div>
                <span className="text-[11px] text-slate-400 mt-1 block">Práticas incipientes</span>
              </div>
              <div className="p-4 rounded-xl border border-emerald-400 bg-emerald-50 text-center shadow-xs">
                <span className="text-xs text-emerald-800 font-semibold">Estágio 2: Expansão (Enap)</span>
                <div className="text-2xl font-bold text-emerald-950 tabular-nums">750 pts</div>
                <span className="text-[11px] text-emerald-700 mt-1 block">COGEM: 730 pts alcançados</span>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center">
                <span className="text-xs text-slate-500">Estágio 3: Excelência</span>
                <div className="text-xl font-bold text-slate-700 tabular-nums">1000 pts</div>
                <span className="text-[11px] text-slate-400 mt-1 block">Referência nacional</span>
              </div>
            </div>
          </div>

          {/* 3 Dimensions Breakdown */}
          <div className="space-y-4">
            {KM_SBGC_MATURITY_DATA.map((dim, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm">
                    Dimensão {idx + 1}: {dim.dimension}
                  </h4>
                  <span className="text-xs font-semibold text-emerald-700 tabular-nums">
                    Média: {dim.score}%
                  </span>
                </div>

                <div className="space-y-2">
                  {dim.components.map((comp, cIdx) => (
                    <div key={cIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-700 font-medium">{comp.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500 tabular-nums">{comp.level}%</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                            comp.status === 'Consolidada' 
                              ? 'bg-emerald-50 text-emerald-800' 
                              : 'bg-blue-50 text-blue-800'
                          }`}>
                            {comp.status}
                          </span>
                        </div>
                      </div>

                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-emerald-600 h-full rounded-full" 
                          style={{ width: `${comp.level}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
