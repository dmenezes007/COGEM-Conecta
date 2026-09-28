import React, { useState } from 'react';
import { X, Plus, Trash2, Target, Layers } from 'lucide-react';
import { Axis, AxisId, ActionStatus, KnowledgeProcess, CogemAction } from '../types/cogem';

interface NewActionModalProps {
  axes: Axis[];
  initialAxisId?: AxisId;
  onClose: () => void;
  onSaveAction: (newAction: Omit<CogemAction, 'id'>) => void;
}

export const NewActionModal: React.FC<NewActionModalProps> = ({
  axes,
  initialAxisId = 'eixo-1',
  onClose,
  onSaveAction
}) => {
  const [axisId, setAxisId] = useState<AxisId>(initialAxisId);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [scopeTag, setScopeTag] = useState('');
  const [acronymsInput, setAcronymsInput] = useState('');
  const [responsible, setResponsible] = useState('');
  const [knowledgeProcess, setKnowledgeProcess] = useState<KnowledgeProcess>('Registrar e Sistematizar');
  const [knowledgeType, setKnowledgeType] = useState<'Tácito' | 'Explícito' | 'Ambos'>('Explícito');
  const [targetDate, setTargetDate] = useState('30/06/2026');
  
  const [deliverables, setDeliverables] = useState<string[]>([
    'Definição do plano de trabalho e alinhamento',
    'Produção do primeiro entregável técnico'
  ]);
  const [newDeliverableText, setNewDeliverableText] = useState('');

  const handleAddDeliverable = () => {
    if (!newDeliverableText.trim()) return;
    setDeliverables([...deliverables, newDeliverableText.trim()]);
    setNewDeliverableText('');
  };

  const handleRemoveDeliverable = (idx: number) => {
    setDeliverables(deliverables.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const acronyms = acronymsInput
      .split(',')
      .map(s => s.trim().toUpperCase())
      .filter(Boolean);

    onSaveAction({
      axisId,
      title: title.trim(),
      description: description.trim(),
      scopeTag: scopeTag.trim() || 'Modernização',
      acronyms: acronyms.length ? acronyms : ['GC'],
      deliverables: deliverables.map(d => ({ title: d, done: false })),
      status: 'Em Andamento',
      progress: 10,
      responsible: responsible.trim() || 'Equipe COGEM',
      stakeholders: ['DGES', 'COGEM'],
      knowledgeProcess,
      knowledgeType,
      startDate: new Date().toLocaleDateString('pt-BR'),
      targetDate,
      lastUpdate: new Date().toLocaleDateString('pt-BR'),
      linkedDocumentIds: []
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
            <Target className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">
              Cadastrar Nova Ação Estruturante (COGEM)
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
          {/* Axis Selector */}
          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              Eixo de Atuação da COGEM:
            </label>
            <select
              value={axisId}
              onChange={(e) => setAxisId(e.target.value as AxisId)}
              className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
            >
              {axes.map(a => (
                <option key={a.id} value={a.id}>
                  Eixo {a.number}: {a.title}
                </option>
              ))}
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              Título da Ação / Projeto:
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Implantação de Mentoria Reversa para o PGD"
              className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
            />
          </div>

          {/* Description */}
          <div>
            <label className="font-semibold text-slate-700 block mb-1">
              Descrição e Justificativa da Entrega:
            </label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detalhe o objetivo da ação, público beneficiado e impacto na Enap..."
              className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Etiqueta de Abrangência (Escopo):
              </label>
              <input
                type="text"
                value={scopeTag}
                onChange={(e) => setScopeTag(e.target.value)}
                placeholder="Ex: DFT, People Analytics, Carreira..."
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Siglas do Glossário (separadas por vírgula):
              </label>
              <input
                type="text"
                value={acronymsInput}
                onChange={(e) => setAcronymsInput(e.target.value)}
                placeholder="Ex: DFT, PGD, EX, GC"
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Processo de Gestão do Conhecimento:
              </label>
              <select
                value={knowledgeProcess}
                onChange={(e) => setKnowledgeProcess(e.target.value as KnowledgeProcess)}
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
              >
                <option value="Registrar e Sistematizar">Registrar e Sistematizar</option>
                <option value="Compartilhar e Disseminar">Compartilhar e Disseminar</option>
                <option value="Utilizar e Acessar">Utilizar e Acessar</option>
                <option value="Adquirir e Desenvolver">Adquirir e Desenvolver</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Servidor Responsável / Ponto Focal:
              </label>
              <input
                type="text"
                value={responsible}
                onChange={(e) => setResponsible(e.target.value)}
                placeholder="Ex: Paulo Roberto Cueto"
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          {/* Deliverables management */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <label className="font-semibold text-slate-700 block">
              Entregas e Marcos de Execução:
            </label>

            <div className="space-y-1.5">
              {deliverables.map((del, idx) => (
                <div key={idx} className="flex items-center justify-between gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <span>{del}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveDeliverable(idx)}
                    className="text-slate-400 hover:text-red-600 p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                value={newDeliverableText}
                onChange={(e) => setNewDeliverableText(e.target.value)}
                placeholder="Adicionar novo marco ou entrega..."
                className="flex-1 py-1.5 px-3 text-xs bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-emerald-600"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddDeliverable();
                  }
                }}
              />
              <button
                type="button"
                onClick={handleAddDeliverable}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                + Incluir
              </button>
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
              Salvar Ação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
