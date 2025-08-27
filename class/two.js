// arrow function = ( () => {} )
    // map will return something(new arr) 
    var arr = [1,2,3,4,5,6]
    var count = 0;

    // loop for aeeay
    // forEach
    arr.forEach( () => {count++} )
    // console.log(count);

    // map = it will return new arr 
    var doubled = arr.map( (n) => {return n*n} )
    // console.log(doubled);

    // reduce = it will also return value
    var sum = arr.reduce( (total,curr) => {return total + curr} )
    // console.log(sum);
    
    // filter
    var cond = arr.filter( (n) => {return n>4} )
    // console.log(cond);
    
    // sort function is only use in string not for number
    var arr1 = [6,4,8,3,9,44,88,50,26,87,90,465]
    // console.log(arr1.sort());
    
var obj = {
    "firstname":"prem",
    "phone":6201370277,
    "isEmp":true,
    "sayHello":function(){console.log("hii")},
    "eat":()=>console.log("I like to eat Indian food")
}
// console.log(obj.phone);
// console.log(obj.sayHello());

// dynamical value print
var fname = "Prem"
var lname = "Anand"
// console.log(`${fname} ${lname}`);


// loop for object
 for( var key in obj ){
    // console.log( key + ":" + obj[key]);
}

// --------------------function------------------------
// 1.function statement 
function a(){
    console.log("a");
}
a();

//  difference betweeen parameter and argument 
function sum(a, b){ //--->parameter=function definition
    var total = a + b;
    console.log(total);
}
a = 5 //argument=function calling
b = 6 //argument
var sum = a+b;
console.log(sum);

// 2.function expersion
var b = function (){
    console.log("b");
}
b();


    
    