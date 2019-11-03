let names = ['venky', 'chandu', 'naresh'];

let nam = names.length;
//console.log(nam);

//console.log(names);

names[1] = 'kupendra';
//console.log(names);


//Trailing comma
//An array, just like an object, may end with a comma:
let fruits = [
    "Apple",
    "Orange",
    "Plum",
  ];
  //console.log(fruits);

  fruits[3] = 'Tomota';
  //console.log(fruits);
  //The “trailing comma” style makes it easier to insert/remove items, because all lines become alike.

 

  // iterates over array elements
  for (let fruit of fruits) {
   //console.log(fruit);
  }
  

  for(let key in fruits){
    //console.log(fruits[key]);
  }


  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  //console.log(matrix[1][1]);  // 5, the central element

  let arr = [1, 2, 3];

//console.log(arr); // 1,2,3
//console.log(String(arr) === '1,2,3' ); // true
  