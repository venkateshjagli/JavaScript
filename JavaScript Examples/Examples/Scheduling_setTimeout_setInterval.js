console.log('***************** setTimeout ******************');
// allow you to execute statements ONCE after an interval 

// his code calls sayHi() after one second:
function sayHi() {
    console.log('Venkatesh');
 }
// setTimeout('his code calls sayHi() after one second : ' + sayHi, 1000);

// With arguments:
function withArguments(params, who) {
    console.log(params + ' ' + who);
 }
//  setTimeout(withArguments, 1000, "Hello", "Venkatesh");
 
const myFunc = delay => {
    console.log('Hello after ' + delay + ' Second');
 }
// setTimeout(myFunc, 5 * 1000, ' Five');
// setTimeout(myFunc, 10 * 1000, ' Ten');

console.log('************* setInterval **************');
// allow you to execute statements REPEATEDLY after an interval 
let counter = 0;
const fiveTimeRun = () => {
    console.log('Hello Venkatesh ' );
    counter +=1;
    if(counter === 5 ){
        console.log('Done');
        clearInterval(timerId);
    }
};
const timeId = setInterval(fiveTimeRun, 1000);