const user = { // this is object literal which has properties and methods 
  username: 'alan',
  password: '2345',
  loggedIn: 8,
  
  getuserDetails: function(){ // get user details is a method
    // console.log('got user details from database');
    //console.log(`Username: ${this.username}`);
    console.log(this); // this will give all the details in that specific context inside the user current context
  }
}

//console.log(user.username);
//console.log(user.getuserDetails());
//console.log(this); // Now this will give empty object since its in global execution context in the node environment but in the browser it will show the window object which has so many properties.


//-----------------------

//Constructor Function: ALways create new instances for the exisiting functions
//const promiseOne = new Promise() // new : this is constructor keyword to create new instances

function User(username, password, loggedIn){
  // yeh variable hota hai 
  this.username = username // this is we want to pass
  this.password = password
  this.loggedIn = loggedIn

  this.greetings = function(){ // this is calling a method 
    console.log(`Welcome ${this.username}`);
  }

  return this
}
const userOne =  new User('Ali', '124', 11) // by using the new keyword we will create a new instance for the variable 
const userTwo = new User('Zuri', '142', 12)
console.log(userOne.constructor); // reference of itself matlab user ke reference
//console.log(userTwo);
