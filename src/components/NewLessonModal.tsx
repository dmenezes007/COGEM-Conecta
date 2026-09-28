import React, { useState } from 'react';
import { X, Sparkles, BrainCircuit, CheckCircle2 } from 'lucide-react';
import { LessonLearned, AxisId, ReliabilityLevel } from '../types/cogem';

interface NewLessonModalProps {
  onClose: () => void;
  onSaveLesson: (newLesson: LessonLearned) => void;
}

export const NewLessonModal: React.FC<NewLessonModalProps> = ({
  onClose,
  onSaveLesson
}) => {
  const [title, setTitle] = useState('');
  const [axisId, setAxisId] = useState<AxisId>('eixo-4');
  const [situation, setSituation] = useState('');
  const [expectedVsActual, setExpectedVsActual] = useState('');
  const [rootCauses, setRootCauses] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [author, setAuthor] = useState('');
  const [reliability, setReliability] = useState<ReliabilityLevel>('Lição Aprendida');
  const [acronymsInput, setAcronymsInput] = useState('GC, PGD');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !recommendations.trim()) return;

    const acronyms = acronymsInput
      .split(',')
      .map(s => s.trim().toUpperCase())
      .filter(Boolean);

    onSaveLesson({
      id: `LL-${Date.now().toString().slice(-3)}`,
      title: title.trim(),
      axisId,
      situation: situation.trim(),
      expectedVsActual: expectedVsActual.trim(),
      rootCauses: rootCauses.trim(),
      recommendations: recommendations.trim(),
      reliability,
      author: author.trim() || 'Equipe COGEM',
      date: new Date().toLocaleDateString('pt-BR'),
      acronyms: acronyms.length ? acronyms : ['GC']
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">
              Registrar Lição Aprendida (After Action Review · AAR)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 text-xs text-emerald-950">
            <strong>Ritual "Aprender Antes - Durante - Depois":</strong> Estruture o raciocínio prático 
            para evitar retrabalho na unidade e transformar a vivência pontual em memória organizacional.
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              Título da Lição ou Desafio Enfrentado:
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Alinhamento de Prazos em Editais Pedagógicos com PGD"
              className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Eixo Vinculado:
              </label>
              <select
                value={axisId}
                onChange={(e) => setAxisId(e.target.value as AxisId)}
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
              >
                <option value="eixo-1">Eixo 1: Estratégia e Modernização</option>
                <option value="eixo-2">Eixo 2: Experiência e Bem-Estar</option>
                <option value="eixo-3">Eixo 3: Dados e Evidências</option>
                <option value="eixo-4">Eixo 4: Informação e Conhecimento</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Estágio de Confiabilidade:
              </label>
              <select
                value={reliability}
                onChange={(e) => setReliability(e.target.value as ReliabilityLevel)}
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
              >
                <option value="Lição Aprendida">Lição Aprendida ("Funcionou uma vez")</option>
                <option value="Boa Prática">Boa Prática ("Dá para confiar / testada")</option>
                <option value="Padrão Homologado">Padrão Homologado ("É assim que se faz")</option>
              </select>
            </div>
          </div>

          {/* 4 Canonical Questions */}
          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              1 & 2. O que era esperado vs. O que aconteceu na prática?
            </label>
            <textarea
              required
              rows={2}
              value={expectedVsActual}
              onChange={(e) => setExpectedVsActual(e.target.value)}
              placeholder="Descreva o plano original e quais foram as surpresas ou desvios na execução..."
              className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              3. Quais foram as causas raízes dos problemas ou do sucesso?
            </label>
            <textarea
              required
              rows={2}
              value={rootCauses}
              onChange={(e) => setRootCauses(e.target.value)}
              placeholder="Identifique os fatores críticos de processo, tecnologia ou coordenação..."
              className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
            />
          </div>

          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              4. O que fazer diferente no próximo projeto? (Recomendações Práticas):
            </label>
            <textarea
              required
              rows={2}
              value={recommendations}
              onChange={(e) => setRecommendations(e.target.value)}
              placeholder="Recomendações objetivas para os próximos servidores executores..."
              className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Servidor Autor do Registro:
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Ex: Elena Gestão"
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Siglas Associadas (separadas por vírgula):
              </label>
              <input
                type="text"
                value={acronymsInput}
                onChange={(e) => setAcronymsInput(e.target.value)}
                placeholder="Ex: GC, PGD, DFT"
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600 font-mono"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs"
            >
              Gravar no Acervo de GC
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
