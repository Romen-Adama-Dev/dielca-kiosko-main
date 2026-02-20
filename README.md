# 🏪 Dielca Kiosco

Terminal de pedidos táctil para Distribuidora Eléctrica Canaria. Aplicación web optimizada para pantallas táctiles de 32"+ que permite a los clientes navegar el catálogo y realizar pedidos de forma autónoma.

## 🚀 Características

- ✅ **Interfaz Táctil**: Optimizada para pantallas touch de alta resolución
- ✅ **Sin Teclado**: Navegación completa sin necesidad de teclado físico
- ✅ **Carrito Inteligente**: Panel deslizable con resumen en tiempo real
- ✅ **Búsqueda Rápida**: Búsqueda instantánea por categorías y productos
- ✅ **Clean Architecture**: Código modular y mantenible
- ✅ **CSS Modular**: 16 archivos CSS organizados (base/layout/components/pages)
- ✅ **HTML Modular**: Templates JavaScript separados por responsabilidad
- ✅ **Modo Offline**: Funciona con datos estáticos locales
- ✅ **Auto-Reset**: Timer de inactividad para retornar al inicio

## 📁 Estructura del Proyecto

```
dielca-kiosko/
├── index.html                    # Shell HTML minimalista (33 líneas)
├── src/                          # Código fuente JavaScript
│   ├── main.js                   # Punto de entrada y DI
│   ├── config.js                 # Configuración general
│   ├── constants.js              # Constantes centralizadas
│   │
│   ├── domain/                   # Entidades de dominio
│   │   ├── Producto.js
│   │   ├── Categoria.js
│   │   ├── CartItem.js
│   │   └── IProductoRepository.js
│   │
│   ├── application/              # Servicios de aplicación
│   │   ├── ProductoService.js
│   │   └── CartService.js
│   │
│   ├── infrastructure/           # Capa de infraestructura
│   │   └── repositories/
│   │       ├── StaticProductoRepository.js
│   │       ├── ApiProductoRepository.js
│   │       └── InMemoryCartRepository.js
│   │
│   ├── ui/                       # Capa de presentación
│   │   ├── Router.js
│   │   ├── IdleTimer.js
│   │   ├── templates/            # 🆕 Templates HTML modulares
│   │   │   ├── ScreenTemplates.js
│   │   │   ├── ComponentTemplates.js
│   │   │   └── TemplateManager.js
│   │   ├── components/
│   │   │   ├── FabButton.js
│   │   │   ├── CartPanel.js
│   │   │   ├── QtyModal.js
│   │   │   ├── DetailModal.js
│   │   │   └── SearchModal.js
│   │   └── screens/
│   │       ├── SplashScreen.js
│   │       ├── CategoriasScreen.js
│   │       ├── ProductosScreen.js
│   │       ├── ResumenScreen.js
│   │       └── ConfirmacionScreen.js
│   │
│   ├── data/                     # Datos estáticos
│   │   ├── categorias.js
│   │   ├── productos.js
│   │   ├── productDetails.js
│   │   └── icons.js
│   │
│   └── utils/                    # Utilidades
│       └── helpers.js
│
├── styles/                       # Estilos CSS modulares
│   ├── main-modular.css         # Archivo principal (importa todos)
│   ├── main.css                 # CSS original (legacy)
│   │
│   ├── base/                    # Fundamentos
│   │   ├── variables.css
│   │   ├── reset.css
│   │   ├── animations.css
│   │   └── utilities.css
│   │
│   ├── layout/                  # Estructura
│   │   ├── app-shell.css
│   │   └── grid.css
│   │
│   ├── components/              # Componentes
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── modals.css
│   │   └── cart.css
│   │
│   └── pages/                   # Páginas
│       ├── splash.css
│       ├── categorias.css
│       ├── productos.css
│       ├── resumen.css
│       └── confirmacion.css
│
├── assets/                      # Recursos estáticos
│   └── img/
│       └── logo-sin-fondo.png
│
├── index.html                   # HTML shell minimalista (33 líneas)
├── index-old-backup.html        # Backup del HTML original (358 líneas)
├── package.json                 # Configuración npm
├── README.md                    # Este archivo
├── REFACTORING.md              # Documentación de refactorización CSS
├── TEMPLATES.md                # 🆕 Documentación de templates HTML
└── HTML-MIGRATION.md           # 🆕 Guía de migración HTML
```

## 🏗️ Arquitectura

El proyecto sigue **Clean Architecture** con separación clara de capas:

```
┌─────────────────────────────────────────┐
│          UI Layer (Presentación)        │
│  • Screens: SplashScreen, etc.          │
│  • Components: Modals, Buttons, etc.    │
│  • Router: Navegación entre pantallas   │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│      Application Layer (Casos de Uso)   │
│  • ProductoService                       │
│  • CartService                           │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│       Domain Layer (Entidades)          │
│  • Producto, Categoria, CartItem        │
│  • IProductoRepository (Interface)      │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│   Infrastructure Layer (Datos)          │
│  • StaticProductoRepository             │
│  • ApiProductoRepository                │
│  • InMemoryCartRepository               │
└─────────────────────────────────────────┘
```

### Principios Aplicados

- **Single Responsibility**: Cada clase tiene una única responsabilidad
- **Open/Closed**: Abierto a extensión, cerrado a modificación
- **Dependency Inversion**: Dependencias apuntan a abstracciones
- **Separation of Concerns**: UI, lógica y datos separados

## 🔧 Instalación y Uso

### Prerrequisitos

- Python 3.x (para servidor de desarrollo)
- Navegador moderno (Chrome, Edge, Firefox)

### Desarrollo Local

```bash
# Clonar repositorio
git clone <repo-url>
cd dielca-kiosko

# Iniciar servidor de desarrollo
npm run dev

# Abrir en navegador
# http://localhost:8080
```

### Modo de Datos

Editar `src/config.js` para cambiar entre datos estáticos y API:

```javascript
export const config = {
  useApi: false,        // true = API, false = datos estáticos
  apiBaseUrl: 'https://api.dielca.com',
  apiToken: 'YOUR_TOKEN'
};
```

## 🎨 Personalización

### Colores y Branding

Editar variables en `styles/base/variables.css`:

```css
:root {
  --azul: #0b61d0;
  --azul-dark: #07306a;
  --rojo: #d64545;
  /* ... más variables */
}
```

### Tiempos y Duraciones

Editar constantes en `src/constants.js`:

```javascript
export const UI_CONSTANTS = {
  SPLASH_DURATION: 2000,
  IDLE_TIMEOUT: 120000,
  /* ... más constantes */
};
```

### Mensajes

Editar textos en `src/constants.js`:

```javascript
export const MESSAGES = {
  CART_EMPTY: 'Tu carrito está vacío',
  /* ... más mensajes */
};
```

## 📱 Responsive Design

La aplicación está optimizada para:
- **Kioscos**: 1920x1080px (primario)
- **Tablets**: 1024x768px
- **Desktop**: 1440x900px

## 🧪 Testing

```bash
# Lint JavaScript
npm run lint
```

## 🚀 Despliegue

### Producción

1. Subir archivos a servidor web
2. Configurar `src/config.js` con API en producción
3. Opcional: Build con Webpack/Vite para optimización

### Servidor Estático

Cualquier servidor HTTP funciona:
- Apache
- Nginx
- Netlify / Vercel
- GitHub Pages

## 📊 Rendimiento

- **First Paint**: < 1s
- **Interactivo**: < 2s
- **Bundle Size**: ~50KB (JS) + ~30KB (CSS)
- **Sin dependencias**: 100% vanilla JavaScript

## 🔒 Seguridad

- No almacena datos sensibles
- Validación client-side básica
- API requests con token (modo API)
- Input sanitization en búsquedas

## 🐛 Troubleshooting

### El carrito no suma totales
Verificar que el HTML tenga `id="cart-total"` en el elemento del total.

### Botones FAB no se ven
Revisar que no haya `position: fixed` duplicado en CSS.

### Animaciones no funcionan
Verificar que todas las `@keyframes` tengan llave de cierre `}`.

## 📝 Changelog

### v2.2.0 (2024-02-21) 🆕
- ✅ HTML modularizado en templates JavaScript (index.html: 358 → 33 líneas)
- ✅ Sistema TemplateManager para gestión de templates
- ✅ Templates separados por responsabilidad (Screens + Components)
- ✅ Documentación completa de templates (TEMPLATES.md + HTML-MIGRATION.md)

### v2.1.0 (2024-02-20)
- ✅ Refactorización CSS a 16 módulos
- ✅ Añadido sistema de constantes
- ✅ Creados helpers utilitarios
- ✅ Documentación completa

### v2.0.0 (2024-02)
- ✅ Reescritura completa a Clean Architecture
- ✅ Sistema de componentes modular
- ✅ Modo API + Modo Estático

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

Propiedad de Distribuidora Eléctrica Canaria. Uso interno.

## 👥 Autores

- **Desarrollo Inicial**: Dielca Team
- **Refactorización v2.0**: Clean Architecture Team
- **Refactorización v2.1**: CSS Modularization Team
- **Refactorización v2.2**: HTML Modularization Team 🆕

## 🙏 Agradecimientos

- Inter Font Family
- ES6 Modules
- Clean Architecture by Robert C. Martin

---

- [REFACTORING.md](./REFACTORING.md) - Documentación CSS modular
- [TEMPLATES.md](./TEMPLATES.md) - Documentación templates HTML 🆕
- [HTML-MIGRATION.md](./HTML-MIGRATION.md) - Guía de migración HTML 🆕
**¿Necesitas ayuda?** Consulta [REFACTORING.md](./REFACTORING.md) para más detalles técnicos.
