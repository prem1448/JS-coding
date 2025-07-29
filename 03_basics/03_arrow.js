const user = {
    username: "prem",
    price: 999,

    welcomeMessage: function(){
        // here (this) is current contact
        console.log(`${this.username},welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "anand"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "prem"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "prem"
//     console.log(this.username);
    
// }
const chai = () => {
    let username = "prem"
    console.log(this);
    
}
// chai()

// explicite use (return)
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicite use (not return)
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "prem"})

console.log(addTwo(3, 4));


// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(() => {})
