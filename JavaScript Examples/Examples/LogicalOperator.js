// || (OR), && (AND), ! (NOT).

console.log('************* || (OR) **************');
//first or second element is true condition is true
let user = null;
let guist = 'venky';
let name = user || guist;
console.log('String Value : ' + name);


let chanduSalary = 23000;
let venkySalary = null;
let salary = chanduSalary || venkySalary || 0;
console.log(salary);

console.log('************* && (AND) **************');
//AND Operator all element true means excute last element, otherwise one or condition false statement is false
let user1 = 'jeglee';
let guist1 = 'venky';
let name1 = user1 && guist1;
console.log('String Value : ' + name1);

let chanduSalary1 = 23000;
let venkySalary1 = null;
let salary1 = chanduSalary1 && venkySalary1 ;
console.log(salary1);


console.log('************ unary operator *************');



console.log('************ Increment/decrement *************');
let num1 = 5;
let num2 = 7;
console.log(num1);
console.log(num2);

console.log('************* Increment *************');
// post increment
console.log(num1++);
console.log(num1);

// pre increment operetor
console.log(++num2);

console.log('************* Decrement *************');
// post decrement
console.log(num1--);
console.log(num1);

// pre decrement
console.log(--num2);


console.log('************ Bitwise Operator *************');

let num3 = 2;
let num4 = 'venky';
let num5 = num3 | num4;
console.log('Bitwise Operator : ' + num5);


console.log('********* Remander **********');
let num6 = 15;
if (num6 % 3) {
    console.log(num6);
    
}
