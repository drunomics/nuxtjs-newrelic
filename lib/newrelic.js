'use strict'
/**
 * New Relic agent configuration.
 *
 * See lib/config/default.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */

  const defaultOptions = {
    newRelicLicense: process.env.NEWRELIC_LICENSE,
    newRelicAppName: process.env.NEWRELIC_APP_NAME || 'Default',
    newRelicEnabled: process.env.NEWRELIC_ENABLED || true,
    newRelicBrowserMonitor: process.env.NEWRELIC_BROWSER_MONITORING_ENABLED || false
  }

  const options = {
    ...defaultOptions,
    ...this.options['nuxt-module-newrelic'],
    ...this.options['module-newrelic'],
    ...moduleOptions
  }

  // Add the options to publicRuntimeConfig - so changes to the options apply
  // without having to set publicRuntimeConfig manually.
  this.options.publicRuntimeConfig = this.options.publicRuntimeConfig || {}
  this.options.publicRuntimeConfig['module-newrelic'] = this.options.publicRuntimeConfig['module-newrelic'] || {}
  this.options.publicRuntimeConfig['module-newrelic'].newRelicLicense = options.newRelicLicense
  this.options.publicRuntimeConfig['module-newrelic'].newRelicAppName = options.newRelicAppName
  this.options.publicRuntimeConfig['module-newrelic'].newRelicEnabled = options.newRelicEnabled

exports.config = {
  /**
   * Array of application names.
   */
  app_name: [options.newRelicLicense],
  /**
   * Your New Relic license key.
   */
  license_key: options.newRelicAppName,
  /**
   * This setting controls distributed tracing.
   * Distributed tracing lets you see the path that a request takes through your
   * distributed system. Enabling distributed tracing changes the behavior of some
   * New Relic features, so carefully consult the transition guide before you enable
   * this feature: https://docs.newrelic.com/docs/transition-guide-distributed-tracing
   * Default is false.
   */
  distributed_tracing: {
    /**
     * Enables/disables distributed tracing.
     *
     * @env NEW_RELIC_DISTRIBUTED_TRACING_ENABLED
     */
    enabled: true
  },
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info'
  },
  /**
   * When true, all request headers except for those listed in attributes.exclude
   * will be captured for all traces, unless otherwise specified in a destination's
   * attributes include/exclude lists.
   */
  allow_all_headers: true,
  attributes: {
    /**
     * Prefix of attributes to exclude from all destinations. Allows * as wildcard
     * at end.
     *
     * NOTE: If excluding headers, they must be in camelCase form to be filtered.
     *
     * @env NEW_RELIC_ATTRIBUTES_EXCLUDE
     */
    exclude: [
      'request.headers.cookie',
      'request.headers.authorization',
      'request.headers.proxyAuthorization',
      'request.headers.setCookie*',
      'request.headers.x*',
      'response.headers.cookie',
      'response.headers.authorization',
      'response.headers.proxyAuthorization',
      'response.headers.setCookie*',
      'response.headers.x*'
    ]
  }
}
