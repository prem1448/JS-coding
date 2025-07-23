
function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("E");
    console.log("M");
}

// sayMyName()

// function addTwoNumbers(number1, number2){//when you create defintion then it is parameters.
//       console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)//when you call the value is then it is argument.
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

// const result = addTwoNumbers(3, 5)
// console.log("result:", result);
function addTwoNumbers(number1, number2){
      
    // let result = number1 + number2
    // return result  //after result nothing is printed in output.
    // console.log("prem");

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("result:", result);

function loginUserMessage(username){// username = "anand" ,argument is nothing then it will always return anand.
    //but argument is anything like prem then it will return prem because it over write the value of parameter.
    if(username === undefined){// "" , undefined both are false value. Ex=(!username)
       console.log("Please enter a username"); 
       return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("prem"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));
//val1=200, val2=400, rest is in the ...num1.

const user = {
    username: "prem",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "anand",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
//both ([200, 400, 500, 1000]) and myNewArrray are same.
