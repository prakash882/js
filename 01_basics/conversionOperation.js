let score = 33

console.log(typeof score);
console.log(typeof(score));// line 3 and 4 are same

let valueInNumber= Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)


/*
"33" => 33
"33abc" => Nan// not a number
true => 1 and false => 0
*/

let isLoggedIn = "Prakash"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)