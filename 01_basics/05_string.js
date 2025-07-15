const name = "prem"
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('prem-anand')
//here string is a object

//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString1 = "   prem   "
console.log(newString1);
console.log(newString1.trim());

const url = "https://prem.com/prem%20anand"

console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes('prem'));

console.log(gameName.split('-'));

