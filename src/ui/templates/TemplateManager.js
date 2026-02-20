// ==============================================
// Template Manager
// Gestiona la inyección de templates HTML en el DOM
// ==============================================

import { ScreenTemplates } from './ScreenTemplates.js';
import { ComponentTemplates } from './ComponentTemplates.js';

export class TemplateManager {
  /**
   * Inicializa todos los templates en el DOM
   */
  static initialize() {
    const app = document.getElementById('app');
    
    if (!app) {
      console.error('App container not found');
      return;
    }

    // Renderizar todas las pantallas
    app.innerHTML = `
      ${ScreenTemplates.splash()}
      ${ScreenTemplates.categorias()}
      ${ScreenTemplates.productos()}
      ${ScreenTemplates.resumen()}
      ${ScreenTemplates.confirmacion()}
    `;

    // Añadir componentes al body
    document.body.insertAdjacentHTML('beforeend', `
      ${ComponentTemplates.qtyModal()}
      ${ComponentTemplates.cartPanel()}
      ${ComponentTemplates.fabButtons()}
      ${ComponentTemplates.detailModal()}
      ${ComponentTemplates.searchModal()}
      ${ComponentTemplates.addFeedback()}
    `);
  }

  /**
   * Renderiza una pantalla específica
   * @param {string} screenName - Nombre de la pantalla
   * @returns {string} HTML template
   */
  static getScreen(screenName) {
    return ScreenTemplates[screenName] ? ScreenTemplates[screenName]() : '';
  }

  /**
   * Renderiza un componente específico
   * @param {string} componentName - Nombre del componente
   * @returns {string} HTML template
   */
  static getComponent(componentName) {
    return ComponentTemplates[componentName] ? ComponentTemplates[componentName]() : '';
  }

  /**
   * Reemplaza un elemento en el DOM con nuevo contenido
   * @param {string} elementId - ID del elemento a reemplazar
   * @param {string} html - HTML nuevo
   */
  static replace(elementId, html) {
    const element = document.getElementById(elementId);
    if (element) {
      element.outerHTML = html;
    }
  }

  /**
   * Inserta HTML en un contenedor
   * @param {string} containerId - ID del contenedor
   * @param {string} html - HTML a insertar
   * @param {string} position - Posición: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
   */
  static insert(containerId, html, position = 'beforeend') {
    const container = document.getElementById(containerId);
    if (container) {
      container.insertAdjacentHTML(position, html);
    }
  }

  /**
   * Limpia el contenido de un elemento
   * @param {string} elementId - ID del elemento
   */
  static clear(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = '';
    }
  }
}
