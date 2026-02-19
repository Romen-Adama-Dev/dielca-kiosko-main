// ==============================================
// Domain Entity: CartItem
// ==============================================

/**
 * An item inside the shopping cart.
 * @typedef {Object} CartItem
 * @property {Producto} producto
 * @property {number}   cantidad
 */

export class CartItem {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }

  get subtotal() {
    return this.producto.precio * this.cantidad;
  }
}
