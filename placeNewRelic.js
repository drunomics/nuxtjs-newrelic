const fs = require('fs')
const path = require('path')

/**
 * Places a copy of the newrelic.js file in a specified directory.
 * @constructor
 * @param {string} dir - The directory where `newrelic.js` should be placed.
 */
async function place (dir) {
  console.log(__dirname)
  fs.readFile(path.join(__dirname, 'config/newrelic.js'), 'utf8', (err, data) => {
    if (err) {
      console.log('There was an error reading newrelic.js template.' + err)
      return
    }

    const newrelicpath = path.join(dir, 'newrelic.js')
    fs.writeFile(newrelicpath, data, 'utf8', (err) => {
      if (err) {
        console.log(`There was an error writing the newrelic.js file to ${newrelicpath}`, err)
      } else {
        console.log(`Successfully wrote newrelic.js to ${newrelicpath}`)
      }
    })
  })
}

module.exports = place
