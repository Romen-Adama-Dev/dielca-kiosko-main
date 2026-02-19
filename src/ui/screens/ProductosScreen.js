// ==============================================
// Screen: ProductosScreen
// ==============================================

import { PRODUCTO_ICONS } from '../../data/icons.js';

export class ProductosScreen {
  /**
   * @param {import('../Router.js').Router} router
   * @param {import('../../application/ProductoService.js').ProductoService} productoService
   * @param {Function} onAddProduct    - called with (producto) to open QtyModal
   * @param {Function} onShowDetail    - called with (producto, categoria) to open DetailModal
   */
  constructor(router, productoService, onAddProduct, onShowDetail) {
    this._router    = router;
    this._service   = productoService;
    this._onAdd     = onAddProduct;
    this._onDetail  = onShowDetail;

    document.getElementById('productos-back')
      ?.addEventListener('click', () => this._router.go('categorias'));
  }

  /**
   * @param {string} catId
   */
  async render(catId) {
    const [cat, productos] = await Promise.all([
      this._service.getCategoriaById(catId),
      this._service.getProductosByCategoria(catId),
    ]);

    document.getElementById('productos-titulo').textContent = cat?.nombre ?? '';

    const grid = document.getElementById('productos-grid');
    grid.innerHTML = '';

    productos.forEach(prod => {
      const icon       = PRODUCTO_ICONS[prod.imagen] ?? PRODUCTO_ICONS.default;
      const sinStock   = !prod.stock;
      const hasDetails = true; // All products now have details

      const card = document.createElement('div');
      card.className = `prod-card${sinStock ? ' sin-stock' : ''}`;

      card.innerHTML = `
        <button class="prod-info-btn" data-id="${prod.id}" aria-label="Ver especificaciones">ⓘ</button>
        <div class="prod-icon">${icon}</div>
        <div class="prod-nombre">${prod.nombre}</div>
        <div class="prod-ref">Ref: ${prod.referencia}</div>
        <div class="prod-precio">${prod.precio.toFixed(2)} <span>€/${prod.unidad}</span></div>
        ${prod.stock
          ? `<button class="prod-add-btn" data-id="${prod.id}">
               <svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
               Añadir
             </button>`
          : `<div class="prod-nostock">Consultar stock</div>`}
      `;

      if (prod.stock) {
        card.querySelector('.prod-add-btn')
          .addEventListener('click', (e) => { e.stopPropagation(); this._onAdd?.(prod); });
      }

      card.querySelector('.prod-info-btn')
        .addEventListener('click', (e) => { e.stopPropagation(); this._onDetail?.(prod, cat); });

      grid.appendChild(card);
    });
  }
}
