
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
console.log(loginUserMessage());

