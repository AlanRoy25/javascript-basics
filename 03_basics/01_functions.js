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

function calculateCartPrice(val1, val2, ...num1){
return num1
}
console.log(calculateCartPrice(200, 400, 500))

const user = {
  username : 'Akan',
  price : 200
}

function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`)
}

handleObject(user) // the function can be called this way 

handleObject({  // or can be called this way by passing the object
  username : 'samm',
  price :200
})

const mynewArray = [230 , 34, 455, 342]

function returnnewArray(getArray){
  return getArray[2] // always mmake sure to return the argument 
}

console.log(returnnewArray(mynewArray));
console.log(returnnewArray([200, 400, 45]))