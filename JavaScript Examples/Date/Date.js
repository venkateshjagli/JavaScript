'use scrict'

// create Date
let currentDate = new Date();
console.log('Display current Date : ' + currentDate);

// use stringDate
let stringDate = new Date('1991-1-26');
console.log('Pass StringDate " ' + stringDate);

//Autocorrection Date
// The autocorrection is a very handy feature of Date objects. We can set out-of-range values, and it will auto-adjust itself.
let autocorrection = new Date(2015,0,32);
console.log('Autocorrection Date : ' + autocorrection);

console.log('************* dates can be subtracted **************');
let start = new Date();
for(let i = 0; i < 10000; i++){
    let doSomething = i*i*i;
}
let end = new Date();
console.log(`loop ${end - start} ms`);

console.log('************* Date.now() **************');
// use Date.now method
let start1 = Date.now();
for(let j = 0; j < 10000; j++){
    let doSomething = j*j*j;
}
// use Date.now method
let end1 = Date.now();
console.log(`loop ${end1 - start1} ms`);



console.log('********** DateOfBirth Calculate *************');

