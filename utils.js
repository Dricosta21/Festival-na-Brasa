// ===== Utilitários DOM =====
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

// ===== Formatação =====
const dinheiro = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const imgFallback = (ev) => { ev.target.onerror = null; ev.target.src = 'assets/placeholder.svg'; };

// ===== Armazenamento =====
const armazenamento = {
  obterEstacao: () => { try { return JSON.parse(localStorage.getItem('nb_estacao') || 'null'); } catch { return null; } },
  salvarEstacao: (v) => localStorage.setItem('nb_estacao', JSON.stringify(v)),
  obterCarrinho: () => { try { return JSON.parse(localStorage.getItem('nb_carrinho') || '[]'); } catch { return []; } },
  salvarCarrinho: (v) => localStorage.setItem('nb_carrinho', JSON.stringify(v)),
  limpar: () => { localStorage.removeItem('nb_estacao'); localStorage.removeItem('nb_carrinho'); }
};

// ===== Ouvintes de Evento =====
const adicionarOuvinte = (seletor, retorno) => {
  $$(seletor).forEach(el => el.addEventListener('click', retorno));
};

const adicionarOuvinteDelega = (pai, seletor, retorno) => {
  $(pai)?.addEventListener('click', (e) => {
    const alvo = e.target.closest(seletor);
    if (alvo) retorno(alvo, e);
  });
};
