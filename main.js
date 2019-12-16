const fs = require('fs')

let rawData = fs.readFile('./users.json', (err, data) =>{
console.log(data)
})
let users = JSON.parse(rawData)
console.log(users)
