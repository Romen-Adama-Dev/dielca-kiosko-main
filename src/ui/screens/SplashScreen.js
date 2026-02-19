// ==============================================
// Screen: SplashScreen
// ==============================================

export class SplashScreen {
  /**
   * @param {import('../Router.js').Router} router
   * @param {Function} onStart - called when user taps "start"
   */
  constructor(router, onStart) {
    const screen = document.getElementById('screen-splash');
    screen?.addEventListener('click', () => {
      router.go('categorias');
      onStart?.();
    });
  }
}
