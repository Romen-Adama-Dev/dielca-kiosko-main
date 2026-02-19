// ==============================================
// Screen: ConfirmacionScreen
// ==============================================

const AUTO_RETURN_MS = 15_000;

export class ConfirmacionScreen {
  /**
   * @param {import('../Router.js').Router} router
   * @param {import('../../application/CartService.js').CartService} cartService
   * @param {import('../screens/CategoriasScreen.js').CategoriasScreen} categoriasScreen
   */
  constructor(router, cartService, categoriasScreen) {
    this._router    = router;
    this._cart      = cartService;
    this._categorias = categoriasScreen;
    this._returnTimer = null;

    document.getElementById('confirm-nuevo')
      ?.addEventListener('click', () => this._goNew());
  }

  /** @param {{ numPedido: string }} params */
  show({ numPedido }) {
    document.getElementById('confirm-numero').textContent = numPedido;
    this._router.go('confirmacion');

    clearTimeout(this._returnTimer);
    this._returnTimer = setTimeout(() => this._goNew(), AUTO_RETURN_MS);
  }

  _goNew() {
    clearTimeout(this._returnTimer);
    this._router.go('categorias');
    this._categorias.render();
  }
}
