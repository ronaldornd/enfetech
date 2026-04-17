import { Module } from '../types';

export const MODULES: Module[] = [
  {
    id: 'f1',
    title: 'Fundamentos e Biossegurança',
    type: 'foundation',
    description: 'Bases da enfermagem, higiene, conforto e proteção contra riscos.',
    icon: 'Shield',
    progress: 0
  },
  {
    id: 'p1',
    title: 'Farmacologia e Cálculos',
    type: 'pharmacology',
    description: 'Cálculo de dosagens, vias de administração e farmacocinética.',
    icon: 'Calculator',
    progress: 0
  },
  {
    id: 's1',
    title: 'Saúde Pública (SUS)',
    type: 'public-health',
    description: 'Legislação do SUS, princípios e redes de atenção à saúde.',
    icon: 'Globe',
    progress: 0
  },
  {
    id: 'c1',
    title: 'Urgência e Emergência',
    type: 'critical',
    description: 'Protocolos de SBV, trauma e manejo de pacientes críticos.',
    icon: 'Zap',
    progress: 0
  },
  {
    id: 'w1',
    title: 'Saúde da Mulher/Obstetrícia',
    type: 'public-health',
    description: 'Pré-natal, ciclo gravídico-puerperal e climatério.',
    icon: 'Shield',
    progress: 0
  },
  {
    id: 'k1',
    title: 'Pediatria e Neonatologia',
    type: 'foundation',
    description: 'Desenvolvimento infantil, vacinação e patologias comuns.',
    icon: 'BookOpen',
    progress: 0
  },
  {
    id: 'a1',
    title: 'Saúde do Adulto (Crônicas)',
    type: 'critical',
    description: 'Manejo de HAS, DM, feridas e cuidados paliativos.',
    icon: 'Shield',
    progress: 0
  },
  {
    id: 'm1',
    title: 'Saúde Mental',
    type: 'public-health',
    description: 'Reforma psiquiátrica, RAPS e urgências psiquiátricas.',
    icon: 'Zap',
    progress: 0
  },
  {
    id: 'o1',
    title: 'Oncologia',
    type: 'critical',
    description: 'Bases da oncologia, quimioterapia e cuidados paliativos.',
    icon: 'Shield',
    progress: 0
  },
  {
    id: 'e1_mod',
    title: 'Ética e Legislação',
    type: 'foundation',
    description: 'Código de Ética da Enfermagem, Lei do Exercício Profissional.',
    icon: 'Award',
    progress: 0
  }
];
