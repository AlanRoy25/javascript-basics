//using filter

const myNums = [1, 2,3,4,5,6,7,8,9,10]

const NewNums = myNums.filter( (num) => num >4) // using the arrow function (callback function we can use the filter to get the specific output)
// function (parameter) => arrow function , then the condition

//-----------------------------------------------
// If we are using the scope {} then we need to use the key word return.
const NewNum = myNums.filter( (num) => {
  return num >4
})
// console.log(NewNum);


const books= [{
  title: 'Book one',
  genre : 'fiction',
  published: 1983,
  edition : 2004
},
{
  title: 'Book two',
  genre : 'Science',
  published: 1943,
  edition : 2003
},
{
  title: 'Book three',
  genre : 'fiction',
  published: 1953,
  edition : 2007
},
{
  title: 'Book four',
  genre : 'History',
  published: 1945,
  edition : 2011
},
{
  title: 'Book five',
  genre : 'Science',
  published: 1934,
  edition : 2005
},
{
  title: 'Book six',
  genre : 'History',
  published: 2011,
  edition : 2022
},
{
  title: 'Book seven',
  genre : 'fiction',
  published: 1955,
  edition : 2012
}]


let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
  // return bk.edition >=2005 && bk.genre === 'Science'
  return bk.genre === 'History' || bk.published >=2000}) // koi bhi ek true ho
console.log(userBooks);