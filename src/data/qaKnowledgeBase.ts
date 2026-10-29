import { QnAItem } from '../types';

export const qaKnowledgeBase: QnAItem[] = [
  {
    id: 'qa-tensao-corrente',
    question: 'Qual a diferença entre tensão e corrente elétrica?',
    keywords: ['diferenca', 'tensao', 'corrente', 'ddp', 'volts', 'amperes', 'oque e'],
    category: 'Fundamentos',
    answerSummary: 'Tensão é a força ou energia que empurra os elétrons (a causa), enquanto corrente é o fluxo real de elétrons em movimento ordenado (o efeito).',
    answerDetailed: [
      '• **Tensão Elétrica (ddp, medida em Volts - V):** Representa a diferença de potencial elétrico entre dois pontos. É análoga à pressão em uma tubulação de água ou à altura de uma caixa d’água.',
      '• **Corrente Elétrica (medida em Ampères - A):** Representa a quantidade de cargas elétricas que cruzam a seção de um condutor por segundo (1 A = 1 Coulomb/segundo). É análoga à vazão de água que escorre pelo cano.',
      '• **Regra Prática:** Você pode ter tensão sem ter corrente (como em uma tomada com nada conectado), mas nunca terá corrente sem uma diferença de potencial para empurrar as cargas.'
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
      '• **Consequências:** O fusível interno do multímetro romperá imediatamente, gerando faísca e possível dano ao instrumento.',
      '• **Lembre-se:** Voltímetro em PARALELO, Amperímetro SEMPRE EM SÉRIE abrindo o circuito.'
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
      '• **V (Tensão em Volts):** V = R · I',
      '• **I (Corrente em Ampères):** I = V / R (se a resistência sobe, a corrente cai)',
      '• **R (Resistência em Ohms):** R = V / I (razão de oposição)',
      '• **Truque do Triângulo:** Desenhe um triângulo com o "V" no topo e "I" e "R" na base. Cubra com o dedo a variável que você quer calcular e a operação matemática restante se revelará automaticamente!'
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
      '• **Em Série:**',
      '  - Apenas um caminho para as cargas.',
      '  - Corrente: I_total = I1 = I2.',
      '  - Tensão: V_total = V1 + V2 (a tensão se divide proporcionalmente).',
      '  - Se um elemento quebra, o circuito inteiro desliga.',
      '  - Resistência equivalente aumenta (Req = R1 + R2).',
      '• **Em Paralelo:**',
      '  - Múltiplos caminhos ramificados compartilhando os mesmos dois nós.',
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
      '• **Bloqueio de Corrente Contínua (CC):** Após carregar completamente, o capacitor se comporta como um circuito aberto para sinais contínuos.',
      '• **Passagem de Corrente Alternada (CA):** Para sinais que oscilam e ruídos rápidos, ele oferece baixa reatância, servindo como filtro.',
      '• **Aplicações mais comuns:**',
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
      '• **AND (Porta E):** Saída é 1 apenas se (A = 1 E B = 1). Assemelha-se a dois interruptores em série.',
      '• **OR (Porta OU):** Saída é 1 se (A = 1 OU B = 1 OU ambos). Assemelha-se a dois interruptores em paralelo.',
      '• **XOR (OU Exclusivo):** Saída é 1 apenas se as entradas forem DIFERENTES (0 e 1, ou 1 e 0). Se ambas forem iguais (0 e 0 ou 1 e 1), a saída é 0.'
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
    id: 'qa-arduino-analog-vs-digital',
    question: 'Qual a diferença entre portas digitais e analógicas no Arduino?',
    keywords: ['arduino', 'analogico', 'digital', 'pinos', 'adc', 'pwm', 'analogread', 'digitalread'],
    category: 'Prática & Arduino',
    answerSummary: 'Portas digitais leem e escrevem apenas 2 estados (0V ou 5V); portas analógicas leem tensões contínuas entre 0V e 5V convertendo para 1024 níveis (0 a 1023).',
    answerDetailed: [
      '• **Portas Digitais (0 a 13):**',
      '  - Leem 0V (LOW) ou 5V (HIGH).',
      '  - Escrevem 0V ou 5V com digitalWrite().',
      '  - Pinos com ~ têm PWM (Pulse Width Modulation), permitindo simular saídas variáveis.',
      '• **Portas Analógicas (A0 a A5):**',
      '  - Possuem um conversor ADC interno de 10 bits.',
      '  - Leem qualquer valor contínuo de tensão de 0,00 V a 5,00 V.',
      '  - A função analogRead() retorna um número de 0 (para 0V) a 1023 (para 5V).'
    ]
  },
  {
    id: 'qa-seguranca-eletrica',
    question: 'Quais os principais cuidados de segurança em eletricidade para estudantes?',
    keywords: ['seguranca', 'choque', 'nr10', 'cuidados', 'perigo', 'bancada', 'laboratorio'],
    category: 'Segurança Elétrica',
    answerSummary: 'Trabalhe prioritariamente em extra-baixa tensão (< 24V CC), nunca mexa na rede energizada, confira escalas do multímetro e use EPIs básicos.',
    answerDetailed: [
      '1. **Trabalhe em Extra-Baixa Tensão:** Prefira fontes estabilizadas de bancada de 5V e 12V ou pilhas/baterias. Não faça experimentos diretos em tomadas residenciais sem orientação de um professor credenciado.',
      '2. **Desenergize antes de alterar o circuito:** Sempre desligue a fonte antes de encaixar fios, trocar chips ou mudar peças na protoboard.',
      '3. **Cuidado com componentes aquecidos:** Resistores de alta potência e reguladores lineares podem esquentar a mais de 100°C.',
      '4. **Atenção aos capacitores carregados:** Descarregue capacitores eletrolíticos grandes com um resistor antes de tocar nos terminais.',
      '5. **Respeite a escala do multímetro:** NUNCA meça resistência ou continuidade com o circuito energizado.'
    ]
  }
];
