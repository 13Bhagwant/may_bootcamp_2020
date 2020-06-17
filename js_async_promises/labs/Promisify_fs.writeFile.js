const fs = require('fs')

function writeFile(path, contents) {
  return new Promise((res, rej) => {
    fs.writeFile(path, contents, err => {
      if (err) rej(new Error(err))
      res()
    })
  })
}

writeFile('file.txt', 'Hello from promise! is everything okay!!')
  .then(() => console.log('File write complete!'))
  .catch(err => console.error(err))