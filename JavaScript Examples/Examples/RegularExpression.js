'use strict'

console.log('*********** Regular Expression *************');

console.log('********** Regular Expression Modifiers **********');
console.log('****** Modifiers can be used to perform case-insensitive more global searches: using /String/igm ******');
// i	Perform case-insensitive matching	
// g	Perform a global match (find all matches rather than stopping after the first match)	
// m	Perform multiline matching

let str = 'perform case-insensitive case matching case';
// search() method
let str1 = str.search('case');
//console.log('sreach() : ' + str1);

// replace() method
let str2 = str.replace('/Case/i', 'CASE');
//console.log('replace() : ' + str2); 

// i -> case-insensitive matching
// console.log(str);
let patt2 = /cAsE/i;
let result2 = str.match(patt2);
// console.log(' /***/i -> case-insensitive matching: ' + result2);


// match method Regular Expression
// console.log(str);
let patt = /case/g;
let result = str.match(patt);
//console.log('Perform a global match (find all matches rather than stopping after the first match) : ' + result);

// multiline match
let patt1 = /case/m;
let result1 = str.match(patt1);
// console.log(' Perform multiline matching : ' + result1);

console.log('********** Regular Expression Patterns **********');
console.log('***** Brackets are used to find a range of characters: *****');
// [abc]	Find any of the characters between the brackets	
// [0-9]	Find any of the digits between the brackets	
// (x|y)	Find any of the alternatives separated with |

// console.log(str);
let patt3 = /[s]/g;
let result3 = str.match(patt3);
// console.log('[abc] -> Find any of the characters between the brackets : ' + result3);

let num = '123456789';
// console.log('Number : ' + num);
let patt4 = /[1-5]/g;
let result4 = num.match(patt4);
// console.log('[0-9] -> Find any of the digits between the brackets : ' + result4);

let names = 'venkatesh Jeglee, Naresh Matri, Chandu Jeglee, Kalyan Pirangi, Naresh Jeglee ';
let patt5 = /(jeglee|pirangi)/ig;
let result5 = names.match(patt5);
// console.log('Find any of the alternatives separated with | : ' + result5);

// [^0-9]	Find any character NOT between the brackets (any non-digit)
let num2 = '0123456789';
let patt01 = /[^1-4]/g;
let result04 = num2.match(patt01);
console.log('[^0-4]	Find any character NOT between the brackets (any non-digit) : ' + result04);



console.log('*********** Metacharacters are characters with a special meaning: ************');
// \d	Find a digit	
// \s	Find a whitespace character	
// \b	Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b	
// \uxxxx	Find the Unicode character specified by the hexadecimal number xxxx
let findDigit = 'Give 100%!';
let patt6 = /\d/g;
let result6 = findDigit.match(patt6);
// console.log('\d -> Find a digit : ' + result6);


let findWhitespaceCharacter = 'Find a whitespace a character Venkatesh Jeglee';
let patt7 = /\s/g;
let result7 = findWhitespaceCharacter.match(patt7);
// console.log('Find a whitespace character : ' + result7);

let findWord = 'HELLO, LOOK AT YOU!';
let patt8 = /\bLO/g;
let result8 = findWord.match(patt8);
// console.log('\bWORD, or at the end of a word like this: WORD\b	: ' + result8);


var str3 = "Visit W3Schools. Hello World!"; 
var patt9 = /\u0057/g;
var result9 = str3.match(patt9);
// console.log('Find the Unicode character specified by the hexadecimal number xxxx : ' + result9);

console.log('*********** Quantifiers define quantities *************');
// n+	Matches any string that contains at least one n
// n*	Matches any string that contains zero or more occurrences of n
// n?	Matches any string that contains zero or one occurrences of n

let match = 'Hellooo world Venkatesh Jeglee';
let mat = /e+/g;
let result01 = match.match(mat);
// console.log('  n+	Matches any string that contains at least one n : ' + result01);

console.log(match);
let mat1 = /lo*/g;
let result02 = match.match(mat1);
// console.log('n*	Matches any string that contains zero or more occurrences of n : ' + result02);


let num1 = '1, 100 or 1000';
let mat2 = /10?/g;
let result03 = num1.match(mat2);
// console.log('n?	Matches any string that contains zero or one occurrences of n : ' + result03);

