import { ComponentItem } from '../types';

export const componentsData: ComponentItem[] = [
  {
    id: 'resistor',
    name: 'Resistor Fixo de Filme de Carbono',
    technicalName: 'Resistor Ôhmico Linear',
    category: 'Passivos',
    icon: 'Activity',
    symbol: 'resistor-symbol',
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
      'Ao soldar, não mantenha a ponta do ferro aquecida por mais de 5 segundos para não alterar a resistividade da película de carbono.',
      'Não toque no resistor energizado se estiver dissipando alta potência (risco de queimadura).'
    ],
    typicalSpecs: [
      { label: 'Valores comerciais comuns', value: 'Série E12/E24 (10 Ω a 10 MΩ)' },
      { label: 'Tolerância padrão', value: '±5% (faixa dourada) ou ±1% (faixa marrom)' },
      { label: 'Potência mais comum', value: '1/4 W (0,25 Watt)' },
      { label: 'Coeficiente de temperatura', value: '-200 a -800 ppm/°C' }
    ],
    didYouKnow: 'O resistor é o componente eletrônico mais fabricado da história da humanidade. Um smartphone moderno contém mais de 1.000 micro-resistores SMD!'
  },
  {
    id: 'capacitor-eletrolitico',
    name: 'Capacitor Eletrolítico de Alumínio',
    technicalName: 'Capacitor Polarizado de Alta Capacitância',
    category: 'Passivos',
    icon: 'BatteryCharging',
    symbol: 'capacitor-polarizado-symbol',
    pinout: ['Terminal Positivo (perna mais longa)', 'Terminal Negativo (faixa branca/cinza com traço - no corpo)'],
    functionality: 'Filtrar ondulações (ripple) em fontes de alimentação, armazenar cargas temporárias e desacoplar circuitos de áudio.',
    operatingPrinciple: 'Utiliza uma camada microscópica de óxido de alumínio como dielétrico e um eletrólito líquido ou em gel condutor. Essa camada ultrafina permite alcançar altas capacitâncias em pequeno volume.',
    practicalApplications: [
      'Filtro capacitivo após pontes retificadoras em fontes AC/DC.',
      'Reservatório local de energia para picos de corrente em amplificadores de som.',
      'Temporização em circuitos osciladores analógicos (como no CI 555).'
    ],
    handlingPrecautions: [
      '⚠️ É RIGOROSAMENTE POLARIZADO! A inversão de polaridade destrói a camada de óxido dielétrico, provocando curto interno, ebulição do eletrólito e risco de explosão!',
      'Respeite a tensão máxima de isolação gravada no corpo (ex: 16V, 25V, 50V). Use sempre com no mínimo 20% a 30% de margem sobre a tensão do circuito.',
      'Capacitores de alta capacidade em fontes podem manter cargas perigosas mesmo após o desligamento da tomada. Descarregue com resistor apropriado antes de manusear.'
    ],
    typicalSpecs: [
      { label: 'Faixas típicas de capacitância', value: '1 µF a 10.000 µF' },
      { label: 'Tensões nominais padrão', value: '6.3V, 16V, 25V, 35V, 50V, 63V, 400V' },
      { label: 'Tolerância típica', value: '±20%' },
      { label: 'Temperatura de trabalho', value: '-40°C a +85°C ou +105°C' }
    ],
    didYouKnow: 'No topo dos capacitores eletrolíticos de boa qualidade há ranhuras em cruz ("K" ou "X"): são válvulas mecânicas de alívio projetadas para romper com segurança caso haja pressão excessiva, evitando estilhaços.'
  },
  {
    id: 'capacitor-ceramico',
    name: 'Capacitor Cerâmico Disco / Multicamadas',
    technicalName: 'Capacitor Não Polarizado de Alta Frequência',
    category: 'Passivos',
    icon: 'Disc',
    symbol: 'capacitor-symbol',
    pinout: ['Terminal 1 (sem polaridade)', 'Terminal 2 (sem polaridade)'],
    functionality: 'Filtrar ruídos de alta frequência, desacoplar alimentação de chips digitais e sintonizar circuitos de RF.',
    operatingPrinciple: 'Possui discos ou placas condutoras de prata separadas por um disco de cerâmica dielétrica. Apresenta resistência série equivalente (ESR) e indutância parasita extremamente baixas.',
    practicalApplications: [
      'Desacoplamento de ruído nos pinos VCC e GND de microcontroladores (100 nF código 104).',
      'Osciladores de cristal de quartzo (capacitores de carga de 22 pF no Arduino).',
      'Filtros passa-baixas e passa-altas de sinal.'
    ],
    handlingPrecautions: [
      'Não possui polaridade (ligação em qualquer sentido).',
      'O invólucro cerâmico é frágil; evite dobrar bruscamente os terminais rente ao corpo do componente para não trincar o disco interno.'
    ],
    typicalSpecs: [
      { label: 'Faixas de capacitância', value: '1 pF a 1 µF (comuns: 22 pF, 100 nF)' },
      { label: 'Código numérico 3 dígitos', value: 'Ex: 104 = 10 × 10⁴ pF = 100.000 pF = 100 nF' },
      { label: 'Tensão máxima', value: '50V a 1kV+' }
    ],
    didYouKnow: 'Para ler um capacitor cerâmico com inscrição "104", os dois primeiros dígitos são a base (10) e o terceiro é o número de zeros em picofarads (100.000 pF = 100 nF = 0,1 µF).'
  },
  {
    id: 'potenciometro',
    name: 'Potenciômetro Rotativo Linear / Logarítmico',
    technicalName: 'Resistor Variável de Três Terminais',
    category: 'Passivos',
    icon: 'Sliders',
    symbol: 'potentiometer-symbol',
    pinout: ['Terminal 1 (Extremidade A)', 'Terminal 2 (Cursor central móvel)', 'Terminal 3 (Extremidade B)'],
    functionality: 'Ajuste manual de grandezas elétricas (volume, brilho, velocidade, calibração e sensibilidade).',
    operatingPrinciple: 'Uma lâmina metálica (cursor) desliza ao longo de uma pista curva de carbono grafite quando o eixo gira. A distância percorrida pelo cursor define o comprimento da pista e, pela 2ª Lei de Ohm, a resistência correspondente.',
    practicalApplications: [
      'Entrada analógica para leitura de posição angular com Arduino (0 a 5V).',
      'Controle de volume de áudio (potenciômetro logarítmico).',
      'Ajuste fino de temporização em osciladores e circuitos disparadores.'
    ],
    handlingPrecautions: [
      'Nunca ligue os terminais 1 e 2 diretamente entre VCC e GND sem um resistor de carga em série: ao girar o eixo até o final (0 Ω), causará curto-circuito direto!',
      'Evite aplicar força excessiva nos terminais de solda para não quebrar os rebites internos que prendem a pista de grafite.'
    ],
    typicalSpecs: [
      { label: 'Valores comerciais comuns', value: '1 kΩ, 10 kΩ, 50 kΩ, 100 kΩ' },
      { label: 'Tipos de curva de resposta', value: 'Linear (tipo B) e Logarítmica (tipo A)' },
      { label: 'Ângulo de giro mecânico', value: 'Aproximadamente 300°' }
    ],
    didYouKnow: 'Para audição humana, percebemos volume de maneira logarítmica. Por isso, aparelhos de som usam potenciômetros "LOG" (tipo A) para que a sensação de aumento de volume pareça suave aos nossos ouvidos.'
  },
  {
    id: 'led',
    name: 'LED (Diodo Emissor de Luz)',
    technicalName: 'Light Emitting Diode (Junção PN Luminescente)',
    category: 'Semicondutores',
    icon: 'Sun',
    symbol: 'led-symbol',
    pinout: ['Ânodo (+) - Perna mais longa / Chanfro oposto', 'Cátodo (-) - Perna mais curta / Lado chanfrado e chato'],
    functionality: 'Sinalização visual, iluminação eficiente, displays de 7 segmentos e transmissão óptica (infravermelho).',
    operatingPrinciple: 'Ao ser polarizado diretamente, elétrons cruzam a junção PN e preenchem lacunas de energia menor. A diferença de energia é liberada na forma de fótons (luz visível ou infravermelha) por eletroluminescência.',
    practicalApplications: [
      'Indicadores de ligado/desligado e status de funcionamento de aparelhos.',
      'Pisca-pisca didático e semáforos com Arduino.',
      'Sensores ópticos e controle remoto (LED infravermelho).'
    ],
    handlingPrecautions: [
      '⚠️ NUNCA ligue diretamente a uma fonte de tensão sem resistor de proteção em série! Queimará em frações de segundo.',
      'Respeite a polaridade: Ânodo no positivo, Cátodo no GND.',
      'Limite a corrente contínua a no máximo 15 mA a 20 mA para prolongar a vida útil.'
    ],
    typicalSpecs: [
      { label: 'Queda de tensão direta (Vf)', value: 'Vermelho/Amarelo: ~1.8V-2.0V; Verde: ~2.2V; Azul/Branco: ~3.0V-3.2V' },
      { label: 'Corrente nominal padrão', value: '10 mA a 20 mA (0,01 A a 0,02 A)' },
      { label: 'Tensão reversa máxima suportada (Vr)', value: 'Geralmente apenas 5 V' }
    ],
    didYouKnow: 'Os primeiros LEDs visíveis foram inventados na década de 1960 e eram exclusivamente vermelhos fracos. A criação do LED azul de alta eficiência em 1993 rendeu o Prêmio Nobel de Física em 2014, pois possibilitou a luz branca e a revolução das lâmpadas modernas!'
  },
  {
    id: 'diodo-retificador',
    name: 'Diodo Retificador 1N4007',
    technicalName: 'Diodo Semicondutor de Potência de Silício',
    category: 'Semicondutores',
    icon: 'ArrowRightCircle',
    symbol: 'diode-symbol',
    pinout: ['Ânodo (lado preto sem faixa)', 'Cátodo (lado com a faixa prateada / branca gravada)'],
    functionality: 'Retificar corrente alternada em contínua, bloquear correntes reversas e proteger contra picos indutivos (diodo flyback).',
    operatingPrinciple: 'Conduz eletricidade em um único sentido (Ânodo → Cátodo). Quando o cátodo fica mais positivo que o ânodo, ele atua como uma chave aberta, suportando até 1000V de bloqueio.',
    practicalApplications: [
      'Ponte retificadora de fontes de alimentação lineares.',
      'Proteção contra inversão acidental de bateria em placas eletrônicas.',
      'Diodo de proteção flyback em paralelo com bobinas de relés e motores DC.'
    ],
    handlingPrecautions: [
      'A faixa prateada no corpo indica o CÁTODO (terminal negativo na condução direta).',
      'Apresenta queda de tensão direta de cerca de 0,7 V a 1,1 V sob carga. Em correntes elevadas, dissipa calor (P = Vd · I).'
    ],
    typicalSpecs: [
      { label: 'Corrente média máxima contínua (If)', value: '1,0 Ampère' },
      { label: 'Tensão reversa de pico máxima (Vrrm)', value: '1000 Volts (série 1N4007)' },
      { label: 'Queda direta típica', value: '0,7 V a 1,0 V' }
    ],
    didYouKnow: 'A família 1N4001 a 1N4007 tem a mesma corrente (1A), variando apenas a tensão máxima suportada: 1N4001 suporta 50V, enquanto o 1N4007 suporta até 1000V! Por ser tão barato, quase todo mundo usa direto o 1N4007.'
  },
  {
    id: 'diodo-zener',
    name: 'Diodo Zener',
    technicalName: 'Diodo Regulador por Ruptura Zener Controlada',
    category: 'Semicondutores',
    icon: 'ShieldCheck',
    symbol: 'zener-symbol',
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
      { label: 'Tensões Zener comerciais comuns', value: '3.3V, 4.7V, 5.1V, 9.1V, 12V, 15V' },
      { label: 'Potência máxima padrão', value: '1/2 W (500 mW) em corpo de vidro DO-35' }
    ],
    didYouKnow: 'Recebeu o nome do físico norte-americano Clarence Zener, que descreveu matematicamente a ruptura mecânico-quântica provocada por fortes campos elétricos.'
  },
  {
    id: 'transistor-bjt-npn',
    name: 'Transistor BJT NPN (BC548 / 2N2222)',
    technicalName: 'Transistor Bipolar de Junção NPN',
    category: 'Semicondutores',
    icon: 'GitFork',
    symbol: 'transistor-npn-symbol',
    pinout: ['Pino 1: Coletor (C)', 'Pino 2: Base (B)', 'Pino 3: Emissor (E) - encapsulamento TO-92 olhando de frente com a face plana virada para você'],
    functionality: 'Chaveamento eletrônico rápido (acionamento de cargas) e amplificação linear de pequenos sinais elétricos.',
    operatingPrinciple: 'Funciona como uma torneira elétrica controlada por corrente. Uma corrente diminuta injetada na Base permite a passagem de uma corrente muito maior entre o Coletor e o Emissor (Ic = β · Ib).',
    practicalApplications: [
      'Acionamento de relés de 5V ou 12V a partir de pinos do Arduino.',
      'Controle liga/desliga de lâmpadas LED, buzzers e pequenos motores.',
      'Amplificadores de microfone de eletreto e pré-amplificadores de áudio.'
    ],
    handlingPrecautions: [
      'Identifique a pinagem correta antes de ligar na protoboard. O BC548 (padrão europeu) tem pinagem CBE; já transistores americanos como o 2N3904 costumam ser EBC!',
      'SEMPRE use um resistor limitador na Base (ex: 1 kΩ a 4,7 kΩ) para não queimar a junção Base-Emissor do transistor e a saída do microcontrolador.'
    ],
    typicalSpecs: [
      { label: 'Corrente máxima de Coletor (Ic)', value: '100 mA (BC548) ou 800 mA (2N2222)' },
      { label: 'Tensão máxima Vce', value: '30V a 45V' },
      { label: 'Ganho típico (hFE / β)', value: '110 a 800' }
    ],
    didYouKnow: 'O transistor foi inventado nos laboratórios Bell em 1947 por Bardeen, Brattain e Shockley, substituindo as gigantescas e ineficientes válvulas a vácuo e dando início à era dos computadores.'
  },
  {
    id: 'transistor-mosfet',
    name: 'Transistor MOSFET de Potência Canal N (IRF540N)',
    technicalName: 'Metal-Oxide-Semiconductor Field-Effect Transistor',
    category: 'Semicondutores',
    icon: 'Zap',
    symbol: 'mosfet-symbol',
    pinout: ['Pino 1: Gate (Porta)', 'Pino 2: Drain (Dreno)', 'Pino 3: Source (Fonte)'],
    functionality: 'Comutação de alta potência e velocidade para motores pesados, inversores solares e controladores PWM de alta corrente.',
    operatingPrinciple: 'Controlado por TENSÃO no Gate, e não por corrente! O Gate é isolado eletricamente por uma camada de dióxido de silício (óxido de metal). Quando uma tensão positiva é aplicada entre Gate e Source, um campo elétrico cria um canal condutor entre Dreno e Fonte com resistência quase nula (Rds_on).',
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
    didYouKnow: 'Como o Gate consome corrente estática praticamente nula (apenas carrega a capacitância parasita interna), o MOSFET quase não consome energia da porta de controle do microcontrolador!'
  },
  {
    id: 'rele',
    name: 'Relé Eletromecânico (5V / 12V)',
    technicalName: 'Chave Eletromecânica Acionada por Bobina',
    category: 'Eletromecânicos',
    icon: 'ToggleRight',
    symbol: 'relay-symbol',
    pinout: ['Dois pinos da Bobina (Eletroímã)', 'Pino Comum (COM)', 'Normalmente Aberto (NA / NO)', 'Normalmente Fechado (NF / NC)'],
    functionality: 'Ligar e desligar circuitos de alta tensão ou alta potência a partir de um sinal de controle isolado galvanicamente.',
    operatingPrinciple: 'Quando a corrente passa pela bobina interna, cria-se um campo magnético que atrai uma armadura mecânica de ferro, movendo os contatos físicos e alternando o circuito entre COM e NA.',
    practicalApplications: [
      'Módulos relé para Arduino acionarem lâmpadas e eletrodomésticos de 127V/220V em bancada supervisionada.',
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
      { label: 'Tempo de acionamento mecânico', value: 'Aprox. 10 milissegundos' }
    ],
    didYouKnow: 'Os primeiros computadores eletromecânicos da história (como o Harvard Mark I nos anos 1940) eram feitos com milhares de relés barulhentos que estalavam continuamente ao realizarem somas!'
  },
  {
    id: 'chave-tactil',
    name: 'Chave Táctil (Push-Button) e Chave Alavanca',
    technicalName: 'Interruptor Mecânico Normalmente Aberto',
    category: 'Eletromecânicos',
    icon: 'Radio',
    symbol: 'switch-symbol',
    pinout: ['Terminais A (conectados internamente em pares)', 'Terminais B (fecham contato com A quando pressionado)'],
    functionality: 'Permitir que o usuário envie comandos de acionamento temporário (botão de pressão) ou contínuo (chave seletora).',
    operatingPrinciple: 'Um disco elástico metálico cede à pressão do dedo, tocando uma pista central e fechando o circuito elétrico. Ao soltar, a elasticidade do metal restaura o estado original de repouso.',
    practicalApplications: [
      'Botões de reset e seleção de menus em painéis eletrônicos.',
      'Acionamento de campainhas e interruptores de fim de curso em impressoras 3D.',
      'Entrada digital com resistores de pull-up para leitura no Arduino.'
    ],
    handlingPrecautions: [
      'Bouncing mecânico (efeito repique): ao pressionar, o metal oscila fisicamente por alguns milissegundos, gerando dezenas de pulsos indesejados. É necessário tratar com capacitor antirrepique ou debouncing por software.',
      'Cuidado para não superaquecer os terminais de plástico ao soldar.'
    ],
    typicalSpecs: [
      { label: 'Força de acionamento', value: '160 gf a 250 gf' },
      { label: 'Vida útil mecânica', value: 'Mais de 100.000 cliques' },
      { label: 'Corrente máxima típica', value: '50 mA a 12V DC' }
    ],
    didYouKnow: 'No Arduino, se você usar `pinMode(pino, INPUT_PULLUP);`, você ativa um resistor interno de 20 kΩ dentro do microcontrolador, economizando uma peça externa na placa!'
  },
  {
    id: 'ci-555',
    name: 'Circuito Integrado Temporizador NE555',
    technicalName: 'Timer / Oscilador Analógico Universal',
    category: 'Circuitos Integrados',
    icon: 'Cpu',
    symbol: 'ic-symbol',
    pinout: [
      'Pino 1: GND', 'Pino 2: Trigger (Gatilho)', 'Pino 3: Output (Saída)', 'Pino 4: Reset',
      'Pino 5: Control Voltage', 'Pino 6: Threshold (Limiar)', 'Pino 7: Discharge (Descarga)', 'Pino 8: VCC (+4.5V a +15V)'
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
      { label: 'Frequência máxima de operação', value: 'Mais de 500 kHz' },
      { label: 'Corrente máxima de saída (Pino 3)', value: '200 mA' }
    ],
    didYouKnow: 'Projetado em 1971 por Hans Camenzind, o 555 é considerado o circuito integrado mais vendido e copiado de todos os tempos, com mais de 1 bilhão de unidades fabricadas todos os anos!'
  },
  {
    id: 'lm7805',
    name: 'Regulador Linear de Tensão LM7805 (5V)',
    technicalName: 'Positive Voltage Regulator 5V 1.5A',
    category: 'Circuitos Integrados',
    icon: 'Cpu',
    symbol: 'regulator-symbol',
    pinout: ['Pino 1: Entrada (Input - Vin de 7V a 25V)', 'Pino 2: Terra / GND (Comum)', 'Pino 3: Saída Estabilizada (Output - 5V fixos)'],
    functionality: 'Converter uma tensão contínua variável ou maior (como 9V ou 12V de uma bateria) em uma linha perfeitamente estável de 5,0 Volts.',
    operatingPrinciple: 'Utiliza um transistor de passagem interno com circuito de realimentação e referência Zener bandgap para manter a saída rigorosamente em 5V contra variações de carga e de entrada.',
    practicalApplications: [
      'Alimentação de circuitos digitais TTL e placas Arduino a partir de baterias de 9V ou 12V de bancada.',
      'Fontes reguladas para laboratório.',
      'Alimentação estável de sensores analógicos de precisão.'
    ],
    handlingPrecautions: [
      'Reguladores lineares dissipam a diferença de tensão na forma de puro calor: P_calor = (Vin - Vout) · Iout. Se alimentar com 12V e puxar 1A, dissipará (12-5) × 1 = 7 Watts em calor! DEVE utilizar dissipador de alumínio.',
      'Exige dois capacitores de filtro próximos aos seus pinos (0,33 µF na entrada e 0,1 µF na saída) para evitar auto-oscilação indesejada.'
    ],
    typicalSpecs: [
      { label: 'Tensão de saída fixa', value: '4.8V a 5.2V (típica: 5.0 V)' },
      { label: 'Tensão de entrada mínima (dropout)', value: '7.0 V' },
      { label: 'Corrente máxima de saída', value: '1.5 Amperes (com dissipador)' }
    ],
    didYouKnow: 'O sufixo "05" na família 78xx indica a tensão regulada: 7805 fornece 5V, 7809 fornece 9V e 7812 fornece 12V!'
  },
  {
    id: 'arduino-uno-chip',
    name: 'Placa Arduino Uno / Microcontrolador ATmega328P',
    technicalName: 'Placa Didática Microcontrolada de 8 bits AVR',
    category: 'Circuitos Integrados',
    icon: 'Layers',
    symbol: 'arduino-symbol',
    pinout: [
      '14 Pinos Digitais I/O (D0 a D13, sendo 6 PWM ~)',
      '6 Entradas Analógicas de 10 bits (A0 a A5)',
      'Pinos de Alimentação: 5V, 3.3V, GND, Vin, IOREF, Reset'
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
      { label: 'Memória Flash', value: '32 KB (sendo 0.5 KB para o Bootloader)' },
      { label: 'Memória SRAM', value: '2 KB' },
      { label: 'Tensão de operação interna', value: '5 Volts' }
    ],
    didYouKnow: 'O nome "Arduino" foi escolhido em homenagem ao Bar di Re Arduino, na cidade italiana de Ivrea, onde os fundadores do projeto costumavam se reunir em 2005 para planejar a ferramenta educacional de código aberto!'
  },
  {
    id: 'protoboard',
    name: 'Protoboard (Matriz de Contatos Didática)',
    technicalName: 'Placa de Ensaio Sem Solda (Solderless Breadboard)',
    category: 'Acessórios & Montagem',
    icon: 'Grid',
    symbol: 'breadboard-symbol',
    pinout: ['Barramentos laterais de alimentação (+ e - em linhas contínuas)', 'Colunas centrais com conexão vertical de 5 orifícios (A-E e F-J)'],
    functionality: 'Montagem rápida e teste experimental de circuitos eletrônicos sem necessidade de soldagem com estanho.',
    operatingPrinciple: 'Por baixo dos orifícios plásticos existem fileiras de presilhas elásticas de latão niquelado que prendem os terminais dos fios e componentes, garantindo contato elétrico confiável e reutilizável.',
    practicalApplications: [
      'Aulas práticas em laboratório de eletrônica.',
      'Testes prévios de protótipos antes da confecção de placas de circuito impresso definitivas.',
      'Experimentos rápidos de medição com multímetro e osciloscópio.'
    ],
    handlingPrecautions: [
      'Não force terminais com espessura excessiva nos orifícios (como fios rígidos grossos de mais de 1 mm²), pois deformará as presilhas elásticas internas.',
      'Evite correntes superiores a 1,5A a 2A na matriz de contato para evitar aquecimento e derretimento do plástico.',
      'Atenção ao canal central: ele divide a placa em duas metades isoladas, ideal para encaixar Circuitos Integrados (DIP) sem fechar curto entre suas pernas opostas.'
    ],
    typicalSpecs: [
      { label: 'Número de pontos comuns', value: '400 pontos ou 830 pontos' },
      { label: 'Bitola de fio recomendada', value: 'AWG 22 a AWG 26 (cabos jumper)' },
      { label: 'Tensão máxima didática', value: 'Até 30V DC' }
    ],
    didYouKnow: 'O termo em inglês "breadboard" surgiu porque, no início do século XX, os radioamadores pioneiros literalmente pregavam soquetes de válvulas e pregos em tábuas de cortar pão de madeira para montar seus receptores de rádio caseiros!'
  },
  {
    id: 'fusivel',
    name: 'Fusível de Vidro de Proteção Térmica',
    technicalName: 'Dispositivo Sacrificial de Proteção contra Sobrecorrente',
    category: 'Passivos',
    icon: 'AlertTriangle',
    symbol: 'fuse-symbol',
    pinout: ['Terminal Metálico 1', 'Terminal Metálico 2 (sem polaridade)'],
    functionality: 'Proteger os circuitos elétricos, cabos e equipamentos contra danos severos e incêndios provocados por curtos-circuitos e sobrecorrentes prolongadas.',
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
    didYouKnow: 'Fusíveis do tipo "ação retardada" são projetados especificamente para suportar o pico momentâneo de corrente na partida de motores e carregamento de transformadores sem queimar em falso!'
  }
];
