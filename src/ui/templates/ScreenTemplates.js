// ==============================================
// HTML Templates - Screens
// Templates estáticos para las pantallas principales
// ==============================================

export const ScreenTemplates = {
  
  // Splash Screen
  splash: () => `
    <section class="screen" id="screen-splash">
      <div class="splash-content">
        <div class="splash-logo">
          <img src="assets/img/logo-sin-fondo.png" alt="DIELCA Logo" class="splash-logo-img">
          <div class="splash-logo-sub">Distribuidora Eléctrica Canaria</div>
        </div>
        <div class="splash-title">
          Bienvenido al<br><span>Terminal de Pedidos</span>
        </div>
        <button class="splash-touch-btn" id="splash-start">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
            <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Toca para empezar
        </button>
      </div>
    </section>
  `,

  // Categorías Screen
  categorias: () => `
    <section class="screen" id="screen-categorias">
      <header class="kiosk-header">
        <img src="assets/img/logo-sin-fondo.png" alt="DIELCA Logo" class="header-logo-mini">
        <h1 class="header-title">¿Qué necesitas hoy?</h1>
      </header>
      <div class="categorias-body">
        <div id="categorias-grid">
          <!-- Renderizado por JS -->
        </div>
      </div>
    </section>
  `,

  // Productos Screen
  productos: () => `
    <section class="screen" id="screen-productos">
      <header class="kiosk-header">
        <button class="header-back-btn" id="productos-back">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          Volver
        </button>
        <img src="assets/img/logo-sin-fondo.png" alt="DIELCA Logo" class="header-logo-mini">
        <h2 class="header-title" id="productos-titulo">Categoría</h2>
      </header>
      <div class="productos-body">
        <div id="productos-grid">
          <!-- Renderizado por JS -->
        </div>
      </div>
    </section>
  `,

  // Resumen Screen
  resumen: () => `
    <section class="screen" id="screen-resumen">
      <header class="kiosk-header">
        <button class="header-back-btn" id="resumen-back">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
            <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          Modificar
        </button>
        <img src="assets/img/logo-sin-fondo.png" alt="DIELCA Logo" class="header-logo-mini">
        <h2 class="header-title">Resumen del pedido</h2>
      </header>

      <div style="padding: 0 16px 0 16px; display: grid; grid-template-columns: 1fr 180px 130px 36px; gap: 14px; padding-top: 16px; padding-bottom: 8px;">
        <span style="font-size:13px; font-weight:700; color:#8a93a8; text-transform:uppercase; letter-spacing:1px;">Producto</span>
        <span style="font-size:13px; font-weight:700; color:#8a93a8; text-transform:uppercase; letter-spacing:1px; text-align:center;">Cantidad</span>
        <span style="font-size:13px; font-weight:700; color:#8a93a8; text-transform:uppercase; letter-spacing:1px; text-align:right;">Precio</span>
        <span></span>
      </div>

      <div class="resumen-body" id="resumen-list">
        <!-- Renderizado por JS -->
      </div>

      <div style="padding: 0 40px 16px; flex-shrink: 0;">
        <div class="resumen-total-row">
          <span class="resumen-total-label">Total estimado</span>
          <span id="resumen-total">0,00 €</span>
        </div>
        <p style="font-size:13px; color:#8a93a8; margin-top:8px; padding: 0 4px;">
          * Los precios son orientativos y pueden variar. Un comercial confirmará el pedido final.
        </p>
      </div>

      <div class="resumen-actions">
        <button class="btn-secundario" id="resumen-cancelar">
          🗑 Cancelar pedido
        </button>
        <button class="btn-primario" id="resumen-confirmar">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
            <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
              stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Confirmar pedido
        </button>
      </div>
    </section>
  `,

  // Confirmación Screen
  confirmacion: () => `
    <section class="screen" id="screen-confirmacion">
      <div class="confirm-content">
        <div class="confirm-icon">
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="38" stroke="#4ade80" stroke-width="3" />
            <path d="M24 40l12 12 20-24" stroke="#4ade80" stroke-width="5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
        <div class="confirm-titulo">¡Pedido enviado!</div>
        <div class="confirm-sub">Nuestro equipo recibirá tu solicitud y se pondrá en contacto contigo.</div>
        <div class="confirm-pedido">
          <div class="confirm-pedido-label">Número de referencia</div>
          <div id="confirm-numero">DK-000000</div>
        </div>
        <button id="confirm-nuevo">
          Hacer otro pedido
        </button>
        <div class="confirm-auto">La pantalla volverá al inicio automáticamente en 15 segundos</div>
      </div>
    </section>
  `
};
