function myName(){
  console.log("hitesh");
}

myName();

function MynewName (name1){
  console.log(`${name1} this is my name`)
  return 
}

MynewName('Alan')

function addTwoNumbers(number1 , number2){

  //let result = number1 + number2
  //return result
  return number1 + number2
}
console.log(addTwoNumbers(3, 4)) // Another way of writing a function

function loginUserName(username){
  if(!username){
    console.log("please enter username");
    return 
  }
  return `${username} just logged in `
}
console.log(loginUserName("")) // empty string will return undefined