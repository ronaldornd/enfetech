import { Flashcard } from '../types';

export const FLASHCARDS: Flashcard[] = [
  {
    id: 'fc1',
    moduleId: 'p1',
    question: 'Qual a fórmula para cálculo de gotas em infusões de 1 hora?',
    answer: 'Volume (ml) / Tempo (h) x 3',
    tags: ['Cálculos', 'Gotejamento'],
    requiredLessonId: 'l2'
  },
  {
    id: 'fc2',
    moduleId: 'f1',
    question: 'Quais são os 5 momentos de higienização das mãos?',
    answer: '1. Antes do contato com o paciente; 2. Antes de procedimentos limpos; 3. Após risco de exposição a fluidos; 4. Após contato com o paciente; 5. Após contato com o ambiente próximo.',
    tags: ['Biossegurança', 'Higiene'],
    requiredLessonId: 'l1'
  },
  {
    id: 'fc3',
    moduleId: 'c1',
    question: 'O que significa a sigla CABD na RCP?',
    answer: 'Compressões, Abertura de vias aéreas, Boa ventilação e Desfibrilação.',
    tags: ['Emergência', 'RCP'],
    requiredLessonId: 'l4'
  },
  {
    id: 'fc4',
    moduleId: 'p1',
    question: 'Quantas gotas equivalem a 1 microgota?',
    answer: '3 microgotas equivalem a 1 gota.',
    tags: ['Cálculos'],
    requiredLessonId: 'l2'
  },
  {
    id: 'fc5',
    moduleId: 'w1',
    question: 'Qual a regra de Nagele para DPP?',
    answer: 'Soma-se 7 ao dia, subtrai-se 3 ao mês da DUM (ou soma 9 se mês < 4).',
    tags: ['Obstetrícia'],
    requiredLessonId: 'l5'
  },
  {
    id: 'fc6',
    moduleId: 'f1',
    question: 'Qual a angulação recomendada para injeção Intradérmica?',
    answer: '10 a 15 graus.',
    tags: ['Fundamentos'],
    requiredLessonId: 'l10'
  },
  {
    id: 'fc7',
    moduleId: 'a1',
    question: 'Quais são as 4 fases da cicatrização de feridas?',
    answer: '1. Hemostasia; 2. Inflamatória; 3. Proliferativa; 4. Maturação (ou Remodelação).',
    tags: ['Feridas'],
    requiredLessonId: 'l15'
  },
  {
    id: 'fc8',
    moduleId: 'p1',
    question: 'Qual o antídoto da Heparina?',
    answer: 'Sulfato de Protamina.',
    tags: ['Farmacologia'],
    requiredLessonId: 'l10'
  },
  {
    id: 'fc9',
    moduleId: 'k1',
    question: 'Com que idade a criança deve receber a vacina BCG?',
    answer: 'Preferencialmente ao nascer.',
    tags: ['Pediatria', 'Vacina'],
    requiredLessonId: 'l11'
  },
  {
    id: 'fc10',
    moduleId: 's1',
    question: 'Quais são as diretrizes doutrinárias do SUS?',
    answer: 'Universalidade, Equidade e Integralidade.',
    tags: ['SUS'],
    requiredLessonId: 'l3'
  },
  {
    id: 'fc11',
    moduleId: 'f1',
    question: 'Qual o valor normal da Frequência Cardíaca (Normocardia) em adultos?',
    answer: '60 a 100 batimentos por minuto (bpm).',
    tags: ['Sinais Vitais'],
    requiredLessonId: 'l9'
  },
  {
    id: 'fc12',
    moduleId: 'c1',
    question: 'Na escala de Glasgow, qual o score mínimo e máximo?',
    answer: 'Mínimo 3, Máximo 15.',
    tags: ['Urgência'],
    requiredLessonId: 'l12'
  },
  {
    id: 'fc13',
    moduleId: 'a1',
    question: 'Qual a tríade clássica do Diabetes Mellitus?',
    answer: 'Poliúria, Polidipsia e Polifagia (podendo incluir perda de peso).',
    tags: ['Crônicas'],
    requiredLessonId: 'l7'
  },
  {
    id: 'fc14',
    moduleId: 'p1',
    question: 'Quantos ml tem uma colher de sopa (padrão farm)?',
    answer: '15 ml.',
    tags: ['Cálculos'],
    requiredLessonId: 'l_math'
  },
  {
    id: 'fc15',
    moduleId: 'c1',
    question: 'Qual a profundidade recomendada para compressões torácicas em adultos?',
    answer: '5 a 6 cm.',
    tags: ['Emergência', 'RCP'],
    requiredLessonId: 'l4'
  },
  {
    id: 'fc16',
    moduleId: 'f1',
    question: 'Qual o local preferencial para injeção Intramuscular no glúteo (Ventro-glútea)?',
    answer: 'Técnica de Hochstetter (entre o dedo indicador e médio no grande trocanter).',
    tags: ['Fundamentos'],
    requiredLessonId: 'l10'
  },
  {
    id: 'fc17',
    moduleId: 'p1',
    question: 'Quantas gotas correspondem a 1 ml?',
    answer: '20 gotas.',
    tags: ['Cálculos'],
    requiredLessonId: 'l2'
  },
  {
    id: 'fc18',
    moduleId: 's1',
    question: 'Qual a validade da vacina febre amarela (Cepa 17D) após aberta?',
    answer: '6 horas (manter entre +2°C e +8°C).',
    tags: ['SUS', 'Imunização'],
    requiredLessonId: 'l11'
  },
  {
    id: 'fc19',
    moduleId: 'c1',
    question: 'No protocolo de trauma, o que significa a letra "C" no XABCDE?',
    answer: 'Controle de Hemorragia Externa Grave (Circulação).',
    tags: ['Trauma'],
    requiredLessonId: 'l_trauma_start'
  },
  {
    id: 'fc20',
    moduleId: 'w1',
    question: 'O que é o Método de Leopold?',
    answer: 'Manobras de palpação abdominal para identificar a posição, apresentação e situação fetal.',
    tags: ['Obstetrícia'],
    requiredLessonId: 'l5'
  },
  {
    id: 'fc21',
    moduleId: 'k1',
    question: 'Qual a frequência respiratória normal (eupneia) para um Recém-Nascido?',
    answer: '40 a 60 incursões por minuto (ipm).',
    tags: ['Pediatria'],
    requiredLessonId: 'l14'
  },
  {
    id: 'fc22',
    moduleId: 'a1',
    question: 'Qual o principal fator de risco modificável para o AVC Hemorrágico?',
    answer: 'Hipertensão Arterial Sistêmica não controlada.',
    tags: ['Crônicas'],
    requiredLessonId: 'l7'
  },
  {
    id: 'fc23',
    moduleId: 'm1',
    question: 'O que caracteriza a Alucinação no exame psíquico?',
    answer: 'Percepção real de um objeto inexistente (sem estímulo externo).',
    tags: ['Saúde Mental'],
    requiredLessonId: 'l16'
  },
  {
    id: 'fc24',
    moduleId: 'f1',
    question: 'Qual a temperatura recomendada para o banho de leito?',
    answer: 'Entre 37°C e 40°C (morna/confortável).',
    tags: ['Fundamentos'],
    requiredLessonId: 'l_comfort_pav'
  },
  {
    id: 'fc25',
    moduleId: 'p1',
    question: 'Qual a via de administração da Vacina VIP (Poliomielite Inativada)?',
    answer: 'Via Intramuscular (IM).',
    tags: ['Farmacologia'],
    requiredLessonId: 'l11'
  },
  {
    id: 'fc26',
    moduleId: 'c1',
    question: 'Quantos joules são recomendados para o primeiro choque no DEA?',
    answer: 'Carga pré-configurada pelo aparelho (geralmente 150J a 200J bifásico).',
    tags: ['Emergência'],
    requiredLessonId: 'l4'
  },
  {
    id: 'fc27',
    moduleId: 'f1',
    question: 'O que é o Teste de Allen?',
    answer: 'Teste para avaliar a circulação colateral da mão (artérias radial e ulnar) antes da gasometria.',
    tags: ['Semiologia'],
    requiredLessonId: 'l19'
  },
  {
    id: 'fc28',
    moduleId: 'w1',
    question: 'Qual o nome do primeiro leite produzido pela mãe após o parto?',
    answer: 'Colostro.',
    tags: ['Aleitamento'],
    requiredLessonId: 'l13'
  },
  {
    id: 'fc29',
    moduleId: 'k1',
    question: 'A manobra de Heimlich em bebês (< 1 ano) consiste em:',
    answer: '5 batidas nas costas e 5 compressões torácicas alternadas.',
    tags: ['Emergência'],
    requiredLessonId: 'l6'
  },
  {
    id: 'fc30',
    moduleId: 'a1',
    question: 'Qual a cobertura ideal para feridas com tecido de granulação e pouco exsudato?',
    answer: 'Hidrocoloide ou Ácidos Graxos Essenciais (AGE).',
    tags: ['Feridas'],
    requiredLessonId: 'l15'
  },
  {
    id: 'fc31',
    moduleId: 'e1_mod',
    question: 'Qual a lei que regulamenta o exercício profissional da enfermagem no Brasil?',
    answer: 'Lei nº 7.498/86.',
    tags: ['Ética', 'Legislação'],
    requiredLessonId: 'l_law'
  },
  {
    id: 'fc32',
    moduleId: 'o1',
    question: 'O que é a quimioterapia paliativa?',
    answer: 'Tratamento usado para aliviar sintomas e melhorar a qualidade de vida, sem intenção curativa.',
    tags: ['Oncologia'],
    requiredLessonId: 'l18'
  },
  {
    id: 'fc33',
    moduleId: 'f1',
    question: 'Qual o valor normal do Potássio (K+) no sangue?',
    answer: '3,5 a 5,0 mEq/L.',
    tags: ['Exames', 'Eletrólitos'],
    requiredLessonId: 'l19'
  },
  {
    id: 'fc34',
    moduleId: 'p1',
    question: '1 grama equivale a quantos miligramas?',
    answer: '1.000 mg.',
    tags: ['Cálculos'],
    requiredLessonId: 'l_math'
  },
  {
    id: 'fc35',
    moduleId: 'c1',
    question: 'No choque hipovolêmico, o que acontece com a Pressão Venosa Central (PVC)?',
    answer: 'A PVC diminui.',
    tags: ['Choque', 'Críticos'],
    requiredLessonId: 'l20'
  },
  {
    id: 'fc36',
    moduleId: 'w1',
    question: 'O que é o sinal de Chadwick?',
    answer: 'Coloração azulada ou arroxeada da vulva e mucosa vaginal na gestação.',
    tags: ['Obstetrícia'],
    requiredLessonId: 'l5'
  },
  {
    id: 'fc37',
    moduleId: 'k1',
    question: 'Qual o principal local para punção venosa em recém-nascidos?',
    answer: 'Veias epicranianas ou veias do dorso da mão.',
    tags: ['Pediatria'],
    requiredLessonId: 'l6'
  },
  {
    id: 'fc38',
    moduleId: 'a1',
    question: 'Qual a principal complicação do repouso prolongado no leito?',
    answer: 'Trombose Venosa Profunda (TVP) e Lesão por Pressão (LPP).',
    tags: ['Clínica'],
    requiredLessonId: 'l_elderly'
  },
  {
    id: 'fc39',
    moduleId: 'e1_mod',
    question: 'O que significa imperícia no código de ética?',
    answer: 'Falta de conhecimento técnico ou habilidade para realizar determinada tarefa.',
    tags: ['Ética'],
    requiredLessonId: 'l17'
  },
  {
    id: 'fc40',
    moduleId: 'f1',
    question: 'Qual o jejum recomendado para coleta de Glicemia de Jejum?',
    answer: '8 a 12 horas.',
    tags: ['Exames'],
    requiredLessonId: 'l20'
  },
  {
    id: 'fc_math_1',
    moduleId: 'p1',
    question: '1 miligrama (mg) equivale a quantos microgramas (mcg)?',
    answer: '1.000 mcg.',
    tags: ['Cálculos', 'Matemática'],
    requiredLessonId: 'l_math'
  },
  {
    id: 'fc_thermo_1',
    moduleId: 'p1',
    question: 'Qual a temperatura ideal da Rede de Frio para medicamentos em geladeira?',
    answer: '+2°C a +8°C.',
    tags: ['Farmacologia', 'Conservação'],
    requiredLessonId: 'l_thermo'
  },
  {
    id: 'fc_thermo_2',
    moduleId: 'p1',
    question: 'Onde NÃO se deve armazenar medicamentos termolábeis em uma geladeira comum?',
    answer: 'Na porta da geladeira (devido à instabilidade térmica).',
    tags: ['Farmacologia', 'Segurança'],
    requiredLessonId: 'l_thermo'
  },
  {
    id: 'fc_solutions_1',
    moduleId: 'p1',
    question: 'O que se faz quando a dose prescrita exige concentração maior que a disponível?',
    answer: 'Transformação de soluções (adição de ampolas hipertônicas).',
    tags: ['Cálculos', 'Avançado'],
    requiredLessonId: 'l_solutions'
  },
  {
    id: 'fc_records_1',
    moduleId: 'e1_mod',
    question: 'Qual a conduta ética correta ao cometer um erro na anotação de enfermagem?',
    answer: 'Não rasurar nem usar corretivo. Usar o termo "Digo," e escrever a correção.',
    tags: ['Ética', 'Documentação'],
    requiredLessonId: 'l_records'
  },
  {
    id: 'fc_comfort_pav_1',
    moduleId: 'f1',
    question: 'Qual a concentração de Clorexidina recomendada para higiene oral em pacientes sob ventilação mecânica para prevenir PAV?',
    answer: 'Clorexidina 0,12%.',
    tags: ['Biossegurança', 'PAV'],
    requiredLessonId: 'l_comfort_pav'
  },
  {
    id: 'fc_sae_2024_1',
    moduleId: 'e1_mod',
    question: 'Qual a resolução que atualizou as diretrizes da SAE em 2024?',
    answer: 'Resolução COFEN nº 736/2024.',
    tags: ['Legislação', 'SAE'],
    requiredLessonId: 'l_sae_2024'
  },
  {
    id: 'fc_school_1',
    moduleId: 'e1_mod',
    question: 'A Lei Lucas (13.722/2018) trata de qual assunto na escola?',
    answer: 'Treinamento de primeiros socorros em estabelecimentos de ensino e recreação.',
    tags: ['Legislação', 'Emergência'],
    requiredLessonId: 'l_school_2026'
  },
  {
    id: 'fc_emergency_1',
    moduleId: 'c1',
    question: 'Qual a cor da 1ª gaveta do carro de emergência e o que deve conter?',
    answer: 'Vermelha. Contém medicamentos e drogas de emergência.',
    tags: ['Emergência', 'Gestão'],
    requiredLessonId: 'l_emergency_cart'
  },
  {
    id: 'fc_start_1',
    moduleId: 'c1',
    question: 'No método START de triagem, qual cor indica prioridade imediata?',
    answer: 'Cor Vermelha.',
    tags: ['Urgência', 'Trauma'],
    requiredLessonId: 'l_trauma_start'
  },
  {
    id: 'fc_ident_2',
    moduleId: 'f1',
    question: 'Quais dados NUNCA devem ser usados como único identificador do paciente?',
    answer: 'Número do leito ou número do quarto.',
    tags: ['Segurança', 'Meta 1'],
    requiredLessonId: 'l_ident_safe'
  },
  {
    id: 'fc_surgical_1',
    moduleId: 'a1',
    question: 'Quais são os 3 momentos do Checklist de Cirurgia Segura da OMS?',
    answer: '1. Sign-in (Antes da anestesia); 2. Time-out (Antes da incisão); 3. Sign-out (Antes do paciente sair da sala).',
    tags: ['Cirúrgica', 'Segurança'],
    requiredLessonId: 'l_surgical'
  },
  {
    id: 'f-gaso-1',
    moduleId: 'c1',
    question: 'Qual o valor de referência do HCO3 na gasometria?',
    answer: '22 a 26 mEq/L. Representa o componente metabólico (renal).',
    tags: ['Críticos', 'Gasometria'],
    requiredLessonId: 'l_gaso'
  },
  {
    id: 'f-iam-1',
    moduleId: 'c1',
    question: 'O que significa a sigla MONA no atendimento ao IAM?',
    answer: 'Morfina, Oxigênio, Nitrato e AAS (Antiagregante).',
    tags: ['Críticos', 'Cardiologia'],
    requiredLessonId: 'l_iam'
  },
  {
    id: 'f-iam-2',
    moduleId: 'c1',
    question: 'Qual o tempo máximo recomendado para realizar o ECG na dor torácica?',
    answer: 'Até 10 minutos após a entrada no serviço de emergência.',
    tags: ['Críticos', 'Cardiologia'],
    requiredLessonId: 'l_iam'
  },
  {
    id: 'f-hpp-1',
    moduleId: 'w1',
    question: 'Quais são os "4 Ts" da Hemorragia Pós-parto?',
    answer: 'Tônus, Trauma, Tecido e Trombina.',
    tags: ['Obstetrícia', 'HPP'],
    requiredLessonId: 'l_hem_pos'
  },
  {
    id: 'f-hpp-2',
    moduleId: 'w1',
    question: 'Qual a causa mais comum de HPP?',
    answer: 'Atonia Uterina (Problema no Tônus). Corresponde a 70% dos casos.',
    tags: ['Obstetrícia', 'HPP'],
    requiredLessonId: 'l_hem_pos'
  },
  {
    id: 'f-ped-1',
    moduleId: 'k1',
    question: 'Qual a diferença entre VIP e VOP?',
    answer: 'VIP é a vacina Inativada (Injetável) e VOP é a vacina Oral (Atenuada).',
    tags: ['Pediatria', 'Vacinas'],
    requiredLessonId: 'l_vacinas'
  },
  {
    id: 'f-ped-2',
    moduleId: 'k1',
    question: 'Onde deve ser aplicada a vacina BCG?',
    answer: 'No braço direito, por via intradérmica.',
    tags: ['Pediatria', 'Vacinas'],
    requiredLessonId: 'l_vacinas'
  },
  {
    id: 'f-ped-3',
    moduleId: 'k1',
    question: 'Quais os dias recomendados para o Teste do Pezinho?',
    answer: 'Entre o 3º e o 5º dia de vida.',
    tags: ['Pediatria', 'Triagem'],
    requiredLessonId: 'l_pezinho'
  },
  {
    id: 'f-far-1',
    moduleId: 'p1',
    question: 'Qual a fórmula para cálculo de gotas por minuto (em horas)?',
    answer: 'Volume / (Tempo x 3).',
    tags: ['Farmacologia', 'Cálculos'],
    requiredLessonId: 'l_calc'
  },
  {
    id: 'f-far-2',
    moduleId: 'p1',
    question: '1 ml equivale a quantas microgotas?',
    answer: '60 microgotas.',
    tags: ['Farmacologia', 'Cálculos'],
    requiredLessonId: 'l_calc'
  },
  {
    id: 'f-far-3',
    moduleId: 'p1',
    question: 'Qual insulina tem aspecto leitoso?',
    answer: 'NPH (Ação intermediária).',
    tags: ['Farmacologia', 'Insulinas'],
    requiredLessonId: 'l_insu'
  },
  {
    id: 'f-uti-1',
    moduleId: 'c1',
    question: 'Qual o valor alvo de PAM (Pressão Arterial Média) para perfusão adequada?',
    answer: 'PAM >= 65 mmHg.',
    tags: ['UTI', 'PAM', 'Críticos'],
    requiredLessonId: 'l_uti_pam'
  },
  {
    id: 'f-uti-2',
    moduleId: 'c1',
    question: 'Onde deve ser o ponto zero (eixo flebostático) para nivelar a PAM?',
    answer: 'No 4º Espaço Intercostal, na Linha Axilar Média.',
    tags: ['UTI', 'Procedimentos'],
    requiredLessonId: 'l_uti_pam'
  },
  {
    id: 'f-ped-4',
    moduleId: 'k1',
    question: 'Com quantos meses o bebê deve sustentar o pescoço e apresentar o sorriso social?',
    answer: 'Aos 2 meses.',
    tags: ['Pediatria', 'Marcos'],
    requiredLessonId: 'l_ped_marks'
  },
  {
    id: 'f-calc-3',
    moduleId: 'p1',
    question: 'Qual a fórmula para cálculo de gotas em tempo em horas?',
    answer: 'Volume / (Tempo x 3).',
    tags: ['Cálculos', 'Gotejamento'],
    requiredLessonId: 'l_calc_drop'
  },
  {
    id: 'f-calc-4',
    moduleId: 'p1',
    question: 'Quantas gotas correspondem a 1 ml?',
    answer: '20 gotas (ou 60 microgotas).',
    tags: ['Cálculos', 'Revisão'],
    requiredLessonId: 'l_calc_drop'
  }
];
