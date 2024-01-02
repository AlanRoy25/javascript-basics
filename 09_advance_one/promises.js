const promiseOne = new Promise(function(resolve, reject){
  // do an asyn task
  // DB calls , cryptography, network

  setTimeout(function(){
    console.log('Async task is complete');
    resolve()
  }, 1000)
})

promiseOne.then(function(){
  console.log('promise consumed');
})



//Another way of writing the promise 
new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('async task 2');
    resolve();
  }, 1000)

}).then(function(){
  console.log("Async 2 is resolved");
})


const promiseThree = new Promise(function(resolve, reject){
   setTimeout(function(){
    resolve({user: 'alan' , email: 'alan@example.com'}) // we can write inside the resolve can be an array or object
   }, 1000)
})

promiseThree.then(function(user){
  console.log(user)
})

const promiseFour = new Promise (function(resolve, reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username: 'Alan', email: 'user@fmail.com'})
    }else{
      reject('Error something went wrong')
    }
  }, 1000)
})

const username = promiseFour
.then((user) => {
  console.log(user);
  return user.username
}).then((username) => {
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username: 'JS', password: ' 1234'})
    }else{
      reject('Error: JS went wrong')
    }
  }, 1000)
});

async function consumePromiseFive(){// this is using the async function and await in 
  try {
    const response = await promiseFive
 console.log(response);
    
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()


// async function getAllusers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log(response);
//     const data = await response.json() // this is giving the error because it takes time to respond so for that we need to use await fn in this too
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
 
// }

// getAllusers()


fetch('https://jsonplaceholder.typicode.com/users') // using the .then and .catch
.then((response) =>{
  return response.json()
}) 
.then((data) =>{
  console.log(data);
})
.catch((error)=>{
  console.log(error);
})