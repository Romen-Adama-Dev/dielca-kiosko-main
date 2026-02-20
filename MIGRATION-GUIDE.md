# 🚀 Guía Rápida de Migración

## Para empezar a usar la nueva estructura modular

### Paso 1: Actualizar HTML ✅

Ya está hecho! En [index.html](index.html#L14-L18) se cambió:

```html
<!-- ANTES -->
<link rel="stylesheet" href="styles/main.css">

<!-- DESPUÉS -->
<link rel="stylesheet" href="styles/main-modular.css">
```

### Paso 2: Verificar Funcionamiento

1. Abrir la aplicación en el navegador
2. Verificar que todos los estilos se carguen correctamente
3. Probar navegación entre pantallas
4. Verificar botones flotantes (carrito y búsqueda)
5. Revisar modales y animaciones

✅ Si todo funciona igual, ¡migración exitosa!

---

## Cómo Usar las Nuevas Utilidades

### 1. Importar Helpers

```javascript
// En cualquier archivo .js
import { formatCurrency, debounce, getById } from './utils/helpers.js';

// Usar
const precio = formatCurrency(15990);  // "$15.990"
const element = getById('cart-panel');
```

### 2. Importar Constantes

```javascript
import { UI_CONSTANTS, MESSAGES, ROUTES } from './constants.js';

// Usar timings
setTimeout(callback, UI_CONSTANTS.TOAST_DURATION);

// Usar mensajes
showToast(MESSAGES.CART_ADDED);

// Usar rutas
router.go(ROUTES.CATEGORIAS);
```

### 3. Ejemplo Completo

```javascript
// src/ui/components/MiComponente.js
import { MESSAGES, UI_CONSTANTS } from '../../constants.js';
import { formatCurrency, getById, addClass } from '../../utils/helpers.js';

export class MiComponente {
  constructor() {
    this._el = getById('mi-componente');
    this._render();
  }

  _render() {
    const precio = formatCurrency(15990);
    addClass(this._el, 'active');
    
    setTimeout(() => {
      alert(MESSAGES.CART_ADDED);
    }, UI_CONSTANTS.ANIMATION_NORMAL);
  }
}
```

---

## Cheat Sheet - Archivos CSS

### ¿Dónde modificar cada tipo de estilo?

| Necesito cambiar...           | Archivo                     |
|-------------------------------|-----------------------------|
| **Colores de marca**          | `base/variables.css`        |
| **Reset/normalize**           | `base/reset.css`            |
| **Animaciones/keyframes**     | `base/animations.css`       |
| **Clases utilitarias**        | `base/utilities.css`        |
| **Layout de pantallas**       | `layout/app-shell.css`      |
| **Grids responsive**          | `layout/grid.css`           |
| **Botones (todos)**           | `components/buttons.css`    |
| **Cards productos/categorías**| `components/cards.css`      |
| **Modales**                   | `components/modals.css`     |
| **Panel del carrito**         | `components/cart.css`       |
| **Pantalla inicial**          | `pages/splash.css`          |
| **Lista de categorías**       | `pages/categorias.css`      |
| **Lista de productos**        | `pages/productos.css`       |
| **Checkout/resumen**          | `pages/resumen.css`         |
| **Confirmación de pedido**    | `pages/confirmacion.css`    |

---

## Ejemplos de Modificación

### Cambiar el color principal

```css
/* styles/base/variables.css */
:root {
  --azul: #0b61d0;        /* ← Cambiar aquí */
  --azul-dark: #07306a;   /* ← Y aquí */
  --azul-light: #5aa0ff;  /* ← Y aquí */
}
```

✅ **Efecto:** Se actualiza en toda la app

### Ajustar tiempo de inactividad

```javascript
// src/constants.js
export const UI_CONSTANTS = {
  IDLE_TIMEOUT: 120000,  // ← Cambiar aquí (en ms)
  // 120000 = 2 minutos
  // 180000 = 3 minutos
  // 300000 = 5 minutos
};
```

### Personalizar mensajes

```javascript
// src/constants.js
export const MESSAGES = {
  CART_EMPTY: 'Tu carrito está vacío',  // ← Cambiar aquí
  CART_ADDED: '¡Producto añadido!',     // ← O aquí
  // etc...
};
```

### Añadir nueva animación

```css
/* styles/base/animations.css */

/* Añadir al final */
@keyframes mi-animacion {
  0% { transform: scale(0); }
  100% { transform: scale(1); }
}
```

Luego usar en cualquier componente:
```css
.mi-elemento {
  animation: mi-animacion 0.3s ease;
}
```

---

## Añadir Nuevo Componente

### 1. Crear archivo CSS

```bash
# Crear archivo
touch styles/components/mi-componente.css
```

```css
/* styles/components/mi-componente.css */

.mi-componente {
  background: white;
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--sombra);
}

.mi-componente:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}
```

### 2. Importar en main-modular.css

```css
/* styles/main-modular.css */

/* ... imports existentes ... */

/* COMPONENTS */
@import './components/buttons.css';
@import './components/cards.css';
@import './components/modals.css';
@import './components/cart.css';
@import './components/mi-componente.css';  /* ← Añadir aquí */
```

### 3. Crear clase JavaScript (opcional)

```javascript
// src/ui/components/MiComponente.js
import { getById } from '../../utils/helpers.js';

export class MiComponente {
  constructor() {
    this._el = getById('mi-componente');
    this._init();
  }

  _init() {
    // Lógica del componente
  }
}
```

✅ **¡Listo!** Componente creado y funcionando

---

## Añadir Nueva Página

### 1. Crear archivo CSS

```css
/* styles/pages/mi-pagina.css */

#screen-mi-pagina {
  background: var(--gris-claro);
}

.mi-pagina-titulo {
  font-size: 32px;
  font-weight: 800;
  color: var(--texto);
}

/* ... más estilos ... */
```

### 2. Importar

```css
/* styles/main-modular.css */

/* PAGES */
@import './pages/splash.css';
@import './pages/categorias.css';
@import './pages/productos.css';
@import './pages/resumen.css';
@import './pages/confirmacion.css';
@import './pages/mi-pagina.css';  /* ← Añadir aquí */
```

### 3. Crear Screen JavaScript

```javascript
// src/ui/screens/MiPaginaScreen.js
export class MiPaginaScreen {
  constructor(router) {
    this._router = router;
    this._el = document.getElementById('screen-mi-pagina');
  }

  render() {
    // Renderizar contenido
    this._router.show('mi-pagina');
  }
}
```

### 4. Registrar en Router

```javascript
// src/main.js
import { MiPaginaScreen } from './ui/screens/MiPaginaScreen.js';

// ...
const miPaginaScreen = new MiPaginaScreen(router);
```

✅ **Nueva página integrada!**

---

## Testing Rápido

### Verificar que todo funciona:

```bash
# 1. Iniciar servidor
npm run dev

# 2. Abrir en navegador
http://localhost:8080

# 3. Checklist:
# ☐ Splash screen se ve bien
# ☐ Categorías cargan correctamente
# ☐ Productos se muestran
# ☐ Botones FAB aparecen (carrito y lupa)
# ☐ Carrito se abre/cierra
# ☐ Búsqueda funciona
# ☐ Modales abren/cierran
# ☐ Animaciones fluidas
# ☐ No hay errores en consola
```

---

## Troubleshooting

### Los estilos no se cargan

**Problema:** Algunos estilos no aparecen

**Solución:** Verificar que `main-modular.css` esté importado en HTML:
```html
<link rel="stylesheet" href="styles/main-modular.css">
```

### Error: Cannot find module

**Problema:** `Error: Cannot find module './utils/helpers.js'`

**Solución:** Verificar ruta relativa del import:
```javascript
// Desde src/ui/components/
import { ... } from '../../utils/helpers.js';

// Desde src/ui/screens/
import { ... } from '../../utils/helpers.js';

// Desde src/application/
import { ... } from '../utils/helpers.js';
```

### Animaciones no funcionan

**Problema:** Las animaciones se ven "cortadas"

**Solución:** Verificar que `base/animations.css` esté importado:
```css
/* main-modular.css */
@import './base/animations.css';  /* ← Debe estar */
```

---

## Próximos Pasos Recomendados

### Corto Plazo (1-2 semanas)
- [ ] Probar en producción
- [ ] Capacitar al equipo en nueva estructura
- [ ] Documentar convenciones de código

### Mediano Plazo (1-2 meses)
- [ ] Implementar tests unitarios
- [ ] Configurar CI/CD
- [ ] Optimizar bundle (Webpack/Vite)

### Largo Plazo (3-6 meses)
- [ ] Migrar a TypeScript
- [ ] Implementar PWA
- [ ] Añadir analytics

---

## Recursos

- 📖 [README.md](README.md) - Documentación principal
- 📋 [REFACTORING.md](REFACTORING.md) - Detalles técnicos
- 📊 [COMPARISON.md](COMPARISON.md) - Antes vs Después

---

## Soporte

¿Dudas sobre la migración? Consulta la documentación o contacta al equipo.

**¡Bienvenido a Clean Architecture!** 🎉
