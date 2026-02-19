// ==============================================
// UI Component: QtyModal
// Modal for selecting quantity before adding to cart.
// ==============================================

export class QtyModal {
  /**
   * @param {import('../../application/CartService.js').CartService} cartService
   * @param {Function} onAdd - called after item is added
   */
  constructor(cartService, onAdd) {
    this._cart  = cartService;
    this._onAdd = onAdd;

    /** @type {{ producto: Object, cantidad: number }|null} */
    this._data = null;

    this._el = document.getElementById('qty-modal');

    document.getElementById('modal-close')
      ?.addEventListener('click', () => this.close());
    document.getElementById('modal-minus')
      ?.addEventListener('click', () => this._step(-1));
    document.getElementById('modal-plus')
      ?.addEventListener('click', () => this._step(+1));
    document.getElementById('modal-confirm')
      ?.addEventListener('click', () => this._confirm());
    this._el
      ?.addEventListener('click', (e) => { if (e.target === this._el) this.close(); });
  }

  /** @param {Object} producto */
  open(producto) {
    this._data = { producto, cantidad: producto.undMin };
    document.getElementById('modal-prod-nombre').textContent = producto.nombre;
    document.getElementById('modal-prod-precio').textContent =
      producto.precio.toFixed(2) + ' €/' + producto.unidad;
    this._renderPresets(producto);
    this._renderQty();
    this._el?.classList.add('open');
  }

  close() {
    this._el?.classList.remove('open');
    this._data = null;
  }

  // ---- private ----

  _step(direction) {
    if (!this._data) return;
    const { producto } = this._data;
    const delta = direction * (producto.undStep || 1);
    this._data.cantidad = Math.max(producto.undMin, this._data.cantidad + delta);
    this._renderQty();
  }

  _confirm() {
    if (!this._data) return;
    const { producto, cantidad } = this._data;
    this._cart.addItem(producto, cantidad);
    this.close();
    this._onAdd?.();
  }

  _renderQty() {
    if (!this._data) return;
    const { producto, cantidad } = this._data;
    document.getElementById('modal-qty').textContent = cantidad + ' ' + producto.unidad;
    document.getElementById('modal-total').textContent =
      (producto.precio * cantidad).toFixed(2) + ' €';
  }

  _renderPresets(producto) {
    const container = document.getElementById('modal-presets');
    if (!container) return;
    container.innerHTML = '';
    this._getPresets(producto).forEach(v => {
      const btn = document.createElement('button');
      btn.className = 'preset-btn';
      btn.textContent = v + ' ' + producto.unidad;
      btn.addEventListener('click', () => {
        if (this._data) {
          this._data.cantidad = v;
          this._renderQty();
        }
      });
      container.appendChild(btn);
    });
  }

  _getPresets(producto) {
    const step = producto.undStep || 1;
    switch (producto.unidad) {
      case 'metro':
        return [...new Set([step, step*5, step*10, step*25, step*50, step*100])].slice(0, 6);
      case 'ud':
        return [1, 2, 5, 10, 20, 50];
      case 'rollo':
        return [1, 2, 5];
      default:
        return [step, step*2, step*5, step*10];
    }
  }
}
