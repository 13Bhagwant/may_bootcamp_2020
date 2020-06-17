// 1. Read from a source directory
// 2. Make a directory 
// 3. For each file in the source directory, 
// read and write the contents to the new directory that we just created

const fs = require('fs')
const path = process.argv[2]

fs.readdir(path, (err, files) => { // read a source directory
  if (err) { // check for errors
    console.log('Error reading directory') 
  } else {
    fs.mkdir(`${path}/copies/`, {recursive: true}, err => { // make a directory
      if (err) { // check for errors
        console.log('Error making directory') 
      } else {
        files.forEach((filename, index) => { // loop through each file read from the source directory
          fs.readFile(`${path}/${filename}`, {encoding: 'utf8'}, (err, data) => { // reading each file's contents
          if (err) { // check for errors
            console.log('Error reading file') 
          } else {
            fs.writeFile(`${path}/copies/${filename}_copy`, data, (err) => { // write to a copy of the file
              if (err) { // check for errors
                console.log('Error writing file') 
              } else {
                console.log(`Successfull wrote to ${path}/copies/${filename}_copy`)
              }
            })
          }
        })
      })
    }
    })
  }
})

console.log('After callback hell in script')