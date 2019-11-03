
//Literals and properties
let person = {      // an object
    name: 'venky',  // by key "name" store value "venky"
    age: 28,        // by key "age" store value 30
    marriage: false
}
console.log(person.name);


//We can also use multiword property names, but then they must be quoted:

let user = {
  name: "chandu",
  age: 29,
  "likes birds": true,  // multiword property name must be quoted
};
console.log(user.age);

/*
For multiword properties, the dot access doesn’t work:

 // this would give a syntax error
user.likes birds = true
*/