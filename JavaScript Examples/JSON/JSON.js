let person = {
    name: 'Venky',
    age: 28,
    course: ['HTML', 'CSS', 'JS'],
    wife: false,
    job: 'No'
};

console.log('Object Display : ' + person);

let json = JSON.stringify(person);
console.log('Object to JSON Object convert : ' + json);

console.log('************** **************');

let user = {
    sayHi(){ //ignored
        console.log("Hello");
 },
 [Symbol('id')]: 123, //ignored
 something: undefined //ignored
};
console.log('All are Objects Ignored : ' + JSON.stringify(user)); // {} (empty Object)


let meetup = {
    title: 'Conference',
    room:{
        number: 23,
        participants: ['venky', 'chandu', 'naresh']
    }
}
console.log(meetup);


let user1 = { 
    name: 'Chandu',
    age: 29,
    // marriage = false, -> //Invalid shorthand property initializer
    marriage: false,
    job: true
}
console.log('output Result show distance : ' + JSON.stringify(user1, null, 2));

let person1 = {
name: 'naresh',
DOB: new Date(1991, 07, 01)
}
console.log('Its autometically convert toString method : ' + person1);

console.log('************** JSON.parse *************');
let userData = {name:'thimappa', age:29, marriage:false, salary:18000 }
console.log('JSON.parse : ' + userData);

console.log('********** Tasks ***********');
let venky = {
    name: 'Venkatesh',
    age:28
}
console.log(JSON.stringify(venky));





