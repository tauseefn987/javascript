/* primitive or non primitive data types
jis basic pr data ko memory mei store kiya jata hai or access kiya jata 
ho us basic pr data ka 2 category ha primitive or non primitive */

// primitive 

// 7 types : string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 345683487357934n


// JavaScript is a dynamic language and not static,


// reference (Non primitive)  

// Array, Objects, Functions

const heros = ["ironman" , "thor", "spiderman" ];
let myObj = {
    name: "tauseef",
    age: 22,
}

const myFunction = function(){
    console.log("hello World");
}