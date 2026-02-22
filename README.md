# 🏪 Dielca Kiosco

Terminal de pedidos táctil para Distribuidora Eléctrica Canaria. Aplicación web optimizada para pantallas táctiles de 32"+ que permite a los clientes navegar el catálogo y realizar pedidos de forma autónoma.

## � Estado del Proyecto

**Versión**: 2.2.0  
**Estado**: ✅ Producción (esperando integración API)  
**Última actualización**: Febrero 22, 2024

### Estadísticas de Código

- **Archivos JS**: 33 módulos | **~4,000 líneas** (Clean Architecture)
- **Archivos CSS**: 16 módulos | **~2,800 líneas** (modularizados)
- **Productos cargados**: 86 (datos estáticos)
- **Categorías**: 12 (con popularidad)
- **Dependencias**: 0 (100% vanilla JavaScript)

## 🚀 Características

- ✅ **Interfaz Táctil**: Optimizada para pantallas touch de alta resolución
- ✅ **Sin Teclado**: Navegación completa sin necesidad de teclado físico
- ✅ **Carrito Inteligente**: Panel deslizable con resumen en tiempo real
- ✅ **Búsqueda Rápida**: Busca instantánea en 86 productos
- ✅ **Clean Architecture**: Código modular y mantenible (Domain/Application/Infrastructure/UI)
- ✅ **CSS Modular**: 16 archivos CSS organizados (base/layout/components/pages)
- ✅ **HTML Modular**: Sistema TemplateManager para gestión de vistas
- ✅ **Modo Offline**: Funciona con datos estáticos locales
- ✅ **Auto-Reset**: Timer de inactividad (2 min) para retornar al inicio
- ✅ **Seguridad Kiosko**: Bloqueo de F5, F11, Dev Tools, Context Menu

## 📁 Estructura del Proyecto

```
dielca-kiosko/
├── index.html                    # Shell HTML minimalista (33 líneas)
├── src/                          # Código fuente JavaScript
│   ├── main.js                   # Punto de entrada y DI (156 líneas)
│   ├── config.js                 # ⚙️ Configuración (flag: useApi)
│   ├── constants.js              # Constantes centralizadas
│   │
│   ├── domain/                   # Entidades de dominio (4 archivos)
│   │   ├── Producto.js
│   │   ├── Categoria.js
│   │   ├── CartItem.js
│   │   └── IProductoRepository.js
│   │
│   ├── application/              # Servicios de aplicación (2 archivos)
│   │   ├── ProductoService.js
│   │   └── CartService.js
│   │
│   ├── infrastructure/           # Capa de infraestructura (3 archivos)
│   │   └── repositories/
│   │       ├── StaticProductoRepository.js    (actual, 86 productos)
│   │       ├── ApiProductoRepository.js       (listo para API)
│   │       └── InMemoryCartRepository.js
│   │
│   ├── ui/                       # Capa de presentación (15 archivos)
│   │   ├── Router.js             (navegación entre pantallas)
│   │   ├── IdleTimer.js          (reset automático)
│   │   ├── templates/            (TemplateManager modularizado)
│   │   │   ├── ScreenTemplates.js
│   │   │   ├── ComponentTemplates.js
│   │   │   └── TemplateManager.js
│   │   ├── components/           (modales, FAB, cart panel)
│   │   │   ├── FabButton.js
│   │   │   ├── CartPanel.js
│   │   │   ├── QtyModal.js
│   │   │   ├── DetailModal.js
│   │   │   └── SearchModal.js
│   │   └── screens/              (5 pantallas)
│   │       ├── SplashScreen.js
│   │       ├── CategoriasScreen.js
│   │       ├── ProductosScreen.js
│   │       ├── ResumenScreen.js
│   │       └── ConfirmacionScreen.js
│   │
│   ├── data/                     # Datos estáticos (5 archivos)
│   │   ├── categorias.js         (12 categorías)
│   │   ├── productos.js          (86 productos)
│   │   ├── productDetails.js     (specs de cada producto)
│   │   ├── categoriasPopularidad.js (orden UI)
│   │   └── icons.js              (iconografía)
│   │
│   └── utils/                    # Utilidades (1 archivo)
│       └── helpers.js
│
├── styles/                       # CSS modularizado (16 archivos)
│   ├── main-modular.css         # Entry point (importa todos)
│   ├── base/                    # Fundamentos (82 líneas)
│   │   ├── variables.css        (34: colores, spacing, animations)
│   │   ├── reset.css            (46: resets + app shell)
│   │   ├── animations.css       (placeholder)
│   │   └── utilities.css        (placeholder)
│   ├── layout/                  # Estructura (114 líneas)
│   │   ├── app-shell.css        (68: contenedor principal + screens)
│   │   └── grid.css             (46: grid systems)
│   ├── components/              # Componentes (1,794 líneas)
│   │   ├── buttons.css          (387: FAB, search, cart buttons)
│   │   ├── cards.css            (246: cards de productos)
│   │   ├── modals.css           (488: qty, detail, search modals)
│   │   └── cart.css             (673: cart panel + overlay)
│   └── pages/                   # Pantallas (818 líneas)
│       ├── splash.css           (136)
│       ├── categorias.css       (81)
│       ├── productos.css        (118)
│       ├── resumen.css          (172)
│       └── confirmacion.css     (311)
│
├── package.json                 # Scripts npm (dev, lint)
└── README.md                    # Este archivo
```

## 🏗️ Arquitectura

El proyecto sigue **Clean Architecture** con separación clara de capas:

```
┌──────────────────────────────────────┐
│      UI Layer (SplashScreen,         │
│    CategoriasScreen, etc.)           │
└──────────────────────────────────────┘
              ↓ (Router)
┌──────────────────────────────────────┐
│   Application Layer (ProductoService,│
│       CartService)                   │
└──────────────────────────────────────┘
              ↓ (DI)
┌──────────────────────────────────────┐
│    Domain Layer (Producto,           │
│   IProductoRepository interface)     │
└──────────────────────────────────────┘
              ↓ (polimorfismo)
┌──────────────────────────────────────┐
│   Infrastructure Layer              │
│   • StaticProductoRepository (actual)│
│   • ApiProductoRepository (lista)    │
│   • InMemoryCartRepository           │
└──────────────────────────────────────┘
```

### Principios

- **Single Responsibility**: Cada clase tiene un único propósito
- **Dependency Inversion**: Depender de abstracciones (interfaces), no de concretos
- **Separation of Concerns**: UI, lógica y datos totalmente separados
- **Testability**: Fácil de testear dadas las dependencias inyectables

## 🔧 Instalación y Uso

### Prerrequisitos

- Python 3.x o Node.js (para servidor de desarrollo)
- Navegador moderno (Chrome, Edge, Firefox)

### Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/dielca/dielca-kiosko.git
cd dielca-kiosko

# Iniciar servidor (Puerto 8080)
npm run dev

# Abrir en navegador
# http://localhost:8080
```

### Cambiar entre Datos Estáticos y API

Editar `src/config.js`:

```javascript
export const config = {
  // true = obtiene datos de API; false = usa datos estáticos locales
  useApi: false,
  
  // URL base de la API de Dielca (usado si useApi === true)
  apiBaseUrl: 'https://api.dielca.com/kiosko/v1',
  
  // Token Bearer opcional para autenticación
  apiToken: null,
};
```

**Cambiaremos a `useApi: true` una vez que la API esté disponible.**

## 🔌 Integración con API

### Estado Actual

- ✅ `ApiProductoRepository` implementado y listo
- ✅ Interfaz `IProductoRepository` para polimorfismo  
- ✅ Dependency Injection en `main.js`
- ⏳ API no disponible aún

### Contrato API Esperado

```javascript
// GET /categorias
[
  { id: 'cables', nombre: 'Cables', icon: '🔌' },
  // ... más categorías
]

// GET /productos/:categoriaId
[
  { id: 'prod-001', nombre: 'Cable Tipo 1', precio: 12.50, cantidad: 0, ... },
  // ... productos
]

// GET /productos/:id/detail
{
  especificaciones: [],
  compatibles: [],
  // ... más datos
}

// GET /categorias/popularidad (futuro)
['cables', 'aparamenta', 'iluminacion', ...]
```

### Próximos Pasos para API

1. Cambiar `useApi: true` en `src/config.js`
2. Proporcionar `apiBaseUrl` y opcional `apiToken`
3. Implementar manejo de errores mejorado
4. Agregar retry logic y timeout handlers

## 🎨 Personalización

### Colores y Branding

Editar `styles/base/variables.css`:

```css
:root {
  --azul: #0b61d0;           /* Color primario */
  --azul-dark: #07306a;      /* Color primario oscuro */
  --azul-light: #5aa0ff;     /* Color primario claro */
  --rojo: #d64545;           /* Color secundario */
  --rojo-dark: #a12b2b;      /* Color secundario oscuro */
  --blanco: #FFFFFF;
  --gris-claro: #f7f9fc;
  --gris: #9aa3b2;
  --texto: #0f1724;
  --radius: 12px;            /* Radio de bordes */
  /* ... más variables */
}
```

### Mensajes y Textos

Editar `src/constants.js`:

```javascript
export const MESSAGES = {
  WELCOME: 'Bienvenido a Dielca Kiosco',
  CART_EMPTY: 'Tu carrito está vacío',
  // ...
};
```

### Tiempos

```javascript
export const UI_CONSTANTS = {
  SPLASH_DURATION: 2000,     // Duración pantalla splash (ms)
  IDLE_TIMEOUT: 120000,      // Reset automático (ms)
  // ...
};
```

## 📱 Responsive Design

Optimizado para:
- **Kioscos 32"+**: 1920x1080px (primario)
- **Tablets**: 1024x768px
- **Desktop**: 1440x900px

## 🧪 Testing

```bash
# Verificar sintaxis
npm run lint
```

**Próximo**: Suite de tests con Jest o Vitest.

## 🚀 Despliegue

### GitHub Pages (gratis)

```bash
git push origin main
# Automático si está configurado en Settings → Pages
```

### Servidor Estático

Cualquier servidor HTTP:
- Apache
- Nginx
- Netlify / Vercel
- Zeit / Now

## 📊 Rendimiento

- **First Paint**: < 500ms
- **Interactivo**: < 1s
- **Bundle JS**: ~50KB (ES6)
- **Bundle CSS**: ~30KB
- **Dependencias externas**: 0

## 🔒 Seguridad Kiosko

Implementado:
- ✅ Bloqueo de F5/F11/F12
- ✅ Bloqueo de Ctrl+R/U/P/S
- ✅ Deshabilitar context menu
- ✅ Validación de entrada en búsquedas

Falta:
- ⏳ Integrar monitoring (Sentry)
- ⏳ Rate limiting en API

## ✅ Checklist de Próximas Tareas

### 🔴 Críticas (hacer primero)

- [ ] **API Integration** 
  - [ ] Contactar con backend para endpoints exactos
  - [ ] Cambiar `useApi: true` en config.js
  - [ ] Probar endpoints en desarrollo
  - [ ] Implementar timeout/retry handlers
  - [ ] Mostrar errores amigables al usuario

- [ ] **Actualizar orden de categorías**
  - [ ] Reemplazar array hardcodeado (`categoriasPopularidad.js`)
  - [ ] Implementar `GET /categorias/popularidad` desde API
  - [ ] Basarse en historial de ventas

### 🟡 Importantes

- [ ] **Testing**
  - [ ] Crear suite de tests unitarios (ProductoService, CartService)
  - [ ] Tests de integración para repositorios
  - [ ] Tests E2E para flujos críticos

- [ ] **Error Handling Mejorado**
  - [ ] Capturar errores de red en ApiProductoRepository
  - [ ] Mostrar modal de error con reintentos
  - [ ] Implementar exponential backoff

- [ ] **Persistencia de Carrito**
  - [ ] Guardar carrito en localStorage
  - [ ] Recuperar al recargar página
  - [ ] Validar consistencia con API

- [ ] **Performance**
  - [ ] Lazy loading de imágenes
  - [ ] Caching de productos/categorías
  - [ ] Minificación de JS y CSS

### 🟢 Mejoras

- [ ] **Deployment Automático**
  - [ ] Configurar GitHub Actions
  - [ ] Desplegar a GitHub Pages automático
  - [ ] Documentar ambiente de producion

- [ ] **Monitoreo**
  - [ ] Integrar error tracking (Sentry)
  - [ ] Analytics de uso del kiosko
  - [ ] Alertas de inactividad prolongada

- [ ] **Accesibilidad**
  - [ ] Agregar aria-labels
  - [ ] Modo alto contraste para luz exterior
  - [ ] Feedback visual mejorado

- [ ] **Documentación**
  - [ ] Guía de deployment
  - [ ] Documentación de desarrollo local
  - [ ] Guía de troubleshooting

## 🐛 Problemas Conocidos

### Ninguno identificado actualmente

Si encuentra problemas:
1. Verificar que `useApi` coincida con disponibilidad de API
2. Abrir las DevTools (pero están bloqueadas — comentar en index.html si necesita)
3. Revisar Network tab para errores de fetch

## 📝 Changelog

### v2.2.0 (Febrero 22, 2024) ✅

**CSS Modularization Complete**
- Distribuido monolítico main.css (1,710 líneas) a 16 módulos
- Estructura clara: base/ layout/ components/ pages/
- Entry point main-modular.css con solo 19 líneas de imports
- Sin duplicación, sin ciclos de dependencia
- Sintaxis CSS validada (16/16 archivos OK)

**Estadísticas**:
- 16 módulos CSS (~2,827 líneas)
- 33 módulos JavaScript (~3,998 líneas)
- 86 productos precargados
- 12 categorías con popularidad

### v2.1.0 (Febrero 20, 2024)

**HTML Modularization**
- HTML minimalista: 358 → 33 líneas
- TemplateManager para gestión de vistas
- Separación clara de templates (Screens vs Components)

### v2.0.0 (Febrero 2024)

**Arquitectura Completa**
- Clean Architecture con 4 capas
- Dependency Injection en main.js
- Repositorios intercambiables (Static vs API)
- 100% vanilla JavaScript

## 👥 Equipo

- **Desarrollo**: Dielca Tech Team
- **Refactorización**: Clean Architecture Sprint
- **Modularización CSS**: Feb 22, 2024
- **Modularización HTML**: Feb 20-22, 2024

---

**¿Listo para integración con API?** Contacta al equipo backend con los endpoints esperados.

**¿Necesitas ayuda?** Revisa los comentarios en el código — están bien documentados. 📖

