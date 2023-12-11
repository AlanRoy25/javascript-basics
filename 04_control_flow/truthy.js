const useremail = "alan@user.ai"

if (useremail) {
  console.log("user logged in"); // its not an empty string soo it will give true without using any comparison operator
}
else{
  console.log("not logged in") // if its an empty string it will give false 
}


//Falsy Values:
//false , 0 , -0 , BigInt 0n, "" , null, undefined , NaN

//Truthy Values:
// "0", 'false' , " ", [], {}, function(){} - agar string mein values enclosed hai then its truthy values 

const usersemail = [] // for array .length is used to find if they are empty 
if (usersemail.length === 0) {
   console.log("array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // for object .length is used to find if they are empty // Object.keys is used to convert the object into array.
  console.log("Object is empty");
}

// // In console :
// false == 0 // returns true 
// false == '' // returns true
// 0 == '' // true


//Nullish Coalescing Operator (??): null undefined 
let val1;
// val1 = 5 ?? 10 // it will always return the first element (usefull in connecting the backend sometimes when the code doesnt work )
// val1 = null ?? 5 // in this case also it will return the first element since null is the first element it will ignore that and will print the next one
// val1 =  undefined ?? 5 // in this case also it will return the first element since undefined is the first element it will ignore that and will print the next one

val1 =  null ?? 10 ?? 47 // this will also print the first element 
console.log(val1);

// terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80") // in one line code

const balance = 500 
if(balance > 500) console.log("test") , console.log("test2"); // without the curly braces we can write using the comma