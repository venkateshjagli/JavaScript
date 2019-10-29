
//Var keyword is Global use
for(var i = 0; i < 10; i++){
    console.log(i);//here also working Var keyword and Outside the loop also work
}
console.log('Var keyword is outside the loop also work :' + i);//here also var keyword work 


//Let keyword is block of scope
for(let x = 0; x < 6; x++){
    console.log(x);//only inside the loop work, don't work outside the loop
}
// x is not defined
//console.log(x); //here don't work let keyword



