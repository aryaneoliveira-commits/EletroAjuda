import { ExerciseQuestion } from '../types';

export const questionsData: ExerciseQuestion[] = [
  // --- FÁCIL (CONCEITUAIS E CÁLCULOS DIRETOS) ---
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
    explanation: 'Sendo um semicondutor com junção PN, o LED só conduz e emite fótons quando polarizado diretamente (Ânodo no pólo positivo e Cátodo no pólo negativo).',
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
    explanation: 'O circuito DEVE estar desenergizado! Caso contrário, a tensão externa pode queimar a placa de medição interna do multímetro e falseará a leitura.',
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
    explanation: 'A função void setup() é executada uma única vez para inicialização de pinos (pinMode), comunicação serial (Serial.begin), etc.',
    formulaUsed: 'Ciclo de vida do sketch Arduino'
  },

  // --- INTERMEDIÁRIO (CIRCUITOS MISTOS, CÁLCULOS MULTIETAPAS E COMPONENTES) ---
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
    question: 'Um chuveiro elétrico de 5.500 W opera durante 30 minutos por dia. Quantos quilowatts-hora (kWh) de energia elétrica ele consumirá ao longo de 30 dias?',
    options: ['82,5 kWh', '165 kWh', '2,75 kWh', '55 kWh'],
    correctIndex: 0,
    explanation: 'Tempo diário = 0,5 h. Em 30 dias: t = 0,5 h × 30 = 15 horas no mês. Energia: E = (P em kW) · t = 5,5 kW × 15 h = 82,5 kWh.',
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

  // --- AVANÇADO (ANÁLISE DE MALHAS, POTÊNCIA COMPLEXA, INTERPRETAÇÃO DE DATASHEET E PROJETO) ---
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
    explanation: 'P = V² / R = 12² / 470 = 144 / 470 ≈ 0,306 W (306 mW). Como 306 mW > 250 mW (limite de 1/4 W), o resistor trabalhará sobrecarregado e sofrerá queima ou alteração irreversível de sua resistência.',
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
    explanation: 'A associação de capacitores em série funciona de forma análoga aos resistores em paralelo: 1/Ceq = 1/C1 + 1/C2 → Ceq = (C1 · C2) / (C1 + C2) = (10 × 40) / (10 + 40) = 400 / 50 = 8 µF.',
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
    explanation: 'A queda de tensão no LM7805 é Vdrop = Vin - Vout = 15 V - 5 V = 10 V. A potência térmica dissipada é P = Vdrop · I = 10 V × 0,8 A = 8 Watts (exigindo obrigatoriamente um dissipador de alumínio robusto).',
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
      'Fornecer uma rota segura de descarga para a alta força contra-eletromotriz (indutiva) gerada no desligamento da bobina, evitando a queima do transistor',
      'Diminuir o consumo de corrente da bobina durante o repouso',
      'Transformar a corrente contínua em corrente alternada'
    ],
    correctIndex: 1,
    explanation: 'Ao desligar abruptamente uma bobina indutiva (V = -L · di/dt), gera-se um pico de tensão reversa de dezenas ou centenas de volts. O diodo flyback conduz e dissipa esse pico na própria resistência da bobina.',
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
      'Apenas linhas aéreas de alta tensão de concessionárias em áreas abertas',
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
