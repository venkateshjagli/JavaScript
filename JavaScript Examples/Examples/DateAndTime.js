'use srcict'

console.log('******** new Date() ********');

let now = new Date();
console.log('Current Date Display : ' + now);

console.log('********** new Date(milliseconds) ***********');

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log('Now Add 24 Hours : ' + Jan02_1970);

// new Date(datestring)
let stringDate = new Date('1991-01-26');
console.log(stringDate);

