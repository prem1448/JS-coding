// primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail; // its output is undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 51616554864651665n
//when we put n at the end of number it will become bigIn

//reference (non primitive)

// Array, Object, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "prem",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);



