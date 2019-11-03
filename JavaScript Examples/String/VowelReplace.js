let str = "Hello Jeglee Narasimhalu";
// console.log(str);

// console.log(str.length);

//for of Looping
for(let i of str){
    //console.log(i);
}

//concat 
let txt = str.concat( ' ' + '!');
// console.log(txt);

//slice
let txt1 = str.slice(0, 5);
let txt2 = str.slice(6, 12);
let txt3 = str.slice(13, 24);
// console.log(txt1);
// console.log(txt2);
// console.log(txt2.length);
// console.log(txt3);

//Split
let txt4 =str.split(' ');
for(let i of txt4){
    //console.log(i);
}    

let name ="Venkatesh";
console.log(name);


for(let i = 0; i<name.length; i++){
    let nam = name[i];
    //console.log(nam);
    nam += nam;
    console.log(nam);
}







//let str1 = str.replace('Hello', 'Jeglee');
//console.log(str1);

let ss = str.replace("/eo/", '');
//console.log(ss);

    
// for(let i of str){  
//     i.replace(['aeiou\gi'] , '');
//     console.log(i);
    
// }

// for(let i of str){  
//     i.match(['/aeiou/g'] , '');
//     console.log(i);
    
// }
