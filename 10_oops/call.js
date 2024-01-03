//this is using the call and bind

function setUsername(username){
  this.username = username
  console.log('called');
}

function createUsername(username, email, password){
  setUsername.call(this, username)
  this.email = email
  this.password = password
}

const chai = new createUsername("alan", "ali@fb.com", 1234)
console.log(chai);

