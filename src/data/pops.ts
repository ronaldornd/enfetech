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
    requiredLevel: 1
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
    requiredLevel: 3
  }
];
