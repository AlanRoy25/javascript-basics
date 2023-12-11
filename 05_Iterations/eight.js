// Reduce in array : reduce() is to return the sum of all the elements in an array:

const myNums = [1,2,3]

//using the function 
// const mytotal = myNums.reduce( function (acc, currentval){
//   console.log(`acc : ${acc} and currentval: ${currentval}`);
//   return acc + currentval
// }, 0)

// console.log(mytotal);

//Using the arrow callback function

const myTotal = myNums.reduce( (acc, currentval) => acc + currentval, 0)

console.log(myTotal)

// Isko mainly use karta hai for shopping carts and addition
const shoppingCart = [
  {
    itemName: "JS course",
    price : 2000
  },
  {
    itemName: "Development course",
    price : 5000
  },
  {
    itemName: "Devops course",
    price : 3000
  }
  ,
  {
    itemName: "DSA course",
    price : 9000
  }
  ,
  {
    itemName: "C++ course",
    price : 5300
  }
]

const totaltoPay = shoppingCart.reduce( (acc, item) => acc + item.price ,0)

console.log(totaltoPay);