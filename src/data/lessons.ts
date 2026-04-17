import { Lesson } from '../types';

export const LESSONS: Lesson[] = [
  {
    id: 'l1',
    moduleId: 'f1',
    title: 'Higienização das Mãos e Precauções',
    order: 1,
    content: `
# Segurança do Paciente e Biossegurança

A higienização das mãos é a medida isolada mais importante para prevenir infecções.

## Os 5 Momentos (OMS)
1. Antes de contato com o paciente.
2. Antes de realizar procedimento limpo/asséptico.
3. Após risco de exposição a fluidos corporais.
4. Após contato com o paciente.
5. Após contato com áreas próximas ao paciente.

## Precauções
- **Padrão:** Higienização das mãos, luvas e avental se houver risco de fluidos.
- **Contato:** Para bactérias multirresistentes (ex: KPC).
- **Gotículas:** Máscara cirúrgica (ex: Influenza, Meningite).
- **Aerossóis:** Máscara N95/PFF2 (ex: Tuberculose, Varicela).
`,
    questions: [
      { id: 'q1_1', question: 'Qual é o momento principal para prevenir a entrada de germes no corpo do paciente?', options: ['Após contato com o paciente', 'Antes de procedimento limpo/asséptico', 'Após contato com áreas próximas', 'Após risco de fluidos'], correctAnswerIndex: 1 },
      { id: 'q1_2', question: 'Qual máscara deve ser usada em precaução por Aerossóis?', options: ['Máscara Cirúrgica', 'Máscara de Tecido', 'Máscara N95 (PFF2)', 'Protetor Facial apenas'], correctAnswerIndex: 2 },
      { id: 'q1_3', question: 'A precaução de Contato é indicada para qual patologia?', options: ['Tuberculose', 'COVID-19', 'Meningite', 'KPC / Escabiose'], correctAnswerIndex: 3 },
      { id: 'q1_4', question: 'Quantos momentos de higienização das mãos são recomendados pela OMS?', options: ['3 momentos', '5 momentos', '7 momentos', '10 momentos'], correctAnswerIndex: 1 },
      { id: 'q1_5', question: 'Na precaução padrão, quando se deve usar luvas?', options: ['Sempre, com todos os pacientes', 'Apenas em cirurgias', 'Sempre que houver risco de contato com sangue/fluidos', 'Apenas se o paciente solicitar'], correctAnswerIndex: 2 }
    ]
  },
  {
    id: 'l2',
    moduleId: 'p1',
    title: 'Cálculo de Gotejamento (Gotas e Microgotas)',
    order: 1,
    content: `
# Cálculo de Gotejamento

O cálculo correto garante que o paciente receba a dose prescrita no tempo certo.

## Fórmulas Macrogotas (gts/min)
- **Tempo em horas:** V / (T * 3)
- **Tempo em minutos:** (V * 20) / T

## Fórmulas Microgotas (mgts/min)
- **Tempo em horas:** V / T
- **Tempo em minutos:** (V * 60) / T

> [!DICA] **Equivalências:** 1 gota = 3 microgotas. 1 mL = 20 gotas = 60 microgotas.
`,
    questions: [
      { id: 'q2_1', question: 'Qual a fórmula de gotas para tempo em horas?', options: ['V / T', 'V / (T x 3)', '(V x 20) / T', '(V x 60) / T'], correctAnswerIndex: 1 },
      { id: 'q2_2', question: 'Quantas microgotas equivalem a 1 gota?', options: ['1 microgota', '2 microgotas', '3 microgotas', '4 microgotas'], correctAnswerIndex: 2 },
      { id: 'q2_3', question: 'Se 1 mL equivale a 20 gotas, quantas microgotas tem em 2 mL?', options: ['40 microgotas', '60 microgotas', '120 microgotas', '240 microgotas'], correctAnswerIndex: 2 },
      { id: 'q2_4', question: 'Qual a fórmula de microgotas quando o tempo é dado em minutos?', options: ['V / T', '(V x 20) / T', '(V x 60) / T', 'V / (T x 3)'], correctAnswerIndex: 2 },
      { id: 'q2_5', question: 'Um soro de 500mL para correr em 8 horas (macrogotas) resulta em aproximadamente quantas gotas por minuto?', options: ['21 gts/min', '42 gts/min', '63 gts/min', '15 gts/min'], correctAnswerIndex: 0 }
    ]
  },
  {
    id: 'l_math',
    moduleId: 'p1',
    title: 'Regra de Três e Transformação de Unidades',
    order: 2,
    content: `
# Matemática e Regra de Três

Muitos erros de medicação podem ser evitados com uma matemática sólida.

## Regra de Três Simples
Utilizada para calcular doses quando a apresentação disponível é diferente da prescrição.

**Exemplo:** Prescrito 250mg de uma droga. Disponível frasco de 1g/10ml.
1. Converta 1g em 1000mg.
2. Monte a regra:
   1000mg --- 10ml
   250mg --- X ml

## Conversão de Unidades
- 1g = 1000mg
- 1mg = 1000mcg
- 1L = 1000ml
`,
    questions: [
      { id: 'qm_1', question: 'Quantos miligramas existem em 1 grama?', options: ['10mg', '100mg', '1000mg', '10000mg'], correctAnswerIndex: 2 },
      { id: 'qm_2', question: 'Um frasco tem 1g em 10ml. Prescrito 250mg. Quantos ml aspirar?', options: ['1 ml', '2,5 ml', '5 ml', '0,5 ml'], correctAnswerIndex: 1 },
      { id: 'qm_3', question: '1 miligrama (mg) equivale a quantos microgramas (mcg)?', options: ['10 mcg', '100 mcg', '1000 mcg', '10000 mcg'], correctAnswerIndex: 2 },
      { id: 'qm_4', question: 'Na regra de três, como as unidades devem ser organizadas?', options: ['Misturadas', 'Alinhadas (unidades iguais na mesma coluna)', 'Alternadas', 'Não importa a ordem'], correctAnswerIndex: 1 },
      { id: 'qm_5', question: 'Em 2 litros de soro, quantos mililitros (ml) temos?', options: ['200 ml', '2000 ml', '500 ml', '1000 ml'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l_thermo',
    moduleId: 'p1',
    title: 'Termolabilidade e Conservação',
    order: 3,
    content: `
# Termolabilidade e Conservação

Medicamentos sensíveis à temperatura exigem controle rigoroso.

## Rede de Frio
- **Unidade de Saúde:** Temperatura ideal entre +2°C e +8°C.
- **Geladeira:** Medicamentos no meio; nunca na porta ou gavetas de legumes.

## Insulinas
- **Lacradas:** Manter refrigerado (+2°C a +8°C).
- **Em uso:** Podem ficar em temperatura ambiente (até 30°C) por até 28 dias.
- **Proibido:** Congelar ou expor ao sol direto.
`,
    questions: [
      { id: 'qt_1', question: 'Qual a temperatura ideal da Rede de Frio para conservação de medicamentos na unidade?', options: ['-5°C a 0°C', '0°C a +10°C', '+2°C a +8°C', '+10°C a +20°C'], correctAnswerIndex: 2 },
      { id: 'qt_2', question: 'Onde os medicamentos termolábeis NUNCA devem ser armazenados na geladeira?', options: ['Na prateleira central', 'Na porta', 'Em gavetas fechadas', 'No congelador'], correctAnswerIndex: 1 },
      { id: 'qt_3', question: 'Quanto tempo, em média, uma insulina aberta pode ficar em temperatura ambiente?', options: ['7 dias', '14 dias', '28 dias', '60 dias'], correctAnswerIndex: 2 },
      { id: 'qt_4', question: 'O que define um medicamento como termolábil?', options: ['A sensibilidade à luz', 'A sensibilidade a variações de temperatura', 'O tempo de validade curto', 'A via de administração'], correctAnswerIndex: 1 },
      { id: 'qt_5', question: 'Qual a temperatura máxima permitida para insulinas em uso?', options: ['20°C', '25°C', '30°C', '40°C'], correctAnswerIndex: 2 }
    ]
  },
  {
    id: 'l_solutions',
    moduleId: 'p1',
    title: 'Transformação de Soluções (Avançado)',
    order: 4,
    content: `
# Transformação de Soluções

Cálculo avançado para atingir a concentration desejada quando ela não está disponível.

## Exemplo: Transformar SG 5% em SG 10%
1. Identifique o que você tem e o que precisa.
2. Calcule quantos gramas de glicose faltam no soro base.
3. Use ampolas de glicose hipertônica (ex: 50%) para completar a diferença.

> [!ALERTA] **Lembrete:** No cálculo de precisão, subtraia o volume das ampolas do soro base para não diluir a solução final além do volume total prescrito.
`,
    questions: [
      { id: 'ls_1', question: 'Para transformar SG 5% em SG 10%, qual o primeiro passo?', options: ['Calcular o déficit de glicose em gramas', 'Aspirar o soro todo', 'Injetar água destilada', 'Calcular o gotejamento'], correctAnswerIndex: 0 },
      { id: 'ls_2', question: 'Uma ampola de Glicose 50% de 20ml contém quantos gramas de glicose?', options: ['5g', '10g', '50g', '2,5g'], correctAnswerIndex: 1 },
      { id: 'ls_3', question: 'Se tenho 500ml de SG 5%, quantos gramas de glicose tenho no frasco?', options: ['5g', '25g', '50g', '100g'], correctAnswerIndex: 1 },
      { id: 'ls_4', question: 'O cálculo de transformação é necessário quando:', options: ['Não temos a concentração prescrita disponível', 'O soro está vencido', 'O paciente é diabético', 'A via de acesso é periférica'], correctAnswerIndex: 0 },
      { id: 'ls_5', question: 'Ao adicionar ampolas hipertônicas, o que deve ser feito com o volume excedente do soro base para precisão máxima?', options: ['Nada, pode deixar', 'Desprezar o volume equivalente ao que será injetado', 'Injetar em outro frasco', 'Pedir nova prescrição'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l3',
    moduleId: 's1',
    title: 'História e Princípios do SUS',
    order: 1,
    content: `
# O Sistema Único de Saúde (SUS)

O SUS é um dos maiores e mais complexos sistemas de saúde pública do mundo.

## Princípios Doutrinários
- **Universalidade:** Saúde é direito de todos.
- **Equidade:** Tratar desigualmente os desiguais (focar na necessidade).
- **Integralidade:** Ver o paciente como um todo, da prevenção à cura.

## Princípios Organizativos
- **Descentralização:** Poder e recursos divididos entre os entes (Município, Estado, União).
- **Regionalização:** Organização por territórios.
- **Participação Popular:** Através dos Conselhos de Saúde.
`,
    questions: [
      { id: 'q3_1', question: 'Qual princípio do SUS afirma que a saúde é um direito de todos e dever do Estado?', options: ['Equidade', 'Universalidade', 'Integralidade', 'Descentralização'], correctAnswerIndex: 1 },
      { id: 'q3_2', question: 'O princípio que prega "tratar desigualmente os desiguais" para diminuir carências é:', options: ['Integralidade', 'Regionalização', 'Equidade', 'Participação Popular'], correctAnswerIndex: 2 },
      { id: 'q3_3', question: 'Quais as leis orgânicas da saúde que regulamentam o SUS?', options: ['8.080 e 8.142', '1.000 e 2.000', 'Construção de 1988 apenas', 'Leis de Diretrizes e Bases'], correctAnswerIndex: 0 },
      { id: 'q3_4', question: 'A redistribuição de responsabilidades entre os entes federados (União, Estados e Municípios) chama-se:', options: ['Hierarquização', 'Descentralização', 'Regionalização', 'Equidade'], correctAnswerIndex: 1 },
      { id: 'q3_5', question: 'A participação popular no SUS ocorre através de:', options: ['Apenas votação para prefeito', 'Conselhos e Conferências de Saúde', 'Manifestações de rua apenas', 'Não há participação popular direta'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l4',
    moduleId: 'c1',
    title: 'Suporte Básico de Vida (SBV)',
    order: 1,
    content: `
# Suporte Básico de Vida (SBV)

Ações imediatas para preservar a vida em casos de parada cardiorrespiratória (PCR).

## Protocolo C-A-B (AHA)
- **C (Compressões):** 100-120/min. Profundidade de 5-6 cm no adulto.
- **A (Abertura de Vias Aéreas):** Manobra de inclinação da cabeça e elevação do queixo.
- **B (Boa Ventilação):** 2 ventilações a cada 30 compressões (30:2).

## O DEA
O Desfibrilador Externo Automático deve ser utilizado o mais rápido possível. Ao chegar:
1. Ligue o aparelho.
2. Posicione as pás conforme desenho.
3. Siga as instruções de voz.
`,
    questions: [
      { id: 'q4_1', question: 'Qual a profundidade recomendada para compressões no adulto (AHA)?', options: ['2 a 3 cm', '4 a 5 cm', '5 a 6 cm', 'Mais de 8 cm'], correctAnswerIndex: 2 },
      { id: 'q4_2', question: 'No protocolo C-A-B, o que significa a letra C?', options: ['Consciência', 'Compressões', 'Choque', 'Circulação Aérea'], correctAnswerIndex: 1 },
      { id: 'q4_3', question: 'Qual a frequência das compressões torácicas no SBV?', options: ['80 a 100 /min', '100 a 120 /min', '120 a 140 /min', 'Exatamente 100 /min'], correctAnswerIndex: 1 },
      { id: 'q4_4', question: 'Qual a relação compressão/ventilação no adulto com 1 socorrista?', options: ['15:2', '30:2', '30:5', 'Apenas compressões'], correctAnswerIndex: 1 },
      { id: 'q4_5', question: 'O que deve ser feito imediatamente após a chegada e posicionamento do DEA?', options: ['Continuar compressões por mais 5 min', 'Ligar o aparelho e seguir as instruções de voz', 'Verificar o pulso novamente', 'Chamar o médico'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l5',
    moduleId: 'w1',
    title: 'Cuidado no Pré-Natal de Baixo Risco',
    order: 1,
    content: `
# Pré-Natal de Baixo Risco

O acompanhamento adequado reduz drasticamente a morbimortalidade materna e neonatal.

## Vacinação na Gestante
- **dTpa:** A partir da 20ª semana (protege o bebê contra coqueluche).
- **Hepatite B:** Conforme histórico.
- **Influenza:** Em qualquer período da gestação.

## Exames de Rotina (1º Trimestre)
- VDRL (Sífilis).
- Anti-HIV.
- Glicemia de jejum.
- Tipagem sanguínea e Fator Rh.
- Hemograma.
`,
    questions: [
      { id: 'q5_1', question: 'Qual vacina deve ser aplicada na gestante após a 20ª semana?', options: ['BCG', 'Hepatite B apenas', 'dTpa (Difteria, Tétano e Coqueluche)', 'Febre Amarela'], correctAnswerIndex: 2 },
      { id: 'q5_2', question: 'Qual destes exames NÃO faz parte da rotina básica do 1º trimestre?', options: ['VDRL', 'Glicemia de jejum', 'Anti-HIV', 'Ultrassom de 4D'], correctAnswerIndex: 3 },
      { id: 'q5_3', question: 'O objetivo principal do Pré-Natal é:', options: ['Apenas realizar o parto', 'Garantir o bem-estar materno e fetal', 'Escolher o nome do bebê', 'Vender fórmulas infantis'], correctAnswerIndex: 1 },
      { id: 'q5_4', question: 'A vacina da Influenza pode ser aplicada em qual fase da gestação?', options: ['Apenas no 3º trimestre', 'Apenas antes de engravidar', 'Em qualquer fase da gestação', 'É proibida para gestantes'], correctAnswerIndex: 2 },
      { id: 'q5_5', question: 'O VDRL é utilizado para rastreio de qual patologia?', options: ['AIDS', 'Hepatite', 'Sífilis', 'Diabetes'], correctAnswerIndex: 2 }
    ]
  },
  {
    id: 'l6',
    moduleId: 'k1',
    title: 'Desenvolvimento e Vacinação Infantil',
    order: 1,
    content: `
# Puericultura e Vacinação Infantil

O seguimento da criança foca no crescimento, desenvolvimento e proteção.

## Escala de Apgar
Avalia a adaptação do RN logo após o nascimento (1º e 5º minutos).
- **Sinais:** Frequência cardíaca, respiração, tônus muscular, irritabilidade reflexa e cor.
- **Score 8-10:** Normal.
- **Score 0-3:** Asfixia grave.

## Vacinas Essenciais
- **Ao Nascer:** BCG e Hepatite B.
- **Aos 2 meses:** Penta (DTP+Hib+HepB), VIP (Poliomielite inativada), VORH (Rotavírus), Pneumo 10.
`,
    questions: [
      { id: 'q6_1', question: 'A vacina BCG protege contra:', options: ['Poliomielite', 'Hepatite', 'Formas graves de Tuberculose', 'Varicela'], correctAnswerIndex: 2 },
      { id: 'q6_2', question: 'Um Apgar de 8 no 1º minuto indica:', options: ['Asfixia grave', 'Asfixia moderada', 'Boa vitalidade', 'Necessidade de intubação imediata'], correctAnswerIndex: 2 },
      { id: 'q6_3', question: 'A escala de Apgar avalia quantos sinais?', options: ['3 sinais', '5 sinais', '7 sinais', '10 sinais'], correctAnswerIndex: 1 },
      { id: 'q6_4', question: 'Qual vacina o recém-nascido recebe ainda na maternidade?', options: ['Penta', 'Febre Amarela', 'BCG e Hepatite B', 'Meningo C'], correctAnswerIndex: 2 },
      { id: 'q6_5', question: 'Em relação ao Apgar, o que significa um score de 0 a 3?', options: ['Vitalidade excelente', 'Asfixia grave', 'Criança dormindo', 'Normalidade'], correctAnswerIndex: 1 }
    ]
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
    title: 'Saúde Mental no Brasil',
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
# Tratamento de Feridas e Coberturas

O curativo ideal deve manter a umidade, permitir trocas gasosas e proteger contra infecções.

## Tipos de Tecido
- **Granulação:** Vermelho brilhante, indica cicatrização.
- **Esfacelo:** Amarelo/esbranquiçado, tecido desvitalizado úmido.
- **Necrose/Escara:** Tecido morto, preto e duro.

## Coberturas Comuns
- **Alginato de Cálcio:** Para feridas com muito exsudato (sangramento/secreção).
- **Hidrocoloide:** Para feridas com pouca ou média secreção.
- **Hidrogel:** Para hidratar feridas secas e promover desbridamento autolítico.
- **Papaína:** Enzima que auxilia no desbridamento químico.
`,
    questions: [
      { id: 'q15_1', question: 'Qual cobertura é indicada para feridas altamente exsudativas visando a absorção?', options: ['Hidrogel', 'Hidrocoloide', 'Alginato de Cálcio', 'Filme Transparente'], correctAnswerIndex: 2 },
      { id: 'q15_2', question: 'O tecido de granulação é caracterizado por qual cor?', options: ['Preto', 'Amarelo', 'Vermelho brilhante', 'Cinza'], correctAnswerIndex: 2 },
      { id: 'q15_3', question: 'A Papaína é uma enzima utilizada para qual finalidade em feridas?', options: ['Apenas hidratação', 'Desbridamento químico', 'Proteção da borda', 'Diminuir o sangramento'], correctAnswerIndex: 1 },
      { id: 'q15_4', question: 'Para uma ferida seca com necessidade de desbridamento autolítico, qual a melhor escolha?', options: ['Alginato de Cálcio', 'Hidrogel', 'Carvão Ativado', 'Gaze Seca'], correctAnswerIndex: 1 },
      { id: 'q15_5', question: 'O esfacelo é um tecido de qual aspecto?', options: ['Duro e preto', 'Amarelo/esbranquiçado e úmido', 'Vermelho e brilhante', 'Rosa e seco'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l16',
    moduleId: 'm1',
    title: 'Manejo de Crise Psiquiátrica',
    order: 2,
    content: `
# Manejo de Crise Psiquiátrica

A crise exige intervenção rápida, segura e humanizada, focada no desescalonamento.

## Princípios de Abordagem
1. **Abordagem Verbal:** Sempre a primeira escolha. Falar calmamente e ouvir.
2. **Abordagem Medicamentosa:** Conforme prescrição, se a verbal falhar.
3. **Contenção Física/Mecânica:** Último recurso para evitar auto ou heteroagressividade.

## Cuidados na Contenção
- Monitorar sinais vitais e nível de consciência constantemente.
- Garantir que a contenção não comprometa a circulação ou respiração.
- Registrar detalhadamente o motivo e o tempo de duração.
`,
    questions: [
      { id: 'q16_1', question: 'Qual deve ser a primeira escolha de abordagem em uma crise psiquiátrica?', options: ['Contenção física', 'Abordagem verbal empática', 'Sedação imediata', 'Isolamento'], correctAnswerIndex: 1 },
      { id: 'q16_2', question: 'A contenção mecânica é considerada:', options: ['A primeira medida de segurança', 'Um recurso de rotina', 'O último recurso, exigindo monitoramento constante', 'Proibida em qualquer situação'], correctAnswerIndex: 2 },
      { id: 'q16_3', question: 'Qual destes é um sinal de alerta para intervenção imediata em saúde mental?', options: ['Paciente dormindo', 'Engajamento em atividades', 'Agitação psicomotora e agressividade', 'Choro silencioso'], correctAnswerIndex: 2 },
      { id: 'q16_4', question: 'Durante a contenção física, o que deve ser monitorado constantemente?', options: ['Apenas a cor da roupa', 'Sinais vitais e nível de consciência', 'Apenas a hora do dia', 'Nada, deve-se deixar o paciente sozinho'], correctAnswerIndex: 1 },
      { id: 'q16_5', question: 'A abordagem medicamentosa na crise deve ser feita:', options: ['A critério do técnico, sem ordem médica', 'Sempre antes da fala', 'Se a abordagem verbal falhar ou houver risco iminente (sob prescrição)', 'Apenas se o paciente pedir'], correctAnswerIndex: 2 }
    ]
  },
  {
    id: 'l17',
    moduleId: 'e1_mod',
    title: 'Código de Ética da Enfermagem (CEE)',
    order: 1,
    content: `
# Ética e Legislação (Res. 564/2017)

O Código de Ética norteia a conduta profissional, equilibrando direitos, deveres e proibições.

## Direitos
- Exercer a profissão com liberdade e autonomia.
- Recusar-se a executar atividades que não sejam de sua competência técnica ou que ofereçam risco.

## Deveres
- Assegurar uma assistência de enfermagem livre de danos por imperícia, imprudência ou negligência.
- Respeitar o sigilo profissional.

## Proibições
- Negar assistência em casos de urgência/emergência.
- Administrar medicamentos sem conhecer a ação da droga ou sem prescrição completa.
`,
    questions: [
      { id: 'q17_1', question: 'Qual a resolução atual que rege o Código de Ética da Enfermagem?', options: ['8.080', '564/2017', '7.498', '13.722'], correctAnswerIndex: 1 },
      { id: 'q17_2', question: 'Qual das opções abaixo é considerada uma PENALIDADE no CEE?', options: ['Elogio formal', 'Suspensão do exercício', 'Aumento salarial', 'Licença prêmio'], correctAnswerIndex: 1 },
      { id: 'q17_3', question: 'Exercer a profissão com liberdade e autonomia é um:', options: ['Dever', 'Direito', 'Proibição', 'Favor'], correctAnswerIndex: 1 },
      { id: 'q17_4', question: 'Qual o tempo máximo de suspensão do exercício profissional?', options: ['30 dias', '90 dias', '1 ano', '10 anos'], correctAnswerIndex: 1 },
      { id: 'q17_5', question: 'Proteger o sigilo profissional é um:', options: ['Direito', 'Dever', 'Proibição', 'Opção'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l18',
    moduleId: 'o1',
    title: 'Bases da Quimioterapia (QT)',
    order: 1,
    content: `
# Oncologia e Quimioterapia

A assistência de enfermagem foca no manejo de efeitos colaterais e segurança na administração.

## Efeitos Colaterais Comuns
- **Mielossupressão:** Queda de células do sangue (risco de infecção e anemia).
- **Mucosite:** Inflamação das mucosas do trato digestivo.
- **Alopecia:** Queda de cabelo.

## Toxicidade Hematológica
- **Leucopenia:** Baixo número de glóbulos brancos.
- **Plaquetopenia:** Baixo número de plaquetas (risco de sangramento).

## Medicamentos Vesicantes
São drogas que podem causar necrose tecidual se houver extravasamento. Exigem vigilância extrema do acesso venoso.
`,
    questions: [
      { id: 'q18_1', question: 'A queda de leucócitos no sangue (mielossupressão) aumenta o risco de:', options: ['Hemorragia', 'Infecção', 'Anemia', 'Diabetes'], correctAnswerIndex: 1 },
      { id: 'q18_2', question: 'Qual via de administração de QT é feita diretamente no líquor?', options: ['Intravenosa', 'Intratecal', 'Oral', 'Subcutânea'], correctAnswerIndex: 1 },
      { id: 'q18_3', question: 'A inflamação da mucosa do trato digestivo chama-se:', options: ['Alopecia', 'Mucosite', 'Gastrite apenas', 'Mielossupressão'], correctAnswerIndex: 1 },
      { id: 'q18_4', question: 'Medicamentos que podem causar necrose se extravasarem são chamados de:', options: ['Irritantes', 'Vesicantes', 'Comuns', 'Isotônicos'], correctAnswerIndex: 1 },
      { id: 'q18_5', question: 'A plaquetopenia (queda de plaquetas) indica risco de:', options: ['Desidratação', 'Febre', 'Sangramento', 'Falta de ar'], correctAnswerIndex: 2 }
    ]
  },
  {
    id: 'l19',
    moduleId: 'f1',
    title: 'Exames Laboratoriais: Valores de Referência',
    order: 3,
    content: `
# Interpretação de Exames Laboratoriais

Conhecer os valores de referência permite ao técnico antecipar cuidados e reportar alertas.

## Eletrólitos
- **Sódio (Na+):** 135 - 145 mEq/L.
- **Potássio (K+):** 3,5 - 5,0 mEq/L.

## Função Renal
- **Creatinina:** 0,7 - 1,3 mg/dL.
- **Ureia:** 15 - 45 mg/dL.

## Hemograma (Básico)
- **Leucócitos:** 4.500 - 11.000 /mm³.
- **Plaquetas:** 150.000 - 450.000 /mm³.
- **Hemoglobina (Hb):** 12 - 16 g/dL (variação por sexo).
`,
    questions: [
      { id: 'q19_1', question: 'Qual o valor de referência normal para o Potássio (K+)?', options: ['135 - 145 mEq/L', '3,5 - 5,0 mEq/L', '8,5 - 10,5 mg/dL', '0,7 - 1,3 mg/dL'], correctAnswerIndex: 1 },
      { id: 'q19_2', question: 'Valores elevados de Ureia e Creatinina sugerem alteração em qual sistema?', options: ['Cardíaco', 'Hepático', 'Renal', 'Respiratório'], correctAnswerIndex: 2 },
      { id: 'q19_3', question: 'Qual a faixa normal de leucócitos no hemograma?', options: ['1.000 a 4.000', '4.500 a 11.000', '11.000 a 20.000', '150.000 a 450.000'], correctAnswerIndex: 1 },
      { id: 'q19_4', question: 'O sódio (Na+) tem qual valor de referência normal?', options: ['3,5 a 5,0', '135 a 145', '100 a 110', '7 a 14'], correctAnswerIndex: 1 },
      { id: 'q19_5', question: 'Plaquetas abaixo de 100.000/mm³ configuram:', options: ['Leucocitose', 'Plaquetopenia', 'Policitemia', 'Anemia'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l20',
    moduleId: 'c1',
    title: 'Manejo do Choque (Tipos e Condutas)',
    order: 3,
    content: `
# Choque e Instabilidade Hemodinâmica

O choque é um estado de hipoperfusão tecidual que pode levar à falência de órgãos.

## Tipos de Choque
1. **Hipovolêmico:** Perda de volume (sangue ou fluidos).
2. **Cardiogênico:** Falha na bomba cardíaca.
3. **Distributivo (Séptico/Anafilático):** Vasodilatação sistêmica severa.

## Sinais de Alerta
- Hipotensão arterial.
- Taquicardia compensatória.
- Oligúria (baixa diurese).
- Extremidades frias e cianóticas (exceto no choque séptico inicial).

## Condutas de Emergência
- Garantir acessos venosos calibrosos.
- Administração rápida de fluidos (se indicado).
- Uso de drogas vasoativas (adrenalina, noradrenalina).
`,
    questions: [
      { id: 'q20_1', question: 'Qual o tratamento prioritário imediato no Choque Anafilático?', options: ['Soro Fisiológico EV', 'Adrenalina (Epinefrina) IM', 'Corticoides apenas', 'Oxigênio'], correctAnswerIndex: 1 },
      { id: 'q20_2', question: 'O choque causado por perda massiva de sangue é o:', options: ['Cardiogênico', 'Hipovolêmico', 'Séptico', 'Neurogênico'], correctAnswerIndex: 1 },
      { id: 'q20_3', question: 'Qual destes é um sinal clássico de choque?', options: ['Hipertensão e Bradicardia', 'Hipotensão e Taquicardia', 'Pele quente e corada', 'Fome excessiva'], correctAnswerIndex: 1 },
      { id: 'q20_4', question: 'No Choque Séptico, qual a intervenção prioritária além de fluidos?', options: ['Cirurgia imediata', 'Antibiótico precoce', 'Sedação', 'Banho frio'], correctAnswerIndex: 1 },
      { id: 'q20_5', question: 'Hipotensão acompanhada de extremidades frias e oligúria indica:', options: ['Estado de alerta', 'Boa perfusão', 'Hipoperfusão tecidual (Choque)', 'Sono profundo'], correctAnswerIndex: 2 }
    ]
  },
  {
    id: 'l_law',
    moduleId: 'e1_mod',
    title: 'Lei do Exercício Profissional (7.498/86)',
    order: 2,
    content: `
# Regulamentação da Profissão

A Lei 7.498/86 e o Decreto 94.406/87 dispõem sobre a regulamentação do exercício da enfermagem.

## Categorias Profissionais
- **Enfermeiro:** Nível superior. Atividades privativas (direção, consultoria, diagnósticos).
- **Técnico de Enfermagem:** Nível médio. Atividades assistenciais sob supervisão.
- **Auxiliar de Enfermagem:** Nível médio fundamental. Atividades repetitivas sob supervisão.

## Atividades Privativas do Enfermeiro
- Consultoria, auditoria e emissão de parecer sobre matéria de enfermagem.
- Planejamento, organização, coordenação e avaliação dos serviços de enfermagem.
- Cuidados direta de enfermagem a pacientes graves com risco de morte.
- Cuidados de maior complexidade técnica que exijam conhecimentos de base científica.
`,
    questions: [
      { id: 'ql_1', question: 'Qual a lei básica que regulamenta o exercício da enfermagem no Brasil?', options: ['8.080/90', '7.498/86', '5.105/66', '10.216/01'], correctAnswerIndex: 1 },
      { id: 'ql_2', question: 'Qual destas atividades é PRIVATIVA do enfermeiro?', options: ['Administrar medicação', 'Curativo simples', 'Diagnóstico de Enfermagem', 'Coleta de sangue'], correctAnswerIndex: 2 },
      { id: 'ql_3', question: 'O técnico de enfermagem exerce suas atividades de nível médio sob:', options: ['Autonomia total', 'Supervisão de um médico', 'Supervisão do enfermeiro', 'Sem supervisão'], correctAnswerIndex: 2 },
      { id: 'ql_4', question: 'A enfermagem pode prescrever medicamentos de forma autônoma?', options: ['Sim, qualquer um', 'Não, em nenhuma hipótese', 'Apenas em programas de saúde pública e protocolos estabelecidos', 'Apenas se o paciente estiver grave'], correctAnswerIndex: 2 },
      { id: 'ql_5', question: 'Qual decreto regulamenta a Lei 7.498/86?', options: ['Decreto 94.406/87', 'Decreto 1.000/90', 'Resolução 564', 'Lei 8.142'], correctAnswerIndex: 0 }
    ]
  },
  {
    id: 'l_records',
    moduleId: 'e1_mod',
    title: 'Registros e Anotações de Enfermagem',
    order: 3,
    content: `
# Anotações de Enfermagem

O registro é a prova legal da assistência prestada e o principal canal de comunicação da equipe.

## Boas Práticas
- **Legibilidade:** Imprescindível para a segurança.
- **Termos Técnicos:** Usar terminologia correta (ex: Hemacúria, Disúria, Anúria).
- **Sem Rasuras:** Erros devem ser corrigidos com "digo,". Nunca usar corretivo.
- **Assinatura:** Identificação clara do profissional (nome e número do COREN).

## Exemplos de Termos
- **Afasia:** Dificuldade de fala.
- **Emesis:** Vômito.
- **Melena:** Sangue nas fezes (aspecto borra de café).
`,
    questions: [
      { id: 'qr_1', question: 'Como deve ser corrigido um erro em uma anotação de enfermagem?', options: ['Usando corretivo líquido', 'Riscando forte por cima', 'Usando o termo "Digo," e escrevendo o correto após', 'Rasgando a folha'], correctAnswerIndex: 2 },
      { id: 'qr_2', question: 'Qual destes é um termo técnico correto para sangue na urina?', options: ['Hematúria', 'Glicosúria', 'Disúria', 'Anúria'], correctAnswerIndex: 0 },
      { id: 'qr_3', question: 'O que é obrigatório ao final de cada registro de enfermagem?', options: ['Apenas a data', 'Assinatura e carimbo do profissional', 'O nome do médico', 'Nada é obrigatório'], correctAnswerIndex: 1 },
      { id: 'qr_4', question: 'A anotação de enfermagem deve seguir qual ordem?', options: ['Alfabética', 'Por grau de importância', 'Cronológica (sequência do turno)', 'Aleatória'], correctAnswerIndex: 2 },
      { id: 'qr_5', question: 'O registro de enfermagem serve para:', options: ['Apenas fofocar sobre o paciente', 'Respaldo legal do profissional e continuidade do cuidado', 'Gastar papel', 'Controle de estoque apenas'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l_anatomy',
    moduleId: 'f1',
    title: 'Anatomia e Fisiologia Sistêmica',
    order: 4,
    content: `
# Fundamentos Anatômicos

O entendimento do corpo humano é a base para qualquer cuidado clínico.

## Sistemas Principais
1. **Respiratório:** Troca gasosa (hematose) nos alvéolos pulmonares.
2. **Cardiovascular:** Bombeamento de sangue e transporte de oxigênio/nutrientes.
3. **Renal:** Filtração do sangue e controle do equilíbrio hidroeletrolítico.
4. **Tegumentar (Pele):** Proteção, termorregulação e barreira contra patógenos.

## Homeostase
É o estado de equilíbrio interno do organismo, mantido através de mecanismos de feedback regulados pelos sistemas nervoso e endócrino.
`,
    questions: [
      { id: 'qa_1', question: 'Qual sistema é responsável pela troca gasosa alveolar?', options: ['Cardiovascular', 'Renal', 'Respiratório', 'Tegumentar'], correctAnswerIndex: 2 },
      { id: 'qa_2', question: 'A diurese é um importante sinal vital que indica a perfusão de qual órgão?', options: ['Pulmão', 'Cérebro', 'Rim', 'Fígado'], correctAnswerIndex: 2 },
      { id: 'qa_3', question: 'Qual a principal função do sistema tegumentar (pele)?', options: ['Troca de gases', 'Barreira contra infecções e proteção', 'Produção de hormônios', 'Digestão'], correctAnswerIndex: 1 },
      { id: 'qa_4', question: 'O que significa Homeostase?', options: ['Queda da pressão', 'Estado de equilíbrio do corpo', 'Aumento da febre', 'Morte celular'], correctAnswerIndex: 1 },
      { id: 'qa_5', question: 'O débito cardíaco está relacionado a qual sistema?', options: ['Renal', 'Cardiovascular', 'Nervoso', 'Digestório'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l_microbio',
    moduleId: 'f1',
    title: 'Microbiologia e Cadeia de Infecção',
    order: 5,
    content: `
# Cadeia Epidemiológica das Infecções

Para prevenir a infecção, é necessário quebrar um dos elos da cadeia.

## Os Elos da Cadeia
1. **Agente Infeccioso:** Bactéria, vírus, fungo.
2. **Reservatório:** Onde o agente vive (paciente, água, equipamentos).
3. **Porta de Saída:** Via respiratória, digestiva, pele íntegra/lesada.
4. **Modo de Transmissão:** Contato, gotículas, aerossóis.
5. **Porta de Entrada:** Mucosas, feridas, cateteres.
6. **Hospedeiro Suscetível:** Paciente com baixa imunidade ou dspositivos invasivos.
`,
    questions: [
      { id: 'qmb_1', question: 'Qual a medida n° 1 para quebrar a cadeia de infecção?', options: ['Uso de máscara', 'Higienização das mãos', 'Uso de antibióticos', 'Isolamento em quarto escuro'], correctAnswerIndex: 1 },
      { id: 'qmb_2', question: 'O que caracteriza um hospedeiro suscetível?', options: ['Pessoa saudável e jovem', 'Pessoa imunossuprimida ou com dispositivos invasivos', 'Apenas profissionais de saúde', 'Crianças vacinadas'], correctAnswerIndex: 1 },
      { id: 'qmb_3', question: 'Qual EPI é obrigatório em precaução por Gotículas?', options: ['Máscara N95', 'Máscara Cirúrgica', 'Apenas luvas', 'Protetor auricular'], correctAnswerIndex: 1 },
      { id: 'qmb_4', question: 'O reservatório de um agente infeccioso pode ser:', options: ['Apenas o paciente', 'Apenas superfícies', 'Paciente, superfícies, água e outros meios', 'Não existe reservatório'], correctAnswerIndex: 2 },
      { id: 'qmb_5', question: 'A barreira física entre o profissional e o microrganismo chama-se:', options: ['Soro', 'Vacina', 'EPI (Equipamento de Proteção Individual)', 'Antibiótico'], correctAnswerIndex: 2 }
    ]
  },
  {
    id: 'l_comfort_pav',
    moduleId: 'f1',
    title: 'Higiene e Prevenção de PAV',
    order: 6,
    content: `
# Prevenção da Pneumonia Associada à Ventilação (PAV)

A PAV é uma das infecções mais graves em unidades críticas.

## Medidas de Prevenção
- **Cabeceira Elevada:** Manter entre 30° e 45°.
- **Higiene Oral com Clorexidina (0,12%):** Pelo menos 3 a 4 vezes ao dia.
- **Aspiração Subglótica:** Reduz a entrada de secreções na traqueia.
- **Monitoramento da Pressão do Cuff:** Manter entre 20-30 cmH2O.

## Higiene Oral
Em pacientes intubados, deve ser realizada com técnica asséptica e aspiração simultânea para evitar microaspirações.
`,
    questions: [
      { id: 'qpav_1', question: 'Para prevenir PAV, qual a frequência mínima recomendada da higiene oral?', options: ['1 vez ao dia', '2 vezes ao dia', 'Pelo menos 3 vezes ao dia', 'Apenas quando o paciente pedir'], correctAnswerIndex: 2 },
      { id: 'qpav_2', question: 'Qual antisséptico é o padrão-ouro para higiene oral em pacientes sob ventilação?', options: ['Álcool 70%', 'Clorexidina 0,12%', 'Água oxigenada', 'Povidine'], correctAnswerIndex: 1 },
      { id: 'qpav_3', question: 'Em pacientes PLAQUETOPÊNICOS, a higiene oral deve ser feita com:', options: ['Escova de cerdas duras', 'Apenas bochechos', 'Hastes flexíveis (Swabs) macias', 'Não deve ser feita'], correctAnswerIndex: 2 },
      { id: 'qpav_4', question: 'O que deve ser feito simultaneamente à higiene oral para evitar microaspiração?', options: ['Dar água para o paciente beber', 'Aspiração da cavidade oral', 'Trocar o curativo', 'Aumentar a sedação'], correctAnswerIndex: 1 },
      { id: 'qpav_5', question: 'O que significa a sigla PAV?', options: ['Pressão Arterial Variável', 'Pneumonia Associada à Ventilação Mecânica', 'Prevenção de Acidentes Vesicais', 'Procedimento Altamente Volátil'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l_transport',
    moduleId: 'f1',
    title: 'Mobilização e Transporte Seguro',
    order: 7,
    content: `
# Segurança na Mobilização

Transferir o paciente com segurança protege tanto o cliente quanto o profissional.

## Regras de Ouro
- **Ergonomia:** Use a força das pernas, não das costas. Mantenha os pés afastados.
- **Freados:** Cama e maca devem estar sempre com as rodas travadas.
- **Comunicação:** Use contagem (1, 2, 3) para sincronizar o movimento da equipe.
- **Auxílio:** Use pranchas de transferência ou lençóis móveis para reduzir o atrito.

## Transporte Externo
Garanta que todos os drenos e cateteres estejam fixos e que o oxigênio seja suficiente para o trajeto.
`,
    questions: [
      { id: 'qts_1', question: 'Qual a regra básica de ergonomia para o profissional ao mover um paciente?', options: ['Dobrar a coluna', 'Usar a força dos braços apenas', 'Manter a coluna ereta e usar a força das pernas', 'Fazer o movimento rápido e sozinho'], correctAnswerIndex: 2 },
      { id: 'qts_2', question: 'Antes de transferir um paciente, o que é fundamental verificar nos equipamentos (cama/cadeira)?', options: ['Se a cor combina', 'Se as rodas esto travadas', 'Se o paciente está sorrindo', 'Se a TV está ligada'], correctAnswerIndex: 1 },
      { id: 'qts_3', question: 'Quem deve coordenar o comando da transferência de um paciente?', options: ['Quem está nos pés', 'O acompanhante', 'Quem está na cabeceira (comando central)', 'Qualquer um que gritar primeiro'], correctAnswerIndex: 2 },
      { id: 'qts_4', question: 'Qual material auxilia na transferência segura de pacientes entre leitos?', options: ['Apenas lençóis comuns', 'Pranchas de transferência ou lençóis móveis', 'Cadeiras de rodas pequenas', 'Não existem materiais específicos'], correctAnswerIndex: 1 },
      { id: 'qts_5', question: 'Transportar pacientes sem travar as rodas pode resultar em:', options: ['Promoção no trabalho', 'Quedas e novos traumas ao paciente', 'Mais velocidade no transporte', 'Menos esforço físico'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l_ident_safe',
    moduleId: 'f1',
    title: 'Meta 1: Identificação Segura',
    order: 8,
    content: `
# Identificação do Paciente

A identificação correta é a base de todas as outras metas de segurança.

## Como Identificar?
- Use pelo menos **dois identificadores**: Nome Completo e Data de Nascimento (ou Nome da Mãe).
- **Nunca** use o número do quarto ou leito como identificador.

## Momentos de Conferência
Confira a pulseira:
1. Antes de administrar medicamentos.
2. Antes de colher exames laboratorias.
3. Antes de realizar qualquer procedimento (ex: banho, curativo, cirurgia).
`,
    questions: [
      { id: 'qid_1', question: 'Quais identificadores são recomendados para a pulseira de identificação segura?', options: ['Número do quarto e leito', 'Nome completo e Data de Nascimento/Nome da Mãe', 'Apenas o primeiro nome', 'O diagnóstico da doença'], correctAnswerIndex: 1 },
      { id: 'qid_2', question: 'O número do leito pode ser usado como identificador do paciente?', options: ['Sim, é o mais prático', 'Apenas se o paciente estiver inconsciente', 'NUNCA, pois o leito pode mudar', 'Sim, se a pulseira estiver suja'], correctAnswerIndex: 2 },
      { id: 'qid_3', question: 'Quando a pulseira do paciente deve ser conferida?', options: ['Apenas no banho', 'Apenas na alta', 'Na admissão e antes de QUALQUER procedimento ou medicamento', 'Uma vez por semana'], correctAnswerIndex: 2 },
      { id: 'qid_4', question: 'A meta 1 de segurança do paciente refere-se a:', options: ['Higienização das mãos', 'Cirurgia segura', 'Identificação correta do paciente', 'Prevenção de quedas'], correctAnswerIndex: 2 },
      { id: 'qid_5', question: 'Se a pulseira estiver ilegível, o que o profissional deve fazer?', options: ['Ignorar e fazer o procedimento', 'Pintar com caneta por cima', 'Substituir imediatamente por uma nova e legível', 'Pedir para o paciente escrever o nome no braço'], correctAnswerIndex: 2 }
    ]
  },
  {
    id: 'l_iras',
    moduleId: 'f1',
    title: 'Controle e Prevenção de IRAS',
    order: 9,
    content: `
# Infecções Relacionadas à Assistência à Saúde (IRAS)

As IRAS aumentam a mortalidade, os custos e o tempo de internação.

## Principais Sítios de Infecção
- **IPCS/CVC:** Infecção relacionada a cateter central.
- **ITU/SVD:** Infecção do trato urinário por sonda vesical.
- **PAV:** Pneumonia associada à ventilação.

## Papel do Técnico
- Realizar a antissepsia correta durante procedimentos.
- Manter o sistema de drenagem de urina fechado e abaixo do nível da bexiga.
- Seguir rigorosamente os protocolos de curativos de cateteres.
`,
    questions: [
      { id: 'qir_1', question: 'O que significa a sigla IRAS?', options: ['Irradiação Altamente Sensível', 'Infecções Relacionadas à Assistência à Saúde', 'Intervenção Rápida em Áreas de Saúde', 'Índice de Resposta à Antibióticos'], correctAnswerIndex: 1 },
      { id: 'qir_2', question: 'Qual comissão é responsável pelo monitoramento de infecções no hospital?', options: ['COREN', 'CCIH (Comissão de Controle de Infecção Hospitalar)', 'Diretoria Clínica', 'CIPA'], correctAnswerIndex: 1 },
      { id: 'qir_3', question: 'O uso irracional de antibióticos contribui para:', options: ['Melhora rápida dos pacientes', 'Resistência bacteriana', 'Menor tempo de internação', 'Eliminação total de bactérias'], correctAnswerIndex: 1 },
      { id: 'qir_4', question: 'Os "Bundles" de prevenção servem para:', options: ['Organizar a roupa do paciente', 'Padronizar cuidados para evitar infecções em dispositivos invasivos (CVC/SVD)', 'Aumentar o custo do hospital', 'Treinar estagiários apenas'], correctAnswerIndex: 1 },
      { id: 'qir_5', question: 'As IRAS impactam o sistema de saúde através de:', options: ['Apenas aumento de gastos', 'Aumento da mortalidade e tempo de internação', 'Nenhum impacto real', 'Melhora da imunidade'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l_sae_2024',
    moduleId: 'e1_mod',
    title: 'SAE: Nova Resolução 736/2024',
    order: 4,
    content: `
# Sistematização da Assistência de Enfermagem (SAE)

A Resolução Cofen 736/2024 atualizou as diretrizes para a execução do Processo de Enfermagem.

## Etapas do Processo de Enfermagem
1. **Coleta de Dados:** Investigação do estado do paciente.
2. **Diagnóstico:** Identificação das necessidades (Privativo do Enfermeiro).
3. **Planejamento:** Determinação de resultados e intervenções.
4. **Implementação:** Execução dos cuidados (Participação ativa do Técnico).
5. **Avaliação:** Verificação dos resultados alcançados.

O Técnico de Enfermagem participa ativamente nas etapas de Coleta, Implementação e Avaliação dos cuidados.
`,
    questions: [
      { id: 'qsae_1', question: 'Qual a resolução recente que atualizou as diretrizes da SAE e do Processo de Enfermagem?', options: ['564/2017', '736/2024', '7.498/86', '8.080/90'], correctAnswerIndex: 1 },
      { id: 'qsae_2', question: 'Em qual etapa do Processo de Enfermagem o Técnico de Enfermagem participa ativamente executando cuidados?', options: ['Diagnóstico', 'Planejamento', 'Implementação (Execução)', 'Avaliação'], correctAnswerIndex: 2 },
      { id: 'qsae_3', question: 'O diagnóstico de enfermagem é uma atividade:', options: ['Privativa do enfermeiro', 'Livre para técnicos e auxiliares', 'Proibida no Brasil', 'Apenas para médicos'], correctAnswerIndex: 0 },
      { id: 'qsae_4', question: 'Qual o objetivo principal da SAE?', options: ['Aumentar o tempo de trabalho', 'Organizar o trabalho e garantir segurança baseada em evidências', 'Apenas preencher papel', 'Substituir a equipe médica'], correctAnswerIndex: 1 },
      { id: 'qsae_5', question: 'Como o Técnico de Enfermagem auxilia na etapa de Coleta de Dados?', options: ['Fazendo o exame físico completo e diagnóstico', 'Coletando informações estruturadas e reportando ao enfermeiro', 'Prescrevendo exames', 'Não participa desta etapa'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l_school_2026',
    moduleId: 'e1_mod',
    title: 'Enfermagem Escolar (Res 805/2026)',
    order: 5,
    content: `
# Enfermagem no Ambiente Escolar

A Resolução Cofen 805/2026 e a Lei Lucas (13.722/18) definem as bases da assistência na escola.

## Lei Lucas
Exige que escolas possuam funcionários treinados em Primeiros Socorros para lidar com urgências (engasgos, desmaios) até a chegada do socorro especializado.

## Atribuições da Enfermagem Escolar
- Educação em saúde e prevenção de doenças.
- Apoio ao aluno com doenças crônicas (ex: Diabetes, Asma).
- Monitoramento do desenvolvimento e combate ao bullying/sofrimento mental.
- Administração supervisionada de medicamentos conforme prescrição.
`,
    questions: [
      { id: 'qesc_1', question: 'A Lei Lucas (13.722/2018) exige o quê das escolas?', options: ['Uniforme obrigatório', 'Capacitação em Primeiros Socorros para os funcionários', 'Aulas de medicina', 'Presença de médico plantonista'], correctAnswerIndex: 1 },
      { id: 'qesc_2', question: 'Qual a resolução que regulamenta a enfermagem escolar?', options: ['564/2017', '805/2026', '7.498/86', '8.080/90'], correctAnswerIndex: 1 },
      { id: 'qesc_3', question: 'Na escola, a enfermagem deve atuar em quais casos de doenças crônicas?', options: ['Apenas pedindo para o aluno faltar', 'Apoio na administração de medicamentos e planos de cuidados', 'Realizando cirurgias na sala de aula', 'Não deve atuar'], correctAnswerIndex: 1 },
      { id: 'qesc_4', question: 'A identificação precoce de sofrimento mental e bullying na escola é:', options: ['Competência da diretoria apenas', 'Uma das atribuições da enfermagem escolar', 'Proibido por lei', 'Irrelevante para a saúde'], correctAnswerIndex: 1 },
      { id: 'qesc_5', question: 'Qual o foco principal da Lei Lucas no ambiente escolar?', options: ['Ensinar matemática', 'Prevenir mortes por engasgos e acidentes através de socorro imediato', 'Contratar mais professores', 'Distribuir vacinas'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l_emergency_cart',
    moduleId: 'c1',
    title: 'Gestão do Carro de Emergência',
    order: 4,
    content: `
# O Carro de Parada/Emergência

Unidade móvel contendo os materiais para suporte de vida, devendo ser padronizado e conferido.

## Padronização Típica das Gavetas
- **1ª Gaveta (Vermelha):** Medicamentos de emergência (Adrenalina, Amiodarona).
- **2ª Gaveta:** Material para acesso venoso e cateterismo.
- **3ª Gaveta (Azul):** Material de Via Aérea (Laringoscópio, Tubos OT, Cânulas).
- **4ª Gaveta:** Soros, luvas estéreis e outros volumes.

## Conferência (Checklist)
Deve ser feita diariamente e após cada uso. O lacre íntegro garante que o carro foi conferido e está pronto para uso imediato.
`,
    questions: [
      { id: 'qec_1', question: 'O que deve ser guardado na 1ª gaveta (Geralmente Vermelha) do carro de emergência?', options: ['Acessos venosos', 'Material de via aérea', 'Drogas e Medicamentos de emergência', 'Soros'], correctAnswerIndex: 2 },
      { id: 'qec_2', question: 'Qual material fica na 3ª gaveta (Geralmente Azul)?', options: ['Seringas', 'Adrenalina', 'Laringoscópio e Tubos (Vias Aéreas)', 'Gazes'], correctAnswerIndex: 2 },
      { id: 'qec_3', question: 'O desfibrilador (DEA) deve ser testado com qual frequência?', options: ['Mensalmente', 'Semanalmente', 'Diariamente', 'Apenas quando for usar'], correctAnswerIndex: 2 },
      { id: 'qec_4', question: 'O que indica que o carro de emergência está conferido e pronto no turno anterior?', options: ['Estar aberto', 'Ter um lacre íntegro', 'Estar limpo', 'Estar no meio do corredor'], correctAnswerIndex: 1 },
      { id: 'qec_5', question: 'Qual o objetivo principal da padronização das gavetas do carro?', options: ['Estética do setor', 'Reduzir o tempo de resposta e facilitar a localização de materiais', 'Aproveitar o espaço do móvel', 'Controle de validade apenas'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l_sus_redes',
    moduleId: 's1',
    title: 'Redes e Níveis de Atenção (SUS)',
    order: 3,
    content: `
# Organização do Sistema de Saúde

O SUS organiza-se em níveis de complexidade crescente para garantir a integralidade.

## Níveis de Atenção
- **Primária (UBS/ESF):** Porta de entrada preferencial. Resolve 80% dos problemas.
- **Secundária (UPAs/Centros de Especialidades):** Diagnóstico e tratamento especializado.
- **Terciária (Hospitais de Grande Porte):** Alta complexidade, transplantes, UTIs.

## Regionalização
A saúde é organizada em "Regiões de Saúde" para garantir que o cidadão tenha acesso a todos os níveis sem precisar percorrer grandes distâncias desnecessariamente.
`,
    questions: [
      { id: 'qrs_1', question: 'Qual nível de atenção do SUS resolve cerca de 80% dos problemas de saúde?', options: ['Atenção Terciária', 'Atenção Secundária', 'Atenção Primária (Básica)', 'Alta Complexidade'], correctAnswerIndex: 2 },
      { id: 'qrs_2', question: 'UPAs e Centros de Especialidades pertencem a qual nível de atenção?', options: ['Primário', 'Secundário', 'Terciário', 'Quaternário'], correctAnswerIndex: 1 },
      { id: 'qrs_3', question: 'Hospitais de alta complexidade e centros de transplante são da Atenção:', options: ['Primária', 'Secundária', 'Terciária', 'Básica'], correctAnswerIndex: 2 },
      { id: 'qrs_4', question: 'A ESF (Estratégia Saúde da Família) é o modelo prioritário da Atenção:', options: ['Primária', 'Hospitalar', 'Especializada', 'Ambiental'], correctAnswerIndex: 0 },
      { id: 'qrs_5', question: 'O que caracteriza a "Porta de Entrada" preferencial do SUS?', options: ['Grandes hospitais', 'Unidades Básicas de Saúde (UBS)', 'Emergências particulares', 'Consultórios privados'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l_vigilancia',
    moduleId: 's1',
    title: 'Modelos de Vigilância em Saúde',
    order: 4,
    content: `
# Vigilância em Saúde no SUS

Conjunto de ações que proporcionam o conhecimento, detecção e prevenção de riscos.

## Áreas da Vigilância
- **Epidemiológica:** Doenças transmissíveis, vacinação, surtos.
- **Sanitária (VISA):** Inspeção de serviços de saúde, alimentos, medicamentos, portos e aeroportos.
- **Ambiental:** Qualidade da água, ar, solo e controle de vetores (Dengue).
- **Saúde do Trabalhador:** Riscos ocupacionais e doenças relacionadas ao trabalho.
`,
    questions: [
      { id: 'qvs_1', question: 'Qual vigilância controla a qualidade da água e fatores do meio ambiente?', options: ['Epidemiológica', 'Sanitária', 'Ambiental', 'Do Trabalhador'], correctAnswerIndex: 2 },
      { id: 'qvs_2', question: 'A fiscalização de hospitais, alimentos e portos é papel da Vigilância:', options: ['Epidemiológica', 'Sanitária (VISA)', 'Ambiental', 'Social'], correctAnswerIndex: 1 },
      { id: 'qvs_3', question: 'A notificação de doenças transmissíveis (Dengue, Malária) é foco da Vigilância:', options: ['Sanitária', 'Epidemiológica', 'Pública', 'Forense'], correctAnswerIndex: 1 },
      { id: 'qvs_4', question: 'A Vigilância em Saúde do Trabalhador foca em:', options: ['Apenas salários', 'Promoção da saúde e redução de riscos no ambiente laboral', 'Apenas férias', 'Demissões'], correctAnswerIndex: 1 },
      { id: 'qvs_5', question: 'A Vigilância em Saúde é composta por quais áreas principais?', options: ['Apenas Sanitária', 'Sanitária, Epidemiológica, Ambiental e do Trabalhador', 'Apenas Epidemiológica', 'Nenhuma das anteriores'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l_trauma_start',
    moduleId: 'c1',
    title: 'Trauma e Método START',
    order: 5,
    content: `
# Triagem em Múltiplas Vítimas (START)

O método START (Simple Triage and Rapid Treatment) prioriza salvar o maior número de vidas.

## Cores da Triagem
- **Verde:** Vítimas que andam (leves).
- **Amarelo:** Vítimas que não andam, mas respiram e têm circulaço/consciência (urgente).
- **Vermelho:** Prioridade IMEDIATA. Alterações graves no R-P-M (Respiração, Pulso, Mental).
- **Preto:** Óbito ou lesões incompatíveis com a vida.

## Protocolo XABCDE
Foco atual no controle de hemorragias exanguinantes (X) antes mesmo da abertura da via aérea (A).
`,
    questions: [
      { id: 'qst_1', question: 'No protocolo X-A-B-C-D-E, o que significa a letra X?', options: ['X-ray (Raio-X)', 'Abordagem geral', 'Hemorragia Exanguinante (sangramento massivo)', 'Xantelasma'], correctAnswerIndex: 2 },
      { id: 'qst_2', question: 'Qual o método de triagem rápida para incidentes com múltiplas vítimas?', options: ['SOFA', 'START', 'APGAR', 'GLASGOW'], correctAnswerIndex: 1 },
      { id: 'qst_3', question: 'Na triagem START, qual cor indica prioridade imediata (vermelha)?', options: ['Vítima que anda', 'Vítima morta', 'Problemas respiratórios/circulatórios graves', 'Vítima com cortes leves'], correctAnswerIndex: 2 },
      { id: 'qst_4', question: 'Segundo o START, se a vítima não anda, não respira após abertura de via aérea, ela é:', options: ['Vermelha', 'Amarela', 'Preta (Óbito)', 'Verde'], correctAnswerIndex: 2 },
      { id: 'qst_5', question: 'O que deve ser priorizado na letra B do trauma?', options: ['Conferir o nome', 'Respiração e Ventilação', 'Pedir exames de sangue', 'Apenas temperatura'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l_surgical',
    moduleId: 'a1',
    title: 'Assistência Cirúrgica (Pré/Trans/Pós)',
    order: 3,
    content: `
# Segurança em Cirurgia

A enfermagem atua na redução de erros através do protocolo de Cirurgia Segura.

## Períodos Cirúrgicos
- **Pré-operatório:** Preparo do paciente, jejum, banho, retirada de adornos.
- **Transoperatório:** Monitorização, posicionamento e assistência anestésica.
- **Pós-operatório:** Recuperação anestésica (RPA) e estabilização.

## Checklist de Cirurgia Segura (OMS)
1. **Antes da indução:** Identificação, local marcado, materiais testados.
2. **Time-out (antes da incisão):** Pausa para confirmar equipe e procedimento.
3. **Antes de sair da sala:** Contagem de gazes/agulhas/instrumentais.
`,
    questions: [
      { id: 'qsc_1', question: 'Qual ferramenta da OMS é obrigatória para a segurança no centro cirúrgico?', options: ['Contrato de serviço', 'Checklist de Cirurgia Segura', 'Folha de ponto', 'Escala de Apgar'], correctAnswerIndex: 1 },
      { id: 'qsc_2', question: 'O "Time-out" (pausa) no checklist cirúrgico ocorre em qual momento?', options: ['Na saída do hospital', 'Antes da indução anestésica', 'Imediatamente antes da incisão cirúrgica', 'Na recuperação pós-anestésica'], correctAnswerIndex: 2 },
      { id: 'qsc_3', question: 'O que deve ser contado obrigatoriamente antes do paciente sair da sala cirúrgica?', options: ['Cabelos', 'Instrumentais e compressas', 'Batas médicas', 'Nuvens'], correctAnswerIndex: 1 },
      { id: 'qsc_4', question: 'A RPA (Recuperação Pós-Anestésica) foca principalmente em:', options: ['Dar comida ao paciente', 'Estabilidade hemodinâmica, consciência e controle de dor', 'Levar o paciente para passear', 'Fazer novos exames de DNA'], correctAnswerIndex: 1 },
      { id: 'qsc_5', question: 'Qual o principal preparo físico realizado no pré-operatório imediato?', options: ['Apenas pesar o paciente', 'Conferência de jejum, banho cirúrgico e documentos', 'Cortar o cabelo apenas', 'Não há preparo'], correctAnswerIndex: 1 }
    ]
  },
  {
    id: 'l_palliative',
    moduleId: 'a1',
    title: 'Cuidados Paliativos e Pós-Morte',
    order: 4,
    content: `
# Cuidados Paliativos e Enfermagem

Foco na qualidade de vida e no alívio do sofrimento diante de doenças ameaçadoras.

## Princípios
- Alívio da dor e outros sintomas estressantes.
- Apoio psicossocial e espiritual ao paciente e familiares.
- Respeito à autonomia e dignidade nas fases finais da vida.

## Cuidado Pós-Morte
Preparo do corpo com dignidade e respeito. Inclui higiene, tamponamento de orifícios e identificação correta conforme as normas da instituição.
`,
    questions: [
      { id: 'qpal_1', question: 'Qual o foco principal dos Cuidados Paliativos?', options: ['Cura a qualquer custo', 'Qualidade de vida e alívio do sofrimento', 'Apenas acelerar a morte', 'Ignorar o paciente'], correctAnswerIndex: 1 },
      { id: 'qpal_2', question: 'O preparo do corpo pós-morte deve ser feito com:', options: ['Rapidez e sem cuidados', 'Respeito, ética, higiene e tamponamento adequado', 'Apenas jogando um lençol', 'Sem higiene'], correctAnswerIndex: 1 },
      { id: 'qpal_3', question: 'Quem é o centro do cuidado no suporte psicossocial paliativo?', options: ['Apenas o médico', 'O paciente e sua família', 'Apenas os vizinhos', 'Ninguém'], correctAnswerIndex: 1 },
      { id: 'qpal_4', question: 'Respeitar a autonomia nos cuidados finais significa:', options: ['Fazer o que o médico quer apenas', 'Respeitar os desejos e escolhas do paciente', 'Obrigar o paciente a comer', 'Ignorar as escolhas'], correctAnswerIndex: 1 },
      { id: 'qpal_5', question: 'Tamponamento de orifícios é um procedimento realizado no:', options: ['Pré-Natal', 'Banho no leito', 'Cuidado pós-morte (preparo do corpo)', 'Curativo simples'], correctAnswerIndex: 2 }
    ]
  },
  {
    id: 'l_elderly',
    moduleId: 'a1',
    title: 'Saúde do Idoso (Geriatria)',
    order: 5,
    content: `
# Assistência ao Idoso

O envelhecimento populacional exige cuidados específicos e sensibilidade técnica.

## Gigantes da Geriatria
- **Imobilidade:** Risco elevado de Lesões por Pressão (LPP) e trombose.
- **Instabilidade:** Risco de quedas (maior causa de internação no idoso).
- **Iatrogenia:** Danos causados por excesso de medicamentos ou condutas médicas inadequadas.

## Atuação da Enfermagem
Focar na preservação da autonomia, prevenção de quedas, controle rigoroso da polifarmácia e estímulo cognitivo/social.
`,
    questions: [
      { id: 'qger_1', question: 'Qual a principal causa de internação hospitalar no idoso?', options: ['Faringite', 'Instabilidade e Quedas', 'Corte no dedo', 'Acne'], correctAnswerIndex: 1 },
      { id: 'qger_2', question: 'O termo "Iatrogenia" na geriatria refere-se a:', options: ['Melhora súbita', 'Danos causados pelo excesso ou uso incorreto de medicamentos', 'Aumento da agilidade', 'Longevidade extrema'], correctAnswerIndex: 1 },
      { id: 'qger_3', question: 'Qual vigilância deve ser redobrada em idosos acamados?', options: ['Apenas TV', 'Prevenção de Lesões por Pressão (LPP)', 'Frequência de visitas apenas', 'Uso de roupas novas'], correctAnswerIndex: 1 },
      { id: 'qger_4', question: 'A imobilidade no idoso é considerada um:', options: ['Estado normal', 'Gigante da Geriatria (grande risco à saúde)', 'Sinal de descanso', 'Fator de proteção'], correctAnswerIndex: 1 },
      { id: 'qger_5', question: 'Promover a autonomia no idoso significa:', options: ['Fazer tudo por ele', 'Incentivar que ele realize suas atividades dentro de suas capacidades', 'Ignorar o idoso', 'Deixar ele sozinho na rua'], correctAnswerIndex: 1 }
    ]
  }
];
