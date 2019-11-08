console.log('************** Losing “this” *************');
// We’ve already seen examples of losing this. Once a method is passed somewhere separately from the object – this is lost.
let user = {
    firstName:'Venky',
    sayHi(){
        // console.log(`Hello ${this.firstName}`); //Invalid shorthand property initializer
 }
}
// setTimeout(user.sayHi, 1000);
console.log('*********** Wrapper ************');

// Solution 1: a wrapper
// The simplest solution is to use a wrapping function:
let user1 = {
    lastName : 'Jeglee',
    sayHello(){
        console.log(`Hi ${this.lastName}`);
 }
}
setTimeout(function () {
    user1.sayHello();
}, 1000 );

// The same, but shorter:
setTimeout(() => user1.sayHello(), 1000);