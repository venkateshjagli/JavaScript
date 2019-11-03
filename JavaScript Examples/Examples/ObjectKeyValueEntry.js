let user = {
    name: 'Venkatesh',
    age: 28
}
//Objects key value is come like name, age
console.log(Object.keys(user));
 
// Object values is come like 'venkatesh' and 28
console.log(Object.values(user));

for(let value of Object.values(user)){
    console.log(value);
 }

console.log('Object use to loop the value and Add salaries');

 let salaries = {
     'venky': 250,
     'naresh': 350,
     'chandu': 1000
 }

 for(let value of Object.entries(salaries)){
     console.log(value);
 }
 
 function sumSalaries(salaries) {
     let sum = 0;
     for(let salary of Object.values(salaries)){
         sum += salary
     }
     return sum;
 }

 let totalSalary = sumSalaries(salaries);
 console.log('Add total Salary : ' + totalSalary);
 
 //or same function but use reduce 
 // reduce loops over array of salaries,
 // adding them up
 // and returns the result
function sumSalaries1(salaries) {
     return Object.values(salaries).reduce((a, b) => a + b, 0) //1600
    }
let totalSalary1 = sumSalaries1(salaries);
console.log('Add total Salary use reduce method : ' + totalSalary1);


// count properity
let user1 = {
    name: 'Suman',
    age: 27
};

function count(user1) {
 return Object.keys(user1).length;
    }

console.log(count(user1));
