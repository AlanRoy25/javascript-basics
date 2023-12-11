//for of loop
//['','','']

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  console.log(num);
} 

const greetings = "Hello World"
for (const greet of greetings) {
  console.log(`Each character is : ${greet}`);
}

/*Maps : Array jaise hota hain but iteration hota
The Map object holds key-value pairs and remembers the original insertion order of the keys.
Any value (both objects and primitive values) may be used as either a key or a value.
*/

const map = new Map()
map.set('IN' , 'India')
map.set('UK' , 'United Kingdom')
map.set('ESP' , 'Spain')
map.set('FR' , 'France')
map.set('IN' , 'India')

console.log(map);

for (const [key, values] of map) {
  console.log(key + ':-' + values); // this will give the output as key value pair in array format
}