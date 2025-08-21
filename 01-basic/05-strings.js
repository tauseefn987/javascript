const name = "tauseef"
const repoCout = 50

// console.log(name + repoCout + " value");

console.log(`HEllo my name is ${name} and my repo count is ${repoCout}`);

const gameName = new String('tauseef-fn-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherstring = gameName.slice(-8,4)
console.log(anotherstring);

const newStringone = "   tauseef   "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://tauseef.com/tauseef%20ahmad"

console.log(url.replace('%20', '-'));
 
console.log(url.includes('sauseef'));

console.log(gameName.split('-'));
