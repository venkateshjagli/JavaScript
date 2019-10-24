/*
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
*/



// AND returns true if both operands are truthy and false otherwise:
let hour = 11;
let minuts = 45;
if (hour == 11 && minuts == 45) {
    console.log("Time is 11:45");
    
}

/*
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
*/