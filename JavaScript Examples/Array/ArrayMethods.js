let arr = ["ramesh", "naresh", "thimappa"];
//delete
delete arr[1]; // remove "go"
//console.log(arr);
//console.log(arr.length);

//splice
let arr1 = ["I", "study", "JavaScript"];
arr1.splice(1, 1); // from index 1 remove 1 element
//console.log(arr1); // ["I", "JavaScript"]


let arr2 = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr2.splice(0, 3, "Let's", "dance");
//console.log( arr2 ) // now ["Let's", "dance", "right", "now"]

//concat
let fname = "Venkatesh";
let lname = 'Jeglee';

//console.log(fname.concat(" " + lname));

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:

}
let str = greeting ('Welcome to 10 Days of Javascript!');
console.log(str);