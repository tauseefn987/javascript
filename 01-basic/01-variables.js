const accountId = 144553
let accountEmail = "tauseef@google.com"
var accountPassword = "123456"
accountCity = "Bhagalpur"
let accountState;

// accountId = 2 not allowed 
// bacause const variable not change

//java script mein bina Variables declare bhi variables declare hota hai
// but ye shii trika nhii hai

accountEmail = "itz@google.com"
accountPassword = "121212"
accountCity = "New delhi"

console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// accountState is undefined

