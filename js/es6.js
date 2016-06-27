"use strict";

// let keyword

let myFirstVariable = 1;
// var myFirstVariable = 2;
console.log(myFirstVariable);


for(let i = 0; i<5; i++) {
	console.log(i);
}
/* for(var i = 0; i<5; i++) {
	console.log(i);
}
alert(i);*/

// const keyword **************************/

/* const pi = 3.14;
pi = 4;*/


/* const myConsts = {
	pi: 3.14,
	e: 2.73
}
myConsts.pi = 4;
console.log(myConsts);*/


// Object Literal Shorthand ***************/

function foods( favFood, badFood) {
	return {
		favFood: favFood,
		badFood: badFood
	}
}
function foods( favFood, badFood) {
	return {
		favFood,
		badFood
	}
}
var myFood = foods('Burger','Nothing');
console.log( myFood );

// Destructing **************************/

var bestSitesInTheWorld = ['codedamn','google','yahoo','facebook'];
/* var first = bestSitesInTheWorld[0];
var second = bestSitesInTheWorld[1];
var third = bestSitesInTheWorld[2]; */
var [first, second, ...rest] = bestSitesInTheWorld;
console.log( first );
console.log( second );
console.log( rest );


function doesEverythingPossibleTo2Numbers( a, b ) {
	return [ a+b, a-b, a*b, a/b, a%b, a^b, a==b ];
}
var [add, sub, mul, div, mod, po, eq] = doesEverythingPossibleTo2Numbers( 2, 3 );
console.log( add );
console.log( sub );
console.log( mul );
console.log( div );
console.log( mod );
console.log( po );


var food = {
	burgers: 'McBurgers',
	coffee: 'starbucks'
}
var { burgers: myBurger, coffee: myCoffee} = food;
console.log( myBurger );
console.log( myCoffee );

// Rest and Spread **************************/

var webLanguages = ['html', 'css', 'javascript', 'es6', 'angular'];
var serverLang = ['php', 'asp', 'c#', 'java', 'rails'];
var compProg = ['c','c++','win32api','...'];
var fullstackLang = [...webLanguages, ...serverLang];
fullstackLang.push(...compProg);
console.log( fullstackLang );


function myFunc( arg1, arg2, ...rest ) {
	console.log( rest );
}
myFunc( 1, 2, 3, 4, 5, 6, 7, 9);


// Default function argument values *******/

function myFunction( arg1, arg2 = 100 ) {
	if( arg2 == undefined ){
		arg1 = 100;
	}
	console.log( arg1 + arg2 );
	console.log( arguments );
}
myFunction(100);


// Fat Arrow Functions *******************/

var add = function (  num1, num2 ) {
	return num1 + num2;
};
var add = ( num1, num2 ) => {
	return num1 + num2;
}
var add = ( num1, num2 ) => num1 + num2;
console.log( add(2,8) );