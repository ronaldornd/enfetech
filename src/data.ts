
import { Module, Flashcard, Scenario, Badge, POP, DictionaryEntry, Pill, Lesson } from './types';

export const MODULES: Module[] = [
  {
    id: 'f1',
    title: 'Fundamentos e Biossegurança',
    type: 'foundation',
    description: 'Bases da enfermagem, higiene, conforto e proteção contra riscos.',
    icon: 'Shield',
    progress: 35
  },
  {
    id: 'p1',
    title: 'Farmacologia e Cálculos',
    type: 'pharmacology',
    description: 'Cálculo de dosagens, vias de administração e farmacocinética.',
    icon: 'Calculator',
    progress: 10
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

export const FLASHCARDS: Flashcard[] = [
  {
    id: 'fc1',
    moduleId: 'p1',
    question: 'Qual a fórmula para cálculo de gotas em infusões de 1 hora?',
    answer: 'Volume (ml) / Tempo (h) x 3',
    tags: ['Cálculos', 'Gotejamento']
  },
  {
    id: 'fc2',
    moduleId: 'f1',
    question: 'Quais são os 5 momentos de higienização das mãos?',
    answer: '1. Antes do contato com o paciente; 2. Antes de procedimentos limpos; 3. Após risco de exposição a fluidos; 4. Após contato com o paciente; 5. Após contato com o ambiente próximo.',
    tags: ['Biossegurança', 'Higiene']
  },
  {
    id: 'fc3',
    moduleId: 'c1',
    question: 'O que significa a sigla CABD na RCP?',
    answer: 'Compressões, Abertura de vias aéreas, Boa ventilação e Desfibrilação.',
    tags: ['Emergência', 'RCP']
  },
  {
    id: 'fc4',
    moduleId: 'p1',
    question: 'Quantas gotas equivalem a 1 microgota?',
    answer: '3 microgotas equivalem a 1 gota.',
    tags: ['Cálculos']
  },
  {
    id: 'fc5',
    moduleId: 'w1',
    question: 'Qual a regra de Nagele para DPP?',
    answer: 'Soma-se 7 ao dia, subtrai-se 3 ao mês da DUM (ou soma 9 se mês < 4).',
    tags: ['Obstetrícia']
  },
  {
    id: 'fc6',
    moduleId: 'f1',
    question: 'Qual a angulação recomendada para injeção Intradérmica?',
    answer: '10 a 15 graus.',
    tags: ['Fundamentos']
  },
  {
    id: 'fc7',
    moduleId: 'a1',
    question: 'Quais são as 4 fases da cicatrização de feridas?',
    answer: '1. Hemostasia; 2. Inflamatória; 3. Proliferativa; 4. Maturação (ou Remodelação).',
    tags: ['Feridas']
  },
  {
    id: 'fc8',
    moduleId: 'p1',
    question: 'Qual o antídoto da Heparina?',
    answer: 'Sulfato de Protamina.',
    tags: ['Farmacologia']
  },
  {
    id: 'fc9',
    moduleId: 'k1',
    question: 'Com que idade a criança deve receber a vacina BCG?',
    answer: 'Preferencialmente ao nascer.',
    tags: ['Pediatria', 'Vacina']
  },
  {
    id: 'fc10',
    moduleId: 's1',
    question: 'Quais são as diretrizes doutrinárias do SUS?',
    answer: 'Universalidade, Equidade e Integralidade.',
    tags: ['SUS']
  },
  {
    id: 'fc11',
    moduleId: 'f1',
    question: 'Qual o valor normal da Frequência Cardíaca (Normocardia) em adultos?',
    answer: '60 a 100 batimentos por minuto (bpm).',
    tags: ['Sinais Vitais']
  },
  {
    id: 'fc12',
    moduleId: 'c1',
    question: 'Na escala de Glasgow, qual o score mínimo e máximo?',
    answer: 'Mínimo 3, Máximo 15.',
    tags: ['Urgência']
  },
  {
    id: 'fc13',
    moduleId: 'a1',
    question: 'Qual a tríade clássica do Diabetes Mellitus?',
    answer: 'Poliúria, Polidipsia e Polifagia (podendo incluir perda de peso).',
    tags: ['Crônicas']
  },
  {
    id: 'fc14',
    moduleId: 'p1',
    question: 'Quantos ml tem uma colher de sopa (padrão farm)?',
    answer: '15 ml.',
    tags: ['Cálculos']
  },
  {
    id: 'fc15',
    moduleId: 'c1',
    question: 'Qual a profundidade recomendada para compressões torácicas em adultos?',
    answer: '5 a 6 cm.',
    tags: ['Emergência', 'RCP']
  },
  {
    id: 'fc16',
    moduleId: 'f1',
    question: 'Qual o local preferencial para injeção Intramuscular no glúteo (Ventro-glútea)?',
    answer: 'Técnica de Hochstetter (entre o dedo indicador e médio no grande trocanter).',
    tags: ['Fundamentos']
  },
  {
    id: 'fc17',
    moduleId: 'p1',
    question: 'Quantas gotas correspondem a 1 ml?',
    answer: '20 gotas.',
    tags: ['Cálculos']
  },
  {
    id: 'fc18',
    moduleId: 's1',
    question: 'Qual a validade da vacina febre amarela (Cepa 17D) após aberta?',
    answer: '6 horas (manter entre +2°C e +8°C).',
    tags: ['SUS', 'Imunização']
  },
  {
    id: 'fc19',
    moduleId: 'c1',
    question: 'No protocolo de trauma, o que significa a letra "C" no XABCDE?',
    answer: 'Controle de Hemorragia Externa Grave (Circulação).',
    tags: ['Trauma']
  },
  {
    id: 'fc20',
    moduleId: 'w1',
    question: 'O que é o Método de Leopold?',
    answer: 'Manobras de palpação abdominal para identificar a posição, apresentação e situação fetal.',
    tags: ['Obstetrícia']
  },
  {
    id: 'fc21',
    moduleId: 'k1',
    question: 'Qual a frequência respiratória normal (eupneia) para um Recém-Nascido?',
    answer: '40 a 60 incursões por minuto (ipm).',
    tags: ['Pediatria']
  },
  {
    id: 'fc22',
    moduleId: 'a1',
    question: 'Qual o principal fator de risco modificável para o AVC Hemorrágico?',
    answer: 'Hipertensão Arterial Sistêmica não controlada.',
    tags: ['Crônicas']
  },
  {
    id: 'fc23',
    moduleId: 'm1',
    question: 'O que caracteriza a Alucinação no exame psíquico?',
    answer: 'Percepção real de um objeto inexistente (sem estímulo externo).',
    tags: ['Saúde Mental']
  },
  {
    id: 'fc24',
    moduleId: 'f1',
    question: 'Qual a temperatura recomendada para o banho de leito?',
    answer: 'Entre 37°C e 40°C (morna/confortável).',
    tags: ['Fundamentos']
  },
  {
    id: 'fc25',
    moduleId: 'p1',
    question: 'Qual a via de administração da Vacina VIP (Poliomielite Inativada)?',
    answer: 'Via Intramuscular (IM).',
    tags: ['Farmacologia']
  },
  {
    id: 'fc26',
    moduleId: 'c1',
    question: 'Quantos joules são recomendados para o primeiro choque no DEA?',
    answer: 'Carga pré-configurada pelo aparelho (geralmente 150J a 200J bifásico).',
    tags: ['Emergência']
  },
  {
    id: 'fc27',
    moduleId: 'f1',
    question: 'O que é o Teste de Allen?',
    answer: 'Teste para avaliar a circulação colateral da mão (artérias radial e ulnar) antes da gasometria.',
    tags: ['Semiologia']
  },
  {
    id: 'fc28',
    moduleId: 'w1',
    question: 'Qual o nome do primeiro leite produzido pela mãe após o parto?',
    answer: 'Colostro.',
    tags: ['Aleitamento']
  },
  {
    id: 'fc29',
    moduleId: 'k1',
    question: 'A manobra de Heimlich em bebês (< 1 ano) consiste em:',
    answer: '5 batidas nas costas e 5 compressões torácicas alternadas.',
    tags: ['Emergência']
  },
  {
    id: 'fc30',
    moduleId: 'a1',
    question: 'Qual a cobertura ideal para feridas com tecido de granulação e pouco exsudato?',
    answer: 'Hidrocoloide ou Ácidos Graxos Essenciais (AGE).',
    tags: ['Feridas']
  },
  {
    id: 'fc31',
    moduleId: 'e1_mod',
    question: 'Qual a lei que regulamenta o exercício profissional da enfermagem no Brasil?',
    answer: 'Lei nº 7.498/86.',
    tags: ['Ética', 'Legislação']
  },
  {
    id: 'fc32',
    moduleId: 'o1',
    question: 'O que é a quimioterapia paliativa?',
    answer: 'Tratamento usado para aliviar sintomas e melhorar a qualidade de vida, sem intenção curativa.',
    tags: ['Oncologia']
  },
  {
    id: 'fc33',
    moduleId: 'f1',
    question: 'Qual o valor normal do Potássio (K+) no sangue?',
    answer: '3,5 a 5,0 mEq/L.',
    tags: ['Exames', 'Eletrólitos']
  },
  {
    id: 'fc34',
    moduleId: 'p1',
    question: '1 grama equivale a quantos miligramas?',
    answer: '1.000 mg.',
    tags: ['Cálculos']
  },
  {
    id: 'fc35',
    moduleId: 'c1',
    question: 'No choque hipovolêmico, o que acontece com a Pressão Venosa Central (PVC)?',
    answer: 'A PVC diminui.',
    tags: ['Choque', 'Críticos']
  },
  {
    id: 'fc36',
    moduleId: 'w1',
    question: 'O que é o sinal de Chadwick?',
    answer: 'Coloração azulada ou arroxeada da vulva e mucosa vaginal na gestação.',
    tags: ['Obstetrícia']
  },
  {
    id: 'fc37',
    moduleId: 'k1',
    question: 'Qual o principal local para punção venosa em recém-nascidos?',
    answer: 'Veias epicranianas ou veias do dorso da mão.',
    tags: ['Pediatria']
  },
  {
    id: 'fc38',
    moduleId: 'a1',
    question: 'Qual a principal complicação do repouso prolongado no leito?',
    answer: 'Trombose Venosa Profunda (TVP) e Lesão por Pressão (LPP).',
    tags: ['Clínica']
  },
  {
    id: 'fc39',
    moduleId: 'e1_mod',
    question: 'O que significa imperícia no código de ética?',
    answer: 'Falta de conhecimento técnico ou habilidade para realizar determinada tarefa.',
    tags: ['Ética']
  },
  {
    id: 'fc40',
    moduleId: 'f1',
    question: 'Qual o jejum recomendado para coleta de Glicemia de Jejum?',
    answer: '8 a 12 horas.',
    tags: ['Exames']
  }
];

export const SCENARIOS: Scenario[] = [
  {
    id: 'scen1',
    title: 'Manejo de Crise Respiratória',
    description: 'Paciente de 55 anos com insuficiência respiratória aguda e hipotensão.',
    initialStepId: 'step1',
    steps: {
      step1: {
        id: 'step1',
        text: 'O paciente apresenta taquicardia (130 bpm) e confusão mental. Qual sua primeira ação?',
        options: [
          { text: 'Ofertar antitérmico via oral', feedback: 'Incorreto. O paciente está instável, a via oral é perigosa e o foco deve ser a estabilização.', isCorrect: false },
          { text: 'Acionar equipe de emergência e preparar acesso venoso', nextStepId: 'step2', feedback: 'Correto! Prioridade é a estabilização e acionamento de ajuda.', isCorrect: true },
          { text: 'Consultar o prontuário pacientemente', feedback: 'Tarde demais. No quadro agudo, a avaliação direta é prioritária.', isCorrect: false }
        ]
      },
      step2: {
        id: 'step2',
        text: 'Acesso garantido. O paciente satura 85% em ar ambiente. Próximo passo?',
        options: [
          { text: 'Iniciar oxigenioterapia (Máscara de Venturi)', feedback: 'Excelente. Melhora da oxigenação é vital.', isCorrect: true, isEnding: true },
          { text: 'Aguardar o médico chegar para decidir', feedback: 'Em emergências, o enfermeiro/técnico deve antecipar cuidados de suporte básico.', isCorrect: false }
        ]
      }
    }
  },
  {
    id: 'scen2',
    title: 'Crise de Hipoglicemia Severa',
    description: 'Paciente diabético tipo 1 encontrado sudoreico e torporoso.',
    initialStepId: 'h1',
    steps: {
      h1: {
        id: 'h1',
        text: 'Paciente apresenta HGT de 35 mg/dL. Ele está inconsciente. Qual a conduta?',
        options: [
          { text: 'Dar suco de laranja com açúcar por via oral', feedback: 'ERRO GRAVE! Risco de broncoaspiração em pacientes inconscientes.', isCorrect: false },
          { text: 'Administrar 40ml de Glicose 50% EV', nextStepId: 'h2', feedback: 'Correto. Reposição imediata via EV é necessária.', isCorrect: true },
          { text: 'Apenas monitorar sinais vitais', feedback: 'Insuficiente. Hipoglicemia severa causa danos cerebrais.', isCorrect: false }
        ]
      },
      h2: {
        id: 'h2',
        text: 'Após a glicose, o paciente desperta e o novo HGT é 95 mg/dL. Próximo passo?',
        options: [
          { text: 'Dar alta para o paciente', feedback: 'Incorreto. É necessário avaliar a causa da crise.', isCorrect: false },
          { text: 'Oferecer lanche (carboidrato complexo) e monitorar', feedback: 'Excelente! Previne o rebote da hipoglicemia.', isCorrect: true, isEnding: true }
        ]
      }
    }
  },
  {
    id: 'scen3',
    title: 'Reação Transfusional Aguda',
    description: 'Paciente em hemodiálise apresentando calafrios e febre durante transfusão.',
    initialStepId: 't1',
    steps: {
      t1: {
        id: 't1',
        text: 'Paciente refere dor lombar e calafrios intensos 10 min após início do CH. Conduta?',
        options: [
          { text: 'Aumentar a velocidade para acabar logo', feedback: 'ERRO FATAL! Pode causar choque anafilático ou hemolítico grave.', isCorrect: false },
          { text: 'Parar a transfusão imediatamente', nextStepId: 't2', feedback: 'Correto. A interrupção imediata é o primeiro passo.', isCorrect: true },
          { text: 'Dar um cobertor e esperar 5 minutos', feedback: 'Perigoso. Sinais flogísticos em transfusão exigem parada imediata.', isCorrect: false }
        ]
      },
      t2: {
        id: 't2',
        text: 'Transfusão parada. Próximo passo crítico?',
        options: [
          { text: 'Manter a via com SF 0,9% (outro equipo)', feedback: 'Correto. Manter o acesso venoso é vital para medicações de emergência.', isCorrect: true, isEnding: true },
          { text: 'Jogar a bolsa de sangue no lixo comum', feedback: 'Incorreto. A bolsa deve ser enviada para análise no banco de sangue.', isCorrect: false }
        ]
      }
    }
  },
  {
    id: 'scen4',
    title: 'Atendimento ao Grande Queimado',
    description: 'Paciente vítima de incêndio com queimaduras de 2º e 3º grau em tronco e braços.',
    initialStepId: 'q1',
    steps: {
      q1: {
        id: 'q1',
        text: 'Paciente apresenta rouquidão e vibrissas queimadas. Qual a PRIORIDADE absoluta?',
        options: [
          { text: 'Lavar as feridas com água gelada', feedback: 'Incorreto. Gelado causa vasoconstrição e hipotermia.', isCorrect: false },
          { text: 'Avaliar via aérea (Risco de Edema de Glote)', nextStepId: 'q2', feedback: 'Correto! Rouquidão e fuligem indicam lesão inalatória grave.', isCorrect: true },
          { text: 'Calcular a superfície queimada primeiro', feedback: 'A regra dos nove é importante, mas a via aérea vem antes.', isCorrect: false }
        ]
      },
      q2: {
        id: 'q2',
        text: 'Vias aéreas garantidas. Qual o fluido de escolha para reposição volêmica?',
        options: [
          { text: 'Ringer Lactato', feedback: 'Perfeito. Ringer Lactato é o padrão para grandes queimados seguindo a fórmula de Parkland.', isCorrect: true, isEnding: true },
          { text: 'Soro Glicosado 5%', feedback: 'Incorreto. Glicose não é o ideal para reposição volêmica inicial em queimados.', isCorrect: false }
        ]
      }
    }
  },
  {
    id: 'scen5',
    title: 'Choque Anafilático Pós-Antibiótico',
    description: 'Paciente inicia infusão de Penicilina e apresenta estridor e urticária.',
    initialStepId: 'a1',
    steps: {
      a1: {
        id: 'a1',
        text: 'Paciente apresenta dificuldade respiratória e edema de lábios 2 min após início do ATB. Primeira ação?',
        options: [
          { text: 'Parar a infusão da medicação imediatamente', nextStepId: 'a2', feedback: 'Correto. Cessar a exposição ao alérgeno é fundamental.', isCorrect: true },
          { text: 'Aplicar hidrocortisona conforme prescrito SN', feedback: 'Incorreto. Primeiro deve-se parar a causa e a adrenalina é a droga de escolha.', isCorrect: false }
        ]
      },
      a2: {
        id: 'a2',
        text: 'Infusão parada. Qual a droga de primeira escolha e via de administração?',
        options: [
          { text: 'Adrenalina IM (Vasto Lateral)', feedback: 'Excelente! A adrenalina IM é a primeira linha no choque anafilático.', isCorrect: true, isEnding: true },
          { text: 'Fenergan (Prometazina) EV', feedback: 'Incorreto. Anti-histamínicos são adjuvantes, não primeira escolha na anafilaxia grave.', isCorrect: false }
        ]
      }
    }
  },
  {
    id: 'scen6',
    title: 'Dilema Ético: Sigilo Profissional',
    description: 'Um adolescente de 16 anos revela que é usuário de drogas, mas pede que não conte aos pais.',
    initialStepId: 'e1',
    steps: {
      e1: {
        id: 'e1',
        text: 'O que o código de ética diz sobre o sigilo de adolescentes?',
        options: [
          { text: 'Contar imediatamente para os pais por segurança', feedback: 'Incorreto. O sigilo deve ser mantido se o adolescente tiver capacidade de discernimento e não houver risco de morte.', isCorrect: false },
          { text: 'Manter o sigilo, desde que não haja risco de vida para si ou para terceiros', nextStepId: 'e2', feedback: 'Correto! A autonomia do adolescente deve ser respeitada dentro dos limites legais.', isCorrect: true },
          { text: 'Publicar o caso no grupo da unidade para pedir dicas', feedback: 'ERRO GRAVE! Quebra de sigilo profissional e exposição do paciente.', isCorrect: false }
        ]
      },
      e2: {
        id: 'e2',
        text: 'Você descobre que ele está com ideação suicida ativa. Qual a conduta agora?',
        options: [
          { text: 'Romper o sigilo e comunicar os responsáveis legalmente', feedback: 'Correto. Havendo risco de vida iminente, o dever de proteção supera o dever de sigilo.', isCorrect: true, isEnding: true },
          { text: 'Ignorar para não perder a confiança dele', feedback: 'Perigoso e antiético. A proteção à vida é a prioridade absoluta.', isCorrect: false }
        ]
      }
    }
  }
];

export const BADGES: Badge[] = [
  { id: 'b1', title: 'Mestre da Regra de Três', description: 'Acertou 10 cálculos seguidos.', icon: 'Award', unlocked: true },
  { id: 'b2', title: 'Sentinela da Biossegurança', description: 'Completou o módulo de higiene sem erros.', icon: 'ShieldCheck', unlocked: true },
  { id: 'b3', title: 'Guru das Pílulas', description: 'Leu 10 pílulas de conhecimento.', icon: 'BookOpen', unlocked: false },
  { id: 'b4', title: 'Socorrista Ágil', description: 'Completou uma simulação de emergência com nota máxima.', icon: 'Zap', unlocked: false }
];

export const POPS: POP[] = [
  {
    id: 'pop1',
    title: 'Higienização das Mãos (Simples)',
    category: 'Biossegurança',
    objective: 'Remover a sujidade e reduzir a carga microbiana das mãos.',
    materials: ['Água corrente', 'Sabonete líquido', 'Papel toalha'],
    steps: [
      { text: 'Abrir a torneira e molhar as mãos, evitando encostar na pia.', rationale: 'Evita a recontaminação por contato com superfícies sujas.' },
      { text: 'Aplicar sabonete suficiente para cobrir toda a superfície das mãos.', rationale: 'Garante a eficácia da detergência.' },
      { text: 'Friccionar as palmas das mãos entre si.', rationale: 'Remoção mecânica de microrganismos.' },
      { text: 'Entrelaçar os dedos e friccionar os espaços interdigitais.', rationale: 'Área de grande acúmulo de colônias bacterianas.' },
      { text: 'Enxaguar as mãos no sentido dos dedos para o punho.', rationale: 'Previne que a água suja retorne para a área mais limpa.' }
    ],
    precautions: [
      'Não usar adornos (anéis, pulseiras).',
      'Manter unhas curtas e sem esmalte descascado.',
      'Duração mínima: 40 a 60 segundos.'
    ]
  },
  {
    id: 'pop2',
    title: 'Identificação Segura do Paciente',
    category: 'Segurança do Paciente',
    objective: 'Garantir que o cuidado seja prestado à pessoa correta.',
    materials: ['Pulseira de identificação', 'Prontuário'],
    steps: [
      { text: 'Verificar o nome completo e data de nascimento na pulseira.', rationale: 'Evita erros por nomes homônimos.' },
      { text: 'Confirmar verbalmente com o paciente (se lúcido).', rationale: 'Dupla checagem ativa.' },
      { text: 'Conferir os dados com a prescrição médica antes de qualquer ação.', rationale: 'Segurança absoluta no processo.' }
    ],
    precautions: [
      'Nunca usar o número do leito como identificador.',
      'Em caso de pulseira ilegível, providenciar substituição imediata.'
    ]
  },
  {
    id: 'pop3',
    title: 'Punção Venosa Periférica',
    category: 'Procedimentos Invasivos',
    objective: 'Acesso ao sistema vascular para infusão de fármacos ou fluidos.',
    materials: ['Algodão com álcool 70%', 'Garrote', 'Dispositivo de punção (Gelco/Scalp)', 'Fixação estéril'],
    steps: [
      { text: 'Garrotear o membro e selecionar a veia.', rationale: 'Facilita a visualização e palpação do vaso.' },
      { text: 'Realizar antissepsia com álcool 70%.', rationale: 'Reduz a microbiota local prevenindo infecções.' },
      { text: 'Puncionar com o bisel voltado para cima (ângulo 15-30º).', rationale: 'Menor trauma ao vaso e melhor penetração.' },
      { text: 'Retirar o garrote após o refluxo sanguíneo.', rationale: 'Evita hemólise e extravasamento.' }
    ],
    precautions: [
      'Evitar membros com fístulas ou após mastectomia.',
      'Trocar o acesso conforme protocolo institucional (geralmente 72-96h).'
    ]
  },
  {
    id: 'pop4',
    title: 'Sondagem Vesical de Demora (SVD) - Feminina',
    category: 'Procedimentos Invasivos',
    objective: 'Drenagem contínua da urina para monitorização ou retenção.',
    materials: ['Kit de cateterismo estéril', 'Sonda Foley', 'Soro fisiológico', 'Xilocaína gel estéril', 'Coletor de sistema fechado'],
    steps: [
      { text: 'Realizar higiene íntima antes do procedimento.', rationale: 'Reduz carga bacteriana externa.' },
      { text: 'Abrir campo estéril e organizar materiais.', rationale: 'Manutenção da técnica asséptica para evitar ITU.' },
      { text: 'Testar o balonete da sonda antes da inserção.', rationale: 'Garante integridade do dispositivo.' },
      { text: 'Afastar grandes e pequenos lábios para identificar o meato uretral.', rationale: 'Vocalização precisa do local de inserção.' },
      { text: 'Introduzir a sonda até o refluxo de urina e mais 2cm.', rationale: 'Garante que o balonete seja inflado dentro da bexiga.' }
    ],
    precautions: [
      'Manter a bolsa coletora sempre abaixo do nível da bexiga.',
      'Procedimento estritamente estéril.'
    ]
  },
  {
    id: 'pop5',
    title: 'Aspiração Traqueal (Sistema Aberto)',
    category: 'Vias Aéreas',
    objective: 'Remover secreções pulmonares em pacientes intubados ou traqueostomizados.',
    materials: ['Sonda de aspiração', 'Luva estéril', 'Aspirador a vácuo', 'Máscara e óculos'],
    steps: [
      { text: 'Hiperoxigenar o paciente a 100% por 1 min.', rationale: 'Previne hipóxia durante o procedimento.' },
      { text: 'Introduzir a sonda sem aspirar.', rationale: 'Evita trauma na mucosa traqueal.' },
      { text: 'Aspirar em movimentos rotatórios por no máx 15 segundos.', rationale: 'Minimiza a atelectasia e desconforto.' }
    ],
    precautions: [
      'Monitorar saturação e FC durante o processo.',
      'Pressão de vácuo entre 80-120 mmHg.'
    ]
  },
  {
    id: 'pop6',
    title: 'Curativo Simples (Ferida Cirúrgica)',
    category: 'Pele e Anexos',
    objective: 'Promover a limpeza e proteção da ferida.',
    materials: ['Soro fisiológico 0,9%', 'Gazes estéreis', 'Fixador adesivo', 'Luva de procedimento'],
    steps: [
      { text: 'Remover o curativo anterior com cuidado.', rationale: 'Evita trauma ao tecido de granulação.' },
      { text: 'Limpar a ferida com SF 0,9% em movimentos únicos.', rationale: 'Remove exsudatos sem espalhar contaminantes.' },
      { text: 'Secar as bordas da ferida.', rationale: 'Previne maceração do tecido perilesional.' }
    ],
    precautions: [
      'Avaliar sinais flogísticos (dor, calor, rubor).',
      'Registrar aspecto da secreção.'
    ]
  },
  {
    id: 'pop7',
    title: 'Eletrocardiograma (ECG) de 12 Derivações',
    category: 'Diagnóstico',
    objective: 'Registrar a atividade elétrica do coração.',
    materials: ['Eletrocardiógrafo', 'Eletrodos ou peras/clipes', 'Gel condutor', 'Gaze'],
    steps: [
      { text: 'Limpar a pele do paciente com gaze e álcool nos locais de contato.', rationale: 'Reduz a impedância e melhora a qualidade do traçado.' },
      { text: 'Posicionar os eletrodos periféricos (R, L, N, F).', rationale: 'Garante a correta aquisição das derivações do plano frontal.' },
      { text: 'Posicionar os eletrodos precordiais (V1 a V6).', rationale: 'V1 (4º EIC D), V2 (4º EIC E), V4 (5º EIC - linha hemiclavicular).' },
      { text: 'Solicitar que o paciente permaneça imóvel e relaxado.', rationale: 'Evita artefatos de tremor muscular.' }
    ],
    precautions: [
      'Remover objetos metálicos se possível.',
      'Identificar o traçado com nome, data e hora.'
    ]
  },
  {
    id: 'pop8',
    title: 'Sondagem Nasoenteral (SNE)',
    category: 'Nutrição e Eliminação',
    objective: 'Inserção de sonda para aporte nutricional a longo prazo.',
    materials: ['Sonda tipo Dobbhoff com fio-guia', 'Soro fisiológico 10ml', 'Xilocaína gel', 'Esparadrapo ou fixador próprio'],
    steps: [
      { text: 'Medir a sonda: Ponta do nariz ao lobo da orelha até apêndice xifoide + 10cm.', rationale: 'Garante que a ponta atinja a região pós-pilórica.' },
      { text: 'Lubrificar a ponta da sonda com xilocaína.', rationale: 'Facilita a passagem e reduz trauma na mucosa.' },
      { text: 'Introduzir a sonda solicitando que o paciente realize deglutição.', rationale: 'Facilita a entrada no esôfago e evita via aérea.' },
      { text: 'Retirar o fio-guia após confirmação radiológica.', rationale: 'CONFIRMAÇÃO POR RAIO-X É OBRIGATÓRIA antes de iniciar dieta.' }
    ],
    precautions: [
      'Nunca forçar a passagem se houver resistência.',
      'Testar pH ou ausculta como medidas secundárias, nunca substitutas ao Raio-X.'
    ]
  },
  {
    id: 'pop9',
    title: 'Lavagem Gástrica (Descontaminação)',
    category: 'Emergência',
    objective: 'Remover substâncias tóxicas do estômago.',
    materials: ['Sonda gástrica de grosso calibre (Faucher)', 'Seringa de 60ml', 'Soro fisiológico 0,9%', 'Luvas e avental'],
    steps: [
      { text: 'Posicionar o paciente em decúbito lateral esquerdo (Trendelenburg leve).', rationale: 'Dificulta a passagem do conteúdo gástrico para o duodeno.' },
      { text: 'Introduzir a sonda e confirmar posição por aspiração de suco gástrico.', rationale: 'Segurança contra aspiração pulmonar.' },
      { text: 'Infundir 200-300ml de SF e aspirar imediatamente.', rationale: 'Efeito de lavagem mecânica sem causar grande distensão gástrica.' }
    ],
    precautions: [
      'Contraindicado em ingestão de corrosivos ou derivados de petróleo.',
      'Monitorar risco de broncoaspiração.'
    ]
  }
];

export const DICTIONARY: DictionaryEntry[] = [
  { id: 's1', term: 'ACM', definition: 'A Critério Médico', category: 'sigla' },
  { id: 's2', term: 'AVP', definition: 'Acesso Venoso Periférico', category: 'sigla' },
  { id: 's3', term: 'BHE', definition: 'Balanço Hídrico Eletrolítico', category: 'sigla' },
  { id: 's4', term: 'CH', definition: 'Concentrado de Hemácias', category: 'sigla' },
  { id: 's5', term: 'DM', definition: 'Diabetes Mellitus', category: 'sigla' },
  { id: 's6', term: 'EV', definition: 'Endovenoso', category: 'sigla' },
  { id: 's7', term: 'HGT', definition: 'Hemoglicoteste (Glicemia Capilar)', category: 'sigla' },
  { id: 's8', term: 'ID', definition: 'Intradérmica', category: 'sigla' },
  { id: 's9', term: 'PA', definition: 'Pressão Arterial', category: 'sigla' },
  { id: 's10', term: 'SN', definition: 'Se Necessário', category: 'sigla' },
  { id: 's11', term: 'SVD', definition: 'Sonda Vesical de Demora', category: 'sigla' },
  { id: 's12', term: 'SNE', definition: 'Sonda Nasoenteral', category: 'sigla' },
  { id: 's13', term: 'SNG', definition: 'Sonda Nasogástrica', category: 'sigla' },
  { id: 's14', term: 'VO', definition: 'Via Oral', category: 'sigla' },
  { id: 's15', term: 'SC', definition: 'Subcutânea', category: 'sigla' },
  { id: 's16', term: 'DUM', definition: 'Data da Última Menstruação', category: 'sigla' },
  { id: 's17', term: 'DPP', definition: 'Data Provável do Parto', category: 'sigla' },
  { id: 's18', term: 'FR', definition: 'Frequência Respiratória', category: 'sigla' },
  { id: 's19', term: 'FC', definition: 'Frequência Cardíaca', category: 'sigla' },
  { id: 's20', term: 'SPO2', definition: 'Saturação Periférica de Oxigênio', category: 'sigla' },
  { id: 's21', term: 'DLP', definition: 'Dislipidemia', category: 'sigla' },
  { id: 's22', term: 'IAM', definition: 'Infarto Agudo do Miocárdio', category: 'sigla' },
  { id: 's23', term: 'AVC', definition: 'Acidente Vascular Cerebral', category: 'sigla' },
  { id: 's24', term: 'DPOC', definition: 'Doença Pulmonar Obstrutiva Crônica', category: 'sigla' },
  { id: 's25', term: 'ICC', definition: 'Insuficiência Cardíaca Congestiva', category: 'sigla' },
  { id: 's26', term: 'PCR', definition: 'Parada Cardiorrespiratória', category: 'sigla' },
  { id: 's27', term: 'RCP', definition: 'Ressuscitação Cardiopulmonar', category: 'sigla' },
  { id: 's28', term: 'UTI', definition: 'Unidade de Terapia Intensiva', category: 'sigla' },
  { id: 's29', term: 'SSVV', definition: 'Sinais Vitais', category: 'sigla' },
  { id: 's30', term: 'VM', definition: 'Ventilação Mecânica', category: 'sigla' },
  { id: 's31', term: 'PVC', definition: 'Pressão Venosa Central', category: 'sigla' },
  { id: 's32', term: 'HDA', definition: 'Hemorragia Digestiva Alta', category: 'sigla' },
  { id: 's33', term: 'AESP', definition: 'Atividade Elétrica Sem Pulso', category: 'sigla' },
  { id: 's34', term: 'FV', definition: 'Fibrilação Ventricular', category: 'sigla' },
  { id: 's35', term: 'TV', definition: 'Taquicardia Ventricular', category: 'sigla' },
  { id: 's36', term: 'IRA', definition: 'Insuficiência Respiratória Aguda (ou Renal)', category: 'sigla' },
  { id: 's37', term: 'SARA', definition: 'Síndrome da Angústia Respiratória Aguda', category: 'sigla' },
  { id: 's38', term: 'DHEG', definition: 'Doença Hipertensiva Específica da Gestação', category: 'sigla' },
  { id: 's39', term: 'HAS', definition: 'Hipertensão Arterial Sistêmica', category: 'sigla' },
  { id: 's40', term: 'PIM', definition: 'Preparo Imediato', category: 'sigla' },
  { id: 's41', term: 'PM', definition: 'Prescrição Médica', category: 'sigla' },
  { id: 's42', term: 'PE', definition: 'Prescrição de Enfermagem', category: 'sigla' },
  { id: 's43', term: 'SAE', definition: 'Sistematização da Assistência de Enfermagem', category: 'sigla' },
  { id: 's44', term: 'FPP', definition: 'Frequência de Pulso Periférico', category: 'sigla' },
  { id: 's45', term: 'GIG', definition: 'Grande para a Idade Gestacional', category: 'sigla' },
  { id: 's46', term: 'PIG', definition: 'Pequeno para a Idade Gestacional', category: 'sigla' },
  { id: 's47', term: 'AIG', definition: 'Adequado para a Idade Gestacional', category: 'sigla' },
  { id: 's48', term: 'DNR', definition: 'Dispneia em Repouso', category: 'sigla' },
  { id: 's49', term: 'MID', definition: 'Membro Inferior Direito', category: 'sigla' },
  { id: 's50', term: 'MSI', definition: 'Membro Superior Esquerdo', category: 'sigla' },
  { 
    id: 'e1', 
    term: 'Escala de Braden', 
    definition: 'Avaliação de risco para Lesão por Pressão (LPP).', 
    category: 'escala',
    whatIs: 'É um instrumento clínico validado que ajuda enfermeiros a identificar pacientes com maior risco de desenvolver úlceras por pressão, permitindo intervenções preventivas precoces.',
    howToMeasure: 'Avalia 6 subescalas: Percepção Sensorial, Umidade, Atividade, Mobilidade, Nutrição, e Fricção/Cisalhamento. Score de 6 a 23. Risco: <9 (Muito Alto), 10-12 (Alto), 13-14 (Moderado), 15-18 (Baixo).'
  },
  { 
    id: 'e2', 
    term: 'Escala de Glasgow (GCS)', 
    definition: 'Avaliação do nível de consciência e gravidade do trauma.', 
    category: 'escala',
    whatIs: 'A Escala de Coma de Glasgow é o padrão-ouro para avaliar o nível de consciência após lesão cerebral aguda. Fornece uma linguagem comum para monitorar a evolução neurológica.',
    howToMeasure: 'Avalia 3 parâmetros: Abertura Ocular (1-4), Resposta Verbal (1-5) e Resposta Motora (1-6). Score Total: 3-15. Importante: Verifique a Reatividade Pupilar (GCS-P) para maior precisão.'
  },
  { 
    id: 'e3', 
    term: 'MEWS (Early Warning Score)', 
    definition: 'Sistema de Alerta Precoce para deterioração clínica.', 
    category: 'escala',
    whatIs: 'Um sistema de pontuação fisiológica (Sinais Vitais) usado para identificar rapidamente pacientes em risco de deterioração clínica ou parada cardiorrespiratória em enfermarias.',
    howToMeasure: 'Soma pontos baseados em: FR, Saturação O2, Temperatura, FC, PAS e Nível de Consciência (AVDI). Pontuação ≥ 5 indica necessidade de avaliação imediata pela equipe médica.'
  },
  { 
    id: 'e4', 
    term: 'Escala de Dor', 
    definition: 'Avaliação da intensidade da dor.', 
    category: 'escala',
    whatIs: 'A dor é o 5º sinal vital. Avaliá-la corretamente permite um manejo analgésico eficaz e humanizado.',
    howToMeasure: '1. EVA (Escala Visual Analógica): 0 a 10. 2. Wong-Baker (Faces): Útil para crianças. 3. CPOT: Para pacientes críticos não verbais.'
  },
  { 
    id: 'e5', 
    term: 'Escala de Morse', 
    definition: 'Avaliação de risco de quedas em pacientes hospitalizados.', 
    category: 'escala',
    whatIs: 'Ferramenta para classificar o paciente quanto ao risco de sofrer uma queda, focando em fatores como histórico prévio e estado mental.',
    howToMeasure: 'Avalia: Histórico de quedas, Diagnóstico secundário, Auxílio na deambulação, Terapia EV, Marcha e Estado mental. Risco Elevado: ≥ 45 pontos.'
  },
  { 
    id: 'e6', 
    term: 'Escala de Ramsay', 
    definition: 'Avaliação do nível de sedação em pacientes críticos.', 
    category: 'escala',
    whatIs: 'Protocolo para monitorar a sedação em UTIs, visando manter o paciente confortável sem excessov de sedação.',
    howToMeasure: 'Varia de 1 a 6: 1. Ansioso; 2. Cooperativo; 3. Responde a comandos; 4. Resposta rápida ao som; 5. Resposta lenta; 6. Sem resposta.'
  },
  {
    id: 'e7',
    term: 'Escala de Fugulin',
    definition: 'Classificação do Grau de Dependência de Enfermagem.',
    category: 'escala',
    whatIs: 'Instrumento para o dimensionamento de pessoal, classificando o paciente de acordo com a carga de trabalho necessária.',
    howToMeasure: 'Avalia 9 áreas (Estado mental, Oxigenação, etc). Define: Cuidado Mínimo, Intermediário, Alta Dependência, Semi-intensivo ou Intensivo.'
  },
  {
    id: 'e8',
    term: 'Escala de Apgar',
    definition: 'Avaliação da vitalidade do recém-nascido (1º e 5º min).',
    category: 'escala',
    whatIs: 'Método clínico de avaliação imediata da adaptação do recém-nascido à vida extra-uterina, realizado no primeiro e no quinto minuto após o nascimento.',
    howToMeasure: 'Avalia 5 sinais (0, 1 ou 2 pontos cada): 1. FC (>100 bpm); 2. Esforço respiratório (Choro forte); 3. Tônus muscular (Flexão ativa); 4. Irritabilidade reflexa (Espirros/Tosse); 5. Cor (Rosado). Score ideal: 7-10.'
  }
];

export const PILLS: Pill[] = [
  {
    id: 'p1',
    title: 'Cálculo de Penicilina Cristalina',
    category: 'Cálculo',
    duration: 3,
    content: 'A penicilina cristalina de 5.000.000 UI vem em frasco-ampola. Ao diluir com 8ml de AD, o volume total será de 10ml (pois o pó ocupa 2ml). Lembre-se: O pó sempre ocupa um volume específico que deve ser somado ao diluente.'
  },
  {
    id: 'p2',
    title: 'Sinais Logísticos da Inflamação',
    category: 'Fundamentos',
    duration: 2,
    content: 'Os 5 sinais clássicos são: Dor, Calor, Rubor, Edema e Perda de Função. Identificar esses sinais precocemente no local da punção é vital para prevenir flebites.'
  },
  {
    id: 'p3',
    title: 'Sons Pulmonares: Murmúrio Vesicular',
    category: 'Semiologia',
    duration: 4,
    content: 'O som normal do pulmão é o murmúrio vesicular (MV) presente. Ruídos adventícios como estertores e sibilos indicam alterações que devem ser comunicadas imediatamente.'
  },
  {
    id: 'p4',
    title: 'Regra dos Nove (Queimaduras)',
    category: 'Emergência',
    duration: 3,
    content: 'Método para estimar SCQ (Superfície Corpórea Queimada). Cabeça: 9%, Tronco Frente: 18%, Tronco Costas: 18%, Braços: 9% cada, Pernas: 18% cada, Genitais: 1%.'
  },
  {
    id: 'p5',
    title: 'Descarte de Perfurocortantes',
    category: 'Biossegurança',
    duration: 2,
    content: 'Agulhas e lâminas devem ser desprezadas na caixa de Descarpack. NUNCA recape agulhas. Preencher a caixa até o limite de 2/3 da sua capacidade.'
  },
  {
    id: 'p6',
    title: 'Interpretação de Gasometria Arterial',
    category: 'Críticos',
    duration: 5,
    content: 'pH normal: 7,35 - 7,45. Abaixo de 7,35 = Acidose. Acima de 7,45 = Alcalose. Verifique pCO2 para causa respiratória e HCO3 para causa metabólica.'
  },
  {
    id: 'p7',
    title: 'Tipos de Insulina e Ações',
    category: 'Farmacologia',
    duration: 4,
    content: 'Lispro/Aspart (Ultra-rápida): Início 15m. Regular (Rápida): Início 30-60m. NPH (Intermediária): Início 1-3h. Glargina (Lenta): Início 1-2h sem pico.'
  },
  {
    id: 'p8',
    title: 'Monitorização ECG Básico',
    category: 'Critical',
    duration: 5,
    content: 'Onda P: Despolarização atrial. Complexo QRS: Despolarização ventricular. Onda T: Repolarização ventricular. Intervalo PR normal: 0,12 a 0,20s.'
  },
  {
    id: 'p9',
    title: 'Escala de Braden: Pontuação',
    category: 'Pele',
    duration: 3,
    content: 'Menor que 9: Risco Muito Alto. 10 a 12: Risco Alto. 13 a 14: Risco Moderado. 15 a 18: Risco Baixo. A prevenção deve ser iniciada imediatamente em riscos moderados.'
  },
  {
    id: 'p10',
    title: 'Tipos de Choque',
    category: 'Críticos',
    duration: 4,
    content: 'Hipovolêmico: Perda de volume. Cardiogênico: Falha na bomba. Distributivo (Séptico, Anafilático, Neurogênico): Vasodilatação. Obstrutivo: Bloqueio mecânico (ex: TEP).'
  },
  {
    id: 'p11',
    title: 'Cálculo de Dopamina',
    category: 'Cálculo',
    duration: 5,
    content: 'Dose (mcg/kg/min) x Peso x 60 / Concentração = Vazão em ml/h. Droga vasoativa exige monitorização constante e uso preferencial em bomba de infusão.'
  },
  {
    id: 'p12',
    title: 'Manutenção de PICC',
    category: 'Procedimentos',
    duration: 3,
    content: 'Curativo deve ser estéril. Flushing com SF 0,9% técnica "push-pause" para evitar obstrução. Troca do curativo filme transparente a cada 7 dias ou se houver sujidade.'
  },
  {
    id: 'p13',
    title: 'Meta 1: Identificação Correta',
    category: 'Segurança',
    duration: 1,
    content: 'Identificar o paciente com pelo menos dois indicadores (Ex: Nome completo e Data de Nascimento). Nunca use o número do quarto ou leito como identificação.'
  },
  {
    id: 'p14',
    title: 'Troca de SVD',
    category: 'Procedimentos',
    duration: 2,
    content: 'A Sonda Vesical de Demora não tem data de troca fixa. Deve ser trocada em caso de obstrução, infecção ou ruptura do sistema fechado.'
  },
  {
    id: 'p15',
    title: 'Cores dos Tubos de Coleta',
    category: 'Laboratório',
    duration: 3,
    content: 'Azul: Citrato (Coagulação). Vermelho/Amarelo: Seco/Gel (Bioquímica). Verde: Heparina. Roxo: EDTA (Hemograma). Cinza: Fluoreto (Glicose).'
  }
];

export const LESSONS: Lesson[] = [
  {
    id: 'l1',
    moduleId: 'f1',
    title: 'Higienização das Mãos e Precauções',
    order: 1,
    content: `
# Higienização das Mãos e Precauções

A higienização das mãos é a medida isolada mais importante para a prevenção das Infecções Relacionadas à Assistência à Saúde (IRAS).

## Os 5 Momentos (OMS)
1. **Antes do contato com o paciente:** Para proteção contra germes portados pelas mãos.
2. **Antes da realização de procedimento limpo/asséptico:** Para evitar a entrada de germes no corpo do paciente (ex: punção).
3. **Após risco de exposição a fluidos corporais:** Para proteção própria e do ambiente.
4. **Após contato com o paciente:** Após toque na pele do paciente ou vestimentas.
5. **Após contato com as áreas próximas ao paciente:** Toque em mobiliários e equipamentos.

## Tipos de Precauções
- **Padrão:** Aplicada a todos os pacientes (luva e avental se risco de sangue/fluidos).
- **Contato:** Para patologias como KPC, Escabiose. Uso de luvas e avental privativo.
- **Gotículas:** (>5 micra) Ex: Meningite, Influenza. Uso de máscara cirúrgica.
- **Aerossóis:** (<5 micra) Ex: Tuberculose, COVID-19. Uso de máscara N95.
`
  },
  {
    id: 'l2',
    moduleId: 'p1',
    title: 'Cálculo de Gotejamento (Gotas e Microgotas)',
    order: 1,
    content: `
# Cálculo de Gotejamento

Dominar o cálculo de infusão é vital para a segurança do paciente e administração correta da terapia prescrita.

## Fórmulas de Gotas (Equipos Macrogotas)
- **Tempo em horas:** Gotas = Volume / (Tempo x 3)
- **Tempo em minutos:** Gotas = (Volume x 20) / Tempo

## Fórmulas de Microgotas
- **Tempo em horas:** Microgotas = Volume / Tempo
- **Tempo em minutos:** Microgotas = (Volume x 60) / Tempo

## Constantes Importantes
- 1 mL = 20 gotas
- 1 mL = 60 microgotas
- 1 gota = 3 microgotas
`
  },
  {
    id: 'l3',
    moduleId: 's1',
    title: 'História e Princípios do SUS',
    order: 1,
    content: `
# Princípios e Diretrizes do SUS

O Sistema Único de Saúde foi criado pela Constituição de 1988 (Art. 196) e regulamentado pelas leis 8.080 e 8.142.

## Princípios Doutrinários
1. **Universalidade:** A saúde é um direito de todos e dever do Estado.
2. **Equidade:** Tratar desigualmente os desiguais (dar mais a quem mais precisa).
3. **Integralidade:** Ver o indivíduo como um todo (prevenção, cura e reabilitação).

## Princípios Organizativos
- **Descentralização:** Redistribuição das responsabilidades.
- **Regionalização:** Organização em redes de atenção.
- **Participação Popular:** Através dos Conselhos e Conferências de Saúde.
`
  },
  {
    id: 'l4',
    moduleId: 'c1',
    title: 'Suporte Básico de Vida (SBV)',
    order: 1,
    content: `
# Suporte Básico de Vida em Adultos

O protocolo de RCP atualizado pela AHA foca na alta qualidade das compressões.

## A Cadeia de Sobrevivência
1. Reconhecimento e acionamento do serviço de emergência.
2. RCP de alta qualidade precoce.
3. Desfibrilação rápida.
4. Suporte Avançado de Vida.
5. Cuidados pós-parada.

## Protocolo C-A-B
- **C (Compressões):** 100 a 120 por minuto. Profundidade de 5 a 6 cm. Permitir o retorno total do tórax.
- **A (Abertura de v):** Garantir via aérea pérvia.
- **B (Boa ventilação):** 2 ventilações para cada 30 compressões (se houver barreira).
`
  },
  {
    id: 'l5',
    moduleId: 'w1',
    title: 'Cuidado no Pré-Natal de Baixo Risco',
    order: 1,
    content: `
# Assistência ao Pré-Natal

O objetivo é assegurar o nascimento de uma criança saudável e garantir o bem-estar materno.

## Exames de Rotina (1º Trimestre)
- Tipagem sanguínea e Fator Rh.
- Hemograma completo.
- Glicemia de jejum.
- VDRL (Sífilis).
- Anti-HIV.
- Sorologia para Toxoplasmose e Hepatite B.

## Vacinação na Gestante
- dTpa (Difteria, Tétano e Coqueluche acelular) - após 20ª semana.
- DT (Dupla Adulto) - se necessário completar esquema.
- Hepatite B.
- Influenza (em qualquer fase).
`
  },
  {
    id: 'l6',
    moduleId: 'k1',
    title: 'Desenvolvimento e Vacinação Infantil',
    order: 1,
    content: `
# Pediatria: Vacinação e Marcos

O calendário vacinal do PNI é referência mundial em cobertura e proteção.

## Vacinas do Recém-Nascido
- **BCG:** Protege contra formas graves de Tuberculose.
- **Hepatite B:** Dose ao nascer.

## Escala de Apgar
Avalia 5 sinais (FC, Respiração, Tônus, Cor e Reflexos).
- **0 a 3:** Asfixia Grave.
- **4 a 6:** Asfixia Moderada.
- **7 a 10:** Boa vitalidade.
`
  },
  {
    id: 'l7',
    moduleId: 'a1',
    title: 'Hipertensão e Diabetes (HAS e DM)',
    order: 1,
    content: `
# Manejo de Doenças Crônicas

O papel da enfermagem na educação e monitoramento é crucial nestas patologias.

## Valores de Referência HAS
- **Normal:** ≤ 120/80 mmHg.
- **Pré-hipertensão:** 121-139 / 81-89 mmHg.
- **Hipertensão Estágio 1:** 140-159 / 90-99 mmHg.

## Diabetes Mellitus (Tipos)
- **Tipo 1:** Destruição das células beta (insulino-dependente).
- **Tipo 2:** Resistência à insulina ou falha na secreção.
- **Gestacional:** Intolerância à glicose iniciada na gestação.
`
  },
  {
    id: 'l8',
    moduleId: 'm1',
    title: 'Reforma Psiquiátrica e RAPS',
    order: 1,
    content: `
# Saúde Mental no Brasil

A Lei 10.216/2001 redirecionou o modelo assistencial do hospitalocentrismo para a rede comunitária.

## Rede de Atenção Psicossocial (RAPS)
- **CAPS:** Centros de Atenção Psicossocial (I, II, III, AD, i).
- **SRT:** Serviços de Residências Terapêuticas.
- **Leitos de Saúde Mental:** Em hospitais gerais.
- **NASF:** Apoio na atenção básica.

## Urgências Psiquiátricas
O manejo deve focar no acolhimento, redução de riscos e desescalonamento verbal antes de qualquer contenção.
`
  },
  {
    id: 'l9',
    moduleId: 'f1',
    title: 'Monitorização de Sinais Vitais (SSVV)',
    order: 2,
    content: `
# Monitorização de Sinais Vitais

Os SSVV são indicadores do estado de saúde e das funções básicas do corpo.

## Temperatura (T)
- Afebril: 36,1°C a 37,2°C.
- Estado Febril: 37,3°C a 37,7°C.
- Febre: > 37,8°C.

## Pulso (P) / Frequência Cardíaca
- Normocardia: 60 - 100 bpm.
- Bradicardia: < 60 bpm.
- Taquicardia: > 100 bpm.

## Respiração (R)
- Eupneia: 12 - 20 ipm.
- Bradipneia: < 12 ipm.
- Taquipneia: > 20 ipm.

## Pressão Arterial (PA)
- Ótima: < 120/80 mmHg.
- Hipertensão: ≥ 140/90 mmHg.
`
  },
  {
    id: 'l10',
    moduleId: 'p1',
    title: 'Vias de Administração de Medicamentos',
    order: 2,
    content: `
# Vias de Administração

A escolha da via depende da rapidez desejada, do tipo de fármaco e das condições do paciente.

## Via Enteral
- **Oral:** Mais segura e econômica.
- **Sublingual:** Absorção rápida, evita metabolismo de primeira passagem.
- **Retal:** Útil em vômitos ou pacientes inconscientes.

## Via Parenteral (Injetáveis)
- **Intradérmica (ID):** 10°-15°. Volume max 0,5ml. Usada para testes e BCG.
- **Subcutânea (SC):** 45° ou 90°. Absorção lenta (ex: insulina).
- **Intramuscular (IM):** 90°. Absorção rápida por ser vascularizada.
- **Endovenosa (EV):** Efeito imediato. Risco acelerado de reações.
`
  },
  {
    id: 'l11',
    moduleId: 's1',
    title: 'Imunização: Calendário PNI',
    order: 2,
    content: `
# Programa Nacional de Imunizações (PNI)

O PNI é um dos maiores do mundo, garantindo acesso gratuito a vacinas essenciais.

## Vacinas do Primeiro Ano
- **2 meses:** Penta, VIP, VORH, Pneumo 10.
- **3 meses:** Meningo C.
- **4 meses:** Segunda dose das vacinas de 2 meses.
- **6 meses:** Penta e VIP (3ª dose).
- **9 meses:** Febre Amarela.

## Rede de Frio
Sistema de conservação, transporte e manipulação das vacinas. Temperaturas ideais:
- Instância local: +2°C a +8°C.
`
  },
  {
    id: 'l12',
    moduleId: 'c1',
    title: 'Suporte Avançado de Vida (SAV)',
    order: 2,
    content: `
# Suporte Avançado de Vida em Cardiologia

Diferente do SBV, o SAV utiliza drogas, vias aéreas avançadas e monitorização contínua.

## Ritmos de Parada (RCP)
- **Chocáveis:** Fibrilação Ventricular (FV) e Taquicardia Ventricular sem pulso (TVSP).
- **Não Chocáveis:** Atividade Elétrica Sem Pulso (AESP) e Assistolia.

## Principais Drogas
- **Adrenalina (Epinefrina):** 1mg a cada 3-5 minutos. Usada em todos os ritmos.
- **Amiodarona:** Antiarrítmico de escolha para ritmos chocáveis refratários (300mg primeira dose).
- **Lidocaína:** Alternativa à amiodarona.
`
  },
  {
    id: 'l13',
    moduleId: 'w1',
    title: 'Trabalho de Parto: Fases e Cuidados',
    order: 2,
    content: `
# Períodos Clínicos do Parto

O acompanhamento do trabalho de parto exige vigilância constante do bem-estar fetal e materno.

## As 4 Fases Clínicas
1. **Dilatação:** Início das contrações rítmicas até 10cm de dilatação.
2. **Expulsivo:** De 10cm até o nascimento do bebê.
3. **Secundamento:** Expulsão da placenta (deve ocorrer em até 30 min).
4. **Greenberg (1ª Hora):** Período de maior risco para hemorragias pós-parto.

## Assistência de Enfermagem
- Monitorar BCF (Batimentos Cardiofetais).
- Incentivar deambulação e métodos não farmacológicos de alívio da dor.
- Avaliar presença de mecônio na bolsa rota.
`
  },
  {
    id: 'l14',
    moduleId: 'k1',
    title: 'Crescimento e Desenvolvimento Infantil',
    order: 2,
    content: `
# Puericultura e Marcos do Desenvolvimento

Acompanhar o crescimento é essencial para detecção precoce de anomalias.

## Marcos Motorores (Gerais)
- **2 meses:** Sustenta a cabeça por curtos períodos.
- **4 meses:** Segura objetos, leva à boca.
- **6 meses:** Senta com apoio, rola.
- **9 meses:** Senta sem apoio, engatinha.
- **12 meses:** Fica em pé, inicia primeiros passos.

## Perímetros Cefálicos
O crescimento do PC é reflexo do desenvolvimento cerebral. Microcefalia ou Macrocefalia devem ser investigadas prontamente.
`
  },
  {
    id: 'l15',
    moduleId: 'a1',
    title: 'Tratamento de Feridas e Coberturas',
    order: 2,
    content: `
# Cicatrização e Escolha da Cobertura

O tratamento de feridas evoluiu do curativo passivo para o meio úmido e interativo.

## Tipos de Tecido
- **Tecido de Granulação:** Vermelho brilhante, indica cura (manter úmido).
- **Esfacelo:** Tecido amarelo/esbranquiçado, deve ser removido.
- **Necrose (Escara):** Tecido preto/duro, exige desbridamento.

## Exemplos de Coberturas
- **Alginato de Cálcio:** Para feridas muito exsudativas (absorção).
- **Hidrogel:** Para desbridamento autolítico (hidratação).
- **Hidrocoloide:** Para feridas limpas com pouco exsudato.
- **Papaína:** Enzima para desbridamento químico.
`
  },
  {
    id: 'l16',
    moduleId: 'm1',
    title: 'Manejo de Crise Psiquiátrica',
    order: 2,
    content: `
# Abordagem na Crise em Saúde Mental

A crise exige uma abordagem rápida, porém empática e menos invasiva possível.

## Escalonamento da Intervenção
1. **Abordagem Verbal:** Sempre a primeira escolha. Tom de voz calmo, ouvir sem julgar.
2. **Abordagem Medicamentosa:** Se o verbal falhar ou houver risco iminente.
3. **Contenção Física/Mecânica:** ÚLTIMO RECURSO. Deve ser supervisionada e registrada, com monitoramento constante de sinais vitais.

## Sinais de Alerta
Agitação psicomotora, heteroagressividade, alucinações de comando e discurso desconexo são sinais de que o paciente precisa de intervenção imediata.
`
  },
  {
    id: 'l17',
    moduleId: 'e1_mod',
    title: 'Código de Ética da Enfermagem (CEE)',
    order: 1,
    content: `
# Ética e Deontologia

A prática de enfermagem é regida pela Resolução COFEN 564/2017.

## Direitos, Deveres e Proibições
- **Direitos:** Exercer a profissão com liberdade, autonomia e ser tratado com respeito.
- **Deveres:** Exercer com justiça, compromisso, honestidade e proteger o sigilo profissional.
- **Proibições:** Executar atividades que não sejam de sua competência técnica ou que causem dano intencional.

## Penalidades
As infrações podem levar a:
1. Advertência verbal.
2. Multa.
3. Censura.
4. Suspensão do exercício (até 90 dias).
5. Cassação do direito ao exercício (por até 30 anos).
`
  },
  {
    id: 'l18',
    moduleId: 'o1',
    title: 'Bases da Quimioterapia (QT)',
    order: 1,
    content: `
# Introdução à Quimioterapia

A QT utiliza agentes citotóxicos para destruir células cancerígenas em divisão rápida.

## Vias de Administração
- **Via Oral:** Conveniente mas exige adesão rigorosa.
- **Via Intravenosa:** Mais comum. Risco de extravasamento (vesicantes vs irritantes).
- **Intratecal:** Administração direto no líquor.

## Toxicidade e Efeitos Colaterais
- **Mielossupressão:** Queda de leucócitos (risco de infecção), plaquetas (risco de sangramento) e hemácias (anemia).
- **Mucosite:** Inflamação da mucosa trato digestivo.
- **Alopecia:** Queda de cabelo reversível.
`
  },
  {
    id: 'l19',
    moduleId: 'f1',
    title: 'Exames Laboratoriais: Valores de Referência',
    order: 3,
    content: `
# Interpretação de Exames Comuns

O enfermeiro deve saber identificar valores críticos para acionar a equipe médica.

## Hemograma
- **Hemoglobina (Hb):** 12 - 16 g/dL (Mulher) | 13 - 18 g/dL (Homem).
- **Leucócitos:** 4.500 a 11.000/mm³.
- **Plaquetas:** 150.000 a 450.000/mm³.

## Eletrólitos
- **Sódio (Na+):** 135 - 145 mEq/L.
- **Potássio (K+):** 3,5 - 5,0 mEq/L.
- **Cálcio (Ca++):** 8,5 - 10,5 mg/dL.

## Função Renal
- **Ureia:** 15 a 45 mg/dL.
- **Creatinina:** 0,7 a 1,3 mg/dL.
`
  },
  {
    id: 'l20',
    moduleId: 'c1',
    title: 'Manejo do Choque (Tipos e Condutas)',
    order: 3,
    content: `
# Fisiopatologia do Choque

O choque é um estado de hipoperfusão tecidual sistêmica grave.

## Classificação
1. **Hipovolêmico:** Perda de sangue ou fluidos (conduta: reposição volêmica).
2. **Cardiogênico:** Falência do coração (conduta: inotrópicos, vasopressores).
3. **Sépitico (Distributivo):** Resposta inflamatória sistêmica à infecção (conduta: antibiótico precoce, fluidos).
4. **Anafilático:** Reação alérgica grave (conduta: Adrenalina IM).

## Sinais Clínicos Gerais
Hipotensão, taquicardia, extremidades frias, oligúria (baixa diurese) e alteração do sensório.
`
  }
];
