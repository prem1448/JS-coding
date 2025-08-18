// (1)primitive (pre-defined)

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt......and many more

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

//(2)reference (non primitive)

// Array, Object, Functions,(),{},[]

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


//********************************************

// Stack(primitive)=copy data, Heap(Non-primitive)=reference of original value

let myYoutubename = "premyt"

let anothername = myYoutubename
anothername = "mintyt"

console.log(anothername);
console.log(myYoutubename);

let user1 ={
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "prem@gmail.com"

console.log(user1.email);
console.log(user2.email);
