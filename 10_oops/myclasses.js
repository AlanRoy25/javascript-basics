//ES6 using the class

// class user {
//   constructor(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
//   }

//   encryptpassword(){
//     return `${this.password}abc`
//   }
//   changeUsername(){
//     return `${this.username.toUpperCase()}`
//   }

// }

// const chai = new user('cia', 'cia@gmail.com', '1234')
// console.log(chai.changeUsername());
// console.log(chai.encryptpassword());

//behind the scene this is what happening while declaring a class

function user(username,email, password){
  this.username = username
    this.email = email
    this.password = password
  }

  user.prototype.encryptpassword = function(){
    return `${this.password}abc`
  }

  user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
  }

const tea = new user('aleena', 'aleena@gmail.com', '1234')
console.log(tea.encryptpassword());
console.log(tea.changeUsername());  