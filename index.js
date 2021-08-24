const placeNewRelic = require('./placeNewRelic.js')

export default function () {
  placeNewRelic('./')
    .then(fpath => {
      console.log('Verifying if NewRelix exists in: ./' + fpath)
      require('newrelic')
    })
    .catch(err => {
      console.log('An error occured while trying to place newrelic.js', err)
    })
}
