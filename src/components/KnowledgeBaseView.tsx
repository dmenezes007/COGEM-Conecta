import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  Clock, 
  Calendar,
  Layers,
  ArrowUpRight,
  Eye,
  FileCheck2,
  FolderOpen,
  SlidersHorizontal,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { DocumentAsset, Axis, AxisId, ReliabilityLevel } from '../types/cogem';

interface KnowledgeBaseViewProps {
  documents: DocumentAsset[];
  axes: Axis[];
  onOpenDocument: (doc: DocumentAsset) => void;
  onSelectGlossaryTerm: (sigla: string) => void;
  onSelectAxis: (axisId: AxisId) => void;
}

export const KnowledgeBaseView: React.FC<KnowledgeBaseViewProps> = ({
  documents,
  axes,
  onOpenDocument,
  onSelectGlossaryTerm,
  onSelectAxis
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAxis, setSelectedAxis] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedReliability, setSelectedReliability] = useState<string>('all');
  const [organizationMode, setOrganizationMode] = useState<'eixos' | 'tipos' | 'lista'>('eixos');

  // Filter documents
  const filteredDocs = useMemo(() => {
    return documents.filter(doc => {
      const matchesAxis = selectedAxis === 'all' || doc.axisId === selectedAxis;
      const matchesType = selectedType === 'all' || doc.type === selectedType;
      const matchesReliability = selectedReliability === 'all' || doc.reliability === selectedReliability;
      const matchesSearch = 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
        doc.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.acronyms.some(sigla => sigla.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesAxis && matchesType && matchesReliability && matchesSearch;
    });
  }, [documents, selectedAxis, selectedType, selectedReliability, searchTerm]);

  // Document types list
  const documentTypes = useMemo(() => {
    return Array.from(new Set(documents.map(d => d.type)));
  }, [documents]);

  const getReliabilityBadge = (level: ReliabilityLevel) => {
    switch (level) {
      case 'Padrão Homologado':
        return (
          <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>Padrão Homologado</span>
          </span>
        );
      case 'Boa Prática':
        return (
          <span className="text-[11px] font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 flex items-center gap-1">
            <Award className="w-3 h-3 text-blue-600" />
            <span>Boa Prática Testada</span>
          </span>
        );
      case 'Lição Aprendida':
        return (
          <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-600" />
            <span>Lição Aprendida</span>
          </span>
        );
    }
  };

  const handleDownloadFile = (doc: DocumentAsset, e: React.MouseEvent) => {
    e.stopPropagation();
    // Generate text blob and download as a markdown/txt document
    const fileContent = `# ${doc.title}
Tipo: ${doc.type} | Versão: ${doc.version}
Eixo: ${doc.axisId} | Confiabilidade: ${doc.reliability}
Autor: ${doc.author} | Data: ${doc.date}
Siglas: ${doc.acronyms.join(', ')}

==================================================
SUMÁRIO EXECUTIVO:
==================================================
${doc.summary}

==================================================
TEOR TÉCNICO COMPLETO:
==================================================
${doc.fullContent}

Palavras-chave: ${doc.tags.join(', ')}
Fonte: COGEM - Coordenação de Gestão Estratégica e Modernização / Enap
`;
    const blob = new Blob([fileContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${doc.id}_${doc.title.replace(/[^a-zA-Z0-9]/g, '_')}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Render card helper
  const renderDocCard = (doc: DocumentAsset) => {
    const axis = axes.find(a => a.id === doc.axisId);
    return (
      <div
        key={doc.id}
        onClick={() => onOpenDocument(doc)}
        className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-4 group cursor-pointer"
      >
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                {doc.type}
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                {doc.version}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-[11px] text-slate-500">
                Eixo {axis?.number}
              </span>
            </div>

            {getReliabilityBadge(doc.reliability)}
          </div>

          <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors leading-snug">
            {doc.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
            {doc.summary}
          </p>
        </div>

        <div className="space-y-3 pt-3 border-t border-slate-100">
          {/* Tags and Acronyms */}
          <div className="flex flex-wrap items-center gap-1.5">
            {doc.acronyms.map((sigla) => (
              <button
                key={sigla}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectGlossaryTerm(sigla);
                }}
                className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-1.5 py-0.5 rounded border border-emerald-200 transition-colors"
                title={`Ver termo ${sigla} no Glossário`}
              >
                {sigla}
              </button>
            ))}

            {doc.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>

          {/* Metadata & Actions */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
            <div className="flex items-center gap-2 text-[11px]">
              <span className="truncate max-w-[120px]">{doc.author}</span>
              <span aria-hidden="true">·</span>
              <span>{doc.readTime}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={(e) => handleDownloadFile(doc, e)}
                title="Baixar documento oficial (.md)"
                className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              >
                <Download className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onOpenDocument(doc)}
                className="px-3 py-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors flex items-center gap-1"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Visualizar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Title & Introduction */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <span>GESTÃO DA INFORMAÇÃO & MEMÓRIA TÉCNICA</span>
            <span aria-hidden="true">·</span>
            <span>EIXO 4 COGEM</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Módulo de Consulta de Documentos & Acervo Técnico
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Repositório oficial para recuperação ágil de notas técnicas, manuais, modelos de formulários, 
            pesquisas e lições aprendidas da COGEM/Enap. Todos os documentos podem ser visualizados na íntegra ou baixados diretamente.
          </p>
        </div>

        {/* View Mode Switcher: Organize by Axes, by Type, or Full List */}
        <div className="bg-slate-100 p-1 rounded-xl flex items-center gap-1 shrink-0 self-start md:self-auto border border-slate-200">
          <button
            onClick={() => setOrganizationMode('eixos')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              organizationMode === 'eixos' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Por Eixos ({axes.length})</span>
          </button>
          <button
            onClick={() => setOrganizationMode('tipos')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              organizationMode === 'tipos' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span>Por Tipo ({documentTypes.length})</span>
          </button>
          <button
            onClick={() => setOrganizationMode('lista')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              organizationMode === 'lista' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Lista Geral ({filteredDocs.length})</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-3">
        <div className="relative w-full lg:w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar por título, palavra-chave, autor, sigla..."
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 focus:border-emerald-600 rounded-lg outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 w-full lg:w-auto flex-wrap justify-end">
          <select
            value={selectedAxis}
            onChange={(e) => setSelectedAxis(e.target.value)}
            className="text-xs py-1.5 px-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none"
          >
            <option value="all">Todos os Eixos</option>
            {axes.map(a => (
              <option key={a.id} value={a.id}>Eixo {a.number}: {a.title}</option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="text-xs py-1.5 px-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none"
          >
            <option value="all">Todos os Tipos</option>
            {documentTypes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <select
            value={selectedReliability}
            onChange={(e) => setSelectedReliability(e.target.value)}
            className="text-xs py-1.5 px-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 outline-none"
          >
            <option value="all">Todas as Confiabilidades</option>
            <option value="Padrão Homologado">Padrão Homologado</option>
            <option value="Boa Prática">Boa Prática Testada</option>
            <option value="Lição Aprendida">Lição Aprendida</option>
          </select>
        </div>
      </div>

      {/* VIEW 1: ORGANIZED BY AXES */}
      {organizationMode === 'eixos' && (
        <div className="space-y-8">
          {axes.map(axis => {
            const axisDocs = filteredDocs.filter(d => d.axisId === axis.id);
            if (axisDocs.length === 0 && selectedAxis !== 'all' && selectedAxis !== axis.id) return null;

            return (
              <div key={axis.id} className="space-y-3">
                <div className="flex items-center justify-between bg-slate-100/80 px-4 py-2.5 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
                      {axis.number}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {axis.title}
                    </h3>
                    <span className="text-xs text-slate-500 font-mono">
                      ({axisDocs.length} documentos)
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectAxis(axis.id)}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                  >
                    <span>Ver detalhes do eixo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {axisDocs.length === 0 ? (
                  <div className="p-6 text-center bg-white rounded-xl border border-dashed border-slate-200 text-xs text-slate-400">
                    Nenhum documento encontrado neste eixo com os filtros atuais.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {axisDocs.map(renderDocCard)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: ORGANIZED BY DOCUMENT TYPE */}
      {organizationMode === 'tipos' && (
        <div className="space-y-8">
          {documentTypes.map(type => {
            const typeDocs = filteredDocs.filter(d => d.type === type);
            if (typeDocs.length === 0 && selectedType !== 'all' && selectedType !== type) return null;

            return (
              <div key={type} className="space-y-3">
                <div className="flex items-center justify-between bg-slate-100/80 px-4 py-2.5 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-4 h-4 text-emerald-700" />
                    <h3 className="font-bold text-slate-900 text-sm">
                      Categoria: {type}
                    </h3>
                    <span className="text-xs text-slate-500 font-mono">
                      ({typeDocs.length} arquivos)
                    </span>
                  </div>
                </div>

                {typeDocs.length === 0 ? (
                  <div className="p-6 text-center bg-white rounded-xl border border-dashed border-slate-200 text-xs text-slate-400">
                    Nenhum documento encontrado nesta categoria.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {typeDocs.map(renderDocCard)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 3: FLAT LIST */}
      {organizationMode === 'lista' && (
        <div>
          {filteredDocs.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-xl border border-slate-200">
              <FileText className="w-8 h-8 mx-auto text-slate-300 mb-2" />
              <h3 className="text-sm font-semibold text-slate-800">Nenhum documento encontrado</h3>
              <p className="text-xs text-slate-500 mt-1">
                Tente remover alguns filtros ou buscar por palavras mais genéricas.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredDocs.map(renderDocCard)}
            </div>
          )}
        </div>
      )}

    </div>
  );
};
