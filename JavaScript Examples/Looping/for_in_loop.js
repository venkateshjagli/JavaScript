//for-in-loop in Object
let employee = {
    name: 'Chandu',
    place: "Chintamani"
}

for(let key in employee){
    //console.log(key, employee[key]);
}

//for-in-loop in Array
let color = ['red', 'blue', 'green'];
for(let index of color){
   // console.log(index, color[index]);
}


//Person 
function person(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

let venky = new person ("Venkatesh", 28, 20000);
let chandu = new person ("chandu", 29, 35000);
let naresh = new person ("naresh", 28, 25000);

let persons = [];
persons.push(venky);
persons.push(chandu);
persons.push(naresh);

//getSalary morethan 25000
function getSalaryMoreThan25000(persons, salary) {
    for(let sal = 0; sal < persons; sal++){
        if (persons.salary >= 25000) {
            console.log('Salary More Than is :' + salary);
        }
    }
}

function getPersonName(persons, name) {
    for(let i =0; i<persons.length; i++){
        //console.log(persons[i]);
        var per = persons[i];
        if (per.name === name) {

            return per;
            
        }
    }
}
//console.log(getPersonName, venky);

for(let key in persons){
    console.log(key, persons[key]);
}
