const marvel_heros = ['spiderman', 'thor', 'captain America']
const dc_heros = [ 'batman', 'superman', 'flash']

//marvel_heros.push(dc_heros);

console.log(marvel_heros); // here the problem is that it will concat but it will be another array object fully wont include the other array.

const allHeros = marvel_heros.concat(dc_heros) // One way of adding both the array
console.log(allHeros);

const new_heros = [...marvel_heros, ...dc_heros] // This Method is known as spread [... need to use 3 dots]
console.log(new_heros);

const oldRealHeros = [1,1,4 , [3, 4, 5], 6, 7, 4 ,[ 2, 6, 3]]

const newRealHeros = oldRealHeros.flat(Infinity) // this flat method now will combine multiple arrays into a single array .... \
//Infinity will see how much array depth is there
console.log(newRealHeros);

console.log(Array.isArray("Alan")); // this check if the array is present 
console.log(Array.from('Alan')); // this will convert the array, object  into a string