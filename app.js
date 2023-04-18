'use strict';

/*
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

// ========================

// =======================
// NOTES: From Head First JavaScript book

function bark (name, weight) {
    if(weight > 20) {
        console.log(name + ' says WOOF WOOF');
    } else {
        console.log(name + ' says woof woof');
    }
}

// call the function
bark('june',20);
bark('scottie',-1);
bark('mike',25);
bark('jen',0, 0); // ?
bark('troy',"20"); // ?

*/
////////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// FUNCTION DECLARATION VS FUNCTION EXPRESSIONS
// v.34


// DECLARATION
/*
// long way to do this
function calcAge1 (birthYear) {
    const age = 2023 - birthYear;
    return age;
}
*/
/*
// shorter way to write the above
function calcAge1 (birthYear){
    return 2023 - birthYear;
}

// call function
//calcAge1 (1977); // save this as a variable
//
const age1 = calcAge1(1977);
console.log(age1);

*/
// EXPRESSION
/*
const calcAge2 = function (birthYear) {
    return 2023-birthYear;
}

const age2 = calcAge2(1977);

console.log(age1, age2);
*/
////////////////////////////////////////
///////////////////////////////////////
//////////////////////////////////////////////
/*
// vid. 35 ARROW FUNCTIONS

// Function Expression-use as a ref comparison to arrow function
const calcAge2 = function (birthYear) {
    return 2023-birthYear;
}

// Arrow function
// write the above as an arrow function
// birthYear => 2023 - birthYear; // this is an arrow function...next, store in a varialbe

const calcAge3 = birthYear => 2023 - birthYear; // this is good for one-liner functions, and returns value automatically without using the return. the arrow function here, also did not need parenthesis.
const age3 = calcAge3(1977); // this invokes calcAge3, and assigns it to a variable
console.log(age3);
*/

////////
/*
// how many years a person has left until retirement...will need to calculate the age and calculate the years to retirement
const yearsUntilRetirement = birthYear => {
    const age = 2023 - birthYear; // calculates age
    const retirement = 65 - age; // calculates how many years until retirement
    return retirement; // you can only omit the return IF you have a 1-liner function.
}

console.log(yearsUntilRetirement(1977));
*/
// the above is a circumstance in which we have one parameter with multiple lines of code

// the below is a circumstance in which we have multiple parameters
/*
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear; // calculates age
    const retirement = 65 - age; // calculates how many years until retirement
    // return retirement; // you can only omit the return IF you have a 1-liner function.
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(1977, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Jr'));
*/

///////////////////////////////////
///////////////////////////////////

// Functions Calling Other Functions

// vid. 36

// this function cuts a fruit into four piecess
function cutFruitPieces(fruit) {
    return fruit * 4;
}

//
function fruitProcessor(apples, oranges) {
    // these (applePieces & orangePieces) are function that call the function (cutFruitPieces) from inside of another function.
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice; 
}
console.log(fruitProcessor(2,3)); // this invokes the fruitProcessor function, which in turn calls the cutFruitPieces function that's inside of it.