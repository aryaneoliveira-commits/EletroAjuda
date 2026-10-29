// ==========================================================================
// ELETROAJUDA - BANCO DE DADOS TÉCNICO E EDUCACIONAL
// ==========================================================================

const ALL_BADGES = [
  {
    id: 'first-module',
    title: 'Primeiro Circuito',
    description: 'Concluiu seu primeiro módulo de estudo na plataforma.',
    icon: '⚡',
    category: 'iniciante'
  },
  {
    id: 'ohm-master',
    title: 'Mestre da Lei de Ohm',
    description: 'Completou o módulo da Lei de Ohm e acertou o questionário.',
    icon: '🏆',
    category: 'calculo'
  },
  {
    id: 'calculator-pro',
    title: 'Calculista de Bancada',
    description: 'Realizou cálculos em calculadoras elétricas da plataforma.',
    icon: '🧮',
    category: 'calculo'
  },
  {
    id: 'quiz-champion',
    title: 'Desafiante Expert',
    description: 'Acertou 80% ou mais das questões em uma rodada de exercícios.',
    icon: '🥇',
    category: 'mestre'
  },
  {
    id: 'safety-first',
    title: 'Eletrotécnico Seguro',
    description: 'Consultou as diretrizes de segurança elétrica NR-10.',
    icon: '🛡️',
    category: 'seguranca'
  },
  {
    id: 'all-modules',
    title: 'Técnico Graduado',
    description: 'Concluiu todos os 10 módulos da Central de Aprendizagem!',
    icon: '🎓',
    category: 'mestre'
  }
];

const MODULES_DATA = [
  {
    id: 1,
    slug: 'fundamentos-da-eletricidade',
    title: '1. Fundamentos da Eletricidade',
    subtitle: 'Estrutura atômica, elétrons livres, carga elétrica e natureza da corrente',
    description: 'Entenda como a matéria é constituída, por que certos materiais conduzem eletricidade e como os elétrons criam o fluxo elétrico.',
    category: 'Fundamentos',
    icon: '⚛️',
    readTime: '12 min',
    summaryPoints: [
      'Toda a matéria é formada por átomos compostos por prótons, nêutrons e elétrons.',
      'A carga elementar do elétron vale e = 1,6 × 10⁻¹⁹ Coulombs.',
      'Materiais condutores possuem elétrons livres na camada de valência.',
      'Materiais isolantes retêm seus elétrons fortemente ligados ao núcleo.',
      'Corrente contínua (CC) mantém sentido constante; alternada (CA) oscila periodicamente.'
    ],
    theorySections: [
      {
        title: 'Estrutura Atômica e Elétrons Livres',
        content: `A eletricidade tem origem no próprio átomo. No núcleo encontramos os prótons (carga elétrica positiva) e os nêutrons (sem carga). Ao redor do núcleo, orbitando na eletrosfera, estão os elétrons (carga elétrica negativa).\n\nEm materiais com boa condutividade (como cobre, alumínio e ouro), os elétrons da última órbita (camada de valência) estão fracamente ligados ao núcleo. Sob uma influência externa — como um campo elétrico gerado por uma bateria —, esses elétrons desprendem-se com facilidade, tornando-se elétrons livres. O movimento ordenado desses elétrons livres constitui a corrente elétrica.`
      },
      {
        title: 'Carga Elétrica e Quantização (Q = n · e)',
        content: `A carga elétrica é uma propriedade intrínseca das partículas fundamentais. No Sistema Internacional (SI), a unidade de medida da carga elétrica é o Coulomb (C).\n\nComo a menor porção isolável de carga na natureza é a carga de um único elétron (ou próton), dizemos que a carga é quantizada. Para haver uma carga total de 1 Coulomb, é necessário o deslocamento ordenado de aproximadamente 6,25 quintilhões de elétrons!`
      },
      {
        title: 'Corrente Contínua (CC) vs. Corrente Alternada (CA)',
        content: `Existem duas formas fundamentais de circulação da corrente elétrica:\n• Corrente Contínua (CC ou DC): Os portadores de carga fluem sempre no mesmo sentido. É fornecida por pilhas, baterias, células solares e fontes reguladas de bancada (como os 5V do Arduino).\n• Corrente Alternada (CA ou AC): O sentido e a intensidade da corrente variam ciclicamente com o tempo (onda senoidal). É o tipo gerado nas usinas hidrelétricas e transmitido até as tomadas residenciais (frequência de 60 Hz no Brasil).`
      }
    ],
    formulas: [
      {
        name: 'Quantidade de Carga Elétrica',
        expression: 'Q = n · e',
        description: 'Calcula a quantidade total de carga a partir do número de elétrons transferidos.',
        variables: [
          { symbol: 'Q', name: 'Quantidade de carga', unit: 'Coulomb (C)', description: 'Carga elétrica acumulada ou transferida' },
          { symbol: 'n', name: 'Número de elétrons', unit: 'adimensional', description: 'Quantidade de partículas elementares' },
          { symbol: 'e', name: 'Carga elementar', unit: 'Coulomb (C)', description: 'Constante física universal: 1,6 × 10⁻¹⁹ C' }
        ]
      },
      {
        name: 'Intensidade Média da Corrente Elétrica',
        expression: 'I = ΔQ / Δt',
        description: 'Define a corrente elétrica como a taxa de passagem de carga no tempo.',
        variables: [
          { symbol: 'I', name: 'Corrente elétrica', unit: 'Ampère (A)', description: 'Fluxo ordenado de cargas por segundo (1 A = 1 C/s)' },
          { symbol: 'ΔQ', name: 'Variação da carga', unit: 'Coulomb (C)', description: 'Carga líquida que cruza a seção transversal' },
          { symbol: 'Δt', name: 'Intervalo de tempo', unit: 'Segundo (s)', description: 'Tempo decorrido na medição' }
        ]
      }
    ],
    examples: [
      {
        title: 'Cálculo de Carga e Número de Elétrons',
        problem: 'Por um condutor elétrico metálico passa uma corrente constante de 2,5 A durante um período de 4 minutos. Determine a carga total que atravessou o fio e o número correspondente de elétrons.',
        givenData: [
          { label: 'Corrente (I)', value: '2,5 A' },
          { label: 'Tempo (Δt)', value: '4 minutos = 4 × 60 s = 240 s' },
          { label: 'Carga elementar (e)', value: '1,6 × 10⁻¹⁹ C' }
        ],
        steps: [
          'Passo 1: Converter o tempo para segundos (SI): Δt = 4 × 60 = 240 s.',
          'Passo 2: Aplicar a fórmula da corrente: Q = I · Δt.',
          'Passo 3: Calcular Q: Q = 2,5 A × 240 s = 600 C.',
          'Passo 4: Aplicar a quantização da carga: n = Q / e.',
          'Passo 5: Calcular o número de elétrons: n = 600 / (1,6 × 10⁻¹⁹) = 3,75 × 10²¹ elétrons.'
        ],
        finalAnswer: 'A carga transportada foi de 600 C, equivalente a 3,75 × 10²¹ elétrons.',
        explanation: 'Note como um valor aparentemente pequeno de tempo e corrente já envolve trilhões de bilhões de elétrons em movimento!'
      }
    ],
    practicalApplications: [
      'Escolha de cabos de cobre para fiação automotiva e circuitos eletrônicos.',
      'Funcionamento de baterias de íons de lítio em smartphones e notebooks.',
      'Blindagem eletrostática e pulseiras antiestáticas para bancadas eletrônicas.'
    ],
    safetyTips: [
      'Ao estudar fundamentos, trabalhe sempre com pilhas comuns (1,5V) ou baterias de 9V.',
      'Nunca tente realizar experiências com a rede elétrica residencial sem supervisão profissional.'
    ],
    quiz: [
      {
        id: 'q1-1',
        question: 'Qual partícula do átomo é responsável pela condução de corrente elétrica em condutores metálicos?',
        options: ['Próton', 'Nêutron', 'Elétron livre', 'Núcleo atômico'],
        correctIndex: 2,
        explanation: 'Nos metais, os elétrons livres da camada de valência desprendem-se facilmente e deslocam-se ordenadamente sob um campo elétrico.'
      },
      {
        id: 'q1-2',
        question: 'Se uma corrente de 0,5 A flui por um circuito durante 10 segundos, qual a carga transferida?',
        options: ['0,05 C', '5 C', '20 C', '50 C'],
        correctIndex: 1,
        explanation: 'Q = I · Δt = 0,5 A × 10 s = 5 C.'
      },
      {
        id: 'q1-3',
        question: 'Qual das alternativas apresenta uma fonte de corrente contínua (CC)?',
        options: ['Tomada residencial de 127V', 'Gerador eólico conectado à rede', 'Bateria alcalina de 9V', 'Transformador de poste'],
        correctIndex: 2,
        explanation: 'Baterias e pilhas fornecem corrente contínua pura, mantendo a polaridade e o sentido do fluxo constantes.'
      }
    ]
  },
  {
    id: 2,
    slug: 'tensao-corrente-resistencia',
    title: '2. Tensão, Corrente e Resistência',
    subtitle: 'As três grandezas fundamentais da eletroeletrônica e sua analogia hidráulica',
    description: 'Compreenda a diferença entre potencial elétrico, fluxo de cargas e oposição à passagem de corrente de forma intuitiva.',
    category: 'Fundamentos',
    icon: '⚡',
    readTime: '15 min',
    summaryPoints: [
      'Tensão Elétrica (U ou V): a "pressão" que impulsiona os elétrons, medida em Volts (V).',
      'Corrente Elétrica (I): a taxa de fluxo de elétrons, medida em Ampères (A).',
      'Resistência Elétrica (R): a oposição física à passagem de corrente, medida em Ohms (Ω).',
      'A analogia da caixa d’água: Tensão é a altura da água, Corrente é a vazão do cano e Resistência é o estrangulamento da torneira.',
      'Múltiplos e submúltiplos comuns: mV, kV; mA, µA; kΩ, MΩ.'
    ],
    theorySections: [
      {
        title: 'Tensão Elétrica (Diferença de Potencial - ddp)',
        content: `A tensão elétrica, representada pela letra V ou U, é a quantidade de energia fornecida a cada unidade de carga para que ela se mova entre dois pontos.\n\nUm Volt equivale a 1 Joule de energia por Coulomb de carga (1 V = 1 J/C). Sem uma diferença de potencial entre dois pontos, os elétrons livres movem-se de forma caótica e aleatória, sem produzir corrente líquida.`
      },
      {
        title: 'Corrente Elétrica (Intensidade)',
        content: `A corrente elétrica (I) mede a quantidade de carga elétrica que atravessa a seção transversal de um condutor por unidade de tempo. Sua unidade é o Ampère (A).\n\nConvencionalmente adotamos o sentido convencional da corrente (do pólo positivo para o negativo), embora fisicamente os elétrons se desloquem no sentido real (do negativo para o positivo). Para cálculos de circuitos, o sentido convencional é o padrão universal adotado.`
      },
      {
        title: 'Resistência Elétrica',
        content: `A resistência elétrica (R) é a oposição que os átomos de um material oferecem à passagem dos elétrons. Conforme os elétrons colidem com os núcleos da rede cristalina, parte da energia elétrica se transforma em calor (Efeito Joule).\n\nA unidade é o Ohm (Ω). Um resistor de 1 Ω permite a passagem de 1 A quando submetido a uma tensão de 1 V.`
      },
      {
        title: 'A Famosa Analogia Hidráulica',
        content: `Imagine uma caixa d'água elevada com uma tubulação e uma torneira:\n1. Tensão (Volts): É a altura da caixa d'água. Quanto mais alta, maior a pressão da água na base.\n2. Corrente (Ampères): É a vazão da água pelo tubo (litros por segundo).\n3. Resistência (Ohms): É o diâmetro do tubo ou o fechamento da torneira. Um cano fino dificulta o fluxo de água.`
      }
    ],
    formulas: [
      {
        name: 'Relação Tensão-Energia-Carga',
        expression: 'V = W / Q',
        description: 'Tensão como o trabalho (W) necessário para mover uma carga (Q).',
        variables: [
          { symbol: 'V', name: 'Tensão elétrica', unit: 'Volt (V)', description: 'Diferença de potencial' },
          { symbol: 'W', name: 'Trabalho / Energia', unit: 'Joule (J)', description: 'Energia fornecida às cargas' },
          { symbol: 'Q', name: 'Carga elétrica', unit: 'Coulomb (C)', description: 'Carga em movimento' }
        ]
      }
    ],
    examples: [
      {
        title: 'Conversão de Unidades Elétricas',
        problem: 'Um circuito eletrônico didático consome uma corrente de 25 mA e opera sob uma tensão de 0,005 kV. Expresse essas grandezas nas unidades fundamentais do SI (Ampères e Volts) e determine a resistência em kΩ sabendo que R = V / I.',
        givenData: [
          { label: 'Corrente (I)', value: '25 mA' },
          { label: 'Tensão (V)', value: '0,005 kV' }
        ],
        steps: [
          'Passo 1: Converter corrente: 1 mA = 10⁻³ A → 25 mA = 25 × 0,001 = 0,025 A.',
          'Passo 2: Converter tensão: 1 kV = 10³ V → 0,005 kV = 0,005 × 1000 = 5 V.',
          'Passo 3: Calcular a resistência: R = V / I = 5 V / 0,025 A = 200 Ω.',
          'Passo 4: Expressar em kΩ: 200 Ω = 0,2 kΩ.'
        ],
        finalAnswer: 'Tensão: 5 V; Corrente: 0,025 A; Resistência: 200 Ω (ou 0,2 kΩ).',
        explanation: 'A correta conversão de grandezas é indispensável para evitar queima de componentes em projetos práticos!'
      }
    ],
    practicalApplications: [
      'Dimensionamento de baterias para robôs e circuitos embarcados.',
      'Identificação de níveis lógicos TTL (0V = nível baixo, 5V = nível alto).',
      'Diagnóstico de quedas de tensão em cabos de alimentação.'
    ],
    safetyTips: [
      'Correntes a partir de 10 mA (0,01 A) alternada já provocam contrações musculares involuntárias.',
      'Em bancadas didáticas, limite a tensão a fontes seguras de até 12V CC.'
    ],
    quiz: [
      {
        id: 'q2-1',
        question: 'Na analogia hidráulica, a que grandeza elétrica corresponde a altura do reservatório de água?',
        options: ['Resistência elétrica', 'Tensão elétrica', 'Corrente elétrica', 'Potência térmica'],
        correctIndex: 1,
        explanation: 'A altura do reservatório cria a pressão potencial da água, assim como a ddp cria a tensão que impulsiona os elétrons.'
      },
      {
        id: 'q2-2',
        question: 'Quanto vale uma corrente de 1500 µA em miliamperes (mA)?',
        options: ['0,15 mA', '1,5 mA', '15 mA', '150 mA'],
        correctIndex: 1,
        explanation: 'Como 1 mA = 1000 µA, dividimos 1500 por 1000, obtendo 1,5 mA.'
      },
      {
        id: 'q2-3',
        question: 'Se um circuito não possui diferença de potencial aplicada (V = 0 V), o que acontece com a corrente?',
        options: ['Será máxima', 'Será nula (I = 0 A)', 'Será negativa', 'Permanece em 1 A'],
        correctIndex: 1,
        explanation: 'Sem diferença de potencial para empurrar os elétrons, não há fluxo ordenado de cargas, logo I = 0.'
      }
    ]
  },
  {
    id: 3,
    slug: 'lei-de-ohm',
    title: '3. Lei de Ohm',
    subtitle: 'A relação matemática entre Tensão, Corrente e Resistência',
    description: 'Domine a 1ª e a 2ª Lei de Ohm, o triângulo de fórmulas e aprenda a calcular qualquer variável com facilidade.',
    category: 'Circuitos',
    icon: '📊',
    readTime: '15 min',
    summaryPoints: [
      '1ª Lei de Ohm: V = R · I (em temperatura constante, V e I são diretamente proporcionais).',
      'O triângulo mnemônico de Ohm permite isolar V, I ou R tapando a letra desejada.',
      'Materiais ôhmicos mantêm resistência constante; não-ôhmicos (como diodos) variam.',
      '2ª Lei de Ohm: R = ρ · L / A (depende da resistividade, comprimento e espessura do condutor).'
    ],
    theorySections: [
      {
        title: 'Primeira Lei de Ohm',
        content: `Formulada pelo físico alemão Georg Simon Ohm em 1827, estabelece que, para condutores ôhmicos a uma temperatura constante, a diferença de potencial aplicada entre suas extremidades é diretamente proporcional à intensidade da corrente que o atravessa:\n\nV = R · I\n\nDessa relação derivam-se diretamente:\n• I = V / R (se aumentamos a resistência, a corrente diminui).\n• R = V / I (a resistência é a razão fixa entre a tensão e a corrente).`
      },
      {
        title: 'O Triângulo Mnemônico de Ohm',
        content: `Uma técnica didática muito útil para lembrar as equações:\nDesenhe um triângulo com o V no topo, e I e R na base:\n• Para achar V: tape o V → sobra I × R\n• Para achar I: tape o I → sobra V / R\n• Para achar R: tape o R → sobra V / I`
      },
      {
        title: 'Segunda Lei de Ohm (Fatores Físicos da Resistência)',
        content: `A resistência de um condutor uniforme depende de suas características geométricas e do material:\n\nR = (ρ · L) / A\n\nOnde:\n• ρ (rô): Resistividade elétrica do material (em Ω·m ou Ω·mm²/m).\n• L: Comprimento do condutor (em metros). Fios mais longos têm maior resistência!\n• A: Área da seção transversal (em m² ou mm²). Fios mais grossos têm menor resistência!`
      }
    ],
    formulas: [
      {
        name: 'Primeira Lei de Ohm',
        expression: 'V = R · I',
        description: 'Relação direta entre ddp, resistência e corrente em condutores ôhmicos.',
        variables: [
          { symbol: 'V', name: 'Tensão', unit: 'Volt (V)', description: 'Tensão aplicada aos terminais' },
          { symbol: 'R', name: 'Resistência', unit: 'Ohm (Ω)', description: 'Oposição à corrente do componente' },
          { symbol: 'I', name: 'Corrente', unit: 'Ampère (A)', description: 'Corrente resultante no circuito' }
        ]
      },
      {
        name: 'Segunda Lei de Ohm',
        expression: 'R = ρ · L / A',
        description: 'Cálculo da resistência a partir da geometria e resistividade do material.',
        variables: [
          { symbol: 'R', name: 'Resistência', unit: 'Ohm (Ω)', description: 'Resistência total do fio' },
          { symbol: 'ρ', name: 'Resistividade', unit: 'Ω · mm² / m', description: 'Propriedade intrínseca do material' },
          { symbol: 'L', name: 'Comprimento', unit: 'Metros (m)', description: 'Comprimento total da linha' },
          { symbol: 'A', name: 'Área da seção', unit: 'mm²', description: 'Espessura/bitola do condutor' }
        ]
      }
    ],
    examples: [
      {
        title: 'Dimensionamento de Corrente em Lâmpada Didática',
        problem: 'Uma lâmpada de 12 V possui filamento com resistência ôhmica interna de 24 Ω quando aquecida. Calcule a corrente que percorre o filamento ao ligar na bateria.',
        givenData: [
          { label: 'Tensão (V)', value: '12 V' },
          { label: 'Resistência (R)', value: '24 Ω' }
        ],
        steps: [
          'Passo 1: Identificar a incógnita: queremos encontrar a corrente (I).',
          'Passo 2: Isolar a corrente na 1ª Lei de Ohm: I = V / R.',
          'Passo 3: Substituir os valores numéricos: I = 12 / 24.',
          'Passo 4: Resolver a divisão: I = 0,5 A (ou 500 mA).'
        ],
        finalAnswer: 'A corrente elétrica no filamento é de 0,5 A (500 mA).',
        explanation: 'Se a resistência dobrasse para 48 Ω, a corrente cairia pela metade (0,25 A), ilustrando a relação inversamente proporcional.'
      }
    ],
    practicalApplications: [
      'Cálculo do resistor de proteção para não queimar LEDs.',
      'Dimensionamento da bitola de fios em instalações elétricas e robótica.',
      'Cálculo da corrente esperada em resistores de aquecimento e ferros de solda.'
    ],
    safetyTips: [
      'Cuidado com curto-circuito: se R se aproximar de zero (R ≈ 0 Ω), a corrente I = V / R tenderá a valores altíssimos, causando faíscas, queima do fusível ou risco de incêndio!'
    ],
    quiz: [
      {
        id: 'q3-1',
        question: 'Se a resistência de um circuito for mantida constante e a tensão dobrar, o que acontecerá com a corrente?',
        options: ['Cairá pela metade', 'Permanecerá inalterada', 'Dobrará', 'Irá a zero'],
        correctIndex: 2,
        explanation: 'Pela 1ª Lei de Ohm (I = V / R), a corrente é diretamente proporcional à tensão.'
      },
      {
        id: 'q3-2',
        question: 'Um resistor de 100 Ω é percorrido por uma corrente de 0,2 A. Qual é a queda de tensão sobre ele?',
        options: ['5 V', '10 V', '20 V', '200 V'],
        correctIndex: 2,
        explanation: 'V = R · I = 100 Ω × 0,2 A = 20 V.'
      },
      {
        id: 'q3-3',
        question: 'De acordo com a 2ª Lei de Ohm, se duplicarmos o comprimento de um condutor metálico, sua resistência:',
        options: ['Ficará quatro vezes menor', 'Cairá pela metade', 'Não mudará', 'Dobrará'],
        correctIndex: 3,
        explanation: 'A resistência é diretamente proporcional ao comprimento do condutor (R ∝ L).'
      }
    ]
  },
  {
    id: 4,
    slug: 'potencia-e-energia-eletrica',
    title: '4. Potência e Energia Elétrica',
    subtitle: 'Trabalho realizado, efeito Joule, dissipação térmica e consumo em kWh',
    description: 'Aprenda a calcular a potência elétrica, entender o efeito Joule e calcular o custo de energia elétrica de aparelhos.',
    category: 'Fundamentos',
    icon: '🔥',
    readTime: '14 min',
    summaryPoints: [
      'Potência Elétrica (P): velocidade com que a energia elétrica é transformada, medida em Watts (W).',
      'Fórmula fundamental: P = V · I.',
      'Fórmulas derivadas da Lei de Ohm: P = R · I² e P = V² / R.',
      'Efeito Joule: conversão direta de energia elétrica em energia térmica (calor).',
      'Energia consumida: E = P · Δt, comumente faturada em quilowatt-hora (kWh).'
    ],
    theorySections: [
      {
        title: 'Conceito de Potência Elétrica',
        content: `A potência elétrica representa a taxa temporal com que a energia elétrica é fornecida ou consumida por um componente. No Sistema Internacional, a unidade é o Watt (W), onde 1 Watt = 1 Joule por segundo (1 W = 1 J/s).\n\nEm corrente contínua, a potência depende diretamente da tensão aplicada e da corrente que flui:\nP = V · I`
      },
      {
        title: 'As Três Fórmulas da Potência',
        content: `Combinando a fórmula P = V · I com a Lei de Ohm (V = R · I e I = V / R), obtemos as três equações essenciais:\n1. P = V · I (quando conhecemos tensão e corrente).\n2. P = R · I² (quando conhecemos resistência e corrente — fundamental para calcular aquecimento por Efeito Joule!).\n3. P = V² / R (quando conhecemos tensão e resistência).`
      },
      {
        title: 'Energia Elétrica e a Conta de Luz (kWh)',
        content: `A energia elétrica total consumida depende da potência do aparelho e do tempo durante o qual ele permanece ligado:\n\nE = P · Δt\n\nPara fins práticos e de cobrança pelas concessionárias, utiliza-se o quilowatt-hora (kWh):\n• Potência em quilowatts (kW) = Watts / 1000.\n• Tempo em horas (h).\nExemplo: Um aquecedor de 2000 W (2 kW) ligado por 3 horas consome: E = 2 kW × 3 h = 6 kWh.`
      }
    ],
    formulas: [
      {
        name: 'Potência Elétrica Fundamental',
        expression: 'P = V · I',
        description: 'Potência em função da tensão e da corrente.',
        variables: [
          { symbol: 'P', name: 'Potência', unit: 'Watt (W)', description: 'Taxa de transformação de energia' },
          { symbol: 'V', name: 'Tensão', unit: 'Volt (V)', description: 'Diferença de potencial aplicada' },
          { symbol: 'I', name: 'Corrente', unit: 'Ampère (A)', description: 'Corrente elétrica circulante' }
        ]
      },
      {
        name: 'Potência por Efeito Joule',
        expression: 'P = R · I²',
        description: 'Dissipação térmica em um condutor resistivo.',
        variables: [
          { symbol: 'P', name: 'Potência dissipada', unit: 'Watt (W)', description: 'Calor gerado por segundo' },
          { symbol: 'R', name: 'Resistência', unit: 'Ohm (Ω)', description: 'Resistência do elemento aquecedor' },
          { symbol: 'I', name: 'Corrente', unit: 'Ampère (A)', description: 'Corrente que atravessa o resistor' }
        ]
      },
      {
        name: 'Consumo de Energia Elétrica',
        expression: 'E = (P · t) / 1000',
        description: 'Energia consumida em quilowatt-hora (kWh).',
        variables: [
          { symbol: 'E', name: 'Energia', unit: 'kWh', description: 'Consumo total de energia faturável' },
          { symbol: 'P', name: 'Potência', unit: 'Watt (W)', description: 'Potência nominal do aparelho' },
          { symbol: 't', name: 'Tempo', unit: 'Horas (h)', description: 'Duração do funcionamento' }
        ]
      }
    ],
    examples: [
      {
        title: 'Dissipação em um Resistor de Filme de Carbono',
        problem: 'Um resistor de 330 Ω está conectado a uma fonte de 12 V. Calcule a corrente, a potência dissipada pelo resistor e verifique se um resistor comum de 1/4 W (0,25 W) suportará a operação com segurança.',
        givenData: [
          { label: 'Tensão (V)', value: '12 V' },
          { label: 'Resistência (R)', value: '330 Ω' },
          { label: 'Potência nominal máxima', value: '1/4 W = 0,25 W' }
        ],
        steps: [
          'Passo 1: Calcular a corrente por Ohm: I = V / R = 12 / 330 ≈ 0,0364 A (36,4 mA).',
          'Passo 2: Calcular a potência dissipada: P = V² / R = (12)² / 330 = 144 / 330 ≈ 0,436 W.',
          'Passo 3: Comparar com a especificação do componente: 0,436 W > 0,25 W.'
        ],
        finalAnswer: 'A potência dissipada é de 0,436 W (436 mW). O resistor de 1/4 W NÃO suportará o circuito e irá queimar por sobreaquecimento!',
        explanation: 'Neste caso prático, o estudante técnico deve escolher um resistor com especificação de pelo menos 1/2 W (0,5 W) ou preferencialmente 1 W para operar com margem de segurança térmica.'
      }
    ],
    practicalApplications: [
      'Escolha da potência de resistores (1/8 W, 1/4 W, 1/2 W, 5 W de cerâmica).',
      'Dimensionamento de dissipadores de calor em reguladores de tensão e transistores.',
      'Cálculo da autonomia de baterias em no-breaks e robôs móveis.'
    ],
    safetyTips: [
      'Resistores e transistores sobrecarregados podem atingir temperaturas superiores a 150°C, provocando queimaduras na pele ou derretimento da protoboard.'
    ],
    quiz: [
      {
        id: 'q4-1',
        question: 'Um aparelho elétrico de 1000 W funciona por 5 horas diárias. Quantos kWh ele consome em 1 dia?',
        options: ['0,5 kWh', '2 kWh', '5 kWh', '50 kWh'],
        correctIndex: 2,
        explanation: 'E = P · t = (1000 W / 1000) × 5 h = 1 kW × 5 h = 5 kWh.'
      },
      {
        id: 'q4-2',
        question: 'Se dobrarmos a corrente que atravessa um resistor sem alterar sua resistência, a potência dissipada por efeito Joule:',
        options: ['Ficará a mesma', 'Dobrará', 'Quadruplicará (4x maior)', 'Cairá pela metade'],
        correctIndex: 2,
        explanation: 'Pela fórmula P = R · I², como a corrente está elevada ao quadrado, dobrar I faz com que a potência aumente em 2² = 4 vezes.'
      },
      {
        id: 'q4-3',
        question: 'Qual fórmula permite calcular a potência diretamente a partir da tensão e da resistência?',
        options: ['P = V / R', 'P = V² / R', 'P = R / V²', 'P = V · R'],
        correctIndex: 1,
        explanation: 'Substituindo I = V / R em P = V · I, temos P = V · (V / R) = V² / R.'
      }
    ]
  },
  {
    id: 5,
    slug: 'circuitos-serie-e-paralelo',
    title: '5. Circuitos em Série e em Paralelo',
    subtitle: 'Associação de resistores, Leis de Kirchhoff (LKC e LKT) e divisores de tensão',
    description: 'Aprenda a analisar malhas e nós, calcular a resistência equivalente e desvendar o comportamento da corrente e da tensão em cada topologia.',
    category: 'Circuitos',
    icon: '🔀',
    readTime: '18 min',
    summaryPoints: [
      'Circuito em Série: a corrente é a MESMA em todos os componentes; a tensão total é a soma das quedas de tensão.',
      'Resistência equivalente em série: Req = R1 + R2 + ... + Rn (sempre maior que o maior resistor).',
      'Circuito em Paralelo: a tensão é a MESMA em todos os ramos; a corrente total é a soma das correntes nos ramos.',
      'Resistência equivalente em paralelo: 1/Req = 1/R1 + 1/R2 + ... (sempre menor que o menor resistor).',
      'Para dois resistores em paralelo: Req = (R1 · R2) / (R1 + R2).',
      'Divisor de Tensão: Vout = Vin · [R2 / (R1 + R2)].'
    ],
    theorySections: [
      {
        title: 'Associação em Série',
        content: `Em um circuito série, os componentes estão ligados um após o outro, formando um único caminho fechado para a passagem da corrente elétrica.\n\nPrincipais propriedades:\n1. Corrente uniforme: I_total = I1 = I2 = ... = In.\n2. Soma das tensões (Lei de Kirchhoff das Malhas): V_total = V1 + V2 + ... + Vn.\n3. Resistência Equivalente: Req = R1 + R2 + ... + Rn.\nSe um componente do circuito série for rompido ou desconectado, o circuito é interrompido e a corrente em todo o circuito cessa imediatamente (como nas clássicas lâmpadas pisca-pisca antigas).`
      },
      {
        title: 'Associação em Paralelo',
        content: `Em um circuito paralelo, todos os componentes compartilham os mesmos dois nós elétricos principais, ficando submetidos exatamente à mesma diferença de potencial.\n\nPrincipais propriedades:\n1. Tensão idêntica: V_total = V1 = V2 = ... = Vn.\n2. Soma das correntes (Lei de Kirchhoff dos Nós): I_total = I1 + I2 + ... + In.\n3. Resistência Equivalente: 1 / Req = 1/R1 + 1/R2 + ... + 1/Rn.\nSe um componente for desligado, os demais continuam funcionando normalmente. É essa a topologia utilizada nas tomadas de residências e indústrias!`
      },
      {
        title: 'O Circuito Divisor de Tensão',
        content: `O divisor de tensão é um dos blocos mais comuns na eletrônica. Ele reduz uma tensão de entrada para um nível menor proporcional à razão dos resistores:\n\nV_out = V_in · [ R2 / (R1 + R2) ]\n\nÉ amplamente utilizado para condicionar sinais de sensores analógicos antes de conectá-los às entradas do Arduino (por exemplo, reduzindo 12V de uma bateria para no máximo 5V).`
      }
    ],
    formulas: [
      {
        name: 'Resistência Equivalente Série',
        expression: 'Req = R1 + R2 + ... + Rn',
        description: 'Soma simples das resistências individuais.',
        variables: [
          { symbol: 'Req', name: 'Resistência equivalente', unit: 'Ohm (Ω)', description: 'Resistência total da cadeia' },
          { symbol: 'R1, R2', name: 'Resistores individuais', unit: 'Ohm (Ω)', description: 'Valores dos resistores em série' }
        ]
      },
      {
        name: 'Resistência Equivalente Paralelo (Geral)',
        expression: '1 / Req = 1/R1 + 1/R2 + ... + 1/Rn',
        description: 'Soma dos inversos (condutâncias).',
        variables: [
          { symbol: 'Req', name: 'Resistência equivalente', unit: 'Ohm (Ω)', description: 'Resistência total resultante' },
          { symbol: 'R1, R2', name: 'Resistores individuais', unit: 'Ohm (Ω)', description: 'Resistores conectados em paralelo' }
        ]
      },
      {
        name: 'Dois Resistores em Paralelo (Produto pela Soma)',
        expression: 'Req = (R1 · R2) / (R1 + R2)',
        description: 'Fórmula simplificada muito ágil para cálculos de bancada.',
        variables: [
          { symbol: 'Req', name: 'Resistência equivalente', unit: 'Ohm (Ω)', description: 'Resultado da associação' },
          { symbol: 'R1, R2', name: 'Resistores associados', unit: 'Ohm (Ω)', description: 'Valores dos dois componentes' }
        ]
      },
      {
        name: 'Divisor de Tensão',
        expression: 'Vout = Vin · (R2 / (R1 + R2))',
        description: 'Tensão de saída sobre o resistor R2.',
        variables: [
          { symbol: 'Vout', name: 'Tensão de saída', unit: 'Volt (V)', description: 'Tensão recolhida sobre R2' },
          { symbol: 'Vin', name: 'Tensão de entrada', unit: 'Volt (V)', description: 'Tensão total de alimentação' },
          { symbol: 'R1, R2', name: 'Resistores divisores', unit: 'Ohm (Ω)', description: 'Resistores superior e inferior' }
        ]
      }
    ],
    examples: [
      {
        title: 'Cálculo Completo de Circuito Paralelo',
        problem: 'Dois resistores, R1 = 60 Ω e R2 = 40 Ω, são ligados em paralelo a uma bateria de 12 V. Calcule: a) a resistência equivalente (Req); b) a corrente em cada resistor; c) a corrente total fornecida pela bateria.',
        givenData: [
          { label: 'R1', value: '60 Ω' },
          { label: 'R2', value: '40 Ω' },
          { label: 'Fonte de Tensão (V)', value: '12 V' }
        ],
        steps: [
          'Passo 1: Calcular Req usando o produto pela soma: Req = (R1 · R2) / (R1 + R2) = (60 × 40) / (60 + 40) = 2400 / 100 = 24 Ω.',
          'Passo 2: Calcular a corrente em R1: como estão em paralelo, a tensão sobre R1 é 12 V. I1 = V / R1 = 12 / 60 = 0,2 A (200 mA).',
          'Passo 3: Calcular a corrente em R2: I2 = V / R2 = 12 / 40 = 0,3 A (300 mA).',
          'Passo 4: Calcular a corrente total pela LKC: Itotal = I1 + I2 = 0,2 + 0,3 = 0,5 A (500 mA).',
          'Passo 5: Conferir pela Lei de Ohm global: Itotal = V / Req = 12 / 24 = 0,5 A. Bateu perfeitamente!'
        ],
        finalAnswer: 'Req = 24 Ω; I1 = 0,2 A; I2 = 0,3 A; Itotal = 0,5 A.',
        explanation: 'Observe que a resistência equivalente (24 Ω) é menor do que qualquer um dos resistores individuais (menor que 40 Ω e 60 Ω), o que é uma regra invariável de circuitos paralelos.'
      }
    ],
    practicalApplications: [
      'Projetos de divisores de tensão para sensores de temperatura (termistores NTC) e luz (LDR).',
      'Associação de alto-falantes em sistemas de áudio para casar a impedância com o amplificador.',
      'Criação de valores não comerciais de resistências associando peças comuns do laboratório.'
    ],
    safetyTips: [
      'Ao adicionar cargas em paralelo na bancada, a corrente total exigida da fonte AUMENTA. Certifique-se de que a fonte não ultrapasse sua corrente nominal máxima para evitar sobreaquecimento.'
    ],
    quiz: [
      {
        id: 'q5-1',
        question: 'Três resistores iguais de 30 Ω são associados em paralelo. Qual é o valor da resistência equivalente?',
        options: ['90 Ω', '30 Ω', '10 Ω', '3 Ω'],
        correctIndex: 2,
        explanation: 'Quando n resistores idênticos de valor R estão em paralelo: Req = R / n = 30 / 3 = 10 Ω.'
      },
      {
        id: 'q5-2',
        question: 'Em um circuito série composto por dois resistores (R1 = 100 Ω e R2 = 300 Ω) alimentado por 20 V, a corrente que passa por R1 é:',
        options: ['A mesma que passa por R2', 'Três vezes maior que em R2', 'Três vezes menor que em R2', 'Zero'],
        correctIndex: 0,
        explanation: 'Em um circuito série há somente um caminho para os elétrons, de modo que a corrente é rigorosamente a mesma em todos os componentes.'
      },
      {
        id: 'q5-3',
        question: 'Um divisor de tensão tem Vin = 10 V, R1 = 1 kΩ e R2 = 1 kΩ. Qual é a tensão Vout medida sobre R2?',
        options: ['10 V', '5 V', '2,5 V', '1 V'],
        correctIndex: 1,
        explanation: 'Como os dois resistores são iguais, a tensão é dividida exatamente pela metade: 10 V × (1k / 2k) = 5 V.'
      }
    ]
  },
  {
    id: 6,
    slug: 'resistores-capacitores-potenciometros',
    title: '6. Resistores, Capacitores e Potenciômetros',
    subtitle: 'Código de cores, capacitância, constante de tempo RC e ajuste de grandezas',
    description: 'Explore a identificação prática de resistores pelas faixas coloridas, o armazenamento de carga em capacitores e o ajuste variável com potenciômetros.',
    category: 'Componentes',
    icon: '🎛️',
    readTime: '16 min',
    summaryPoints: [
      'Resistores fixos utilizam faixas coloridas para indicar valor ôhmico e tolerância.',
      'Capacitores armazenam energia em um campo elétrico gerado entre armaduras condutoras.',
      'Capacitância: C = Q / V (medida em Farads, tipicamente µF, nF e pF).',
      'Constante de tempo de carga/descarga RC: τ = R · C (atinge 63,2% em 1τ e 99% em 5τ).',
      'Potenciômetros são resistores ajustáveis com 3 terminais, funcionando como divisores de tensão mecânicos.'
    ],
    theorySections: [
      {
        title: 'Leitura do Código de Cores dos Resistores (4 Faixas)',
        content: `Para ler um resistor de 4 faixas:\n• 1ª Faixa: Primeiro dígito significativo.\n• 2ª Faixa: Segundo dígito significativo.\n• 3ª Faixa: Multiplicador (fator de 10ⁿ).\n• 4ª Faixa (espaçada): Tolerância (Dourado = ±5%, Prateado = ±10%, Marrom = ±1%).\n\nTabela mnemônica de cores:\nPreto (0), Marrom (1), Vermelho (2), Laranja (3), Amarelo (4), Verde (5), Azul (6), Violeta (7), Cinza (8), Branco (9).\nExemplo: Marrom (1), Preto (0), Vermelho (×100) = 1.000 Ω = 1 kΩ.`
      },
      {
        title: 'Capacitores e Armazenamento de Energia',
        content: `Um capacitor é composto por duas placas condutoras separadas por um material isolante chamado dielétrico (ar, cerâmica, poliéster, óxido de alumínio).\n\nQuando conectado a uma fonte, cargas elétricas se acumulam nas armaduras sem cruzar o dielétrico, armazenando energia potencial eletrostática.\nA capacitância mede a capacidade de acumular carga para cada volt aplicado: C = Q / V.`
      },
      {
        title: 'O Circuito RC e a Constante de Tempo (τ = R · C)',
        content: `Quando um capacitor é carregado ou descarregado através de um resistor:\n• A velocidade da carga é regida pelo produto τ = R · C (onde R é em Ohms, C é em Farads e τ é em segundos).\n• Em t = 1τ, o capacitor carrega até 63,2% da tensão da fonte.\n• Em t = 5τ, considera-se o capacitor totalmente carregado (99,3%).`
      },
      {
        title: 'Potenciômetros e Trimpots',
        content: `Um potenciômetro possui uma pista resistiva e um cursor móvel conectado ao pino central (Pino 2).\n• Entre os pinos 1 e 3: mede-se a resistência total fixa.\n• Entre os pinos 1 e 2 (ou 2 e 3): mede-se uma resistência variável contínua de 0 Ω até o valor nominal.\nLigando 5V no pino 1, GND no pino 3 e lendo o pino 2 com o Arduino, temos um botão de ajuste analógico perfeito!`
      }
    ],
    formulas: [
      {
        name: 'Capacitância',
        expression: 'C = Q / V',
        description: 'Capacidade de armazenamento eletrostático.',
        variables: [
          { symbol: 'C', name: 'Capacitância', unit: 'Farad (F)', description: 'Armazenamento de carga por volt' },
          { symbol: 'Q', name: 'Carga', unit: 'Coulomb (C)', description: 'Carga acumulada nas armaduras' },
          { symbol: 'V', name: 'Tensão', unit: 'Volt (V)', description: 'ddp aplicada entre as armaduras' }
        ]
      },
      {
        name: 'Constante de Tempo RC',
        expression: 'τ = R · C',
        description: 'Tempo característico da resposta transitória de um circuito RC.',
        variables: [
          { symbol: 'τ (tau)', name: 'Constante de tempo', unit: 'Segundos (s)', description: 'Tempo para atingir ~63% da carga' },
          { symbol: 'R', name: 'Resistência de carga', unit: 'Ohm (Ω)', description: 'Resistor em série com o capacitor' },
          { symbol: 'C', name: 'Capacitância', unit: 'Farad (F)', description: 'Capacitor do circuito' }
        ]
      }
    ],
    examples: [
      {
        title: 'Cálculo do Tempo de Temporização RC',
        problem: 'Um circuito de temporizador utiliza um resistor de 100 kΩ em série com um capacitor de 47 µF alimentado por 5 V. Calcule a constante de tempo τ e o tempo necessário para o capacitor ser considerado totalmente carregado (5τ).',
        givenData: [
          { label: 'R', value: '100 kΩ = 100.000 Ω = 10⁵ Ω' },
          { label: 'C', value: '47 µF = 47 × 10⁻⁶ F' }
        ],
        steps: [
          'Passo 1: Converter as unidades para o SI (Ohms e Farads).',
          'Passo 2: Aplicar a fórmula τ = R · C.',
          'Passo 3: Calcular τ: τ = 100.000 × (47 × 10⁻⁶) = 4,7 segundos.',
          'Passo 4: Calcular o tempo de carga plena (5τ): T_total = 5 × 4,7 = 23,5 segundos.'
        ],
        finalAnswer: 'A constante de tempo τ é de 4,7 segundos e a carga total ocorre em aproximadamente 23,5 segundos.',
        explanation: 'Circuitos temporizadores simples com o CI 555 baseiam-se exatamente nessa relação matemática para criar intervalos de atraso.'
      }
    ],
    practicalApplications: [
      'Filtros de linha para eliminar ruídos e ondulações (ripple) em fontes de alimentação.',
      'Controles de volume em amplificadores de som com potenciômetros logarítmicos.',
      'Desacoplamento de ruído digital em placas com microcontroladores (capacitores cerâmicos de 100 nF próximos aos pinos VCC e GND).'
    ],
    safetyTips: [
      'ATENÇÃO com capacitores eletrolíticos: eles possuem polaridade estrita! O terminal negativo (indicado por uma faixa com sinal de menos no invólucro) deve ser sempre ligado ao menor potencial (GND). Se invertidos ou submetidos a sobretensão, podem explodir violentamente!'
    ],
    quiz: [
      {
        id: 'q6-1',
        question: 'Quais as cores das três primeiras faixas de um resistor de 4,7 kΩ (4700 Ω)?',
        options: ['Amarelo, Violeta, Laranja', 'Amarelo, Violeta, Vermelho', 'Marrom, Preto, Vermelho', 'Verde, Azul, Amarelo'],
        correctIndex: 1,
        explanation: 'Amarelo = 4, Violeta = 7, Vermelho = ×100 (10²). Logo, 47 × 100 = 4.700 Ω = 4,7 kΩ.'
      },
      {
        id: 'q6-2',
        question: 'O que acontece com um capacitor quando ele atinge 5 constantes de tempo (5τ) em um circuito de carga com tensão contínua?',
        options: ['Ele entra em curto-circuito', 'Ele descarrega instantaneamente', 'Ele atinge mais de 99% da carga máxima e a corrente se torna praticamente zero', 'Ele queima'],
        correctIndex: 2,
        explanation: 'Em 5τ o capacitor está praticamente saturado (99,3% da carga) e a corrente que flui por ele cessa, comportando-se como um circuito aberto para CC.'
      },
      {
        id: 'q6-3',
        question: 'Qual a principal precaução de segurança ao soldar ou ligar um capacitor eletrolítico?',
        options: ['Não usar ferramentas de metal', 'Respeitar a polaridade indicada no corpo do componente', 'Sempre ligá-lo em paralelo com uma lâmpada', 'Aquecê-lo antes de energizar'],
        correctIndex: 1,
        explanation: 'Capacitores eletrolíticos são polarizados. A inversão de polaridade gera gases internos e pode provocar explosão.'
      }
    ]
  },
  {
    id: 7,
    slug: 'leds-diodos-e-transistores',
    title: '7. LEDs, Diodos e Transistores',
    subtitle: 'Semicondutores de junção PN, retificação, polarização e controle por corrente',
    description: 'Entenda os semicondutores fundamentais: a válvula de mão única do diodo, o brilho eficiente do LED e a amplificação e comutação com transistores bipolares.',
    category: 'Componentes',
    icon: '💡',
    readTime: '17 min',
    summaryPoints: [
      'Diodo: componente semicondutor com junção PN que conduz corrente em apenas um sentido (polarização direta).',
      'Queda de tensão direta típica: diodo de silício ~0,7 V; LEDs entre 1,8 V e 3,3 V conforme a cor.',
      'Cálculo do resistor limitador do LED: R = (Vcc - Vled) / Iled.',
      'Transistor BJT (Bipolar de Junção): possui 3 terminais — Base (B), Coletor (C) e Emissor (E).',
      'Uma pequena corrente na Base (Ib) controla uma corrente muito maior no Coletor (Ic = β · Ib).'
    ],
    theorySections: [
      {
        title: 'O Diodo Semicondutor e a Junção PN',
        content: `O diodo é formado pela união de um cristal de silício dopado tipo P (ânodo) e outro tipo N (cátodo).\n• Polarização Direta (Ânodo no positivo, Cátodo no negativo): A barreira de potencial (~0,7 V para o silício) é superada e a corrente flui livremente.\n• Polarização Reversa: A barreira se alarga, bloqueando quase totalmente a passagem de corrente.\nPor essa característica, diodos são usados como retificadores em fontes de alimentação e como diodos de roda-livre (flyback) para proteger circuitos contra picos indutivos de relés e motores.`
      },
      {
        title: 'LED (Diodo Emissor de Luz) e Resistor Limitador',
        content: `O LED emite fótons quando os elétrons se recombinam com as lacunas na junção PN. Ao contrário de uma lâmpada comum, o LED não possui resistência interna linear; se for ligado direto em uma fonte sem resistor limitador em série, a corrente disparará até a destruição física do componente!\n\nA fórmula para dimensionar o resistor de proteção é:\nR = (V_fonte - V_led) / I_led\n\nQuedas típicas (V_led):\n• Vermelho/Amarelo: ~1,8 V a 2,0 V.\n• Verde: ~2,1 V a 2,4 V.\n• Azul/Branco: ~3,0 V a 3,3 V.\nCorrente típica segura: 10 mA a 20 mA (0,01 A a 0,02 A).`
      },
      {
        title: 'Transistores Bipolares (BJT NPN e PNP)',
        content: `O transistor revolucionou o mundo moderno ao permitir o controle elétrico de sinais sem partes mecânicas. No modelo mais popular em projetos didáticos (NPN, como o BC548 ou 2N2222):\n• Pinos: Base (B), Coletor (C), Emissor (E).\n• Funcionamento: Quando injetamos uma pequena corrente na Base (passando por um resistor de proteção de base), o transistor "abre" a passagem entre o Coletor e o Emissor.\n• Ganho de corrente (hFE ou β): Ic = β · Ib.\n• Dois modos de operação cruciais:\n  1. Corte e Saturação (Chave Eletrônica): Usado com microcontroladores para ligar e desligar relés, motores e fitas LED.\n  2. Região Ativa (Amplificador linear): Usado em pré-amplificadores de áudio e microfones.`
      }
    ],
    formulas: [
      {
        name: 'Resistor Limitador de LED',
        expression: 'R = (Vcc - Vled) / Iled',
        description: 'Dimensionamento exato da resistência de proteção em série.',
        variables: [
          { symbol: 'R', name: 'Resistência de proteção', unit: 'Ohm (Ω)', description: 'Resistor a ser inserido no circuito' },
          { symbol: 'Vcc', name: 'Tensão da fonte', unit: 'Volt (V)', description: 'Tensão de alimentação' },
          { symbol: 'Vled', name: 'Queda de tensão do LED', unit: 'Volt (V)', description: 'Tensão direta típica do LED (Vf)' },
          { symbol: 'Iled', name: 'Corrente desejada no LED', unit: 'Ampère (A)', description: 'Tipicamente entre 10 e 20 mA' }
        ]
      },
      {
        name: 'Ganho do Transistor BJT',
        expression: 'Ic = β · Ib',
        description: 'Corrente de coletor em função do ganho de corrente contínua.',
        variables: [
          { symbol: 'Ic', name: 'Corrente de coletor', unit: 'Ampère (A)', description: 'Corrente principal de carga' },
          { symbol: 'β (ou hFE)', name: 'Ganho de corrente', unit: 'adimensional', description: 'Fator de amplificação (ex: 100 a 300)' },
          { symbol: 'Ib', name: 'Corrente de base', unit: 'Ampère (A)', description: 'Pequena corrente de controle' }
        ]
      }
    ],
    examples: [
      {
        title: 'Dimensionando Resistor para LED Vermelho no Arduino (5V)',
        problem: 'Deseja-se ligar um LED vermelho comum (tensão direta Vf = 2,0 V e corrente recomendada de 15 mA) em uma saída digital de 5 V do Arduino. Calcule o resistor comercial necessário e a potência dissipada por ele.',
        givenData: [
          { label: 'Tensão da fonte (Vcc)', value: '5 V' },
          { label: 'Tensão direta do LED (Vled)', value: '2,0 V' },
          { label: 'Corrente de projeto (Iled)', value: '15 mA = 0,015 A' }
        ],
        steps: [
          'Passo 1: Determinar a queda de tensão que deve ficar sobre o resistor: VR = Vcc - Vled = 5 V - 2,0 V = 3,0 V.',
          'Passo 2: Aplicar a Lei de Ohm para calcular R: R = VR / Iled = 3,0 V / 0,015 A = 200 Ω.',
          'Passo 3: Escolher o valor comercial E24 mais próximo: 220 Ω (que resultará em uma corrente ligeiramente menor e ainda mais segura).',
          'Passo 4: Calcular a potência no resistor: P = VR · Iled = 3,0 V × 0,015 A = 0,045 W (45 mW). Um resistor padrão de 1/4 W (0,25 W) operará com extrema folga térmica.'
        ],
        finalAnswer: 'O resistor calculado é de 200 Ω; recomenda-se o valor comercial padrão de 220 Ω (Vermelho-Vermelho-Marrom).',
        explanation: 'Sem esse resistor, a saída do microcontrolador e o LED seriam danificados por sobrecorrente instantânea.'
      }
    ],
    practicalApplications: [
      'Luzes de sinalização e telas de matriz de LEDs.',
      'Ponte H para inversão de sentido de giro de motores DC usando transistores MOSFETs.',
      'Fontes retificadoras de onda completa com ponte de diodos (ponte de Graetz).'
    ],
    safetyTips: [
      'Diodos e LEDs só funcionam quando montados com a polaridade correta. O terminal mais longo do LED é o Ânodo (+); o lado chanfrado e terminal mais curto é o Cátodo (-).'
    ],
    quiz: [
      {
        id: 'q7-1',
        question: 'O que ocorre se um diodo comum de silício for ligado com o ânodo no pólo negativo e o cátodo no pólo positivo de uma bateria?',
        options: ['Ele conduzirá corrente máxima', 'Ele estará em polarização reversa e bloqueará a corrente', 'Ele emitirá luz branca', 'Ele inverterá a tensão da bateria'],
        correctIndex: 1,
        explanation: 'Na polarização reversa a junção PN alarga sua barreira interna, impedindo o fluxo de corrente.'
      },
      {
        id: 'q7-2',
        question: 'Por que é indispensável colocar um resistor em série ao ligar um LED em uma fonte de 5 V?',
        options: ['Para transformar corrente alternada em contínua', 'Para limitar a corrente e evitar a queima imediata do componente', 'Para aumentar o brilho do LED', 'Para inverter o sentido dos elétrons'],
        correctIndex: 1,
        explanation: 'O LED possui resistência dinâmica muito baixa após atingir sua tensão de condução; sem um resistor limitador, a corrente subirá descontroladamente.'
      },
      {
        id: 'q7-3',
        question: 'Em um transistor BJT operando como chave saturada, o comportamento entre o Coletor e o Emissor assemelha-se a:',
        options: ['Um interruptor aberto (desligado)', 'Um interruptor fechado (conduzindo com baixa queda de tensão)', 'Um resistor de altíssimo valor', 'Um gerador de tensão alternada'],
        correctIndex: 1,
        explanation: 'Na saturação, o transistor atua como uma chave fechada (Vce_sat ≈ 0,2 V), permitindo a condução máxima da carga.'
      }
    ]
  },
  {
    id: 8,
    slug: 'eletronica-digital-e-portas-logicas',
    title: '8. Eletrônica Digital e Portas Lógicas',
    subtitle: 'Níveis lógicos binários, portas AND, OR, NOT, NAND, NOR, XOR e tabelas-verdade',
    description: 'Entre no fascinante mundo digital: o sistema binário (0 e 1), as portas lógicas fundamentais, tabelas-verdade e a álgebra booleana que move os computadores.',
    category: 'Digital',
    icon: '💻',
    readTime: '15 min',
    summaryPoints: [
      'Na eletrônica digital os sinais assumem apenas dois estados discretos: NÍVEL BAIXO (0 / LOW / ~0V) e NÍVEL ALTO (1 / HIGH / ~5V ou 3.3V).',
      'Porta NOT (Inversora): inverte a entrada (se entra 0 sai 1; se entra 1 sai 0).',
      'Porta AND (E): saída é 1 SOMENTE se TODAS as entradas forem 1.',
      'Porta OR (OU): saída é 1 se PELO MENOS UMA entrada for 1.',
      'Portas NAND e NOR: são as inversões das portas AND e OR (universalmente completas).',
      'Porta XOR (OU Exclusivo): saída é 1 quando as entradas forem DIFERENTES.'
    ],
    theorySections: [
      {
        title: 'Sinais Analógicos vs. Sinais Digitais',
        content: `• Sinal Analógico: Varia de forma contínua no tempo, podendo assumir infinitos valores de amplitude (como a voz humana captada por um microfone).\n• Sinal Digital: Opera com valores quantizados e discretos. Na lógica booleana padrão, utilizamos apenas dois estados: Falso (0) e Verdadeiro (1).\nEssa abordagem digital oferece extrema imunidade a ruídos eletromagnéticos, permitindo o armazenamento e processamento de informações complexas sem perdas.`
      },
      {
        title: 'As Portas Lógicas Fundamentais',
        content: `As portas lógicas são blocos eletrônicos microscópicos feitos de transistores integrados:\n1. NOT (Inversor): S = A' (ou NÃO A). Se entra 1, sai 0.\n2. AND (Porta E): S = A · B. A saída só é ativada se A e B forem verdadeiros simultaneamente (como dois interruptores em série).\n3. OR (Porta OU): S = A + B. A saída é ativada se A ou B (ou ambos) forem verdadeiros (como dois interruptores em paralelo).`
      },
      {
        title: 'Portas Derivadas: NAND, NOR, XOR e XNOR',
        content: `• NAND: Negação da porta AND. S = (A · B)'. A saída só é 0 se ambas forem 1.\n• NOR: Negação da porta OR. S = (A + B)'. A saída só é 1 se ambas as entradas forem 0.\n• XOR (Exclusive OR): S = A ⊕ B. A saída é 1 se e somente se as entradas forem diferentes entre si (0 e 1, ou 1 e 0). É a base dos somadores binários aritméticos!`
      }
    ],
    formulas: [
      {
        name: 'Expressão Booleana AND',
        expression: 'S = A · B',
        description: 'Multiplicação lógica ou conjunção.',
        variables: [
          { symbol: 'A, B', name: 'Entradas lógicas', unit: '0 ou 1', description: 'Valores binários de entrada' },
          { symbol: 'S', name: 'Saída lógica', unit: '0 ou 1', description: 'Resultado da operação lógica' }
        ]
      },
      {
        name: 'Expressão Booleana OR',
        expression: 'S = A + B',
        description: 'Soma lógica ou disjunção.',
        variables: [
          { symbol: 'A, B', name: 'Entradas lógicas', unit: '0 ou 1', description: 'Valores binários de entrada' },
          { symbol: 'S', name: 'Saída lógica', unit: '0 ou 1', description: 'Resultado da operação lógica' }
        ]
      },
      {
        name: 'Expressão Booleana XOR',
        expression: 'S = A ⊕ B = (A\' · B) + (A · B\')',
        description: 'Disjunção exclusiva.',
        variables: [
          { symbol: 'A, B', name: 'Entradas', unit: '0 ou 1', description: 'Bits de entrada' },
          { symbol: 'S', name: 'Saída', unit: '0 ou 1', description: '1 se forem diferentes, 0 se forem iguais' }
        ]
      }
    ],
    examples: [
      {
        title: 'Construção e Análise da Tabela-Verdade de uma Porta NAND',
        problem: 'Determine a saída S para todas as combinações de entrada de uma porta NAND de 2 entradas e escreva sua tabela-verdade.',
        givenData: [
          { label: 'Porta', value: 'NAND (NOT-AND)' },
          { label: 'Entradas possíveis', value: '(0,0), (0,1), (1,0), (1,1)' }
        ],
        steps: [
          'Passo 1: Avaliar (A=0, B=0) → AND dá 0 → Invertendo (NAND) = 1.',
          'Passo 2: Avaliar (A=0, B=1) → AND dá 0 → Invertendo (NAND) = 1.',
          'Passo 3: Avaliar (A=1, B=0) → AND dá 0 → Invertendo (NAND) = 1.',
          'Passo 4: Avaliar (A=1, B=1) → AND dá 1 → Invertendo (NAND) = 0.'
        ],
        finalAnswer: 'A saída S é 1 para (0,0), (0,1) e (1,0); e a saída é 0 apenas quando A=1 e B=1.',
        explanation: 'A porta NAND é considerada uma "porta universal", pois através de combinações de portas NAND é possível criar qualquer outro circuito digital.'
      }
    ],
    practicalApplications: [
      'Sistemas de intertravamento de segurança em máquinas industriais.',
      'Circuitos integrados clássicos da família 74HCxx (como 74HC08 AND, 74HC32 OR e 74HC00 NAND).',
      'Decodificadores para display de 7 segmentos.'
    ],
    safetyTips: [
      'Circuitos integrados digitais modernos (como tecnologia CMOS) são altamente sensíveis a descargas eletrostáticas (ESD). Nunca toque nos pinos sem descarregar a estática do corpo.'
    ],
    quiz: [
      {
        id: 'q8-1',
        question: 'Qual porta lógica fornece saída em nível alto (1) se e somente se AMBAS as entradas forem nível alto (1)?',
        options: ['Porta OR', 'Porta NOT', 'Porta AND', 'Porta XOR'],
        correctIndex: 2,
        explanation: 'A porta AND (E) exige que todas as suas entradas sejam 1 para produzir saída 1.'
      },
      {
        id: 'q8-2',
        question: 'Se as entradas A e B de uma porta XOR forem ambas iguais a 1 (A = 1 e B = 1), qual será a saída S?',
        options: ['1', '0', 'Indefinida', '5 V contínuo'],
        correctIndex: 1,
        explanation: 'A porta XOR (OU Exclusivo) resulta em 0 quando as entradas são idênticas (0 ⊕ 0 = 0 e 1 ⊕ 1 = 0).'
      },
      {
        id: 'q8-3',
        question: 'Quantas combinações distintas de entradas possui a tabela-verdade de um circuito lógico com 3 variáveis de entrada (A, B, C)?',
        options: ['3', '6', '8 (2³)', '16 (2⁴)'],
        correctIndex: 2,
        explanation: 'O número de linhas de uma tabela-verdade é dado por 2ⁿ, onde n é o número de entradas. Com 3 entradas, 2³ = 8 combinações.'
      }
    ]
  },
  {
    id: 9,
    slug: 'instrumentos-de-medicao-multimetro',
    title: '9. Instrumentos de Medição: O Multímetro',
    subtitle: 'Voltímetro, amperímetro, ohmímetro, teste de continuidade e segurança CAT',
    description: 'Aprenda a utilizar corretamente a ferramenta mais importante do técnico em bancada: escalas, ligação em série vs. paralelo e como nunca queimar o instrumento.',
    category: 'Prática',
    icon: '📟',
    readTime: '15 min',
    summaryPoints: [
      'O multímetro reúne voltímetro, amperímetro e ohmímetro em um único aparelho.',
      'Medição de Tensão (Voltímetro): pontas ligadas sempre em PARALELO com o componente, circuito energizado.',
      'Medição de Corrente (Amperímetro): ligado sempre em SÉRIE com o circuito (o circuito deve ser aberto para o instrumento ser inserido).',
      'Medição de Resistência (Ohmímetro): NUNCA meça em circuito energizado! O componente deve estar desenergizado e isolado da placa.',
      'Categorias de sobretensão (CAT I, II, III e IV) definem os limites seguros de uso.'
    ],
    theorySections: [
      {
        title: 'Como Medir Tensão Elétrica (Voltímetro)',
        content: `O voltímetro possui uma resistência interna extremamente alta (superior a 10 MΩ) para não interferir no circuito.\n• Modo de ligação: Conecte as pontas de prova em PARALELO com o componente cuja queda de tensão você deseja aferir.\n• O circuito permanece energizado.\n• Seletor: Escolha V= (tensão contínua DC) para pilhas, baterias e circuitos microcontrolados, ou V~ (tensão alternada AC) para tomadas e saídas de transformadores.`
      },
      {
        title: 'Como Medir Corrente Elétrica (Amperímetro) — O Maior Erro dos Alunos!',
        content: `O amperímetro possui resistência interna praticamente ZERO (uma fração de ohm) para não limitar o circuito.\n• Modo de ligação: O amperímetro deve ser inserido em SÉRIE!\n• É necessário abrir o circuito (desconectar um fio ou terminal de componente) e fazer com que a corrente entre pela ponta vermelha e saia pela ponta preta do multímetro.\n⚠️ ERRO FATAL: Se você ligar o multímetro na função de corrente em paralelo com uma bateria ou fonte, ocorrerá um curto-circuito violento, queimando o fusível interno do instrumento ou destruindo as pontas de prova!`
      },
      {
        title: 'Como Medir Resistência e Teste de Continuidade',
        content: `• Regra de Ouro: O circuito deve estar completamente DESLIGADO e DESENERGIZADO! O multímetro injeta uma pequena corrente própria de sua bateria interna para calcular R = V/I.\n• Para não ler componentes vizinhos na placa, solte pelo menos um dos terminais do resistor antes de medir.\n• Teste de Continuidade (Bip sonoro): Apita se a resistência medida for muito baixa (geralmente abaixo de 50 Ω). É excelente para encontrar trilhas rompidas, cabos partidos e testar chaves.`
      }
    ],
    formulas: [
      {
        name: 'Resistência de Shunt no Amperímetro',
        expression: 'Rsh = (Im · Rm) / (I - Im)',
        description: 'Cálculo do resistor shunt para desvio de corrente em amperímetros.',
        variables: [
          { symbol: 'Rsh', name: 'Resistor shunt', unit: 'Ohm (Ω)', description: 'Resistor de baixíssimo valor em paralelo' },
          { symbol: 'Rm', name: 'Resistência interna do galvanômetro', unit: 'Ohm (Ω)', description: 'Resistência da bobina de medição' },
          { symbol: 'Im', name: 'Corrente máxima do instrumento', unit: 'Ampère (A)', description: 'Fundo de escala do medidor básico' },
          { symbol: 'I', name: 'Corrente total medida', unit: 'Ampère (A)', description: 'Faixa ampliada desejada' }
        ]
      }
    ],
    examples: [
      {
        title: 'Identificando o Procedimento Correto de Medição',
        problem: 'Um estudante deseja medir a corrente consumida por um motor DC conectado a uma fonte de bancada de 12 V. Descreva o passo a passo seguro para preparar e conectar o multímetro.',
        givenData: [
          { label: 'Grandeza a medir', value: 'Corrente contínua (A DC)' },
          { label: 'Circuito sob teste', value: 'Motor DC de 12 V' }
        ],
        steps: [
          'Passo 1: Desligar a chave geral da fonte de alimentação de 12 V.',
          'Passo 2: Mover a ponta vermelha do multímetro para o borne adequado de corrente (ex: borne de 10A para segurança inicial caso o motor puxe pico de partida).',
          'Passo 3: Girar o seletor rotativo para corrente contínua (DCA ou A=).',
          'Passo 4: Desconectar o fio positivo que vai da fonte até o terminal do motor (abrindo o circuito).',
          'Passo 5: Conectar a ponta vermelha do multímetro ao fio positivo da fonte e a ponta preta ao terminal do motor (fechando o circuito através do instrumento).',
          'Passo 6: Ligar a fonte de bancada e ler o valor no display digital.'
        ],
        finalAnswer: 'O instrumento foi inserido em série com a carga com o borne e escala corretos.',
        explanation: 'Seguindo esse protocolo, evita-se a queima do fusível do multímetro e garante-se a integridade do operador.'
      }
    ],
    practicalApplications: [
      'Localização de curtos-circuitos e trilhas partidas em placas de circuito impresso (PCB).',
      'Verificação da integridade de fusíveis.',
      'Aferição da tensão real fornecida por portas USB e carregadores de celular.'
    ],
    safetyTips: [
      'NUNCA meça resistência com o circuito ligado.',
      'Sempre comece a medição pela escala mais alta quando não souber a grandeza esperada.',
      'Verifique se as pontas de prova não estão com a isolação de borracha ressecada ou rachada.'
    ],
    quiz: [
      {
        id: 'q9-1',
        question: 'Qual a maneira correta de conectar as pontas de prova de um multímetro para medir a TENSÃO sobre um resistor em funcionamento?',
        options: ['Em série, abrindo o circuito', 'Em paralelo com o resistor, com o circuito energizado', 'Com o circuito desenergizado', 'No borne de alta corrente de 10 A'],
        correctIndex: 1,
        explanation: 'A tensão é a ddp entre dois pontos, logo o voltímetro deve ser ligado em paralelo com esses dois pontos enquanto o circuito está ligado.'
      },
      {
        id: 'q9-2',
        question: 'O que acontece se um estudante tentar medir a corrente de uma tomada conectando o amperímetro diretamente nos dois orifícios da tomada?',
        options: ['O multímetro medirá 220 A com precisão', 'Ocorrerá um curto-circuito severo que queimará o fusível do instrumento ou desarmará o disjuntor', 'O aparelho desligará normalmente', 'O display mostrará 0 A'],
        correctIndex: 1,
        explanation: 'O amperímetro tem resistência quase nula. Ligá-lo em paralelo com uma fonte de tensão equivale a fechar um curto-circuito pleno!'
      },
      {
        id: 'q9-3',
        question: 'Para testar se um cabo condutor está partido internamente usando o teste sonoro de continuidade, o cabo deve estar:',
        options: ['Ligado à rede de 127V', 'Desconectado de qualquer fonte de energia', 'Imerso em água', 'Aquecido com ferro de solda'],
        correctIndex: 1,
        explanation: 'O teste de continuidade utiliza a bateria interna do próprio multímetro; qualquer tensão externa pode danificar o instrumento.'
      }
    ]
  },
  {
    id: 10,
    slug: 'introducao-ao-arduino',
    title: '10. Introdução ao Arduino',
    subtitle: 'Microcontroladores, pinos digitais, leitura analógica, PWM e o primeiro código',
    description: 'Una eletrônica e programação: aprenda a anatomia da placa Arduino Uno, a diferença entre portas digitais e analógicas e como controlar o mundo físico com código.',
    category: 'Prática',
    icon: '🤖',
    readTime: '18 min',
    summaryPoints: [
      'O Arduino Uno é uma plataforma de prototipagem baseada no microcontrolador ATmega328P.',
      'Possui 14 pinos digitais (0 a 13) que operam em 0V (LOW) ou 5V (HIGH), sendo 6 com suporte a PWM (~).',
      'Possui 6 pinos analógicos (A0 a A5) com conversor Analógico-Digital (ADC) de 10 bits (lê de 0 a 1023).',
      'Estrutura essencial do código: void setup() roda uma vez na inicialização; void loop() repete infinitamente.',
      'PWM (Pulse Width Modulation) simula tensões analógicas variando o ciclo de trabalho (duty cycle).'
    ],
    theorySections: [
      {
        title: 'O que é o Arduino e Anatomia do Arduino Uno',
        content: `O Arduino é uma placa de desenvolvimento que simplifica o uso de microcontroladores.\n• Microcontrolador (ATmega328P): O "cérebro" que contém processador, memória Flash para o programa, memória RAM e periféricos em um único chip.\n• Alimentação: Pode ser alimentado pelo conector USB (5V) ou pelo plug P4 de alimentação externa (7V a 12V recomendado, regulado internamente para 5V).\n• Cristal Oscilador: Opera na frequência de 16 MHz, executando até 16 milhões de instruções por segundo.`
      },
      {
        title: 'Portas Digitais e Modulação PWM',
        content: `• Pinos Digitais (0 a 13): Podem ser configurados como ENTRADA (leitura de botões) ou SAÍDA (acionamento de LEDs, relés, transistores). Cada pino fornece com segurança no máximo 20 mA a 40 mA a 5V.\n• PWM (Pulse Width Modulation - pinos 3, 5, 6, 9, 10 e 11): Permite simular tensões contínuas variáveis entre 0V e 5V ligando e desligando a saída em alta frequência. A função analogWrite(pino, valor) aceita valores de 0 (0% duty cycle, 0V) a 255 (100% duty cycle, 5V).`
      },
      {
        title: 'Portas Analógicas e Conversor A/D (ADC de 10 bits)',
        content: `Os pinos A0 a A5 conseguem ler qualquer tensão entre 0 V e 5 V proveniente de sensores contínuos (como LDR para luz, termistores e potenciômetros).\nComo o conversor possui resolução de 10 bits (2¹⁰ = 1024 níveis):\n• 0 V corresponde ao valor 0.\n• 5 V corresponde ao valor 1023.\n• Cada unidade lida equivale a aproximadamente: 5 V / 1024 ≈ 4,88 mV.`
      },
      {
        title: 'A Estrutura do Código Arduino (C/C++)',
        content: `Todo sketch do Arduino possui duas funções obrigatórias:\nvoid setup() {\n  // Configurações iniciais: executa apenas UMA VEZ\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  // Código principal: executa repetidamente em loop infinito\n  digitalWrite(13, HIGH); // Liga o LED (5V)\n  delay(1000);            // Espera 1000 milissegundos\n  digitalWrite(13, LOW);  // Desliga o LED (0V)\n  delay(1000);            // Espera 1000 milissegundos\n}`
      }
    ],
    formulas: [
      {
        name: 'Conversão Analógica do ADC',
        expression: 'V_lida = (Leitura_ADC · 5,0) / 1023',
        description: 'Converte o valor numérico lido (0 a 1023) na tensão real em Volts.',
        variables: [
          { symbol: 'V_lida', name: 'Tensão calculada', unit: 'Volt (V)', description: 'Tensão real no pino analógico' },
          { symbol: 'Leitura_ADC', name: 'Valor bruto', unit: '0 a 1023', description: 'Número inteiro retornado por analogRead()' },
          { symbol: '5,0', name: 'Tensão de referência', unit: 'Volt (V)', description: 'Tensão Vref padrão do Arduino Uno' }
        ]
      },
      {
        name: 'Resolução do ADC',
        expression: 'Res = Vref / 2ⁿ',
        description: 'Menor incremento de tensão detectável pelo conversor.',
        variables: [
          { symbol: 'Res', name: 'Resolução', unit: 'Volt / LSB', description: 'Sensibilidade por bit' },
          { symbol: 'Vref', name: 'Tensão de referência', unit: 'Volt (V)', description: 'Tensão máxima de escala' },
          { symbol: 'n', name: 'Número de bits', unit: 'bits', description: 'Resolução do conversor (n = 10 bits)' }
        ]
      }
    ],
    examples: [
      {
        title: 'Interpretando Leitura Analógica de Potenciômetro',
        problem: 'Um potenciômetro de 10 kΩ tem seus pinos extremos ligados em 5V e GND do Arduino, e o cursor central ligado no pino A0. Ao ler com a função analogRead(A0), o monitor serial exibiu o valor 512. Qual a tensão presente no pino A0 e a que posição do potenciômetro isso corresponde?',
        givenData: [
          { label: 'Leitura_ADC', value: '512' },
          { label: 'Resolução', value: '10 bits (0 a 1023)' },
          { label: 'Vref', value: '5,0 V' }
        ],
        steps: [
          'Passo 1: Aplicar a fórmula de conversão: V_lida = (Leitura_ADC · 5,0) / 1023.',
          'Passo 2: Substituir os valores: V_lida = (512 · 5,0) / 1023.',
          'Passo 3: Resolver: V_lida = 2560 / 1023 ≈ 2,502 V.',
          'Passo 4: Analisar a proporção: 512 é exatamente a metade de 1024.'
        ],
        finalAnswer: 'A tensão lida é de aproximadamente 2,50 V, indicando que o eixo do potenciômetro está exatamente no meio de seu curso.',
        explanation: 'Esse é o princípio de funcionamento de joysticks analógicos, pedais de acelerador eletrônico e termômetros digitais.'
      }
    ],
    practicalApplications: [
      'Automação residencial (acionamento de lâmpadas com relé e sensores de presença).',
      'Estações meteorológicas didáticas com sensores DHT11 de temperatura e umidade.',
      'Robôs seguidores de linha e braços robóticos com servomotores.'
    ],
    safetyTips: [
      'NUNCA conecte motores DC de alta potência ou bobinas de relé DIRETAMENTE aos pinos do Arduino! Use sempre um transistor ou driver com diodo flyback para evitar que picos indutivos queimem o microcontrolador.'
    ],
    quiz: [
      {
        id: 'q10-1',
        question: 'Qual função do Arduino é executada repetidamente em loop infinito enquanto a placa estiver ligada?',
        options: ['void setup()', 'void loop()', 'pinMode()', 'digitalWrite()'],
        correctIndex: 1,
        explanation: 'A função void loop() roda continuamente em ciclo infinito, sendo o núcleo do programa de automação.'
      },
      {
        id: 'q10-2',
        question: 'Qual é o valor máximo que a função analogRead() pode retornar no conversor A/D padrão de 10 bits do Arduino Uno?',
        options: ['255', '500', '1023', '4096'],
        correctIndex: 2,
        explanation: 'Um conversor de 10 bits gera 2¹⁰ = 1024 valores possíveis, variando de 0 a 1023.'
      },
      {
        id: 'q10-3',
        question: 'Qual valor deve ser passado na função analogWrite(pinoPWM, valor) para produzir uma saída com aproximadamente 50% de potência (2,5V médio)?',
        options: ['50', '127 (ou 128)', '255', '512'],
        correctIndex: 1,
        explanation: 'A escala do analogWrite() vai de 0 a 255. Metade de 255 é aproximadamente 127 ou 128 (50% de duty cycle).'
      }
    ]
  }
];

const COMPONENTS_DATA = [
  {
    id: 'resistor',
    name: 'Resistor Fixo de Filme de Carbono',
    technicalName: 'Resistor Ôhmico Linear',
    category: 'Passivos',
    icon: '〰️',
    symbol: 'Resistor (Zig-zag / Retângulo)',
    pinout: ['Terminal 1 (sem polaridade)', 'Terminal 2 (sem polaridade)'],
    functionality: 'Limitar a passagem de corrente elétrica, dividir tensões e dissipar calor por Efeito Joule.',
    operatingPrinciple: 'Baseia-se na oposição natural que a fina película de carbono oferece ao deslocamento ordenado dos elétrons livres. A energia cinética das cargas é convertida em energia térmica.',
    practicalApplications: [
      'Resistor limitador de corrente para LEDs (ex: 220 Ω ou 330 Ω).',
      'Resistores de pull-up e pull-down em portas de microcontroladores (ex: 10 kΩ).',
      'Divisores de tensão para condicionamento de sinais e sensores.',
      'Cargas atenuadoras em circuitos de áudio e medição.'
    ],
    handlingPrecautions: [
      'Não possui polaridade (pode ser montado em qualquer sentido).',
      'Verifique a potência nominal máxima (1/8 W, 1/4 W, 1 W, etc.) antes de energizar.',
      'Ao soldar, não mantenha a ponta do ferro aquecida por mais de 5 segundos.',
      'Não toque no resistor energizado se estiver dissipando alta potência.'
    ],
    typicalSpecs: [
      { label: 'Valores comerciais comuns', value: 'Série E12/E24 (10 Ω a 10 MΩ)' },
      { label: 'Tolerância padrão', value: '±5% (faixa dourada) ou ±1% (faixa marrom)' },
      { label: 'Potência mais comum', value: '1/4 W (0,25 Watt)' },
      { label: 'Coeficiente térmico', value: '-200 a -800 ppm/°C' }
    ],
    didYouKnow: 'O resistor é o componente eletrônico mais fabricado da história. Um smartphone moderno contém mais de 1.000 micro-resistores SMD!'
  },
  {
    id: 'capacitor-eletrolitico',
    name: 'Capacitor Eletrolítico de Alumínio',
    technicalName: 'Capacitor Polarizado de Alta Capacitância',
    category: 'Passivos',
    icon: '🔋',
    symbol: 'Capacitor Polarizado (+ e -)',
    pinout: ['Terminal Positivo (perna mais longa)', 'Terminal Negativo (faixa com traço - no corpo)'],
    functionality: 'Filtrar ondulações (ripple) em fontes de alimentação, armazenar cargas temporárias e desacoplar circuitos de áudio.',
    operatingPrinciple: 'Utiliza uma camada microscópica de óxido de alumínio como dielétrico e um eletrólito líquido ou em gel condutor. Essa camada ultrafina permite alcançar altas capacitâncias em pequeno volume.',
    practicalApplications: [
      'Filtro capacitivo após pontes retificadoras em fontes AC/DC.',
      'Reservatório local de energia para picos de corrente em amplificadores.',
      'Temporização em circuitos osciladores analógicos (como no CI 555).'
    ],
    handlingPrecautions: [
      '⚠️ É RIGOROSAMENTE POLARIZADO! A inversão de polaridade destrói a camada de óxido dielétrico, provocando curto interno e risco de explosão!',
      'Respeite a tensão máxima de isolação gravada no corpo (ex: 16V, 25V, 50V).',
      'Capacitores de alta capacidade podem reter cargas perigosas mesmo após desligar a fonte. Descarregue com resistor antes de tocar.'
    ],
    typicalSpecs: [
      { label: 'Faixas típicas de capacitância', value: '1 µF a 10.000 µF' },
      { label: 'Tensões nominais padrão', value: '6.3V, 16V, 25V, 35V, 50V, 63V, 400V' },
      { label: 'Tolerância típica', value: '±20%' }
    ],
    didYouKnow: 'No topo dos capacitores eletrolíticos há ranhuras em cruz ("K" ou "X"): são válvulas mecânicas de alívio projetadas para romper com segurança caso haja pressão excessiva.'
  },
  {
    id: 'capacitor-ceramico',
    name: 'Capacitor Cerâmico Disco / Multicamadas',
    technicalName: 'Capacitor Não Polarizado de Alta Frequência',
    category: 'Passivos',
    icon: '💿',
    symbol: 'Capacitor Não Polarizado',
    pinout: ['Terminal 1 (sem polaridade)', 'Terminal 2 (sem polaridade)'],
    functionality: 'Filtrar ruídos de alta frequência, desacoplar alimentação de chips digitais e sintonizar circuitos de RF.',
    operatingPrinciple: 'Possui placas condutoras de prata separadas por um disco de cerâmica dielétrica. Apresenta resistência série equivalente (ESR) e indutância parasita extremamente baixas.',
    practicalApplications: [
      'Desacoplamento de ruído nos pinos VCC e GND de microcontroladores (100 nF código 104).',
      'Osciladores de cristal de quartzo (capacitores de carga de 22 pF no Arduino).',
      'Filtros passa-baixas e passa-altas de sinal.'
    ],
    handlingPrecautions: [
      'Não possui polaridade (ligação em qualquer sentido).',
      'O invólucro cerâmico é frágil; evite dobrar bruscamente os terminais rente ao corpo do componente.'
    ],
    typicalSpecs: [
      { label: 'Faixas de capacitância', value: '1 pF a 1 µF (comuns: 22 pF, 100 nF)' },
      { label: 'Código numérico 3 dígitos', value: '104 = 10 × 10⁴ pF = 100.000 pF = 100 nF' },
      { label: 'Tensão máxima', value: '50V a 1kV+' }
    ],
    didYouKnow: 'Para ler um capacitor cerâmico com inscrição "104", os dois primeiros dígitos são a base (10) e o terceiro é o número de zeros em picofarads (100.000 pF = 100 nF).'
  },
  {
    id: 'potenciometro',
    name: 'Potenciômetro Rotativo Linear / Logarítmico',
    technicalName: 'Resistor Variável de Três Terminais',
    category: 'Passivos',
    icon: '🎚️',
    symbol: 'Resistor Variável com Seta Central',
    pinout: ['Terminal 1 (Extremidade A)', 'Terminal 2 (Cursor central móvel)', 'Terminal 3 (Extremidade B)'],
    functionality: 'Ajuste manual de grandezas elétricas (volume, brilho, velocidade, calibração e sensibilidade).',
    operatingPrinciple: 'Uma lâmina metálica (cursor) desliza ao longo de uma pista curva de carbono grafite quando o eixo gira. A distância percorrida pelo cursor define o comprimento da pista e, pela 2ª Lei de Ohm, a resistência correspondente.',
    practicalApplications: [
      'Entrada analógica para leitura de posição angular com Arduino (0 a 5V).',
      'Controle de volume de áudio (potenciômetro logarítmico).',
      'Ajuste fino de temporização em osciladores e circuitos disparadores.'
    ],
    handlingPrecautions: [
      'Nunca ligue os terminais 1 e 2 diretamente entre VCC e GND sem um resistor em série: girar o eixo até 0 Ω causará curto-circuito!',
      'Evite aplicar força excessiva nos terminais de solda para não quebrar a fixação interna da pista de grafite.'
    ],
    typicalSpecs: [
      { label: 'Valores comerciais comuns', value: '1 kΩ, 10 kΩ, 50 kΩ, 100 kΩ' },
      { label: 'Curvas de resposta', value: 'Linear (tipo B) e Logarítmica (tipo A)' },
      { label: 'Ângulo de giro', value: 'Aproximadamente 300°' }
    ],
    didYouKnow: 'Ouvimos o volume de forma logarítmica. Por isso, aparelhos de áudio usam potenciômetros "LOG" (tipo A) para que a percepção do aumento sonoro seja linear e suave.'
  },
  {
    id: 'led',
    name: 'LED (Diodo Emissor de Luz)',
    technicalName: 'Light Emitting Diode (Junção PN Luminescente)',
    category: 'Semicondutores',
    icon: '💡',
    symbol: 'Diodo com Setas Emitindo Luz',
    pinout: ['Ânodo (+) - Perna mais longa', 'Cátodo (-) - Perna mais curta / Lado chanfrado'],
    functionality: 'Sinalização visual, iluminação eficiente, displays de 7 segmentos e transmissão óptica.',
    operatingPrinciple: 'Ao ser polarizado diretamente, elétrons cruzam a junção PN e preenchem lacunas de energia menor. A diferença de energia é liberada na forma de fótons (luz) por eletroluminescência.',
    practicalApplications: [
      'Indicadores de ligado/desligado e status de funcionamento de aparelhos.',
      'Pisca-pisca didático e semáforos com Arduino.',
      'Sensores ópticos e controle remoto (LED infravermelho).'
    ],
    handlingPrecautions: [
      '⚠️ NUNCA ligue diretamente a uma fonte de tensão sem resistor de proteção em série! Ele queimará em frações de segundo.',
      'Respeite a polaridade: Ânodo no positivo, Cátodo no GND.',
      'Limite a corrente contínua a no máximo 15 mA a 20 mA para prolongar a vida útil.'
    ],
    typicalSpecs: [
      { label: 'Queda de tensão direta (Vf)', value: 'Vermelho: ~2.0V; Verde: ~2.2V; Azul/Branco: ~3.2V' },
      { label: 'Corrente nominal padrão', value: '10 mA a 20 mA (0,01 A a 0,02 A)' },
      { label: 'Tensão reversa máxima', value: 'Geralmente 5 V' }
    ],
    didYouKnow: 'A invenção do LED azul de alta eficiência na década de 1990 rendeu o Prêmio Nobel de Física em 2014, pois possibilitou a luz branca e a revolução das lâmpadas modernas!'
  },
  {
    id: 'diodo-retificador',
    name: 'Diodo Retificador 1N4007',
    technicalName: 'Diodo Semicondutor de Silício',
    category: 'Semicondutores',
    icon: '➡️',
    symbol: 'Diodo (Ânodo e Cátodo)',
    pinout: ['Ânodo (lado preto sem faixa)', 'Cátodo (lado com a faixa prateada gravada)'],
    functionality: 'Retificar corrente alternada em contínua, bloquear correntes reversas e proteger contra picos indutivos.',
    operatingPrinciple: 'Conduz eletricidade em um único sentido (Ânodo → Cátodo). Quando o cátodo fica mais positivo que o ânodo, ele atua como uma chave aberta, suportando até 1000V de bloqueio.',
    practicalApplications: [
      'Ponte retificadora de fontes de alimentação lineares.',
      'Proteção contra inversão acidental de bateria em placas eletrônicas.',
      'Diodo de proteção flyback em paralelo com bobinas de relés e motores DC.'
    ],
    handlingPrecautions: [
      'A faixa prateada no corpo indica o CÁTODO (terminal negativo na condução direta).',
      'Apresenta queda de tensão direta de cerca de 0,7 V a 1,1 V sob carga. Em correntes elevadas, dissipa calor.'
    ],
    typicalSpecs: [
      { label: 'Corrente máxima contínua (If)', value: '1,0 Ampère' },
      { label: 'Tensão reversa máxima (Vrrm)', value: '1000 Volts (1N4007)' },
      { label: 'Queda direta típica', value: '0,7 V a 1,0 V' }
    ],
    didYouKnow: 'A série 1N4001 a 1N4007 suporta a mesma corrente de 1A, variando apenas a tensão máxima suportada: 1N4001 suporta 50V, enquanto o 1N4007 suporta até 1000V!'
  },
  {
    id: 'diodo-zener',
    name: 'Diodo Zener',
    technicalName: 'Diodo Regulador por Ruptura Zener Controlada',
    category: 'Semicondutores',
    icon: '🛡️',
    symbol: 'Diodo Zener (Cátodo com abas em Z)',
    pinout: ['Ânodo (+)', 'Cátodo (-) com faixa preta'],
    functionality: 'Regulação de pequenas tensões de referência e proteção contra sobretensão em entradas de chips sensíveis.',
    operatingPrinciple: 'Diferente dos diodos comuns, o Zener é projetado para trabalhar intencionalmente em polarização REVERSA na sua tensão de ruptura (Vz). Quando atingida, a tensão permanece praticamente constante mesmo que a corrente varie.',
    practicalApplications: [
      'Fontes de tensão de referência estável.',
      'Grampeamento (clamping) de sobretensão em pinos do microcontrolador (ex: Zener de 5,1 V).',
      'Reguladores simples de baixa corrente com resistor de lastro.'
    ],
    handlingPrecautions: [
      'DEVE ser usado sempre com um resistor limitador em série! Sem ele, a corrente reversa após a tensão Zener destruirá o diodo por sobreaquecimento.',
      'Lembre-se que em polarização direta ele se comporta como um diodo comum (~0,7V).'
    ],
    typicalSpecs: [
      { label: 'Tensões comerciais comuns', value: '3.3V, 4.7V, 5.1V, 9.1V, 12V, 15V' },
      { label: 'Potência máxima padrão', value: '1/2 W (500 mW)' }
    ],
    didYouKnow: 'Recebeu o nome do físico norte-americano Clarence Zener, que descreveu matematicamente a ruptura quântica provocada por fortes campos elétricos.'
  },
  {
    id: 'transistor-bjt-npn',
    name: 'Transistor BJT NPN (BC548 / 2N2222)',
    technicalName: 'Transistor Bipolar de Junção NPN',
    category: 'Semicondutores',
    icon: '🔱',
    symbol: 'Transistor NPN (Seta no Emissor apontando para fora)',
    pinout: ['Pino 1: Coletor (C)', 'Pino 2: Base (B)', 'Pino 3: Emissor (E) - encapsulamento TO-92'],
    functionality: 'Chaveamento eletrônico rápido (acionamento de cargas) e amplificação linear de pequenos sinais elétricos.',
    operatingPrinciple: 'Funciona como uma torneira elétrica controlada por corrente. Uma corrente diminuta injetada na Base permite a passagem de uma corrente muito maior entre o Coletor e o Emissor (Ic = β · Ib).',
    practicalApplications: [
      'Acionamento de relés de 5V ou 12V a partir de pinos do Arduino.',
      'Controle liga/desliga de lâmpadas LED, buzzers e pequenos motores.',
      'Amplificadores de microfone de eletreto e pré-amplificadores de áudio.'
    ],
    handlingPrecautions: [
      'Identifique a pinagem correta antes de ligar na protoboard. O BC548 (padrão europeu) tem pinagem CBE; já transistores como o 2N3904 costumam ser EBC!',
      'SEMPRE use um resistor limitador na Base (ex: 1 kΩ a 4,7 kΩ) para não queimar a junção Base-Emissor do transistor.'
    ],
    typicalSpecs: [
      { label: 'Corrente máxima de Coletor (Ic)', value: '100 mA (BC548) ou 800 mA (2N2222)' },
      { label: 'Tensão máxima Vce', value: '30V a 45V' },
      { label: 'Ganho típico (hFE / β)', value: '110 a 800' }
    ],
    didYouKnow: 'O transistor foi inventado nos laboratórios Bell em 1947, substituindo as gigantescas e ineficientes válvulas a vácuo e dando início à era dos computadores.'
  },
  {
    id: 'transistor-mosfet',
    name: 'Transistor MOSFET Canal N (IRF540N)',
    technicalName: 'Metal-Oxide-Semiconductor Field-Effect Transistor',
    category: 'Semicondutores',
    icon: '⚡',
    symbol: 'MOSFET Canal N (Gate, Drain, Source)',
    pinout: ['Pino 1: Gate (Porta)', 'Pino 2: Drain (Dreno)', 'Pino 3: Source (Fonte)'],
    functionality: 'Comutação de alta potência e velocidade para motores pesados, inversores solares e controladores PWM de alta corrente.',
    operatingPrinciple: 'Controlado por TENSÃO no Gate, e não por corrente! O Gate é isolado eletricamente por uma camada de dióxido de silício. Quando uma tensão positiva é aplicada entre Gate e Source, cria-se um canal condutor de baixíssima resistência.',
    practicalApplications: [
      'Controle de velocidade de motores DC pesados com sinal PWM.',
      'Dimmers de fitas LED de 12V e 24V de alta potência.',
      'Inversores de frequência e fontes chaveadas modernas.'
    ],
    handlingPrecautions: [
      '⚠️ EXTREMAMENTE sensível a cargas eletrostáticas (ESD) no pino Gate! Toque em uma carcaça aterrada antes de pegá-lo.',
      'Sempre coloque um resistor de pull-down (ex: 10 kΩ a 47 kΩ) entre Gate e Source para garantir o desligamento quando o controle estiver em alta impedância.',
      'Instale um dissipador de alumínio se a corrente de carga ultrapassar alguns amperes.'
    ],
    typicalSpecs: [
      { label: 'Corrente máxima de dreno (Id)', value: 'Até 33 Amperes contínuos' },
      { label: 'Tensão máxima Vds', value: '100 Volts' },
      { label: 'Resistência de condução (Rds_on)', value: 'Apenas 0,044 Ω (44 mΩ)' }
    ],
    didYouKnow: 'Como o Gate consome corrente estática praticamente nula, o MOSFET quase não consome energia da porta de controle do microcontrolador!'
  },
  {
    id: 'rele',
    name: 'Relé Eletromecânico (5V / 12V)',
    technicalName: 'Chave Eletromecânica Acionada por Bobina',
    category: 'Eletromecânicos',
    icon: '🔄',
    symbol: 'Bobina Indutiva + Contatos COM, NA, NF',
    pinout: ['Dois pinos da Bobina', 'Pino Comum (COM)', 'Normalmente Aberto (NA)', 'Normalmente Fechado (NF)'],
    functionality: 'Ligar e desligar circuitos de alta tensão ou alta potência a partir de um sinal de controle isolado galvanicamente.',
    operatingPrinciple: 'Quando a corrente passa pela bobina interna, cria-se um campo magnético que atrai uma armadura mecânica de ferro, movendo os contatos físicos e alternando o circuito entre COM e NA.',
    practicalApplications: [
      'Módulos relé para Arduino acionarem lâmpadas e eletrodomésticos em bancada supervisionada.',
      'Partida de motores industriais e travas elétricas veiculares.',
      'Sistemas de alarme e desligamento de emergência.'
    ],
    handlingPrecautions: [
      '⚠️ A bobina é uma carga puramente indutiva: ao ser desligada, gera um pico de contra-tensão que queima circuitos de controle. Use SEMPRE um diodo flyback (1N4007) em antiparalelo com a bobina!',
      'Atenção ao isolamento e à área de alta tensão da placa para evitar choques elétricos graves.'
    ],
    typicalSpecs: [
      { label: 'Tensão de bobina', value: '5V DC (didático) ou 12V/24V DC' },
      { label: 'Capacidade dos contatos', value: 'Até 10A em 250V AC / 30V DC' },
      { label: 'Tempo de acionamento', value: 'Aprox. 10 milissegundos' }
    ],
    didYouKnow: 'Os primeiros computadores eletromecânicos da história (como o Harvard Mark I nos anos 1940) eram feitos com milhares de relés que estalavam continuamente ao realizarem somas!'
  },
  {
    id: 'chave-tactil',
    name: 'Chave Táctil (Push-Button)',
    technicalName: 'Interruptor Mecânico Normalmente Aberto',
    category: 'Eletromecânicos',
    icon: '🔘',
    symbol: 'Interruptor Normalmente Aberto (Push-Button)',
    pinout: ['Terminais A (em pares internos)', 'Terminais B (fecham contato com A quando pressionado)'],
    functionality: 'Permitir que o usuário envie comandos de acionamento temporário (botão de pressão) ou contínuo.',
    operatingPrinciple: 'Um disco elástico metálico cede à pressão do dedo, tocando uma pista central e fechando o circuito elétrico. Ao soltar, a elasticidade do metal restaura o estado original de repouso.',
    practicalApplications: [
      'Botões de reset e seleção de menus em painéis eletrônicos.',
      'Acionamento de campainhas e interruptores de fim de curso.',
      'Entrada digital com resistores de pull-up para leitura no Arduino.'
    ],
    handlingPrecautions: [
      'Bouncing mecânico (efeito repique): ao pressionar, o metal oscila fisicamente por alguns milissegundos, gerando dezenas de pulsos indesejados. É necessário tratar com capacitor ou debouncing por software.',
      'Cuidado para não superaquecer os terminais de plástico ao soldar.'
    ],
    typicalSpecs: [
      { label: 'Força de acionamento', value: '160 gf a 250 gf' },
      { label: 'Vida útil mecânica', value: 'Mais de 100.000 cliques' },
      { label: 'Corrente máxima', value: '50 mA a 12V DC' }
    ],
    didYouKnow: 'No Arduino, se você usar `pinMode(pino, INPUT_PULLUP);`, você ativa um resistor interno de 20 kΩ dentro do microcontrolador, economizando uma peça externa na placa!'
  },
  {
    id: 'ci-555',
    name: 'Circuito Integrado Temporizador NE555',
    technicalName: 'Timer / Oscilador Analógico Universal',
    category: 'Circuitos Integrados',
    icon: '⏱️',
    symbol: 'CI DIP-8 com pinos 1 a 8',
    pinout: [
      'Pino 1: GND', 'Pino 2: Trigger', 'Pino 3: Output', 'Pino 4: Reset',
      'Pino 5: Control Voltage', 'Pino 6: Threshold', 'Pino 7: Discharge', 'Pino 8: VCC (+4.5V a +15V)'
    ],
    functionality: 'Gerar pulsos de temporização precisos, oscilações para pisca-pisca, sirenes e sinais PWM analógicos sem necessidade de programação.',
    operatingPrinciple: 'Contém internamente 3 resistores idênticos de 5 kΩ (daí o nome 555) que criam divisores de tensão em 1/3 Vcc e 2/3 Vcc, acoplados a dois comparadores analógicos e um flip-flop interno.',
    practicalApplications: [
      'Temporizadores astáveis (pisca-pisca de LED com velocidade ajustável).',
      'Temporizadores monoestáveis (luz de cortesia com desligamento automático após alguns segundos).',
      'Geradores de tom audível para sirenes e campainhas eletrônicas.'
    ],
    handlingPrecautions: [
      'Insira sempre o chanfro (entalhe semicircular) na orientação correta na protoboard antes de energizar.',
      'A saída (Pino 3) é robusta e pode drenar ou fornecer até 200 mA diretamente, o suficiente para alimentar pequenos relés ou alto-falantes.'
    ],
    typicalSpecs: [
      { label: 'Tensão de alimentação VCC', value: '4.5V a 16V' },
      { label: 'Frequência máxima', value: 'Mais de 500 kHz' },
      { label: 'Corrente máxima de saída', value: '200 mA' }
    ],
    didYouKnow: 'Projetado em 1971 por Hans Camenzind, o 555 é considerado o circuito integrado mais vendido e copiado de todos os tempos, com mais de 1 bilhão de unidades fabricadas ao ano!'
  },
  {
    id: 'lm7805',
    name: 'Regulador Linear de Tensão LM7805 (5V)',
    technicalName: 'Positive Voltage Regulator 5V 1.5A',
    category: 'Circuitos Integrados',
    icon: '🔌',
    symbol: 'Regulador Linear de Tensão (Vin, GND, Vout)',
    pinout: ['Pino 1: Entrada (Input - 7V a 25V)', 'Pino 2: Terra / GND (Comum)', 'Pino 3: Saída Estabilizada (Output - 5V fixos)'],
    functionality: 'Converter uma tensão contínua variável ou maior (como 9V ou 12V de uma bateria) em uma linha perfeitamente estável de 5,0 Volts.',
    operatingPrinciple: 'Utiliza um transistor de passagem interno com circuito de realimentação e referência Zener bandgap para manter a saída rigorosamente em 5V contra variações de carga e de entrada.',
    practicalApplications: [
      'Alimentação de circuitos digitais TTL e placas Arduino a partir de baterias de 9V ou 12V de bancada.',
      'Fontes reguladas para laboratório.',
      'Alimentação estável de sensores analógicos de precisão.'
    ],
    handlingPrecautions: [
      'Reguladores lineares dissipam a diferença de tensão na forma de puro calor: P = (Vin - Vout) · Iout. Se alimentar com 12V e puxar 1A, dissipará 7 Watts em calor! DEVE utilizar dissipador de alumínio.',
      'Exige dois capacitores de filtro próximos aos seus pinos (0,33 µF na entrada e 0,1 µF na saída) para evitar auto-oscilação indesejada.'
    ],
    typicalSpecs: [
      { label: 'Tensão de saída fixa', value: '4.8V a 5.2V (típica: 5.0 V)' },
      { label: 'Tensão de entrada mínima', value: '7.0 V' },
      { label: 'Corrente máxima de saída', value: '1.5 Amperes (com dissipador)' }
    ],
    didYouKnow: 'O sufixo "05" na família 78xx indica a tensão regulada: 7805 fornece 5V, 7809 fornece 9V e 7812 fornece 12V!'
  },
  {
    id: 'arduino-uno-chip',
    name: 'Placa Didática Arduino Uno (ATmega328P)',
    technicalName: 'Placa Microcontrolada de 8 bits AVR',
    category: 'Circuitos Integrados',
    icon: '🧠',
    symbol: 'Módulo Microcontrolado Didático',
    pinout: [
      '14 Pinos Digitais I/O (D0 a D13, sendo 6 PWM ~)',
      '6 Entradas Analógicas de 10 bits (A0 a A5)',
      'Pinos de Alimentação: 5V, 3.3V, GND, Vin, Reset'
    ],
    functionality: 'Cérebro programável para ler sensores, processar algoritmos, calcular lógicas e controlar atuadores físicos no mundo real.',
    operatingPrinciple: 'Executa programas gravados em memória flash através de instruções de máquina em linguagem de baixo nível a uma velocidade de 16 MHz.',
    practicalApplications: [
      'Projetos de robótica móvel, seguidores de linha e braços robóticos.',
      'Sistemas didáticos de medição e automação de estufas.',
      'Prototipagem rápida de produtos eletrônicos e Internet das Coisas (IoT).'
    ],
    handlingPrecautions: [
      'Cada pino I/O suporta no máximo 40 mA (recomendado até 20 mA para margem segura). Nunca alimente bobinas ou motores diretamente do pino!',
      'Ao alimentar pelo conector USB, a tensão máxima é 5V. Ao alimentar pelo jack P4, a tensão recomendada é de 7V a 12V.'
    ],
    typicalSpecs: [
      { label: 'Clock do Processador', value: '16 MHz' },
      { label: 'Memória Flash', value: '32 KB' },
      { label: 'Memória SRAM', value: '2 KB' },
      { label: 'Tensão de operação interna', value: '5 Volts' }
    ],
    didYouKnow: 'O nome "Arduino" foi escolhido em homenagem ao Bar di Re Arduino, na cidade italiana de Ivrea, onde os fundadores do projeto costumavam se reunir em 2005.'
  },
  {
    id: 'protoboard',
    name: 'Protoboard (Matriz de Contatos Didática)',
    technicalName: 'Placa de Ensaio Sem Solda (Solderless Breadboard)',
    category: 'Acessórios & Montagem',
    icon: '🎛️',
    symbol: 'Matriz de Contatos e Barramentos',
    pinout: ['Barramentos laterais de alimentação (+ e - em linhas contínuas)', 'Colunas centrais com conexão vertical de 5 orifícios'],
    functionality: 'Montagem rápida e teste experimental de circuitos eletrônicos sem necessidade de soldagem com estanho.',
    operatingPrinciple: 'Por baixo dos orifícios plásticos existem fileiras de presilhas elásticas de latão niquelado que prendem os terminais dos fios e componentes, garantindo contato elétrico confiável e reutilizável.',
    practicalApplications: [
      'Aulas práticas em laboratório de eletrônica.',
      'Testes prévios de protótipos antes da confecção de placas de circuito impresso definitivas.',
      'Experimentos rápidos de medição com multímetro e osciloscópio.'
    ],
    handlingPrecautions: [
      'Não force terminais com espessura excessiva nos orifícios (como fios grossos), pois deformará as presilhas elásticas internas.',
      'Evite correntes superiores a 1,5A a 2A na matriz de contato para evitar aquecimento e derretimento do plástico.',
      'Atenção ao canal central: ele divide a placa em duas metades isoladas, ideal para encaixar Circuitos Integrados (DIP).'
    ],
    typicalSpecs: [
      { label: 'Número de pontos comuns', value: '400 pontos ou 830 pontos' },
      { label: 'Bitola de fio recomendada', value: 'AWG 22 a AWG 26' },
      { label: 'Tensão máxima didática', value: 'Até 30V DC' }
    ],
    didYouKnow: 'O termo em inglês "breadboard" surgiu porque, no início do século XX, os radioamadores literalmente pregavam soquetes de válvulas em tábuas de cortar pão de madeira para montar seus receptores de rádio!'
  },
  {
    id: 'fusivel',
    name: 'Fusível de Vidro de Proteção Térmica',
    technicalName: 'Dispositivo Sacrificial de Proteção contra Sobrecorrente',
    category: 'Passivos',
    icon: '⚠️',
    symbol: 'Fusível de Proteção',
    pinout: ['Terminal Metálico 1', 'Terminal Metálico 2 (sem polaridade)'],
    functionality: 'Proteger os circuitos elétricos, cabos e equipamentos contra danos severos e incêndios provocados por curtos-circuitos e sobrecorrentes.',
    operatingPrinciple: 'Contém um filamento condutor calibrado feito de liga metálica com ponto de fusão precisamente controlado. Quando a corrente ultrapassa o valor nominal, o Efeito Joule aquece o filamento até que ele se funda e se rompa fisicamente, abrindo o circuito.',
    practicalApplications: [
      'Proteção na entrada de fontes de alimentação de bancada e transformadores.',
      'Proteção interna de multímetros digitais nas escalas de corrente.',
      'Segurança contra curtos em projetos veiculares e de automação.'
    ],
    handlingPrecautions: [
      '⚠️ NUNCA substitua um fusível queimado por um pedaço de arame, papel alumínio ou um fusível de valor maior! Isso elimina a proteção e coloca em risco de incêndio toda a instalação.',
      'Antes de trocar um fusível rompido, identifique e corrija a causa do curto-circuito.',
      'Desconecte a alimentação antes de manusear o porta-fusível.'
    ],
    typicalSpecs: [
      { label: 'Correntes nominais comuns', value: '0.5A, 1A, 2A, 5A, 10A' },
      { label: 'Tipos de atuação', value: 'Rápido (Fast-blow F) e Retardado (Slow-blow T)' },
      { label: 'Dimensões padrão', value: '5 × 20 mm ou 6 × 30 mm' }
    ],
    didYouKnow: 'Fusíveis do tipo "ação retardada" são projetados especificamente para suportar o pico momentâneo de corrente na partida de motores sem queimar em falso!'
  }
];

const QUESTIONS_DATA = [
  // FÁCEIS
  {
    id: 'ex-1',
    moduleId: 3,
    moduleName: 'Lei de Ohm',
    difficulty: 'Fácil',
    type: 'calculo',
    question: 'Um resistor de 10 Ω é conectado aos terminais de uma pilha alcalina de 1,5 V. Qual a intensidade da corrente elétrica que atravessa o resistor?',
    options: ['0,15 A', '1,5 A', '15 A', '0,015 A'],
    correctIndex: 0,
    explanation: 'Pela 1ª Lei de Ohm: I = V / R = 1,5 V / 10 Ω = 0,15 A (ou 150 mA).',
    formulaUsed: 'I = V / R'
  },
  {
    id: 'ex-2',
    moduleId: 2,
    moduleName: 'Tensão, Corrente e Resistência',
    difficulty: 'Fácil',
    type: 'conceitual',
    question: 'Qual é a unidade de medida oficial do Sistema Internacional (SI) para Tensão Elétrica e quem foi homenageado com seu nome?',
    options: ['Ampère (homenagem a André-Marie Ampère)', 'Volt (homenagem a Alessandro Volta)', 'Ohm (homenagem a Georg Ohm)', 'Watt (homenagem a James Watt)'],
    correctIndex: 1,
    explanation: 'A unidade SI de tensão (diferença de potencial) é o Volt (V), em homenagem ao cientista italiano Alessandro Volta, inventor da primeira pilha química.',
    formulaUsed: '1 V = 1 Joule / 1 Coulomb'
  },
  {
    id: 'ex-3',
    moduleId: 5,
    moduleName: 'Circuitos em Série e Paralelo',
    difficulty: 'Fácil',
    type: 'conceitual',
    question: 'Em um circuito com lâmpadas associadas em série, o que acontece com as demais lâmpadas se uma delas queimar (filamento romper)?',
    options: [
      'As outras lâmpadas brilham mais forte',
      'As outras lâmpadas continuam funcionando normalmente',
      'Todas as outras lâmpadas se apagam imediatamente',
      'A fonte de alimentação entra em curto-circuito'
    ],
    correctIndex: 2,
    explanation: 'No circuito série, há apenas um caminho contínuo para a corrente. Se uma lâmpada queima, o circuito abre e a corrente cessa em todos os componentes.',
    formulaUsed: 'I_total = I1 = I2 = ... = In'
  },
  {
    id: 'ex-4',
    moduleId: 4,
    moduleName: 'Potência e Energia Elétrica',
    difficulty: 'Fácil',
    type: 'calculo',
    question: 'Um ferro de solda para eletrônica dissipa 40 W sob uma tensão de 120 V. Qual é a corrente que circula por sua resistência?',
    options: ['0,33 A', '3,0 A', '4800 A', '0,033 A'],
    correctIndex: 0,
    explanation: 'Pela fórmula P = V · I → I = P / V = 40 W / 120 V ≈ 0,333 A (333 mA).',
    formulaUsed: 'P = V · I → I = P / V'
  },
  {
    id: 'ex-5',
    moduleId: 6,
    moduleName: 'Resistores e Código de Cores',
    difficulty: 'Fácil',
    type: 'conceitual',
    question: 'Um resistor com faixas Marrom, Preto e Vermelho (com tolerância Dourada) possui qual valor de resistência nominal?',
    options: ['100 Ω', '1.000 Ω (1 kΩ)', '10.000 Ω (10 kΩ)', '120 Ω'],
    correctIndex: 1,
    explanation: 'Marrom = 1; Preto = 0; Vermelho = multiplicador ×100. Valor = 10 × 100 = 1.000 Ω = 1 kΩ.',
    formulaUsed: 'Código de Cores de 4 Faixas'
  },
  {
    id: 'ex-6',
    moduleId: 7,
    moduleName: 'LEDs e Diodos',
    difficulty: 'Fácil',
    type: 'conceitual',
    question: 'Para que um LED emita luz, ele deve ser conectado em qual tipo de polarização e em quais terminais?',
    options: [
      'Polarização reversa (positivo no cátodo, negativo no ânodo)',
      'Polarização direta (positivo no ânodo, negativo no cátodo)',
      'Polarização alternada em alta tensão sem resistor',
      'Em qualquer polarização, pois o LED não possui polos definidos'
    ],
    correctIndex: 1,
    explanation: 'Sendo um semicondutor com junção PN, o LED só conduz e emite fótons quando polarizado diretamente (Ânodo no positivo e Cátodo no negativo).',
    formulaUsed: 'Condução Direta da Junção PN'
  },
  {
    id: 'ex-7',
    moduleId: 9,
    moduleName: 'Instrumentos de Medição',
    difficulty: 'Fácil',
    type: 'conceitual',
    question: 'Qual é o procedimento correto para medir o valor de um resistor com um multímetro digital na função ohmímetro?',
    options: [
      'Conectar as pontas com o circuito ligado e alimentado na tomada',
      'Garantir que o circuito esteja totalmente DESLIGADO da energia',
      'Colocar o seletor em Amperes alternados',
      'Ligar as duas pontas no mesmo terminal do resistor'
    ],
    correctIndex: 1,
    explanation: 'O circuito DEVE estar desenergizado! Caso contrário, a tensão externa pode queimar o circuito interno do multímetro e falseará a leitura.',
    formulaUsed: 'Regra de Segurança do Ohmímetro'
  },
  {
    id: 'ex-8',
    moduleId: 8,
    moduleName: 'Eletrônica Digital',
    difficulty: 'Fácil',
    type: 'conceitual',
    question: 'Na álgebra booleana, qual é a saída de uma porta inversora (NOT) quando sua entrada está em nível lógico 1 (alto)?',
    options: ['1', '0', 'Indeterminada', 'Alta impedância permanente'],
    correctIndex: 1,
    explanation: 'A porta NOT inverte o nível lógico: se a entrada é 1, a saída é 0; se a entrada é 0, a saída é 1.',
    formulaUsed: 'S = NÃO A (A\')'
  },
  {
    id: 'ex-9',
    moduleId: 1,
    moduleName: 'Fundamentos da Eletricidade',
    difficulty: 'Fácil',
    type: 'calculo',
    question: 'Se uma corrente de 2 A atravessa um condutor elétrico durante 30 segundos, qual é a carga elétrica total transportada em Coulombs?',
    options: ['15 C', '60 C', '0,066 C', '120 C'],
    correctIndex: 1,
    explanation: 'Pela definição fundamental de corrente: Q = I · Δt = 2 A × 30 s = 60 C.',
    formulaUsed: 'Q = I · Δt'
  },
  {
    id: 'ex-10',
    moduleId: 10,
    moduleName: 'Introdução ao Arduino',
    difficulty: 'Fácil',
    type: 'conceitual',
    question: 'Qual função do ambiente Arduino é executada apenas uma única vez assim que a placa é ligada ou reiniciada?',
    options: ['void loop()', 'void setup()', 'void delay()', 'digitalWrite()'],
    correctIndex: 1,
    explanation: 'A função void setup() é executada uma única vez para inicialização de pinos (pinMode), comunicação serial, etc.',
    formulaUsed: 'Ciclo de vida do sketch Arduino'
  },

  // INTERMEDIÁRIOS
  {
    id: 'ex-11',
    moduleId: 5,
    moduleName: 'Circuitos em Série e Paralelo',
    difficulty: 'Intermediário',
    type: 'calculo',
    question: 'Dois resistores de 30 Ω e 60 Ω estão conectados em paralelo. Qual é o valor da resistência equivalente dessa associação?',
    options: ['90 Ω', '45 Ω', '20 Ω', '1800 Ω'],
    correctIndex: 2,
    explanation: 'Para dois resistores em paralelo usamos a fórmula do produto pela soma: Req = (R1 · R2) / (R1 + R2) = (30 × 60) / (30 + 60) = 1800 / 90 = 20 Ω.',
    formulaUsed: 'Req = (R1 · R2) / (R1 + R2)'
  },
  {
    id: 'ex-12',
    moduleId: 7,
    moduleName: 'LEDs, Diodos e Transistores',
    difficulty: 'Intermediário',
    type: 'calculo',
    question: 'Deseja-se ligar um LED verde (Vf = 2,2 V e If = 20 mA) em uma fonte de 12 V. Qual deve ser o valor teórico do resistor de proteção em série?',
    options: ['490 Ω', '600 Ω', '110 Ω', '220 Ω'],
    correctIndex: 0,
    explanation: 'VR = Vcc - Vled = 12 V - 2,2 V = 9,8 V. Pela Lei de Ohm: R = VR / Iled = 9,8 V / 0,020 A = 490 Ω. (Comercialmente, adotaria-se 510 Ω ou 560 Ω).',
    formulaUsed: 'R = (Vcc - Vled) / Iled'
  },
  {
    id: 'ex-13',
    moduleId: 3,
    moduleName: 'Lei de Ohm',
    difficulty: 'Intermediário',
    type: 'calculo',
    question: 'Pela 2ª Lei de Ohm (R = ρ·L/A), se um cabo de cobre for substituído por outro do mesmo material com o DOBRO do comprimento e a MESMA área de seção, a resistência elétrica do novo cabo será:',
    options: ['A metade da original', 'O dobro da original', 'Quatro vezes menor', 'Inalterada'],
    correctIndex: 1,
    explanation: 'A resistência é diretamente proporcional ao comprimento (R ∝ L). Logo, dobrar o comprimento dobra a resistência.',
    formulaUsed: 'R = (ρ · L) / A'
  },
  {
    id: 'ex-14',
    moduleId: 5,
    moduleName: 'Circuitos em Série e Paralelo',
    difficulty: 'Intermediário',
    type: 'calculo',
    question: 'Um divisor de tensão é alimentado com Vin = 9 V e formado por R1 = 10 kΩ (superior) e R2 = 20 kΩ (inferior). Qual é a tensão de saída Vout medida sobre R2?',
    options: ['3 V', '4,5 V', '6 V', '9 V'],
    correctIndex: 2,
    explanation: 'Vout = Vin · [R2 / (R1 + R2)] = 9 V · [20k / (10k + 20k)] = 9 · (20/30) = 9 · (2/3) = 6 V.',
    formulaUsed: 'Vout = Vin · (R2 / (R1 + R2))'
  },
  {
    id: 'ex-15',
    moduleId: 4,
    moduleName: 'Potência e Energia Elétrica',
    difficulty: 'Intermediário',
    type: 'calculo',
    question: 'Um aparelho de 5.500 W opera durante 30 minutos por dia. Quantos quilowatts-hora (kWh) de energia elétrica ele consumirá ao longo de 30 dias?',
    options: ['82,5 kWh', '165 kWh', '2,75 kWh', '55 kWh'],
    correctIndex: 0,
    explanation: 'Tempo diário = 0,5 h. Em 30 dias: t = 0,5 h × 30 = 15 horas no mês. Energia: E = 5,5 kW × 15 h = 82,5 kWh.',
    formulaUsed: 'E = (P · t) / 1000'
  },
  {
    id: 'ex-16',
    moduleId: 6,
    moduleName: 'Resistores, Capacitores e Potenciômetros',
    difficulty: 'Intermediário',
    type: 'calculo',
    question: 'Em um circuito RC série com resistor R = 50 kΩ e capacitor C = 100 µF, qual é o valor da constante de tempo τ (tau)?',
    options: ['500 ms', '5 segundos', '0,5 segundos', '50 segundos'],
    correctIndex: 1,
    explanation: 'τ = R · C = 50.000 Ω × (100 × 10⁻⁶ F) = 50.000 × 0,0001 = 5 segundos.',
    formulaUsed: 'τ = R · C'
  },
  {
    id: 'ex-17',
    moduleId: 8,
    moduleName: 'Eletrônica Digital e Portas Lógicas',
    difficulty: 'Intermediário',
    type: 'conceitual',
    question: 'Em uma porta lógica OR de duas entradas (A e B), em qual situação a saída S será nível baixo (0)?',
    options: [
      'Quando A = 1 e B = 1',
      'Quando A = 1 e B = 0',
      'Apenas quando ambas as entradas forem 0 (A = 0 e B = 0)',
      'Nunca, a porta OR sempre resulta em 1'
    ],
    correctIndex: 2,
    explanation: 'A porta OR (OU) produz nível alto sempre que pelo menos uma entrada for 1. Ela só resulta em 0 quando TODAS as entradas forem 0.',
    formulaUsed: 'S = A + B'
  },
  {
    id: 'ex-18',
    moduleId: 7,
    moduleName: 'LEDs, Diodos e Transistores',
    difficulty: 'Intermediário',
    type: 'calculo',
    question: 'Um transistor BJT NPN tem ganho de corrente hFE (β) igual a 150. Se injetarmos uma corrente de base Ib = 0,2 mA, qual será a corrente de coletor Ic na região ativa?',
    options: ['15 mA', '30 mA', '75 mA', '300 mA'],
    correctIndex: 1,
    explanation: 'Ic = β · Ib = 150 × 0,2 mA = 30 mA (0,030 A).',
    formulaUsed: 'Ic = β · Ib'
  },
  {
    id: 'ex-19',
    moduleId: 9,
    moduleName: 'Instrumentos de Medição',
    difficulty: 'Intermediário',
    type: 'conceitual',
    question: 'Por que o amperímetro deve possuir resistência interna idealmente nula (muito baixa)?',
    options: [
      'Para que ele consuma a maior parte da energia da bateria',
      'Para que, ao ser inserido em série, não reduza nem interfira na corrente original do circuito',
      'Para evitar choques em quem segura a carcaça de plástico',
      'Para permitir que meça tensões alternadas elevadas'
    ],
    correctIndex: 1,
    explanation: 'O amperímetro ideal não deve alterar o circuito sob teste. Como fica em série, uma resistência interna alta reduziria a corrente que se deseja medir.',
    formulaUsed: 'Efeito de Carga do Instrumento'
  },
  {
    id: 'ex-20',
    moduleId: 10,
    moduleName: 'Introdução ao Arduino',
    difficulty: 'Intermediário',
    type: 'calculo',
    question: 'O conversor analógico-digital (ADC) do Arduino Uno lê tensões de 0 a 5V com 10 bits de resolução (0 a 1023). Se uma leitura retornar o valor 205, qual é a tensão analógica aproximada medida?',
    options: ['0,5 V', '1,0 V', '2,05 V', '4,1 V'],
    correctIndex: 1,
    explanation: 'V = (Valor_lido × 5,0) / 1023 = (205 × 5) / 1023 = 1025 / 1023 ≈ 1,002 V (aproximadamente 1 Volt).',
    formulaUsed: 'V = (Leitura_ADC · 5) / 1023'
  },

  // AVANÇADOS
  {
    id: 'ex-21',
    moduleId: 4,
    moduleName: 'Potência e Energia Elétrica',
    difficulty: 'Avançado',
    type: 'calculo',
    question: 'Um resistor de 470 Ω de 1/4 W (0,25 W) é submetido a uma tensão de 12 V. O que acontecerá com esse resistor ao longo do tempo?',
    options: [
      'Operará com grande folga térmica, dissipando menos de 0,1 W',
      'Dissipará exatamente 0,25 W e funcionará indefinidamente',
      'Dissipará cerca de 0,306 W, ultrapassando sua potência nominal e queimará por superaquecimento',
      'A resistência dobrará de valor instantaneamente sem esquentar'
    ],
    correctIndex: 2,
    explanation: 'P = V² / R = 12² / 470 = 144 / 470 ≈ 0,306 W (306 mW). Como 306 mW > 250 mW (limite de 1/4 W), o resistor trabalhará sobrecarregado e sofrerá queima.',
    formulaUsed: 'P = V² / R'
  },
  {
    id: 'ex-22',
    moduleId: 5,
    moduleName: 'Circuitos em Série e Paralelo',
    difficulty: 'Avançado',
    type: 'calculo',
    question: 'Três resistores estão conectados: R1 = 10 Ω está em série com a associação paralela formada por R2 = 40 Ω e R3 = 60 Ω. Qual é a resistência equivalente total do circuito?',
    options: ['110 Ω', '34 Ω', '24 Ω', '14 Ω'],
    correctIndex: 1,
    explanation: 'Primeiro calcula-se o paralelo entre R2 e R3: R2//R3 = (40 × 60) / (40 + 60) = 2400 / 100 = 24 Ω. Em seguida, soma-se o resistor em série R1: Req_total = 10 Ω + 24 Ω = 34 Ω.',
    formulaUsed: 'Req = R1 + (R2 // R3)'
  },
  {
    id: 'ex-23',
    moduleId: 6,
    moduleName: 'Resistores, Capacitores e Potenciômetros',
    difficulty: 'Avançado',
    type: 'calculo',
    question: 'Dois capacitores, C1 = 10 µF e C2 = 40 µF, são ligados em SÉRIE. Qual é a capacitância equivalente (Ceq) resultante?',
    options: ['50 µF', '8 µF', '25 µF', '4 µF'],
    correctIndex: 1,
    explanation: 'A associação de capacitores em série funciona de forma análoga aos resistores em paralelo: Ceq = (C1 · C2) / (C1 + C2) = (10 × 40) / (10 + 40) = 400 / 50 = 8 µF.',
    formulaUsed: 'Ceq_série = (C1 · C2) / (C1 + C2)'
  },
  {
    id: 'ex-24',
    moduleId: 7,
    moduleName: 'LEDs, Diodos e Transistores',
    difficulty: 'Avançado',
    type: 'calculo',
    question: 'Um regulador de tensão linear LM7805 recebe 15 V na entrada e fornece 5 V na saída com uma corrente de carga de 0,8 A. Qual a potência térmica dissipada exclusivamente pelo regulador?',
    options: ['4 W', '8 W', '12 W', '16 W'],
    correctIndex: 1,
    explanation: 'A queda de tensão no LM7805 é Vdrop = Vin - Vout = 15 V - 5 V = 10 V. A potência térmica dissipada é P = Vdrop · I = 10 V × 0,8 A = 8 Watts (exigindo dissipador de alumínio).',
    formulaUsed: 'P_dissipada = (Vin - Vout) · I_carga'
  },
  {
    id: 'ex-25',
    moduleId: 8,
    moduleName: 'Eletrônica Digital e Portas Lógicas',
    difficulty: 'Avançado',
    type: 'conceitual',
    question: 'Qual porta lógica é conhecida como "Porta Universal" porque com ela é possível sintetizar qualquer outra função booleana (NOT, AND, OR, XOR)?',
    options: ['Porta AND', 'Porta OR', 'Porta NAND (ou NOR)', 'Porta BUFFER'],
    correctIndex: 2,
    explanation: 'Tanto a porta NAND quanto a porta NOR são funcionalmente completas (universais), permitindo implementar todas as operações lógicas com apenas esse tipo de bloco semicondutor.',
    formulaUsed: 'Completude funcional Booleana'
  },
  {
    id: 'ex-26',
    moduleId: 3,
    moduleName: 'Lei de Ohm',
    difficulty: 'Avançado',
    type: 'calculo',
    question: 'Um cabo de cobre possui 100 metros de comprimento e seção de 2,5 mm². Sabendo que a resistividade do cobre é ρ = 0,017 Ω·mm²/m, qual é a resistência elétrica ôhmica total desse cabo?',
    options: ['0,068 Ω', '0,68 Ω', '6,8 Ω', '68 Ω'],
    correctIndex: 1,
    explanation: 'Pela 2ª Lei de Ohm: R = (ρ · L) / A = (0,017 × 100) / 2,5 = 1,7 / 2,5 = 0,68 Ω.',
    formulaUsed: 'R = (ρ · L) / A'
  },
  {
    id: 'ex-27',
    moduleId: 7,
    moduleName: 'LEDs, Diodos e Transistores',
    difficulty: 'Avançado',
    type: 'conceitual',
    question: 'Qual é o papel do diodo de "roda-livre" (flyback) colocado em antiparalelo com a bobina de um relé acionado por transistor?',
    options: [
      'Aumentar a velocidade mecânica de fechamento dos contatos',
      'Fornecer uma rota segura de descarga para a alta força contra-eletromotriz gerada no desligamento da bobina, evitando queima do transistor',
      'Diminuir o consumo de corrente da bobina durante o repouso',
      'Transformar a corrente contínua em corrente alternada'
    ],
    correctIndex: 1,
    explanation: 'Ao desligar uma bobina indutiva (V = -L · di/dt), gera-se um pico de tensão reversa perigoso. O diodo flyback dissipa esse pico com segurança na própria bobina.',
    formulaUsed: 'V = -L · (di / dt)'
  },
  {
    id: 'ex-28',
    moduleId: 9,
    moduleName: 'Instrumentos de Medição',
    difficulty: 'Avançado',
    type: 'conceitual',
    question: 'A classificação de segurança CAT III de um multímetro digital indica que ele é adequado para medições em:',
    options: [
      'Apenas circuitos alimentados por pilhas e baterias de baixa tensão',
      'Instalações de distribuição em edificações, como quadros de distribuição, disjuntores e motores industriais fixos',
      'Apenas linhas aéreas de alta tensão em áreas abertas',
      'Apenas componentes desacoplados na protoboard'
    ],
    correctIndex: 1,
    explanation: 'A norma IEC 61010 define a categoria CAT III para medições em redes de distribuição de edifícios, painéis e máquinas trifásicas fixas.',
    formulaUsed: 'Norma IEC 61010 de Categorias de Sobretensão'
  },
  {
    id: 'ex-29',
    moduleId: 10,
    moduleName: 'Introdução ao Arduino',
    difficulty: 'Avançado',
    type: 'calculo',
    question: 'Em um pino digital configurado com PWM de 8 bits (valores de 0 a 255) em 5V, qual será a tensão média entregue quando o comando analogWrite(pino, 153) for executado?',
    options: ['1,5 V', '3,0 V', '3,75 V', '4,2 V'],
    correctIndex: 1,
    explanation: 'O ciclo de trabalho (Duty Cycle) é 153 / 255 = 0,60 (60%). A tensão média resultante é: Vmédio = 5 V × 0,60 = 3,0 Volts.',
    formulaUsed: 'V_médio = Vcc · (DutyCycle / 255)'
  },
  {
    id: 'ex-30',
    moduleId: 6,
    moduleName: 'Resistores, Capacitores e Potenciômetros',
    difficulty: 'Avançado',
    type: 'calculo',
    question: 'Um resistor de precisão de 5 faixas apresenta a seguinte sequência: Vermelho, Violeta, Preto, Marrom e Marrom. Qual é o valor e a tolerância desse resistor?',
    options: [
      '270 Ω ± 1%',
      '2.700 Ω (2,7 kΩ) ± 1%',
      '27 Ω ± 5%',
      '270 kΩ ± 0,5%'
    ],
    correctIndex: 1,
    explanation: 'Para 5 faixas: 1ª (Vermelho = 2), 2ª (Violeta = 7), 3ª (Preto = 0), 4ª Multiplicador (Marrom = ×10), 5ª Tolerância (Marrom = ±1%). Valor = 270 × 10 = 2.700 Ω = 2,7 kΩ com ±1% de precisão.',
    formulaUsed: 'Código de Cores de 5 Faixas de Precisão'
  }
];

const QA_KNOWLEDGE_BASE = [
  {
    id: 'qa-tensao-corrente',
    question: 'Qual a diferença entre tensão e corrente elétrica?',
    keywords: ['diferenca', 'tensao', 'corrente', 'ddp', 'volts', 'amperes', 'oque e'],
    category: 'Fundamentos',
    answerSummary: 'Tensão é a força ou energia que empurra os elétrons (a causa), enquanto corrente é o fluxo real de elétrons em movimento ordenado (o efeito).',
    answerDetailed: [
      '• Tensão Elétrica (ddp, medida em Volts - V): Representa a diferença de potencial elétrico entre dois pontos. É análoga à pressão em uma tubulação de água ou à altura de uma caixa d’água.',
      '• Corrente Elétrica (medida em Ampères - A): Representa a quantidade de cargas elétricas que cruzam a seção de um condutor por segundo (1 A = 1 Coulomb/segundo). É análoga à vazão de água que escorre pelo cano.',
      '• Regra Prática: Você pode ter tensão sem ter corrente (como em uma tomada com nada conectado), mas nunca terá corrente sem uma diferença de potencial para empurrar as cargas.'
    ],
    formulas: [
      { name: 'Definição de Tensão', formula: 'V = W / Q (Energia / Carga)' },
      { name: 'Definição de Corrente', formula: 'I = Q / Δt (Carga / Tempo)' }
    ],
    example: 'Uma pilha de 1,5 V guardada na gaveta tem 1,5 V de tensão entre seus terminais, mas corrente zero (I = 0 A) porque o circuito está aberto.',
    safetyNote: 'A tensão impulsiona a corrente, mas é a intensidade da corrente elétrica através do corpo humano que causa choque térmico e fibrilação ventricular.'
  },
  {
    id: 'qa-resistor-led',
    question: 'Como calcular o resistor para um LED?',
    keywords: ['resistor', 'led', 'calcular', 'queimar', 'proteger', 'resistencia', 'arduino', 'queda de tensao'],
    category: 'Componentes & Circuitos',
    answerSummary: 'Use a fórmula R = (Vfonte - Vled) / Iled. O resistor absorve a tensão excedente e limita a corrente no patamar seguro.',
    answerDetailed: [
      '1. Descubra a tensão da sua fonte de alimentação (ex: 5V do Arduino ou 9V de bateria).',
      '2. Identifique a tensão direta do LED (Vled): Vermelho (~2.0V), Verde (~2.2V), Azul/Branco (~3.2V).',
      '3. Defina a corrente de trabalho segura (Iled): geralmente 15 mA a 20 mA (0,015 A a 0,020 A).',
      '4. Subtraia a tensão do LED da tensão da fonte para achar a queda no resistor: VR = Vfonte - Vled.',
      '5. Divida pela corrente pela Lei de Ohm: R = VR / Iled.',
      '6. Adote o resistor comercial E24 padronizado imediatamente superior mais próximo.'
    ],
    formulas: [
      { name: 'Fórmula do Resistor de LED', formula: 'R = (Vcc - Vled) / Iled' },
      { name: 'Potência Dissipada no Resistor', formula: 'P = VR · Iled = (Vcc - Vled) · Iled' }
    ],
    example: 'Para alimentar um LED vermelho (2V, 15mA) em 5V: R = (5 - 2) / 0,015 = 3 / 0,015 = 200 Ω. Escolhe-se comercialmente o resistor de 220 Ω (Vermelho-Vermelho-Marrom).'
  },
  {
    id: 'qa-amperimetro-paralelo',
    question: 'O que acontece se ligar um amperímetro em paralelo?',
    keywords: ['amperimetro', 'paralelo', 'curto', 'queima', 'multimetro', 'erro', 'medicao'],
    category: 'Instrumentação',
    answerSummary: 'Provoca um curto-circuito instantâneo! O amperímetro tem resistência quase zero e queimará seu fusível de proteção ou danificará a fonte.',
    answerDetailed: [
      '• O amperímetro foi projetado para ter resistência interna idealmente NULA (0 Ω) para não atrapalhar o circuito.',
      '• Ligá-lo em paralelo com uma bateria ou fonte equivale a colocar um pedaço de fio grosso unindo o polo positivo ao negativo.',
      '• Pela Lei de Ohm: I = V / R. Como R ≈ 0, a corrente atinge centenas de amperes em fração de segundo.',
      '• Consequências: O fusível interno do multímetro romperá imediatamente, gerando faísca e possível dano ao instrumento.',
      '• Lembre-se: Voltímetro em PARALELO, Amperímetro SEMPRE EM SÉRIE abrindo o circuito.'
    ],
    safetyNote: 'Nunca tente medir corrente diretamente nas tomadas residenciais; isso provoca explosão e desarme violento de disjuntores!'
  },
  {
    id: 'qa-lei-de-ohm',
    question: 'Como funciona a Lei de Ohm e como lembrar suas fórmulas?',
    keywords: ['lei de ohm', 'triangulo', 'formula', 'ohms', 'v=r.i', 'georg ohm'],
    category: 'Circuitos',
    answerSummary: 'A 1ª Lei de Ohm afirma que V = R · I. Você pode usar o Triângulo mnemônico de Ohm para isolar qualquer uma das três incógnitas.',
    answerDetailed: [
      '• V (Tensão em Volts): V = R · I',
      '• I (Corrente em Ampères): I = V / R (se a resistência sobe, a corrente cai)',
      '• R (Resistência em Ohms): R = V / I (razão de oposição)',
      '• Truque do Triângulo: Desenhe um triângulo com o "V" no topo e "I" e "R" na base. Cubra com o dedo a variável que você quer calcular e a operação matemática restante se revelará automaticamente!'
    ],
    formulas: [
      { name: 'Tensão', formula: 'V = R · I' },
      { name: 'Corrente', formula: 'I = V / R' },
      { name: 'Resistência', formula: 'R = V / I' }
    ],
    example: 'Se você tem uma fonte de 12 V e quer uma corrente de 2 A, precisa de uma resistência R = 12 / 2 = 6 Ω.'
  },
  {
    id: 'qa-serie-vs-paralelo',
    question: 'Como diferenciar um circuito em série de um circuito em paralelo?',
    keywords: ['serie', 'paralelo', 'diferenca', 'associacao', 'resistores', 'circuito'],
    category: 'Circuitos',
    answerSummary: 'No circuito série a corrente é a mesma em todos os componentes (um único caminho). No paralelo, a tensão é a mesma em todos os ramos.',
    answerDetailed: [
      '• Em Série:',
      '  - Apenas um caminho para as cargas.',
      '  - Corrente: I_total = I1 = I2.',
      '  - Tensão: V_total = V1 + V2 (a tensão se divide proporcionalmente).',
      '  - Se um elemento quebra, o circuito inteiro desliga.',
      '  - Resistência equivalente aumenta (Req = R1 + R2).',
      '• Em Paralelo:',
      '  - Múltiplos caminhos ramificados compartilhando os mesmos nós.',
      '  - Tensão: V1 = V2 = V_fonte (mesma tensão em todos).',
      '  - Corrente: I_total = I1 + I2 (a corrente se divide inversamente à resistência de cada ramo).',
      '  - Se um elemento quebra, os outros continuam funcionando.',
      '  - Resistência equivalente diminui: 1/Req = 1/R1 + 1/R2.'
    ]
  },
  {
    id: 'qa-capacitor-funcao',
    question: 'Para que serve um capacitor e como ele funciona?',
    keywords: ['capacitor', 'capacitancia', 'farad', 'filtro', 'para que serve', 'funcionamento'],
    category: 'Componentes',
    answerSummary: 'O capacitor armazena energia em um campo elétrico formado entre duas placas condutoras isoladas por um dielétrico, atuando como um pequeno reservatório ultrarrápido.',
    answerDetailed: [
      '• Bloqueio de Corrente Contínua (CC): Após carregar completamente, o capacitor se comporta como um circuito aberto para sinais contínuos.',
      '• Passagem de Corrente Alternada (CA): Para sinais que oscilam e ruídos rápidos, ele oferece baixa reatância, servindo como filtro.',
      '• Aplicações mais comuns:',
      '  - Filtro retificador (transforma o sinal pulsante de fontes em uma linha contínua e lisa).',
      '  - Desacoplamento de ruído em microcontroladores (capacitores de 100 nF).',
      '  - Temporizadores (junto com resistores na constante τ = R · C).'
    ],
    formulas: [
      { name: 'Capacitância', formula: 'C = Q / V' },
      { name: 'Energia Armazenada', formula: 'E = (1/2) · C · V²' },
      { name: 'Constante de Tempo', formula: 'τ = R · C' }
    ],
    safetyNote: 'Capacitores eletrolíticos têm polaridade e podem explodir se invertidos. Em fontes de alta tensão, podem reter cargas letais mesmo após desligamento.'
  },
  {
    id: 'qa-portas-logicas-and-or',
    question: 'Qual a diferença prática entre portas lógicas AND, OR e XOR?',
    keywords: ['portas logicas', 'and', 'or', 'xor', 'digital', 'tabela verdade', 'booleana'],
    category: 'Eletrônica Digital',
    answerSummary: 'AND exige que todas as entradas sejam 1; OR exige que pelo menos uma seja 1; e XOR exige que as entradas sejam diferentes.',
    answerDetailed: [
      '• AND (Porta E): Saída é 1 apenas se (A = 1 E B = 1). Assemelha-se a dois interruptores em série.',
      '• OR (Porta OU): Saída é 1 se (A = 1 OU B = 1 OU ambos). Assemelha-se a dois interruptores em paralelo.',
      '• XOR (OU Exclusivo): Saída é 1 apenas se as entradas forem DIFERENTES (0 e 1, ou 1 e 0). Se ambas forem iguais (0 e 0 ou 1 e 1), a saída é 0.'
    ],
    formulas: [
      { name: 'Booleana AND', formula: 'S = A · B' },
      { name: 'Booleana OR', formula: 'S = A + B' },
      { name: 'Booleana XOR', formula: 'S = A ⊕ B' }
    ]
  },
  {
    id: 'qa-transistor-chave',
    question: 'Como usar um transistor BJT como chave liga/desliga?',
    keywords: ['transistor', 'chave', 'bjt', 'npn', 'saturacao', 'corte', 'acionar rele', 'arduino'],
    category: 'Semicondutores',
    answerSummary: 'Opera-se o transistor em duas regiões extremas: Corte (chave aberta, Ib = 0) e Saturação (chave fechada, Ib suficiente para Vce ≈ 0,2V).',
    answerDetailed: [
      '1. Conecte o Emissor (E) ao GND comum.',
      '2. Conecte a carga (ex: bobina do relé, LED de alta potência) entre o VCC e o Coletor (C).',
      '3. Conecte um resistor de Base (Rb, ex: 1 kΩ a 2,2 kΩ) entre a porta digital do Arduino e a Base (B) do transistor.',
      '4. Quando o Arduino manda nível ALTO (5V), flui corrente de base Ib, o transistor satura e fecha contato entre Coletor e Emissor, ligando a carga.',
      '5. Quando o Arduino manda nível BAIXO (0V), a corrente de base cessa, o transistor entra em corte e a carga desliga.'
    ],
    formulas: [
      { name: 'Corrente de Base Mínima para Saturação', formula: 'Ib_sat ≥ Ic / (hFE_mínimo)' },
      { name: 'Cálculo do Resistor de Base', formula: 'Rb = (V_arduino - 0,7V) / Ib_desejado' }
    ]
  },
  {
    id: 'qa-potencia-energia-kwh',
    question: 'Como calcular o consumo de energia em kWh e o custo na conta de luz?',
    keywords: ['consumo', 'energia', 'kwh', 'conta de luz', 'chuveiro', 'gasto', 'tarifa'],
    category: 'Fundamentos',
    answerSummary: 'Multiplique a potência em kW pelo tempo em horas: E (kWh) = (Potência em Watts / 1000) × Horas de uso.',
    answerDetailed: [
      '1. Encontre a potência do aparelho na etiqueta (em Watts - W).',
      '2. Converta Watts para quilowatts dividindo por 1.000: kW = W / 1000.',
      '3. Calcule o tempo total que o aparelho fica ligado por mês em horas.',
      '4. Multiplique: Energia (kWh) = kW × Horas.',
      '5. Multiplique o kWh pelo valor da tarifa da sua conta de energia (ex: R$ 0,85 por kWh).'
    ],
    example: 'Um ar-condicionado de 1400 W (1,4 kW) ligado 8 horas por dia durante 30 dias consome: 1,4 kW × (8 × 30) = 1,4 × 240 = 336 kWh no mês!'
  },
  {
    id: 'qa-seguranca-eletrica',
    question: 'Quais os principais cuidados de segurança em eletricidade para estudantes?',
    keywords: ['seguranca', 'choque', 'nr10', 'cuidados', 'perigo', 'bancada', 'laboratorio'],
    category: 'Segurança Elétrica',
    answerSummary: 'Trabalhe prioritariamente em extra-baixa tensão (< 24V CC), nunca mexa na rede energizada, confira escalas do multímetro e use EPIs básicos.',
    answerDetailed: [
      '1. Trabalhe em Extra-Baixa Tensão: Prefira fontes estabilizadas de bancada de 5V e 12V ou pilhas/baterias. Não faça experimentos diretos em tomadas residenciais sem orientação de um professor credenciado.',
      '2. Desenergize antes de alterar o circuito: Sempre desligue a fonte antes de encaixar fios, trocar chips ou mudar peças na protoboard.',
      '3. Cuidado com componentes aquecidos: Resistores de alta potência e reguladores lineares podem esquentar a mais de 100°C.',
      '4. Atenção aos capacitores carregados: Descarregue capacitores eletrolíticos grandes com um resistor antes de tocar nos terminais.',
      '5. Respeite a escala do multímetro: NUNCA meça resistência ou continuidade com o circuito energizado.'
    ]
  }
];
