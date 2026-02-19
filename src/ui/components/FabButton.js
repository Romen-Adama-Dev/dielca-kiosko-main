// ==============================================
// UI Component: FabButton
// Floating cart action button.
// Hides itself on screens where it's not relevant
// and whenever the cart panel is open.
// ==============================================

const HIDDEN_SCREENS = new Set(['splash', 'confirmacion']);

export class FabButton {
  /**
   * @param {import('../Router.js').Router} router
   * @param {import('../../application/CartService.js').CartService} cartService
   * @param {Function} onTap - called when the FAB is tapped
   */
  constructor(router, cartService, onTap) {
    this._router  = router;
    this._cart    = cartService;
    this._onTap   = onTap;
    this._cartPanelOpen = false;

    this._el    = document.getElementById('cart-fab-btn');
    this._badge = this._el?.querySelector('.cart-badge');

    this._el?.addEventListener('click', () => this._onTap?.());

    // React to route changes
    this._router.onChange((to) => this._syncVisibility(to));

    // React to cart changes (badge count)
    this._cart.onChange(() => this._syncBadge());

    this._syncBadge();
    this._syncVisibility(this._router.current);
  }

  /** Call this when the cart panel opens / closes */
  setCartPanelOpen(open) {
    this._cartPanelOpen = open;
    this._syncVisibility(this._router.current);
  }

  _syncVisibility(screen) {
    if (!this._el) return;
    const hide = this._cartPanelOpen || HIDDEN_SCREENS.has(screen);
    this._el.style.display = hide ? 'none' : 'flex';
  }

  _syncBadge() {
    if (!this._badge) return;
    const count = this._cart.getCount();
    this._badge.textContent = count;
    this._badge.style.display = count > 0 ? 'flex' : 'none';

    // Bounce animation on add
    this._el?.classList.add('bounce');
    setTimeout(() => this._el?.classList.remove('bounce'), 400);
  }
}
