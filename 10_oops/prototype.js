// let myName = "alan        "

// console.log(myName.truelength);

let myHeros = ['Thor', 'Spiderman']

let HeroPower = {
  thor: 'Hammer',
  spiderman: 'Sling',

  getSpiderPower: function(){
    console.log(`Spider power is ${this.spiderman}`);
  }

}
Object.prototype.alan = function(){ // this will give the prototype inheritance to the object , strings , arrays of the function by creating a new fn
  console.log(`Alan is present in All objects`);
}

Array.prototype.myAlan = function(){
  console.log(`This will have the power too`);
}
// HeroPower.alan()
// myHeros.alan()// in the arrays to it will get the inheritance of the function

// myHeros.myAlan()

//HeroPower.myAlan() // this will throw error because it does have the inheritance of the objects

//Inheritance 

const user ={
  name: 'User2',
  email: 'user@gmao.com'
}

const teacher = {
  makeVideo : true
}

const teachingSupport = {
  isAvailable: true
}

const TA = {
  assitance: 'Js assign',
  fulltime: true,

  __proto__: teachingSupport //earlier this was the way to access the other functions for the inheritance
}

//teacher.__proto__ = user
//mOdern Syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotherYsername= 'Chaiaurcode   '

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`); // this will trim extra spaces and will give the length
}

anotherYsername.trueLength()
'Alan'.trueLength()