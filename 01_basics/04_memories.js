// There are two types of datatypes:

//Primitive and Non Primitive  data types: 
/*
  String 
  number
  boolean
  Null 
  undefined
  symbol
  Big Int 

  ---------------------
  Non Primitive data types:
  Arrays
  Functions
  Objects
  --------------------------------

  These memory are stored in two types ::
  Stacks: It stores Primitive data types and it makes a copy of the references in the stack 
 
  Heaps:  It stores the var in stacks but its value is called from heaps through its reference 


*/

let myYoutubeName = 'code with me'


let anotherYt = myYoutubeName

anotherYt = ' ya follow for more'

console.log(myYoutubeName);
console.log(anotherYt) // the output we thought was from myytName but it doesnt do like that it only stores the address

let userOne = {
  email : "user@gmail.com",
  upiId:  "user@sbi "

}
let UserTwo = userOne

userOne.email = 'add' // isme dono mein change hota hain and it gets updated in the og one.
console.log(userOne);
console.log(UserTwo);

