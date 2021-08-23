export default async function () {
  await import('newrelic')
}

module.exports.meta = require('./package.json')