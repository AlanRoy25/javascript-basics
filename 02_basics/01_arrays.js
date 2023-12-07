const myArr = [0, 1, 2, 3 ,4 , 65] // first way of declaring

const myHeros = ["shaktiman" , "ninja hattori"] // can use strings inside to declare

const myArr2 = new Array (1,2,3 ,4 ,5) // third way of declaring
// console.log(myArr2[1]);

//Array methods

myArr2.push(7) // add the value after the last element 

console.log(myArr2);

myArr2.pop() // Removes the last element 
console.log(myArr2);

myArr.unshift(9); // add value at the 0th index
console.log(myArr);

myArr.shift() // removes the first value 
console.log(myArr) ;

console.log(myArr.includes(4)); // this checks whether that is available
console.log(myArr.indexOf(2)); // returns the index of the element

const newArr = myArr.join()
console.log(newArr); // When we use join the array object gets converted to a string.
console.log(typeof newArr); // String

//slice & splice
 console.log("A" , myArr); // this will print our array as it is
 const myNew = myArr.slice(1,3) // Now this removes the element from 1-3 (n-1) that is 3 is not counted
 
 console.log(myNew); //printing the splice
 console.log("B" , myArr); // Will be the same array no changes

 const myNew2 =  myArr.splice(1,4) // Splice 
 console.log("C", myArr)
 console.log(myNew2);

