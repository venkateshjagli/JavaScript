function account(name, age, email, mobileNo, address) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.mobileNo = mobileNo;
    this.address = address;
}

var venky = new account("Venkatesh", 27, "venkateshjagli7@gmail.com", "9141142182", "Raichur");
var chandu = new account("Kupendra Prasad", 28, "chandujagli7@gmail.com", "8792740039", "Raichur");
var naresh = new account("Naresh Kumar JT", 27, "nareshjagli7@gmail.com", "9848022338", "Raichur");

var accounts = [];
accounts.push(venky);
accounts.push(chandu);
accounts.push(naresh);
 
// console.log(accounts);

 var accountJsonFile = JSON.stringify(accounts);

 console.log(accountJsonFile);

 const fs = require('fs');

 fs.writeFile("accountHolder.json", accountJsonFile, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});
 