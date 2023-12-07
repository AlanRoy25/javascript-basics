const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); // now this will convert the number to a string

console.log(balance.toFixed(2)); // now this will decimal after the value depenind how much we need

const newNumber = 124.4934
console.log(newNumber.toPrecision(5)); // this will give the round off value when the no is given

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')); // this prints the values and gives the comma to the numbers based on the indian 


// --------------MATHS -------------------------

const egMaths = 12342
console.log(Math.abs(-9)); // returns the absolute value 
console.log(Math.round(4.2)); // this rounds the figure number after the decimal
console.log(Math.ceil(6.2)); // even if its small after the decimal it rounds off to the next value
console.log(Math.floor(4.9)); // it returns the greatest int
console.log(Math.max(4, 3, 5, 7));
console.log(Math.min(4, 3, 5, 7));

console.log(Math.random()) // this will give random values between 0 & 1 always
console.log((Math.random() *10) + 1) // this will convert the decimal to one point ahead and kabhi far yeh agar 10 se multipy karke  0 deta hai so uske liye we add 1;

console.log(Math.floor(Math.random() *10) + 1)

const max = 10
const min = 5
console.log(Math.floor(Math.random() *(max - min +1)) +min) // Now this will make sure that the no is above  the min value always
