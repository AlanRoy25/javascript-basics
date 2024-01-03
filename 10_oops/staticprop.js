class user{
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`User logged in ${this.username}`);
  }

  static uniqueID(){ // this wont allow any class to use its inheritance and access blocked
    return `123`
  }
}

class teacher extends user {
  constructor(username,email){
    super(username)
    this.email = email
  }
}

const alan = new user("alan", "alan@gmai.com")
//console.log(alan.uniqueID()); // this will throw an error because this wont allow to access its method when static is used

const iphone= new teacher("iphone", "i@gmail.com")
console.log(iphone.logMe());
