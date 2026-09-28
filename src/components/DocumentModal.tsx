import React, { useState } from 'react';
import { X, FileText, CheckCircle2, Award, Clock, Download, Copy, Check, Share2, Tag, Calendar, User, ExternalLink } from 'lucide-react';
import { DocumentAsset } from '../types/cogem';

interface DocumentModalProps {
  docAsset: DocumentAsset | null;
  onClose: () => void;
  onSelectGlossaryTerm: (sigla: string) => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  docAsset,
  onClose,
  onSelectGlossaryTerm
}) => {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!docAsset) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${docAsset.title}\n\n${docAsset.summary}\n\n${docAsset.fullContent}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const fileContent = `# ${docAsset.title}
Tipo: ${docAsset.type} | Versão: ${docAsset.version}
Eixo: ${docAsset.axisId} | Confiabilidade: ${docAsset.reliability}
Autor: ${docAsset.author} | Data: ${docAsset.date}
Siglas: ${docAsset.acronyms.join(', ')}

==================================================
SUMÁRIO EXECUTIVO:
==================================================
${docAsset.summary}

==================================================
TEOR TÉCNICO COMPLETO:
==================================================
${docAsset.fullContent}

Palavras-chave: ${docAsset.tags.join(', ')}
Fonte Oficial: COGEM - Coordenação de Gestão Estratégica e Modernização / Enap
`;
    const blob = new Blob([fileContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = window.document.createElement('a');
    link.href = url;
    link.download = `${docAsset.id}_${docAsset.title.replace(/[^a-zA-Z0-9]/g, '_')}.md`;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div 
        className="bg-white w-full max-w-3xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/50">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-mono text-slate-400 font-semibold">{docAsset.id}</span>
              <span aria-hidden="true">·</span>
              <span className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded font-medium text-[11px]">
                {docAsset.type}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-slate-500">{docAsset.version}</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              {docAsset.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm">
          
          {/* Metadata Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Autor / Unidade:</span>
              <strong className="text-slate-800">{docAsset.author}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Data de Aprovação:</span>
              <strong className="text-slate-800">{docAsset.date}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Confiabilidade GC:</span>
              <strong className="text-emerald-700">{docAsset.reliability}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Tempo de Leitura:</span>
              <strong className="text-slate-800">{docAsset.readTime}</strong>
            </div>
          </div>

          {/* Resumo Executivo */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Sumário Executivo
            </h4>
            <div className="p-4 bg-emerald-50/40 rounded-xl border border-emerald-100/70 text-slate-800 leading-relaxed text-xs sm:text-sm">
              {docAsset.summary}
            </div>
          </div>

          {/* Conteúdo Completo */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Teor do Documento Técnico
            </h4>
            <div className="p-5 bg-white rounded-xl border border-slate-200 font-sans text-xs sm:text-sm text-slate-800 whitespace-pre-line leading-relaxed">
              {docAsset.fullContent}
            </div>
          </div>

          {/* Tags & Acronyms */}
          <div className="space-y-2">
            <span className="font-bold text-slate-800 text-xs block">
              Siglas e Palavras-Chave de Recuperação:
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {docAsset.acronyms.map((sigla) => (
                <button
                  key={sigla}
                  onClick={() => {
                    onClose();
                    onSelectGlossaryTerm(sigla);
                  }}
                  className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2 py-1 rounded border border-emerald-200 transition-colors"
                >
                  {sigla} ↗
                </button>
              ))}
              {docAsset.tags.map((t, idx) => (
                <span key={idx} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">
                  #{t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Formato digital disponível · Homologado pela COGEM / Enap
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              {downloaded ? <Check className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloaded ? 'Baixado com Sucesso!' : 'Baixar Documento (.md)'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
