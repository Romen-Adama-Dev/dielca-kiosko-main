// ==============================================
// Domain Entity: Categoria
// ==============================================

/**
 * Represents a product category.
 * @typedef {Object} Categoria
 * @property {string} id
 * @property {string} nombre
 * @property {string} icono     - SVG string
 * @property {string} color     - Hex accent color
 * @property {string} descripcion
 */

export class Categoria {
  constructor({ id, nombre, icono, color, descripcion }) {
    this.id = id;
    this.nombre = nombre;
    this.icono = icono;
    this.color = color;
    this.descripcion = descripcion;
  }
}
