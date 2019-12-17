// A function can access an outer variable as well, for example:
// First Programm
let lastName = "Jeglee";

function showFullName() {
    let firstName = "Venkatesh";
    console.log(firstName + " " + lastName);
}
// showFullName();

// Second Program
let userName = "Venkatesh";
function showMassage() {
    userName = "Chandu"; // changed the outer veriable
    console.log(userName);
}

// console.log(userName); // Venkatesh before calling function
// showMassage();
// console.log(userName); // Chandu the value was modified by the function

//Third Programm
let user = 'Thimappa';
function showName() {
    let user = 'Kumar'; //Local Veriable
    let userFirst = 'JT Naresh ' + user;
    console.log(userFirst);
}

showName();
console.log(user); // unchanged, the function did not access the outer variable