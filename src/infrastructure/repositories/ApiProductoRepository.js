// ==============================================
// Infrastructure: ApiProductoRepository
// Fetches data from the Dielca REST API.
//
// TO ACTIVATE: set `useApi: true` in src/config.js
//
// Expected API contract:
//   GET /categorias          → Categoria[]
//   GET /productos/:catId    → Producto[]
//   GET /productos/:id/detail→ ProductoDetail | null
//
// All endpoints return JSON. Bearer token auth is
// forwarded via the Authorization header when
// config.apiToken is set.
// ==============================================

import { IProductoRepository } from '../../domain/IProductoRepository.js';

export class ApiProductoRepository extends IProductoRepository {
  /**
   * @param {string} baseUrl  - e.g. 'https://api.dielca.com/kiosko/v1'
   * @param {string} [token]  - Optional Bearer token
   */
  constructor(baseUrl, token = null) {
    super();
    this._base = baseUrl.replace(/\/$/, '');
    this._token = token;
  }

  // ---- private helper ----

  async _fetch(path) {
    const headers = { 'Content-Type': 'application/json' };
    if (this._token) headers['Authorization'] = `Bearer ${this._token}`;

    const res = await fetch(this._base + path, { headers });
    if (!res.ok) throw new Error(`API error ${res.status} on ${path}`);
    return res.json();
  }

  // ---- IProductoRepository ----

  async getCategorias() {
    return this._fetch('/categorias');
  }

  async getProductosByCategoria(catId) {
    return this._fetch(`/productos/${encodeURIComponent(catId)}`);
  }

  async getProductoDetail(productoId) {
    try {
      return await this._fetch(`/productos/${encodeURIComponent(productoId)}/detail`);
    } catch {
      // 404 or no detail — not an error
      return null;
    }
  }
}
