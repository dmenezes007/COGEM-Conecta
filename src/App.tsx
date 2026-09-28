/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  AXES_DATA, 
  GLOSSARY_DATA, 
  INITIAL_ACTIONS, 
  TECHNICAL_DOCUMENTS, 
  INDICATORS_DATA, 
  COMMUNITIES_OF_PRACTICE, 
  SPECIALISTS_DIRECTORY, 
  LESSONS_LEARNED 
} from './data/cogemData';
import { 
  AxisId, 
  CogemAction, 
  DocumentAsset, 
  ActionStatus, 
  Specialist, 
  LessonLearned,
  GlossaryItem,
  Axis
} from './types/cogem';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { DashboardView } from './components/DashboardView';
import { AxesView } from './components/AxesView';
import { KnowledgeBaseView } from './components/KnowledgeBaseView';
import { AnalyticsView } from './components/AnalyticsView';
import { KnowledgeManagementView } from './components/KnowledgeManagementView';
import { GlossaryView } from './components/GlossaryView';
import { CommunitiesView } from './components/CommunitiesView';
import { DocumentModal } from './components/DocumentModal';
import { ActionDetailModal } from './components/ActionDetailModal';
import { AxisDetailModal } from './components/AxisDetailModal';
import { NewActionModal } from './components/NewActionModal';
import { NewLessonModal } from './components/NewLessonModal';
import { AboutModal } from './components/AboutModal';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [selectedAxisId, setSelectedAxisId] = useState<AxisId | 'all'>('all');
  const [globalSearch, setGlobalSearch] = useState<string>('');
  
  // Dynamic State
  const [actions, setActions] = useState<CogemAction[]>(INITIAL_ACTIONS);
  const [documents, setDocuments] = useState<DocumentAsset[]>(TECHNICAL_DOCUMENTS);
  const [lessons, setLessons] = useState<LessonLearned[]>(LESSONS_LEARNED);
  const [selectedGlossaryTerm, setSelectedGlossaryTerm] = useState<string | null>(null);

  // Modals state
  const [activeDocument, setActiveDocument] = useState<DocumentAsset | null>(null);
  const [activeAction, setActiveAction] = useState<CogemAction | null>(null);
  const [activeAxisModal, setActiveAxisModal] = useState<Axis | null>(null);
  const [consultationSpecialist, setConsultationSpecialist] = useState<Specialist | null>(null);
  const [isNewActionOpen, setIsNewActionOpen] = useState(false);
  const [isNewLessonOpen, setIsNewLessonOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [newActionInitialAxis, setNewActionInitialAxis] = useState<AxisId>('eixo-1');

  // Count actions per axis for navigation & badges
  const actionsCountByAxis = useMemo(() => {
    return {
      'eixo-1': actions.filter(a => a.axisId === 'eixo-1').length,
      'eixo-2': actions.filter(a => a.axisId === 'eixo-2').length,
      'eixo-3': actions.filter(a => a.axisId === 'eixo-3').length,
      'eixo-4': actions.filter(a => a.axisId === 'eixo-4').length,
    };
  }, [actions]);

  // Handlers
  const handleToggleDeliverable = (actionId: string, index: number) => {
    setActions(prev => prev.map(action => {
      if (action.id !== actionId) return action;

      const updatedDeliverables = action.deliverables.map((del, i) => 
        i === index ? { ...del, done: !del.done } : del
      );

      const doneCount = updatedDeliverables.filter(d => d.done).length;
      const progress = Math.round((doneCount / updatedDeliverables.length) * 100);
      const status: ActionStatus = progress === 100 ? 'Concluído' : progress > 0 ? 'Em Andamento' : 'Planejado';

      const updated = {
        ...action,
        deliverables: updatedDeliverables,
        progress,
        status,
        lastUpdate: new Date().toLocaleDateString('pt-BR')
      };

      if (activeAction?.id === actionId) {
        setActiveAction(updated);
      }

      return updated;
    }));
  };

  const handleChangeStatus = (actionId: string, newStatus: ActionStatus) => {
    setActions(prev => prev.map(action => {
      if (action.id !== actionId) return action;
      const updated = {
        ...action,
        status: newStatus,
        progress: newStatus === 'Concluído' ? 100 : action.progress === 100 ? 50 : action.progress,
        lastUpdate: new Date().toLocaleDateString('pt-BR')
      };
      if (activeAction?.id === actionId) {
        setActiveAction(updated);
      }
      return updated;
    }));
  };

  const handleSaveAction = (newActionData: Omit<CogemAction, 'id'>) => {
    const newId = `ACT-${String(actions.length + 1).padStart(2, '0')}`;
    const newAction: CogemAction = {
      ...newActionData,
      id: newId
    };
    setActions([newAction, ...actions]);
  };

  const handleSaveLesson = (newLesson: LessonLearned) => {
    setLessons([newLesson, ...lessons]);
  };

  const handleSelectGlossaryTerm = (sigla: string) => {
    setSelectedGlossaryTerm(sigla);
    setActiveTab('glossary');
  };

  const handleSelectAxisFromAnywhere = (axisId: AxisId) => {
    setSelectedAxisId(axisId);
    setActiveTab('axes');
  };

  const handleOpenNewActionForAxis = (axisId: AxisId) => {
    setNewActionInitialAxis(axisId);
    setIsNewActionOpen(true);
  };

  // Filter actions or documents globally if search is active
  const searchResultsCount = useMemo(() => {
    if (!globalSearch.trim()) return 0;
    const term = globalSearch.toLowerCase();
    const actionMatches = actions.filter(a => 
      a.title.toLowerCase().includes(term) || 
      a.description.toLowerCase().includes(term) ||
      a.acronyms.some(s => s.toLowerCase().includes(term))
    ).length;
    const docMatches = documents.filter(d => 
      d.title.toLowerCase().includes(term) || 
      d.summary.toLowerCase().includes(term) ||
      d.acronyms.some(s => s.toLowerCase().includes(term))
    ).length;
    const glossaryMatches = GLOSSARY_DATA.filter(g =>
      g.sigla.toLowerCase().includes(term) ||
      g.extenso.toLowerCase().includes(term)
    ).length;
    return actionMatches + docMatches + glossaryMatches;
  }, [globalSearch, actions, documents]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenNewAction={() => setIsNewActionOpen(true)}
        globalSearch={globalSearch}
        setGlobalSearch={setGlobalSearch}
        selectedAxisId={selectedAxisId}
        setSelectedAxisId={setSelectedAxisId}
        onOpenAboutModal={() => setIsAboutOpen(true)}
      />

      {/* Primary Navigation */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab !== 'glossary') setSelectedGlossaryTerm(null);
        }}
        selectedAxisId={selectedAxisId}
        setSelectedAxisId={setSelectedAxisId}
        actionsCountByAxis={actionsCountByAxis}
      />

      {/* Global Search Banner (when active) */}
      {globalSearch && (
        <div className="bg-emerald-50 border-b border-emerald-200 py-2.5 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
            <span className="text-emerald-900 font-medium">
              Resultados para a busca "<strong>{globalSearch}</strong>": <strong>{searchResultsCount}</strong> itens encontrados nos módulos.
            </span>
            <button
              onClick={() => setGlobalSearch('')}
              className="text-emerald-700 hover:text-emerald-950 font-semibold underline"
            >
              Limpar pesquisa
            </button>
          </div>
        </div>
      )}

      {/* Main Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {activeTab === 'dashboard' && (
          <DashboardView
            axes={AXES_DATA}
            actions={actions}
            documents={documents}
            glossary={GLOSSARY_DATA}
            onSelectAxis={handleSelectAxisFromAnywhere}
            onOpenAxisDetailModal={(axis) => setActiveAxisModal(axis)}
            onOpenActionDetail={(action) => setActiveAction(action)}
            onOpenDocument={(doc) => setActiveDocument(doc)}
            onNavigateToTab={(tab) => setActiveTab(tab)}
            onSelectGlossaryTerm={handleSelectGlossaryTerm}
          />
        )}

        {activeTab === 'axes' && (
          <AxesView
            axes={AXES_DATA}
            actions={actions}
            documents={documents}
            selectedAxisId={selectedAxisId}
            setSelectedAxisId={setSelectedAxisId}
            onOpenActionDetail={(action) => setActiveAction(action)}
            onOpenDocument={(doc) => setActiveDocument(doc)}
            onOpenNewActionWithAxis={handleOpenNewActionForAxis}
            onToggleDeliverable={handleToggleDeliverable}
            onSelectGlossaryTerm={handleSelectGlossaryTerm}
          />
        )}

        {activeTab === 'documents' && (
          <KnowledgeBaseView
            documents={documents}
            axes={AXES_DATA}
            onOpenDocument={(doc) => setActiveDocument(doc)}
            onSelectGlossaryTerm={handleSelectGlossaryTerm}
            onSelectAxis={handleSelectAxisFromAnywhere}
          />
        )}

        {activeTab === 'analytics' && (
          <AnalyticsView
            indicators={INDICATORS_DATA}
            onSelectGlossaryTerm={handleSelectGlossaryTerm}
          />
        )}

        {activeTab === 'km' && (
          <KnowledgeManagementView
            lessons={lessons}
            onOpenNewLessonModal={() => setIsNewLessonOpen(true)}
            onSelectGlossaryTerm={handleSelectGlossaryTerm}
          />
        )}

        {activeTab === 'glossary' && (
          <GlossaryView
            glossary={GLOSSARY_DATA}
            actions={actions}
            documents={documents}
            axes={AXES_DATA}
            selectedTermSigla={selectedGlossaryTerm}
            onClearSelectedTerm={() => setSelectedGlossaryTerm(null)}
            onSelectAxis={handleSelectAxisFromAnywhere}
            onOpenDocument={(doc) => setActiveDocument(doc)}
            onOpenActionDetail={(action) => setActiveAction(action)}
          />
        )}

        {activeTab === 'communities' && (
          <CommunitiesView
            communities={COMMUNITIES_OF_PRACTICE}
            specialists={SPECIALISTS_DIRECTORY}
            onSelectGlossaryTerm={handleSelectGlossaryTerm}
            onRequestConsultation={(spec) => setConsultationSpecialist(spec)}
          />
        )}

      </main>

      {/* Institutional Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-7 h-7 rounded bg-emerald-700 text-white font-bold flex items-center justify-center text-xs">
                enap
              </div>
              <div>
                <span className="font-semibold text-slate-800 block">
                  Enap · Escola Nacional de Administração Pública
                </span>
                <span>Coordenação de Gestão Estratégica e Modernização (COGEM)</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-500 flex-wrap justify-center">
              <span>SPO Área Especial 2-A - Asa Sul, Brasília - DF, 70610-900</span>
              <span aria-hidden="true">·</span>
              <span>PDI 2024-2027</span>
              <span aria-hidden="true">·</span>
              <span>Modelo de Referência SBGC</span>
              <span aria-hidden="true">·</span>
              <span>ISO 30401:2018</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <DocumentModal
        docAsset={activeDocument}
        onClose={() => setActiveDocument(null)}
        onSelectGlossaryTerm={handleSelectGlossaryTerm}
      />

      <ActionDetailModal
        action={activeAction}
        axes={AXES_DATA}
        documents={documents}
        onClose={() => setActiveAction(null)}
        onToggleDeliverable={handleToggleDeliverable}
        onChangeStatus={handleChangeStatus}
        onOpenDocument={(doc) => {
          setActiveAction(null);
          setActiveDocument(doc);
        }}
        onSelectGlossaryTerm={handleSelectGlossaryTerm}
      />

      <AxisDetailModal
        axis={activeAxisModal}
        actions={actions}
        documents={documents}
        glossary={GLOSSARY_DATA}
        onClose={() => setActiveAxisModal(null)}
        onOpenActionDetail={(action) => {
          setActiveAxisModal(null);
          setActiveAction(action);
        }}
        onOpenDocument={(doc) => {
          setActiveAxisModal(null);
          setActiveDocument(doc);
        }}
        onSelectGlossaryTerm={(sigla) => {
          setActiveAxisModal(null);
          handleSelectGlossaryTerm(sigla);
        }}
        onGoToAxisTab={(axisId) => {
          setActiveAxisModal(null);
          handleSelectAxisFromAnywhere(axisId);
        }}
      />

      {isNewActionOpen && (
        <NewActionModal
          axes={AXES_DATA}
          initialAxisId={newActionInitialAxis}
          onClose={() => setIsNewActionOpen(false)}
          onSaveAction={handleSaveAction}
        />
      )}

      {isNewLessonOpen && (
        <NewLessonModal
          onClose={() => setIsNewLessonOpen(false)}
          onSaveLesson={handleSaveLesson}
        />
      )}

      {isAboutOpen && (
        <AboutModal
          onClose={() => setIsAboutOpen(false)}
        />
      )}

      <ConsultationModal
        specialist={consultationSpecialist}
        onClose={() => setConsultationSpecialist(null)}
      />

    </div>
  );
}
