const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const extname = '.' + process.argv[3]

fs.readdir(folder, function(err, list) {
  if (err) return console.error(err)

  list.forEach(function(item) {
    if (path.extname(item) === extname) {
      console.log(item)
    }
  })
})
