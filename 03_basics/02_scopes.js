//global scope
//var c = 
let a = 300

// block scope
if (true){
   let a = 10
   const b = 20
   //var c = 30
//    console.log("INNER: ",a);
   
}

// for (let i = 0; i < array.length; i++) {
    // const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "prem"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

// one()

if (true) {
    const username = "prem"
    if (username == "prem") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++  interesting  +++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}


// donot access addtwo before initialization
addtwo(5)
const addtwo = function(num){
    return num + 2
}

