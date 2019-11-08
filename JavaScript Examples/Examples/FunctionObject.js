
// a function’s name is accessible as the “name” property:

console.log('*************** The Name of Property ****************');

function sayHi() {
    console.log('its calling function name');
 }
 console.log('function Name : ' + sayHi.name); //its calling function name


let sayHello = function() {
 console.log('Venkatesh');
 };
 console.log('function Name : ' + sayHello.name);
 

 console.log('***************** The Length of Property *****************');
 
function fun1(a) {}; 
function fun2(a, b) {}; 
function many(a, b, ...more) {}; //...more ->  rest parameters
console.log('fun1 length : ' + fun1.length);
console.log('fun2 length : ' + fun2.length);
console.log('many length : ' + many.length);

console.log('********** Custom Property ***********');
// we add the counter property to track the total calls count:
function customProCount() {
    console.log('Hi ');
    // let's count how many times we run
    customProCount.counter++;
 }
 customProCount.counter = 0;
 customProCount();
 customProCount();
 customProCount();
 console.log('called ' + customProCount.counter + ' times');
 console.log(`called ${customProCount.counter}  times`);

 console.log('************* Named Function Expression -> NFE **************');
//  Named Function Expression, or NFE, is a term for Function Expressions that have a name.
// let’s take an ordinary Function Expression:
 let namedFuncExpre = function (who) {
     console.log(`Hello ${who}`);
 }
 namedFuncExpre('Venky');

//  There are two special things about the name func, that are the reasons for it:
// It allows the function to reference itself internally.
// It is not visible outside of the function.
let names = function func(who) {
    console.log(`Hello ${who}`);
 }
 names('Chandu');
//  the function sayHi below calls itself again with "Guest" if no who is provided:
 let sayHiVenky = function func(who) {
     if(who){
         console.log(`Hello ${who}`); // use func to re-call itself
 }
 else{
     func('Guest');
 }
 }
 sayHiVenky();

 // But this won't work:
//func(); -> // Error, func is not defined (not visible outside of the function)

// The problem with that code is that sayHiVenky1 may change in the outer code. If the function gets assigned to another variable instead, the code will start to give errors:
let sayHiVenky1 = function (who) {
    if(who){
        console.log(`Hello ${who}`); 
}
else{
    //sayHiVenky1('Guest'); // Error: sayHi is not a function
}
}
let welcome = sayHiVenky1;
sayHiVenky1 = null;
welcome(); // Error, the nested sayHi call doesn't work any more!

// That happens because the function takes sayHi from its outer lexical environment. There’s no local sayHi, so the outer variable is used. And at the moment of the call that outer sayHi is null.
// The optional name which we can put into the Function Expression is meant to solve exactly these kinds of problems.
let sayHiVenky2 = function func(who) {
    if(who){
        console.log(`Hello ${who}`); 
}
else{
    sayHiVenky2('Guest'); // Error: sayHi is not a function
}
}
// let welcome = sayHiVenky2;
sayHiVenky2 = null;
welcome();

console.log('******** Closure **********');
function getFunc() {
    let value = "test";
    let func =  new function() { 
        console.log(value);
    }
    return func;
}
getFunc()();