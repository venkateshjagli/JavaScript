//Double quotes, Single quote, Backticks
let fName = "Venkatesh";
let lName = 'Jeglee';
let nameList = `Names:
*Venky
*Chandu
*Naresh
 `;
// console.log(fName);
// console.log(lName);
// console.log(nameList);
 
let str1 = 'Venkatesh\nJeglee';

let str2 = `Venkatesh
Jeglee`;
 
//console.log(str1 == str2);

console.log('******** String Immutabe **********');

let str3 = 'Venky';

str3[0]='j'; //error
console.log(str3[0]);

console.log('*************** String Methods *************');
 
//Concat
console.log('Two String object Concat : ' + fName.concat(' ' + lName));

//startsWith
console.log('String object starting latter search : ' + fName.startsWith('Ven'));


//endsWith
console.log('String object ends latter search : ' + fName.endsWith('sh'));

//includes -- 
let txt = 'String object starting latter search ';
console.log('String Method include : ' + txt.includes('latter'));

//indexOf
let txt11 = 'String object latter starting latter search ';
console.log('indexOf Search First occurrence : ' + txt11.indexOf('latter'));

//lastIndexOf
console.log('lastIndexOf search last occurrence : ' + txt11.lastIndexOf('latter'));

//charAt
console.log(str3.charAt(0));

//charCodeAt
console.log(str3.charCodeAt(0));//Unicode of the first character in a string the Unicode value for 'V'


console.log('*********** Getting a substring *************');

//Slice
console.log(txt);
console.log(fName);
console.log("Slice text from 2 to 15 : " + txt.slice(2, 15));
console.log("Slice text from 3 : " + fName.slice(3));

//substring(start [, end])
console.log(' subString text from 2 to 15 : ' + txt.substring(2, 15));
console.log(' subString text from 3 : ' + fName.substring(3));

//substr(start [, length])
console.log('substr text between length from 2 to 15 : ' + txt.substr(2, 15));//Returns the part of the string from start, with the given length.
console.log('substr text between length from 3 : ' + fName.substr(3));

//replace
console.log('Replace word : ' + txt.replace('search', 'replace'));

//match
let txt3 ="The rain in SPAIN stays mainly in the plain"; 
console.log('Search a word : ' + txt3.match(/ain/g));

//search
console.log('Search operation : ' + txt.search('search'));//Search the posion

//repeat
console.log('Repeat word : ' + fName.repeat(3));

//trim
let txt1 = '    Venkatesh    ';
console.log(txt1);
console.log( txt1.trim());//starting and ending empty spaces remove


console.log('********** String Looping ***********');
let str4 = 'My name is Venkatesh Jeglee';
let txt2 = str4.split(' ');
for(let i of txt2){
    console.log(i);
}
let str5 = str4.slice(11, 20);
console.log(str5.length);

//toLowerCase
let st = 'VENKATESH';
console.log('toUpperCase to toLowerCase Convert : ' + st.toLocaleLowerCase());

//toUpperCase
let st1 = 'jeglee';
console.log('toLowerCase to toUpperCase Convert : ' + st1.toLocaleUpperCase());


//String to Number Convert
let num = '123';
let num2 = Number(num);
let num1 = 123;
console.log(num2 + num1);
