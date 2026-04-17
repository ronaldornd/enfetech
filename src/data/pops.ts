import { POP } from '../types';

export const POPS: POP[] = [
  {
    id: 'pop1',
    title: 'Punção Venosa Periférica',
    description: 'Protocolo para obtenção de acesso venoso com cateter agulhado ou flexível.',
    category: 'Procedimentos',
    objective: 'Obter acesso ao sistema vascular para administração de fármacos, fluidos ou hemoderivados.',
    materials: ['Cateter agulhado/flexível', 'Algodão', 'Álcool 70%', 'Garrote', 'Esparadrapo/Filme', 'Luvas de procedimento'],
    steps: [
      { text: 'Higienizar as mãos.', rationale: 'Prevenir infecção cruzada.' },
      { text: 'Reunir material e explicar o procedimento ao paciente.', rationale: 'Reduzir ansiedade e garantir cooperação.' },
      { text: 'Garrotear o membro e escolher a veia.', rationale: 'Facilitar a visualização e punção.' },
      { text: 'Realizar antissepsia do local.', rationale: 'Remover microbiota transitória.' },
      { text: 'Puncionar com bisel para cima (15-30°).', rationale: 'Garantir entrada na luz do vaso.' },
      { text: 'Observar retorno, retirar garrote e fixar.', rationale: 'Evitar garroteamento prolongado e perda do acesso.' }
    ],
    precautions: [
      'Não realizar mais de duas tentativas no mesmo local.',
      'Evitar membros com fístulas ou do lado de mastectomia.',
      'Trocar conforme protocolo institucional (geralmente 72-96h).'
    ],
    requiredLevel: 1,
    requiredLessonId: 'l_acesso'
  },
  {
    id: 'pop2',
    title: 'Sondagem Vesical de Demora (SVD)',
    description: 'Inserção de sonda urinária em sistema fechado com técnica estéril.',
    category: 'Procedimentos',
    objective: 'Drenagem de urina em pacientes com retenção, monitorização de débito ou cirurgias longas.',
    materials: ['Sonda de Foley', 'Coletor fechado', 'Kit SVD estéril', 'Xilocaína gel', 'Luvas estéreis', 'AD para balonete'],
    steps: [
      { text: 'Realizar higiene íntima prévia.', rationale: 'Reduzir carga bacteriana.' },
      { text: 'Abrir kit e calçar luvas estéreis.', rationale: 'Manter a técnica asséptica.' },
      { text: 'Testar o balonete da sonda.', rationale: 'Garantir integridade do dispositivo.' },
      { text: 'Realizar antissepsia e lubrificar a sonda.', rationale: 'Prevenir trauma e infecção.' },
      { text: 'Introduzir até retorno de urina e insuflar balonete.', rationale: 'Garantir posicionamento vesical.' }
    ],
    precautions: [
      'Sempre manter a bolsa coletora abaixo do nível da bexiga.',
      'Não desconectar o sistema para coleta de exames.',
      'Atentar para sinais de infecção urinária (ITU).'
    ],
    requiredLevel: 3,
    requiredLessonId: 'l_surgical'
  },
  {
    id: 'pop5',
    title: 'Sondagem Nasogástrica (SNG)',
    description: 'Inserção de sonda através das narinas até o estômago.',
    category: 'Procedimentos',
    objective: 'Drenagem de conteúdo gástrico ou administração de dietas/medicações (em curto prazo).',
    materials: ['Sonda de Levine', 'Xilocaína gel', 'Seringa de 20ml', 'Estetoscópio', 'Fita adesiva', 'Copo com água'],
    steps: [
      { text: 'Medir a sonda (Nariz -> Lóbulo da orelha -> Apêndice Xifóide).', rationale: 'Garantir que a extremidade alcance o estômago.' },
      { text: 'Lubrificar a ponta da sonda com xilocaína.', rationale: 'Facilitar a passagem e reduzir desconforto.' },
      { text: 'Introduzir pela narina e pedir para o paciente deglutir.', rationale: 'Facilitar a entrada no esôfago e evitar via aérea.' },
      { text: 'Verificar posicionamento (Ausculta e aspiração).', rationale: 'Evitar administração inadvertida nos pulmões.' }
    ],
    precautions: [
      'Sempre realizar o teste de ausculta antes de qualquer administração.',
      'Manter cabeceira elevada (30-45°) para evitar aspiração.'
    ],
    requiredLevel: 2,
    requiredLessonId: 'l_surgical'
  },
  {
    id: 'pop3',
    title: 'Aspiração de Tubo Orotraqueal (TOT)',
    description: 'Remoção de secreções da árvore traqueobrônquica em pacientes ventilados.',
    category: 'Procedimentos',
    objective: 'Manter a patência das vias aéreas e prevenir pneumonia associada à ventilação (PAV).',
    materials: ['Sonda de aspiração', 'Luva estéril', 'Água destilada', 'Sistema de vácuo', 'Ambú'],
    steps: [
      { text: 'Pre-oxigenar o paciente a 100% de O2.', rationale: 'Prevenir hipoxemia durante a manobra.' },
      { text: 'Calçar luva estéril na mão dominante.', rationale: 'Garantir técnica asséptica e evitar PAV.' },
      { text: 'Introduzir a sonda sem aspirar.', rationale: 'Evitar trauma na mucosa traqueal.' },
      { text: 'Aspirar por no máximo 10-15 segundos com movimentos rotatórios.', rationale: 'Reduzir risco de atelectasias e hipóxia.' }
    ],
    precautions: [
      'Monitorar FC e SatO2 durante todo o processo.',
      'Sempre aspirar a boca APÓS o tubo, nunca o contrário com a mesma sonda.'
    ],
    requiredLevel: 4,
    requiredLessonId: 'l_acesso'
  },
  {
    id: 'pop4',
    title: 'Injeção Intramuscular (Ventro-Glútea)',
    description: 'Técnica de Hochstetter para administração de medicamentos.',
    category: 'Procedimentos',
    objective: 'Administração segura em massa muscular profunda com baixo risco de complicações.',
    materials: ['Seringa graduada', 'Agulha 30x7 ou 25x7', 'Algodão com álcool 70%', 'Luva de procedimento'],
    steps: [
      { text: 'Localizar o ponto formando um V entre os dedos indicador e médio.', rationale: 'Isolar a zona segura de nervos e vasos.' },
      { text: 'Realizar antissepsia em movimento único ou circular.', rationale: 'Reduzir risco de abscesso.' },
      { text: 'Introduzir a agulha em 90° e aspirar.', rationale: 'Conferir se não houve punção acidental de vaso.' },
      { text: 'Injetar lentamente e retirar a agulha.', rationale: 'Melhorar a absorção e reduzir a dor.' }
    ],
    precautions: [
      'Não realizar massagem após a injeção.',
      'Indicado para volumes de até 5ml em adultos.'
    ],
    requiredLessonId: 'l_hoch'
  }
];
