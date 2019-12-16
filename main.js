const fs = require('fs')
// const input1= process.argv[2]
let data = JSON.stringify(users, null, 2)

let rawData = fs.readFile('./users.json', (err, data) =>{
if (err) throw err;
console.log(data)
let users = JSON.parse(rawData)

console.log(users)
})
