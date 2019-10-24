var employee = function (id, name, dob, salary, address){
    this.id = id;
    this.name = name;
    this.dob = dob;
    this.salary = salary;
    this.address = address;
}

var chandu = new employee("emp001", "Chandu", new Date("11-07-1990"), 23000, "VidyaNagar");
var JT = new employee("emp002", "NareshJT", new Date("07-01-1975"), 25000, "Harijanawada");
var Naresh = new employee("emp003", "NareshM", new Date("01-03-1980"), 33000, "TeliCom Colony");
var Kalyan = new employee("emp004", "Kalyan", new Date("01-01-1982"), 23000, "GadwalRoad");
var Venky = new employee("emp005", "Venkatesh", new Date("01-26-1991"), 20000, "Marathahalli");


var employees = [];
employees.push(chandu);
employees.push(JT);
employees.push(Naresh);
employees.push(Kalyan);
employees.push(Venky);


var la = employees.filter(sal => sal.salary >= 24000  );
//console.log(la);


// let sala = getSalaryMoreThan25000(employees, 25000)
// console.log(getSalaryMoreThan25000(employees,"emp005" ));

function getSalaryMoreThan25000(employees, salary) {
    for(let i = 0; i < employees; i++){
        let sal = employees[i];
        if (sal.id === id) {
            return sal;
        }
    }
}
var getSalr = employees.filter(emp => emp.salary > 25000);
//console.log(getSalr);

let getName = employees.filter(emp => emp.name === "Kalyan");
console.log(getName);

