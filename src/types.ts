
export type ModuleType = 'foundation' | 'pharmacology' | 'public-health' | 'clinical' | 'critical' | 'lifecycles';

export interface Module {
  id: string;
  title: string;
  type: ModuleType;
  description: string;
  icon: string;
  progress: number;
}

export interface Flashcard {
  id: string;
  moduleId: string;
  question: string;
  answer: string;
  tags: string[];
  requiredLessonId?: string;
}

export interface ScenarioStep {
  id: string;
  description: string;
  options: ScenarioOption[];
}

export interface ScenarioOption {
  text: string;
  nextStepId?: string;
  feedback: string;
  isCorrect: boolean;
  isEnding?: boolean;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  xpReward: number;
  difficulty: 'Fácil' | 'Média' | 'Alta';
  steps: ScenarioStep[];
  requiredLessonId?: string;
}

export interface POPSection {
  title: string;
  items: string[];
}

export interface POPStep {
  text: string;
  rationale?: string;
}

export interface POP {
  id: string;
  title: string;
  description: string;
  category: string;
  objective: string;
  materials: string[];
  steps: POPStep[];
  precautions: string[];
  precautions: string[];
  requiredLevel?: number;
  requiredLessonId?: string;
}

export interface DictionaryEntry {
  term: string;
  definition: string;
  category?: 'sigla' | 'escala';
  details?: string;
  whatIs?: string;
  howToMeasure?: string;
  requiredLevel?: number;
  requiredLessonId?: string;
}

export interface Pill {
  id: string;
  title: string;
  category: string;
  content: string;
  duration: number;
  requiredLevel?: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  content: string;
  order: number;
  questions?: QuizQuestion[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface UserProfile {
  name: string;
  xp: number;
  level: number;
  lostPatients: number;
  onboardingCompleted: boolean;
}
