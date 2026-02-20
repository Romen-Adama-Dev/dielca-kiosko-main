// ==============================================
// UI Component: DetailModal
// Shows technical specs, disclaimer and compatible
// products for a single product.
// ==============================================

import { PRODUCTO_ICONS } from '../../data/icons.js';

export class DetailModal {
  /**
   * @param {import('../../application/ProductoService.js').ProductoService} productoService
   * @param {Function} onAddToCart - called with (producto) when user taps "Añadir"
   */
  constructor(productoService, onAddToCart) {
    this._service   = productoService;
    this._onAdd     = onAddToCart;
    this._producto  = null;

    this._el = document.getElementById('detail-modal');

    document.getElementById('detail-close')
      ?.addEventListener('click', () => this.close());
    this._el
      ?.addEventListener('click', (e) => { if (e.target === this._el) this.close(); });
    document.getElementById('detail-add-btn')
      ?.addEventListener('click', () => {
        if (this._producto?.stock) {
          this._onAdd?.(this._producto);
          this.close();
        }
      });
  }

  /**
   * @param {Object} producto
   * @param {Object} [cat] - category (for header label)
   */
  async open(producto, cat) {
    this._producto = producto;
    const detail = await this._service.getProductoDetail(producto.id) ?? {};

    // Header
    document.getElementById('detail-icon').innerHTML =
      PRODUCTO_ICONS[producto.imagen] ?? PRODUCTO_ICONS.default;
    document.getElementById('detail-cat').textContent   = cat?.nombre ?? '';
    document.getElementById('detail-nombre').textContent = producto.nombre;
    document.getElementById('detail-ref').textContent   =
      `Ref: ${producto.referencia}  ·  ${producto.precio.toFixed(2)} €/${producto.unidad}`;

    // Specs
    const specsEl = document.getElementById('detail-specs');
    specsEl.innerHTML = '';
    const specs = detail.specs ?? [];
    if (specs.length === 0) {
      specsEl.innerHTML = '<p style="color:var(--gris);font-size:14px;">Sin especificaciones disponibles.</p>';
    } else {
      specs.forEach(({ label, value }) => {
        const item = document.createElement('div');
        item.className = 'detail-spec-item';
        item.innerHTML = `<div class="detail-spec-label">${label}</div><div class="detail-spec-value">${value}</div>`;
        specsEl.appendChild(item);
      });
    }

    // Compatibles
    const compatSection = document.getElementById('detail-compatible-section');
    const compatList    = document.getElementById('detail-compatibles');
    compatList.innerHTML = '';
    if (detail.compatibles?.length) {
      compatSection.style.display = '';
      detail.compatibles.forEach(({ nombre, motivo }) => {
        const item = document.createElement('div');
        item.className = 'detail-compat-item';
        item.innerHTML = `
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <div><strong>${nombre}</strong><br>
          <span style="font-size:12px;font-weight:500;color:var(--gris)">${motivo}</span></div>`;
        compatList.appendChild(item);
      });
    } else {
      compatSection.style.display = 'none';
    }

    // Disclaimer
    const disclaimerEl   = document.getElementById('detail-disclaimer');
    const disclaimerText = document.getElementById('detail-disclaimer-text');
    if (detail.disclaimer) {
      disclaimerEl.style.display = 'flex';
      disclaimerText.textContent = detail.disclaimer;
    } else {
      disclaimerEl.style.display = 'none';
    }

    // Add button
    const addBtn = document.getElementById('detail-add-btn');
    if (producto.stock) {
      addBtn.disabled       = false;
      addBtn.style.opacity  = '1';
      addBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-10 2a2 2 0 100 4 2 2 0 000-4z"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Añadir al pedido`;
    } else {
      addBtn.disabled      = true;
      addBtn.style.opacity = '0.4';
      addBtn.textContent   = 'Sin stock — consultar disponibilidad';
    }

    this._el?.classList.add('open');
  }

  close() {
    this._el?.classList.remove('open');
    this._producto = null;
  }
}
