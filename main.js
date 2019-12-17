const fs = require('fs');

const func = process.argv[2];
const uARGV = process.argv[3];
const index = process.argv[4]


if(func === 'GET'){
    fs.readFile('./users.json', function(error, data) {
        const users = JSON.parse(data);
        if (uARGV === 'users') {
            console.log(users)
        } else if (uARGV === 'user') {
            console.log(users[index])
        } else if (uARGV === 'friends') {
            console.log(users[index].friends)
        }
        else if (error) {throw error;}
    })
} 


if (func === 'POST'){
    fs.writeFile('./users.json', function(error, data) {
        let newUser = {
        "index": users.length,
        "age": process.argv[5],
        "eyeColor": process.argv[5],
        "name": process.argv[6],
        "friends":[],
        },


}
}
