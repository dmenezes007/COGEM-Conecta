import React from 'react';
import { X, BookOpen, Layers, Target, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

interface AboutModalProps {
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div 
        className="bg-white w-full max-w-3xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center text-xs">
              enap
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Sobre a COGEM & o Esforço de Gestão do Conhecimento
              </h3>
              <p className="text-xs text-slate-500">
                Coordenação de Gestão Estratégica e Modernização · Escola Nacional de Administração Pública
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700">
          
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-sm">
              Propósito da Solução Modular
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Esta aplicação materializa o compromisso da <strong>COGEM / Enap</strong> com a Gestão do Conhecimento (GC) e 
              da Informação (GI). Seu objetivo é superar o trabalho isolado em planilhas e silos, transformando a rotina da 
              gestão de pessoas em um ecossistema integrado que facilita:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Acesso a dados:</strong> People Analytics e métricas objetivas.</span>
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Recuperação de informações:</strong> busca ágil de notas e modelos.</span>
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Consulta a documentos:</strong> acervo homologado com versionamento.</span>
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Aprendizado contínuo:</strong> rituais Antes-Durante-Depois (AAR).</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h4 className="font-bold text-slate-900 text-sm">
              Os 4 Eixos Oficiais da COGEM
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-indigo-50/50 rounded-lg border border-indigo-100">
                <strong className="text-indigo-900">Eixo 1: Estratégia e Modernização da Gestão de Pessoas</strong>
                <p className="text-slate-600 mt-0.5">Planejamento, projetos estratégicos, Dimensionamento da Força de Trabalho (DFT), processos e carreira.</p>
              </div>
              <div className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100">
                <strong className="text-emerald-900">Eixo 2: Experiência, Bem-Estar e Inclusão das Pessoas</strong>
                <p className="text-slate-600 mt-0.5">EX, ambientação, Qualidade de Vida no Trabalho (QVT), Diversidade, Equidade e Inclusão (DEI), desligamento e aposentadoria.</p>
              </div>
              <div className="p-3 bg-amber-50/50 rounded-lg border border-amber-100">
                <strong className="text-amber-900">Eixo 3: Dados, Pesquisas e Evidências em Gestão de Pessoas</strong>
                <p className="text-slate-600 mt-0.5">Pesquisa organizacional, People Analytics, indicadores, painéis e estudos aplicados.</p>
              </div>
              <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                <strong className="text-blue-900">Eixo 4: Informação, Conhecimento e Aprendizagem Organizacional</strong>
                <p className="text-slate-600 mt-0.5">Gestão da informação (GI), Gestão do Conhecimento (GC), memória, documentos, conhecimentos, competências e aprendizagem.</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h4 className="font-bold text-slate-900 text-sm">
              Fundamentação Metodológica Integrada
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              A arquitetura é fundamentada nas pesquisas e modelos de referência de:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-slate-800 block">Sociedade Brasileira de GC (SBGC) & Dr. André Saito</strong>
                <span className="text-slate-500">
                  Modelo de 4 Processos de Conhecimento (Registrar, Compartilhar, Acessar, Desenvolver), Ciclo SECI e Modelo de Maturidade em 12 componentes.
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-slate-800 block">Coleção UTFinova / UTFPR & CNPq</strong>
                <span className="text-slate-500">
                  Transição de Dados → Informação → Conhecimento → Competência (Davenport, Nonaka, Durand) e criação de Ambientes Capacitantes ("Ba").
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
