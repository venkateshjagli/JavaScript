//Hour
//If hour is between 6am to 12pm: Good Morning!
//If it is between 12pm to 6pm: Good afternoon!
//Otherwise Good Evening!


//First Example
let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Evening');
}

//Second Example
let age = 25;

if (age >= 12 && age < 18) {
    console.log('Child');
}
else if (age >= 18 && age < 30 ) {
    console.log('Youngman');
}
else{
    console.log('Old age');
    
}