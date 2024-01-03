//Inheritance in js

class user {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`USERNAME IS ${this.username}`);
  }
}

class Teacher extends user { // iska matlab this will take properties of the class user using the extend keyword
  constructor(username, email, password) {
    super(username) // yeh reference username se lega from the user
    this.email = email
    this.password = password
  }

  addCourse() {
    console.log(`New Course is added by ${this.username}`);
  }
}

const chai = new Teacher("aleena", "aleena@gmail.com", "1234")

chai.addCourse()// yeh add course ke output dega
chai.logMe() // now even chai has the access to the user since its inheritance

const masalachai = new user("allu")
masalachai.logMe()

console.log(chai === masalachai); // this will give false
console.log(chai === Teacher); //this will give false
console.log(chai instanceof Teacher); //now this will give true since its an instance taken from the teachers inherit
console.log(chai instanceof user); // qki teacher inherit karre hai and so eventually its related will always become the instance