import chalk from 'chalk'
const placeNewRelic = require('./placeNewRelic.js')
const { resolve } = require('path')

module.exports = async function () {
  const newRelicAppName = process.env.NEWRELIC_APP_NAME

  const { nuxt } = this

  nuxt.options.cli.badgeMessages.push(`NewRelic App Name: ${chalk.underline.blue(newRelicAppName)}`)

    placeNewRelic('./')
      .then(fpath => {
        console.log('Verifying if NewRelix exists in: ./' + fpath + ', else creating...')
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
