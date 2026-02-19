// ==============================================
// Dielca Kiosco — Bootstrap & Dependency Injection
// ==============================================
// This is the composition root. All concrete
// dependencies are wired here. To switch from
// static data to the live API, change `useApi`
// in src/config.js — nothing else needs editing.
// ==============================================

import { config } from './config.js';

// ---- Infrastructure ----
import { StaticProductoRepository } from './infrastructure/repositories/StaticProductoRepository.js';
import { ApiProductoRepository }    from './infrastructure/repositories/ApiProductoRepository.js';
import { InMemoryCartRepository }   from './infrastructure/repositories/InMemoryCartRepository.js';

// ---- Application ----
import { ProductoService } from './application/ProductoService.js';
import { CartService }     from './application/CartService.js';

// ---- UI ----
import { Router }            from './ui/Router.js';
import { IdleTimer }         from './ui/IdleTimer.js';
import { FabButton }         from './ui/components/FabButton.js';
import { CartPanel }         from './ui/components/CartPanel.js';
import { QtyModal }          from './ui/components/QtyModal.js';
import { DetailModal }       from './ui/components/DetailModal.js';
import { SearchModal }       from './ui/components/SearchModal.js';
import { SplashScreen }      from './ui/screens/SplashScreen.js';
import { CategoriasScreen }  from './ui/screens/CategoriasScreen.js';
import { ProductosScreen }   from './ui/screens/ProductosScreen.js';
import { ResumenScreen }     from './ui/screens/ResumenScreen.js';
import { ConfirmacionScreen } from './ui/screens/ConfirmacionScreen.js';

// ==============================================
// Dependency Injection
// ==============================================

// --- Repositories (single swap point) ---
const productoRepo = config.useApi
  ? new ApiProductoRepository(config.apiBaseUrl, config.apiToken)
  : new StaticProductoRepository();

const cartRepo = new InMemoryCartRepository();

// --- Services ---
const productoService = new ProductoService(productoRepo);
const cartService     = new CartService(cartRepo);

// --- Router ---
const router = new Router();

// ==============================================
// Wire-up
// ==============================================

// Track current category for back-navigation
let currentCatId = null;

// --- Modals ---
const qtyModal = new QtyModal(cartService, () => {
  showAddFeedback();
});

const detailModal = new DetailModal(productoService, (producto) => {
  qtyModal.open(producto);
});

// --- Search Modal ---
const searchModal = new SearchModal(
  productoService,
  router,
  (producto) => qtyModal.open(producto),
  (producto, cat) => detailModal.open(producto, cat),
);

// --- Cart Panel ---
const cartPanel = new CartPanel(cartService, router, {
  onOpen:  () => { fab.setCartPanelOpen(true);  searchModal.setOverlayOpen(true); },
  onClose: () => { fab.setCartPanelOpen(false); searchModal.setOverlayOpen(false); },
  onCheckout: () => {
    resumenScreen.render();
    router.go('resumen');
  },
});

// --- FAB ---
const fab = new FabButton(router, cartService, () => {
  if (cartPanel.isOpen()) cartPanel.close(); else cartPanel.open();
});

// --- Screens ---
const categoriasScreen = new CategoriasScreen(router, productoService, (catId) => {
  currentCatId = catId;
  router.go('productos');
  productosScreen.render(catId);
});

const productosScreen = new ProductosScreen(
  router,
  productoService,
  (producto) => qtyModal.open(producto),
  (producto, cat) => detailModal.open(producto, cat),
);

// Override back button to remember category
document.getElementById('productos-back')?.addEventListener('click', () => {
  router.go('categorias');
});

const resumenScreen = new ResumenScreen(router, cartService, ({ numPedido }) => {
  confirmacionScreen.show({ numPedido });
});

const confirmacionScreen = new ConfirmacionScreen(router, cartService, categoriasScreen);

// eslint-disable-next-line no-unused-vars
const splash = new SplashScreen(router, () => {
  categoriasScreen.render();
});

// eslint-disable-next-line no-unused-vars
const idleTimer = new IdleTimer(router, cartService, () => {
  cartPanel.close();
});

// React to route changes — start idle timer on each nav
router.onChange(() => idleTimer.reset());

// ==============================================
// Feedback toast
// ==============================================
function showAddFeedback() {
  const fb = document.getElementById('add-feedback');
  fb?.classList.add('show');
  setTimeout(() => fb?.classList.remove('show'), 1500);
}

// ==============================================
// Initial render
// ==============================================
router.go('splash');
