//global scope
//var c = 
let a = 300

// block scope
if (true){
   let a = 10
   const b = 20
   //var c = 30
   console.log("INNER: ",a);
   
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
}

console.log(a);
// console.log(b);
// console.log(c);
