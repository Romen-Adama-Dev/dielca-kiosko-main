// ==============================================
// HTML Templates - Components
// Templates para componentes reutilizables
// ==============================================

export const ComponentTemplates = {
  
  // Modal de Cantidad
  qtyModal: () => `
    <div id="qty-modal">
      <div class="qty-modal-box">
        <div class="qty-modal-header">
          <div class="qty-modal-names">
            <div class="qty-modal-nombre" id="modal-prod-nombre">Producto</div>
            <div class="qty-modal-precio" id="modal-prod-precio">0.00 €/ud</div>
          </div>
          <button id="modal-close">✕</button>
        </div>

        <div>
          <div class="modal-presets-label">Cantidad rápida</div>
          <div id="modal-presets">
            <!-- Renderizado por JS -->
          </div>
        </div>

        <div>
          <div class="modal-presets-label" style="margin-bottom:12px;">Ajuste fino</div>
          <div class="qty-controls">
            <button class="qty-ctrl-btn" id="modal-minus">−</button>
            <div id="modal-qty">1 ud</div>
            <button class="qty-ctrl-btn" id="modal-plus">+</button>
          </div>
        </div>

        <div class="qty-modal-total">
          <span class="qty-modal-total-label">Total línea</span>
          <span id="modal-total">0,00 €</span>
        </div>

        <button id="modal-confirm">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-10 2a2 2 0 100 4 2 2 0 000-4z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Añadir al pedido
        </button>
      </div>
    </div>
  `,

  // Panel del Carrito
  cartPanel: () => `
    <div id="cart-overlay"></div>
    <aside id="cart-panel">
      <div class="cart-panel-header">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-10 2a2 2 0 100 4 2 2 0 000-4z"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="cart-panel-title">Mi pedido</span>
        <button id="cart-close-btn">✕</button>
      </div>
      <div id="cart-items-list">
        <!-- Renderizado por JS -->
      </div>
      <div class="cart-panel-footer">
        <div class="cart-total-row">
          <span class="cart-total-label">Total estimado</span>
          <span id="cart-total">0,00 €</span>
        </div>
        <button id="cart-checkout-btn">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Ver resumen del pedido
        </button>
      </div>
    </aside>
  `,

  // Botones FAB
  fabButtons: () => `
    <!-- Botón flotante de búsqueda -->
    <button class="search-fab" aria-label="Buscar producto" style="display:none" id="search-fab-btn">
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
        <circle cx="11" cy="11" r="7" stroke="white" stroke-width="2.5"/>
        <path d="M20 20l-4.35-4.35" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </button>

    <!-- Botón flotante del carrito -->
    <button class="cart-fab" aria-label="Ver carrito" style="display:none" id="cart-fab-btn">
      <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-10 2a2 2 0 100 4 2 2 0 000-4z"
          stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span class="cart-badge" style="display:none">0</span>
    </button>
  `,

  // Modal de Detalle de Producto
  detailModal: () => `
    <div id="detail-modal">
      <div class="detail-modal-box">
        <div class="detail-modal-header">
          <div class="detail-modal-icon" id="detail-icon"></div>
          <div class="detail-modal-meta">
            <div class="detail-modal-cat" id="detail-cat"></div>
            <div class="detail-modal-nombre" id="detail-nombre"></div>
            <div class="detail-modal-ref" id="detail-ref"></div>
          </div>
          <button id="detail-close">✕</button>
        </div>

        <div class="detail-modal-body">
          <div class="detail-section">
            <div class="detail-section-title">Especificaciones técnicas</div>
            <div id="detail-specs" class="detail-specs-grid"></div>
          </div>

          <div class="detail-section" id="detail-compatible-section" style="display:none">
            <div class="detail-section-title">Productos necesarios / compatibles</div>
            <div id="detail-compatibles" class="detail-compat-list"></div>
          </div>

          <div class="detail-disclaimer" id="detail-disclaimer" style="display:none">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path d="M12 9v4M12 17h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <span id="detail-disclaimer-text"></span>
          </div>
        </div>

        <div class="detail-modal-footer">
          <button id="detail-add-btn" class="detail-add-btn">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-10 2a2 2 0 100 4 2 2 0 000-4z"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Añadir al pedido
          </button>
        </div>
      </div>
    </div>
  `,

  // Modal de Búsqueda
  searchModal: () => `
    <div id="search-modal">
      <div class="search-modal-box">
        <div class="search-modal-header">
          <div class="search-input-wrapper">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <circle cx="11" cy="11" r="7" stroke="var(--azul)" stroke-width="2.5"/>
              <path d="M20 20l-4.35-4.35" stroke="var(--azul)" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <input id="search-input" type="search" placeholder="Buscar por nombre, referencia o categoría…"
              autocomplete="off" autocorrect="off" spellcheck="false"/>
            <button id="search-clear" aria-label="Borrar búsqueda">✕</button>
          </div>
          <button id="search-close" class="search-close-btn">Cerrar</button>
        </div>
        <div id="search-results" class="search-results">
          <!-- Renderizado por JS -->
        </div>
      </div>
    </div>
  `,

  // Feedback Toast
  addFeedback: () => `
    <div id="add-feedback">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="#4ade80"
          stroke-width="2.5" stroke-linecap="round" />
      </svg>
      ¡Añadido al pedido!
    </div>
  `
};
