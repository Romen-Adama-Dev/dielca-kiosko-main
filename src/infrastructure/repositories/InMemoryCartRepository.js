// ==============================================
// Infrastructure: InMemoryCartRepository
// Manages the cart state in memory (no persistence).
// Swap for a LocalStorageCartRepository or server-side
// cart if persistence across page refreshes is needed.
// ==============================================

import { CartItem } from '../../domain/CartItem.js';

export class InMemoryCartRepository {
  constructor() {
    /** @type {CartItem[]} */
    this._items = [];
  }

  /** @returns {CartItem[]} */
  getItems() {
    return [...this._items];
  }

  /** @param {import('../../domain/Producto.js').Producto} producto @param {number} cantidad */
  addItem(producto, cantidad) {
    const existing = this._items.find(i => i.producto.id === producto.id);
    if (existing) {
      existing.cantidad += cantidad;
    } else {
      this._items.push(new CartItem(producto, cantidad));
    }
  }

  /** @param {string} productoId */
  removeItem(productoId) {
    this._items = this._items.filter(i => i.producto.id !== productoId);
  }

  /**
   * Applies a signed delta to the quantity of an item.
   * Removes the item if the resulting quantity drops to/below 0.
   * @param {string} productoId
   * @param {number} delta - positive or negative
   */
  updateQty(productoId, delta) {
    const item = this._items.find(i => i.producto.id === productoId);
    if (!item) return;
    item.cantidad = Math.max(item.producto.undMin, item.cantidad + delta);
    if (item.cantidad <= 0) this.removeItem(productoId);
  }

  clear() {
    this._items = [];
  }

  /** @returns {number} Total price */
  getTotal() {
    return this._items.reduce((sum, i) => sum + i.subtotal, 0);
  }

  /** @returns {number} Total number of line items */
  getCount() {
    return this._items.length;
  }
}
