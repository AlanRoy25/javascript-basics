// Immediately Invoked Function Expressions (IIFE)

(function chai(){ // declaring function using IIFE
  // This is named IIFE
  console.log(`DB connected`);
})(); // need tp use semicollon to end the fnction calling

( () => {  // arrow function
  //unnamed IIFE
  console.log(`Db Connected wp`);
})();

( (name) => {  // arrow function
  //parameter pass karke IIFE
  console.log(`Db Connected wp ${name}`);
})('mahesh');