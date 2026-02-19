// ==============================================
// UI Component: CartPanel
// Slide-in cart panel with item list and checkout.
// ==============================================

export class CartPanel {
  /**
   * @param {import('../../application/CartService.js').CartService} cartService
   * @param {import('../Router.js').Router} router
   * @param {Function} onOpen   - called when panel opens
   * @param {Function} onClose  - called when panel closes
   * @param {Function} onCheckout - called when "Ver resumen" is tapped
   */
  constructor(cartService, router, { onOpen, onClose, onCheckout } = {}) {
    this._cart      = cartService;
    this._router    = router;
    this._onOpen    = onOpen;
    this._onClose   = onClose;
    this._onCheckout = onCheckout;

    this._panel   = document.getElementById('cart-panel');
    this._overlay = document.getElementById('cart-overlay');
    this._checkoutBtn = document.getElementById('cart-checkout-btn');

    document.getElementById('cart-close-btn')
      ?.addEventListener('click', () => this.close());
    this._overlay
      ?.addEventListener('click', () => this.close());
    this._checkoutBtn
      ?.addEventListener('click', () => this._handleCheckout());

    // Re-render whenever the cart changes
    this._cart.onChange(() => {
      if (this.isOpen()) this._render();
    });
  }

  isOpen() {
    return this._panel?.classList.contains('open') ?? false;
  }

  open() {
    this._panel?.classList.add('open');
    this._overlay?.classList.add('show');
    this._updateCheckoutBtn();
    this._render();
    this._onOpen?.();
  }

  close() {
    this._panel?.classList.remove('open');
    this._overlay?.classList.remove('show');
    this._onClose?.();
  }

  _handleCheckout() {
    if (this._cart.isEmpty()) return;
    // Navigate first so the router fires onChange('resumen') and FABs hide
    // before close() removes the cart overlay (which would briefly re-show them).
    this._onCheckout?.();
    this.close();
  }

  _updateCheckoutBtn() {
    if (!this._checkoutBtn) return;
    const onResumen = this._router.current === 'resumen';
    this._checkoutBtn.disabled    = onResumen;
    this._checkoutBtn.style.opacity = onResumen ? '0.4' : '1';
    this._checkoutBtn.style.cursor  = onResumen ? 'not-allowed' : 'pointer';
    this._checkoutBtn.title         = onResumen ? 'Ya estás en el resumen' : '';
  }

  _render() {
    const list = document.getElementById('cart-items-list');
    if (!list) return;

    // Update total
    const totalEl = document.querySelector('.cart-total-amount');
    if (totalEl) totalEl.textContent = this._cart.getTotal().toFixed(2) + ' €';

    list.innerHTML = '';
    const items = this._cart.getItems();

    if (items.length === 0) {
      list.innerHTML = `<div class="cart-empty">
        <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
          <path d="M10 10h6l8 30h26l6-20H20" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
          <circle cx="28" cy="50" r="3" fill="#ccc"/>
          <circle cx="44" cy="50" r="3" fill="#ccc"/>
        </svg>
        <p>Carrito vacío</p>
      </div>`;
      return;
    }

    items.forEach(item => {
      const el = document.createElement('div');
      el.className = 'cart-item';
      const step = item.producto.undStep || 1;
      el.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-name">${item.producto.nombre}</div>
          <div class="cart-item-ref">${item.producto.referencia}</div>
          <div class="cart-item-price">${item.subtotal.toFixed(2)} €</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn minus" data-id="${item.producto.id}" data-step="${step}">−</button>
          <span class="qty-val">${item.cantidad} <small>${item.producto.unidad}</small></span>
          <button class="qty-btn plus"  data-id="${item.producto.id}" data-step="${step}">+</button>
        </div>
        <button class="cart-item-remove" data-id="${item.producto.id}">✕</button>
      `;
      list.appendChild(el);
    });

    list.querySelectorAll('.qty-btn.plus').forEach(btn =>
      btn.addEventListener('click', () =>
        this._cart.updateQty(btn.dataset.id, parseInt(btn.dataset.step) || 1)));

    list.querySelectorAll('.qty-btn.minus').forEach(btn =>
      btn.addEventListener('click', () =>
        this._cart.updateQty(btn.dataset.id, -(parseInt(btn.dataset.step) || 1))));

    list.querySelectorAll('.cart-item-remove').forEach(btn =>
      btn.addEventListener('click', () =>
        this._cart.removeItem(btn.dataset.id)));
  }
}
