import chalk from 'chalk'
const placeNewRelic = require('./placeNewRelic.js')
const { resolve } = require('path')

module.exports = async function (moduleOptions) {
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

  const { nuxt } = this

  // Include the vue compiler in the build unless configured otherwise.
  if (options.addVueCompiler) {
    nuxt.options.build.extend = (config, context) => {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    }
  }

  nuxt.options.cli.badgeMessages.push(`NewRelic App Name: ${chalk.underline.blue(options.newRelicAppName)}`)

    placeNewRelic('./')
      .then(fpath => {
        console.log('Verifying if NewRelix exists in: ./' + fpath)
          this.addPlugin({
          src: resolve(__dirname, 'plugin.js'),
          options
        })
      })
      .catch(err => {
        console.log('An error occured while trying to place newrelic.js', err)
      })
}

module.exports.meta = require('../package.json')
