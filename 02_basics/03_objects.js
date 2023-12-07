//singleton

//object literals:

const mySym = Symbol('key') // This is the way how we declare a symbol

const objectUser = {
  name : "Alan",
  [mySym] : 'Mykey1', // its necessary to declare key value pair in the squarebrackets jab refer karna hain.
  age : 22,
  email_id : 'alan@gmail.com',
  location : "pune",
  lastLogin : ['Monday', 'tuesday']

}

// console.log(objectUser.email_id); // one way of calling the specific id in object .var name is accessed
// console.log(objectUser['location']); // another wy of calling [] brackets
// console.log(objectUser[mySym]); // and while calling for the output it should be in squarebracket

objectUser.email_id = 'zuri@gmail.com'
//Object.freeze(objectUser)
// objectUser.email_id = "kaka@gmal.com" // this wont get execute because the object has been freeze.
// console.log(objectUser);

objectUser.greetings = function(){
  console.log('hello JS');
}



objectUser.greetings1 = function(){
  console.log(`Hello JS, ${this.email_id}`)
}
console.log(objectUser.greetings())  // this throws an error such as function anonymous
console.log(objectUser.greetings1())
