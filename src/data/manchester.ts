export interface ManchesterCase {
  id: string;
  patient: string;
  complaint: string;
  vitals: {
    pa?: string;
    fc?: number;
    fr?: number;
    temp?: string;
    spo2?: number;
  };
  correctColor: 'red' | 'orange' | 'yellow' | 'green' | 'blue';
  feedback: string;
}

export const MANCHESTER_CASES: ManchesterCase[] = [
  {
    id: 'm1',
    patient: 'Masculino, 58 anos',
    complaint: 'Dor torácica em aperto irradiando para braço esquerdo, acompanhada de sudorese fria.',
    vitals: { pa: '150/90', fc: 110, fr: 22, spo2: 94 },
    correctColor: 'orange',
    feedback: 'Dor torácica com sinais de instabilidade ou risco coronariano é classificada como Laranja (Muito Urgente).'
  },
  {
    id: 'm2',
    patient: 'Feminino, 24 anos',
    complaint: 'Ferimento superficial em antebraço após queda de bicicleta. Sem sangramento ativo no momento.',
    vitals: { pa: '120/80', fc: 78, fr: 16, temp: '36.5' },
    correctColor: 'green',
    feedback: 'Ferimentos menores sem sinais de gravidade ou sangramento massivo são Verde (Pouco Urgente).'
  },
  {
    id: 'm3',
    patient: 'Masculino, 4 anos',
    complaint: 'Dificuldade respiratória grave, uso de musculatura acessória e cianose de extremidades.',
    vitals: { fc: 140, fr: 45, spo2: 82 },
    correctColor: 'red',
    feedback: 'Comprometimento imediato da via aérea ou ventilação é Emergência (Vermelho).'
  },
  {
    id: 'm4',
    patient: 'Feminino, 45 anos',
    complaint: 'Febre (38.8°C), dor lombar intensa e disúria há 2 dias.',
    vitals: { pa: '110/70', fc: 95, fr: 20, temp: '38.8' },
    correctColor: 'yellow',
    feedback: 'Sinais de infecção com dor intensa sem instabilidade imediata são Amarelo (Urgente).'
  },
  {
    id: 'm5',
    patient: 'Masculino, 30 anos',
    complaint: 'Dor de garganta leve e coriza há 3 dias. Nega febre.',
    vitals: { pa: '120/80', fc: 72, fr: 14, temp: '36.2' },
    correctColor: 'blue',
    feedback: 'Queixas crônicas ou quadros leves sem sinais de alarme são Não Urgentes (Azul).'
  },
  {
    id: 'm6',
    patient: 'Feminino, 70 anos',
    complaint: 'Perda súbita de força em hemicorpo direito e fala arrastada iniciada há 40 minutos.',
    vitals: { pa: '190/110', fc: 88, fr: 18, spo2: 96 },
    correctColor: 'orange',
    feedback: 'Déficit neurológico súbito dentro da janela trombolítica é Muito Urgente (Laranja).'
  },
  {
    id: 'm7',
    patient: 'Masculino, 19 anos',
    complaint: 'Vítima de atropelamento, inconsciente, com hemorragia femoral massiva "em jato".',
    vitals: { pa: '70/40', fc: 150, fr: 30, spo2: 85 },
    correctColor: 'red',
    feedback: 'Hemorragia exanguinante é prioridade absoluta (Vermelho).'
  },
  {
    id: 'm8',
    patient: 'Feminino, 32 anos',
    complaint: 'Dor abdominal moderada e náuseas após alimentação gordurosa.',
    vitals: { pa: '120/80', fc: 82, fr: 18, temp: '36.8' },
    correctColor: 'green',
    feedback: 'Problema recente de gravidade moderada é Verde.'
  },
  {
    id: 'm9',
    patient: 'Masculino, 65 anos',
    complaint: 'Dispneia moderada e edemas em MMII. Consegue completar frases.',
    vitals: { pa: '140/90', fc: 105, fr: 24, spo2: 90 },
    correctColor: 'yellow',
    feedback: 'Desconforto respiratório moderado é Urgente (Amarelo).'
  },
  {
    id: 'm10',
    patient: 'Feminino, 12 anos',
    complaint: 'Dor de ouvido persistente iniciada há 1 semana.',
    vitals: { temp: '37.0', fc: 80, fr: 16 },
    correctColor: 'blue',
    feedback: 'Problemas persistentes/não agudos são classificados como Azul.'
  }
];
