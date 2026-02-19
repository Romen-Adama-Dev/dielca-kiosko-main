// ==============================================
// Domain Entity: Producto
// ==============================================

/**
 * Represents a product for sale.
 * @typedef {Object} Producto
 * @property {string}  id
 * @property {string}  nombre
 * @property {string}  referencia
 * @property {number}  precio         - Price per unit
 * @property {string}  unidad         - Unit label (e.g. 'metro', 'ud')
 * @property {number}  undMin         - Minimum order quantity
 * @property {number}  undStep        - Quantity increment step
 * @property {boolean} stock          - Currently available
 * @property {string}  imagen         - Icon key (maps to PRODUCTO_ICONS)
 */

export class Producto {
  constructor({ id, nombre, referencia, precio, unidad, undMin, undStep, stock, imagen }) {
    this.id = id;
    this.nombre = nombre;
    this.referencia = referencia;
    this.precio = precio;
    this.unidad = unidad;
    this.undMin = undMin ?? 1;
    this.undStep = undStep ?? 1;
    this.stock = stock ?? true;
    this.imagen = imagen ?? 'default';
  }
}
