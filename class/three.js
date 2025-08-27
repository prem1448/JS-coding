// function total(f1(), f2()){
//     return f3
// }
// a = 5
// b = 6
// sum (f1, f2)

// var b = function (){
//     console.log("please give me some name");
// }
// b();

// function xyz(){
//     console.log("please give me some name");
// }
// xyz()

// iife
// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

var a = 10;
function x(){
    var b = 15;
    function y(){
        var b = 10;
        console.log(a+b);
    }
}
x();

const add = (a) => {
    return(b) => {
        return a + b;
    }
}
console.log(add(5)(10));

// asynchronous` js
// 1.callbacks 2.fetch 3.promises 4.async awaity