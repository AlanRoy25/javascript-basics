//for loop

for (let  i = 0;   i < 10;  i++) {
  const element = i;
  console.log(element);
}

for (let  i = 0;   i < 10;  i++) {
  const element = i;
  if(element == 5){
  console.log("5 is the number");
  }
  console.log(element);
}

for (let i = 0; i < 10; i++) {
 console.log(`outer loop: ${i}`);
  for(let j = 0; j< 10; j++){
    console.log(`Inner loop: ${j}`)

 }
}

let myArray = [ "Superman", "batman", "antman" ]

for (let index = 0; index <myArray.length; index++) {
  const element = myArray[index];
  console.log(element)
}


//keywords : Break and Continue

// for (let index = 0; index <=20; index++) {
//   if(index === 5){
//   console.log(`detected 5`);
//   break;
//   }
//   console.log(`value of i is : ${index}`)
  
// }

for (let index = 0; index <=20; index++) {
  if(index === 5){
  console.log(`detected 5`);
  continue;
  }
  console.log(`value of i is : ${index}`)
  
}