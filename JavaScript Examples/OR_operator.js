
//the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.
let age = 31;
if(age < 25 || age > 30){
    console.log(" He Not Selected this Exam Age More than 30 years");
}

let job = null;
let jobSearching = "Yes";

var name = job || jobSearching || "Unemployee";
    console.log(name);
    

    
 let hour = 9;
 if (hour < 10 || hour > 18) {
     console.log("The office is closed"); 
 }

 
 let hour1 = 12;
 let isWeekend = true;
 if (hour1 < 10 || hour1 > 18 || isWeekend) {
     console.log("The office is closed"); 
 }

 let currentUser = null;
let defaultUser = "Venky";

let name = currentUser || defaultUser || "unnamed";
console.log(name);// selects "Venky" – the first truthy value
