import React from 'react';
import { Search, Plus, Sparkles, BookOpen, Layers, ShieldCheck, ChevronRight, User } from 'lucide-react';
import { AxisId } from '../types/cogem';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenNewAction: () => void;
  globalSearch: string;
  setGlobalSearch: (val: string) => void;
  selectedAxisId: AxisId | 'all';
  setSelectedAxisId: (axis: AxisId | 'all') => void;
  onOpenAboutModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenNewAction,
  globalSearch,
  setGlobalSearch,
  selectedAxisId,
  setSelectedAxisId,
  onOpenAboutModal
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Zone - Clean single text element & Enap badge */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => { setActiveTab('dashboard'); setSelectedAxisId('all'); }}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center shadow-sm group-hover:bg-emerald-800 transition-colors">
                <span className="text-base tracking-tighter">enap</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-base leading-tight tracking-tight">
                    COGEM Conecta
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Enap
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 leading-tight">
                  Gestão Estratégica & Conhecimento
                </span>
              </div>
            </button>
          </div>

          {/* Center: Global Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                placeholder="Pesquisar eixos, ações, siglas (DFT, PGD, EX...), documentos..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-100 hover:bg-slate-50 focus:bg-white border border-transparent focus:border-emerald-600 rounded-lg outline-none transition-all placeholder:text-slate-400"
              />
              {globalSearch && (
                <button
                  onClick={() => setGlobalSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs px-1"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenAboutModal}
              title="Sobre o Modelo de GC da COGEM"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-500" />
              <span>Modelo COGEM</span>
            </button>

            <button
              onClick={onOpenNewAction}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:scale-95 rounded-lg shadow-sm transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Nova Ação</span>
              <span className="sm:hidden">Ação</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
