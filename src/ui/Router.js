// ==============================================
// UI Component: Router
// Manages SPA screen transitions.
// ==============================================

export class Router {
  constructor() {
    /** @type {string} */
    this.current = 'splash';
    /** @type {Array<Function>} */
    this._listeners = [];
  }

  /**
   * Navigate to a named screen (matches `id="screen-<name>"`).
   * @param {string} name
   */
  go(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById('screen-' + name);
    if (!target) { console.warn(`Router: screen '${name}' not found`); return; }
    target.classList.add('active');
    const prev = this.current;
    this.current = name;
    this._listeners.forEach(fn => fn(name, prev));
  }

  /**
   * Subscribe to route changes.
   * @param {Function} fn - called with (to: string, from: string)
   * @returns {Function} unsubscribe
   */
  onChange(fn) {
    this._listeners.push(fn);
    return () => { this._listeners = this._listeners.filter(l => l !== fn); };
  }
}
