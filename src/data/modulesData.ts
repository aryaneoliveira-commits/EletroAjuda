import { LearningModule } from '../types';

export const modulesData: LearningModule[] = [
  {
    id: 1,
    slug: 'fundamentos-da-eletricidade',
    title: '1. Fundamentos da Eletricidade',
    subtitle: 'Estrutura atômica, elétrons livres, carga elétrica e natureza da corrente',
    description: 'Entenda como a matéria é constituída, por que certos materiais conduzem eletricidade e como os elétrons criam o fluxo elétrico.',
    category: 'Fundamentos',
    icon: 'Atom',
    readTime: '12 min',
    summaryPoints: [
      'Toda a matéria é formada por átomos compostos por prótons, nêutrons e elétrons.',
      'A carga elementar do elétron vale e = 1,6 × 10⁻¹⁹ Coulombs.',
      'Materiais condutores possuem elétrons livres na camada de valência.',
      'Materiais isolantes retêm seus elétrons fortemente ligados.',
      'Corrente contínua (CC) mantém sentido constante; alternada (CA) oscila periodicamente.'
    ],
    theorySections: [
      {
        title: 'Estrutura Atômica e Elétrons Livres',
        content: `A eletricidade tem origem no próprio átomo. No núcleo encontramos os prótons (carga elétrica positiva) e os nêutrons (sem carga). Ao redor do núcleo, orbitando na eletrosfera, estão os elétrons (carga elétrica negativa).

Em materiais com boa condutividade (como cobre, alumínio e ouro), os elétrons da última órbita (camada de valência) estão fracamente ligados ao núcleo. Sob uma influência externa — como um campo elétrico gerado por uma bateria —, esses elétrons desprendem-se com facilidade, tornando-se **elétrons livres**. O movimento ordenado desses elétrons livres constitui a corrente elétrica.`
      },
      {
        title: 'Carga Elétrica e Quantização (Q = n · e)',
        content: `A carga elétrica é uma propriedade intrínseca das partículas fundamentais. No Sistema Internacional (SI), a unidade de medida da carga elétrica é o **Coulomb (C)**.

Como a menor porção isolável de carga na natureza é a carga de um único elétron (ou próton), dizemos que a carga é quantizada. Para haver uma carga total de 1 Coulomb, é necessário o deslocamento ordenado de aproximadamente 6,25 quintilhões de elétrons!`
      },
      {
        title: 'Corrente Contínua (CC) vs. Corrente Alternada (CA)',
        content: `Existem duas formas fundamentais de circulação da corrente elétrica:
• **Corrente Contínua (CC ou DC):** Os portadores de carga fluem sempre no mesmo sentido. É fornecida por pilhas, baterias, células solares e fontes reguladas de bancada (como os 5V do Arduino).
• **Corrente Alternada (CA ou AC):** O sentido e a intensidade da corrente variam ciclicamente com o tempo (onda senoidal). É o tipo gerado nas usinas hidrelétricas e transmitido até as residências (frequência de 60 Hz no Brasil).`
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
    icon: 'Zap',
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
        content: `A tensão elétrica, representada pela letra **V** ou **U**, é a quantidade de energia fornecida a cada unidade de carga para que ela se mova entre dois pontos. 

Um Volt equivale a 1 Joule de energia por Coulomb de carga (1 V = 1 J/C). Sem uma diferença de potencial entre dois pontos, os elétrons livres movem-se de forma caótica e aleatória, sem produzir corrente líquida.`
      },
      {
        title: 'Corrente Elétrica (Intensidade)',
        content: `A corrente elétrica (**I**) mede a quantidade de carga elétrica que atravessa a seção transversal de um condutor por unidade de tempo. Sua unidade é o **Ampère (A)**.

Convencionalmente adotamos o **sentido convencional** da corrente (do pólo positivo para o negativo), embora fisicamente os elétrons se desloquem no **sentido real** (do negativo para o positivo). Para cálculos de circuitos, o sentido convencional é o padrão universal.`
      },
      {
        title: 'Resistência Elétrica',
        content: `A resistência elétrica (**R**) é a oposição que os átomos de um material oferecem à passagem dos elétrons. Conforme os elétrons colidem com os núcleos da rede cristalina, parte da energia elétrica se transforma em calor (Efeito Joule).

A unidade é o **Ohm (Ω)**. Um resistor de 1 Ω permite a passagem de 1 A quando submetido a uma tensão de 1 V.`
      },
      {
        title: 'A Famosa Analogia Hidráulica',
        content: `Imagine uma caixa d'água elevada com uma tubulação e uma torneira:
1. **Tensão (Volts):** É a altura da caixa d'água. Quanto mais alta, maior a pressão da água na base.
2. **Corrente (Ampères):** É a vazão da água pelo tubo (litros por segundo).
3. **Resistência (Ohms):** É o diâmetro do tubo ou o fechamento da torneira. Um cano fino dificulta o fluxo de água.`
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
    icon: 'Activity',
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
        content: `Formulada pelo físico alemão Georg Simon Ohm em 1827, estabelece que, para condutores ôhmicos a uma temperatura constante, a diferença de potencial aplicada entre suas extremidades é diretamente proporcional à intensidade da corrente que o atravessa:

**V = R · I**

Dessa relação derivam-se diretamente:
• **I = V / R** (se aumentamos a resistência, a corrente diminui).
• **R = V / I** (a resistência é a razão fixa entre a tensão e a corrente).`
      },
      {
        title: 'O Triângulo Mnemônico de Ohm',
        content: `Uma técnica didática muito útil para lembrar as equações:
Desenhe um triângulo com o **V** no topo, e **I** e **R** na base:
• Para achar V: tape o V → sobra **I × R**
• Para achar I: tape o I → sobra **V / R**
• Para achar R: tape o R → sobra **V / I**`
      },
      {
        title: 'Segunda Lei de Ohm (Fatores Físicos da Resistência)',
        content: `A resistência de um condutor uniforme depende de suas características geométricas e do material:

**R = (ρ · L) / A**

Onde:
• **ρ (rô):** Resistividade elétrica do material (em Ω·m ou Ω·mm²/m).
• **L:** Comprimento do condutor (em metros). Fios mais longos têm maior resistência!
• **A:** Área da seção transversal (em m² ou mm²). Fios mais grossos têm menor resistência!`
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
        title: 'Dimensionamento de Corrente em Lâmpada Automotiva',
        problem: 'Uma lâmpada de lanterna de 12 V possui filamento com resistência ôhmica interna de 24 Ω quando aquecida. Calcule a corrente que percorre o filamento ao ligar na bateria.',
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
      'Dimensionamento da bitola de fios em instalações de som automotivo e painéis elétricos.',
      'Cálculo da corrente esperada em resistores de aquecimento (chuveiros, ferros de solda).'
    ],
    safetyTips: [
      'Cuidado com curto-circuito: se R se aproximar de zero (R ≈ 0 Ω), a corrente I = V / R tenderá ao infinito, causando faíscas, queima do fusível ou risco de incêndio!'
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
    icon: 'Flame',
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
        content: `A potência elétrica representa a taxa temporal com que a energia elétrica é fornecida ou consumida por um componente. No Sistema Internacional, a unidade é o **Watt (W)**, onde 1 Watt = 1 Joule por segundo (1 W = 1 J/s).

Em corrente contínua, a potência depende diretamente da tensão aplicada e da corrente que flui:
**P = V · I**`
      },
      {
        title: 'As Três Fórmulas da Potência',
        content: `Combinando a fórmula P = V · I com a Lei de Ohm (V = R · I e I = V / R), obtemos as três equações essenciais:
1. **P = V · I** (quando conhecemos tensão e corrente).
2. **P = R · I²** (quando conhecemos resistência e corrente — fundamental para calcular aquecimento por Efeito Joule!).
3. **P = V² / R** (quando conhecemos tensão e resistência).`
      },
      {
        title: 'Energia Elétrica e a Conta de Luz (kWh)',
        content: `A energia elétrica total consumida depende da potência do aparelho e do tempo durante o qual ele permanece ligado:

**E = P · Δt**

Para fins práticos e de cobrança pelas concessionárias, utiliza-se o **quilowatt-hora (kWh)**:
• Potência em quilowatts (kW) = Watts / 1000.
• Tempo em horas (h).
Exemplo: Um aquecedor de 2000 W (2 kW) ligado por 3 horas consome: E = 2 kW × 3 h = 6 kWh.`
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
    icon: 'Share2',
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
        content: `Em um circuito série, os componentes estão ligados um após o outro, formando um único caminho fechado para a passagem da corrente elétrica.

Principais propriedades:
1. **Corrente uniforme:** I_total = I1 = I2 = ... = In.
2. **Soma das tensões (Lei de Kirchhoff das Malhas):** V_total = V1 + V2 + ... + Vn.
3. **Resistência Equivalente:** Req = R1 + R2 + ... + Rn.
Se um componente do circuito série for rompido ou desconectado, o circuito é interrompido e a corrente em todo o circuito cessa imediatamente (como nas clássicas lâmpadas pisca-pisca antigas).`
      },
      {
        title: 'Associação em Paralelo',
        content: `Em um circuito paralelo, todos os componentes compartilham os mesmos dois nós elétricos principais, ficando submetidos exatamente à mesma diferença de potencial.

Principais propriedades:
1. **Tensão idêntica:** V_total = V1 = V2 = ... = Vn.
2. **Soma das correntes (Lei de Kirchhoff dos Nós):** I_total = I1 + I2 + ... + In.
3. **Resistência Equivalente:** 1 / Req = 1/R1 + 1/R2 + ... + 1/Rn.
Se um componente for desligado, os demais continuam funcionando normalmente. É essa a topologia utilizada nas tomadas de residências e indústrias!`
      },
      {
        title: 'O Circuito Divisor de Tensão',
        content: `O divisor de tensão é um dos blocos mais comuns na eletrônica. Ele reduz uma tensão de entrada para um nível menor proporcional à razão dos resistores:

**V_out = V_in · [ R2 / (R1 + R2) ]**

É amplamente utilizado para condicionar sinais de sensores analógicos antes de conectá-los às entradas do Arduino (por exemplo, reduzindo 12V de uma bateria para no máximo 5V).`
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
    icon: 'Sliders',
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
        content: `Para ler um resistor de 4 faixas:
• **1ª Faixa:** Primeiro dígito significativo.
• **2ª Faixa:** Segundo dígito significativo.
• **3ª Faixa:** Multiplicador (fator de 10ⁿ).
• **4ª Faixa (espaçada):** Tolerância (Dourado = ±5%, Prateado = ±10%, Marrom = ±1%).

**Tabela mnemônica de cores:**
Preto (0), Marrom (1), Vermelho (2), Laranja (3), Amarelo (4), Verde (5), Azul (6), Violeta (7), Cinza (8), Branco (9).
*Exemplo:* Marrom (1), Preto (0), Vermelho (×100) = 1.000 Ω = 1 kΩ.`
      },
      {
        title: 'Capacitores e Armazenamento de Energia',
        content: `Um capacitor é composto por duas placas condutoras separadas por um material isolante chamado **dielétrico** (ar, cerâmica, poliéster, óxido de alumínio).

Quando conectado a uma fonte, cargas elétricas se acumulam nas armaduras sem cruzar o dielétrico, armazenando energia potencial eletrostática.
A capacitância mede a capacidade de acumular carga para cada volt aplicado: **C = Q / V**.`
      },
      {
        title: 'O Circuito RC e a Constante de Tempo (τ = R · C)',
        content: `Quando um capacitor é carregado ou descarregado através de um resistor:
• A velocidade da carga é regida pelo produto **τ = R · C** (onde R é em Ohms, C é em Farads e τ é em segundos).
• Em **t = 1τ**, o capacitor carrega até **63,2%** da tensão da fonte.
• Em **t = 5τ**, considera-se o capacitor totalmente carregado (**99,3%**).`
      },
      {
        title: 'Potenciômetros e Trimpots',
        content: `Um potenciômetro possui uma pista resistiva e um cursor móvel conectado ao pino central (Pino 2). 
• Entre os pinos 1 e 3: mede-se a resistência total fixa.
• Entre os pinos 1 e 2 (ou 2 e 3): mede-se uma resistência variável contínua de 0 Ω até o valor nominal.
Ligando 5V no pino 1, GND no pino 3 e lendo o pino 2 com o Arduino, temos um botão de ajuste analógico perfeito!`
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
      'ATENÇÃO com capacitores eletrolíticos: eles possuem polaridade estrita! O terminal negativo (indicado por uma faixa com sinal de menos no invólucro) deve ser sempre ligado ao menor potencial (GND). Se invertidos ou submetidos a sobretensão, podem explodir violentamente liberando eletrólito quente!'
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
    icon: 'Radio',
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
        content: `O diodo é formado pela união de um cristal de silício dopado tipo P (ânodo) e outro tipo N (cátodo).
• **Polarização Direta (Ânodo no positivo, Cátodo no negativo):** A barreira de potencial (~0,7 V para o silício) é superada e a corrente flui livremente.
• **Polarização Reversa:** A barreira se alarga, bloqueando quase totalmente a passagem de corrente (apenas uma minúscula corrente de fuga em nanoamperes).
Por essa característica, diodos são usados como retificadores em fontes de alimentação e como diodos de roda-livre (flyback) para proteger circuitos contra picos indutivos de relés e motores.`
      },
      {
        title: 'LED (Diodo Emissor de Luz) e Resistor Limitador',
        content: `O LED emite fótons quando os elétrons se recombinam com as lacunas na junção PN. Ao contrário de uma lâmpada comum, o LED **não possui resistência interna linear**; se for ligado direto em uma fonte de 5V ou 12V sem um resistor limitador em série, a corrente disparará até a destruição física do componente!

A fórmula para dimensionar o resistor de proteção é:
**R = (V_fonte - V_led) / I_led**

*Quedas típicas (V_led):*
• Vermelho/Amarelo: ~1,8 V a 2,0 V.
• Verde: ~2,1 V a 2,4 V.
• Azul/Branco: ~3,0 V a 3,3 V.
*Corrente típica segura:* 10 mA a 20 mA (0,01 A a 0,02 A).`
      },
      {
        title: 'Transistores Bipolares (BJT NPN e PNP)',
        content: `O transistor revolucionou o mundo moderno ao permitir o controle elétrico de sinais sem partes mecânicas. No modelo mais popular em projetos didáticos (NPN, como o BC548 ou 2N2222):
• **Pinos:** Base (B), Coletor (C), Emissor (E).
• **Funcionamento:** Quando injetamos uma pequena corrente na Base (passando por um resistor de proteção de base), o transistor "abre" a passagem entre o Coletor e o Emissor.
• **Ganhador de corrente (hFE ou β):** Ic = β · Ib.
• **Dois modos de operação cruciais:**
  1. *Corte e Saturação (Chave Eletrônica):* Usado com microcontroladores para ligar e desligar relés, motores e fitas LED.
  2. *Região Ativa (Amplificador linear):* Usado em pré-amplificadores de áudio e microfones.`
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
          'Passo 4: Calcular a potência no resistor: P = VR · Iled = 3,0 V × 0,015 A = 0,045 W (45 mW). Um resistor padrão de 1/4 W (0,25 W = 250 mW) operará com extrema folga térmica.'
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
    icon: 'Cpu',
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
        content: `• **Sinal Analógico:** Varia de forma contínua no tempo, podendo assumir infinitos valores de amplitude (como a voz humana captada por um microfone).
• **Sinal Digital:** Opera com valores quantizados e discretos. Na lógica booleana padrão, utilizamos apenas dois estados: **Falso (0)** e **Verdadeiro (1)**.
Essa abordagem digital oferece extrema imunidade a ruídos eletromagnéticos, permitindo o armazenamento e processamento de informações complexas sem perdas.`
      },
      {
        title: 'As Portas Lógicas Fundamentais',
        content: `As portas lógicas são blocos eletrônicos microscópicos feitos de transistores integrados:
1. **NOT (Inversor):** S = A' (ou NÃO A). Se entra 1, sai 0.
2. **AND (Porta E):** S = A · B. A saída só é ativada se A e B forem verdadeiros simultaneamente (como dois interruptores em série).
3. **OR (Porta OU):** S = A + B. A saída é ativada se A ou B (ou ambos) forem verdadeiros (como dois interruptores em paralelo).`
      },
      {
        title: 'Portas Derivadas: NAND, NOR, XOR e XNOR',
        content: `• **NAND:** Negação da porta AND. S = (A · B)'. A saída só é 0 se ambas forem 1.
• **NOR:** Negação da porta OR. S = (A + B)'. A saída só é 1 se ambas as entradas forem 0.
• **XOR (Exclusive OR):** S = A ⊕ B. A saída é 1 se e somente se as entradas forem diferentes entre si (0 e 1, ou 1 e 0). É a base dos somadores binários aritméticos!`
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
        explanation: 'A porta NAND é considerada uma "porta universal", pois através de combinações de portas NAND é possível criar qualquer outro circuito digital, desde simples memórias até microprocessadores.'
      }
    ],
    practicalApplications: [
      'Sistemas de intertravamento de segurança em máquinas industriais (ex: a prensa só desce se o sensor de barreira estiver livre E os dois botões forem pressionados simultaneamente).',
      'Circuitos integrados clássicos da família 74HCxx (como 74HC08 AND, 74HC32 OR e 74HC00 NAND).',
      'Decodificadores para display de 7 segmentos.'
    ],
    safetyTips: [
      'Circuitos integrados digitais modernos (como tecnologia CMOS) são altamente sensíveis a descargas eletrostáticas (ESD). Nunca toque nos pinos sem descarregar a eletricidade estática do corpo.'
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
    icon: 'Gauge',
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
        content: `O voltímetro possui uma resistência interna extremamente alta (superior a 10 MΩ) para não interferir no circuito.
• **Modo de ligação:** Conecte as pontas de prova em **PARALELO** com o componente cuja queda de tensão você deseja aferir.
• O circuito permanece **energizado**.
• **Seletor:** Escolha V= (tensão contínua DC) para pilhas, baterias e circuitos microcontrolados, ou V~ (tensão alternada AC) para tomadas e saídas de transformadores.`
      },
      {
        title: 'Como Medir Corrente Elétrica (Amperímetro) — O Maior Erro dos Alunos!',
        content: `O amperímetro possui resistência interna praticamente ZERO (uma fração de ohm) para não limitar o circuito.
• **Modo de ligação:** O amperímetro deve ser inserido em **SÉRIE**!
• É necessário **abrir o circuito** (desconectar um fio ou perna de componente) e fazer com que a corrente entre pela ponta vermelha e saia pela ponta preta do multímetro.
⚠️ **ERRO FATAL:** Se você ligar o multímetro na função de corrente em paralelo com uma bateria ou fonte, ocorrerá um **curto-circuito violento**, queimando o fusível interno do instrumento ou destruindo as pontas de prova!`
      },
      {
        title: 'Como Medir Resistência e Teste de Continuidade',
        content: `• **Regra de Ouro:** O circuito deve estar completamente **DESLIGADO e DESENERGIZADO**! O multímetro injeta uma pequena corrente própria de sua bateria interna para calcular R = V/I.
• Para não ler componentes vizinhos na placa, solte pelo menos um dos terminais do resistor antes de medir.
• **Teste de Continuidade (Bip sonoro):** Apita se a resistência medida for muito baixa (geralmente abaixo de 50 Ω). É excelente para encontrar trilhas rompidas, cabos partidos e testar chaves.`
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
      'Verificação da integridade de fusíveis sem retirá-los da tomada.',
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
    icon: 'Layers',
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
        content: `O Arduino é uma placa de desenvolvimento que simplifica o uso de microcontroladores. 
• **Microcontrolador (ATmega328P):** O "cérebro" que contém processador, memória Flash para o programa, memória RAM e periféricos em um único chip.
• **Alimentação:** Pode ser alimentado pelo conector USB (5V) ou pelo plug P4 de alimentação externa (7V a 12V recomendado, regulado internamente para 5V pelo CI LM1117).
• **Cristal Oscilador:** Opera na frequência de 16 MHz, executando até 16 milhões de instruções por segundo.`
      },
      {
        title: 'Portas Digitais e Modulação PWM',
        content: `• **Pinos Digitais (0 a 13):** Podem ser configurados como ENTRADA (leitura de botões, sensores de fim de curso) ou SAÍDA (acionamento de LEDs, relés, transistores). Cada pino fornece com segurança no máximo 20 mA a 40 mA a 5V.
• **PWM (Pulse Width Modulation - indicados pelo símbolo ~ nos pinos 3, 5, 6, 9, 10 e 11):** Permite simular tensões contínuas variáveis entre 0V e 5V ligando e desligando a saída em alta frequência (490 Hz ou 980 Hz). A função **analogWrite(pino, valor)** aceita valores de 0 (0% de duty cycle, 0V) a 255 (100% de duty cycle, 5V).`
      },
      {
        title: 'Portas Analógicas e Conversor A/D (ADC de 10 bits)',
        content: `Os pinos A0 a A5 conseguem ler qualquer tensão entre 0 V e 5 V proveniente de sensores contínuos (como LDR para luz, LM35 para temperatura e potenciômetros).
Como o conversor possui resolução de **10 bits (2¹⁰ = 1024 níveis)**:
• 0 V corresponde ao valor **0**.
• 5 V corresponde ao valor **1023**.
• Cada unidade lida equivale a aproximadamente: 5 V / 1024 ≈ 4,88 mV.`
      },
      {
        title: 'A Estrutura do Código Arduino (C/C++)',
        content: `Todo sketch do Arduino possui duas funções obrigatórias:
\`\`\`cpp
void setup() {
  // Configurações iniciais: executa apenas UMA VEZ
  pinMode(13, OUTPUT); // Define o pino 13 como saída
}

void loop() {
  // Código principal: executa repetidamente em loop infinito
  digitalWrite(13, HIGH); // Liga o LED (5V)
  delay(1000);            // Espera 1000 milissegundos (1 segundo)
  digitalWrite(13, LOW);  // Desliga o LED (0V)
  delay(1000);            // Espera 1 segundo
}
\`\`\``
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
      'Automação residencial (ligar lâmpadas e acionar travas eletromagnéticas com relé).',
      'Estações meteorológicas didáticas com sensores DHT11 de temperatura e umidade.',
      'Robôs seguidores de linha e braços robóticos com servomotores.'
    ],
    safetyTips: [
      'NUNCA conecte motores DC de alta potência ou bobinas de relé DIRETAMENTE aos pinos do Arduino! Use sempre um transistor ou driver (como L298N ou MOSFET) com diodo de proteção flyback para evitar que picos indutivos queimem o microcontrolador.'
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
