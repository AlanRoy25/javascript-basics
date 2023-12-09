const user = {
  usrename : 'alan',
  price : 1202,

  welcomeMessage: function (){
    console.log( `${ this.usrename},  welcome to website `) // this keyword can be used only in this current context
    console.log(this) // this gives the output on the current context matlab vo object ke related 
  }
}
user.welcomeMessage() // the output will be the username given in that context user object
user.usrename = "sam" // here the contxt has been changed and so it will print the new updated one
user.welcomeMessage()

// console.log(this); // if this is called outside the global scope then it will give the output  as an empty object

// function chai(){
//   let username= 'jithen'
//   console.log(this.username)
// }

// chai()

const chai =  () => { // this is an arrow function ..no need to  put the function
  let username = 'hitesh'
  console.log(this.username); // this will give the outpu t as undefined.
}
chai() // this will print a empty object.

const addTwo = (num1 , num2 ) => ({username: 'alan'}) // if we need to use the object we need to use curly brackets and enclose it in paranthesis.
// const addTwo = (num1 , num2 ) => (num1 + num2 )  // using the arrow function .. no need to use the return statement // react
console.log(addTwo(3,5))