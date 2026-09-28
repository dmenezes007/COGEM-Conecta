import { Axis, CogemAction, DocumentAsset, GlossaryItem, IndicatorData, CommunityOfPractice, Specialist, LessonLearned } from '../types/cogem';

export const AXES_DATA: Axis[] = [
  {
    id: 'eixo-1',
    number: 1,
    title: 'Estratégia e Modernização da Gestão de Pessoas',
    scopeSummary: 'planejamento, projetos estratégicos, Dimensionamento da Força de Trabalho (DFT), processos, carreira',
    scopeItems: [
      'Planejamento Estratégico de Pessoas',
      'Projetos Estratégicos Institucionais',
      'Dimensionamento da Força de Trabalho (DFT)',
      'Mapeamento e Modernização de Processos',
      'Carreira, Trilhas e Alocação de Talentos',
      'Programa de Gestão e Desempenho (PGD)'
    ],
    description: 'Articula o direcionamento estratégico da gestão de pessoas da Enap, alinhando a força de trabalho aos objetivos do Plano de Desenvolvimento Institucional (PDI) e promovendo a modernização contínua dos fluxos de trabalho.',
    colorTheme: {
      primary: 'indigo-600',
      bgLight: 'bg-indigo-50/70',
      border: 'border-indigo-200',
      badge: 'text-indigo-700 bg-indigo-50 border-indigo-200',
      text: 'text-indigo-900',
    },
    keyLeaders: ['Coordenação COGEM', 'Comitê de Governança de Pessoas', 'DGES / Enap'],
    strategicAlignment: ['PDI 2024-2027', 'Decreto PGD nº 11.072/2022', 'iESGo - TCU (Governança de Pessoas)']
  },
  {
    id: 'eixo-2',
    number: 2,
    title: 'Experiência, Bem-Estar e Inclusão das Pessoas',
    scopeSummary: 'EX, ambientação, Qualidade de Vida no Trabalho (QVT), Diversidade, Equidade e Inclusão (DEI), desligamento, aposentadoria etc',
    scopeItems: [
      'Employee Experience (EX) em todo o ciclo funcional',
      'Ambientação e Onboarding Institucional de novos servidores',
      'Programa de Qualidade de Vida no Trabalho (PQVT/QVT)',
      'Políticas de Diversidade, Equidade e Inclusão (DEI)',
      'Preparação para Aposentadoria e Rito de Desligamento',
      'Clima Organizacional e Apoio Psicossocial'
    ],
    description: 'Cuida da jornada integral do colaborador na Enap, desde a recepção e ambientação inicial até o fechamento de ciclos de carreira, com foco em inclusão, saúde ocupacional, equidade e valorização humanizada.',
    colorTheme: {
      primary: 'emerald-600',
      bgLight: 'bg-emerald-50/70',
      border: 'border-emerald-200',
      badge: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      text: 'text-emerald-900',
    },
    keyLeaders: ['Equipe de EX & Clima', 'Comissão de Equidade e Diversidade', 'Serviço Médico e Social Enap'],
    strategicAlignment: ['PDI - Eixo Bem-Estar', 'Decreto nº 11.443/2023 (Cotas & DEI)', 'iESGo - Dimensão Social (S)']
  },
  {
    id: 'eixo-3',
    number: 3,
    title: 'Dados, Pesquisas e Evidências em Gestão de Pessoas',
    scopeSummary: 'pesquisa organizacional, People Analytics, indicadores, painéis, estudos',
    scopeItems: [
      'Pesquisa Organizacional Periódica de Clima e Engajamento',
      'People Analytics e Modelagem Preditiva de Movimentação',
      'Painéis Interativos de Business Intelligence (BI)',
      'Sistemas de Indicadores e Métricas de Produtividade',
      'Estudos Aplicados e Avaliação de Impacto de Políticas de GP',
      'Governança e Proteção de Dados de Servidores (LGPD)'
    ],
    description: 'Transforma dados brutos de gestão de pessoas em inteligência acionável e evidências para tomadas de decisão na Enap, integrando repositórios analíticos, conformidade à LGPD e relatórios periódicos de monitoramento.',
    colorTheme: {
      primary: 'amber-600',
      bgLight: 'bg-amber-50/70',
      border: 'border-amber-200',
      badge: 'text-amber-700 bg-amber-50 border-amber-200',
      text: 'text-amber-900',
    },
    keyLeaders: ['Célula de People Analytics', 'Encarregado LGPD Enap', 'Coordenação de Tecnologia da Informação'],
    strategicAlignment: ['Lei nº 13.709/2018 (LGPD)', 'Estratégia de Governo Digital', 'iESGo - Governança de Dados']
  },
  {
    id: 'eixo-4',
    number: 4,
    title: 'Informação, Conhecimento e Aprendizagem Organizacional',
    scopeSummary: 'Gestão da informação (GI), Gestão do Conhecimento (GC), memória, documentos, conhecimentos, competências, aprendizagem',
    scopeItems: [
      'Gestão da Informação (GI) e Arquitetura Documental',
      'Gestão do Conhecimento (GC) e Ciclo SECI',
      'Memória Técnica e Centro de Documentos da Unidade',
      'Mapeamento de Competências Críticas e Páginas Amarelas',
      'Aprendizagem no Fluxo de Trabalho (AAR - Antes/Durante/Depois)',
      'Comunidades de Prática e Disseminação do Conhecimento Técnico'
    ],
    description: 'Cria as bases para que o conhecimento tácito dos servidores seja explicitado, sistematizado, compartilhado e reutilizado na Enap, combatendo a perda de memória técnica e acelerando a curva de aprendizagem da equipe.',
    colorTheme: {
      primary: 'blue-600',
      bgLight: 'bg-blue-50/70',
      border: 'border-blue-200',
      badge: 'text-blue-700 bg-blue-50 border-blue-200',
      text: 'text-blue-900',
    },
    keyLeaders: ['Comitê de Gestão do Conhecimento', 'Gestão Documental e Arquivo', 'Escola de Governo Enap'],
    strategicAlignment: ['ISO 30401:2018 (Sistemas de GC)', 'Modelo de Referência SBGC', 'PDI - Gestão do Conhecimento']
  }
];

export const GLOSSARY_DATA: GlossaryItem[] = [
  {
    sigla: 'EX',
    extenso: 'Employee Experience — Experiência do Colaborador',
    categoria: 'Pessoas e Clima',
    definicao: 'Abordagem centrada no servidor que mapeia, compreende e aprimora todas as interações e percepções vivenciadas ao longo de sua trajetória na instituição, desde o recrutamento e onboarding até o pós-desligamento.',
    contextoEnap: 'Na Enap, o foco de EX é transformar a rotina do colaborador em uma experiência acolhedora, produtiva e engajadora, integrando ambientes físicos e virtuais de trabalho no teletrabalho e presencial.',
    fundamentoLegal: 'Diretrizes de Modernização do Trabalho no Serviço Público Federal e PDI Enap.',
    eixosRelacionados: ['eixo-2', 'eixo-1']
  },
  {
    sigla: 'QVT',
    extenso: 'Qualidade de Vida no Trabalho',
    categoria: 'Pessoas e Clima',
    definicao: 'Conjunto de condições e ações que visam conciliar o bem-estar físico, psicológico e social dos servidores com a produtividade e a saúde ocupacional dentro do ambiente institucional.',
    contextoEnap: 'Pesquisas periódicas de pulso, ergonomia para servidores no PGD e ações integradas de promoção da saúde mental na Escola.',
    fundamentoLegal: 'Portaria Normativa SRH/MPOG nº 3/2009 e Política Nacional de Atenção à Saúde do Servidor.',
    eixosRelacionados: ['eixo-2']
  },
  {
    sigla: 'PQVT',
    extenso: 'Programa de Qualidade de Vida no Trabalho',
    categoria: 'Pessoas e Clima',
    definicao: 'Programa estruturado que planeja e implementa intervenções contínuas, projetos preventivos de saúde, ergonomia, integração comunitária e equilíbrio vida-trabalho.',
    contextoEnap: 'Instrumento coordenado pela COGEM e área médica da Enap para institucionalizar projetos de saúde mental, ginástica laboral e vivências colaborativas.',
    fundamentoLegal: 'Decreto nº 6.833/2009 (PASS - Plano de Seguridade Social do Servidor Público Federal).',
    eixosRelacionados: ['eixo-2']
  },
  {
    sigla: 'DEI',
    extenso: 'Diversidade, Equidade e Inclusão',
    categoria: 'Pessoas e Clima',
    definicao: 'Políticas e práticas afirmativas voltadas a garantir representatividade equânime (raça, gênero, orientação sexual, pessoas com deficiência e neurodivergentes) em todos os níveis hierárquicos e decisórios.',
    contextoEnap: 'A Enap, como referência na formação pública federal, lidera comissões de equidade, editais com cotas e eventos de sensibilização de lideranças.',
    fundamentoLegal: 'Decreto nº 11.443/2023 (ocupação de cargos em comissão) e Portaria MGI nº 1.488/2023.',
    eixosRelacionados: ['eixo-2', 'eixo-1']
  },
  {
    sigla: 'DFT',
    extenso: 'Dimensionamento da Força de Trabalho',
    categoria: 'Estratégia e Modernização',
    definicao: 'Metodologia quantitativa e qualitativa que estima a quantidade e o perfil de pessoal necessários para desempenhar as entregas e processos de uma unidade com eficiência.',
    contextoEnap: 'Aplicação do modelo oficial de DFT desenvolvido e testado no próprio âmbito federal para equilibrar a alocação de equipes entre as diretorias da Enap.',
    fundamentoLegal: 'Portaria ME nº 282/2020 e Portaria MGI nº 5.127/2023.',
    eixosRelacionados: ['eixo-1', 'eixo-3']
  },
  {
    sigla: 'GC',
    extenso: 'Gestão do Conhecimento',
    categoria: 'Informação e Conhecimento',
    definicao: 'Conjunto sistemático de processos, abordagens e ferramentas que viabilizam a criação, registro, compartilhamento, assimilação e aplicação do conhecimento tácito e explícito para gerar inovação e sustentabilidade.',
    contextoEnap: 'Eixo estruturante da COGEM para consolidar lições aprendidas em projetos, repositórios de notas técnicas e fóruns de disseminação do saber de especialistas.',
    fundamentoLegal: 'Norma ABNT NBR ISO 30401:2018 e Modelo de Referência em GC da SBGC.',
    eixosRelacionados: ['eixo-4', 'eixo-1']
  },
  {
    sigla: 'GI',
    extenso: 'Gestão da Informação',
    categoria: 'Informação e Conhecimento',
    definicao: 'Processo que administra o ciclo de vida da informação (necessidade, aquisição, organização, armazenagem, recuperação, distribuição e descarte) como insumo para a tomada de decisão.',
    contextoEnap: 'Organização dos acervos digitais, taxonomia comum da COGEM, padronização de metadados no SEI e preservação de registros técnicos.',
    fundamentoLegal: 'Lei nº 12.527/2011 (Lei de Acesso à Informação - LAI) e Decreto nº 8.539/2015 (Processo Eletrônico).',
    eixosRelacionados: ['eixo-4', 'eixo-3']
  },
  {
    sigla: 'PDI',
    extenso: 'Plano de Desenvolvimento Institucional',
    categoria: 'Estratégia e Modernização',
    definicao: 'Documento balizador plurianual que estabelece a missão, visão de futuro, objetivos estratégicos, metas e diretrizes operacionais de uma instituição federal de ensino e gestão pública.',
    contextoEnap: 'Guia máximo de planejamento da Enap que orienta a priorização das ações da COGEM para modernização e excelência pedagógica.',
    fundamentoLegal: 'Decreto nº 9.235/2017 e Regimento Interno da Enap.',
    eixosRelacionados: ['eixo-1', 'eixo-3']
  },
  {
    sigla: 'PGD',
    extenso: 'Programa de Gestão e Desempenho',
    categoria: 'Estratégia e Modernização',
    definicao: 'Instrumento de gestão que substitui o controle puramente de frequência e assiduidade pelo controle de planos de trabalho, entregas, resultados e metas, viabilizando o teletrabalho estruturado.',
    contextoEnap: 'A Enap é uma das unidades pioneiras na implantação do PGD, com monitoramento sistemático de entregas e avaliação de impacto no clima organizacional.',
    fundamentoLegal: 'Decreto nº 11.072/2022 e Instrução Normativa Conjunta SEGES-SGPRT / MGI nº 24/2023.',
    eixosRelacionados: ['eixo-1', 'eixo-2', 'eixo-3']
  },
  {
    sigla: 'BI',
    extenso: 'Business Intelligence — Inteligência de Negócios',
    categoria: 'Dados e Evidências',
    definicao: 'Conjunto de tecnologias, arquiteturas e práticas analíticas que integram e transformam dados brutos de múltiplos sistemas em relatórios e painéis interativos de tomada de decisão.',
    contextoEnap: 'Painéis da COGEM integrando dados de SIAPE, PGD, avaliações de cursos, pesquisas de clima e métricas de capacitação em tempo real.',
    fundamentoLegal: 'Estratégia Nacional de Dados e Transformação Digital do Governo Federal.',
    eixosRelacionados: ['eixo-3']
  },
  {
    sigla: 'LGPD',
    extenso: 'Lei Geral de Proteção de Dados Pessoais',
    categoria: 'Governança e Conformidade',
    definicao: 'Legislação brasileira que regula o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou pessoa jurídica de direito público ou privado, protegendo a privacidade e a autodeterminação informativa.',
    contextoEnap: 'A COGEM zela pela privacidade em pesquisas organizacionais, dados de saúde e desempenho do servidor, garantindo anonimização e consentimento nos tratamentos de People Analytics.',
    fundamentoLegal: 'Lei Federal nº 13.709/2018 e regulamentações da Autoridade Nacional de Proteção de Dados (ANPD).',
    eixosRelacionados: ['eixo-3', 'eixo-4']
  },
  {
    sigla: 'iESGo',
    extenso: 'Índice ESG — Environmental, Social and Governance',
    categoria: 'Governança e Conformidade',
    definicao: 'Índice de sustentabilidade e governança pública utilizado pelo Tribunal de Contas da União (TCU) para avaliar a maturidade das instituições federais nos pilares ambiental, social e governança pública.',
    contextoEnap: 'A Enap reporta anualmente seus indicadores ao levantamento de governança do TCU, sendo a COGEM ponto focal nos subíndices de Governança de Pessoas e Governança Pública.',
    fundamentoLegal: 'Acórdão TCU nº 2.474/2023 e Orientações Técnicas do Tribunal de Contas da União para Governança Pública.',
    eixosRelacionados: ['eixo-1', 'eixo-2', 'eixo-3']
  }
];

export const INITIAL_ACTIONS: CogemAction[] = [
  // EIXO 1: Estratégia e Modernização da Gestão de Pessoas
  {
    id: 'ACT-01',
    axisId: 'eixo-1',
    title: 'Revisão e Aplicação do Modelo de DFT Enap 2026/2027',
    description: 'Atualização dos parâmetros do Dimensionamento da Força de Trabalho para refletir as novas demandas educacionais e projetos estratégicos das diretorias da Enap.',
    scopeTag: 'Dimensionamento (DFT)',
    acronyms: ['DFT', 'PDI'],
    deliverables: [
      { title: 'Matriz de entregas críticas por coordenação-geral validada', done: true, targetDate: '15/02/2026' },
      { title: 'Coleta de tempos médios e complexidade de processos no PGD', done: true, targetDate: '10/03/2026' },
      { title: 'Relatório executivo de balanceamento de força de trabalho', done: false, targetDate: '30/04/2026' },
      { title: 'Apresentação no Comitê de Governança de Pessoas', done: false, targetDate: '15/05/2026' }
    ],
    status: 'Em Andamento',
    progress: 65,
    responsible: 'Paulo Roberto Cueto',
    stakeholders: ['DGES', 'Diretoria de Educação Executiva', 'Presidência Enap'],
    knowledgeProcess: 'Registrar e Sistematizar',
    knowledgeType: 'Ambos',
    startDate: '05/01/2026',
    targetDate: '30/05/2026',
    lastUpdate: '24/03/2026',
    notes: 'Integração em andamento com a Célula de People Analytics para extração direta de métricas do sistema.',
    linkedDocumentIds: ['DOC-01', 'DOC-06']
  },
  {
    id: 'ACT-02',
    axisId: 'eixo-1',
    title: 'Adequação e Otimização dos Processos de Carreira e Desempenho (PGD)',
    description: 'Reestruturação dos fluxos do Programa de Gestão e Desempenho alinhados à IN MGI 24/2023, reduzindo fricções burocráticas e aumentando a previsibilidade das entregas.',
    scopeTag: 'Processos & Carreira',
    acronyms: ['PGD', 'PDI', 'iESGo'],
    deliverables: [
      { title: 'Diagnóstico de fluxos e gargalos no cadastramento de planos', done: true, targetDate: '20/01/2026' },
      { title: 'Guia simplificado para pactuação de metas no PGD', done: true, targetDate: '28/02/2026' },
      { title: 'Workshops com chefias imediatas sobre avaliação de entregas', done: false, targetDate: '15/04/2026' }
    ],
    status: 'Em Andamento',
    progress: 75,
    responsible: 'Mariana Silveira',
    stakeholders: ['Todas as Diretorias', 'Comitê PGD Enap'],
    knowledgeProcess: 'Compartilhar e Disseminar',
    knowledgeType: 'Explícito',
    startDate: '10/01/2026',
    targetDate: '30/04/2026',
    lastUpdate: '22/03/2026',
    linkedDocumentIds: ['DOC-02']
  },
  {
    id: 'ACT-03',
    axisId: 'eixo-1',
    title: 'Monitoramento dos Indicadores de Governança de Pessoas no iESGo/TCU',
    description: 'Consolidação das evidências de liderança, estratégia de gestão de pessoas e conformidade institucional exigidas no levantamento periódico de governança do TCU.',
    scopeTag: 'Projetos Estratégicos',
    acronyms: ['iESGo', 'PDI'],
    deliverables: [
      { title: 'Checklist de conformidade com os critérios do TCU', done: true, targetDate: '15/02/2026' },
      { title: 'Repositório de comprovações documentais da Enap', done: true, targetDate: '10/03/2026' },
      { title: 'Plano de ação para os subíndices de governança de pessoas', done: false, targetDate: '20/05/2026' }
    ],
    status: 'Em Andamento',
    progress: 60,
    responsible: 'Claudio Menezes',
    stakeholders: ['Auditoria Interna', 'DGES', 'Presidência'],
    knowledgeProcess: 'Utilizar e Acessar',
    knowledgeType: 'Explícito',
    startDate: '01/02/2026',
    targetDate: '30/06/2026',
    lastUpdate: '18/03/2026',
    linkedDocumentIds: ['DOC-07']
  },
  {
    id: 'ACT-04',
    axisId: 'eixo-1',
    title: 'Mapeamento de Processos Críticos da Coordenação de Gestão Estratégica',
    description: 'Sistematização de 8 processos-chave da COGEM com modelagem BPMN, matriz RACI e definição de tempos padrão.',
    scopeTag: 'Processos',
    acronyms: ['GI', 'GC'],
    deliverables: [
      { title: 'Oficinas coletivas de mapeamento de fluxo', done: true, targetDate: '15/01/2026' },
      { title: 'Manuais operacionais de procedimentos em formato aberto', done: true, targetDate: '28/02/2026' }
    ],
    status: 'Concluído',
    progress: 100,
    responsible: 'Renata Albuquerque',
    stakeholders: ['Equipe COGEM'],
    knowledgeProcess: 'Registrar e Sistematizar',
    knowledgeType: 'Explícito',
    startDate: '01/11/2025',
    targetDate: '28/02/2026',
    lastUpdate: '01/03/2026',
    linkedDocumentIds: ['DOC-08']
  },

  // EIXO 2: Experiência, Bem-Estar e Inclusão das Pessoas
  {
    id: 'ACT-05',
    axisId: 'eixo-2',
    title: 'Jornada Integrada de Ambientação e Onboarding Institucional (EX)',
    description: 'Reformulação do acolhimento a novos servidores com kit digital, trilha de ambientação na Enap, apadrinhamento técnico (buddy system) e avaliação de 90 dias.',
    scopeTag: 'Ambientação & EX',
    acronyms: ['EX', 'PDI'],
    deliverables: [
      { title: 'Cartilha digital e portal de boas-vindas do servidor', done: true, targetDate: '10/01/2026' },
      { title: 'Programa de Mentoria e Padrinhos de Ambientação', done: true, targetDate: '20/02/2026' },
      { title: 'Pesquisa de experiência de onboarding no 30º e 90º dia', done: true, targetDate: '15/03/2026' }
    ],
    status: 'Concluído',
    progress: 100,
    responsible: 'Camila Duarte',
    stakeholders: ['Novos Servidores', 'Chefias de Unidades'],
    knowledgeProcess: 'Compartilhar e Disseminar',
    knowledgeType: 'Ambos',
    startDate: '01/10/2025',
    targetDate: '15/03/2026',
    lastUpdate: '16/03/2026',
    linkedDocumentIds: ['DOC-03']
  },
  {
    id: 'ACT-06',
    axisId: 'eixo-2',
    title: 'Plano Anual de Qualidade de Vida no Trabalho (PQVT 2026)',
    description: 'Implementação de ações preventivas de saúde mental, ergonomia em postos físicos e teletrabalho, rodas de conversa sobre sobrecarga e programas de bem-estar.',
    scopeTag: 'QVT / Bem-Estar',
    acronyms: ['QVT', 'PQVT'],
    deliverables: [
      { title: 'Diagnóstico de riscos psicossociais e ergonomia', done: true, targetDate: '15/02/2026' },
      { title: 'Ciclo de palestras sobre saúde mental e equilíbrio no PGD', done: false, targetDate: '30/04/2026' },
      { title: 'Parceria com academia e serviço social', done: false, targetDate: '20/05/2026' }
    ],
    status: 'Em Andamento',
    progress: 50,
    responsible: 'Lucas Nogueira',
    stakeholders: ['Comissão de QVT', 'Todos os Servidores'],
    knowledgeProcess: 'Adquirir e Desenvolver',
    knowledgeType: 'Tácito',
    startDate: '10/01/2026',
    targetDate: '30/06/2026',
    lastUpdate: '25/03/2026',
    linkedDocumentIds: ['DOC-09']
  },
  {
    id: 'ACT-07',
    axisId: 'eixo-2',
    title: 'Programa Institucional de Diversidade, Equidade e Inclusão (DEI)',
    description: 'Adoção de diretrizes para ampliar a representatividade de grupos minorizados em funções de confiança, acessibilidade atitudinal e eventos formativos.',
    scopeTag: 'Diversidade & Inclusão',
    acronyms: ['DEI', 'iESGo'],
    deliverables: [
      { title: 'Censo de Diversidade e Inclusão na Enap', done: true, targetDate: '20/12/2025' },
      { title: 'Guia de Linguagem Inclusiva e Acessível em Documentos', done: true, targetDate: '10/02/2026' },
      { title: 'Mentoria para desenvolvimento de lideranças femininas e negras', done: false, targetDate: '15/06/2026' }
    ],
    status: 'Em Andamento',
    progress: 70,
    responsible: 'Juliana Pires',
    stakeholders: ['Comissão DEI Enap', 'Coletivos de Servidores'],
    knowledgeProcess: 'Compartilhar e Disseminar',
    knowledgeType: 'Ambos',
    startDate: '01/11/2025',
    targetDate: '30/06/2026',
    lastUpdate: '21/03/2026',
    linkedDocumentIds: ['DOC-10']
  },
  {
    id: 'ACT-08',
    axisId: 'eixo-2',
    title: 'Programa de Transição: Preparação para Aposentadoria e Rito de Desligamento',
    description: 'Metodologia de transição de carreira para servidores próximos à aposentadoria, com transferência estruturada de conhecimento tácito e valorização da trajetória.',
    scopeTag: 'Desligamento & Aposentadoria',
    acronyms: ['EX', 'GC'],
    deliverables: [
      { title: 'Entrevistas narrativas de passagem de bastão técnico', done: false, targetDate: '10/05/2026' },
      { title: 'Roteiro de desmobilização e entrega de legados', done: false, targetDate: '30/06/2026' }
    ],
    status: 'Planejado',
    progress: 20,
    responsible: 'Camila Duarte',
    stakeholders: ['Servidores em abono de permanência', 'Novos titulares'],
    knowledgeProcess: 'Registrar e Sistematizar',
    knowledgeType: 'Tácito',
    startDate: '01/03/2026',
    targetDate: '31/08/2026',
    lastUpdate: '15/03/2026',
    linkedDocumentIds: ['DOC-11']
  },

  // EIXO 3: Dados, Pesquisas e Evidências em Gestão de Pessoas
  {
    id: 'ACT-09',
    axisId: 'eixo-3',
    title: 'Pesquisa Bienal de Clima Organizacional e Engajamento 2026',
    description: 'Instrumento censitário para medir percepção de liderança, autonomia, sobrecarga, relações interpessoais e condições no PGD, com garantia de sigilo e LGPD.',
    scopeTag: 'Pesquisa Organizacional',
    acronyms: ['LGPD', 'BI', 'EX'],
    deliverables: [
      { title: 'Questionário metodológico revisado com escala Likert', done: true, targetDate: '15/01/2026' },
      { title: 'Parecer de Conformidade à LGPD e Anonimização', done: true, targetDate: '05/02/2026' },
      { title: 'Aplicação da pesquisa na plataforma institucional (taxa > 75%)', done: true, targetDate: '10/03/2026' },
      { title: 'Painel interativo de resultados por diretoria', done: false, targetDate: '25/04/2026' }
    ],
    status: 'Em Andamento',
    progress: 80,
    responsible: 'Vinicius Prado',
    stakeholders: ['Todas as Unidades', 'Comitê de Ética'],
    knowledgeProcess: 'Adquirir e Desenvolver',
    knowledgeType: 'Explícito',
    startDate: '05/01/2026',
    targetDate: '30/04/2026',
    lastUpdate: '26/03/2026',
    linkedDocumentIds: ['DOC-04', 'DOC-12']
  },
  {
    id: 'ACT-10',
    axisId: 'eixo-3',
    title: 'Painel Integrado de People Analytics & Business Intelligence (BI)',
    description: 'Dashboard automatizado consolidando indicadores de rotatividade, absenteísmo, adesão ao PGD, perfil demográfico e custos de capacitação com filtros dinâmicos.',
    scopeTag: 'People Analytics & BI',
    acronyms: ['BI', 'PGD', 'DFT'],
    deliverables: [
      { title: 'Pipelines de dados integrando SIAPE e PGD', done: true, targetDate: '20/01/2026' },
      { title: 'Criação de visualizações em PowerBI e dashboards web', done: true, targetDate: '28/02/2026' },
      { title: 'Módulo de alertas preditivos para sobrecarga de equipes', done: false, targetDate: '15/05/2026' }
    ],
    status: 'Em Andamento',
    progress: 70,
    responsible: 'Elena Gestão',
    stakeholders: ['Alta Direção', 'Gestores de Unidade'],
    knowledgeProcess: 'Utilizar e Acessar',
    knowledgeType: 'Explícito',
    startDate: '15/11/2025',
    targetDate: '30/05/2026',
    lastUpdate: '23/03/2026',
    linkedDocumentIds: ['DOC-04']
  },
  {
    id: 'ACT-11',
    axisId: 'eixo-3',
    title: 'Estudo de Correlação: Modalidades de PGD vs. Produtividade e Saúde',
    description: 'Pesquisa acadêmica aplicada avaliando a relação estatística entre teletrabalho integral/parcial, índices de entregas e indicadores de afastamento por saúde mental.',
    scopeTag: 'Estudos e Evidências',
    acronyms: ['PGD', 'QVT', 'BI'],
    deliverables: [
      { title: 'Revisão bibliográfica e definição de variáveis de controle', done: true, targetDate: '10/02/2026' },
      { title: 'Tratamento de base histórica de 3 anos de PGD', done: true, targetDate: '15/03/2026' },
      { title: 'Nota técnica com recomendações para política institucional', done: false, targetDate: '30/05/2026' }
    ],
    status: 'Em Andamento',
    progress: 55,
    responsible: 'Vinicius Prado',
    stakeholders: ['DGES', 'Pesquisadores Associados'],
    knowledgeProcess: 'Adquirir e Desenvolver',
    knowledgeType: 'Explícito',
    startDate: '10/01/2026',
    targetDate: '30/06/2026',
    lastUpdate: '20/03/2026',
    linkedDocumentIds: ['DOC-13']
  },
  {
    id: 'ACT-12',
    axisId: 'eixo-3',
    title: 'Adequação dos Repositórios de GP à LGPD e Matriz de Riscos de Privacidade',
    description: 'Mapeamento do ciclo de vida dos dados de servidores, revisão das bases legais de tratamento e definição de regras de acesso restrito a dados sensíveis de saúde e DEI.',
    scopeTag: 'Governança & LGPD',
    acronyms: ['LGPD', 'GI'],
    deliverables: [
      { title: 'Inventário (ROPA) de dados pessoais em GP', done: true, targetDate: '15/12/2025' },
      { title: 'Termos de confidencialidade e regras de permissão em BI', done: true, targetDate: '30/01/2026' }
    ],
    status: 'Concluído',
    progress: 100,
    responsible: 'Guilherme Sampaio',
    stakeholders: ['DPO Enap', 'TI', 'COGEM'],
    knowledgeProcess: 'Registrar e Sistematizar',
    knowledgeType: 'Explícito',
    startDate: '01/09/2025',
    targetDate: '30/01/2026',
    lastUpdate: '05/02/2026',
    linkedDocumentIds: ['DOC-14']
  },

  // EIXO 4: Informação, Conhecimento e Aprendizagem Organizacional
  {
    id: 'ACT-13',
    axisId: 'eixo-4',
    title: 'Estruturação do Repositório Digital de Memória Técnica da COGEM',
    description: 'Implantação da arquitetura da informação para catalogação sistemática de notas técnicas, fluxogramas, pareceres de referência e lições aprendidas em projetos.',
    scopeTag: 'Memória Técnica & GI',
    acronyms: ['GI', 'GC'],
    deliverables: [
      { title: 'Taxonomia padronizada de metadados e tags temáticas', done: true, targetDate: '15/01/2026' },
      { title: 'Migração do acervo histórico de documentos para nuvem', done: true, targetDate: '28/02/2026' },
      { title: 'Mecanismo de busca semântica e curadoria de conteúdo', done: false, targetDate: '20/04/2026' }
    ],
    status: 'Em Andamento',
    progress: 85,
    responsible: 'Aline Carvalho',
    stakeholders: ['Equipe Técnica COGEM', 'Biblioteca Enap'],
    knowledgeProcess: 'Registrar e Sistematizar',
    knowledgeType: 'Explícito',
    startDate: '01/12/2025',
    targetDate: '30/04/2026',
    lastUpdate: '25/03/2026',
    linkedDocumentIds: ['DOC-05']
  },
  {
    id: 'ACT-14',
    axisId: 'eixo-4',
    title: 'Implantação das Páginas Amarelas de Competências e Catálogo de Especialistas',
    description: 'Mapeamento dos conhecimentos tácitos e áreas de domínio de cada servidor da unidade, facilitando a consulta rápida a referências técnicas e a mentoria interna.',
    scopeTag: 'Mapeamento de Competências',
    acronyms: ['GC', 'DFT'],
    deliverables: [
      { title: 'Formulário de autodeclaração de expertise e repertório', done: true, targetDate: '20/02/2026' },
      { title: 'Diretório digital de especialistas por área temática', done: true, targetDate: '15/03/2026' },
      { title: 'Protocolo de mentoria rápida (15 a 30 minutos)', done: false, targetDate: '10/05/2026' }
    ],
    status: 'Em Andamento',
    progress: 75,
    responsible: 'Aline Carvalho',
    stakeholders: ['Servidores Enap', 'Coordenações'],
    knowledgeProcess: 'Utilizar e Acessar',
    knowledgeType: 'Tácito',
    startDate: '15/01/2026',
    targetDate: '30/05/2026',
    lastUpdate: '20/03/2026',
    linkedDocumentIds: ['DOC-05']
  },
  {
    id: 'ACT-15',
    axisId: 'eixo-4',
    title: 'Institucionalização das Comunidades de Prática (CoPs) da COGEM',
    description: 'Criação de grupos de prática estruturados (Domínio, Comunidade e Prática - modelo Wenger) para troca orgânica de experiências e geração de entendimentos padronizados.',
    scopeTag: 'Comunidades de Prática',
    acronyms: ['GC', 'PGD', 'BI'],
    deliverables: [
      { title: 'Carta de princípios e papéis da CoP (anfitrião, facilitador, especialista)', done: true, targetDate: '10/02/2026' },
      { title: 'Lançamento da CoP de People Analytics e Evidências', done: true, targetDate: '01/03/2026' },
      { title: 'Lançamento da CoP de Inovação em PGD e Gestão por Entregas', done: false, targetDate: '15/04/2026' }
    ],
    status: 'Em Andamento',
    progress: 60,
    responsible: 'Thiago Valente',
    stakeholders: ['Membros das CoPs', 'Redes de Inovação Pública'],
    knowledgeProcess: 'Compartilhar e Disseminar',
    knowledgeType: 'Ambos',
    startDate: '10/01/2026',
    targetDate: '30/06/2026',
    lastUpdate: '24/03/2026',
    linkedDocumentIds: ['DOC-05']
  },
  {
    id: 'ACT-16',
    axisId: 'eixo-4',
    title: 'Rotina "Aprender Antes - Durante - Depois" (After Action Review em Projetos)',
    description: 'Incorporação de rituais leves de captura de lições aprendidas no ciclo de vida dos projetos da COGEM, evitando retrabalho e registrando o raciocínio especialista.',
    scopeTag: 'Aprendizagem Contínua',
    acronyms: ['GC', 'GI'],
    deliverables: [
      { title: 'Template padronizado de debriefing / AAR em 4 perguntas', done: true, targetDate: '15/02/2026' },
      { title: 'Piloto realizado no encerramento da fase 1 do DFT', done: true, targetDate: '10/03/2026' },
      { title: 'Mural digital de lições aprendidas aberto para consulta', done: false, targetDate: '30/04/2026' }
    ],
    status: 'Em Andamento',
    progress: 70,
    responsible: 'Thiago Valente',
    stakeholders: ['Gerentes de Projetos', 'Equipes de Entrega'],
    knowledgeProcess: 'Adquirir e Desenvolver',
    knowledgeType: 'Tácito',
    startDate: '01/02/2026',
    targetDate: '30/05/2026',
    lastUpdate: '22/03/2026',
    linkedDocumentIds: ['DOC-05']
  }
];

export const TECHNICAL_DOCUMENTS: DocumentAsset[] = [
  {
    id: 'DOC-01',
    title: 'Manual de Metodologia e Aplicação do DFT na Enap (Edição 2026)',
    axisId: 'eixo-1',
    acronyms: ['DFT', 'PDI'],
    type: 'Manual',
    summary: 'Documento normativo e metodológico detalhando as etapas de cálculo, parametrização de entregas críticas e fórmula de dimensionamento de pessoal por coordenação.',
    fullContent: `O Dimensionamento da Força de Trabalho (DFT) na Enap estrutura-se sobre a quantificação das entregas finalísticas e de suporte, correlacionando o volume histórico, o padrão de complexidade e o tempo médio despendido em conformidade com as diretrizes do Ministério da Gestão e da Inovação em Serviços Públicos (MGI).

Principais Fases do Ciclo DFT:
1. Mapeamento dos produtos e serviços por unidade administrativa;
2. Validação da matriz de complexidade (baixa, média, alta);
3. Mensuração da capacidade produtiva instalada com base nas jornadas e alocações do PGD;
4. Cálculo da taxa de esforço requerida versus disponibilidade real;
5. Recomendações de remanejamento interno e planejamento de provimento por concurso público.`,
    author: 'Equipe de Gestão Estratégica / COGEM',
    date: '15/02/2026',
    version: 'v3.2',
    reliability: 'Padrão Homologado',
    tags: ['DFT', 'Planejamento', 'PDI', 'Força de Trabalho', 'Metodologia'],
    readTime: '12 min',
    downloadSize: '2.4 MB'
  },
  {
    id: 'DOC-02',
    title: 'Guia Prático de Pactuação e Avaliação de Entregas no PGD',
    axisId: 'eixo-1',
    acronyms: ['PGD'],
    type: 'Guia Técnico',
    summary: 'Orientações claras para chefias e servidores sobre como redigir planos de trabalho com foco em entregas concretas, mensuráveis e alinhadas aos objetivos estratégicos.',
    fullContent: `Este guia sintetiza as melhores práticas para superar o foco em horas trabalhadas e consolidar a gestão baseada em resultados e impacto público:

- Formulação de critérios de aceitação: cada entrega deve especificar clareza de escopo, prazo acordado e padrão de qualidade esperado;
- Avaliação periódica com base em evidências e feedbacks construtivos;
- Orientações de conduta para regime de teletrabalho integral, híbrido e presencial;
- Rotinas de comunicação síncrona e assíncrona para evitar sobrecarga de mensagens.`,
    author: 'Coordenação de Modernização de Processos',
    date: '28/02/2026',
    version: 'v2.1',
    reliability: 'Padrão Homologado',
    tags: ['PGD', 'Teletrabalho', 'Desempenho', 'Entregas', 'Processos'],
    readTime: '8 min',
    downloadSize: '1.8 MB'
  },
  {
    id: 'DOC-03',
    title: 'Jornada do Colaborador: Manual de Ambientação e Onboarding Humanizado',
    axisId: 'eixo-2',
    acronyms: ['EX', 'PDI'],
    type: 'Guia Técnico',
    summary: 'Protocolo de recepção, inclusão e acompanhamento de novos servidores ingressantes, estagiários e colaboradores cedidos durante os primeiros 90 dias.',
    fullContent: `O programa de Employee Experience (EX) estabelece os 4 marcos da integração na Enap:

Dia 0 (Pré-chegada): Boas-vindas institucionais, provisionamento prévio de acessos (SEI, e-mail, rede) e indicação do Padrinho/Madrinha técnico (Buddy).
Semana 1: Tour institucional guiado, apresentação à equipe, alinhamento de expectativas e ambientação cultural.
Mês 1: Acompanhamento da primeira entrega, feedback de 30 dias com a chefia imediata e esclarecimento de dúvidas sobre PGD.
Mês 3: Avaliação de experiência do onboarding, identificação de lacunas de treinamento e consolidação do plano individual de desenvolvimento.`,
    author: 'Célula de Experiência do Colaborador (EX)',
    date: '10/01/2026',
    version: 'v1.4',
    reliability: 'Boa Prática',
    tags: ['EX', 'Ambientação', 'Onboarding', 'Acolhimento', 'Cultura'],
    readTime: '10 min',
    downloadSize: '3.1 MB'
  },
  {
    id: 'DOC-04',
    title: 'Relatório Executivo e Metodologia da Pesquisa de Clima Enap 2026',
    axisId: 'eixo-3',
    acronyms: ['BI', 'LGPD', 'QVT'],
    type: 'Relatório Executivo',
    summary: 'Metodologia censitária, garantia de anonimização conforme a LGPD e indicadores preliminares de satisfação, segurança psicológica e confiança na liderança.',
    fullContent: `A Pesquisa de Clima Organizacional 2026 da Enap alcançou 84% de taxa de resposta, com resultados processados de forma agregada para garantir total impossibilidade de identificação individual.

Destaques apurados:
- Índice Geral de Satisfação com o Trabalho: 82% positivo;
- Clareza nas Diretrizes Estratégicas: 79%;
- Percepção de Autonomia no PGD: 88%;
- Ponto de Atenção: Sobrecarga em períodos de encerramento de semestres letivos (requer balanceamento via DFT).`,
    author: 'Célula de People Analytics & Pesquisa',
    date: '15/03/2026',
    version: 'v1.0',
    reliability: 'Padrão Homologado',
    tags: ['People Analytics', 'Clima', 'Pesquisa', 'BI', 'LGPD'],
    readTime: '15 min',
    downloadSize: '4.5 MB'
  },
  {
    id: 'DOC-05',
    title: 'Política Integrada de Gestão do Conhecimento da COGEM (SBGC / ISO 30401)',
    axisId: 'eixo-4',
    acronyms: ['GC', 'GI'],
    type: 'Manual',
    summary: 'Documento diretor que rege os 4 processos de GC (Registrar, Compartilhar, Acessar, Desenvolver), o Ciclo SECI e o modelo de maturidade técnica na unidade.',
    fullContent: `Fundamentada no Modelo de Referência da Sociedade Brasileira de Gestão do Conhecimento (SBGC) e na ABNT NBR ISO 30401:2018, esta política estabelece:

1. Processos Essenciais de Conhecimento:
   - Registrar e Sistematizar: Transformação de tácito em explícito por manuais, checklists e entrevistas estruturadas.
   - Compartilhar e Disseminar: Redes colaborativas, Comunidades de Prática (CoPs) e mentoria técnica entre seniores e novos membros.
   - Utilizar e Acessar: Facilitação de busca, portais de conhecimento sob demanda e catálogo de especialistas ("Páginas Amarelas").
   - Adquirir e Desenvolver: Benchmarking com órgãos públicos parceiros, experimentação ágil e inovação em processos.

2. Rituais de Aprendizagem Contínua:
   - Reuniões "Antes, Durante e Depois" (AAR) no encerramento de ciclos de projetos estratégicos.`,
    author: 'Comitê de Gestão do Conhecimento Enap',
    date: '05/01/2026',
    version: 'v2.0',
    reliability: 'Padrão Homologado',
    tags: ['GC', 'GI', 'SBGC', 'ISO 30401', 'Aprendizagem', 'SECI'],
    readTime: '18 min',
    downloadSize: '3.8 MB'
  },
  {
    id: 'DOC-06',
    title: 'Nota Técnica: Parametrização da Complexidade de Cursos e Oficinas para DFT',
    axisId: 'eixo-1',
    acronyms: ['DFT'],
    type: 'Nota Técnica',
    summary: 'Critérios objetivos para calibrar as horas padrão dedicadas por servidor no planejamento, contratação docente e mediação pedagógica de capacitações.',
    fullContent: `Esta Nota Técnica estabelece os coeficientes de ponderação para o dimensionamento das equipes pedagógicas, categorizando os cursos em:
- Cursos Standard (repetitivos/autoinstrucionais): Coeficiente 1.0;
- Cursos de Média Complexidade (híbridos, oficinas com mentoria): Coeficiente 1.6;
- Cursos de Alta Complexidade / Pós-graduações stricto sensu: Coeficiente 2.4.`,
    author: 'Paulo Roberto Cueto',
    date: '10/03/2026',
    version: 'v1.1',
    reliability: 'Padrão Homologado',
    tags: ['DFT', 'Nota Técnica', 'Complexidade', 'Parametrização'],
    readTime: '6 min',
    downloadSize: '820 KB'
  },
  {
    id: 'DOC-07',
    title: 'Relatório de Autoavaliação iESGo / TCU: Dimensão Governança de Pessoas',
    axisId: 'eixo-1',
    acronyms: ['iESGo', 'PDI'],
    type: 'Relatório Executivo',
    summary: 'Consolidação das pontuações da Enap no questionário de governança do TCU, demonstrando conformidade em sucessão de liderança e gestão por competências.',
    fullContent: `A Enap alcançou 78,4 pontos no subíndice iGovPessoas do TCU em 2025 (Faixa Aprimorada). 
Para o ciclo 2026, a meta institucional é superar 85 pontos com a formalização da Política de Gestão do Conhecimento e a automação de relatórios via People Analytics.`,
    author: 'Coordenação Geral de Gestão Estratégica',
    date: '12/02/2026',
    version: 'v2.0',
    reliability: 'Padrão Homologado',
    tags: ['iESGo', 'TCU', 'Governança', 'Auditoria', 'Pessoas'],
    readTime: '11 min',
    downloadSize: '2.1 MB'
  },
  {
    id: 'DOC-08',
    title: 'Catálogo de Modelos e Templates Oficiais para Notas Técnicas COGEM',
    axisId: 'eixo-1',
    acronyms: ['GI'],
    type: 'Modelo / Template',
    summary: 'Modelos padronizados de Notas Técnicas, Despachos Decisórios e Pareceres Estratégicos com campos pré-formatados de contexto, fundamentação e proposta.',
    fullContent: `Estrutura canônica de uma Nota Técnica COGEM:
1. Identificação do Processo SEI e Eixo Estratégico COGEM;
2. Sumário Executivo (máximo 150 palavras);
3. Contextualização e Diagnóstico Fático;
4. Fundamentação Técnica e Alinhamento Estratégico (PDI / PGD);
5. Análise de Dados e Evidências Empíricas;
6. Conclusão e Recomendações de Encaminhamento.`,
    author: 'Renata Albuquerque',
    date: '28/01/2026',
    version: 'v1.5',
    reliability: 'Padrão Homologado',
    tags: ['Templates', 'SEI', 'Modelos', 'Redação Oficial', 'Processos'],
    readTime: '5 min',
    downloadSize: '450 KB'
  },
  {
    id: 'DOC-09',
    title: 'Guia de Saúde Mental e Prevenção do Esgotamento no Teletrabalho',
    axisId: 'eixo-2',
    acronyms: ['QVT', 'PQVT', 'PGD'],
    type: 'Guia Técnico',
    summary: 'Orientações práticas de higiene digital, direito à desconexão, gestão de pausas ativas e canais de apoio psicológico da Escola.',
    fullContent: `O trabalho remoto estruturado traz autonomia, mas exige cuidados explícitos com limites saudáveis. Este guia elenca:
- O princípio do "Direito à Desconexão": não envio de mensagens em finais de semana ou fora do horário padrão pactuado;
- Práticas de ergonomia caseira recomendadas pelo SESMT;
- Protocolo de acolhimento em casos de sintomas de ansiedade e burnout;
- Canais confidenciais de escuta qualificada da Enap.`,
    author: 'Comissão de QVT Enap',
    date: '18/02/2026',
    version: 'v1.2',
    reliability: 'Boa Prática',
    tags: ['QVT', 'Saúde Mental', 'Teletrabalho', 'Bem-Estar', 'PGD'],
    readTime: '7 min',
    downloadSize: '1.2 MB'
  },
  {
    id: 'DOC-10',
    title: 'Diretrizes Institucionais de Diversidade, Equidade e Inclusão (DEI)',
    axisId: 'eixo-2',
    acronyms: ['DEI', 'iESGo'],
    type: 'Manual',
    summary: 'Manual normativo de ações afirmativas, combate ao assédio moral e sexual, acessibilidade física/comunicacional e representatividade em lideranças.',
    fullContent: `Compromissos prioritários da Enap em DEI:
1. Meta de no mínimo 30% de pessoas negras e 50% de mulheres em Cargos Comissionados Executivos (CCE) e Funções Comissionadas Executivas (FCE);
2. Acessibilidade comunicacional com audiodescrição e interpretação em Libras em 100% dos eventos institucionais;
3. Criação de canais seguros de ouvidoria especializada para denúncias de discriminação.`,
    author: 'Comitê DEI Enap',
    date: '02/02/2026',
    version: 'v2.0',
    reliability: 'Padrão Homologado',
    tags: ['DEI', 'Equidade', 'Diversidade', 'Inclusão', 'Acessibilidade'],
    readTime: '14 min',
    downloadSize: '2.7 MB'
  },
  {
    id: 'DOC-11',
    title: 'Lição Aprendida: Transição Suave e Transferência de Conhecimento em Aposentadorias',
    axisId: 'eixo-2',
    acronyms: ['GC', 'EX'],
    type: 'Lição Aprendida',
    summary: 'Registro estruturado do caso piloto de aposentadoria de servidor titular da área financeira com entrevistas narrativas e tutoriais de sistemas legados.',
    fullContent: `Contexto: Aposentadoria iminente de especialista com 28 anos de exercício na gestão de contratos orçamentários.
Problema: Risco de descontinuidade em rotinas contábeis complexas e conhecimento tácito não documentado.
Solução adotada: Realização de 6 sessões de shadowing e entrevistas gravadas com o sucessor durante os 90 dias prévios.
Resultado: Zero ocorrências de atraso na execução orçamentária do exercício subsequente.
Recomendação: Aplicar o mesmo rito a todas as aposentadorias de funções técnicas críticas.`,
    author: 'Camila Duarte',
    date: '20/01/2026',
    version: 'v1.0',
    reliability: 'Lição Aprendida',
    tags: ['Lição Aprendida', 'Aposentadoria', 'Memória', 'Conhecimento Tácito'],
    readTime: '6 min',
    downloadSize: '590 KB'
  },
  {
    id: 'DOC-12',
    title: 'Guia de Proteção de Dados e LGPD Aplicada a Dados de Servidores Públicos',
    axisId: 'eixo-3',
    acronyms: ['LGPD', 'GI'],
    type: 'Guia Técnico',
    summary: 'Parâmetros operacionais para tratamento de dados pessoais em pesquisas de clima, registros de saúde, avaliações de desempenho e painéis de BI.',
    fullContent: `O tratamento de dados pessoais no âmbito da administração pública deve pautar-se pelo cumprimento de obrigação legal ou execução de políticas públicas (Art. 7º, incisos II e III da LGPD).
Regras chave:
- Relatórios analíticos públicos devem utilizar dados anonimizados ou agregados em clusters mínimos de 5 indivíduos;
- Dados sensíveis de saúde ou raça/cor exigem criptografia em repouso e controle estrito de credenciais de acesso;
- Registros de log de consultas a dados pessoais devem ser mantidos por no mínimo 6 meses.`,
    author: 'Encarregado LGPD / COGEM',
    date: '10/01/2026',
    version: 'v1.3',
    reliability: 'Padrão Homologado',
    tags: ['LGPD', 'Privacidade', 'Segurança', 'Governança', 'Dados'],
    readTime: '9 min',
    downloadSize: '1.4 MB'
  },
  {
    id: 'DOC-13',
    title: 'Estudo Empírico: Impacto do PGD na Eficiência dos Processos Educacionais Enap',
    axisId: 'eixo-3',
    acronyms: ['PGD', 'BI'],
    type: 'Estudo e Pesquisa',
    summary: 'Análise de regressão comparativa do cumprimento de prazos de contratação docente e emissão de certificados antes e depois da adesão ao teletrabalho.',
    fullContent: `Principais conclusões do estudo econométrico:
1. O tempo médio de tramitação de processos de contratação de instrutores caiu de 14,2 dias para 8,1 dias úteis;
2. A taxa de conformidade das certidões e pagamentos subiu de 91% para 98,4%;
3. A adesão ao PGD demonstrou correlação positiva com a pontualidade na entrega de relatórios pedagógicos;
4. Recomenda-se a continuidade do modelo com monitoramento contínuo de carga de trabalho.`,
    author: 'Vinicius Prado e Equipe de Pesquisa',
    date: '25/02/2026',
    version: 'v1.0',
    reliability: 'Boa Prática',
    tags: ['Estudo', 'PGD', 'Produtividade', 'Evidências', 'Avaliação'],
    readTime: '16 min',
    downloadSize: '3.6 MB'
  },
  {
    id: 'DOC-14',
    title: 'Roteiro de Debriefing: Como Conduzir uma Sessão de Lições Aprendidas (AAR)',
    axisId: 'eixo-4',
    acronyms: ['GC'],
    type: 'Modelo / Template',
    summary: 'Roteiro passo a passo com perguntas norteadoras para reuniões de After Action Review imediatamente após a entrega de projetos complexos.',
    fullContent: `O After Action Review (AAR) deve durar entre 45 e 60 minutos e responder a 4 questões essenciais em ambiente de segurança psicológica (sem culpabilização):
1. O que era esperado acontecer no projeto? (Metas e planos acordados)
2. O que efetivamente aconteceu na prática? (Fatos, desvios e surpresas)
3. Quais foram as causas fundamentais dos acertos e dos problemas enfrentados?
4. O que faremos de diferente na próxima iniciativa para replicar o sucesso e mitigar riscos?`,
    author: 'Thiago Valente',
    date: '14/02/2026',
    version: 'v1.0',
    reliability: 'Padrão Homologado',
    tags: ['AAR', 'Lições Aprendidas', 'Roteiro', 'Debriefing', 'Melhoria'],
    readTime: '5 min',
    downloadSize: '510 KB'
  }
];

export const INDICATORS_DATA: IndicatorData[] = [
  {
    id: 'IND-01',
    axisId: 'eixo-1',
    title: 'Cobertura do Dimensionamento (DFT)',
    value: 82,
    unit: '%',
    delta: '+14% vs. 2025',
    trend: 'up',
    target: 100,
    description: 'Percentual de unidades da Enap com modelo de DFT parametrizado e validado.',
    source: 'Sistema DFT Enap',
    history: [
      { period: '2024', val: 45 },
      { period: '2025 Q1', val: 56 },
      { period: '2025 Q3', val: 68 },
      { period: '2026 Q1', val: 82 }
    ]
  },
  {
    id: 'IND-02',
    axisId: 'eixo-1',
    title: 'Aderência ao PGD e Cumprimento de Planos',
    value: 94.6,
    unit: '%',
    delta: '+2.8% no trimestre',
    trend: 'up',
    target: 95.0,
    description: 'Taxa de planos de trabalho com entregas aprovadas tempestivamente no PGD.',
    source: 'Sistema PGD / MGI',
    history: [
      { period: '2025 Q1', val: 89.1 },
      { period: '2025 Q2', val: 91.4 },
      { period: '2025 Q3', val: 93.0 },
      { period: '2026 Q1', val: 94.6 }
    ]
  },
  {
    id: 'IND-03',
    axisId: 'eixo-2',
    title: 'Índice de Favorabilidade do Clima (EX)',
    value: 81.5,
    unit: '%',
    delta: '+4.2 p.p.',
    trend: 'up',
    target: 80.0,
    description: 'Grau médio de respostas favoráveis na pesquisa periódica de clima organizacional.',
    source: 'Pesquisa Bienal Enap',
    history: [
      { period: '2022', val: 72.0 },
      { period: '2024', val: 77.3 },
      { period: '2025 (Pulso)', val: 79.1 },
      { period: '2026', val: 81.5 }
    ]
  },
  {
    id: 'IND-04',
    axisId: 'eixo-2',
    title: 'Representatividade de DEI em Cargos de Liderança',
    value: 48.2,
    unit: '%',
    delta: '+6.1% vs. 2024',
    trend: 'up',
    target: 50.0,
    description: 'Participação proporcional de mulheres e pessoas negras em funções de confiança (CCE/FCE).',
    source: 'Censo Demográfico Enap',
    history: [
      { period: '2023', val: 36.5 },
      { period: '2024', val: 42.1 },
      { period: '2025', val: 45.4 },
      { period: '2026', val: 48.2 }
    ]
  },
  {
    id: 'IND-05',
    axisId: 'eixo-3',
    title: 'Taxa de Decisões de GP Apoiadas em Evidências',
    value: 76,
    unit: '%',
    delta: '+18% em 12 meses',
    trend: 'up',
    target: 85,
    description: 'Proposições de atos e despachos com relatório analítico prévio de People Analytics.',
    source: 'Auditoria de Processos COGEM',
    history: [
      { period: '2024', val: 42 },
      { period: '2025 S1', val: 58 },
      { period: '2025 S2', val: 65 },
      { period: '2026 Q1', val: 76 }
    ]
  },
  {
    id: 'IND-06',
    axisId: 'eixo-3',
    title: 'Conformidade de Segurança e Privacidade (LGPD)',
    value: 98.2,
    unit: '%',
    delta: 'Total conformidade',
    trend: 'stable',
    target: 100,
    description: 'Percentual de bases de dados de GP com ROPA e classificação de privacidade regular.',
    source: 'Relatório DPO Enap',
    history: [
      { period: '2024', val: 84.0 },
      { period: '2025 S1', val: 92.5 },
      { period: '2025 S2', val: 97.0 },
      { period: '2026 Q1', val: 98.2 }
    ]
  },
  {
    id: 'IND-07',
    axisId: 'eixo-4',
    title: 'Taxa de Reuso de Documentos e Memória Técnica',
    value: 68.4,
    unit: '%',
    delta: '+21% em 6 meses',
    trend: 'up',
    target: 75,
    description: 'Consultas e downloads de notas técnicas e templates homologados para novos processos.',
    source: 'Repositório de Conhecimento COGEM',
    history: [
      { period: '2025 Q1', val: 32.0 },
      { period: '2025 Q3', val: 47.4 },
      { period: '2025 Q4', val: 55.1 },
      { period: '2026 Q1', val: 68.4 }
    ]
  },
  {
    id: 'IND-08',
    axisId: 'eixo-4',
    title: 'Índice de Maturidade de GC (Escala SBGC 1000 pts)',
    value: 730,
    unit: 'pts',
    delta: '+120 pts (Expansão)',
    trend: 'up',
    target: 850,
    description: 'Pontuação global no Modelo de Avaliação de Maturidade SBGC (Faixa Expansão 750 pts).',
    source: 'Diagnóstico Anual de GC',
    history: [
      { period: '2023 (Incipiente)', val: 410 },
      { period: '2024 (Evolução)', val: 530 },
      { period: '2025', val: 640 },
      { period: '2026 Q1', val: 730 }
    ]
  }
];

export const COMMUNITIES_OF_PRACTICE: CommunityOfPractice[] = [
  {
    id: 'COP-01',
    name: 'CoP People Analytics & Inteligência de Negócios',
    domain: 'Modelagem de dados de RH, automação em PowerBI/Python, People Analytics e ética/LGPD no serviço público.',
    description: 'Comunidade aberta para analistas, pesquisadores e gestores da Enap interessados em extrair inteligência a partir dos registros de gestão de pessoas.',
    membersCount: 26,
    facilitator: 'Elena Gestão (Especialista em BI)',
    cadence: 'Quinzenal (Quintas-feiras, 14h)',
    meetingDay: 'Próximo encontro: 02/04/2026',
    recentOutcomes: [
      'Dashboard unificado de absenteísmo e motivos de licença',
      'Script de verificação automática de conformidade LGPD em bases amostrais',
      'Workshop prático de Storytelling com Dados para Diretores'
    ],
    tags: ['Dados', 'People Analytics', 'BI', 'LGPD', 'Evidências']
  },
  {
    id: 'COP-02',
    name: 'CoP Práticas de Inovação no PGD e Trabalho Flexível',
    domain: 'Modelos de gestão por entregas, pactuação de planos de trabalho, liderança à distância e rituais ágeis.',
    description: 'Espaço de acolhimento e mentoria mútua entre coordenadores e chefias para desmistificar a avaliação por entregas e balancear o bem-estar da equipe.',
    membersCount: 38,
    facilitator: 'Mariana Silveira & Paulo Cueto',
    cadence: 'Mensal (Primeira Terça-feira, 10h)',
    meetingDay: 'Próximo encontro: 07/04/2026',
    recentOutcomes: [
      'Guia de Boas Práticas de Comunicação Assíncrona no PGD',
      'Painel de dúvidas frequentes sobre a IN MGI 24/2023',
      'Banco de modelos de planos de trabalho por tipo de atividade pedagógica'
    ],
    tags: ['PGD', 'Liderança', 'Teletrabalho', 'Processos', 'Entregas']
  },
  {
    id: 'COP-03',
    name: 'CoP Diversidade, Equidade e Clima Humanizado',
    domain: 'Ações afirmativas, saúde mental dos servidores, acessibilidade e prevenção ao assédio.',
    description: 'Grupo interdisciplinar de servidores focado em construir uma cultura organizacional inclusiva, empática e plural na Enap.',
    membersCount: 31,
    facilitator: 'Juliana Pires & Lucas Nogueira',
    cadence: 'Quinzenal (Sextas-feiras, 11h)',
    meetingDay: 'Próximo encontro: 10/04/2026',
    recentOutcomes: [
      'Manual de Linguagem Inclusiva e Acessível adotado em editais',
      'Roda de conversa sobre neurodiversidade e adaptação de postos de trabalho',
      'Ciclo de palestras sobre saúde mental de servidores negros e indígenas'
    ],
    tags: ['DEI', 'QVT', 'Inclusão', 'Saúde Mental', 'Equidade']
  },
  {
    id: 'COP-04',
    name: 'CoP Facilitadores de Aprendizagem e Gestão do Conhecimento',
    domain: 'Metodologias ativas, captura de conhecimento tácito, documentação de lições aprendidas e mentoria técnica.',
    description: 'Encontro de multiplicadores de conhecimento da Escola para aperfeiçoar técnicas de facilitação, mapeamento de competências e retenção do saber crítico.',
    membersCount: 22,
    facilitator: 'Thiago Valente & Aline Carvalho',
    cadence: 'Mensal (Última Quarta-feira, 15h)',
    meetingDay: 'Próximo encontro: 29/04/2026',
    recentOutcomes: [
      'Roteiro de 4 perguntas para After Action Review (AAR)',
      'Protocolo de mentoria reversa entre novos servidores e técnicos seniores',
      'Curadoria de artigos e modelos da SBGC para o acervo Enap'
    ],
    tags: ['GC', 'Aprendizagem', 'SECI', 'Memória', 'Mentoria']
  }
];

export const SPECIALISTS_DIRECTORY: Specialist[] = [
  {
    id: 'ESP-01',
    name: 'Paulo Roberto Cueto',
    role: 'Especialista em Gestão Pública e Planejamento',
    area: 'Coordenação COGEM',
    email: 'paulo.cueto@enap.gov.br',
    topSkills: ['Dimensionamento (DFT)', 'Planejamento Estratégico', 'Governança iESGo', 'Gestão de Riscos'],
    knowledgeTopics: [
      'Parametrização de força de trabalho em órgãos federais',
      'Alinhamento estratégico PDI e metas do PGD',
      'Relações com órgãos de controle (TCU, CGU, MGI)'
    ],
    availability: 'Disponível para mentoria'
  },
  {
    id: 'ESP-02',
    name: 'Elena Gestão',
    role: 'Analista de People Analytics & BI',
    area: 'Célula de Evidências em GP',
    email: 'elena.gestao@enap.gov.br',
    topSkills: ['People Analytics', 'PowerBI', 'SQL & R', 'Modelagem Estatística', 'LGPD'],
    knowledgeTopics: [
      'Construção de painéis dinâmicos de RH',
      'Anonimização e conformidade com a LGPD em pesquisas de clima',
      'Predição de rotatividade e sobrecarga em teletrabalho'
    ],
    availability: 'Disponível para mentoria'
  },
  {
    id: 'ESP-03',
    name: 'Mariana Silveira',
    role: 'Consultora de Processos e Modernização',
    area: 'Núcleo de Processos COGEM',
    email: 'mariana.silveira@enap.gov.br',
    topSkills: ['BPMN / Bizagi', 'PGD', 'Mapeamento de Fluxos', 'Gestão por Entregas'],
    knowledgeTopics: [
      'Desenho de fluxos de processos sem retrabalho',
      'Adequação de planos de trabalho à IN MGI 24/2023',
      'Desburocratização de rotinas no SEI'
    ],
    availability: 'Consultas pontuais'
  },
  {
    id: 'ESP-04',
    name: 'Thiago Valente',
    role: 'Gestor do Conhecimento & Aprendizagem',
    area: 'Núcleo de GC & Inovação',
    email: 'thiago.valente@enap.gov.br',
    topSkills: ['Gestão do Conhecimento (SBGC)', 'Comunidades de Prática', 'Ciclo SECI', 'After Action Review (AAR)'],
    knowledgeTopics: [
      'Como estruturar uma Comunidade de Prática duradoura',
      'Facilitação de rituais de lições aprendidas em projetos',
      'Conversão de conhecimento tácito em manuais práticos'
    ],
    availability: 'Disponível para mentoria'
  },
  {
    id: 'ESP-05',
    name: 'Juliana Pires',
    role: 'Analista de Clima e Equidade',
    area: 'Célula de EX e DEI',
    email: 'juliana.pires@enap.gov.br',
    topSkills: ['DEI', 'Cultura e Clima', 'Acessibilidade', 'Mediação de Conflitos'],
    knowledgeTopics: [
      'Políticas de inclusão e equidade de gênero e raça no setor público',
      'Construção de ambientes de segurança psicológica',
      'Linguagem simples e inclusiva em comunicações governamentais'
    ],
    availability: 'Consultas pontuais'
  }
];

export const LESSONS_LEARNED: LessonLearned[] = [
  {
    id: 'LL-01',
    title: 'Parametrização do DFT em unidades com atividades predominantemente criativas/pedagógicas',
    axisId: 'eixo-1',
    situation: 'Durante o piloto de DFT na Diretoria Educacional, os tempos padrões calculados inicialmente não capturavam a não-linearidade do desenvolvimento de novas metodologias de ensino.',
    expectedVsActual: 'Esperava-se estimar tempos médios fixos de 40 horas por módulo; na realidade, a criação de cursos inéditos demandou até 110 horas devido a reuniões de cocriação com especialistas externos.',
    rootCauses: 'Classificação inadequada de todos os cursos sob a mesma categoria de esforço, sem diferenciar replicação de oferta versus desenvolvimento do zero.',
    recommendations: 'Criar matriz diferenciada com coeficiente de inovação pedagógica e registrar as horas de cocriação em subatividades dedicadas.',
    reliability: 'Boa Prática',
    author: 'Paulo Roberto Cueto',
    date: '10/02/2026',
    acronyms: ['DFT', 'PDI']
  },
  {
    id: 'LL-02',
    title: 'Taxa de resposta em pesquisas organizacionais eletrônicas com servidores em teletrabalho',
    axisId: 'eixo-3',
    situation: 'No primeiro ciclo da pesquisa de clima, os envios de formulários extensos resultaram em taxa de engajamento de apenas 43% nas duas primeiras semanas.',
    expectedVsActual: 'Previsão de 70% de adesão espontânea em questionário de 55 perguntas.',
    rootCauses: 'Fadiga de tela, excesso de perguntas abertas e falta de clareza prévia sobre como as respostas seriam utilizadas pela alta gestão.',
    recommendations: 'Reduzir o instrumento para 24 itens objetivos (Likert de 5 pontos), com tempo de resposta inferior a 7 minutos e campanha de lançamento gravada em vídeo pela coordenação.',
    reliability: 'Padrão Homologado',
    author: 'Vinicius Prado',
    date: '15/03/2026',
    acronyms: ['EX', 'LGPD', 'BI']
  },
  {
    id: 'LL-03',
    title: 'Engajamento em Comunidades de Prática sem sobrecarregar a rotina do PGD',
    axisId: 'eixo-4',
    situation: 'Membros de CoPs sentiam receio de que a participação nas reuniões quinzenais fosse vista como desvio do cumprimento das metas formais do plano de trabalho.',
    expectedVsActual: 'Esperava-se participação espontânea sem necessidade de chancela formal.',
    rootCauses: 'Insegurança dos servidores quanto ao registro da atividade de capacitação/colaboração no sistema de gestão de desempenho.',
    recommendations: 'Prever explicitamente a participação em CoPs e ações de Gestão do Conhecimento como entregas válidas de aprimoramento contínuo dentro do PGD.',
    reliability: 'Padrão Homologado',
    author: 'Thiago Valente',
    date: '18/03/2026',
    acronyms: ['GC', 'PGD']
  }
];

export const KM_SECI_QUADRANTS = [
  {
    id: 'socializacao',
    name: 'Socialização',
    fromTo: 'Tácito → Tácito',
    subtitle: 'Compreensão tácita via experiência direta e diálogo',
    description: 'Compartilhamento de experiências, observação mútua, modelos mentais e habilidades técnicas em convivência direta.',
    color: 'emerald',
    practices: [
      'Mentoria técnica sênior-iniciante',
      'Shadowing (acompanhamento de pares na execução)',
      'Rodas de conversa sobre clima e sobrecarga',
      'Comunidades de Prática presenciais e virtuais'
    ],
    enapExamples: 'Novo analista acompanha sessões de análise de DFT com o coordenador antes de assumir seus próprios pareceres.'
  },
  {
    id: 'externalizacao',
    name: 'Externalização',
    fromTo: 'Tácito → Explícito',
    subtitle: 'Articulação de insights e consolidação em modelos',
    description: 'Expressão do saber individual por meio de metáforas, conceitos, modelos, notas técnicas e roteiros visuais.',
    color: 'amber',
    practices: [
      'Registro de Lições Aprendidas (After Action Review)',
      'Elaboração de Manuais e Guias de Boas Práticas',
      'Entrevistas narrativas de aposentadoria',
      'Mapeamento de processos com modelagem BPMN'
    ],
    enapExamples: 'Especialista em PGD redige o "Guia Prático de Pactuação de Metas" transformando sua vivência empírica em roteiro oficial.'
  },
  {
    id: 'combinacao',
    name: 'Combinação',
    fromTo: 'Explícito → Explícito',
    subtitle: 'Conexão e síntese de saberes em múltiplos domínios',
    description: 'Integração de diferentes corpos de conhecimentos explícitos em relatórios executivos, bases de dados, painéis analíticos e sistemas.',
    color: 'blue',
    practices: [
      'Construção de Painéis de BI & People Analytics',
      'Cruzamento de bases de DFT, PGD e pesquisa de clima',
      'Integração de repositórios digitais e taxonomias SEI',
      'Compilação de relatórios anuais de governança (iESGo)'
    ],
    enapExamples: 'Célula de BI combina dados de frequência do SIAPE com avaliações de PGD e censo de DEI para gerar o dashboard da Presidência.'
  },
  {
    id: 'internalizacao',
    name: 'Internalização',
    fromTo: 'Explícito → Tácito',
    subtitle: 'Aprendizado e refinamento com a prática (Aprender Fazendo)',
    description: 'Incorporação de conhecimentos formalizados aos modelos mentais individuais mediante prática, estudo e aplicação cotidiana.',
    color: 'indigo',
    practices: [
      'Trilhas de capacitação autodirigidas e e-learning',
      'Consulta frequente a repositórios de notas técnicas no fluxo de trabalho',
      'Simulações e estudos de casos reais em oficinas',
      'Adoção de checklists no dia a dia decisório'
    ],
    enapExamples: 'Servidores utilizam os checklists da COGEM para instruir processos de progressão de carreira com autonomia e segurança.'
  }
];

export const KM_SBGC_MATURITY_DATA = [
  {
    dimension: 'Iniciativas e Práticas de GC',
    score: 75,
    components: [
      { name: '1. Informação e Conteúdo (Repositórios e GED)', level: 80, status: 'Consolidada' },
      { name: '2. Interação e Colaboração (CoPs e Diálogo)', level: 75, status: 'Consolidada' },
      { name: '3. Aprendizagem e Competência (Trilhas e Mentoria)', level: 70, status: 'Em Expansão' },
      { name: '4. Inteligência e Inovação (Benchmarking e IA)', level: 75, status: 'Consolidada' }
    ]
  },
  {
    dimension: 'Alinhamento com o Negócio',
    score: 73,
    components: [
      { name: '5. Objetivos e Estratégia de GC (Alinhamento ao PDI)', level: 85, status: 'Consolidada' },
      { name: '6. Gestão de Práticas e Recursos Dedicados', level: 70, status: 'Em Expansão' },
      { name: '7. Participação da Alta Direção e Stakeholders', level: 75, status: 'Consolidada' },
      { name: '8. Conhecimentos Críticos e Mapeamento de Riscos', level: 62, status: 'Em Expansão' }
    ]
  },
  {
    dimension: 'Ambiente Facilitador (Ba & Cultura)',
    score: 71,
    components: [
      { name: '9. Tecnologia e Infraestrutura (BI e Portais)', level: 80, status: 'Consolidada' },
      { name: '10. Apoio da Gestão e Inserção no PGD', level: 72, status: 'Em Expansão' },
      { name: '11. Engajamento e Reconhecimento dos Servidores', level: 64, status: 'Em Expansão' },
      { name: '12. Cultura Favorável ao Compartilhamento', level: 68, status: 'Em Expansão' }
    ]
  }
];
