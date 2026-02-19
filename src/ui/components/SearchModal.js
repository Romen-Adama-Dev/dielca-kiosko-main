// ==============================================
// UI Component: SearchModal
// Global product search across all categories.
// Landing view shows category groups sorted by
// popularity (src/data/categoriasPopularidad.js).
// Swap that file's source for a live API call
// when the backend is ready.
// ==============================================

import { PRODUCTO_ICONS } from '../../data/icons.js';
import { CATEGORIAS_POPULARIDAD } from '../../data/categoriasPopularidad.js';

const HIDDEN_SCREENS = new Set(['splash', 'confirmacion', 'resumen']);

export class SearchModal {
  /**
   * @param {import('../../application/ProductoService.js').ProductoService} productoService
   * @param {import('../Router.js').Router} router
   * @param {Function} onAddProduct        - called with (producto)
   * @param {Function} onShowDetail        - called with (producto, categoria)
   * @param {Function} onSelectCategoria   - called with (categoriaId) → navigate to productos
   */
  constructor(productoService, router, onAddProduct, onShowDetail, onSelectCategoria) {
    this._service    = productoService;
    this._router     = router;
    this._onAdd      = onAddProduct;
    this._onDetail   = onShowDetail;
    this._onSelectCat = onSelectCategoria;

    /** @type {Array<{ producto: Object, categoria: Object }>} */
    this._index   = null;
    /** @type {Array<Object>} sorted categories */
    this._cats    = null;
    this._loading = false;

    this._fab   = document.getElementById('search-fab-btn');
    this._modal = document.getElementById('search-modal');
    this._input = document.getElementById('search-input');
    this._results = document.getElementById('search-results');

    // FAB tap
    this._fab?.addEventListener('click', () => this.open());

    // Close button
    document.getElementById('search-close')
      ?.addEventListener('click', () => this.close());

    // Tap on backdrop
    this._modal?.addEventListener('click', (e) => {
      if (e.target === this._modal) this.close();
    });

    // Live search
    this._input?.addEventListener('input', () => this._search(this._input.value));

    // Clear button
    document.getElementById('search-clear')
      ?.addEventListener('click', () => {
        this._input.value = '';
        this._input.focus();
        this._renderResults([]);
        this._showPlaceholder();
      });

    // React to route changes for FAB visibility
    this._router.onChange((to) => this._syncFabVisibility(to));
    this._syncFabVisibility(this._router.current);
  }

  // ---- public ----

  /** Also callable externally to keep FAB in sync with cart panel */
  setOverlayOpen(open) {
    this._overlayOpen = open;
    this._syncFabVisibility(this._router.current);
  }

  async open() {
    if (this._fab) this._fab.style.display = 'none';
    this._modal?.classList.add('open');
    await this._ensureIndex();
    this._input?.focus();
    this._showPlaceholder();
  }

  close() {
    this._modal?.classList.remove('open');
    if (this._input) this._input.value = '';
    this._results && (this._results.innerHTML = '');
    this._syncFabVisibility(this._router.current);
  }

  // ---- private ----

  _syncFabVisibility(screen) {
    if (!this._fab) return;
    const hide = this._overlayOpen || HIDDEN_SCREENS.has(screen);
    this._fab.style.display = hide ? 'none' : 'flex';
  }

  async _ensureIndex() {
    if (this._index || this._loading) return;
    this._loading = true;

    const cats = await this._service.getCategorias();

    // Sort categories by popularity order
    const rank = Object.fromEntries(CATEGORIAS_POPULARIDAD.map((id, i) => [id, i]));
    this._cats = [...cats].sort((a, b) =>
      (rank[a.id] ?? 99) - (rank[b.id] ?? 99)
    );

    const flat = [];
    await Promise.all(cats.map(async (cat) => {
      const prods = await this._service.getProductosByCategoria(cat.id);
      prods.forEach(p => flat.push({ producto: p, categoria: cat }));
    }));

    this._index   = flat;
    this._loading = false;
  }

  _search(raw) {
    const q = raw.trim().toLowerCase();
    if (!q) { this._showPlaceholder(); return; }
    if (!this._index) return;

    // Matching categories (chips at top)
    const matchingCats = (this._cats ?? []).filter(c =>
      c.nombre.toLowerCase().includes(q) ||
      c.descripcion.toLowerCase().includes(q)
    );

    // Matching products
    const hits = this._index.filter(({ producto: p, categoria: c }) =>
      p.nombre.toLowerCase().includes(q) ||
      p.referencia.toLowerCase().includes(q) ||
      c.nombre.toLowerCase().includes(q)
    );

    this._renderResults(hits, matchingCats);
  }

  _showPlaceholder() {
    if (!this._results) return;
    this._results.innerHTML = '';

    if (!this._cats || this._cats.length === 0) {
      this._results.innerHTML = `
        <div class="search-placeholder">
          <svg viewBox="0 0 48 48" width="56" height="56" fill="none">
            <circle cx="22" cy="22" r="14" stroke="var(--azul-light)" stroke-width="3"/>
            <path d="M32 32l8 8" stroke="var(--azul-light)" stroke-width="3" stroke-linecap="round"/>
          </svg>
          <p>Escribe para buscar productos,<br>referencias o categorías</p>
        </div>`;
      return;
    }

    // Section title
    const title = document.createElement('div');
    title.className = 'search-section-title';
    title.textContent = 'Explorar por categoría';
    this._results.appendChild(title);

    // Popularity badge labels
    const badges = ['⭐ Más vendido', '🔥 Popular', '🔥 Popular'];

    // Category grid
    const grid = document.createElement('div');
    grid.className = 'search-cats-grid';

    this._cats.forEach((cat, idx) => {
      const card = document.createElement('button');
      card.className = 'search-cat-card';
      card.style.setProperty('--cat-color', cat.color);
      card.innerHTML = `
        ${idx < badges.length ? `<span class="search-cat-badge">${badges[idx]}</span>` : ''}
        <div class="search-cat-icon">${cat.icono}</div>
        <div class="search-cat-name">${cat.nombre}</div>
        <div class="search-cat-desc">${cat.descripcion}</div>
      `;
      card.addEventListener('click', () => {
        this.close();
        this._onSelectCat?.(cat.id);
      });
      grid.appendChild(card);
    });

    this._results.appendChild(grid);
  }

  _renderResults(hits, matchingCats = []) {
    if (!this._results) return;
    this._results.innerHTML = '';

    // --- Category chips (shown when query matches a category) ---
    if (matchingCats.length > 0) {
      const chipsSection = document.createElement('div');
      chipsSection.className = 'search-section-title';
      chipsSection.textContent = 'Categorías relacionadas';
      this._results.appendChild(chipsSection);

      const chips = document.createElement('div');
      chips.className = 'search-cat-chips';
      matchingCats.forEach(cat => {
        const chip = document.createElement('button');
        chip.className = 'search-cat-chip';
        chip.style.setProperty('--cat-color', cat.color);
        chip.innerHTML = `<span class="chip-icon">${cat.icono}</span>${cat.nombre}`;
        chip.addEventListener('click', () => {
          this.close();
          this._onSelectCat?.(cat.id);
        });
        chips.appendChild(chip);
      });
      this._results.appendChild(chips);
    }

    if (hits.length === 0 && this._input?.value.trim()) {
      const empty = document.createElement('div');
      empty.innerHTML = `
        <div class="search-placeholder">
          <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
            <circle cx="22" cy="22" r="14" stroke="#ccc" stroke-width="3"/>
            <path d="M32 32l8 8" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
            <path d="M16 28l12-12M28 28L16 16" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
          <p>Sin productos para "<strong>${this._input.value.trim()}</strong>"</p>
        </div>`;
      this._results.appendChild(empty);
      return;
    }

    if (hits.length > 0) {
      const prodTitle = document.createElement('div');
      prodTitle.className = 'search-section-title';
      prodTitle.textContent = `Productos (${hits.length})`;
      this._results.appendChild(prodTitle);
    }

    hits.forEach(({ producto: p, categoria: c }) => {
      const icon = PRODUCTO_ICONS[p.imagen] ?? PRODUCTO_ICONS.default;
      const el   = document.createElement('div');
      el.className = `search-result-item${p.stock ? '' : ' sin-stock'}`;
      el.innerHTML = `
        <div class="search-result-icon">${icon}</div>
        <div class="search-result-info">
          <div class="search-result-cat" style="--cat-color:${c.color}">${c.nombre}</div>
          <div class="search-result-nombre">${p.nombre}</div>
          <div class="search-result-ref">Ref: ${p.referencia}</div>
        </div>
        <div class="search-result-precio">${p.precio.toFixed(2)} €<small>/${p.unidad}</small></div>
        <div class="search-result-actions">
          <button class="search-detail-btn" aria-label="Ver especificaciones">ⓘ</button>
          ${p.stock
            ? `<button class="search-add-btn" aria-label="Añadir al pedido">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                  <path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                </svg>
               </button>`
            : `<span class="search-nostock">Sin stock</span>`}
        </div>
      `;

      el.querySelector('.search-detail-btn')
        .addEventListener('click', (e) => { e.stopPropagation(); this._onDetail?.(p, c); });

      el.querySelector('.search-add-btn')
        ?.addEventListener('click', (e) => {
          e.stopPropagation();
          this.close();
          this._onAdd?.(p);
        });

      this._results.appendChild(el);
    });
  }
}
