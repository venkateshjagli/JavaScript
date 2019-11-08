// A function can be called with any number of arguments, no matter how it is defined.
function sum(a, b) {
    return a + b;
}
console.log(sum(5,4,2,1,5));

// Rest Parameters
// he first two arguments go into variables and the rest go into surName array:
function showName(firstName, lastName, ...surName) {
    console.log(firstName + ' ' + lastName);
    console.log(surName[0]);
    console.log(surName[1]);
    console.log(surName[2]);
 console.log(surName.lenght);
 }

 showName('Venkatesh', 'Jeglee', 'Pirangi', 'Maitri', 'Shravan');
 

