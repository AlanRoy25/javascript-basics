//Objects in singleton and constructor

// const tinderUser = new Object() // this is an singleton object declartion
const tinderUser = {} // even this will give the blank output  

tinderUser.Id = "1234anc"
tinderUser.name = "sam"
tinderUser.email = 'sam@gmail.com'

// console.log(tinderUser); // {} - this will be output ... blank 

const regularUser  = {
  email: "user@gmail.com",
  fullname: { // This means that we can nest so many objects inside  main  object 
    username: {
      firstname : 'alan',
      lastname : 'roy'
    } 
  }
}

// console.log(regularUser.fullname.username.lastname); // calling the value

const obj1 = {1: 'a', 2: 'b', 3: 'l'}
const obj2 = {4: 'o', 5: 'v'}

//const obj3 = {obj1 , obj2} // doing kike this wont concat the objects
// const obj3= Object.assign({}, obj1, obj2) // {} - isko target bol sakte hain and obj1 ,... baki ke sabko source bol sakta.

 const obj3 = { ...obj1, ...obj2} // spread type

// console.log(obj3)

// console.log(Object.keys(tinderUser)) // this will give the keys and the best part is that it will convert the object to array format which we can use later for loops and other such things
// console.log(Object.values(tinderUser)) //this will give the values of the keys
// console.log(Object.entries(tinderUser)) // this  will the key value pair

// console.log(tinderUser.hasOwnProperty('email')) // this will check if this element is available or not.. it will give in true and false


const course = {
  coursename : ' js in hindi',
  price : '2000',
  coursechannel: ' chai with code'
}

const {coursechannel : channel} = course // this another way of calling the object and we can change the name too according to our wish

// object destructur { } - curly brackets
console.log(channel);

{
  "name": 'Alan Roy',
  "phNo" : '34235',
  "emailid": "asln@gmail.com",
  
}

{} { 
  []
}
[ ] // these are the various ways of declaring the JSON : it can be an object , can also be in an array format.
// JSONRANDOM ME : check out for the code.