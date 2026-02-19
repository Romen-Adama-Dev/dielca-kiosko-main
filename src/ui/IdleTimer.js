// ==============================================
// UI Utility: IdleTimer
// Redirects to splash after inactivity.
// ==============================================

const IDLE_MS = 120_000; // 2 minutes

export class IdleTimer {
  /**
   * @param {import('./Router.js').Router} router
   * @param {import('../application/CartService.js').CartService} cartService
   * @param {Function} onIdle - called just before redirecting to splash
   */
  constructor(router, cartService, onIdle) {
    this._router   = router;
    this._cart     = cartService;
    this._onIdle   = onIdle;
    this._timer    = null;

    const reset = () => this.reset();
    document.addEventListener('touchstart', reset, { passive: true });
    document.addEventListener('click',      reset, { passive: true });
  }

  reset() {
    clearTimeout(this._timer);
    if (this._router.current === 'splash') return;
    this._timer = setTimeout(() => this._trigger(), IDLE_MS);
  }

  _trigger() {
    this._cart.clear();
    this._onIdle?.();
    this._router.go('splash');
  }
}
