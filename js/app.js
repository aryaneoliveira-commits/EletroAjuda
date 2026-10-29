// ==========================================================================
// ELETROAJUDA - APLICAÇÃO EDUCACIONAL EM JAVASCRIPT PURO
// ==========================================================================

const STORAGE_KEY = 'eletroajuda_vanilla_progress_v1';

let userProgress = {
  completedModules: [],
  quizScores: {},
  totalPoints: 0,
  unlockedBadges: []
};

// Carregar progresso do localStorage
function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      userProgress = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Erro ao ler progresso:', e);
  }
  updateNavbarStats();
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
  } catch (e) {
    console.error('Erro ao salvar progresso:', e);
  }
  updateNavbarStats();
}

function addPoints(pts) {
  userProgress.totalPoints = (userProgress.totalPoints || 0) + pts;
  saveProgress();
}

function unlockBadge(badgeId) {
  if (!userProgress.unlockedBadges.includes(badgeId)) {
    userProgress.unlockedBadges.push(badgeId);
    saveProgress();
  }
}

function markModuleComplete(id) {
  if (!userProgress.completedModules.includes(id)) {
    userProgress.completedModules.push(id);
    addPoints(100);
    if (userProgress.completedModules.length === 1) unlockBadge('first-module');
    if (id === 3) unlockBadge('ohm-master');
    if (userProgress.completedModules.length === 10) unlockBadge('all-modules');
    saveProgress();
    renderDashboard();
    renderHomeContinue();
  }
}

function unmarkModuleComplete(id) {
  userProgress.completedModules = userProgress.completedModules.filter(mId => mId !== id);
  userProgress.totalPoints = Math.max(0, (userProgress.totalPoints || 0) - 100);
  saveProgress();
  renderDashboard();
  renderHomeContinue();
}

function updateNavbarStats() {
  const xpEl = document.getElementById('navbar-xp');
  if (xpEl) xpEl.textContent = `${userProgress.totalPoints || 0} XP`;
  const mobileXpEl = document.getElementById('navbar-xp-mobile');
  if (mobileXpEl) mobileXpEl.textContent = `${userProgress.totalPoints || 0} XP`;
}

// ==========================================================================
// ROTEADOR / NAVEGAÇÃO ENTRE TELAS
// ==========================================================================
function navigateTo(viewId, param = null) {
  // Fecha menu mobile se estiver aberto
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) drawer.classList.remove('open');

  // Esconde todas as seções
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.remove('active');
  });

  // Atualiza botões ativos na navbar
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-view') === viewId) {
      btn.classList.add('active');
    }
  });

  // Mostra a seção desejada
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.add('active');
  }

  // Ações específicas de cada view
  if (viewId === 'home') {
    renderHomeContinue();
  } else if (viewId === 'modules') {
    renderModulesList();
  } else if (viewId === 'module-detail') {
    renderModuleDetail(param || 1);
  } else if (viewId === 'calculators') {
    // Mantém estado das calculadoras
  } else if (viewId === 'catalog') {
    renderCatalog();
  } else if (viewId === 'exercises') {
    initExercises();
  } else if (viewId === 'qna') {
    initQnA();
  } else if (viewId === 'dashboard') {
    renderDashboard();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================================
// 1. HOME VIEW & WIDGETS
// ==========================================================================
function renderHomeContinue() {
  const nextModuleId = userProgress.completedModules.length < 10
    ? (MODULES_DATA.find(m => !userProgress.completedModules.includes(m.id))?.id || 1)
    : 1;
  const mod = MODULES_DATA.find(m => m.id === nextModuleId) || MODULES_DATA[0];

  const titleEl = document.getElementById('continue-module-title');
  const subEl = document.getElementById('continue-module-sub');
  const fillEl = document.getElementById('continue-progress-fill');
  const percentEl = document.getElementById('continue-progress-percent');
  const countEl = document.getElementById('continue-progress-count');
  const btnEl = document.getElementById('continue-module-btn');

  const pct = Math.round((userProgress.completedModules.length / 10) * 100);

  if (titleEl) titleEl.textContent = mod.title;
  if (subEl) subEl.textContent = mod.subtitle;
  if (fillEl) fillEl.style.width = `${pct}%`;
  if (percentEl) percentEl.textContent = `${pct}%`;
  if (countEl) countEl.textContent = `(${userProgress.completedModules.length} de 10 aulas concluídas)`;
  if (btnEl) {
    btnEl.onclick = () => navigateTo('module-detail', mod.id);
  }
}

// Triângulo da Lei de Ohm Interativo
function selectOhmSector(target) {
  document.querySelectorAll('.triangle-sector').forEach(sec => sec.classList.remove('active'));
  const sector = document.getElementById(`sector-${target}`);
  if (sector) sector.classList.add('active');

  const infoTitle = document.getElementById('triangle-info-title');
  const infoFormula = document.getElementById('triangle-info-formula');
  const infoDesc = document.getElementById('triangle-info-desc');
  const infoEx = document.getElementById('triangle-info-example');

  if (target === 'V') {
    infoTitle.textContent = 'Calculando Tensão (V)';
    infoFormula.textContent = 'V = R · I';
    infoDesc.textContent = 'Para encontrar a Tensão (Volts), multiplique a Resistência (Ohms) pela Corrente (Ampères).';
    infoEx.innerHTML = '<strong>Exemplo:</strong> R = 100 Ω e I = 0,2 A → V = 100 × 0,2 = <strong>20 V</strong>.';
  } else if (target === 'I') {
    infoTitle.textContent = 'Calculando Corrente (I)';
    infoFormula.textContent = 'I = V / R';
    infoDesc.textContent = 'Para encontrar a Corrente (Ampères), divida a Tensão (Volts) pela Resistência (Ohms).';
    infoEx.innerHTML = '<strong>Exemplo:</strong> V = 12 V e R = 24 Ω → I = 12 / 24 = <strong>0,5 A (500 mA)</strong>.';
  } else {
    infoTitle.textContent = 'Calculando Resistência (R)';
    infoFormula.textContent = 'R = V / I';
    infoDesc.textContent = 'Para encontrar a Resistência (Ohms), divida a Tensão (Volts) pela Corrente (Ampères).';
    infoEx.innerHTML = '<strong>Exemplo:</strong> V = 5 V e I = 0,02 A (20 mA) → R = 5 / 0,02 = <strong>250 Ω</strong>.';
  }
}

// ==========================================================================
// 2. CENTRAL DE APRENDIZAGEM (10 MÓDULOS)
// ==========================================================================
function renderModulesList() {
  const container = document.getElementById('modules-grid');
  const searchInput = document.getElementById('modules-search-input');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  if (!container) return;

  const filtered = MODULES_DATA.filter(m => {
    return (
      m.title.toLowerCase().includes(query) ||
      m.subtitle.toLowerCase().includes(query) ||
      m.description.toLowerCase().includes(query) ||
      m.category.toLowerCase().includes(query)
    );
  });

  container.innerHTML = filtered.map(mod => {
    const isDone = userProgress.completedModules.includes(mod.id);
    return `
      <div class="card" onclick="navigateTo('module-detail', ${mod.id})" style="cursor: pointer; ${isDone ? 'border-color: #10b981; background: #f0fdf4;' : ''}">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
            <span style="font-size:0.7rem; font-weight:700; text-transform:uppercase; background:#e0f2fe; color:#0369a1; padding:0.2rem 0.5rem; border-radius:4px;">
              ${mod.category}
            </span>
            <div style="font-size:0.75rem; color:#64748b; display:flex; align-items:center; gap:0.35rem;">
              <span>⏱️ ${mod.readTime}</span>
              ${isDone ? '<span style="color:#059669; font-weight:700;">✓ Concluído</span>' : ''}
            </div>
          </div>
          <h3 class="card-title">${mod.title}</h3>
          <p style="font-size:0.8rem; font-weight:600; color:#334155; margin-bottom:0.5rem;">${mod.subtitle}</p>
          <p class="card-text">${mod.description}</p>
        </div>
        <div class="card-link">
          <span>Abrir aula completa</span>
          <span>→</span>
        </div>
      </div>
    `;
  }).join('');
}

let currentDetailModule = null;
let currentModuleQuizAnswers = {};

function renderModuleDetail(id) {
  const mod = MODULES_DATA.find(m => m.id === id);
  if (!mod) return;
  currentDetailModule = mod;
  currentModuleQuizAnswers = {};

  const titleEl = document.getElementById('detail-title');
  const catEl = document.getElementById('detail-category');
  const timeEl = document.getElementById('detail-readtime');
  const subEl = document.getElementById('detail-subtitle');
  const completeBtn = document.getElementById('detail-toggle-complete-btn');

  if (titleEl) titleEl.textContent = mod.title;
  if (catEl) catEl.textContent = `Módulo ${mod.id} • ${mod.category}`;
  if (timeEl) timeEl.textContent = `⏱️ ${mod.readTime}`;
  if (subEl) subEl.textContent = mod.subtitle;

  const isDone = userProgress.completedModules.includes(mod.id);
  if (completeBtn) {
    completeBtn.innerHTML = isDone ? '✓ Concluído (+100 XP)' : '◯ Marcar como Concluído';
    completeBtn.className = isDone ? 'btn btn-primary' : 'btn btn-secondary';
    completeBtn.onclick = () => {
      if (isDone) {
        unmarkModuleComplete(mod.id);
      } else {
        markModuleComplete(mod.id);
      }
      renderModuleDetail(mod.id);
    };
  }

  // Botões de navegação anterior / próximo
  const prevBtn = document.getElementById('detail-prev-btn');
  const nextBtn = document.getElementById('detail-next-btn');
  if (prevBtn) {
    prevBtn.disabled = mod.id === 1;
    prevBtn.onclick = () => renderModuleDetail(mod.id - 1);
  }
  if (nextBtn) {
    nextBtn.disabled = mod.id === 10;
    nextBtn.onclick = () => renderModuleDetail(mod.id + 1);
  }

  // Abre aba inicial de Teoria
  switchDetailTab('teoria');
}

function switchDetailTab(tabName) {
  document.querySelectorAll('.detail-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
  });

  const contentContainer = document.getElementById('detail-tab-content');
  if (!contentContainer || !currentDetailModule) return;

  const mod = currentDetailModule;

  if (tabName === 'teoria') {
    contentContainer.innerHTML = `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:18px; padding:1.75rem;">
        ${mod.theorySections.map(sec => `
          <div style="margin-bottom:1.75rem; border-bottom:1px solid #f1f5f9; padding-bottom:1.25rem;">
            <h3 style="font-size:1.15rem; font-weight:800; color:#0f172a; margin-bottom:0.65rem;">
              ${sec.title}
            </h3>
            <p style="font-size:0.875rem; color:#334155; line-height:1.7; white-space:pre-line;">
              ${sec.content}
            </p>
          </div>
        `).join('')}
        <button class="btn btn-primary" onclick="switchDetailTab('formulas')">
          Ver Fórmulas do Módulo →
        </button>
      </div>
    `;
  } else if (tabName === 'formulas') {
    contentContainer.innerHTML = mod.formulas.map(f => `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:18px; padding:1.5rem; margin-bottom:1.25rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
          <h3 style="font-size:1rem; font-weight:800; color:#0f172a;">${f.name}</h3>
          <span style="font-family:var(--font-mono); font-size:1.1rem; font-weight:800; background:#0f172a; color:#38bdf8; padding:0.35rem 0.85rem; border-radius:8px;">
            ${f.expression}
          </span>
        </div>
        <p style="font-size:0.8rem; color:#64748b; margin-bottom:1rem;">${f.description}</p>
        <div style="overflow-x:auto;">
          <table style="width:100%; font-size:0.75rem; text-align:left; border-collapse:collapse;">
            <thead>
              <tr style="background:#f8fafc; border-bottom:1px solid #e2e8f0;">
                <th style="padding:0.5rem;">Símbolo</th>
                <th style="padding:0.5rem;">Nome da Grandeza</th>
                <th style="padding:0.5rem;">Unidade SI</th>
                <th style="padding:0.5rem;">Significado Físico</th>
              </tr>
            </thead>
            <tbody>
              ${f.variables.map(v => `
                <tr style="border-bottom:1px solid #f1f5f9;">
                  <td style="padding:0.5rem; font-weight:700; color:#0284c7; font-family:var(--font-mono);">${v.symbol}</td>
                  <td style="padding:0.5rem; font-weight:600;">${v.name}</td>
                  <td style="padding:0.5rem; font-family:var(--font-mono);">${v.unit}</td>
                  <td style="padding:0.5rem; color:#64748b;">${v.description}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `).join('');
  } else if (tabName === 'exemplos') {
    contentContainer.innerHTML = mod.examples.map((ex, i) => `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:18px; padding:1.5rem; margin-bottom:1.25rem;">
        <span style="font-size:0.7rem; font-weight:700; color:#0284c7; text-transform:uppercase;">Exemplo Resolvido ${i + 1}</span>
        <h3 style="font-size:1.05rem; font-weight:800; margin:0.25rem 0 0.75rem;">${ex.title}</h3>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:0.85rem; font-size:0.85rem; margin-bottom:0.75rem;">
          <strong>Enunciado:</strong> ${ex.problem}
        </div>
        <div style="font-size:0.75rem; margin-bottom:0.75rem;">
          <strong>Dados Fornecidos:</strong>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:0.35rem;">
            ${ex.givenData.map(d => `
              <span style="background:#e0f2fe; color:#0369a1; padding:0.25rem 0.5rem; border-radius:6px; font-family:var(--font-mono);">
                ${d.label}: ${d.value}
              </span>
            `).join('')}
          </div>
        </div>
        <div style="font-size:0.8rem; background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:0.85rem; margin-bottom:0.75rem;">
          <strong>Passo a Passo da Resolução:</strong>
          <ol style="margin-left:1.25rem; margin-top:0.35rem; line-height:1.6;">
            ${ex.steps.map(s => `<li>${s}</li>`).join('')}
          </ol>
        </div>
        <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:10px; padding:0.75rem; color:#065f46; font-size:0.85rem;">
          <strong>Resposta Final:</strong> ${ex.finalAnswer}
        </div>
      </div>
    `).join('');
  } else if (tabName === 'pratica') {
    contentContainer.innerHTML = `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:18px; padding:1.5rem; margin-bottom:1.25rem;">
        <h3 style="font-size:1rem; font-weight:800; color:#0f172a; margin-bottom:0.75rem;">
          Aplicações no Mundo Real e na Indústria
        </h3>
        <div class="grid-3">
          ${mod.practicalApplications.map(app => `
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:0.85rem; font-size:0.8rem;">
              • ${app}
            </div>
          `).join('')}
        </div>
      </div>
      <div style="background:#fffbeb; border:1px solid #fde68a; border-radius:18px; padding:1.5rem;">
        <h3 style="font-size:1rem; font-weight:800; color:#92400e; margin-bottom:0.75rem;">
          ⚠️ Cuidados de Segurança e Boas Práticas
        </h3>
        <ul style="font-size:0.8rem; color:#78350f; margin-left:1.25rem; line-height:1.7;">
          ${mod.safetyTips.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    `;
  } else if (tabName === 'quiz') {
    renderModuleQuiz(mod, contentContainer);
  }
}

function renderModuleQuiz(mod, container) {
  container.innerHTML = `
    <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:18px; padding:1.5rem;">
      <h3 style="font-size:1.1rem; font-weight:800; margin-bottom:0.5rem;">
        Questionário de Fixação do Módulo ${mod.id}
      </h3>
      <p style="font-size:0.8rem; color:#64748b; margin-bottom:1.25rem;">
        Responda as questões abaixo para testar seu entendimento e ganhar XP.
      </p>

      <div id="module-quiz-questions">
        ${mod.quiz.map((q, qIdx) => `
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:1rem; margin-bottom:1rem;">
            <p style="font-size:0.85rem; font-weight:700; color:#0f172a; margin-bottom:0.75rem;">
              ${qIdx + 1}. ${q.question}
            </p>
            <div class="quiz-options-group" data-qid="${q.id}">
              ${q.options.map((opt, optIdx) => `
                <button type="button" class="option-btn" onclick="selectModuleQuizOption('${q.id}', ${optIdx}, ${q.correctIndex})">
                  <span style="width:22px; height:22px; border-radius:50%; background:#e2e8f0; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.7rem;">
                    ${String.fromCharCode(65 + optIdx)}
                  </span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>
            <div id="feedback-${q.id}" style="display:none; margin-top:0.75rem; padding:0.65rem; border-radius:8px; font-size:0.75rem;"></div>
          </div>
        `).join('')}
      </div>

      <div id="module-quiz-final-actions" style="margin-top:1.5rem; text-align:right;">
        <button class="btn btn-primary" onclick="submitModuleQuiz(${mod.id})">
          Confirmar e Concluir Questionário
        </button>
      </div>
    </div>
  `;
}

function selectModuleQuizOption(qId, selectedIdx, correctIdx) {
  currentModuleQuizAnswers[qId] = { selectedIdx, correctIdx };
  const parent = document.querySelector(`.quiz-options-group[data-qid="${qId}"]`);
  if (!parent) return;

  const buttons = parent.querySelectorAll('.option-btn');
  buttons.forEach((btn, idx) => {
    btn.classList.toggle('selected', idx === selectedIdx);
  });
}

function submitModuleQuiz(modId) {
  const mod = MODULES_DATA.find(m => m.id === modId);
  if (!mod) return;

  let correctCount = 0;
  mod.quiz.forEach(q => {
    const ans = currentModuleQuizAnswers[q.id];
    const fbEl = document.getElementById(`feedback-${q.id}`);
    const parent = document.querySelector(`.quiz-options-group[data-qid="${q.id}"]`);
    const buttons = parent ? parent.querySelectorAll('.option-btn') : [];

    if (ans) {
      if (ans.selectedIdx === q.correctIndex) {
        correctCount++;
        if (buttons[ans.selectedIdx]) buttons[ans.selectedIdx].classList.add('correct');
        if (fbEl) {
          fbEl.style.display = 'block';
          fbEl.style.background = '#ecfdf5';
          fbEl.style.color = '#065f46';
          fbEl.innerHTML = `<strong>Correto!</strong> ${q.explanation}`;
        }
      } else {
        if (buttons[ans.selectedIdx]) buttons[ans.selectedIdx].classList.add('incorrect');
        if (buttons[q.correctIndex]) buttons[q.correctIndex].classList.add('correct');
        if (fbEl) {
          fbEl.style.display = 'block';
          fbEl.style.background = '#fff1f2';
          fbEl.style.color = '#9f1239';
          fbEl.innerHTML = `<strong>Incorreto.</strong> ${q.explanation}`;
        }
      }
    }
  });

  addPoints(correctCount * 25);
  markModuleComplete(modId);

  const actionsEl = document.getElementById('module-quiz-final-actions');
  if (actionsEl) {
    actionsEl.innerHTML = `
      <div style="background:#e0f2fe; padding:0.75rem 1rem; border-radius:10px; display:inline-block; font-size:0.85rem; font-weight:700; color:#0369a1;">
        🎉 Você acertou ${correctCount} de ${mod.quiz.length} questões! (+${correctCount * 25} XP)
      </div>
    `;
  }
}

// ==========================================================================
// 3. CALCULADORAS ELÉTRICAS FUNCIONAIS
// ==========================================================================
function switchCalcTab(tabName) {
  document.querySelectorAll('.calc-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-calctab') === tabName);
  });
  document.querySelectorAll('.calc-pane').forEach(pane => {
    pane.style.display = 'none';
  });
  const activePane = document.getElementById(`calc-pane-${tabName}`);
  if (activePane) activePane.style.display = 'block';
}

// 3.1 Calculadora Lei de Ohm
function calculateOhm() {
  const target = document.querySelector('input[name="ohm-target"]:checked')?.value || 'V';
  const vInput = parseFloat(document.getElementById('ohm-v').value);
  const vUnit = parseFloat(document.getElementById('ohm-v-unit').value);
  const iInput = parseFloat(document.getElementById('ohm-i').value);
  const iUnit = parseFloat(document.getElementById('ohm-i-unit').value);
  const rInput = parseFloat(document.getElementById('ohm-r').value);
  const rUnit = parseFloat(document.getElementById('ohm-r-unit').value);

  const errorEl = document.getElementById('ohm-error');
  const resultBox = document.getElementById('ohm-result-box');
  const resultVal = document.getElementById('ohm-result-val');
  const resultFormula = document.getElementById('ohm-result-formula');
  const resultSteps = document.getElementById('ohm-result-steps');

  errorEl.style.display = 'none';
  resultBox.style.display = 'none';

  if (target === 'V') {
    if (isNaN(iInput) || isNaN(rInput) || iInput < 0 || rInput < 0) {
      errorEl.textContent = 'Erro: Insira valores positivos e válidos para Corrente e Resistência.';
      errorEl.style.display = 'block';
      return;
    }
    const iSI = iInput * iUnit;
    const rSI = rInput * rUnit;
    const vSI = rSI * iSI;

    resultVal.textContent = `${vSI.toLocaleString('pt-BR', { maximumFractionDigits: 4 })} Volts (V)`;
    resultFormula.textContent = 'V = R · I';
    resultSteps.innerHTML = `
      1. Corrente convertida: ${iInput} × ${iUnit} = ${iSI} A<br>
      2. Resistência convertida: ${rInput} × ${rUnit} = ${rSI} Ω<br>
      3. Cálculo da Tensão: V = ${rSI} Ω × ${iSI} A = <strong>${vSI.toFixed(4)} V</strong>
    `;
    resultBox.style.display = 'block';
    addPoints(10);
    unlockBadge('calculator-pro');
  } else if (target === 'I') {
    if (isNaN(vInput) || isNaN(rInput) || vInput < 0 || rInput <= 0) {
      errorEl.textContent = 'Erro: Insira valores válidos e resistência maior que zero para evitar curto-circuito.';
      errorEl.style.display = 'block';
      return;
    }
    const vSI = vInput * vUnit;
    const rSI = rInput * rUnit;
    const iSI = vSI / rSI;

    resultVal.textContent = `${iSI.toLocaleString('pt-BR', { maximumFractionDigits: 6 })} Ampères (A)`;
    resultFormula.textContent = 'I = V / R';
    resultSteps.innerHTML = `
      1. Tensão convertida: ${vInput} × ${vUnit} = ${vSI} V<br>
      2. Resistência convertida: ${rInput} × ${rUnit} = ${rSI} Ω<br>
      3. Cálculo da Corrente: I = ${vSI} V / ${rSI} Ω = <strong>${iSI.toFixed(6)} A</strong> (${(iSI * 1000).toFixed(2)} mA)
    `;
    resultBox.style.display = 'block';
    addPoints(10);
    unlockBadge('calculator-pro');
  } else {
    if (isNaN(vInput) || isNaN(iInput) || vInput < 0 || iInput <= 0) {
      errorEl.textContent = 'Erro: Insira valores válidos e corrente estritamente maior que zero.';
      errorEl.style.display = 'block';
      return;
    }
    const vSI = vInput * vUnit;
    const iSI = iInput * iUnit;
    const rSI = vSI / iSI;

    resultVal.textContent = `${rSI.toLocaleString('pt-BR', { maximumFractionDigits: 3 })} Ohms (Ω)`;
    resultFormula.textContent = 'R = V / I';
    resultSteps.innerHTML = `
      1. Tensão convertida: ${vInput} × ${vUnit} = ${vSI} V<br>
      2. Corrente convertida: ${iInput} × ${iUnit} = ${iSI} A<br>
      3. Cálculo da Resistência: R = ${vSI} V / ${iSI} A = <strong>${rSI.toFixed(3)} Ω</strong>
    `;
    resultBox.style.display = 'block';
    addPoints(10);
    unlockBadge('calculator-pro');
  }
}

// 3.2 Calculadora de Potência
function calculatePower() {
  const mode = document.querySelector('input[name="power-mode"]:checked')?.value || 'VI';
  const v = parseFloat(document.getElementById('pow-v').value);
  const i = parseFloat(document.getElementById('pow-i').value);
  const r = parseFloat(document.getElementById('pow-r').value);

  const errorEl = document.getElementById('pow-error');
  const resultBox = document.getElementById('pow-result-box');
  const resultVal = document.getElementById('pow-result-val');
  const resultFormula = document.getElementById('pow-result-formula');
  const resultSteps = document.getElementById('pow-result-steps');

  errorEl.style.display = 'none';
  resultBox.style.display = 'none';

  if (mode === 'VI') {
    if (isNaN(v) || isNaN(i) || v < 0 || i < 0) {
      errorEl.textContent = 'Erro: Insira valores válidos e positivos para Tensão e Corrente.';
      errorEl.style.display = 'block';
      return;
    }
    const p = v * i;
    resultVal.textContent = `${p.toLocaleString('pt-BR', { maximumFractionDigits: 4 })} Watts (W)`;
    resultFormula.textContent = 'P = V · I';
    resultSteps.innerHTML = `
      1. Identificação: V = ${v} V, I = ${i} A<br>
      2. Multiplicação: P = ${v} × ${i} = <strong>${p.toFixed(3)} W</strong> (${(p * 1000).toFixed(1)} mW)
    `;
    resultBox.style.display = 'block';
  } else if (mode === 'RI') {
    if (isNaN(r) || isNaN(i) || r < 0 || i < 0) {
      errorEl.textContent = 'Erro: Insira valores válidos para Resistência e Corrente.';
      errorEl.style.display = 'block';
      return;
    }
    const p = r * Math.pow(i, 2);
    resultVal.textContent = `${p.toLocaleString('pt-BR', { maximumFractionDigits: 4 })} Watts (W)`;
    resultFormula.textContent = 'P = R · I²';
    resultSteps.innerHTML = `
      1. Quadrado da corrente: I² = (${i})² = ${(i * i).toFixed(4)} A²<br>
      2. Efeito Joule: P = ${r} Ω × ${(i * i).toFixed(4)} = <strong>${p.toFixed(3)} W</strong>
    `;
    resultBox.style.display = 'block';
  } else {
    if (isNaN(v) || isNaN(r) || v < 0 || r <= 0) {
      errorEl.textContent = 'Erro: Insira tensão válida e resistência maior que zero.';
      errorEl.style.display = 'block';
      return;
    }
    const p = Math.pow(v, 2) / r;
    resultVal.textContent = `${p.toLocaleString('pt-BR', { maximumFractionDigits: 4 })} Watts (W)`;
    resultFormula.textContent = 'P = V² / R';
    resultSteps.innerHTML = `
      1. Quadrado da tensão: V² = (${v})² = ${(v * v).toFixed(2)} V²<br>
      2. Divisão pela resistência: P = ${(v * v).toFixed(2)} / ${r} Ω = <strong>${p.toFixed(3)} W</strong>
    `;
    resultBox.style.display = 'block';
  }

  addPoints(10);
  unlockBadge('calculator-pro');
}

// 3.3 Resistores em Série
let seriesList = [100, 220, 470];

function renderSeriesInputs() {
  const container = document.getElementById('series-resistors-container');
  if (!container) return;

  container.innerHTML = seriesList.map((val, idx) => `
    <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
      <span style="font-size:0.8rem; font-weight:700; width:40px;">R${idx + 1}:</span>
      <input type="number" step="any" class="form-control series-val-input" value="${val}" style="max-width:200px;">
      <span style="font-size:0.8rem; font-weight:700;">Ω</span>
      ${seriesList.length > 2 ? `<button type="button" onclick="removeSeriesResistor(${idx})" style="background:none; border:none; color:#f43f5e; cursor:pointer; font-weight:700; padding:0 0.5rem;">✕</button>` : ''}
    </div>
  `).join('');
}

function addSeriesResistor() {
  seriesList.push(100);
  renderSeriesInputs();
}

function removeSeriesResistor(idx) {
  if (seriesList.length <= 2) return;
  seriesList.splice(idx, 1);
  renderSeriesInputs();
}

function calculateSeries() {
  const inputs = document.querySelectorAll('.series-val-input');
  let total = 0;
  const steps = [];

  for (let i = 0; i < inputs.length; i++) {
    const v = parseFloat(inputs[i].value);
    if (isNaN(v) || v <= 0) {
      alert(`O resistor R${i + 1} possui valor inválido.`);
      return;
    }
    total += v;
    steps.push(`R${i + 1} = ${v} Ω`);
  }

  document.getElementById('series-result-val').textContent = `${total.toLocaleString('pt-BR', { maximumFractionDigits: 3 })} Ω`;
  document.getElementById('series-result-steps').innerHTML = `
    Fórmula: Req = R1 + R2 + ... + Rn<br>
    ${steps.join(' + ')}<br>
    <strong>Req = ${total.toFixed(3)} Ω</strong> (${(total / 1000).toFixed(3)} kΩ)
  `;
  document.getElementById('series-result-box').style.display = 'block';
  addPoints(10);
  unlockBadge('calculator-pro');
}

// 3.4 Resistores em Paralelo
let parallelList = [60, 40];

function renderParallelInputs() {
  const container = document.getElementById('parallel-resistors-container');
  if (!container) return;

  container.innerHTML = parallelList.map((val, idx) => `
    <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
      <span style="font-size:0.8rem; font-weight:700; width:40px;">R${idx + 1}:</span>
      <input type="number" step="any" class="form-control parallel-val-input" value="${val}" style="max-width:200px;">
      <span style="font-size:0.8rem; font-weight:700;">Ω</span>
      ${parallelList.length > 2 ? `<button type="button" onclick="removeParallelResistor(${idx})" style="background:none; border:none; color:#f43f5e; cursor:pointer; font-weight:700; padding:0 0.5rem;">✕</button>` : ''}
    </div>
  `).join('');
}

function addParallelResistor() {
  parallelList.push(100);
  renderParallelInputs();
}

function removeParallelResistor(idx) {
  if (parallelList.length <= 2) return;
  parallelList.splice(idx, 1);
  renderParallelInputs();
}

function calculateParallel() {
  const inputs = document.querySelectorAll('.parallel-val-input');
  let sumInv = 0;
  const values = [];

  for (let i = 0; i < inputs.length; i++) {
    const v = parseFloat(inputs[i].value);
    if (isNaN(v) || v <= 0) {
      alert(`O resistor R${i + 1} possui valor inválido.`);
      return;
    }
    values.push(v);
    sumInv += 1 / v;
  }

  const req = 1 / sumInv;
  let stepsHtml = `Fórmula Geral: 1/Req = 1/R1 + 1/R2 + ...<br>Soma das Condutâncias = ${sumInv.toFixed(6)} S<br><strong>Req = 1 / ${sumInv.toFixed(6)} = ${req.toFixed(3)} Ω</strong>`;

  if (values.length === 2) {
    const r1 = values[0];
    const r2 = values[1];
    stepsHtml += `<br><br>Método do Produto pela Soma para 2 Resistores:<br>Req = (R1 · R2) / (R1 + R2) = (${r1} · ${r2}) / (${r1} + ${r2}) = ${(r1 * r2)} / ${(r1 + r2)} = <strong>${req.toFixed(3)} Ω</strong>`;
  }

  document.getElementById('parallel-result-val').textContent = `${req.toLocaleString('pt-BR', { maximumFractionDigits: 3 })} Ω`;
  document.getElementById('parallel-result-steps').innerHTML = stepsHtml;
  document.getElementById('parallel-result-box').style.display = 'block';
  addPoints(10);
  unlockBadge('calculator-pro');
}

// 3.5 Código de Cores dos Resistores
const RESISTOR_COLORS = [
  { name: 'Preto', hex: '#0f172a', val: 0, mult: 1 },
  { name: 'Marrom', hex: '#854d0e', val: 1, mult: 10, tol: 1 },
  { name: 'Vermelho', hex: '#dc2626', val: 2, mult: 100, tol: 2 },
  { name: 'Laranja', hex: '#ea580c', val: 3, mult: 1000 },
  { name: 'Amarelo', hex: '#eab308', val: 4, mult: 10000 },
  { name: 'Verde', hex: '#16a34a', val: 5, mult: 100000, tol: 0.5 },
  { name: 'Azul', hex: '#2563eb', val: 6, mult: 1000000 },
  { name: 'Violeta', hex: '#7c3aed', val: 7, mult: 10000000 },
  { name: 'Cinza', hex: '#64748b', val: 8, mult: 100000000 },
  { name: 'Branco', hex: '#f8fafc', val: 9, mult: 1000000000 },
  { name: 'Dourado', hex: '#d97706', mult: 0.1, tol: 5 },
  { name: 'Prateado', hex: '#94a3b8', mult: 0.01, tol: 10 }
];

function updateColorCode() {
  const b1 = parseInt(document.getElementById('cc-b1').value);
  const b2 = parseInt(document.getElementById('cc-b2').value);
  const bMult = parseFloat(document.getElementById('cc-mult').value);
  const bTol = parseFloat(document.getElementById('cc-tol').value);

  // Cores visuais
  const c1 = RESISTOR_COLORS.find(c => c.val === b1);
  const c2 = RESISTOR_COLORS.find(c => c.val === b2);
  const cMult = RESISTOR_COLORS.find(c => c.mult === bMult);
  const cTol = RESISTOR_COLORS.find(c => c.tol === bTol);

  if (c1) document.getElementById('band-visual-1').style.backgroundColor = c1.hex;
  if (c2) document.getElementById('band-visual-2').style.backgroundColor = c2.hex;
  if (cMult) document.getElementById('band-visual-mult').style.backgroundColor = cMult.hex;
  if (cTol) document.getElementById('band-visual-tol').style.backgroundColor = cTol.hex;

  const rawOhms = (b1 * 10 + b2) * bMult;
  let formatted = `${rawOhms} Ω`;
  if (rawOhms >= 1000000) formatted = `${(rawOhms / 1000000).toFixed(2)} MΩ`;
  else if (rawOhms >= 1000) formatted = `${(rawOhms / 1000).toFixed(2)} kΩ`;

  document.getElementById('resistor-code-result').textContent = `${formatted} ±${bTol}%`;
}

// 3.6 Resistor Limitador para LED
const E24_SERIES = [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82, 100, 120, 150, 180, 220, 270, 330, 390, 470, 560, 680, 820, 1000, 1200, 1500, 1800, 2200, 2700, 3300, 3900, 4700, 5600, 6800, 8200, 10000];

function calculateLedResistor() {
  const vcc = parseFloat(document.getElementById('led-vcc').value);
  const vf = parseFloat(document.getElementById('led-vf').value);
  const iledMa = parseFloat(document.getElementById('led-i').value);

  const errorEl = document.getElementById('led-error');
  const resultBox = document.getElementById('led-result-box');

  errorEl.style.display = 'none';
  resultBox.style.display = 'none';

  if (isNaN(vcc) || isNaN(vf) || isNaN(iledMa) || vcc <= vf || iledMa <= 0) {
    errorEl.textContent = 'Erro: A tensão da fonte deve ser estritamente maior que a tensão do LED (Vcc > Vf) e a corrente deve ser positiva.';
    errorEl.style.display = 'block';
    return;
  }

  const iledA = iledMa / 1000;
  const vr = vcc - vf;
  const rExact = vr / iledA;

  // Busca o valor comercial E24 mais próximo e superior
  let rCommercial = E24_SERIES.find(val => val >= rExact) || Math.ceil(rExact);
  const pWatts = vr * iledA;

  document.getElementById('led-r-commercial').textContent = `${rCommercial} Ω`;
  document.getElementById('led-r-exact').textContent = `Valor exato: ${rExact.toFixed(1)} Ω`;
  document.getElementById('led-r-steps').innerHTML = `
    1. Queda sobre o resistor: VR = Vcc - Vled = ${vcc} V - ${vf} V = <strong>${vr.toFixed(2)} V</strong><br>
    2. Lei de Ohm: R = VR / Iled = ${vr.toFixed(2)} / ${iledA} A = <strong>${rExact.toFixed(1)} Ω</strong><br>
    3. Potência dissipada no resistor: P = VR · I = <strong>${(pWatts * 1000).toFixed(1)} mW</strong> (Resistor de 1/4 W suporta perfeitamente)
  `;

  resultBox.style.display = 'block';
  addPoints(10);
  unlockBadge('calculator-pro');
}

// ==========================================================================
// 4. CATÁLOGO DE COMPONENTES
// ==========================================================================
function renderCatalog() {
  const container = document.getElementById('catalog-grid');
  const searchInput = document.getElementById('catalog-search-input');
  const activeCategory = document.querySelector('.catalog-cat-pill.active')?.getAttribute('data-cat') || 'Todos';
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  if (!container) return;

  const filtered = COMPONENTS_DATA.filter(c => {
    const matchCat = activeCategory === 'Todos' || c.category === activeCategory;
    const matchQ = c.name.toLowerCase().includes(query) || c.technicalName.toLowerCase().includes(query) || c.functionality.toLowerCase().includes(query);
    return matchCat && matchQ;
  });

  container.innerHTML = filtered.map(comp => `
    <div class="card" style="justify-content:space-between;">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <span style="font-size:0.7rem; font-weight:700; color:#0284c7; background:#e0f2fe; padding:0.15rem 0.5rem; border-radius:4px;">
            ${comp.category}
          </span>
          <span style="font-size:1.25rem;">${comp.icon}</span>
        </div>
        <h3 class="card-title">${comp.name}</h3>
        <p style="font-size:0.75rem; color:#64748b; font-family:var(--font-mono); margin-bottom:0.5rem;">${comp.technicalName}</p>
        <p class="card-text">${comp.functionality}</p>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:0.5rem; font-size:0.75rem; color:#334155; margin-bottom:0.75rem;">
          <strong>Símbolo:</strong> ${comp.symbol}
        </div>
      </div>
      <button class="btn btn-secondary" onclick="openComponentModal('${comp.id}')" style="width:100%; font-size:0.8rem; padding:0.5rem;">
        Ver Ficha Técnica Completa
      </button>
    </div>
  `).join('');
}

function openComponentModal(compId) {
  const comp = COMPONENTS_DATA.find(c => c.id === compId);
  if (!comp) return;

  const modal = document.getElementById('component-modal');
  const body = document.getElementById('modal-component-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
      <span style="font-size:1.5rem;">${comp.icon}</span>
      <div>
        <span style="font-size:0.7rem; font-weight:700; color:#0284c7; background:#e0f2fe; padding:0.15rem 0.5rem; border-radius:4px;">
          ${comp.category}
        </span>
        <h2 style="font-size:1.35rem; font-weight:800; color:#0f172a; margin-top:0.25rem;">${comp.name}</h2>
      </div>
    </div>
    <p style="font-size:0.8rem; font-family:var(--font-mono); color:#64748b; margin-bottom:1rem;">
      ${comp.technicalName} • Símbolo: ${comp.symbol}
    </p>

    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:1rem; margin-bottom:1rem;">
      <h4 style="font-size:0.85rem; font-weight:800; color:#0f172a; margin-bottom:0.35rem;">Princípio de Funcionamento:</h4>
      <p style="font-size:0.8rem; color:#334155; line-height:1.6;">${comp.operatingPrinciple}</p>
    </div>

    ${comp.pinout ? `
      <div style="margin-bottom:1rem;">
        <h4 style="font-size:0.85rem; font-weight:800; color:#0f172a; margin-bottom:0.35rem;">Terminais e Pinagem:</h4>
        <ul style="font-size:0.8rem; color:#334155; margin-left:1.25rem;">
          ${comp.pinout.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    ` : ''}

    <div style="margin-bottom:1rem;">
      <h4 style="font-size:0.85rem; font-weight:800; color:#0f172a; margin-bottom:0.35rem;">Aplicações Práticas:</h4>
      <ul style="font-size:0.8rem; color:#334155; margin-left:1.25rem;">
        ${comp.practicalApplications.map(a => `<li>${a}</li>`).join('')}
      </ul>
    </div>

    <div style="background:#fffbeb; border:1px solid #fde68a; border-radius:12px; padding:1rem; margin-bottom:1rem;">
      <h4 style="font-size:0.85rem; font-weight:800; color:#92400e; margin-bottom:0.35rem;">⚠️ Cuidados de Manuseio em Bancada:</h4>
      <ul style="font-size:0.8rem; color:#78350f; margin-left:1.25rem;">
        ${comp.handlingPrecautions.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>

    ${comp.didYouKnow ? `
      <div style="background:#f0f9ff; border:1px solid #bae6fd; border-radius:12px; padding:0.85rem; font-size:0.8rem; color:#0369a1;">
        💡 <strong>Curiosidade:</strong> ${comp.didYouKnow}
      </div>
    ` : ''}
  `;

  modal.classList.add('open');
}

function closeComponentModal() {
  const modal = document.getElementById('component-modal');
  if (modal) modal.classList.remove('open');
}

// ==========================================================================
// 5. EXERCÍCIOS E DESAFIOS
// ==========================================================================
let currentQuizQueue = [];
let currentQuizIdx = 0;
let currentQuizScore = 0;
let currentQuizHistory = [];

function initExercises() {
  document.getElementById('exercises-config-card').style.display = 'block';
  document.getElementById('exercises-active-card').style.display = 'none';
  document.getElementById('exercises-result-card').style.display = 'none';
}

function startExerciseChallenge() {
  const diff = document.getElementById('ex-diff-select').value;
  const type = document.getElementById('ex-type-select').value;
  const count = parseInt(document.getElementById('ex-count-select').value);

  const filtered = QUESTIONS_DATA.filter(q => {
    const mDiff = diff === 'Todos' || q.difficulty === diff;
    const mType = type === 'Todos' || q.type === type;
    return mDiff && mType;
  });

  if (filtered.length === 0) {
    alert('Nenhuma questão encontrada com esses filtros.');
    return;
  }

  // Embaralha
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  currentQuizQueue = shuffled.slice(0, Math.min(count, shuffled.length));
  currentQuizIdx = 0;
  currentQuizScore = 0;
  currentQuizHistory = [];

  document.getElementById('exercises-config-card').style.display = 'none';
  document.getElementById('exercises-active-card').style.display = 'block';
  document.getElementById('exercises-result-card').style.display = 'none';

  renderCurrentExerciseQuestion();
}

function renderCurrentExerciseQuestion() {
  const q = currentQuizQueue[currentQuizIdx];
  if (!q) return;

  document.getElementById('quiz-progress-text').textContent = `Questão ${currentQuizIdx + 1} de ${currentQuizQueue.length}`;
  document.getElementById('quiz-score-badge').textContent = `${currentQuizScore} acertos`;
  document.getElementById('quiz-progress-bar').style.width = `${((currentQuizIdx + 1) / currentQuizQueue.length) * 100}%`;

  document.getElementById('quiz-question-meta').innerHTML = `
    <span style="font-size:0.7rem; font-weight:700; background:#f1f5f9; padding:0.2rem 0.5rem; border-radius:4px;">${q.moduleName}</span>
    <span style="font-size:0.7rem; font-weight:700; background:#e0f2fe; color:#0369a1; padding:0.2rem 0.5rem; border-radius:4px;">${q.difficulty}</span>
    <span style="font-size:0.7rem; color:#64748b;">${q.type === 'calculo' ? 'Cálculo' : 'Conceitual'}</span>
  `;

  document.getElementById('quiz-question-text').textContent = q.question;

  const optionsContainer = document.getElementById('quiz-options-list');
  optionsContainer.innerHTML = q.options.map((opt, idx) => `
    <button type="button" class="option-btn" onclick="answerExerciseQuestion(${idx})">
      <span style="width:24px; height:24px; border-radius:50%; background:#e2e8f0; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:0.75rem;">
        ${String.fromCharCode(65 + idx)}
      </span>
      <span>${opt}</span>
    </button>
  `).join('');

  document.getElementById('quiz-instant-feedback').style.display = 'none';
  document.getElementById('quiz-next-btn').style.display = 'none';
}

function answerExerciseQuestion(chosenIdx) {
  const q = currentQuizQueue[currentQuizIdx];
  const buttons = document.querySelectorAll('#quiz-options-list .option-btn');
  buttons.forEach(b => b.disabled = true);

  const isCorrect = chosenIdx === q.correctIndex;
  if (isCorrect) {
    currentQuizScore++;
    buttons[chosenIdx].classList.add('correct');
  } else {
    buttons[chosenIdx].classList.add('incorrect');
    buttons[q.correctIndex].classList.add('correct');
  }

  currentQuizHistory.push({
    question: q,
    chosenIdx,
    isCorrect
  });

  const fbEl = document.getElementById('quiz-instant-feedback');
  fbEl.style.display = 'block';
  fbEl.style.background = isCorrect ? '#ecfdf5' : '#fff1f2';
  fbEl.style.border = `1px solid ${isCorrect ? '#a7f3d0' : '#fecdd3'}`;
  fbEl.style.borderRadius = '12px';
  fbEl.style.padding = '1rem';
  fbEl.innerHTML = `
    <strong style="color:${isCorrect ? '#065f46' : '#9f1239'}">${isCorrect ? '✓ Resposta Correta! (+25 XP)' : '✕ Resposta Incorreta.'}</strong>
    <p style="font-size:0.8rem; color:#334155; margin-top:0.35rem; line-height:1.5;">${q.explanation}</p>
    ${q.formulaUsed ? `<div style="font-size:0.75rem; font-family:var(--font-mono); color:#0284c7; margin-top:0.25rem;"><strong>Fórmula:</strong> ${q.formulaUsed}</div>` : ''}
  `;

  document.getElementById('quiz-next-btn').style.display = 'inline-flex';
}

function nextExerciseQuestion() {
  if (currentQuizIdx + 1 < currentQuizQueue.length) {
    currentQuizIdx++;
    renderCurrentExerciseQuestion();
  } else {
    finishExerciseChallenge();
  }
}

function finishExerciseChallenge() {
  document.getElementById('exercises-active-card').style.display = 'none';
  document.getElementById('exercises-result-card').style.display = 'block';

  const earnedXP = currentQuizScore * 25;
  addPoints(earnedXP);

  if (currentQuizScore / currentQuizQueue.length >= 0.8) {
    unlockBadge('quiz-champion');
  }

  document.getElementById('result-final-score').textContent = `${currentQuizScore} / ${currentQuizQueue.length}`;
  document.getElementById('result-final-xp').textContent = `+${earnedXP} XP conquistados`;

  const reviewContainer = document.getElementById('result-questions-review');
  reviewContainer.innerHTML = currentQuizHistory.map((item, idx) => `
    <div style="background:${item.isCorrect ? '#f0fdf4' : '#fff1f2'}; border:1px solid ${item.isCorrect ? '#bbf7d0' : '#fecdd3'}; border-radius:10px; padding:0.85rem; margin-bottom:0.75rem; font-size:0.8rem;">
      <strong>${idx + 1}. ${item.question.question}</strong><br>
      <span style="color:#64748b;">Sua resposta: ${item.question.options[item.chosenIdx]}</span><br>
      ${!item.isCorrect ? `<span style="color:#059669; font-weight:700;">Correta: ${item.question.options[item.question.correctIndex]}</span><br>` : ''}
      <span style="font-size:0.75rem; color:#475569;">💡 ${item.question.explanation}</span>
    </div>
  `).join('');
}

// ==========================================================================
// 6. ASSISTENTE DE DÚVIDAS "PERGUNTE AO ELETROAJUDA"
// ==========================================================================
function initQnA() {
  const container = document.getElementById('qna-suggested-chips');
  if (container) {
    container.innerHTML = QA_KNOWLEDGE_BASE.map(q => `
      <button type="button" class="btn btn-secondary" onclick="askQnA('${q.id}')" style="font-size:0.75rem; padding:0.4rem 0.75rem; border-radius:var(--radius-full);">
        ${q.question}
      </button>
    `).join('');
  }
  askQnA('qa-tensao-corrente');
}

function submitQnASearch(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('qna-search-input');
  if (!input) return;
  const qStr = input.value.toLowerCase().trim();
  if (!qStr) return;

  // Busca na base
  const match = QA_KNOWLEDGE_BASE.find(item => {
    return item.question.toLowerCase().includes(qStr) || item.keywords.some(k => qStr.includes(k) || k.includes(qStr));
  }) || QA_KNOWLEDGE_BASE[0];

  askQnA(match.id);
}

function askQnA(qId) {
  const item = QA_KNOWLEDGE_BASE.find(q => q.id === qId) || QA_KNOWLEDGE_BASE[0];
  const respBox = document.getElementById('qna-answer-box');
  if (!respBox) return;

  respBox.innerHTML = `
    <div style="border-bottom:1px solid #e2e8f0; padding-bottom:0.75rem; margin-bottom:1rem;">
      <span style="font-size:0.7rem; font-weight:700; text-transform:uppercase; color:#0284c7; background:#e0f2fe; padding:0.2rem 0.5rem; border-radius:4px;">
        ${item.category}
      </span>
      <h3 style="font-size:1.25rem; font-weight:800; color:#0f172a; margin-top:0.35rem;">
        ${item.question}
      </h3>
    </div>

    <div style="background:#e0f2fe; border:1px solid #bae6fd; border-radius:12px; padding:1rem; color:#0369a1; font-size:0.875rem; font-weight:600; margin-bottom:1rem;">
      <strong>Resumo Direto:</strong> ${item.answerSummary}
    </div>

    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:1rem; font-size:0.85rem; color:#334155; line-height:1.7; margin-bottom:1rem;">
      ${item.answerDetailed.map(pt => `<p style="margin-bottom:0.4rem;">${pt}</p>`).join('')}
    </div>

    ${item.formulas ? `
      <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
        ${item.formulas.map(f => `
          <div style="background:#0f172a; color:#ffffff; padding:0.5rem 0.85rem; border-radius:8px; font-size:0.75rem;">
            <span style="color:#94a3b8;">${f.name}:</span> <strong style="color:#38bdf8; font-family:var(--font-mono);">${f.formula}</strong>
          </div>
        `).join('')}
      </div>
    ` : ''}

    ${item.example ? `
      <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:12px; padding:0.85rem; font-size:0.8rem; color:#065f46; margin-bottom:1rem;">
        <strong>Exemplo Prático:</strong> ${item.example}
      </div>
    ` : ''}

    ${item.safetyNote ? `
      <div style="background:#fffbeb; border:1px solid #fde68a; border-radius:12px; padding:0.85rem; font-size:0.8rem; color:#92400e;">
        ⚠️ <strong>Aviso de Segurança:</strong> ${item.safetyNote}
      </div>
    ` : ''}
  `;
}

// ==========================================================================
// 7. PAINEL DO ESTUDANTE (DASHBOARD)
// ==========================================================================
function renderDashboard() {
  const xpEl = document.getElementById('dash-xp');
  const modsEl = document.getElementById('dash-modules-count');
  const pctEl = document.getElementById('dash-percent');
  const barEl = document.getElementById('dash-bar');
  const badgesCountEl = document.getElementById('dash-badges-count');

  const pct = Math.round((userProgress.completedModules.length / 10) * 100);

  if (xpEl) xpEl.textContent = `${userProgress.totalPoints || 0} XP`;
  if (modsEl) modsEl.textContent = `${userProgress.completedModules.length} / 10`;
  if (pctEl) pctEl.textContent = `${pct}%`;
  if (barEl) barEl.style.width = `${pct}%`;
  if (badgesCountEl) badgesCountEl.textContent = `${userProgress.unlockedBadges.length} de ${ALL_BADGES.length}`;

  // Galeria de Conquistas
  const badgesGrid = document.getElementById('dash-badges-grid');
  if (badgesGrid) {
    badgesGrid.innerHTML = ALL_BADGES.map(b => {
      const isUnlocked = userProgress.unlockedBadges.includes(b.id);
      return `
        <div class="card" style="${isUnlocked ? 'border-color:#f59e0b; background:#fffbeb;' : 'opacity:0.6;'}">
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">
            <span style="font-size:1.75rem;">${b.icon}</span>
            <div>
              <h4 style="font-size:0.85rem; font-weight:800; color:#0f172a;">${b.title}</h4>
              <span style="font-size:0.7rem; font-weight:700; color:${isUnlocked ? '#b45309' : '#64748b'};">
                ${isUnlocked ? '★ Desbloqueado' : '🔒 Bloqueado'}
              </span>
            </div>
          </div>
          <p class="card-text">${b.description}</p>
        </div>
      `;
    }).join('');
  }

  // Checklist dos 10 Módulos
  const checklistContainer = document.getElementById('dash-modules-checklist');
  if (checklistContainer) {
    checklistContainer.innerHTML = MODULES_DATA.map(m => {
      const isDone = userProgress.completedModules.includes(m.id);
      return `
        <div style="display:flex; align-items:center; justify-content:space-between; padding:0.75rem; border-bottom:1px solid #f1f5f9; gap:1rem;">
          <div style="display:flex; align-items:center; gap:0.75rem;">
            <button type="button" onclick="toggleModuleChecklist(${m.id})" style="background:none; border:none; font-size:1.25rem; cursor:pointer;">
              ${isDone ? '✅' : '⚪'}
            </button>
            <div>
              <strong style="font-size:0.85rem; color:#0f172a;">${m.title}</strong>
              <div style="font-size:0.75rem; color:#64748b;">${m.subtitle}</div>
            </div>
          </div>
          <button class="btn btn-secondary" onclick="navigateTo('module-detail', ${m.id})" style="font-size:0.75rem; padding:0.35rem 0.75rem;">
            Estudar Aula
          </button>
        </div>
      `;
    }).join('');
  }
}

function toggleModuleChecklist(id) {
  if (userProgress.completedModules.includes(id)) {
    unmarkModuleComplete(id);
  } else {
    markModuleComplete(id);
  }
}

function resetProgressData() {
  if (confirm('Tem certeza de que deseja resetar todo o progresso e XP salvos no navegador?')) {
    userProgress = {
      completedModules: [],
      quizScores: {},
      totalPoints: 0,
      unlockedBadges: []
    };
    saveProgress();
    renderDashboard();
    renderHomeContinue();
  }
}

// ==========================================================================
// INICIALIZAÇÃO GERAL AO CARREGAR A PÁGINA
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (mobileToggle && drawer) {
    mobileToggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });
  }

  // Inicializa visualização Home
  navigateTo('home');

  // Inicializa componentes das calculadoras
  renderSeriesInputs();
  renderParallelInputs();
  updateColorCode();
  calculateLedResistor();
});
