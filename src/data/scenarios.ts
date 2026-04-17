import { Scenario } from '../types';

export const SCENARIOS: Scenario[] = [
  {
    id: 's-resp',
    title: 'Crise Respiratória',
    description: 'Paciente com dispneia súbita e saturação em queda.',
    difficulty: 'Média',
    xpReward: 200,
    steps: [
      {
        id: 'st1',
        description: 'Paciente apresenta taquipneia (28 ipm) e SpO2 88%. Qual a primeira ação?',
        options: [
          { text: 'Instalar cateter de O2 a 2L/min', isCorrect: true, feedback: 'Correto! Iniciar oxigenoterapia de baixo fluxo conforme protocolo.' },
          { text: 'Aguardar o médico chegar', isCorrect: false, feedback: 'Incorreto. Ações de enfermagem imediatas são vitais.' },
          { text: 'Realizar manobra de Heimlich', isCorrect: false, feedback: 'Incorreto. Não há sinais de obstrução por corpo estranho.' },
          { text: 'Administrar um ansiolítico', isCorrect: false, feedback: 'Incorreto. A prioridade é a oxigenação, não a ansiedade.' }
        ]
      },
      {
        id: 'st2',
        description: 'SpO2 subiu para 92%. A ausculta revela sibilos. O que preparar?',
        options: [
          { text: 'Material para nebulização com broncodilatador', isCorrect: true, feedback: 'Boa! Sibilos indicam broncoespasmo.' },
          { text: 'Material para intubação imediata', isCorrect: false, feedback: 'Precoce. Paciente respondeu ao O2 e está estável.' },
          { text: 'Dreno de tórax', isCorrect: false, feedback: 'Incorreto. Não há sinais de pneumotórax.' },
          { text: 'Sonda nasogástrica', isCorrect: false, feedback: 'Incorreto. Sem indicação no momento.' }
        ]
      }
    ]
  },
  {
    id: 's-sepse',
    title: 'Triagem de Sepse',
    description: 'Identificação precoce de sinais de choque séptico.',
    difficulty: 'Alta',
    xpReward: 350,
    steps: [
      {
        id: 'st1',
        description: 'Paciente idoso, confuso, PA 90/50 mmHg, T 38.9°C. Qual o score qSOFA?',
        options: [
          { text: '2 pontos (Alteração consciência + Hipotensão)', isCorrect: true, feedback: 'Correto! qSOFA >= 2 indica alto risco de mortalidade.' },
          { text: '1 ponto (Apenas febre)', isCorrect: false, feedback: 'Incorreto. Febre não faz parte dos critérios do qSOFA.' },
          { text: '3 pontos (Consciência + Hipotensão + Taquipneia)', isCorrect: false, feedback: 'Incorreto. A frequência respiratória não foi informada como alta neste caso.' },
          { text: '0 pontos', isCorrect: false, feedback: 'Incorreto. O paciente já apresenta pelo menos dois sinais de gravidade.' }
        ]
      }
    ]
  },
  {
    id: 's-parada',
    title: 'PCR Intra-hospitalar',
    description: 'Atendimento a uma parada cardiorrespiratória em enfermaria.',
    difficulty: 'Alta',
    xpReward: 500,
    steps: [
      {
        id: 'st1',
        description: 'Você encontra o paciente inconsciente e sem pulso. Qual a prioridade?',
        options: [
          { text: 'Pedir ajuda e carrinho de emergência', isCorrect: true, feedback: 'Exato! Nunca inicie sem garantir o apoio e o desfibrilador.' },
          { text: 'Iniciar ventilação boca-a-boca', isCorrect: false, feedback: 'Incorreto. Prioridade é compressão e suporte avançado.' },
          { text: 'Ligar para a família', isCorrect: false, feedback: 'Incorreto. Foco total na ressuscitação.' },
          { text: 'Apenas anotar o horário', isCorrect: false, feedback: 'Incorreto. A ação deve ser imediata.' }
        ]
      }
    ]
  },
  {
    id: 's-svd',
    title: 'Sondagem Vesical (SVD)',
    description: 'Realização de cateterismo vesical de demora em paciente com retenção.',
    difficulty: 'Média',
    xpReward: 250,
    steps: [
      {
        id: 'st1',
        description: 'Após a higiene íntima, qual o próximo passo na técnica estéril?',
        options: [
          { text: 'Abrir o kit de sondagem e organizar o campo estéril', isCorrect: true, feedback: 'Correto! A organização do campo é fundamental para evitar contaminação.' },
          { text: 'Passar a sonda imediatamente', isCorrect: false, feedback: 'Incorreto. É necessário campo e lubrificação.' },
          { text: 'Pedir para o paciente tossir', isCorrect: false, feedback: 'Incorreto. Isso não faz parte da preparação do kit.' },
          { text: 'Insuflar o balonete para testar antes de colocar', isCorrect: false, feedback: 'Controverso, mas a organização do campo vem primeiro.' }
        ]
      }
    ]
  },
  {
    id: 's-cad',
    title: 'Cetoacidose Diabética',
    description: 'Manejo de crise hiperglicêmica com hálito cetônico.',
    difficulty: 'Alta',
    xpReward: 400,
    steps: [
      {
        id: 'st1',
        description: 'HGT "Hi" (>600). Qual a prioridade no tratamento inicial da CAD?',
        options: [
          { text: 'Expansão volêmica vigorosa com SF 0,9%', isCorrect: true, feedback: 'Correto! A hidratação é o primeiro passo para diluir a glicose e tratar a desidratação.' },
          { text: 'Insulina rápida bólus sem hidratar', isCorrect: false, feedback: 'Perigo! Iniciar insulina sem volume pode causar colapso cardiovascular.' },
          { text: 'Oferecer água por via oral', isCorrect: false, feedback: 'Insuficiente para a gravidade da CAD.' },
          { text: 'Administrar glicose 50%', isCorrect: false, feedback: 'Fatal. O paciente já está em hiperglicemia extrema.' }
        ]
      }
    ]
  },
  {
    id: 's-anafilaxia',
    title: 'Choque Anafilático',
    description: 'Reação alérgica grave após administração de medicamento.',
    difficulty: 'Alta',
    xpReward: 400,
    steps: [
      {
        id: 'st1',
        description: 'Edema de glote e hipotensão após dipirona IV. Qual a droga de escolha?',
        options: [
          { text: 'Adrenalina 0,5mg IM (Vasto Lateral)', isCorrect: true, feedback: 'Correto! Adrenalina IM é a primeira linha.' },
          { text: 'Hidrocortisona IV', isCorrect: false, feedback: 'Incorreto. Age devagar demais para a emergência.' },
          { text: 'Fenergan IM', isCorrect: false, feedback: 'Incorreto. É adjuvante, não salva a vida na anafilaxia aguda.' },
          { text: 'Nebulização com Berotec', isCorrect: false, feedback: 'Incorreto. É sistêmico o problema.' }
        ]
      }
    ]
  },
  {
    id: 's-dreno',
    title: 'Manejo de Dreno de Tórax',
    description: 'Cuidados com sistema de drenagem em selo d’água.',
    difficulty: 'Média',
    xpReward: 300,
    steps: [
      {
        id: 'st1',
        description: 'Você observa que o dreno parou de oscilar. O que verificar primeiro?',
        options: [
          { text: 'Verificar se o tubo está dobrado ou pinçado', isCorrect: true, feedback: 'Boa! Obstruções mecânicas são as causas mais comuns.' },
          { text: 'Pedir Raio-X urgente', isCorrect: false, feedback: 'Pode ser necessário, mas cheque o tubo primeiro.' },
          { text: 'Trocar o frasco de drenagem', isCorrect: false, feedback: 'Não resolve se a obstrução for no tubo.' },
          { text: 'Retirar o dreno imediatamente', isCorrect: false, feedback: 'Perigoso! Ato médico.' }
        ]
      }
    ]
  },
  {
    id: 's-transfusao',
    title: 'Cuidados Transfusionais',
    description: 'Monitoramento de reação transfusional em tempo real.',
    difficulty: 'Média',
    xpReward: 300,
    steps: [
      {
        id: 'st1',
        description: 'Início da transfusão. Paciente apresenta calafrios e febre súbita. Conduta?',
        options: [
          { text: 'Interromper a transfusão e manter o acesso com SF 0,9%', isCorrect: true, feedback: 'Perfeito! Segurança em primeiro lugar.' },
          { text: 'Diminuir a velocidade do gotejamento', isCorrect: false, feedback: 'Errado! Se há reação, deve parar totalmente.' },
          { text: 'Cobrir o paciente com cobertor', isCorrect: false, feedback: 'Apenas paliativo, não trata a causa.' },
          { text: 'Continuar e observar por mais 15 min', isCorrect: false, feedback: 'Fatal. Pode evoluir para choque hemolítico.' }
        ]
      }
    ]
  }
    ]
  },
  {
    id: 's-iam-1',
    title: 'Protocolo de Dor Torácica (IAM)',
    description: 'Paciente masculino, 55 anos, chega à emergência com dor esmagadora no peito e sudorese.',
    difficulty: 'Alta',
    xpReward: 350,
    requiredLessonId: 'l_iam',
    steps: [
      {
        id: 'iam_1',
        description: 'Paciente está pálido e ansioso. Qual sua primeira ação?',
        options: [
          'Pedir para o paciente esperar sentado',
          'Colocar em repouso absoluto, monitorizar e realizar o ECG em < 10min',
          'Dar um copo de água e pedir exames de rotina',
          'Ligar para a família primeiro'
        ],
        correctAnswerIndex: 1,
        successMessage: 'Excelente! No IAM, "Tempo é Músculo". O ECG precoce é fundamental.',
        failureMessage: 'Tempo é músculo! O ECG deve ser feito em menos de 10 minutos.'
      },
      {
        id: 'iam_2',
        description: 'O ECG confirma IAM com supra de ST. O médico prescreve o protocolo MONA. Qual destes você aplica imediatamente para efeito antiagregante?',
        options: [
          'Morfina',
          'Insulina',
          'AAS 200mg mastigável',
          'Dipirona'
        ],
        correctAnswerIndex: 2,
        successMessage: 'Correto! O AAS mastigável acelera a inibição plaquetária.',
        failureMessage: 'O AAS é a pedra angular inicial para evitar que o coágulo aumente.'
      },
      {
        id: 'iam_3',
        description: 'O paciente apresenta PA 85/50 mmHg. Qual cuidado é CRÍTICO agora?',
        options: [
          'Administrar Nitrato sublingual',
          'Não administrar Nitratos devido ao risco de choque/hipotensão grave',
          'Pedir para o paciente caminhar para o centro cirúrgico',
          'Fazer massagem cardíaca'
        ],
        correctAnswerIndex: 1,
        successMessage: 'Perfeito! Nitratos são contraindicados em pacientes hipotensos ou com infarto de ventrículo direito.',
        failureMessage: 'Cuidado! O Nitrato é vasodilatador e pode causar colapso circulatório em um paciente já hipotenso.'
      }
    ]
  },
  {
    id: 's-gaso-1',
    title: 'Interpretação de Emergência: Gasometria',
    description: 'Paciente com insuficiência respiratória grave. Interprete os resultados para definir a conduta.',
    difficulty: 'Média',
    xpReward: 250,
    requiredLessonId: 'l_gaso',
    steps: [
      {
        id: 'gas_1',
        description: 'Resultados: pH 7.28, pCO2 55, HCO3 24. Qual o distúrbio?',
        options: [
          'Alcalose Metabólica',
          'Acidose Respiratória',
          'Acidose Metabólica',
          'Gasometria Normal'
        ],
        correctAnswerIndex: 1,
        successMessage: 'Correto! pH baixo com CO2 alto indica acidose respiratória (hipoventilação).',
        failureMessage: 'Lembre-se: CO2 alto retém ácido no sangue, baixando o pH.'
      },
      {
        id: 'gas_2',
        description: 'O paciente está confuso e bradipneico. Qual a conduta de enfermagem prioritária?',
        options: [
          'Oferecer água',
          'Preparar material para intubação e suporte ventilatório',
          'Aumentar o soro',
          'Pedir novos exames para amanhã'
        ],
        correctAnswerIndex: 1,
        successMessage: 'Isso mesmo! O paciente está em falência respiratória e precisa de suporte imediato.',
        failureMessage: 'O suporte ventilatório é a única forma de lavar o excesso de CO2 e subir o pH.'
      }
    ]
  },
  {
    id: 's-hpp-1',
    title: 'Código Vermelho: Hemorragia Pós-Parto',
    description: 'Puerpéra com sangramento transvaginal massivo após parto normal. O útero está amolecido.',
    difficulty: 'Alta',
    xpReward: 400,
    requiredLessonId: 'l_hem_pos',
    steps: [
      {
        id: 'hpp_1',
        description: 'O útero está acima da cicatriz umbilical e amolecido (globo de segurança ausente). Qual a primeira medida?',
        options: [
          'Cobrir a paciente',
          'Massagem uterina bimanual imediata (Manobra de Hamilton)',
          'Esperar o médico chegar para tocar na paciente',
          'Dar alta para a paciente'
        ],
        correctAnswerIndex: 1,
        successMessage: 'Correto! A massagem estimula a contração mecânica do útero (tônus).',
        failureMessage: 'A massagem bimanual é a primeira linha para estancar a atonia uterina.'
      },
      {
        id: 'hpp_2',
        description: 'A massagem foi iniciada. Qual medicação deve ser preparada para infusão endovenosa rápida conforme protocolo?',
        options: [
          'Vitamina C',
          'Ocitocina 20 UI em 500ml de RL',
          'Glicose 50%',
          'Buscopan'
        ],
        correctAnswerIndex: 1,
        successMessage: 'Excelente! A ocitocina é o padrão-ouro para reverter a atonia uterina.',
        failureMessage: 'A ocitocina é fundamental para manter o útero contraído e parar o sangramento.'
      }
    ]
  }
    ]
  },
  {
    id: 's-hoch-1',
    title: 'Prática IM: Técnica de Hochstetter',
    description: 'Administração de medicamento por via intramuscular em região ventro-glútea.',
    difficulty: 'Média',
    xpReward: 300,
    requiredLessonId: 'l_hoch',
    steps: [
      {
        id: 'hoch_1',
        description: 'Qual a posição correta da mão para localizar o sítio de punção?',
        options: [
          'Palma da mão no joelho',
          'Palma da mão no grande trocanter do fêmur, com dedo indicador na espinha ilíaca',
          'Qualquer lugar no glúteo',
          'Dedo indicador no umbigo'
        ],
        correctAnswerIndex: 1,
        successMessage: 'Correto! A anatomia é a chave para a segurança nesta técnica.',
        failureMessage: 'Lembre-se: Palma no trocanter e indicador na espinha ilíaca anterossuperior.'
      },
      {
        id: 'hoch_2',
        description: 'Onde exatamente a agulha deve ser inserida?',
        options: [
          'Na ponta do dedo médio',
          'No centro do "V" formado pelos dedos médio e indicador',
          'Fora da crista ilíaca',
          'No local com mais gordura'
        ],
        correctAnswerIndex: 1,
        successMessage: 'Isso! O centro do V é a zona de segurança livre de nervos.',
        failureMessage: 'O centro do triângulo (V) formado pelos dedos é a área alvo.'
      }
    ]
  }
];
