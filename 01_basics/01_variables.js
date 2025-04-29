const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity= "Kathmandu"
let accountState;

// accountId= 2

accountEmail= "prakash@gmail.com"
accountPassword= "11223344"
accountCity= "Pokhara"

console.log(accountId);// this is use for single type of print
console.table([accountEmail, accountPassword, accountCity, accountState])// this is use for multiple data to be print in tabular form.
/*
Prefer not to use var use let
Because of issues in block scope and functional scope
*/