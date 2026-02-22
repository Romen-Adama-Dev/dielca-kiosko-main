# 📋 Checklist de Tareas Pendientes

Documento actualizado: **Febrero 22, 2024**

---

## 🔴 Críticas (Bloquean deployment)

### 1. API Integration

**Estado**: ⏳ Esperando API del backend

**Tareas:**

- [ ] **1.1 Contactar backend**
  - [ ] Solicitar endpoints exactos
  - [ ] Validar esquema JSON de respuestas
  - [ ] Establecer dominio y autenticación

- [ ] **1.2 Validar endpoints en desarrollo**
  - [ ] Test `GET /categorias`
  - [ ] Test `GET /productos/:catId`
  - [ ] Test `GET /productos/:id/detail`
  - [ ] Test `GET /categorias/popularidad` (futuro)

- [ ] **1.3 Activar integración**
  - [ ] Cambiar `useApi: true` en `src/config.js`
  - [ ] Configurar `apiBaseUrl` correcto
  - [ ] Configurar `apiToken` si es necesario
  - [ ] Probar flujo completo

- [ ] **1.4 Implementar manejo de errores**
  - [ ] Capturar fallos de red en `ApiProductoRepository.js`
  - [ ] Implementar retry automático (max 3 intentos)
  - [ ] Exponential backoff entre reintentos
  - [ ] Timeout de 10 segundos para requests
  - [ ] Mostrar modal de error amigable al usuario

**Archivo clave**: `src/config.js` + `src/infrastructure/repositories/ApiProductoRepository.js`

---

### 2. Actualizar Orden de Categorías (Popularidad)

**Estado**: 🟡 Parcialmente implementado (array hardcodeado)

**Tareas:**

- [ ] **2.1 Implementar endpoint de popularidad**
  - [ ] Backend debe retornar `GET /categorias/popularidad`
  - [ ] Respuesta: array de IDs ordenados por volumen de ventas real

- [ ] **2.2 Conectar en frontend**
  - [ ] Modificar `src/application/ProductoService.js`
  - [ ] Reemplazar array en `src/data/categoriasPopularidad.js`
  - [ ] Usar datos dinámicos del API en lugar del array

- [ ] **2.3 Cachear resultados**
  - [ ] Cachear por 1 hora
  - [ ] Fallback al array anterior si API falla

**Archivo clave**: `src/data/categoriasPopularidad.js` (TODO comentado)

---

## 🟡 Importantes (No bloquean, pero son necesarios)

### 3. Testing

**Estado**: ❌ No iniciado

**Tareas:**

- [ ] **3.1 Setup de testing**
  - [ ] Instalar Jest o Vitest como devDependency
  - [ ] Configurar archivo de configuración
  - [ ] Agregar script `npm test`

- [ ] **3.2 Tests unitarios**
  - [ ] `ProductoService`: `getCategorias()`, `getProductosByCategoria()`
  - [ ] `CartService`: `addItem()`, `removeItem()`, `getTotal()`
  - [ ] `Producto`: constructor, validaciones
  - [ ] `CartItem`: incremento/decremento cantidad

- [ ] **3.3 Tests de integración**
  - [ ] `StaticProductoRepository`: carga de datos
  - [ ] `ApiProductoRepository`: simular endpoints
  - [ ] `InMemoryCartRepository`: persistencia

- [ ] **3.4 Tests E2E (opcional pero recomendado)**
  - [ ] Flujo splash → categorías → productos → carrito → resumen
  - [ ] Buscar producto
  - [ ] Agregar/quitar producto del carrito

**Archivo clave**: crear `tests/` o `__tests__/` directorio

---

### 4. Error Handling Mejorado

**Estado**: 🟡 Mínimo implementado (1 handler de error)

**Tareas:**

- [ ] **4.1 En ApiProductoRepository**
  - [ ] Capturar `fetch` excepciones (timeout, CORS, etc.)
  - [ ] Implementar retry logic con backoff exponencial
  - [ ] Setear timeout de 10s
  - [ ] Lanzan excepciones descriptivas

- [ ] **4.2 En ProductoService**
  - [ ] Try-catch en `getCategorias()`
  - [ ] Try-catch en `getProductosByCategoria()`
  - [ ] Logging de errores

- [ ] **4.3 En UI (Screens)**
  - [ ] Capturar errores del servicio
  - [ ] Mostrar modal de error con reintentar
  - [ ] Fallback a datos anterior si aplica

**Archivos clave**: 
- `src/infrastructure/repositories/ApiProductoRepository.js`
- `src/application/ProductoService.js`

---

### 5. Persistencia de Carrito

**Estado**: ❌ No implementado

**Tareas:**

- [ ] **5.1 Activar localStorage**
  - [ ] Guardar carrito en `localStorage` cada vez que cambie
  - [ ] Recuperar al iniciar app
  - [ ] Limpiar si expira (> 1 día)

- [ ] **5.2 Validación**
  - [ ] Validar contra API en caso de conflictos
  - [ ] Mostrar advertencia si productos no existen

- [ ] **5.3 Sincronización**
  - [ ] Sincronizar carrito local con servidor al conectar API

**Archivo clave**: `src/infrastructure/repositories/InMemoryCartRepository.js`

---

### 6. Performance

**Estado**: 🟢 Bueno (sin optimizaciones aún)

**Tareas:**

- [ ] **6.1 Lazy loading de imágenes**
  - [ ] Usar atributo `loading="lazy"` en `<img>`
  - [ ] Intersection Observer para precargar

- [ ] **6.2 Caching**
  - [ ] Cachear categorías (TTL 1 hora)
  - [ ] Cachear productos por categoría (TTL 30 min)
  - [ ] Usar ServiceWorker para offline

- [ ] **6.3 Optimización de bundle**
  - [ ] Minificar JS (si no está automático)
  - [ ] Minificar CSS (ya están modularizados)
  - [ ] Tree-shake código no usado

**Métrica objetivo**: 
- First Paint < 500ms ✅
- Interactive < 1s ✅
- Lighthouse score > 90

---

## 🟢 Mejoras (Nice to have)

### 7. Deployment Automático

**Estado**: ❌ No configurado

**Tareas:**

- [ ] **7.1 GitHub Actions**
  - [ ] Crear `.github/workflows/deploy.yml`
  - [ ] Trigger en push a `main`
  - [ ] Validar sintaxis
  - [ ] Desplegar a GitHub Pages

- [ ] **7.2 GitHub Pages**
  - [ ] Habilitar en Settings → Pages
  - [ ] Branch: `main`, folder: `/`
  - [ ] Verificar HTTPS configurado

**Referencia**: [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

### 8. Monitoreo y Analytics

**Estado**: ❌ No implementado

**Tareas:**

- [ ] **8.1 Error Tracking (Sentry)**
  - [ ] Crear cuenta gratuita
  - [ ] Instalar SDK
  - [ ] Capturar excepciones en ProductoService

- [ ] **8.2 Analytics**
  - [ ] Google Analytics o Plausible Analytics
  - [ ] Track: categoría vista, producto buscado, carrito actualizado

- [ ] **8.3 Uptime Monitoring**
  - [ ] UptimeRobot o Pingdom (gratis)
  - [ ] Alerta si kiosko no responde

**Archivo clave**: `src/main.js` (agregar inicializaciones)

---

### 9. Accesibilidad (a11y)

**Estado**: 🟡 Parcial (CSS responsive, sin aria labels)

**Tareas:**

- [ ] **9.1 ARIA Labels**
  - [ ] `aria-label` en botones FAB
  - [ ] `aria-label` en modales
  - [ ] `role="navigation"` en navegación

- [ ] **9.2 Keyboard Navigation**
  - [ ] Tab order correcto
  - [ ] Enter para activar botones
  - [ ] Escape para cerrar modales

- [ ] **9.3 Modo Alto Contraste**
  - [ ] Agregar preferencia de usuario
  - [ ] CSS media query `prefers-contrast`
  - [ ] Garantizar WCAG AA

**Referencia**: [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

---

### 10. Documentación

**Estado**: 🟡 Parcial (README actualizado, sin guía de deployment)

**Tareas:**

- [ ] **10.1 Documentación de Desarrollo**
  - [ ] Crear `DEVELOPMENT.md`
  - [ ] Paso a paso para setup local
  - [ ] Cómo agregar nuevos productos
  - [ ] Cómo crear nuevas pantallas

- [ ] **10.2 Documentación de Deployment**
  - [ ] Crear `DEPLOYMENT.md`
  - [ ] Pasos para desplegar a producción
  - [ ] Configuración de dominios
  - [ ] SSL/HTTPS setup

- [ ] **10.3 Troubleshooting**
  - [ ] FAQ común
  - [ ] Cómo debuggear desde kiosko
  - [ ] Logs / monitoreo

- [ ] **10.4 API Integration Guide**
  - [ ] Crear `API_INTEGRATION.md`
  - [ ] XML del contrato esperado
  - [ ] Ejemplos de requests/responses

---

## 📊 Matriz de Prioridad

| Tarea | Prioridad | Tiempo Est. | Bloqueador | Comenzar |
|-------|-----------|------------|-----------|----------|
| API Integration | 🔴 Crítica | 2-3 días | ✅ Sí | Inmediato |
| Categorías Popularidad | 🔴 Crítica | 1 día | ✅ Sí | Después API |
| Testing | 🟡 Alta | 3-5 días | ❌ No | Semana 2 |
| Error Handling | 🟡 Alta | 1-2 días | ❌ No | Inmediato |
| Persistencia Carrito | 🟡 Alta | 1 día | ❌ No | Semana 1 |
| Performance | 🟡 Alta | 1-2 días | ❌ No | Semana 2 |
| Deployment CI/CD | 🟢 Media | 2 horas | ❌ No | Semana 2 |
| Monitoreo | 🟢 Media | 1-2 días | ❌ No | Después prod |
| Accesibilidad | 🟢 Media | 2-3 días | ❌ No | Semana 3 |
| Documentación | 🟢 Media | 1-2 días | ❌ No | Ongoing |

---

## 📝 Notas de Implementación

### Para la API Integration:

```javascript
// Cambiar esto en src/config.js:
export const config = {
  useApi: true,  // ← cambiar a true cuando API esté lista
  apiBaseUrl: 'https://api.dielca.com/kiosko/v1',
  apiToken: 'Bearer YOUR_TOKEN_HERE'
};
```

### Para Testing, instalar:

```bash
npm install --save-dev jest @babel/preset-env babel-jest
npm install --save-dev jest-cli
```

Luego crear `jest.config.js`:

```javascript
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js', '**/*.test.js'],
  collectCoverageFrom: ['src/**/*.js'],
};
```

---

## ✅ Checklist de Verificación Pre-Launch

- [ ] API conectada y probada
- [ ] Todos los errores de red manejados
- [ ] Carrito persiste en localStorage
- [ ] Performance metrics cumplidas
- [ ] Tests pasen 100%
- [ ] Documentación actualizada
- [ ] GitHub Actions configurado
- [ ] Monitoren activo (Sentry)
- [ ] HTTPS en producción
- [ ] Backup de datos

---

**Última actualización**: Febrero 22, 2024  
**Responsable**: Equipo de Desarrollo  
**Estado Overall**: 🟡 En desarrollo (esperando API)
