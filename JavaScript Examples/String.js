'use strict'
let fname = "Venkatesh"; //Double quotes
let lname = 'Jeglee'; //Single quotes

//console.log(fname);

//The concat() Method
//concat() joins two or more strings:
let fullName = fname.concat(" " + lname);
//console.log(fullName);


//String Length
//console.log(fname.length); //To find the length of a string, use the built-in length property:

//Finding a String in a String
//indexOf()
let str1 = "Please locate where 'locate' occurs!";
let pos =str1.indexOf('locate'); //The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
//console.log(pos);

//lastIndexOf()
let pos1 = str1.lastIndexOf('locate');  //The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
//console.log(pos1);

//Both indexOf(), and lastIndexOf() return -1 if the text is not found.
let pos2 = str1.lastIndexOf('venky');
//console.log(pos2);



//Searching for a String in a String
//search()
let str2 = "Please locate where 'locate' occurs!";
let src = str2.search('locate'); //The search() method searches a string for a specified value and returns the position of the match:
//console.log(src);


//Extracting String Parts
/*
1->slice(start, end)
2->substring(start, end)
3->substr(start, length)
*/

//The slice() Method
/*
slice() extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: the start position, and the end position (end not included).
This example slices out a portion of a string from position 7 to position 12 (13-1)
*/
//If a parameter is negative, the position is counted from the end of the string.
let str3 = 'Venky Chandu Naresh';
let pos3 = str3.slice(6, 13);
//console.log(pos3);

//The substring() Method
//substring() is similar to slice().
//The difference is that substring() cannot accept negative indexes.
let pos4 = str3.substring(6, 13);
//console.log(pos4);

//The substr() Method
//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.
//If the first parameter is negative, the position counts from the end of the string.

let pos5 = str3.substr(6 ,9);
//console.log(pos5);


//Replacing String Content
//The replace() method replaces a specified value with another value in a string:
//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

let name = 'My name is Venkatesh Jagli';
let chg = name.replace('Jagli', 'Jeglee');
//console.log(chg);

let repl = 'My name is Venkatesh Jagli and Jagli';//By default, the replace() method replaces only the first match:
let chg1 = repl.replace('Jagli', 'Jeglee');
//console.log(chg1);

//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
let str4 = "Please visit Microsoft!";
var n = str4.replace("MICROSOFT", "W3Schools");
//console.log(n);

//To replace case insensitive, use a regular expression with an /i flag (insensitive):
let str5 = "Please visit Microsoft!";
var n1 = str5.replace(/MICROSOFT/i, "W3Schools");
//console.log(n1);

//To replace all matches, use a regular expression with a /g flag (global match):
let repl1 = 'My name is Venkatesh Jagli and Jagli';
let cg1 = repl1.replace(/Jagli/g, 'Jeglee');
//console.log(cg1);


//Converting to Upper and Lower Case

let txt = 'venkatesh';
let na = txt.toUpperCase();//A string is converted to upper case with toUpperCase():
//console.log(na);

let txt1 = 'VENKATESH';
let na1 = txt1.toLocaleLowerCase(); //A string is converted to lower case with toLowerCase():
//console.log(na1);



//String.trim()
//The trim() method removes whitespace from both sides of a string:

let fulname = "   Venkatesh Jeglee   ";
//console.log(fulname);

let fnam = fulname.trim();
//console.log(fnam);


//Extracting String Characters
/*
->charAt(position)
->charCodeAt(position)
->Property access [ ]
*/
//The charAt() Method
//The charAt() method returns the character at a specified index (position) in a string:

let tx = 'VENKATESH';
let tt = tx.charAt(5);
//console.log(tt);


//The charCodeAt() Method
//The charCodeAt() method returns the unicode of the character at a specified index in a string:
//The method returns a UTF-16 code (an integer between 0 and 65535).
let char = tx.charCodeAt(2);
//console.log(char);

//ECMAScript 5 (2009) allows property access [ ] on strings:
let char1 = tx[1];;
//console.log(char1);

//Converting a String to an Array
//A string can be converted to an array with the split() method:

// let text = 'VENKATESH Jeglee';
// let splitName = text.split('');
// let strr = ' ';
// for(let i = 0; i < splitName.length; i++){
//     strr += splitName[i];
//     console.log(strr);
// }

let text = 'VENKATESH Jeglee';
let splitName = text.split('');
let strr = ' ';
for(let i = 0; i < splitName.length; i++){
    strr += splitName[i];
    //console.log(strr);
}

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!\n' + parameterVariable);
}

let parameterVariable = 'Venkatesh Jeglee';
    // Write a line of code that prints parameterVariable to stdout using console.log:
 //greeting('Welcome to 10 Days of Javascript!');
 greeting(parameterVariable);


//  function chechAge(age) {
//      if (age > 18) {
//        return true;
//      }
//      else{
//          return confirm ('Do you have perimissiion your parents?');
//      }
//  }
//  let age = prompt('How old are you?', 18);

//  if (checkAge(age)) {
//      console.log('Access Granted');
//  }
//  else{
//      console.log('Access denied');
//  }


