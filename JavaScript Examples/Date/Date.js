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


console.log("********* Time Difference ***********");

// Difference Time Subtract
function diffSubtract(date1, date2){
    return date2 - date1;
}

// Difference Get Time
function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}

function bench(f){
    let date1 = new Date(0);
    let date2 = new Date();
    
    let start = Date.now();
    for(let x = 0; x < 100000; x++) f(date1, date2);
    return Date.now() - start;
}

console.log('Time of diffSubtract : ' + bench(diffSubtract) + 'ms');
console.log('Time of diffGetTime : ' + bench(diffGetTime) + 'ms');

console.log('************* Time Difference multiple times *************');

function diffSubtrac1(date3, date4) {
    return date4 - date3;
}

function diffGetTime1(date3, date4){
    return date4.getTime() - date3.getTime();
}

function bench1(f) {
    let date3 = new Date(0);
    let date4 = new Date();

    let strt = Date.now();
    for(let y = 0; y < 100000; y++) f(date3, date4);
    return Date.now() - strt;
}

let time1 = 0;
let time2 = 0;

for(let z = 0; z < 10; z++){
    time1 += bench(diffSubtrac1);
    time2 += bench(diffGetTime1);
}
console.log('Total time for DiffSubctract : ' + time1 + 'ms');
console.log('Total time for DiffGetTime : ' + time2 + 'ms');

console.log('************* Date.parse from a string ***************');
let ms = Date.parse('1990-11-06');
console.log(ms);

console.log('********** DateOfBirth Calculate *************');
let birthDate =new Date('1991-01-26');
let curDate = new Date();
let totalAge = curDate - birthDate;
console.log('DateOfBirth Calculate : ' + totalAge);
 
console.log('************* Tasks **************');
let task1 = new Date(2012, 1, 20, 3, 12);
console.log(task1);

let d = new Date(2012, 1, 20, 3, 12);
console.log( d );
