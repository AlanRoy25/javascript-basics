
// CHeck the string Methods in Mdn Docs reference for more https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

const gameNew = new String ("Codeout")

console.log(gameNew. length);
console.log(gameNew. toUpperCase());
console.log(gameNew.charAt(2));
console.log(gameNew. indexOf('e'));

//substring : creates a secondary string from that line 
const newString = gameNew.substring(0 ,4) // This will print the nos till n-1 index (starts from 0th index and will always take positive values)
console.log(newString);

const AnotherString = gameNew.slice(-5 ,4) //This starts from reverse and can print both +ve and -ve words //  The negative indices count backward from the end of the string.
console.log(AnotherString); 


const newStringOne = "     Alan      "
console.log(newStringOne); // this will include the whitespaces and print the string 
//console.log(newStringOne.trim()); // this string function will trim the white spaces and will give the output , we can start and end also
console.log(newStringOne.trimStart('2')); //check the mdn web docs

const url = 'https://google.com%20.com'
console.log(url);
console.log(url.replace('%20' , '-')); // this will replace any word we want to change  from the string 

console.log(url.includes('santhosh')); // this will check if its includes any string which is mentioned and give ouput true / false

const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = -4;
// {So basically if we need to find the reverse index of character where it lies it we can calculate the length of the string and then minus the index }
const positiveIndex = sentence.length + index;
console.log(sentence.length);
const characterAtIndexMinus4 = sentence[positiveIndex];
console.log(`Character at index ${index}: ${characterAtIndexMinus4}`);

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);


