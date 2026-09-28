import React, { useState } from 'react';
import { 
  Users2, 
  Search, 
  Calendar, 
  Mail, 
  Sparkles, 
  MessageSquare, 
  Award, 
  ArrowRight,
  CheckCircle2,
  BookOpen,
  UserCheck
} from 'lucide-react';
import { CommunityOfPractice, Specialist } from '../types/cogem';

interface CommunitiesViewProps {
  communities: CommunityOfPractice[];
  specialists: Specialist[];
  onSelectGlossaryTerm: (sigla: string) => void;
  onRequestConsultation: (specialist: Specialist) => void;
}

export const CommunitiesView: React.FC<CommunitiesViewProps> = ({
  communities,
  specialists,
  onSelectGlossaryTerm,
  onRequestConsultation
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<'cops' | 'yellowPages'>('cops');

  const filteredSpecialists = specialists.filter(esp => 
    esp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    esp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    esp.topSkills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
    esp.knowledgeTopics.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6 pb-12">
      
      {/* Title */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <span>DISSEMINAÇÃO DE SABERES & REDE DE TALENTOS</span>
            <span aria-hidden="true">·</span>
            <span>MODELO WENGER / SBGC</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Comunidades de Prática & Páginas Amarelas Enap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Ambiente capacitante (o "Ba" de Nonaka) para conexão entre pessoas, facilitação de trocas 
            de conhecimento tácito e catálogo de especialistas internos para mentoria técnica sob demanda.
          </p>
        </div>

        {/* Section switcher */}
        <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 shrink-0 self-start md:self-auto">
          <button
            onClick={() => setActiveSection('cops')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeSection === 'cops' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Comunidades de Prática ({communities.length})
          </button>
          <button
            onClick={() => setActiveSection('yellowPages')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeSection === 'yellowPages' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Páginas Amarelas ({specialists.length})
          </button>
        </div>
      </div>

      {/* SECTION 1: Communities of Practice */}
      {activeSection === 'cops' && (
        <div className="space-y-6">
          {/* Wenger's Triad Explainer */}
          <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                Estrutura Canônica de uma CoP (Wenger, McDermott & Snyder)
              </span>
              <p className="text-xs text-slate-300">
                Uma Comunidade de Prática sustenta-se em 3 pilares interdependentes:
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <div className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <strong className="text-emerald-400">Domínio:</strong> Campo de saber que une o grupo
              </div>
              <div className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <strong className="text-indigo-400">Comunidade:</strong> Relações e trocas frequentes
              </div>
              <div className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <strong className="text-amber-400">Prática:</strong> Repertório de métodos e lições
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communities.map((cop) => (
              <div 
                key={cop.id}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 font-mono">
                      {cop.id}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {cop.membersCount} servidores membros
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base">
                    {cop.name}
                  </h3>

                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs">
                    <strong className="text-slate-800 block text-[11px] mb-0.5">Domínio de Conhecimento:</strong>
                    <span className="text-slate-600">{cop.domain}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cop.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-100 text-xs">
                  <div>
                    <strong className="text-[11px] text-slate-700 block mb-1">
                      Entregas e Resultados Recentes da CoP:
                    </strong>
                    <ul className="text-slate-600 space-y-1 list-disc list-inside">
                      {cop.recentOutcomes.map((outcome, idx) => (
                        <li key={idx} className="truncate">{outcome}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-slate-500 text-[11px] pt-1">
                    <div>
                      <span>Facilitador: <strong className="text-slate-700">{cop.facilitator}</strong></span>
                      <span aria-hidden="true" className="mx-1">·</span>
                      <span>{cop.cadence}</span>
                    </div>

                    <span className="text-emerald-700 font-medium font-mono">
                      {cop.meetingDay}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: Yellow Pages / Catálogo de Especialistas */}
      {activeSection === 'yellowPages' && (
        <div className="space-y-6">
          {/* Search box for specialists */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar especialista por competência, tema ou nome..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 focus:border-emerald-600 rounded-lg outline-none"
              />
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Encontre referências técnicas internas para apoio pontual e transferência de conhecimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSpecialists.map((esp) => (
              <div 
                key={esp.id}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-sm">
                        {esp.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm leading-tight">
                          {esp.name}
                        </h4>
                        <span className="text-[11px] text-slate-500 block">
                          {esp.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600">
                    <span className="text-slate-400 block text-[11px]">Lotação / Área:</span>
                    <strong className="text-slate-700">{esp.area}</strong>
                  </div>

                  {/* Skills tags */}
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-slate-700 block">Competências-Chave:</span>
                    <div className="flex flex-wrap gap-1">
                      {esp.topSkills.map((skill, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] px-2 py-0.5 rounded font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Knowledge topics */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-semibold text-slate-700 block">Tópicos para Mentoria:</span>
                    <ul className="text-[11px] text-slate-500 space-y-0.5 list-disc list-inside">
                      {esp.knowledgeTopics.slice(0, 2).map((t, idx) => (
                        <li key={idx} className="truncate">{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className={`text-[11px] font-medium ${
                    esp.availability === 'Disponível para mentoria' ? 'text-emerald-700' : 'text-slate-500'
                  }`}>
                    ● {esp.availability}
                  </span>

                  <button
                    onClick={() => onRequestConsultation(esp)}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3 text-slate-500" />
                    <span>Solicitar Apoio</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
