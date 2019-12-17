let colors = ['red', 'blue', 'green'];

function checkColor() {
for(let color of colors){
    if (color == 'red') {
        console.log("This Color is True")
    }else{
        console.log("This Color not in the List");
    }
}
}

checkColor();