//While and do While loop

let index = 0
while (index <= 10) {
  console.log(`Valiue of index is ${index}`);
  index =  index +2 ;
}

let myArray = [ "Batman", "Supreman", "spiderman"]

let arr = 0

while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);  

arr = arr +1
}

let score = 0
do {
    console.log(`score is : ${score}`);
    score ++
} while (score <= 10);
console.log(score);