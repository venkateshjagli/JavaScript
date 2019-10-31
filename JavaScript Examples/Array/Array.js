//Array -- Types of Array Create
let arr1 = new Array();
let arr2 = [];


let names = ['Venky', 'Chandu', 'Naresh'];
console.log(names);

//For of Loop -- Each Value looping
for(let i of names){
    console.log('Looping Each Value : ' + i);
}


let mobile = ['MI', 'Vivo', 'RealMe'];
console.log(mobile);

// Array index 
console.log('Array index[1] print : ' + mobile[1] );

//Array index replace
console.log(mobile);
console.log('Array index value Replace : ' + (mobile[1]='Iphone'));
console.log(mobile);

// Insert a new Array element
console.log('Insert a new Array element : ' + (mobile[3] = 'Oppo'));
console.log(mobile);

// Array length Check
console.log('Array Length Check : ' + mobile.length);

// Array Stored mix values
let store = ['Venky', {name: 'Venkatesh'}, true, function () {console.log('Jeglee')}];
console.log('Array stored mix Value : ' + store);

// get the object at index 1 and then show its name
console.log('Array get index element : ' + store[1].name);

// get the function at index 3 and run it
store[3]();

console.log('********** Array Methods ************');
console.log(mobile);

//Push Method-- Add element in Array last Index
console.log('Push Method Add element in Array last Index : ' + mobile.push('Samsung'));

// Pop Method -- remove element in Array last Index
console.log(mobile);
console.log('Pop Method remove element in Array last Index : ' + mobile.pop());

//Unshift Method -- Add element in Array first Index
console.log(mobile);
console.log('Unshift Method Add first element : ' + mobile.unshift('Nokia'));

//shift -- remove element in Array first Index
console.log(mobile);
console.log('Shift Method remove first element : ' + mobile.shift());
console.log(mobile);

let laptop=[];
laptop[500] = 25;
console.log(laptop);
console.log(laptop.length);

//Infinity 
console.log(1/0);
 
console.log('************ Loop ************');
console.log(mobile);
 
// One of the oldest ways to cycle array items is the for loop over indexes:
for(let l = 0; l < mobile.length; l++){
    console.log('for loop: ' + mobile[l]);
}

// arrays there is another form of loop, for..of:
for(let mm of mobile){
    console.log('for of Loop : ' + mm);
}

// arrays are objects, it is also possible to use for..in:
for(let key in mobile){
console.log('for in Loop : ' + mobile[key]);
}

// Multidimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log('Matrix : ' + matrix[1][1]);
  
//   toString
let arr = [1, 2, 3];
console.log(arr);
console.log( String(arr) === '1,2,3');//true

