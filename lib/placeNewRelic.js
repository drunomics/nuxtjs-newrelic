import fs from 'fs'
import path from 'path'

/**
 * Places a copy of the newrelic.js file in a specified directory.
 * @constructor
 * @param {string} dir - The directory where `newrelic.js` should be placed.
 */

function placeNewRelicPromise (dir) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'newrelic.js'), 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }

      const newrelicpath = path.join(dir, 'newrelic.js')
      if (!fs.existsSync(newrelicpath)) {
        fs.writeFile(newrelicpath, data, 'utf8', (err) => {
          if (err) {
            reject(err)
          } else {
            resolve(newrelicpath)
          }
        })
      } else {
        resolve(newrelicpath)
      }
    })
  })
}

module.exports = placeNewRelicPromise