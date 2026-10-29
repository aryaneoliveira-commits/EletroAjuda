export type ViewType = 
  | 'home' 
  | 'modules' 
  | 'module-detail' 
  | 'calculators' 
  | 'qna' 
  | 'exercises' 
  | 'catalog' 
  | 'dashboard';

export interface ModuleFormula {
  name: string;
  expression: string;
  description: string;
  variables: {
    symbol: string;
    name: string;
    unit: string;
    description: string;
  }[];
}

export interface SolvedExample {
  title: string;
  problem: string;
  givenData: { label: string; value: string }[];
  steps: string[];
  finalAnswer: string;
  explanation: string;
}

export interface ModuleQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LearningModule {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Fundamentos' | 'Circuitos' | 'Componentes' | 'Digital' | 'Prática';
  icon: string;
  readTime: string;
  summaryPoints: string[];
  theorySections: {
    title: string;
    content: string;
    tips?: string;
    diagramSvg?: string;
  }[];
  formulas: ModuleFormula[];
  examples: SolvedExample[];
  practicalApplications: string[];
  safetyTips: string[];
  quiz: ModuleQuizQuestion[];
}

export interface ComponentItem {
  id: string;
  name: string;
  technicalName: string;
  category: 'Passivos' | 'Semicondutores' | 'Eletromecânicos' | 'Circuitos Integrados' | 'Acessórios & Montagem';
  icon: string;
  symbol: string;
  pinout?: string[];
  functionality: string;
  operatingPrinciple: string;
  practicalApplications: string[];
  handlingPrecautions: string[];
  typicalSpecs: { label: string; value: string }[];
  didYouKnow?: string;
}

export interface ExerciseQuestion {
  id: string;
  moduleId: number;
  moduleName: string;
  difficulty: 'Fácil' | 'Intermediário' | 'Avançado';
  type: 'conceitual' | 'calculo';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  formulaUsed?: string;
}

export interface QnAItem {
  id: string;
  question: string;
  keywords: string[];
  category: string;
  answerSummary: string;
  answerDetailed: string[];
  formulas?: { name: string; formula: string }[];
  example?: string;
  safetyNote?: string;
}

export interface UserProgress {
  completedModules: number[]; // module IDs
  lastModuleId?: number;
  quizScores: {
    [quizKey: string]: {
      score: number;
      total: number;
      date: string;
    };
  };
  totalPoints: number; // XP
  unlockedBadges: string[];
  favorites: {
    modules: number[];
    calculators: string[];
    components: string[];
  };
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'iniciante' | 'calculo' | 'mestre' | 'seguranca';
}
