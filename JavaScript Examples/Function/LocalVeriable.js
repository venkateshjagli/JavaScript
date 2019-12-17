// A variable declared inside a function is only visible inside that function.


function showName(){
    let name = "Hello! I'm JavaScript"; // local veriables
    console.log(name);
}
//  showName();

// console.log(name); //Error! The variable is local to the function

