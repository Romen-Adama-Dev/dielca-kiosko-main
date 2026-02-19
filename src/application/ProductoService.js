// ==============================================
// Application Service: ProductoService
// Encapsulates all product-related use cases.
// Depends only on IProductoRepository — never on
// a concrete implementation or the DOM.
// ==============================================

export class ProductoService {
  /**
   * @param {import('../domain/IProductoRepository.js').IProductoRepository} repository
   */
  constructor(repository) {
    this._repo = repository;
  }

  /**
   * Returns all available categories (ordered as stored).
   * @returns {Promise<import('../domain/Categoria.js').Categoria[]>}
   */
  getCategorias() {
    return this._repo.getCategorias();
  }

  /**
   * Returns all products belonging to the given category.
   * @param {string} catId
   * @returns {Promise<import('../domain/Producto.js').Producto[]>}
   */
  getProductosByCategoria(catId) {
    return this._repo.getProductosByCategoria(catId);
  }

  /**
   * Returns technical detail for a product (specs, disclaimer, compatibles).
   * Resolves to null if no detail is available.
   * @param {string} productoId
   * @returns {Promise<Object|null>}
   */
  getProductoDetail(productoId) {
    return this._repo.getProductoDetail(productoId);
  }

  /**
   * Returns category data for a single category id.
   * @param {string} catId
   * @returns {Promise<import('../domain/Categoria.js').Categoria|undefined>}
   */
  async getCategoriaById(catId) {
    const cats = await this._repo.getCategorias();
    return cats.find(c => c.id === catId);
  }
}
