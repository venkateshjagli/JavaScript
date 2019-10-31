let bikes = ['Hound', 'Activa', 'CBZ', 'Palser'];
console.log(bikes);

// delete obj.key removes a value by the key.
// delete bikes[1];
console.log(bikes);
console.log(bikes.length);

console.log('************ Splice Methods *************');
// The array.splice(start) method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.
console.log(bikes);

// remove index and element using Splice Method (permanetaly remove)
// It starts from the position index: removes deleteCount elements and then inserts elem1, ..., elemN at their place. 
console.log('remove first index element : ' + bikes.splice(1, 1));
console.log(bikes);

//replace index element 
console.log('replace first index element : ' + bikes.splice(1, 1, 'Scoty'));
console.log(bikes);

// add index element
console.log('add index middle value : ' + bikes.splice(2, 0, 'RE', 'Activa'));
console.log(bikes);


console.log('*********** Slice ************* ');
console.log(bikes);
// 'Slice method using remove element :
console.log( bikes.slice(1, 3));

let arr = ["t", "e", "s", "t"];
console.log(arr);

let arr1 = [1, 2, ];
console.log(arr1);

// Adding array value 
console.log('Add array value using concat : ' + arr1.concat([3, 4]));

console.log('************ forEach **************');

// Iterate: forEach
// The arr.forEach method allows to run a function for every element of the array.

let mobiles = ['RealME', "Iphone", 'Oppo', 'Vivo'];
function myFunction(item, index) {
    console.log('for an element : ' + index, item);
 }
mobiles.forEach(myFunction);

console.log('************** find and findIndex **************');
let employee  = [
    {emp:1, name:'venky'},
    {emp:2, name:'chandu'},
    {emp:3, name:"naresh"}
];

 let employees = employee.find(item => item.emp == 2);
 console.log(employees);
 
console.log('********** flitter ***********');
console.log(employee);
console.log('filter');
let employees1 = employee.filter(item => item.emp < 3);
console.log(employees1);

console.log('************ Map ************');
console.log(mobiles);
console.log('map use to each element mapping this condition is check the String length');
let mob = mobiles.map(ma => ma.length);
console.log(mob);

console.log('********** sort ***********');
// Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15".
let num = [5, 6, 19, 17, 2, 3, 1];
console.log(num);
console.log('sort : ' + num.sort());

console.log('************ Reverse ***********');
console.log(num);
console.log('array value reverse order : ' + num.reverse());


console.log('********** split and join ************');
let courses = 'Java, Python, JavaScript, Angular';
console.log(courses);
let names = courses.split(', ');
for(let cour of names){
console.log('split the word : ' + cour);
console.log(`A message to ${cour}.`);
}

//split
console.log(courses);
let cours = courses.split('');
//console.log(cours);

// using join keyword
console.log(courses);
let cars = ['Suzik', 'BMW', 'Enovo']
let cours1 = cars.join(';');
console.log(cours1);


let arr55 = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr55.join(';'); // glue the array into a string using ;
console.log(str);

console.log('*********** Array.isArray ***********');
console.log(typeof {}); // object
console.log(typeof []); // object

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true

console.log('************ Summary *************');


function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }
 let str4 = camelize("my-short-string");
 console.log('String Method use split, map, toUpperCase, slice, join : ' + str4);
 

 //Split words
let str1 = 'background-color';
console.log('String value : ' + str1);
let str2 = str1.split('-');
console.log('split this - symbol : ' + str2);
let str3 = str2.join('');
console.log(str3);

function changeString(para) {
    return para.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}
let str5 = changeString('kupendre-prased-jeglee');
    console.log('String Method use split, map, toUpperCase, slice, join : ' + str5);
    












