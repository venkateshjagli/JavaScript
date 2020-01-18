var Request = require("request");

Request.get("http://localhost:3002/employees", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});