const fs = require('fs')

fs.readFile('./users.json', (err, data) =>{
console.log(data)
})
// process.argv(fs.GET users.json)