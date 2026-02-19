// ==============================================
// Screen: ResumenScreen
// Order summary with editable quantities.
// ==============================================

export class ResumenScreen {
  /**
   * @param {import('../Router.js').Router} router
   * @param {import('../../application/CartService.js').CartService} cartService
   * @param {Function} onConfirm - called with ({ numPedido: string })
   */
  constructor(router, cartService, onConfirm) {
    this._router  = router;
    this._cart    = cartService;
    this._onConfirm = onConfirm;

    document.getElementById('resumen-back')
      ?.addEventListener('click', () => this._router.go('productos'));

    document.getElementById('resumen-confirmar')
      ?.addEventListener('click', () => this._handleConfirm());

    document.getElementById('resumen-cancelar')
      ?.addEventListener('click', () => {
        if (confirm('¿Cancelar el pedido completo?')) {
          this._cart.clear();
          this._router.go('categorias');
        }
      });

    // Re-render when cart changes while on this screen
    this._cart.onChange(() => {
      if (this._router.current === 'resumen') this.render();
    });
  }

  render() {
    if (this._cart.isEmpty()) {
      this._router.go('categorias');
      return;
    }

    const list = document.getElementById('resumen-list');
    list.innerHTML = '';

    this._cart.getItems().forEach(item => {
      const step = item.producto.undStep || 1;
      const row  = document.createElement('div');
      row.className = 'resumen-row';
      row.innerHTML = `
        <div>
          <div class="resumen-nombre">${item.producto.nombre}</div>
          <div class="resumen-ref">Ref: ${item.producto.referencia}</div>
        </div>
        <div class="resumen-qty-ctrl">
          <button class="resumen-qty-btn minus" data-id="${item.producto.id}" data-step="${step}">−</button>
          <span class="resumen-qty-val">${item.cantidad} <small>${item.producto.unidad}</small></span>
          <button class="resumen-qty-btn plus"  data-id="${item.producto.id}" data-step="${step}">+</button>
        </div>
        <div class="resumen-price">${item.subtotal.toFixed(2)} €</div>
        <button class="resumen-remove" data-id="${item.producto.id}" aria-label="Eliminar">✕</button>
      `;
      list.appendChild(row);
    });

    list.querySelectorAll('.resumen-qty-btn.plus').forEach(btn =>
      btn.addEventListener('click', () =>
        this._cart.updateQty(btn.dataset.id, parseInt(btn.dataset.step) || 1)));

    list.querySelectorAll('.resumen-qty-btn.minus').forEach(btn =>
      btn.addEventListener('click', () =>
        this._cart.updateQty(btn.dataset.id, -(parseInt(btn.dataset.step) || 1))));

    list.querySelectorAll('.resumen-remove').forEach(btn =>
      btn.addEventListener('click', () =>
        this._cart.removeItem(btn.dataset.id)));

    document.getElementById('resumen-total').textContent =
      this._cart.getTotal().toFixed(2) + ' €';
  }

  _handleConfirm() {
    const numPedido = 'DK-' + Date.now().toString().slice(-6);
    this._onConfirm?.({ numPedido });
    this._cart.clear();
  }
}
