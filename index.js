export default async function () {
  await import('newrelic')
}

const newRelicReplace = require('./placeNewRelic.js')
newRelicReplace('./')
