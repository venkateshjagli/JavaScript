
//Literals and properties
let person = {      // an object
    name: 'venky',  // by key "name" store value "venky"
    age: 28,        // by key "age" store value 30
 }
// console.log(person.name);


//We can also use multiword property names, but then they must be quoted:

let user = {
  name: "chandu",
  age: 29,
  "likes birds": true,  // multiword property name must be quoted
};
// console.log(user.age);   // Property values are accessible using the dot notation:

/*
For multiword properties, the dot access doesn’t work:

 // this would give a syntax error
user.likes birds = true
*/

// The value can be of any type. Let’s add a boolean one:
console.log(person);
console.log( person.marriage = false);
console.log(person);

// To remove a property, we can use delete operator:
console.log('remove a property using delete operator : ' + delete person.age);
console.log(person);


// for in loop
for(let key in  person){
  console.log([key]);
  
}

