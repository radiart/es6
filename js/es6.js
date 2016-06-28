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

var add = function ( num1, num2 ) {
	return num1 + num2;
};
var add = ( num1, num2 ) => {
	return num1 + num2;
}
var add = ( num1, num2 ) => num1 + num2;
console.log( add(2,8) );


// Lexical Scope *******************/

function startGame(  ) {
	this.lives = 0;
	this.addLives = function () {
		this.oneUp = setTimeout( function(){
			console.log(++this.lives);
		}, 1000);
	}
}
function startGame(  ) {
	this.lives = 0;
	this.addLives = () => {
		this.oneUp = setTimeout( () => {
				console.log(++this.lives);
	}, 1000);
	}
}
var mario = new startGame();
mario.addLives();


// String Templates *******************/

var name = 'codedamn';
var hellowWorld = `hey there ${name}! From EMCAScript6`;
console.log( hellowWorld );
var num1 = 2, num2 = 5;
var res = `2 + 5 equals = ${ num1 + num2 }`;
console.log( res );
var myStr = ` my 
long
string`;
console.log( myStr );


// Classes *******************/

class shape {
	constructor(shapeName, dimensions) {
		// console.log('YAY');
		this.allowedShapes = ['square','rectangle','circle'];
		this.shapeName = shapeName;
		this.dimensions = dimensions;
	}

	area() {
		if( this.validateShape()) {
			if(this.shapeName == 'square') {
				return this.dimensions[0]*this.dimensions[0];
			} else if ( this.shapeName == 'rectangle') {
				return this.dimensions[0]*this.dimensions[1];
			} else if ( this.shapeName == 'circle') {
				return 2*Math.PI*this.dimensions[0];
			}
			return false;
		}
		return false;
	}

	validateShape(){
		return( this.allowedShapes.indexOf(this.shapeName) > -1);
	}
}

var myShape = new shape('square', [10]);
console.log( myShape.area() );
var myShape = new shape('rectangle', [5,44]);
console.log( myShape.area() );
var myShape = new shape('circle', [100]);
console.log( myShape.area() );

// Inherit other Class

class myColor {
	getRandomColor() {
		var colors = ['red', 'green', 'blue','yellow','pink','black'];
		return colors[Math.floor(Math.random()*6)];
	}
}

class shape2 extends myColor {
	constructor(shapeName, dimensions) {
		// console.log('YAY');
		super();
		this.allowedShapes = ['square','rectangle','circle'];
		this.shapeName = shapeName;
		this.dimensions = dimensions;
	}

	draw(){
		if(this.shapeName == 'square') {
			document.write('<div style="width:'+this.dimensions[0]+'px;  height: '+this.dimensions[0]+'px;background:'+super.getRandomColor()+'"></div><br>');
		} else if( this.shapeName == 'rectangle' ) {
			document.write('<div style="width:'+this.dimensions[0]+'px;  height: '+this.dimensions[1]+'px;background:'+super.getRandomColor()+'"></div><br>');
		} else if( this.shapeName == 'circle' ) {
			document.write('<div style="width:'+this.dimensions[0]*2+'px; height: '+this.dimensions[0]*2+'px; border-radius: 50%;background:'+super.getRandomColor()+'"></div>');
		}
	}
}

var myShape = new shape2('square', [10]);
console.log( myShape.draw() );
var myShape = new shape2('rectangle', [150,50]);
console.log( myShape.draw() );
var myShape = new shape2('circle', [100]);
console.log( myShape.draw() );