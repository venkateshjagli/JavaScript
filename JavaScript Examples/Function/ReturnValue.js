//First Programm
function sum(a, b) {
    return a + b;
}
let result = sum(5,4);
// console.log(result);

//Second Programm
function checkAge(age) {
    if (age > 18) {
        return true;
    }else{
        return confirm("Do your have permission from your parents?");
    }

}
let age = prompt("How old are you?", 18);
if (checkAge(age)) {
    console.log("Access granted");
}else{
    console.log("Access denied")
}

