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

function writeFile(path, contents) {
  return new Promise((res, rej) => {
    fs.writeFile(path, contents, err => {
      if (err) rej(new Error(err))
      res()
    })
  })
}

function readDir(path) {
  return new Promise((res, rej) => {
    fs.readdir(path, (err, files) => {
      if (err) rej(new Error(err))
      res(files)
    })
  })
}

readDir(path)
  .then(filenames => {
    return Promise.all(filenames.map(filename => readFile(`${path}/${filename}`)))
  })
  .then(fileContents => writeFile('newFile.txt', fileContents.join('\n')))

  .then(() => console.log('Successfully wrote file'))
  .catch(err => console.error(err))



// readFile(path, { encoding: 'utf8' })
//   .then(data => console.log(data))
//   .catch(err => console.err(err))