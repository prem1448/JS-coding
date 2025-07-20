// singleton
// object.create

// object literals

const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    name: "prem",
    "full name": "prem anand",
    mySym1: "myKey1",
    [mySym2]: "myKey2",
    age: 20,
    location: "Jaipur",
    email: "premanand67890@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym1);
// console.log(typeof JsUser.mySym1);
// console.log(JsUser[mySym2]);
// console.log(typeof JsUser[mySym2]);

JsUser.email = "premanand67890@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "premanand67890@microsoft.com"
//console.log(JsUser);

JsUser.greeting1 = function(){
     console.log("Hello JS user");
}
JsUser.greeting2 = function(){
     console.log(`Hello JS user, $(this.name)`);
}

console.log(JsUser.greeting1());
console.log(JsUser.greeting2());
