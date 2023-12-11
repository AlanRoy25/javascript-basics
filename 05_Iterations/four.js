//using the object forin loop iteration

const myObject = {
  js : 'javascript',
  rb: 'ruby',
  py : 'python',
  cpp: 'c++'
}


for (const key in myObject) {
    console.log(`${key} shortcut is ${myObject[key]}`)
    
  }


// for in loops using array 

const programming = ['js', 'py', 'cpp', 'rb']

for (const key in programming) {
  console.log(programming[key]);// to get the values we do like this or else only key will give the index count n array
}