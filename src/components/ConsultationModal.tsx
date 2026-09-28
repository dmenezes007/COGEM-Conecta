import React, { useState } from 'react';
import { X, Mail, CheckCircle2, UserCheck, Calendar } from 'lucide-react';
import { Specialist } from '../types/cogem';

interface ConsultationModalProps {
  specialist: Specialist | null;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  specialist,
  onClose
}) => {
  const [topic, setTopic] = useState('');
  const [context, setContext] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!specialist) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base font-bold text-slate-900">
              Solicitar Apoio / Mentoria Técnica
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
            <h4 className="text-base font-bold text-slate-900">
              Solicitação Registrada com Sucesso!
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Uma notificação institucional foi enviada para <strong>{specialist.email}</strong>. 
              O especialista entrará em contato para agendar o encontro síncrono via Microsoft Teams da Enap.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs sm:text-sm">
            {/* Specialist Profile summary */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700">
                {specialist.name.charAt(0)}
              </div>
              <div>
                <strong className="text-slate-900 text-xs sm:text-sm block">{specialist.name}</strong>
                <span className="text-[11px] text-slate-500">{specialist.role} · {specialist.area}</span>
              </div>
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Tópico ou Dúvida Técnica Principal:
              </label>
              <input
                type="text"
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ex: Como parametrizar entregas no PGD conforme a IN 24"
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Contexto da Demanda na sua Unidade:
              </label>
              <textarea
                required
                rows={3}
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="Explique brevemente o projeto ou processo em que você precisa de orientação..."
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-1">
                Data/Horário Sugerido (Sessão rápida de 30 min):
              </label>
              <input
                type="text"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                placeholder="Ex: Próxima terça-feira, no período da tarde"
                className="w-full py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 outline-none focus:border-emerald-600"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
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
                Enviar Solicitação
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
