export type AxisId = 'eixo-1' | 'eixo-2' | 'eixo-3' | 'eixo-4';

export type ActionStatus = 'Planejado' | 'Em Andamento' | 'Concluído' | 'Em Revisão';

export type KnowledgeProcess = 
  | 'Registrar e Sistematizar' 
  | 'Compartilhar e Disseminar' 
  | 'Utilizar e Acessar' 
  | 'Adquirir e Desenvolver';

export type ReliabilityLevel = 'Lição Aprendida' | 'Boa Prática' | 'Padrão Homologado';

export interface Axis {
  id: AxisId;
  number: number;
  title: string;
  scopeSummary: string;
  scopeItems: string[];
  description: string;
  colorTheme: {
    primary: string;
    bgLight: string;
    border: string;
    badge: string;
    text: string;
  };
  keyLeaders: string[];
  strategicAlignment: string[];
}

export interface CogemAction {
  id: string;
  axisId: AxisId;
  title: string;
  description: string;
  scopeTag: string; // e.g., 'DFT', 'Carreira', 'EX', 'QVT', 'People Analytics'
  acronyms: string[];
  deliverables: {
    title: string;
    done: boolean;
    targetDate?: string;
  }[];
  status: ActionStatus;
  progress: number; // 0 to 100
  responsible: string;
  stakeholders: string[];
  knowledgeProcess: KnowledgeProcess;
  knowledgeType: 'Tácito' | 'Explícito' | 'Ambos';
  startDate: string;
  targetDate: string;
  lastUpdate: string;
  notes?: string;
  linkedDocumentIds?: string[];
}

export interface DocumentAsset {
  id: string;
  title: string;
  axisId: AxisId;
  acronyms: string[];
  type: 'Manual' | 'Guia Técnico' | 'Modelo / Template' | 'Nota Técnica' | 'Painel de BI' | 'Estudo e Pesquisa' | 'Lição Aprendida' | 'Relatório Executivo';
  summary: string;
  fullContent: string;
  author: string;
  date: string;
  version: string;
  reliability: ReliabilityLevel;
  tags: string[];
  readTime: string;
  downloadSize?: string;
}

export interface GlossaryItem {
  sigla: string;
  extenso: string;
  categoria: 'Pessoas e Clima' | 'Estratégia e Modernização' | 'Dados e Evidências' | 'Informação e Conhecimento' | 'Governança e Conformidade';
  definicao: string;
  contextoEnap: string;
  fundamentoLegal: string;
  eixosRelacionados: AxisId[];
}

export interface IndicatorData {
  id: string;
  axisId: AxisId;
  title: string;
  value: string | number;
  unit: string;
  delta: string;
  trend: 'up' | 'down' | 'stable';
  target: string | number;
  description: string;
  source: string;
  history: { period: string; val: number }[];
}

export interface CommunityOfPractice {
  id: string;
  name: string;
  domain: string;
  description: string;
  membersCount: number;
  facilitator: string;
  cadence: string;
  meetingDay: string;
  recentOutcomes: string[];
  tags: string[];
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  area: string;
  email: string;
  topSkills: string[];
  knowledgeTopics: string[];
  availability: 'Disponível para mentoria' | 'Consultas pontuais' | 'Em projeto dedicado';
}

export interface LessonLearned {
  id: string;
  title: string;
  axisId: AxisId;
  situation: string;
  expectedVsActual: string;
  rootCauses: string;
  recommendations: string;
  reliability: ReliabilityLevel;
  author: string;
  date: string;
  acronyms: string[];
}
