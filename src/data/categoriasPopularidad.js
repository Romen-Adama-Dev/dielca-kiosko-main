// ==============================================
// Data: Orden de popularidad de categorías
// Representa las categorías más demandadas primero.
// -----------------------------------------------
// TODO (backend): reemplazar este array por una
//   llamada a GET /categorias/popularidad que
//   devuelva los ids ordenados por volumen de
//   ventas real del ERP / historial de pedidos.
// ==============================================

/**
 * Category IDs sorted from most to least popular.
 * Controls the display order in the search modal landing view.
 * @type {string[]}
 */
export const CATEGORIAS_POPULARIDAD = [
  'cables',           // 1. Material más vendido en cualquier instalación
  'aparamenta',       // 2. Cuadros, PIAs, diferenciales — base de toda obra
  'iluminacion',      // 3. LEDs y focos — altísima rotación
  'mecanismos',       // 4. Interruptores y bases de enchufe — consumo constante
  'energia_renovable',// 5. Solar + aerotermia — segmento en fuerte crecimiento
  'armarios',         // 6. Cajas y cuadros de distribución
  'herramientas',     // 7. Consumibles y herramientas eléctricas
  'baterias_alarmas', // 8. SAIs, detectores, alarmas
  'telecomunicaciones',// 9. Video portero, red, TV/SAT
  'medida_control',   // 10. Contadores, detectores, termostatos
  'dyson',            // 11. Producto de marca premium
  'wizard',           // 12. Domótica e iluminación inteligente
];
