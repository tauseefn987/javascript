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

console.log(id === anotherId);

const bigNumber = 345683487357934n


// JavaScript is a dynamic language and not static,


// reference (Non primitive)  

// Array, Objects, Functions

const heros = ["ironman"]

// ***************     ***********************

"use strict"; // treat all js code as newer version

// alert(3 + 3)  we are using nodejs, not brower

let name = "Tauseef"  
let age = 23  
let isloggedIn = false  
let state = null


//number =>     2 to power 53
// bigint
// string =>     ""  ''
// boolean =>   true/false
// null =>      standlone value (empty khali)
// undefined => (variable to define hai lkin value define nhi kiya hai)
// symbol =>    unique



// object

console.log(typeof "tauseef")      //steing
console.log(typeof age)           // number
console.log(typeof null)         // object
console.log(typeof undefined)   // undefined