'use strict';
console.log('************* Map and Set *************');


console.log('************ Map ************');

// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
let college = {clgName: 'DrAIT'};

let students = new Map();// for every user, let's store their visits count
students.set(college, 7);// john is the key for the map
console.log(students.get(college));// result is '7'

//or 
let students1 = {};
students1[college] = 123;
console.log([students1]);

console.log('************* Iteration over Map *************');
/*
->map.keys()
->map.values()
->map.entries()
*/
let recipeMap = new Map ([
    ['cucumber', 500],
    ['tomato', 350],
    ['onion', 200]
]);

// map.keys()
for(let vegatables of recipeMap.keys()){
    console.log(vegatables);
 }

//  map.values()
for(let amount of recipeMap.values()){
    console.log(amount);
 }

// map.entries()
for(let entry of recipeMap){
    console.log(entry);
 }

 //Object.entries: Map from Object
 console.log(recipeMap);

 console.log(recipeMap.get('onion'));

//  we can create a map from an object like this:
 let obj = {
    name: "Venky",
    age: 28
  };
  
  let map = new Map(Object.entries(obj));
 console.log(map.get('name'));


console.log('************ Set **************');
let set = new Set();

let venky = {name: 'Venky'};
let chandu = {name: 'Chandu'};
let naresh = {name: 'Naresh'};
let thimappa = {name: 'Thimappa'};
let kaylan = {name: 'Kaylan'};
let mNaresh = {name: 'M Naresh'};

// visits, some users come multiple times
set.add(venky);
set.add(chandu);
set.add(naresh);
set.add(chandu);
set.add(venky);
set.add(naresh);
set.add(venky);
set.add(chandu);
// set.add(thimappa);
set.add(kaylan);

console.log('Check the Set size : ' + set.size);

for(let user of set){
    console.log(user);
 }