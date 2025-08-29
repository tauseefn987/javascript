// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUsre = {
    name: "Tauseef",
    "full name": "Tauseef Ahmad",
    [mySym]: "mykey1",
    age: 25,
    location: "delhi",
    email: "tauseef01@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUsre.email);
// console.log(JsUsre["email"]);
// console.log(JsUsre["full name"]);
// console.log(JsUsre[mySym]);

JsUsre.email = "tauseef@chatgpt.com"
// Object.freeze(JsUsre)
JsUsre.email = "tauseef@microsoft.com"
// console.log(JsUsre);

JsUsre.greeting = function(){
    console.log("hello JS user");
}
JsUsre.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUsre.greeting());
console.log(JsUsre.greetingTwo());