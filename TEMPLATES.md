# Templates - Sistema Modular de HTML

## 📋 Índice

1. [Visión General](#visión-general)
2. [Estructura de Archivos](#estructura-de-archivos)
3. [ScreenTemplates](#screentemplates)
4. [ComponentTemplates](#componenttemplates)
5. [TemplateManager](#templatemanager)
6. [Beneficios](#beneficios)
7. [Migración](#migración)

---

## Visión General

El sistema de templates modulariza el HTML que antes estaba en **index.html** (358 líneas) en archivos JavaScript separados y organizados. Esto sigue los principios de **Clean Architecture** aplicados al resto del proyecto.

### Antes vs Después

**Antes** (Monolítico):
```
index.html (358 líneas)
├── Todas las pantallas inline
├── Todos los modales inline
└── Todos los componentes inline
```

**Después** (Modular):
```
index.html (38 líneas) - Shell minimalista
src/ui/templates/
├── ScreenTemplates.js      - 5 pantallas
├── ComponentTemplates.js   - 6 componentes
└── TemplateManager.js      - Gestor de renderizado
```

---

## Estructura de Archivos

### `index.html` (38 líneas)

Shell mínimo que solo contiene:
- Metadatos (`<head>`)
- Contenedor vacío (`<div id="app">`)
- Import del script principal
- Scripts de hardening (kiosko)

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dielca Kiosco</title>
    <link rel="stylesheet" href="styles/main-modular.css">
</head>
<body>
    <div id="app"></div>
    <script type="module" src="src/main.js"></script>
</body>
</html>
```

### `src/ui/templates/ScreenTemplates.js` (175 líneas)

Contiene templates de las 5 pantallas principales:
- `splash()` - Pantalla de bienvenida
- `categorias()` - Grid de categorías
- `productos()` - Grid de productos
- `resumen()` - Resumen del pedido
- `confirmacion()` - Confirmación final

### `src/ui/templates/ComponentTemplates.js` (185 líneas)

Contiene templates de componentes reutilizables:
- `qtyModal()` - Modal de selección de cantidad
- `cartPanel()` - Panel lateral del carrito
- `fabButtons()` - Botones flotantes (búsqueda + carrito)
- `detailModal()` - Modal de detalle de producto
- `searchModal()` - Modal de búsqueda
- `addFeedback()` - Toast de feedback

### `src/ui/templates/TemplateManager.js` (90 líneas)

Gestor central que:
- Renderiza todos los templates al iniciar
- Proporciona API para manipular templates dinámicamente
- Centraliza la lógica de inyección de HTML

---

## ScreenTemplates

### API

```javascript
import { ScreenTemplates } from './ui/templates/ScreenTemplates.js';

// Obtener HTML de una pantalla
const html = ScreenTemplates.splash();
const html2 = ScreenTemplates.categorias();
```

### Pantallas Disponibles

#### 1. `splash()`

Pantalla de bienvenida con logo y botón de inicio.

```javascript
ScreenTemplates.splash()
```

**Elementos clave:**
- `#screen-splash` - Contenedor principal
- `#splash-start` - Botón de inicio
- `.splash-logo-img` - Logo DIELCA

---

#### 2. `categorias()`

Grid de categorías de productos.

```javascript
ScreenTemplates.categorias()
```

**Elementos clave:**
- `#screen-categorias` - Contenedor
- `#categorias-grid` - Grid renderizado por JS

---

#### 3. `productos()`

Grid de productos de una categoría.

```javascript
ScreenTemplates.productos()
```

**Elementos clave:**
- `#screen-productos` - Contenedor
- `#productos-back` - Botón volver
- `#productos-titulo` - Título de categoría
- `#productos-grid` - Grid renderizado por JS

---

#### 4. `resumen()`

Resumen del pedido con lista de items y total.

```javascript
ScreenTemplates.resumen()
```

**Elementos clave:**
- `#screen-resumen` - Contenedor
- `#resumen-list` - Lista de productos
- `#resumen-total` - Total del pedido
- `#resumen-confirmar` - Botón confirmar
- `#resumen-cancelar` - Botón cancelar

---

#### 5. `confirmacion()`

Pantalla de confirmación con número de pedido.

```javascript
ScreenTemplates.confirmacion()
```

**Elementos clave:**
- `#screen-confirmacion` - Contenedor
- `#confirm-numero` - Número de referencia
- `#confirm-nuevo` - Botón nuevo pedido

---

## ComponentTemplates

### API

```javascript
import { ComponentTemplates } from './ui/templates/ComponentTemplates.js';

// Obtener HTML de un componente
const html = ComponentTemplates.qtyModal();
```

### Componentes Disponibles

#### 1. `qtyModal()`

Modal interactivo para seleccionar cantidad de producto.

**Elementos clave:**
- `#qty-modal` - Contenedor modal
- `#modal-prod-nombre` - Nombre del producto
- `#modal-prod-precio` - Precio unitario
- `#modal-presets` - Botones de cantidad rápida
- `#modal-qty` - Display de cantidad actual
- `#modal-plus` / `#modal-minus` - Incrementar/decrementar
- `#modal-total` - Total de la línea
- `#modal-confirm` - Confirmar y añadir

---

#### 2. `cartPanel()`

Panel lateral deslizante con el carrito de compra.

**Elementos clave:**
- `#cart-overlay` - Overlay oscuro
- `#cart-panel` - Panel lateral
- `#cart-items-list` - Lista de productos
- `#cart-total` - Total del carrito
- `#cart-checkout-btn` - Ir a resumen
- `#cart-close-btn` - Cerrar panel

---

#### 3. `fabButtons()`

Botones flotantes de búsqueda y carrito.

**Elementos clave:**
- `#search-fab-btn` - FAB de búsqueda
- `#cart-fab-btn` - FAB del carrito
- `.cart-badge` - Badge con cantidad de items

---

#### 4. `detailModal()`

Modal de detalle técnico de producto.

**Elementos clave:**
- `#detail-modal` - Contenedor modal
- `#detail-nombre` - Nombre del producto
- `#detail-ref` - Referencia
- `#detail-specs` - Grid de especificaciones
- `#detail-compatibles` - Productos compatibles
- `#detail-add-btn` - Añadir al pedido

---

#### 5. `searchModal()`

Modal de búsqueda global.

**Elementos clave:**
- `#search-modal` - Contenedor modal
- `#search-input` - Input de búsqueda
- `#search-clear` - Botón limpiar
- `#search-results` - Resultados renderizados por JS
- `#search-close` - Cerrar modal

---

#### 6. `addFeedback()`

Toast de feedback visual al añadir productos.

**Elementos clave:**
- `#add-feedback` - Toast animado
- Aparece 1.5 segundos con clase `.show`

---

## TemplateManager

Clase estática que gestiona la inyección y manipulación de templates.

### API Completa

#### `initialize()`

Renderiza todos los templates en el DOM al iniciar la app.

```javascript
import { TemplateManager } from './ui/templates/TemplateManager.js';

// En main.js, como PRIMERA línea después de imports:
TemplateManager.initialize();
```

**¿Qué hace?**
1. Renderiza las 5 pantallas en `<div id="app">`
2. Añade los 6 componentes al `<body>`
3. Prepara el DOM para que los constructores de clases encuentren los elementos

---

#### `getScreen(screenName)`

Obtiene el HTML de una pantalla específica.

```javascript
const html = TemplateManager.getScreen('splash');
// Equivale a: ScreenTemplates.splash()
```

---

#### `getComponent(componentName)`

Obtiene el HTML de un componente específico.

```javascript
const html = TemplateManager.getComponent('qtyModal');
// Equivale a: ComponentTemplates.qtyModal()
```

---

#### `replace(elementId, html)`

Reemplaza un elemento del DOM completamente.

```javascript
// Reemplazar una pantalla entera
TemplateManager.replace('screen-productos', ScreenTemplates.productos());
```

---

#### `insert(containerId, html, position)`

Inserta HTML en una posición específica dentro de un contenedor.

```javascript
// Insertar al final (default)
TemplateManager.insert('productos-grid', cardHtml);

// Insertar al principio
TemplateManager.insert('productos-grid', cardHtml, 'afterbegin');

// Posiciones: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
```

---

#### `clear(elementId)`

Limpia el contenido de un elemento.

```javascript
TemplateManager.clear('productos-grid');
// Equivale a: document.getElementById('productos-grid').innerHTML = '';
```

---

## Beneficios

### 1. **Separación de Responsabilidades** (SOLID)

Antes:
```
index.html mezclaba:
├── Configuración de app (meta tags)
├── Estructura de pantallas
├── Estructura de componentes
└── Scripts de inicialización
```

Después:
```
index.html → Solo configuración y shell
ScreenTemplates → Solo pantallas
ComponentTemplates → Solo componentes
TemplateManager → Solo lógica de renderizado
```

---

### 2. **Mantenibilidad**

**Antes**: Para cambiar un modal → buscar en 358 líneas de HTML  
**Después**: `ComponentTemplates.js`, método `detailModal()` - 40 líneas

---

### 3. **Reutilización**

Los templates son funciones JavaScript, se pueden:
- Parametrizar fácilmente
- Componer entre sí
- Testear unitariamente
- Versionar independientemente

---

### 4. **Consistencia con la Arquitectura**

El resto del código ya sigue **Clean Architecture**:

```
✅ Infrastructure → Repositorios modulares
✅ Application → Servicios modulares
✅ UI/Components → Componentes modulares
✅ Styles → CSS modular (16 archivos)
✅ Templates → HTML modular (3 archivos) ← NUEVO
```

---

### 5. **Rendimiento** (Posibilidad futura)

Con templates modulares se puede:
- Lazy-load pantallas bajo demanda
- Pre-compilar templates en build
- Cachear templates en Service Workers
- Hacer code-splitting por ruta

---

## Migración

### Desde `index.html` Antiguo

Si tienes código que dependía del HTML inline:

**Antes:**
```html
<!-- index.html -->
<section class="screen" id="screen-splash">
  <!-- ... contenido inline ... -->
</section>
```

**Después:**
```javascript
// main.js
import { TemplateManager } from './ui/templates/TemplateManager.js';

// PRIMERA línea de código ejecutable:
TemplateManager.initialize();

// Ahora el resto del código funciona igual
const splash = new SplashScreen(router, ...);
```

---

### Cambios Mínimos Necesarios

1. **Actualizar `index.html`** → Usar versión minimalista (38 líneas)

2. **Actualizar `main.js`** → Añadir una línea:
   ```javascript
   import { TemplateManager } from './ui/templates/TemplateManager.js';
   TemplateManager.initialize(); // ← ANTES de instanciar componentes
   ```

3. **Sin cambios** en:
   - Servicios (CartService, ProductoService)
   - Repositorios
   - Screens
   - Components
   - Estilos

---

### Verificación Post-Migración

```bash
# Verificar que no hay errores en consola
# Abrir DevTools → Console

# Verificar que todos los elementos se renderizan:
document.querySelector('#screen-splash')        // ✓
document.querySelector('#screen-categorias')    // ✓
document.querySelector('#qty-modal')            // ✓
document.querySelector('#cart-panel')           // ✓
```

---

## Uso Avanzado

### 1. Templates Parametrizados

```javascript
// En futuras mejoras, puedes parametrizar:
export const ScreenTemplates = {
  productos: (titulo = 'Productos') => `
    <section class="screen" id="screen-productos">
      <h2>${titulo}</h2>
      <!-- ... -->
    </section>
  `
};
```

---

### 2. Composición de Templates

```javascript
const modal = (content) => `
  <div class="modal">
    ${content}
  </div>
`;

export const ComponentTemplates = {
  qtyModal: () => modal(`
    <div class="qty-modal-box">
      <!-- ... -->
    </div>
  `)
};
```

---

### 3. Lazy Loading (Futuro)

```javascript
// Cargar pantallas bajo demanda
class Router {
  async go(route) {
    if (!document.querySelector(`#screen-${route}`)) {
      const html = await TemplateManager.loadScreen(route);
      TemplateManager.insert('app', html);
    }
    // ...
  }
}
```

---

## Resumen Ejecutivo

| Concepto | Descripción |
|----------|-------------|
| **Problema** | `index.html` monolítico (358 líneas) dificulta mantenimiento |
| **Solución** | Sistema modular de templates en JavaScript |
| **Archivos** | `ScreenTemplates.js`, `ComponentTemplates.js`, `TemplateManager.js` |
| **Beneficios** | Mantenibilidad ⬆️, Separación ⬆️, Consistencia ⬆️ |
| **Migración** | Actualizar `index.html` + 1 línea en `main.js` |
| **Compatibilidad** | ✅ 100% compatible con código existente |

---

## Ejemplo Completo

```javascript
// main.js - Orden de inicialización

import { TemplateManager } from './ui/templates/TemplateManager.js';
import { SplashScreen } from './ui/screens/SplashScreen.js';
import { Router } from './ui/Router.js';

// 1. Renderizar templates (PRIMERO)
TemplateManager.initialize();

// 2. Instanciar componentes (DESPUÉS)
const router = new Router();
const splash = new SplashScreen(router, ...);

// 3. Iniciar app
router.go('splash');
```

---

**Autor**: GitHub Copilot  
**Fecha**: 2024  
**Proyecto**: Dielca Kiosco - Clean Architecture Refactorization  
**Versión**: 2.0 (Modular Templates)
