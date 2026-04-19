import { DailyChallenge } from '../types';

export interface ChallengeTemplate {
  templateId: string;
  title: string;
  description: string;
  type: 'lesson' | 'scenario' | 'flashcard' | 'tool' | 'dictionary';
  target: number;
  xpReward: number;
  icon: string;
  category: 'A' | 'B' | 'C'; // A: Theory/Pills, B: Simulation/Practice, C: Tools/Drills
}

export const CHALLENGE_TEMPLATES: ChallengeTemplate[] = [
  // --- Category A: Knowledge & Theory ---
  {
    templateId: 'ct_lessons_any',
    title: 'Sede de Conhecimento',
    description: 'Complete 2 lições de qualquer tópico.',
    type: 'lesson',
    target: 2,
    xpReward: 300,
    icon: 'BookOpen',
    category: 'A'
  },
  {
    templateId: 'ct_lessons_far',
    title: 'Mestre da Farmaco',
    description: 'Complete 2 lições da trilha de Farmacologia.',
    type: 'lesson',
    target: 2,
    xpReward: 400,
    icon: 'Zap',
    category: 'A'
  },
  {
    templateId: 'ct_pills_any',
    title: 'Dose Rápida',
    description: 'Leia 3 Pílulas de Conhecimento.',
    type: 'lesson',
    target: 3,
    xpReward: 200,
    icon: 'Zap',
    category: 'A'
  },
  {
    templateId: 'ct_lessons_ped',
    title: 'Especialista Kids',
    description: 'Complete 1 lição da trilha de Pediatria.',
    type: 'lesson',
    target: 1,
    xpReward: 250,
    icon: 'Award',
    category: 'A'
  },

  // --- Category B: Clinical Simulation ---
  {
    templateId: 'ct_scenarios_any',
    title: 'Plantão Agitado',
    description: 'Conclua 2 simulações clínicas com sucesso.',
    type: 'scenario',
    target: 2,
    xpReward: 500,
    icon: 'ShieldCheck',
    category: 'B'
  },
  {
    templateId: 'ct_scenarios_hard',
    title: 'Herói da Emergência',
    description: 'Vença 1 cenário de Alta Dificuldade.',
    type: 'scenario',
    target: 1,
    xpReward: 600,
    icon: 'Zap',
    category: 'B'
  },
  {
    templateId: 'ct_scenarios_stability',
    title: 'Mãos de Ferro',
    description: 'Conclua 1 simulação sem deixar a estabilidade cair abaixo de 60%.',
    type: 'scenario',
    target: 1,
    xpReward: 450,
    icon: 'Activity',
    category: 'B'
  },
  {
    templateId: 'ct_scenarios_perfect',
    title: 'Conduta Impecável',
    description: 'Finalize um atendimento sem cometer nenhum erro.',
    type: 'scenario',
    target: 1,
    xpReward: 700,
    icon: 'Star',
    category: 'B'
  },

  // --- Category C: Tools & Memory ---
  {
    templateId: 'ct_flashcards_any',
    title: 'Memória de Elefante',
    description: 'Revise 15 Flashcards hoje.',
    type: 'flashcard',
    target: 15,
    xpReward: 300,
    icon: 'Zap',
    category: 'C'
  },
  {
    templateId: 'ct_flashcards_tags',
    title: 'Foco no Crítico',
    description: 'Acerte 5 Flashcards com a tag "Críticos".',
    type: 'flashcard',
    target: 5,
    xpReward: 250,
    icon: 'Activity',
    category: 'C'
  },
  {
    templateId: 'ct_tools_calc',
    title: 'Precisão Cirúrgica',
    description: 'Use a Calculadora de Gotejamento para um cálculo.',
    type: 'tool',
    target: 1,
    xpReward: 100,
    icon: 'Calculator',
    category: 'C'
  },
  {
    templateId: 'ct_tools_pops',
    title: 'Segurança em Dia',
    description: 'Consulte 2 POPs Digitais.',
    type: 'tool',
    target: 2,
    xpReward: 150,
    icon: 'Shield',
    category: 'C'
  },
  {
    templateId: 'ct_dictionary_any',
    title: 'Vocabulário Técnico',
    description: 'Pesquise 3 termos ou siglas no Dicionário.',
    type: 'dictionary',
    target: 3,
    xpReward: 150,
    icon: 'Search',
    category: 'C'
  }
];

export const generateDailyChallenges = (dateStr: string): DailyChallenge[] => {
  // Simple deterministic random based on date string
  const getSeed = (str: string) => str.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const baseSeed = getSeed(dateStr);
  
  const pickFromCategory = (category: 'A' | 'B' | 'C', seedModifier: number) => {
    const pool = CHALLENGE_TEMPLATES.filter(t => t.category === category);
    const index = (baseSeed + seedModifier) % pool.length;
    return pool[index];
  };

  const selectedTemplates = [
    pickFromCategory('A', 13),
    pickFromCategory('B', 42),
    pickFromCategory('C', 77)
  ];

  return selectedTemplates.map((template, index) => ({
    id: `daily_${dateStr}_${index}`,
    templateId: template.templateId,
    title: template.title,
    description: template.description,
    type: template.type as any,
    target: template.target,
    current: 0,
    completed: false,
    xpReward: template.xpReward,
    icon: template.icon
  }));
};
