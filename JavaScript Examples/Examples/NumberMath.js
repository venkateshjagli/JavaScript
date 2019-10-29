//"e" multiplies the number by 1 with the given zeroes count. 
let billion = 1e9;//1 billion, literally: 1 and 9 zeroes
console.log(billion);
let num = 1e6;
console.log(num);
let num1 = 25e4;
console.log(num1);


//
let ms = 1e-6; // six zeroes to the left from 1
console.log('microsecond : ' + ms);

console.log(' **************   Hex  ***********');

let hex = 0xff;
console.log('Hex : ' + hex);


let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

console.log( a == b ); // true, the same number 255 at both sides


console.log('************** Rounding **************');

let num2 = 12.54565;
//Math Floor
console.log('Math.floor Rounds down Value  : ' + Math.floor(num2 * 100)/100); //ex value come 12.545 but it shows 12.54

//Math Ceil
console.log('Math.ceil Rounds up Value  : ' + Math.ceil(num2 * 100)/100); //ex value come 12.545 but it shows 12.55

//Mwth Round
console.log('Math.round Rounds to the nearest integer  : ' + Math.round(num2 * 100)/100); //ex value come 12.545 but it shows 12.55

//Math trunc 
console.log('Math.round Removes anything after the decimal point without rounding : ' + Math.trunc(num2 * 100)/100); //ex value come 12.545 but it shows 12.54

//toFixed
console.log(num2.toFixed(3));
console.log(num2);


let num7 = '145';
console.log(num7);
console.log('String type : ' + typeof num7);
console.log('String to Number Convert : ' + Number(num7));




console.log('********* Tests: isFinite and isNaN **********');

console.log(1/0); //Infinity 

console.log('*********** parseInt and parseFloat ***************');

//parseInt
let num3 = "250px";
console.log(parseInt(num3));

let num5 = "25.32";
console.log(parseInt(num5));


//parseFloat
let num4 = '1.25sm';
console.log(parseFloat(num4));

let num6 = '12.5.45';
console.log(parseFloat(num6));

console.log('************* Random ***********');
console.log('Random Value 1 : ' + Math.random());
console.log('Random Value 2 : ' + Math.random());


console.log('********** Math.max(a, b, c...) / Math.min(a, b, c...) ***********');

//Math.max
console.log('Math.max number : ' + Math.max(1, 2, 5, 45, 7, 3, 9));

//Math.min
console.log('Math.min number : ' + Math.min(1, 2, 5, 45, 7, 3, 9));

//Math.pow
console.log('Math.pow : ' + Math.pow(2, 10));





