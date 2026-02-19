// ==============================================
// Application Service: CartService
// Encapsulates all cart use cases.
// Depends only on InMemoryCartRepository (or any
// ICartRepository implementation). Never touches the DOM.
// ==============================================

export class CartService {
  /**
   * @param {import('../infrastructure/repositories/InMemoryCartRepository.js').InMemoryCartRepository} repository
   */
  constructor(repository) {
    this._repo = repository;
    /** @type {Array<Function>} */
    this._listeners = [];
  }

  // ---- Subscription ----

  /**
   * Subscribe to any cart change.
   * @param {Function} fn - called with no arguments whenever cart changes
   * @returns {Function} unsubscribe function
   */
  onChange(fn) {
    this._listeners.push(fn);
    return () => {
      this._listeners = this._listeners.filter(l => l !== fn);
    };
  }

  _notify() {
    this._listeners.forEach(fn => fn());
  }

  // ---- Commands ----

  /**
   * @param {import('../domain/Producto.js').Producto} producto
   * @param {number} cantidad
   */
  addItem(producto, cantidad) {
    this._repo.addItem(producto, cantidad);
    this._notify();
  }

  /** @param {string} productoId */
  removeItem(productoId) {
    this._repo.removeItem(productoId);
    this._notify();
  }

  /**
   * @param {string} productoId
   * @param {number} delta - positive or negative step
   */
  updateQty(productoId, delta) {
    this._repo.updateQty(productoId, delta);
    this._notify();
  }

  clear() {
    this._repo.clear();
    this._notify();
  }

  // ---- Queries ----

  /** @returns {import('../domain/CartItem.js').CartItem[]} */
  getItems() {
    return this._repo.getItems();
  }

  /** @returns {number} */
  getTotal() {
    return this._repo.getTotal();
  }

  /** @returns {number} */
  getCount() {
    return this._repo.getCount();
  }

  isEmpty() {
    return this._repo.getCount() === 0;
  }
}
