let score1 = 33
let score2 ="33"
let score3 ="33abc" /*check score on null and undefined
it also show Nan but in boolean ture=1 and false=0 */
console.log(typeof score1);
console.log(typeof(score2));

let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1);

let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
 
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
