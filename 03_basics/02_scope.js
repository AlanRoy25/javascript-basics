// var c = 300 // this is global scope .. written outside the function

let a =300
if(true){ // code written inside the block is known as block scope
  let a = 10
  const b = 20
  c = 101
 // console.log("Inner : " , a); // block scope

}
//console.log(a); // calling the global scope


function one(){
  const username = 'Alan'
  
  function two(){
    const website = "youtube"
   // console.log(username) // this will get executed since the username is declared global scope
  }
  //console.log(website); // this is not defined showing error its because this is declared outside the function scope 
  two()
}
one()

if(true){
  const username = 'alan'
  if(username==='alan'){
    const website =  ' google'
   // console.log(username + website)
  }
 // console.log(website); // throws error because the website call is declared out the block scope.
}
// console.log(username) // now this will throw an error because it is declared outside the global scope and outside the if statement


// ++++++++++++Intersting +++++++++++++++++




console.log(addone(5)) // function hoisting :(declared before the function definition before its executed)
function addone (num){ // Another way of declaring the function                                                                                                                                                                                                                                                    
  return num +1 
}
addone(5); // throws error wont return the function in this way (need to remember)

console.log(addone(5)) // Even this format is also correct (function hoisting : function declarations are hoisted, and the function is available before the console.log statement is executed.)
 // output:  the output will be 6 because addone(5) is evaluated, and the result (6) is passed to console.log.

 
addTwo() // In this case it will give error because isme ek variable ke sath function declare kiya hai so.. before initilization
const addTwo =  function (num){
  return num +1 
}
addTwo() // this will throw the error since its outside the scope



