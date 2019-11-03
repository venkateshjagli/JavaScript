'use scrict'
console.log('************* WeakMap And WeakSet ***********');
// As we know from the chapter Garbage collection, JavaScript engine stores a value in memory while it is reachable (and can potentially be used).

console.log('*********** Garbage Collection **********');

//object will be removed from memory
let person = {name: 'Venky'};
console.log(person);
person = null;// overwrite the reference
console.log(person);// the object will be removed from memory

// Chandu is stored inside the array, so it won't be garbage-collected

let str = {name: 'Chandu'};
console.log(str);
let str1 = [str];
console.log(str1);
str1 = null;
console.log(" it won't be garbage-collected : " + str1);// we can get it as array[0]

console.log('Similar to that, if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.');


//WeakMap
let venky = {neme: 'Venkatesh'}
let weakMap = new WeakMap();
weakMap.set(venky, '...');
console.log(venky);

console.log('************** WeakSet **************');

let visitedSet = new WeakSet();

let venkat = {name: 'Venkatesh'};
let kalyan = {name: 'Kaylan'};
let mNaresh = {name: 'M Naresh'};
let chandu = {name: 'Chandu'};
let jt = {name: 'JT'};

visitedSet.add(jt);
visitedSet.add(kalyan);
visitedSet.add(jt);

console.log(visitedSet.has(jt));
console.log(visitedSet.has(venky));

jt = null;
console.log(visitedSet.has(jt));// visitedSet will be cleaned automatically


