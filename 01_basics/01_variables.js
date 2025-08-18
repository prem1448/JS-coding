const accountId = 12345
let accountEmail = "prem@gmail.com"
var accountPassword = "123456"  // whenever var is anything but at the end in output it will show var is string then it shoe string 
var f1 = "prem"
accountCity = "bihar"
let accountState;

// accountId = 123 // not allowed

accountEmail = "premanand123@gmail.com"
accountPassword ="112233"
accountCity = "chandigarh"

console.log(typeof f1);

console.log(accountId);

/*
prefer not use to var
because of issue in block({}) scope = limit,use in let,const,es6t and funtional scope = use in var,es5
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
 
// <------Notes---->
// constant = const, redecalre x, reinilize x, temporal ded zone(TDZ), es6t, block scope
// var = redecalre , reinilize, global context, es5, functional scope
// let = redecalre x, reinilize, temporal ded zone(TDZ), es6t, block scope

// null, undefined
console.log(accountState); // undefined

// temporal ded zone(TDZ) = not excess the value of let and const
// global context = excess the value of var

