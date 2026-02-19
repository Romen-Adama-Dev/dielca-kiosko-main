// =============================================
// DIELCA KIOSCO - Cart Module
// =============================================

const Cart = (() => {
    let items = []; // { producto, cantidad }

    function addItem(producto, cantidad) {
        const existing = items.find(i => i.producto.id === producto.id);
        if (existing) {
            existing.cantidad += cantidad;
        } else {
            items.push({ producto, cantidad });
        }
        renderCart();
        animateCartButton();
    }

    function removeItem(productoId) {
        items = items.filter(i => i.producto.id !== productoId);
        renderCart();
    }

    function updateQty(productoId, delta) {
        const item = items.find(i => i.producto.id === productoId);
        if (!item) return;
        item.cantidad = Math.max(item.producto.undMin, item.cantidad + delta);
        if (item.cantidad <= 0) {
            removeItem(productoId);
        } else {
            renderCart();
        }
    }

    function getItems() { return items; }

    function getTotal() {
        return items.reduce((sum, i) => sum + (i.producto.precio * i.cantidad), 0);
    }

    function getCount() {
        return items.reduce((sum, i) => sum + i.cantidad, 0);
    }

    function clear() {
        items = [];
        renderCart();
    }

    function animateCartButton() {
        const btn = document.querySelector('.cart-fab');
        if (!btn) return;
        btn.classList.add('bounce');
        setTimeout(() => btn.classList.remove('bounce'), 400);
    }

    function renderCart() {
        const badge = document.querySelector('.cart-badge');
        if (badge) {
            const count = items.length;
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        }

        const list = document.getElementById('cart-items-list');
        if (!list) return;
        list.innerHTML = '';

        if (items.length === 0) {
            list.innerHTML = `<div class="cart-empty">
        <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
          <path d="M10 10h6l8 30h26l6-20H20" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
          <circle cx="28" cy="50" r="3" fill="#ccc"/>
          <circle cx="44" cy="50" r="3" fill="#ccc"/>
        </svg>
        <p>Carrito vacío</p>
      </div>`;
            updateCartTotal();
            return;
        }

        items.forEach(item => {
            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
        <div class="cart-item-info">
          <div class="cart-item-name">${item.producto.nombre}</div>
          <div class="cart-item-ref">${item.producto.referencia}</div>
          <div class="cart-item-price">${(item.producto.precio * item.cantidad).toFixed(2)} €</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn minus" data-id="${item.producto.id}" data-step="${item.producto.undStep}">−</button>
          <span class="qty-val">${item.cantidad} <small>${item.producto.unidad}</small></span>
          <button class="qty-btn plus" data-id="${item.producto.id}" data-step="${item.producto.undStep}">+</button>
        </div>
        <button class="cart-item-remove" data-id="${item.producto.id}">✕</button>
      `;
            list.appendChild(el);
        });

        // Bind controls
        list.querySelectorAll('.qty-btn.plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const step = parseInt(btn.dataset.step) || 1;
                updateQty(btn.dataset.id, step);
            });
        });
        list.querySelectorAll('.qty-btn.minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const step = parseInt(btn.dataset.step) || 1;
                updateQty(btn.dataset.id, -step);
            });
        });
        list.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', () => removeItem(btn.dataset.id));
        });

        updateCartTotal();
    }

    function updateCartTotal() {
        const totalEl = document.getElementById('cart-total');
        if (totalEl) totalEl.textContent = getTotal().toFixed(2) + ' €';
    }

    return { addItem, removeItem, updateQty, getItems, getTotal, getCount, clear, renderCart };
})();
