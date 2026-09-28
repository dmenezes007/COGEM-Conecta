import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  ShieldCheck, 
  Users, 
  PieChart, 
  Filter, 
  Download, 
  FileSpreadsheet,
  Info,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { IndicatorData } from '../types/cogem';

interface AnalyticsViewProps {
  indicators: IndicatorData[];
  onSelectGlossaryTerm: (sigla: string) => void;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({
  indicators,
  onSelectGlossaryTerm
}) => {
  const [selectedDirectorate, setSelectedDirectorate] = useState<string>('all');
  const [selectedMetricView, setSelectedMetricView] = useState<'dft' | 'clima' | 'pgd' | 'iesgo'>('dft');

  // Directorate DFT breakdown mock data
  const directoratesDFT = [
    { name: 'DGES (Gestão Estratégica & GP)', required: 34, actual: 32, gap: -2, coverage: 94 },
    { name: 'Diretoria de Educação Executiva', required: 48, actual: 44, gap: -4, coverage: 91 },
    { name: 'Diretoria de Desenvolvimento Profissional', required: 52, actual: 46, gap: -6, coverage: 88 },
    { name: 'Diretoria de Inovação Governamental', required: 28, actual: 27, gap: -1, coverage: 96 },
    { name: 'Gabinete & Órgãos Seccionais', required: 22, actual: 20, gap: -2, coverage: 90 },
  ];

  // PGD distribution
  const pgdModalities = [
    { label: 'Teletrabalho Híbrido (2 a 3 dias presenciais)', pct: 64, count: 184, color: 'bg-emerald-600' },
    { label: 'Teletrabalho Integral', pct: 24, count: 69, color: 'bg-indigo-600' },
    { label: 'Presencial Integral', pct: 12, count: 35, color: 'bg-slate-400' },
  ];

  // iESGo TCU criteria breakdown
  const iesgoDimensions = [
    { criterion: 'Estratégia e Planejamento de Pessoas (PDI)', score: 86, benchmark: 72 },
    { criterion: 'Gestão por Competências e Capacitação', score: 84, benchmark: 68 },
    { criterion: 'Governança e Liderança Ética', score: 82, benchmark: 74 },
    { criterion: 'Políticas de Diversidade e Inclusão (DEI)', score: 78, benchmark: 60 },
    { criterion: 'Gestão do Conhecimento e Sucessão', score: 74, benchmark: 54 },
    { criterion: 'Qualidade de Vida no Trabalho (QVT)', score: 80, benchmark: 66 },
  ];

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <span>PAINÉIS DE BUSINESS INTELLIGENCE & EVIDÊNCIAS</span>
            <span aria-hidden="true">·</span>
            <span>EIXO 3 COGEM</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Dados, Pesquisas e People Analytics
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Métricas analíticas consolidadas para suporte à tomada de decisão na Enap. 
            Integração de dados de dimensionamento (DFT), programa de gestão (PGD), clima organizacional e auditoria de governança (iESGo/TCU).
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <button
            onClick={() => onSelectGlossaryTerm('LGPD')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Conformidade LGPD Ativa</span>
          </button>
        </div>
      </div>

      {/* Primary Indicator Highlights */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {indicators.slice(0, 4).map((ind) => (
          <div key={ind.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-500 block truncate mb-1">
              {ind.title}
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-slate-900 tabular-nums">
                {ind.value}
              </span>
              <span className="text-xs text-slate-500">{ind.unit}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px]">
              <span className="text-emerald-700 font-medium">{ind.delta}</span>
              <span className="text-slate-400 font-mono">Meta: {ind.target}{ind.unit}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Tabs for Analytics Sections */}
      <div className="bg-white p-1.5 rounded-xl border border-slate-200 flex items-center gap-1 overflow-x-auto scrollbar-none shadow-xs">
        <button
          onClick={() => setSelectedMetricView('dft')}
          className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            selectedMetricView === 'dft' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Dimensionamento de Pessoal (DFT)
        </button>
        <button
          onClick={() => setSelectedMetricView('clima')}
          className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            selectedMetricView === 'clima' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Pesquisa de Clima & Bem-Estar (EX)
        </button>
        <button
          onClick={() => setSelectedMetricView('pgd')}
          className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            selectedMetricView === 'pgd' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Aderência ao PGD & Entregas
        </button>
        <button
          onClick={() => setSelectedMetricView('iesgo')}
          className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
            selectedMetricView === 'iesgo' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Índice de Governança TCU (iESGo)
        </button>
      </div>

      {/* VIEW 1: DFT Analysis */}
      {selectedMetricView === 'dft' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Capacidade Instalada vs. Necessidade de Pessoal por Diretoria (DFT)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Cálculo com base no volume anual de cursos, oficinas e processos operacionais mapeados.
              </p>
            </div>
            <button
              onClick={() => onSelectGlossaryTerm('DFT')}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Ver Metodologia DFT</span>
              <Info className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Bar Chart Representation */}
          <div className="space-y-4">
            {directoratesDFT.map((dir, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">{dir.name}</span>
                  <div className="flex items-center gap-3 text-slate-500 tabular-nums">
                    <span>Real: <strong className="text-slate-800">{dir.actual}</strong> serv.</span>
                    <span aria-hidden="true">·</span>
                    <span>Requerido: <strong>{dir.required}</strong></span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 font-semibold">{dir.coverage}% cobertura</span>
                  </div>
                </div>

                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden flex">
                  <div 
                    className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${dir.coverage}%` }}
                    title={`${dir.actual} servidores reais de ${dir.required} requeridos`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Taxa média de cobertura na Enap: <strong>91.8%</strong>. Déficit concentrado na área de desenvolvimento pedagógico de alta complexidade.
              </span>
            </div>
            <span className="font-mono text-slate-400 text-[11px] shrink-0">Fonte: Sistema DFT / COGEM Março 2026</span>
          </div>
        </div>
      )}

      {/* VIEW 2: Pesquisa de Clima */}
      {selectedMetricView === 'clima' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              Evolução da Satisfação do Servidor e Clima Organizacional (EX)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Resultados apurados na série temporal de pesquisas bienais e termômetros de pulso na Enap.
            </p>
          </div>

          {/* Line Chart / Timeline Visual */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
              <span className="text-xs text-slate-400 font-mono">2022 (Bienal)</span>
              <div className="text-2xl font-bold text-slate-700 mt-1 tabular-nums">72.0%</div>
              <span className="text-[11px] text-slate-500 mt-1 block">Início da reestruturação</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
              <span className="text-xs text-slate-400 font-mono">2024 (Bienal)</span>
              <div className="text-2xl font-bold text-slate-700 mt-1 tabular-nums">77.3%</div>
              <span className="text-[11px] text-emerald-600 mt-1 block">+5.3 p.p. de ganho</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
              <span className="text-xs text-slate-400 font-mono">2025 (Pesquisa Pulso)</span>
              <div className="text-2xl font-bold text-slate-700 mt-1 tabular-nums">79.1%</div>
              <span className="text-[11px] text-emerald-600 mt-1 block">Estabilidade e PGD</span>
            </div>

            <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 text-center">
              <span className="text-xs text-emerald-700 font-mono font-semibold">2026 (Atual)</span>
              <div className="text-2xl font-bold text-emerald-900 mt-1 tabular-nums">81.5%</div>
              <span className="text-[11px] text-emerald-700 mt-1 block">Meta 80% superada!</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Destaques por Dimensão Avaliada:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Autonomia e Confiança</span>
                <span className="text-lg font-bold text-slate-800 tabular-nums">88.4%</span>
                <p className="text-[11px] text-slate-500 mt-0.5">Fortalecida pelo modelo de entregas do PGD.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="text-xs text-slate-500 block">Relações com Pares & Apoio</span>
                <span className="text-lg font-bold text-slate-800 tabular-nums">84.2%</span>
                <p className="text-[11px] text-slate-500 mt-0.5">Clima de cooperação e escuta ativa.</p>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                <span className="text-xs text-amber-800 block">Carga de Trabalho & Prazos</span>
                <span className="text-lg font-bold text-amber-900 tabular-nums">67.1%</span>
                <p className="text-[11px] text-amber-700 mt-0.5">Ponto de atenção: exige ajuste na matriz do DFT.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: PGD */}
      {selectedMetricView === 'pgd' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              Aderência ao Programa de Gestão e Desempenho (PGD)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Conformidade com a IN MGI nº 24/2023: planos cadastrados, avaliações tempestivas e regime de trabalho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pgdModalities.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">{item.label}</span>
                  <span className="text-slate-500 tabular-nums">{item.count} servidores</span>
                </div>
                <div className="text-2xl font-bold text-slate-900 tabular-nums">
                  {item.pct}%
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs text-indigo-900 space-y-2">
            <span className="font-semibold block">Indicadores Operacionais do PGD na Enap:</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <span className="text-slate-500 block">Taxa de Entregas Aprovadas</span>
                <span className="text-base font-bold text-indigo-950 tabular-nums">98.2%</span>
              </div>
              <div>
                <span className="text-slate-500 block">Avaliação Tempestiva (até 5 dias)</span>
                <span className="text-base font-bold text-indigo-950 tabular-nums">94.6%</span>
              </div>
              <div>
                <span className="text-slate-500 block">Planos com Revisão de Metas</span>
                <span className="text-base font-bold text-indigo-950 tabular-nums">11.4%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 4: iESGo TCU */}
      {selectedMetricView === 'iesgo' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Índice ESG (iESGo) do TCU — Desempenho de Governança de Pessoas
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Avaliação oficial do Tribunal de Contas da União nos quesitos de sustentabilidade institucional e liderança.
              </p>
            </div>
            <button
              onClick={() => onSelectGlossaryTerm('iESGo')}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Glossário iESGo</span>
              <Info className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {iesgoDimensions.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-800">{item.criterion}</span>
                  <div className="flex items-center gap-3 text-slate-500 tabular-nums">
                    <span>Enap: <strong className="text-slate-900">{item.score} pts</strong></span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">Média Federal: {item.benchmark} pts</span>
                  </div>
                </div>

                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden flex">
                  <div 
                    className="bg-blue-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${item.score}%` }}
                    title={`Pontuação Enap: ${item.score}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <span>
              Classificação Global Enap no iESGo: <strong>Estágio Aprimorado (Nível 4 de 5)</strong>
            </span>
            <span className="font-mono text-slate-400 text-[11px]">Acórdão TCU nº 2.474/2023</span>
          </div>
        </div>
      )}

    </div>
  );
};
