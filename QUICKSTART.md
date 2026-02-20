# ⚡ Inicio Rápido - 5 Minutos

## 🎯 Lo Esencial

Este proyecto ha sido completamente refactorizado con **Clean Architecture**. Aquí está todo lo que necesitas saber en 5 minutos.

---

## 📂 Estructura (Lo Importante)

```
dielca-kiosko/
│
├── 📁 src/                      ← JAVASCRIPT
│   ├── constants.js             ← Constantes centralizadas ⭐
│   ├── utils/helpers.js         ← Funciones útiles ⭐
│   ├── domain/                  ← Entidades
│   ├── application/             ← Servicios
│   ├── infrastructure/          ← Repositorios
│   └── ui/                      ← Componentes y pantallas
│
├── 📁 styles/                   ← CSS MODULAR ⭐
│   ├── main-modular.css         ← Punto de entrada
│   ├── base/                    ← Variables, reset, animaciones
│   ├── layout/                  ← App shell, grids
│   ├── components/              ← Botones, cards, modales
│   └── pages/                   ← Splash, categorías, etc.
│
└── 📁 docs/                     ← DOCUMENTACIÓN
    ├── INDEX.md                 ← Índice completo
    ├── README.md                ← Léeme primero
    └── ...                      ← Más guías
```

---

## 🚀 Empezar en 3 Pasos

### 1. Instalar y Correr
```bash
npm run dev
```
Abre: http://localhost:8080

### 2. ¿Funciona todo?
✅ Splash screen  
✅ Categorías  
✅ Productos  
✅ Carrito  
✅ Búsqueda  
✅ Botones flotantes  

### 3. ¡Listo! 🎉

---

## 🎨 Cambios Rápidos

### Cambiar Color Principal
```css
/* styles/base/variables.css */
:root {
  --azul: #0b61d0;  /* ← Cambiar aquí */
}
```

### Cambiar Tiempo de Inactividad
```javascript
// src/constants.js
IDLE_TIMEOUT: 120000,  // 2 min (en ms)
```

### Añadir Mensaje
```javascript
// src/constants.js
MESSAGES = {
  MI_MENSAJE: 'Hola mundo',  // ← Añadir aquí
}
```

---

## 💡 Helpers Útiles

```javascript
import { formatCurrency, getById } from './utils/helpers.js';

// Formatear precio
formatCurrency(15990);  // "$15.990"

// Obtener elemento
const panel = getById('cart-panel');

// Y mucho más... ver src/utils/helpers.js
```

---

## 📖 ¿Necesitas Más Info?

### Lee en este orden:
1. **5 min** → [SUMMARY.md](SUMMARY.md) - ¿Qué se hizo?
2. **10 min** → [README.md](README.md) - Overview completo
3. **10 min** → [MIGRATION-GUIDE.md](MIGRATION-GUIDE.md) - Cómo hacer cambios

### Documentación completa:
→ [INDEX.md](INDEX.md) - Índice de toda la documentación

---

## 🔧 Modificar Estilos

| Quiero cambiar...     | Archivo                      |
|-----------------------|------------------------------|
| Colores               | `base/variables.css`         |
| Botones               | `components/buttons.css`     |
| Carrito               | `components/cart.css`        |
| Pantalla de inicio    | `pages/splash.css`           |
| Lista de productos    | `pages/productos.css`        |

---

## ✅ Checklist Diario

Antes de hacer cambios:
- [ ] Sé en qué archivo modificar (ver tabla arriba)
- [ ] Conozco los helpers disponibles (`src/utils/helpers.js`)
- [ ] Uso variables CSS en vez de valores hardcoded
- [ ] Reviso que todo funcione después del cambio

---

## 🆘 Problemas Comunes

### Los estilos no se ven
→ Verifica que `index.html` tenga:
```html
<link rel="stylesheet" href="styles/main-modular.css">
```

### Error "Cannot find module"
→ Verifica la ruta relativa del import

### Botones FAB no aparecen
→ Ver [MIGRATION-GUIDE.md](MIGRATION-GUIDE.md#troubleshooting)

---

## 📞 Ayuda

- 🐛 **Bug?** → Revisa console del navegador
- ❓ **Duda?** → Lee [INDEX.md](INDEX.md) para encontrar doc relevante
- 🔧 **Feature nueva?** → [MIGRATION-GUIDE.md](MIGRATION-GUIDE.md)

---

## 🎯 Objetivos Cumplidos

✅ **CSS modular** - 16 archivos organizados  
✅ **Helpers reutilizables** - 20+ funciones  
✅ **Constantes centralizadas** - Todo en un lugar  
✅ **Documentación completa** - 7 archivos MD  
✅ **Clean Architecture** - Código profesional  

---

**¡Todo listo para desarrollar!** 🚀

**Tiempo de lectura:** 3-5 minutos  
**Próximo paso:** [README.md](README.md) para más detalles
