const coding = ['js',  'ruby', 'python', 'java' ]

coding.forEach( function(item){
  // console.log(item);
})


// coding.forEach( (val) => { // using the arrow function
//   console.log(val);
// } )

function printMe(item){ // ANother method using the function and callin by its reference
  //console.log(item)
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => { //using the arrow function we can pass many more parameters in it
  // console.log(item, index , arr); //js 0 [ 'js', 'ruby', 'python', 'java' ] and so on till the last index 

})

//[{}] - arrays ke andar object declarations
const myProgramming = [
  {
  mylanguage: 'javascript',
  codename: 'js' 
},
  {
  mylanguage: 'python',
  codename: 'py' 
},
  {
  mylanguage: 'ruby',
  codename: 'rb' 
},
  {
  mylanguage: 'cpp',
  codename: 'c++' 
}
]

myProgramming.forEach( (item) =>{
  console.log(item.mylanguage);
})