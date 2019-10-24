var student = function(id, name, address){
    this.id =id;
    this.name = name;
    this.address = address;
}

var venkob = new student("std005", "Venkob Rao", "Pune");
var mahesh = new student("std006", "Mahesh", "Raichur");
var chandu = new student("std007", "Chandu", "Chinthamani");

var students = [];
students.push(venkob);
students.push(mahesh);
students.push(chandu);

//console.log(students);

let studentId = getDetailsBasedOnStudentID(students);
console.log(studentId);

function getDetailsBasedOnStudentID(students) {
    let list = [];
    for(let i in students){
        var stdId = students[i];
        if (stdId.id == 'std005') {
            list.push(stdId);
        }
    }
    return list;
}