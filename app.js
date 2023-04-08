'use strict';


// create function. anything within the function body {}, is what will be executed when the function logger is- run, called, invoked...
 
function logger() {
    console.log('My name is Jonas');
}

// call, run, invoke the function like this...you can run a function as many times as you need to.
logger();

// functions can not only reuse data, but it can also recieve and send data back. 

// create a function with parameters
// Parameters: are like variables that are specific only to this function...and these parameters will get defined once we call the function.

// give the 'fruitProcessor' function two parameters

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

    return juice;
}

// the values of the parameters are called= arguements
const appleJuice = fruitProcessor(5, 2);
console.log(appleJuice);


// reuse the function with different input values, and get a different output.
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);