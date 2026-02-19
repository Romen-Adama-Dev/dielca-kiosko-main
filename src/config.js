// ==============================================
// Configuration
// Central place for feature flags and environment
// settings. No other file should import env variables.
// ==============================================

export const config = {
  /**
   * Set to `true` to switch from static bundled data
   * to the live Dielca REST API.
   * When true, `apiBaseUrl` and optionally `apiToken`
   * are used by ApiProductoRepository.
   */
  useApi: false,

  /**
   * Base URL for the Dielca Kiosko API.
   * Only used when useApi === true.
   * @example 'https://api.dielca.com/kiosko/v1'
   */
  apiBaseUrl: 'https://api.dielca.com/kiosko/v1',

  /**
   * Optional Bearer token for authenticated API calls.
   * Leave null for unauthenticated (public) endpoints.
   */
  apiToken: null,
};
