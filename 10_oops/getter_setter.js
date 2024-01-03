class user{
  constructor(email, password){
    this.email = email
    this.password = password
  }

  get email(){
    return this._email.toUpperCase()
  }

  set email(value){
    this._email = value
  }
  get password(){ // always use the same parameters used in constructor for get and set
    //now what happens is the constructor and get set everyone is caling the same password so its value gets stored the same and call stack size exceeds
    return `${this._password}`
  }

  set password(value){
  this._password = value
  }
}

const newUser = new user("alan@ai.com", "1234" )
console.log(newUser.password);
console.log(newUser.email);