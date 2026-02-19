// ==============================================
// Screen: CategoriasScreen
// ==============================================

export class CategoriasScreen {
  /**
   * @param {import('../Router.js').Router} router
   * @param {import('../../application/ProductoService.js').ProductoService} productoService
   * @param {Function} onSelectCategoria - called with (categoriaId)
   */
  constructor(router, productoService, onSelectCategoria) {
    this._router   = router;
    this._service  = productoService;
    this._onSelect = onSelectCategoria;
  }

  async render() {
    const grid = document.getElementById('categorias-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const categorias = await this._service.getCategorias();
    categorias.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'cat-card';
      card.style.setProperty('--cat-color', cat.color);
      card.innerHTML = `
        <div class="cat-icon">${cat.icono}</div>
        <div class="cat-name">${cat.nombre}</div>
        <div class="cat-desc">${cat.descripcion}</div>
      `;
      card.addEventListener('click', () => this._onSelect?.(cat.id));
      grid.appendChild(card);
    });
  }
}
