import { DictionaryEntry } from '../types';

export const DICTIONARY: DictionaryEntry[] = [
  // Siglas
  { term: 'Anúria', definition: 'Ausência total de urina ou volume inferior a 100ml em 24h.', category: 'sigla' },
  { term: 'Bradipsiquismo', definition: 'Lentidão nos processos mentais.', category: 'sigla' },
  { term: 'Cianose', definition: 'Coloração azulada da pele devido à má oxigenação.', category: 'sigla' },
  { term: 'Disúria', definition: 'Dor ou dificuldade ao urinar.', category: 'sigla' },
  { term: 'Eupneia', definition: 'Respiração normal, sem esforço.', category: 'sigla' },
  { term: 'Flebite', definition: 'Inflamação de uma veia.', category: 'sigla' },
  { term: 'Hematêmese', definition: 'Vômito com sangue.', category: 'sigla', requiredLevel: 1 },
  { term: 'Icterícia', definition: 'Coloração amarelada da pele e mucosas.', category: 'sigla', requiredLevel: 1 },
  
  // Escalas
  { 
    term: 'Glasgow (GCS)', 
    definition: 'Escala de Coma de Glasgow.', 
    category: 'escala',
    whatIs: 'Utilizada para avaliar o nível de consciência após trauma cranioencefálico ou em pacientes críticos.',
    howToMeasure: 'Avalia abertura ocular (1-4), resposta verbal (1-5) e motora (1-6). Score total de 3 a 15.',
    requiredLevel: 2
  },
  { 
    term: 'Braden', 
    definition: 'Escala de Risco para Lesão por Pressão.', 
    category: 'escala',
    whatIs: 'Ajuda a prever quais pacientes têm maior risco de desenvolver escaras (LPP).',
    howToMeasure: 'Avalia 6 parâmetros: Percepção sensorial, umidade, atividade, mobilidade, nutrição e fricção.'
  },
  { 
    term: 'MEWS', 
    definition: 'Modified Early Warning Score.', 
    category: 'escala' ,
    whatIs: 'Sistema de pontuação para identificar precocemente a deterioração clínica do paciente.',
    howToMeasure: 'Baseia-se em parâmetros vitais: PA Sistólica, FC, FR, Temperatura e Escala de Coma de Glasgow/AVPU.',
    requiredLevel: 3
  }
    requiredLevel: 3
  },
  {
    term: 'Cincinnati',
    definition: 'Escala de triagem pré-hospitalar para AVC.',
    category: 'escala',
    whatIs: 'Utilizada para identificar rapidamente sinais de acidente vascular cerebral.',
    howToMeasure: 'Avalia: Sorriso (queda facial), Abraço (queda do braço) e Música (fala arrastada).',
    requiredLessonId: 'l_avc'
  },
  {
    term: 'NEWS',
    definition: 'National Early Warning Score.',
    category: 'escala',
    whatIs: 'Sistema de pontuação para determinar a gravidade do paciente e a urgência da resposta clínica.',
    howToMeasure: 'Avalia FR, SatO2, Suporte de O2, PA Sistólica, FC, Nível de Consciência e Temperatura.',
    requiredLevel: 4
  },
  {
    term: 'Melena',
    definition: 'Fezes pretas e com odor fétido (sangue digerido).',
    category: 'sigla',
    details: 'Indica geralmente sangramento no trato gastrointestinal superior (HDA).'
  },
  {
    term: 'Enterorragia',
    definition: 'Eliminação de sangue vivo pelo ânus.',
    category: 'sigla',
    details: 'Indica geralmente sangramento no trato gastrointestinal inferior (HDB).'
  },
  {
    term: 'Manobra de Hamilton',
    definition: 'Massagem uterina bimanual.',
    category: 'sigla',
    details: 'Realizada em emergências de hemorragia pós-parto para estimular a contração do útero.',
    requiredLessonId: 'l_hem_pos'
  }
    requiredLessonId: 'l_hem_pos'
  },
  {
    term: 'PALS',
    definition: 'Pediatric Advanced Life Support.',
    category: 'sigla',
    details: 'Suporte Avançado de Vida em Pediatria. Foca no manejo de PCR em crianças e bebês.'
  },
  {
    term: 'APGAR',
    definition: 'Escala de vitalidade do recém-nascido.',
    category: 'escala',
    whatIs: 'Avalia a adaptação do bebê à vida extrauterina.',
    howToMeasure: 'Realizada no 1º e 5º minuto de vida. Avalia FC, Esforço Respiratório, Tônus, Irritabilidade e Cor.',
    requiredLevel: 2
  },
  {
    term: 'VPP',
    definition: 'Ventilação por Pressão Positiva.',
    category: 'sigla',
    details: 'Principal manobra de reanimação neonatal em sala de parto.'
  },
  {
    term: 'RCP Pediátrica',
    definition: 'Ressuscitação Cardiopulmonar em Crianças.',
    category: 'escala',
    whatIs: 'Técnica de reanimação adaptada ao tamanho e fisiologia da criança.',
    howToMeasure: 'Em bebês: Dois dedos no centro do tórax ou técnica dos dois polegares. Em crianças: 1 ou 2 mãos conforme o porte.',
    requiredLevel: 3
  }
];

// Mantendo SCALES para compatibilidade se necessário, mas unificando no DICTIONARY
export const SCALES = DICTIONARY.filter(d => d.category === 'escala');
