
// var Request = request("request");

// Request.get("http://localhost:3002/employees", (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     console.dir(JSON.parse(body));
// });

var Request = require("request");

Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:3002/employees",
    "body": JSON.stringify({
        "name": "Narsimhalu",
        "address": "Marathahalli",
        "mobileNum": 9591679855,
        "salary": 30000,
        "age": 34
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});