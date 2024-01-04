//closure and lexical scoping

/*
closure : It gives you access to an outer functions scope from an inner function at function creation time.
*/

// function outer(){
//   let username = "alan"
//   //console.log(secret);// the parent function cant access from the child function
//   function inner(){
//     let secret = "!23"
//     console.log("inner", username);
//   }
//   function innertwo(){
//     console.log("innertwo", username);
//     console.log(secret); // cant access from the child too both dont share the scope with each other
//   }
//   inner()
//   innertwo()
// }
// outer()

//closure

function makefun(){
  let name = 'mozilla'
  function displayname(){
    console.log(name);
  }
  return displayname
}

const myfunc = makefun()
myfunc()