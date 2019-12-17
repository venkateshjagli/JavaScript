function showMassage(from, text) {   //arguments: from, text
    console.log(from + " : " + text );
}
// showMassage("Venky", "Hello");
// showMassage("Venky", "What's up?");

function massage(from1, text1) {
   from1 = '*' + from1 + '*';
   console.log(from1 + " : " + text1);
}
let from1 = 'Chandu';
massage(from1, 'Hello!');