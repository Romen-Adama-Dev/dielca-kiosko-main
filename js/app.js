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
        const hasDetails = !!PRODUCT_DETAILS[prod.id];
        const details = PRODUCT_DETAILS[prod.id] || {};
        const card = document.createElement('div');
        card.className = `prod-card ${stockClass}`;
        card.innerHTML = `
      ${hasDetails ? `<button class="prod-info-btn" data-id="${prod.id}" aria-label="Ver especificaciones">ⓘ</button>` : ''}
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
        if (hasDetails) {
            card.querySelector('.prod-info-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                openDetailModal(prod, cat);
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

// ---- Modal de Detalle de Producto ----
let detailProduct = null;

function openDetailModal(producto, cat) {
    detailProduct = producto;
    const details = PRODUCT_DETAILS[producto.id] || {};
    const modal = document.getElementById('detail-modal');

    // Cabecera
    document.getElementById('detail-icon').innerHTML = PRODUCTO_ICONS[producto.imagen] || PRODUCTO_ICONS.default;
    document.getElementById('detail-cat').textContent = cat ? cat.nombre : '';
    document.getElementById('detail-nombre').textContent = producto.nombre;
    document.getElementById('detail-ref').textContent = 'Ref: ' + producto.referencia + '  ·  ' + producto.precio.toFixed(2) + ' €/' + producto.unidad;

    // Specs
    const specsEl = document.getElementById('detail-specs');
    specsEl.innerHTML = '';
    const specs = details.specs || [];
    if (specs.length === 0) {
        specsEl.innerHTML = '<p style="color:var(--gris);font-size:14px;">Sin especificaciones disponibles.</p>';
    } else {
        specs.forEach(s => {
            const item = document.createElement('div');
            item.className = 'detail-spec-item';
            item.innerHTML = `<div class="detail-spec-label">${s.label}</div><div class="detail-spec-value">${s.value}</div>`;
            specsEl.appendChild(item);
        });
    }

    // Compatibles
    const compatSection = document.getElementById('detail-compatible-section');
    const compatList = document.getElementById('detail-compatibles');
    compatList.innerHTML = '';
    if (details.compatibles && details.compatibles.length > 0) {
        compatSection.style.display = '';
        details.compatibles.forEach(c => {
            const item = document.createElement('div');
            item.className = 'detail-compat-item';
            item.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
            stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <div><strong>${c.nombre}</strong><br><span style="font-size:12px;font-weight:500;color:var(--gris)">${c.motivo}</span></div>
      `;
            compatList.appendChild(item);
        });
    } else {
        compatSection.style.display = 'none';
    }

    // Disclaimer
    const disclaimerEl = document.getElementById('detail-disclaimer');
    const disclaimerText = document.getElementById('detail-disclaimer-text');
    if (details.disclaimer) {
        disclaimerEl.style.display = 'flex';
        disclaimerText.textContent = details.disclaimer;
    } else {
        disclaimerEl.style.display = 'none';
    }

    // Botón añadir
    const addBtn = document.getElementById('detail-add-btn');
    if (producto.stock) {
        addBtn.disabled = false;
        addBtn.style.opacity = '1';
        addBtn.textContent = '';
        addBtn.innerHTML = `
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-10 2a2 2 0 100 4 2 2 0 000-4z"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Añadir al pedido
    `;
    } else {
        addBtn.disabled = true;
        addBtn.style.opacity = '0.4';
        addBtn.innerHTML = 'Sin stock — consultar disponibilidad';
    }

    modal.classList.add('open');
}

function closeDetailModal() {
    document.getElementById('detail-modal').classList.remove('open');
    detailProduct = null;
}

function initDetailModal() {
    document.getElementById('detail-close').addEventListener('click', closeDetailModal);
    document.getElementById('detail-modal').addEventListener('click', (e) => {
        if (e.target.id === 'detail-modal') closeDetailModal();
    });
    document.getElementById('detail-add-btn').addEventListener('click', () => {
        if (!detailProduct || !detailProduct.stock) return;
        closeDetailModal();
        openQtyModal(detailProduct);
    });
}

// ---- Carrito ----
function openCart() {
    cartOpen = true;
    document.getElementById('cart-panel').classList.add('open');
    document.getElementById('cart-overlay').classList.add('show');
    Cart.renderCart();
    // Deshabilitar "Ver resumen" si ya estamos en la pantalla de resumen
    const checkoutBtn = document.getElementById('cart-checkout-btn');
    if (checkoutBtn) {
        const onResumen = currentScreen === 'resumen';
        checkoutBtn.disabled = onResumen;
        checkoutBtn.style.opacity = onResumen ? '0.4' : '1';
        checkoutBtn.style.cursor = onResumen ? 'not-allowed' : 'pointer';
        checkoutBtn.title = onResumen ? 'Ya estás viendo el resumen del pedido' : '';
    }
    // ocultar botón flotante del carrito para que no quede encima del panel
    const fab = document.getElementById('cart-fab-btn');
    if (fab) fab.style.display = 'none';
}

function closedCart() {
    cartOpen = false;
    document.getElementById('cart-panel').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('show');
    // restaurar visibilidad del FAB salvo en pantallas donde debe permanecer oculto
    const fab = document.getElementById('cart-fab-btn');
    if (fab) {
        const active = document.querySelector('.screen.active');
        const hide = active && ['screen-splash', 'screen-confirmacion'].includes(active.id);
        fab.style.display = hide ? 'none' : 'flex';
    }
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

    if (Cart.getItems().length === 0) {
        showScreen('categorias');
        return;
    }

    Cart.getItems().forEach(item => {
        const row = document.createElement('div');
        row.className = 'resumen-row';
        const step = item.producto.undStep || 1;
        row.innerHTML = `
      <div>
        <div class="resumen-nombre">${item.producto.nombre}</div>
        <div class="resumen-ref">Ref: ${item.producto.referencia}</div>
      </div>
      <div class="resumen-qty-ctrl">
        <button class="resumen-qty-btn minus" data-id="${item.producto.id}" data-step="${step}">−</button>
        <span class="resumen-qty-val">${item.cantidad} <small>${item.producto.unidad}</small></span>
        <button class="resumen-qty-btn plus" data-id="${item.producto.id}" data-step="${step}">+</button>
      </div>
      <div class="resumen-price">${(item.producto.precio * item.cantidad).toFixed(2)} €</div>
      <button class="resumen-remove" data-id="${item.producto.id}" aria-label="Eliminar producto">✕</button>
    `;
        list.appendChild(row);
    });

    // Bind controles
    list.querySelectorAll('.resumen-qty-btn.plus').forEach(btn => {
        btn.addEventListener('click', () => {
            Cart.updateQty(btn.dataset.id, parseInt(btn.dataset.step) || 1);
            renderResumen();
        });
    });
    list.querySelectorAll('.resumen-qty-btn.minus').forEach(btn => {
        btn.addEventListener('click', () => {
            Cart.updateQty(btn.dataset.id, -(parseInt(btn.dataset.step) || 1));
            renderResumen();
        });
    });
    list.querySelectorAll('.resumen-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            Cart.removeItem(btn.dataset.id);
            renderResumen();
        });
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
    initDetailModal();
    initCart();
    initResumen();
    initConfirmacion();
    Cart.renderCart();
    showScreen('splash');
});
