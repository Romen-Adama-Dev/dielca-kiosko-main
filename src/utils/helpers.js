// ==============================================
// Utility Functions - DOM Helpers
// ==============================================

/**
 * Safely gets an element by ID
 * @param {string} id - Element ID
 * @returns {HTMLElement|null}
 */
export function getById(id) {
  return document.getElementById(id);
}

/**
 * Safely gets an element by selector
 * @param {string} selector - CSS selector
 * @param {HTMLElement} context - Optional context element
 * @returns {HTMLElement|null}
 */
export function query(selector, context = document) {
  return context.querySelector(selector);
}

/**
 * Gets all elements matching selector
 * @param {string} selector - CSS selector
 * @param {HTMLElement} context - Optional context element
 * @returns {NodeListOf<HTMLElement>}
 */
export function queryAll(selector, context = document) {
  return context.querySelectorAll(selector);
}

/**
 * Creates an element with optional attributes and children
 * @param {string} tag - HTML tag name
 * @param {Object} attrs - Attributes object
 * @param {Array<HTMLElement|string>} children - Child elements or text
 * @returns {HTMLElement}
 */
export function createElement(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'className') {
      el.className = value;
    } else if (key === 'dataset') {
      Object.entries(value).forEach(([k, v]) => {
        el.dataset[k] = v;
      });
    } else if (key.startsWith('on')) {
      const eventName = key.substring(2).toLowerCase();
      el.addEventListener(eventName, value);
    } else {
      el.setAttribute(key, value);
    }
  });
  
  children.forEach(child => {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else if (child instanceof HTMLElement) {
      el.appendChild(child);
    }
  });
  
  return el;
}

/**
 * Adds class(es) to element
 * @param {HTMLElement} el
 * @param {string|string[]} classes
 */
export function addClass(el, classes) {
  if (!el) return;
  const classList = Array.isArray(classes) ? classes : [classes];
  el.classList.add(...classList);
}

/**
 * Removes class(es) from element
 * @param {HTMLElement} el
 * @param {string|string[]} classes
 */
export function removeClass(el, classes) {
  if (!el) return;
  const classList = Array.isArray(classes) ? classes : [classes];
  el.classList.remove(...classList);
}

/**
 * Toggles class on element
 * @param {HTMLElement} el
 * @param {string} className
 * @param {boolean} force - Optional force value
 */
export function toggleClass(el, className, force) {
  if (!el) return;
  el.classList.toggle(className, force);
}

/**
 * Checks if element has class
 * @param {HTMLElement} el
 * @param {string} className
 * @returns {boolean}
 */
export function hasClass(el, className) {
  return el ? el.classList.contains(className) : false;
}

// ==============================================
// Utility Functions - Formatting
// ==============================================

/**
 * Formats a number as currency (Chilean Pesos)
 * @param {number} value
 * @returns {string}
 */
export function formatCurrency(value) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  }).format(value);
}

/**
 * Formats a number with thousand separators
 * @param {number} value
 * @returns {string}
 */
export function formatNumber(value) {
  return new Intl.NumberFormat('es-CL').format(value);
}

/**
 * Truncates text to specified length
 * @param {string} text
 * @param {number} maxLength
 * @param {string} suffix
 * @returns {string}
 */
export function truncate(text, maxLength, suffix = '...') {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - suffix.length) + suffix;
}

/**
 * Generates a random ID
 * @param {string} prefix
 * @returns {string}
 */
export function generateId(prefix = 'id') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// ==============================================
// Utility Functions - Async/Timing
// ==============================================

/**
 * Debounce function execution
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
export function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Throttle function execution
 * @param {Function} fn
 * @param {number} limit
 * @returns {Function}
 */
export function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Delay execution
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ==============================================
// Utility Functions - Validation
// ==============================================

/**
 * Checks if value is empty (null, undefined, empty string)
 * @param {*} value
 * @returns {boolean}
 */
export function isEmpty(value) {
  return value === null || value === undefined || value === '';
}

/**
 * Clamps a number between min and max
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Checks if string is valid search query
 * @param {string} query
 * @param {number} minLength
 * @returns {boolean}
 */
export function isValidSearchQuery(query, minLength = 2) {
  return typeof query === 'string' && query.trim().length >= minLength;
}
