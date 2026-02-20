// ==============================================
// UI Constants
// Centralized UI configuration values
// ==============================================

export const UI_CONSTANTS = {
  // Timing
  SPLASH_DURATION: 2000,
  IDLE_TIMEOUT: 120000, // 2 minutes
  TOAST_DURATION: 1500,
  CONFIRMACION_REDIRECT: 5000,
  
  // Animation Durations
  ANIMATION_FAST: 200,
  ANIMATION_NORMAL: 300,
  ANIMATION_SLOW: 500,
  
  // Touch Targets (minimum size for touch screens)
  MIN_TOUCH_TARGET: 64,
  
  // Layout
  CART_WIDTH: 400,
  HEADER_HEIGHT: 92,
  
  // Grid Breakpoints
  BREAKPOINT_MOBILE: 768,
  BREAKPOINT_TABLET: 1024,
  BREAKPOINT_DESKTOP: 1440,
  
  // Search
  SEARCH_MIN_CHARS: 2,
  SEARCH_DEBOUNCE: 300,
  
  // Cart
  MAX_QUANTITY: 999,
  MIN_QUANTITY: 1,
  
  // Z-Index Layers
  Z_INDEX: {
    BASE: 1,
    FAB: 200,
    CART_OVERLAY: 400,
    CART_PANEL: 500,
    MODAL_OVERLAY: 900,
    TOAST: 9999
  }
};

// ==============================================
// Messages & Labels
// ==============================================

export const MESSAGES = {
  // Cart
  CART_EMPTY: 'Tu carrito está vacío',
  CART_ADDED: '¡Producto añadido!',
  CART_REMOVED: 'Producto eliminado',
  
  // Errors
  ERROR_LOAD_CATEGORIES: 'Error al cargar categorías',
  ERROR_LOAD_PRODUCTS: 'Error al cargar productos',
  ERROR_SUBMIT_ORDER: 'Error al enviar pedido',
  
  // Empty States
  EMPTY_CATEGORY: 'No hay productos en esta categoría',
  EMPTY_SEARCH: 'No se encontraron resultados',
  
  // Confirmación
  ORDER_SUCCESS: '¡Pedido realizado con éxito!',
  ORDER_NUMBER: 'Número de pedido',
  
  // Loading
  LOADING: 'Cargando...',
  PROCESSING: 'Procesando...'
};

// ==============================================
// Routes
// ==============================================

export const ROUTES = {
  SPLASH: 'splash',
  CATEGORIAS: 'categorias',
  PRODUCTOS: 'productos',
  RESUMEN: 'resumen',
  CONFIRMACION: 'confirmacion'
};

// ==============================================
// Local Storage Keys
// ==============================================

export const STORAGE_KEYS = {
  CART: 'dielca_cart',
  LAST_CATEGORY: 'dielca_last_category',
  USER_PREFERENCES: 'dielca_preferences'
};

// ==============================================
// DOM Element IDs
// ==============================================

export const ELEMENT_IDS = {
  // Screens
  SCREEN_SPLASH: 'screen-splash',
  SCREEN_CATEGORIAS: 'screen-categorias',
  SCREEN_PRODUCTOS: 'screen-productos',
  SCREEN_RESUMEN: 'screen-resumen',
  SCREEN_CONFIRMACION: 'screen-confirmacion',
  
  // Components
  CART_PANEL: 'cart-panel',
  CART_FAB: 'cart-fab-btn',
  SEARCH_FAB: 'search-fab-btn',
  SEARCH_MODAL: 'search-modal',
  QTY_MODAL: 'qty-modal',
  DETAIL_MODAL: 'detail-modal',
  
  // Feedback
  ADD_FEEDBACK: 'add-feedback'
};

// ==============================================
// API Endpoints (if using API mode)
// ==============================================

export const API_ENDPOINTS = {
  CATEGORIES: '/api/categorias',
  PRODUCTS: '/api/productos',
  PRODUCT_DETAIL: '/api/productos/:id',
  SUBMIT_ORDER: '/api/pedidos'
};
