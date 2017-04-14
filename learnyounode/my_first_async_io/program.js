var fs = require('fs')

var str = fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    return console.log(err)
  }

  var lines = data.split("\n").length - 1
  console.log(lines) 
})
