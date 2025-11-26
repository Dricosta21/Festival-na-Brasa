// ===== Gerenciamento de Estado =====
let estado = {
  tela: 'inicio',
  telaAnterior: 'inicio',
  estacao: armazenamento.obterEstacao(),
  carrinho: armazenamento.obterCarrinho(),
  codigo: null,
};

const definirEstado = (atualizacoes) => {
  estado = { ...estado, ...atualizacoes };
  if (atualizacoes.carrinho) armazenamento.salvarCarrinho(atualizacoes.carrinho);
  if (atualizacoes.estacao) armazenamento.salvarEstacao(atualizacoes.estacao);
};

// ===== Navegação =====
const definirTela = (t) => {
  estado.telaAnterior = estado.tela;
  definirEstado({ tela: t });
  renderizar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const voltarTela = () => {
  const rotas = {
    carrinho: estado.telaAnterior === 'lista' ? 'lista' : 'inicio',
    pagamento: 'carrinho',
    lista: 'inicio',
    sucesso: 'inicio',
  };
  definirTela(rotas[estado.tela] || 'inicio');
};

// ===== Gerenciamento de Carrinho =====
const carrinho = {
  adicionar: (item) => {
    const copia = [...estado.carrinho];
    const idx = copia.findIndex(x => x.id === item.id);
    idx >= 0 ? copia[idx].qtd += 1 : copia.push({ ...item, qtd: 1 });
    definirEstado({ carrinho: copia });
    atualizarBarrasUI();
  },
  remover: (item) => {
    const copia = [...estado.carrinho];
    const idx = copia.findIndex(x => x.id === item.id);
    if (idx < 0) return;
    copia[idx].qtd === 1 ? copia.splice(idx, 1) : copia[idx].qtd -= 1;
    definirEstado({ carrinho: copia });
    atualizarBarrasUI();
  },
  total: () => estado.carrinho.reduce((s, i) => s + i.preco * i.qtd, 0),
  contar: () => estado.carrinho.reduce((s, i) => s + i.qtd, 0),
  limpar: () => definirEstado({ carrinho: [] }),
};

const abrirEstacao = (est) => {
  definirEstado({ estacao: est });
  definirTela('lista');
};

// ===== Visualizações =====

const cartaoEstacao = (est) => `
  <button class="card card--station" data-estacao="${est.id}" aria-label="Abrir ${est.nome}">
    <div class="hero"><img src="${est.imagem}" alt="${est.nome}" onerror="imgFallback(event)" /></div>
    <div class="card--soft">
      <div class="card-title">${est.nome}</div>
      <div class="card-desc">${est.desc}</div>
    </div>
  </button>
`;

const cartaoItem = (idEstacao, it) => {
  const qtd = estado.carrinho.find(x => x.id === it.id)?.qtd || 0;
  return `
    <div class="card">
      <div class="hero"><img src="${it.imagem}" alt="${it.nome}" onerror="imgFallback(event)"></div>
      <div class="card--soft">
        <div class="row">
          <div style="flex:1">
            <div class="card-title">${it.nome}</div>
            <div class="card-desc">${dinheiro(it.preco)}</div>
          </div>
          <div class="qty">
            <button data-dec="${idEstacao}:${it.id}" aria-label="Diminuir" class="qty-btn">−</button>
            <div class="n" aria-live="polite">${qtd}</div>
            <button data-inc="${idEstacao}:${it.id}" aria-label="Adicionar" class="qty-btn">+</button>
          </div>
        </div>
      </div>
    </div>
  `;
};

const telaInicio = () => `
  <section class="card">
    <div class="hero"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop" alt="Churrasco premium" onerror="imgFallback(event)" /></div>
    <div class="card--soft">
      <div class="section-title">Nossas estações</div>
      <div class="grid">
        ${Estacoes.map(cartaoEstacao).join("")}
      </div>
    </div>
  </section>
`;

const telaLista = () => {
  const est = estado.estacao;
  const itens = Cardapio[est.id] || [];
  return `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <button class="btn btn--ghost" data-goto="inicio">← Voltar</button>
      <h2 class="card-title" style="margin:0">${est.nome}</h2>
    </div>
    <p class="card-desc" style="margin-bottom:16px">Selecione seus itens preferidos</p>
    <div class="grid">
      ${itens.map(it => cartaoItem(est.id, it)).join("")}
    </div>
  `;
};

const telaCarrinho = () => {
  const entradas = estado.carrinho;
  return `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <button class="btn btn--ghost" data-back>← Voltar</button>
      <h2 class="card-title" style="margin:0">Seu carrinho</h2>
    </div>
    ${entradas.length === 0 ? `
      <div class="card card--soft">
        <div class="card-desc">Carrinho vazio — adicione itens para continuar.</div>
        <div style="margin-top:10px"><button class="btn btn--primary" data-goto="inicio">Escolher itens</button></div>
      </div>
    ` : `
      <section class="card card--soft">
        ${entradas.map(it => `
          <div class="row">
            <div style="flex:1"><strong>${it.nome}</strong><div class="card-desc">${dinheiro(it.preco * it.qtd)}</div></div>
            <div class="qty">
              <button data-cart-dec="${it.id}" class="qty-btn">−</button>
              <div class="n">${it.qtd}</div>
              <button data-cart-inc="${it.id}" class="qty-btn">+</button>
            </div>
          </div>
        `).join("")}
        <hr style="border:none;border-top:1px solid var(--ring);margin:10px 0" />
        <div class="row"><span class="card-desc">Total</span><strong>${dinheiro(carrinho.total())}</strong></div>
        <div class="btn-group">
          <button class="btn btn--ghost" data-back>Continuar</button>
          <button class="btn btn--primary" data-goto="pagamento">Finalizar →</button>
        </div>
      </section>
    `}
  `;
};

const telaPagamento = () => `
  <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
    <button class="btn btn--ghost" data-back>← Voltar</button>
    <h2 class="card-title" style="margin:0">Pagamento</h2>
  </div>
  <form class="card card--soft" id="payForm">
    <div class="form-grid">
      <label>Nome<input required class="input" placeholder="Ex.: Adrielly Costa" /></label>
      <label>E-mail<input required type="email" class="input" placeholder="voce@email.com" /></label>
    </div>
    <label style="display:block;margin-top:10px">Forma de pagamento<select class="select"><option>PIX</option><option>Crédito</option><option>Débito</option></select></label>
    <div class="row" style="margin-top:12px"><span class="card-desc">Total</span><strong>${dinheiro(carrinho.total())}</strong></div>
    <div class="btn-group">
      <button type="button" class="btn btn--ghost" data-back>Voltar</button>
      <button type="submit" class="btn btn--primary">Confirmar →</button>
    </div>
  </form>
`;

const telaSucesso = () => `
  <section class="card card--soft" style="text-align:center">
    <div class="ok">✔</div>
    <h2 class="card-title">Pedido confirmado!</h2>
    <p class="card-desc">Aguarde seu número ser chamado</p>
    <div class="ticket" style="margin-top:10px">
      <div class="card-desc">Sua senha</div>
      <div class="ticket-code">${estado.codigo}</div>
    </div>
    <div class="card" style="margin-top:14px">
      <div class="card--soft">
        <div class="card-title" style="font-size:14px;margin-bottom:8px">Resumo</div>
        ${estado.carrinho.map(it => `<div class="row"><span>${it.qtd}× ${it.nome}</span><strong>${dinheiro(it.qtd * it.preco)}</strong></div>`).join("")}
      </div>
    </div>
    <button class="btn btn--primary" data-reset style="margin-top:14px">Voltar ao início</button>
  </section>
`;

// ===== Renderizar e Eventos =====
const renderizar = () => {
  const raiz = $("#app");
  const telas = { inicio: telaInicio, lista: telaLista, carrinho: telaCarrinho, pagamento: telaPagamento, sucesso: telaSucesso };
  raiz.innerHTML = telas[estado.tela]?.() || '';

  anexarOuvidoresEventos();
  atualizarBarrasUI();
};

const anexarOuvidoresEventos = () => {
  $$('[data-goto]').forEach(el => el.addEventListener('click', () => definirTela(el.getAttribute('data-goto'))));
  $$('[data-estacao]').forEach(el => el.addEventListener('click', () => {
    const est = Estacoes.find(s => s.id === el.getAttribute('data-estacao'));
    est && abrirEstacao(est);
  }));
  $$('[data-inc]').forEach(el => el.addEventListener('click', () => {
    const [sid, id] = el.getAttribute('data-inc').split(':');
    const it = (Cardapio[sid] || []).find(x => x.id === id);
    it && carrinho.adicionar(it);
  }));
  $$('[data-dec]').forEach(el => el.addEventListener('click', () => {
    const [sid, id] = el.getAttribute('data-dec').split(':');
    const it = (Cardapio[sid] || []).find(x => x.id === id);
    it && carrinho.remover(it);
  }));
  $$('[data-back]').forEach(el => el.addEventListener('click', voltarTela));
  $$('[data-cart-inc]').forEach(el => el.addEventListener('click', () => {
    const it = estado.carrinho.find(x => x.id === el.getAttribute('data-cart-inc'));
    it && carrinho.adicionar(it);
  }));
  $$('[data-cart-dec]').forEach(el => el.addEventListener('click', () => {
    const it = estado.carrinho.find(x => x.id === el.getAttribute('data-cart-dec'));
    it && carrinho.remover(it);
  }));
  $$('[data-reset]').forEach(el => el.addEventListener('click', () => {
    armazenamento.limpar();
    definirEstado({ tela: 'inicio', telaAnterior: 'inicio', estacao: null, carrinho: [], codigo: null });
    renderizar();
  }));

  const formulario = $("#payForm");
  formulario?.addEventListener('submit', (e) => {
    e.preventDefault();
    definirEstado({ codigo: String(Math.floor(Math.random() * 999) + 1).padStart(3, '0') });
    definirTela('sucesso');
  });

  const mostrarVoltar = ['lista', 'carrinho', 'pagamento', 'sucesso'].includes(estado.tela);

  // Removida dependência de #btnBack (back no header).
  // Antes havia código que esperava $("#btnBack") e alterava visibilidade/onclick.
  // Agora confiamos apenas nos botões internos [data-back] já declarados nas views.

  $("#brandHome")?.addEventListener('click', () => definirTela('inicio'));
  $("#btnCart")?.addEventListener('click', () => definirTela('carrinho'));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && mostrarVoltar && voltarTela());
};

const atualizarBarrasUI = () => {
  $("#year").textContent = new Date().getFullYear();
  $("#cartCount").textContent = carrinho.contar();
  const barra = $("#bar");
  if (carrinho.contar() > 0 && estado.tela !== 'sucesso') {
    $("#barTotal").textContent = dinheiro(carrinho.total());
    $("#barAction").onclick = () => definirTela('carrinho');
    barra?.classList.remove('hidden');
  } else {
    barra?.classList.add('hidden');
  }
};

// ===== Inicializar =====
if (estado.estacao) estado.tela = 'lista';
renderizar();
