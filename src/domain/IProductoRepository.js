// ==============================================
// Domain Interface: IProductoRepository
// ==============================================
// All data sources (static JSON, REST API, GraphQL…)
// must implement this contract. Swap the concrete
// implementation in src/main.js without touching
// any other file.
// ==============================================

export class IProductoRepository {
  /**
   * Returns all available categories.
   * @returns {Promise<import('./Categoria').Categoria[]>}
   */
  async getCategorias() {
    throw new Error('IProductoRepository.getCategorias() not implemented');
  }

  /**
   * Returns all products for a given category.
   * @param {string} catId
   * @returns {Promise<import('./Producto').Producto[]>}
   */
  async getProductosByCategoria(catId) {
    throw new Error('IProductoRepository.getProductosByCategoria() not implemented');
  }

  /**
   * Returns the technical detail (specs, disclaimer, compatibles)
   * for a given product, or null if unavailable.
   * @param {string} productoId
   * @returns {Promise<Object|null>}
   */
  async getProductoDetail(productoId) {
    throw new Error('IProductoRepository.getProductoDetail() not implemented');
  }
}
