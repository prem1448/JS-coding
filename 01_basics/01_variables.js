const accountId = 12345
let accountEmail = "prem@gmail.com"
var accountPassword = "123456"
accountCity = "bihar"
let accountState;

// accountId = 123 // not allowed

accountEmail = "premanand123@gmail.com"
accountPassword ="112233"
accountCity = "chandigarh"

console.log(accountId);

/*
prefer not use to var
because of issue in block scope and funtional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
 