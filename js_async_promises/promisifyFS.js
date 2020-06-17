const fs = require('fs')
const path = process.argv[2]

function readFile(path, options) {
  return new Promise((res, rej) => {
    fs.readFile(path, options, (err, data) => {
      if (err) {
        rej(err)
      } else {
        res(data)
      }
    })
  })
}

readFile(path, { encoding: 'utf8' })
  .then(data => console.log(data))
  .catch(err => console.err(err))