import React from 'react';
import { 
  LayoutDashboard, 
  Target, 
  FileText, 
  BarChart3, 
  BrainCircuit, 
  BookMarked, 
  Users2,
  FolderGit2
} from 'lucide-react';
import { AxisId } from '../types/cogem';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedAxisId: AxisId | 'all';
  setSelectedAxisId: (axis: AxisId | 'all') => void;
  actionsCountByAxis: Record<AxisId, number>;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  selectedAxisId,
  setSelectedAxisId,
  actionsCountByAxis
}) => {
  const primaryNavItems = [
    { id: 'dashboard', label: 'Ponto de Controle', icon: LayoutDashboard },
    { id: 'axes', label: 'Eixos de Atuação', icon: Target },
    { id: 'documents', label: 'Acervo Documental', icon: FileText },
    { id: 'analytics', label: 'Dados & People Analytics', icon: BarChart3 },
    { id: 'km', label: 'Gestão do Conhecimento', icon: BrainCircuit },
    { id: 'glossary', label: 'Glossário Estratégico', icon: BookMarked },
    { id: 'communities', label: 'Comunidades & Especialistas', icon: Users2 },
  ];

  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto py-2 scrollbar-none">
          <div className="flex items-center space-x-1 shrink-0">
            {primaryNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center gap-2 pl-4 text-xs text-slate-500 border-l border-slate-200 shrink-0">
            <span className="font-semibold text-slate-700">COGEM / Enap:</span>
            <span>4 Eixos Estruturantes</span>
            <span aria-hidden="true">·</span>
            <span>12 Siglas Chave</span>
            <span aria-hidden="true">·</span>
            <span>Gestão do Conhecimento Viva</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
