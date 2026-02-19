// ==============================================
// Infrastructure: StaticProductoRepository
// Serves data from the bundled static arrays.
// No network required — used in kiosk offline mode.
// ==============================================

import { IProductoRepository } from '../../domain/IProductoRepository.js';
import { CATEGORIAS }     from '../../data/categorias.js';
import { PRODUCTOS }      from '../../data/productos.js';
import { PRODUCT_DETAILS } from '../../data/productDetails.js';

export class StaticProductoRepository extends IProductoRepository {
  async getCategorias() {
    return CATEGORIAS;
  }

  async getProductosByCategoria(catId) {
    return PRODUCTOS[catId] ?? [];
  }

  async getProductoDetail(productoId) {
    return PRODUCT_DETAILS[productoId] ?? null;
  }
}
