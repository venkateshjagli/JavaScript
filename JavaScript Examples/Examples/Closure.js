// A couple of questions
// Let’s consider two situations to begin with, and then study the internal mechanics piece-by-piece, so that you’ll be able to answer the following questions and more complex ones in the future.
// The function sayHi uses an external variable name. When the function runs, which value is it going to use?

let name = 'venky';

function sayHi() {
    console.log('Hi ' + name);
}
name = 'chandu';
sayHi();