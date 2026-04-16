
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
}

export interface ScenarioStep {
  id: string;
  text: string;
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
  initialStepId: string;
  steps: Record<string, ScenarioStep>;
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
  category: string;
  objective: string;
  materials: string[];
  steps: POPStep[];
  precautions: string[];
}

export interface DictionaryEntry {
  id: string;
  term: string;
  definition: string;
  category: 'sigla' | 'escala';
  details?: string;
  whatIs?: string;
  howToMeasure?: string;
}

export interface Pill {
  id: string;
  title: string;
  category: string;
  content: string;
  duration: number;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  content: string;
  order: number;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}
