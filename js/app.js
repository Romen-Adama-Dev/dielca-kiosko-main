// =============================================
// DIELCA KIOSCO - Main App Logic
// =============================================

let currentScreen = 'splash';
let currentCategoriaId = null;
let cartOpen = false;
let addQtyModalData = null;

// ---- Navigation ----
function showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById('screen-' + name);
    if (target) {
        target.classList.add('active');
        currentScreen = name;
    }
}

// ---- Idle / Screensaver ----
let idleTimer = null;
function resetIdle() {
    clearTimeout(idleTimer);
    if (currentScreen !== 'splash') {
        idleTimer = setTimeout(() => {
            Cart.clear();
            closedCart();
            showScreen('splash');
        }, 120000); // 2 minutos sin actividad
    }
}
document.addEventListener('touchstart', resetIdle);
document.addEventListener('click', resetIdle);

// ---- Splash ----
function initSplash() {
    const btn = document.getElementById('splash-start');
    if (btn) {
        btn.addEventListener('click', () => {
            showScreen('categorias');
            resetIdle();
            renderCategorias();
        });
    }
    // También al tocar en cualquier parte del splash
    document.getElementById('screen-splash').addEventListener('click', () => {
        showScreen('categorias');
        resetIdle();
        renderCategorias();
    });
}

// ---- Categorías ----
function renderCategorias() {
    const grid = document.getElementById('categorias-grid');
    if (!grid) return;
    grid.innerHTML = '';
    CATEGORIAS.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'cat-card';
        card.style.setProperty('--cat-color', cat.color);
        card.innerHTML = `
      <div class="cat-icon">${cat.icono}</div>
      <div class="cat-name">${cat.nombre}</div>
      <div class="cat-desc">${cat.descripcion}</div>
    `;
        card.addEventListener('click', () => {
            currentCategoriaId = cat.id;
            showScreen('productos');
            renderProductos(cat.id);
        });
        grid.appendChild(card);
    });
}

// ---- Productos ----
function renderProductos(catId) {
    const cat = CATEGORIAS.find(c => c.id === catId);
    if (!cat) return;

    document.getElementById('productos-titulo').textContent = cat.nombre;
    document.getElementById('productos-back').onclick = () => showScreen('categorias');

    const grid = document.getElementById('productos-grid');
    grid.innerHTML = '';
    const prods = PRODUCTOS[catId] || [];

    prods.forEach(prod => {
        const icon = PRODUCTO_ICONS[prod.imagen] || PRODUCTO_ICONS.default;
        const stockClass = prod.stock ? '' : 'sin-stock';
        const card = document.createElement('div');
        card.className = `prod-card ${stockClass}`;
        card.innerHTML = `
      <div class="prod-icon">${icon}</div>
      <div class="prod-nombre">${prod.nombre}</div>
      <div class="prod-ref">Ref: ${prod.referencia}</div>
      <div class="prod-precio">${prod.precio.toFixed(2)} <span>€/${prod.unidad}</span></div>
      ${prod.stock
                ? `<button class="prod-add-btn" data-id="${prod.id}">
            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M12 4v16M4 12h16" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
            Añadir
           </button>`
                : `<div class="prod-nostock">Consultar stock</div>`
            }
    `;
        if (prod.stock) {
            card.querySelector('.prod-add-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                openQtyModal(prod);
            });
        }
        grid.appendChild(card);
    });
}

// ---- Modal de Cantidad ----
function openQtyModal(producto) {
    addQtyModalData = { producto, cantidad: producto.undMin };
    const modal = document.getElementById('qty-modal');
    const step = producto.undStep;

    document.getElementById('modal-prod-nombre').textContent = producto.nombre;
    document.getElementById('modal-prod-precio').textContent = producto.precio.toFixed(2) + ' €/' + producto.unidad;
    renderModalQty();

    // Botones presets
    const presets = document.getElementById('modal-presets');
    presets.innerHTML = '';
    const presetVals = getPresets(producto);
    presetVals.forEach(v => {
        const btn = document.createElement('button');
        btn.className = 'preset-btn';
        btn.textContent = v + ' ' + producto.unidad;
        btn.addEventListener('click', () => {
            addQtyModalData.cantidad = v;
            renderModalQty();
        });
        presets.appendChild(btn);
    });

    modal.classList.add('open');
}

function getPresets(producto) {
    const step = producto.undStep;
    const unidad = producto.unidad;
    if (unidad === 'metro') return [step, step * 5, step * 10, step * 25, step * 50, step * 100].filter((v, i, a) => a.indexOf(v) === i).slice(0, 6);
    if (unidad === 'ud') return [1, 2, 5, 10, 20, 50];
    if (unidad === 'rollo') return [1, 2, 5];
    return [step, step * 2, step * 5, step * 10];
}

function renderModalQty() {
    if (!addQtyModalData) return;
    const { producto, cantidad } = addQtyModalData;
    document.getElementById('modal-qty').textContent = cantidad + ' ' + producto.unidad;
    document.getElementById('modal-total').textContent = (producto.precio * cantidad).toFixed(2) + ' €';
}

function closeQtyModal() {
    document.getElementById('qty-modal').classList.remove('open');
    addQtyModalData = null;
}

function initQtyModal() {
    document.getElementById('modal-close').addEventListener('click', closeQtyModal);
    document.getElementById('modal-minus').addEventListener('click', () => {
        if (!addQtyModalData) return;
        const step = addQtyModalData.producto.undStep;
        const min = addQtyModalData.producto.undMin;
        addQtyModalData.cantidad = Math.max(min, addQtyModalData.cantidad - step);
        renderModalQty();
    });
    document.getElementById('modal-plus').addEventListener('click', () => {
        if (!addQtyModalData) return;
        const step = addQtyModalData.producto.undStep;
        addQtyModalData.cantidad += step;
        renderModalQty();
    });
    document.getElementById('modal-confirm').addEventListener('click', () => {
        if (!addQtyModalData) return;
        Cart.addItem(addQtyModalData.producto, addQtyModalData.cantidad);
        closeQtyModal();
        // Mostrar feedback
        showAddFeedback();
    });
    // Cerrar al tocar fuera
    document.getElementById('qty-modal').addEventListener('click', (e) => {
        if (e.target.id === 'qty-modal') closeQtyModal();
    });
}

function showAddFeedback() {
    const fb = document.getElementById('add-feedback');
    fb.classList.add('show');
    setTimeout(() => fb.classList.remove('show'), 1500);
}

// ---- Carrito ----
function openCart() {
    cartOpen = true;
    document.getElementById('cart-panel').classList.add('open');
    document.getElementById('cart-overlay').classList.add('show');
    Cart.renderCart();
}

function closedCart() {
    cartOpen = false;
    document.getElementById('cart-panel').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('show');
}

function initCart() {
    document.getElementById('cart-fab-btn').addEventListener('click', () => {
        if (cartOpen) closedCart(); else openCart();
    });
    document.getElementById('cart-overlay').addEventListener('click', closedCart);
    document.getElementById('cart-close-btn').addEventListener('click', closedCart);
    document.getElementById('cart-checkout-btn').addEventListener('click', () => {
        if (Cart.getItems().length === 0) return;
        closedCart();
        renderResumen();
        showScreen('resumen');
    });
}

// ---- Resumen ----
function renderResumen() {
    const list = document.getElementById('resumen-list');
    list.innerHTML = '';
    Cart.getItems().forEach(item => {
        const row = document.createElement('div');
        row.className = 'resumen-row';
        row.innerHTML = `
      <div class="resumen-nombre">${item.producto.nombre}</div>
      <div class="resumen-ref">Ref: ${item.producto.referencia}</div>
      <div class="resumen-qty">${item.cantidad} ${item.producto.unidad}</div>
      <div class="resumen-price">${(item.producto.precio * item.cantidad).toFixed(2)} €</div>
    `;
        list.appendChild(row);
    });
    document.getElementById('resumen-total').textContent = Cart.getTotal().toFixed(2) + ' €';
    document.getElementById('resumen-back').onclick = () => showScreen('productos');
}

function initResumen() {
    document.getElementById('resumen-confirmar').addEventListener('click', () => {
        const numPedido = 'DK-' + Date.now().toString().slice(-6);
        document.getElementById('confirm-numero').textContent = numPedido;
        showScreen('confirmacion');
        Cart.clear();
        // Volver al inicio tras 15 segundos
        setTimeout(() => {
            showScreen('splash');
        }, 15000);
    });
    document.getElementById('resumen-cancelar').addEventListener('click', () => {
        if (confirm('¿Cancelar el pedido completo?')) {
            Cart.clear();
            showScreen('categorias');
        }
    });
}

function initConfirmacion() {
    document.getElementById('confirm-nuevo').addEventListener('click', () => {
        showScreen('categorias');
        renderCategorias();
    });
}

// ---- Búsqueda rápida (opcional) ----
// Sin teclado, usamos filtrado por categoría visual únicamente

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
    initSplash();
    initQtyModal();
    initCart();
    initResumen();
    initConfirmacion();
    Cart.renderCart();
    showScreen('splash');
});
