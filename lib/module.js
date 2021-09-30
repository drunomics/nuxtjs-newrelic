import chalk from 'chalk'
const placeNewRelic = require('./placeNewRelic.js')

module.exports = async function () {
  const newRelicAppName = process.env.NEW_RELIC_APP_NAME || 'Default'
  const newRelicNoConfigFile = process.env.NEW_RELIC_NO_CONFIG_FILE || false
  const { nuxt } = this

  nuxt.options.cli.badgeMessages.push(`NewRelic App Name: ${chalk.underline.blue(newRelicAppName)}`)

  /**
   * If the param is true then don't place newrelic.js
   * in base directory.
   * @param {boolean} newRelicNoConfigFile
   */

  if (!newRelicNoConfigFile) {
    placeNewRelic('./')
      .then(fpath => {
        console.log(`${chalk.cyan('ℹ')} Verifying if NewRelic exists in: ./` + fpath + ', else creating...')
        import('newrelic')
      })
      .catch(err => {
        console.log('An error occured while trying to place newrelic.js', err)
      })
  } else {
    console.log(`${chalk.cyan('ℹ')} NewRelic is starting using environment variables only`)
    import('newrelic')
  }
}

module.exports.meta = require('../package.json')
