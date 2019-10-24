//If Program
let age = 28;
if(age < 30){
    console.log("Young Men");
}
//else Program
let age1 = 30;
if(age1 < 28){
    console.log("Young Men");
}
else{
    console.log("Gentleman");
}

//else If Condition
let age2 = 50;
if(age2 < 35){
    console.log("Young Men");
}
else if(age2 < 40){
    console.log("Gentleman");
}
else {
    console.log("Old Man");
}


//Login 
let userName = prompt("who's there?", '');
    if (userName == "venky") {
      let pass = prompt("Password", "");
        if (pass == "Password") {
            alert("welcome");
        }
        else if(pass == '' || pass == null){
            alert("Canceled Pass");
        }
        else{
            alert("Wrong Password");
        }
    }
else if(userName == '' || userName == null){
        alert("Canceled User");
}
else{
    alert("I don't know you");   
}
    
let userName1 = prompt('Enter your username', '');
let passWord = prompt('Enter your password', '');
if (userName1 == 'master' && passWord == '123') {
alert('Welcome');
} else if (userName1 == '' || userName1 !== 'master' && passWord == '' || passWord !== '123' ) {
alert('Wrong username or password!');
alert('Canceled!');
}
