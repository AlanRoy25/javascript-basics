// let newDate = new Date()
// console.log(newDate.toString()); // This prints the recent time stamp including the timezone
// console.log(newDate.toLocaleString()); // it will print the date in dd/mm/yyyy and time
// console.log(newDate.toDateString()); // this will only print the date
// console.log(newDate.toISOString());
// console.log(newDate.toJSON());
// console.log(newDate.toLocaleDateString()); // this will print only the date
// console.log(typeof newDate); // type of date : object

// let myCreatedDate = new Date (2023,0,23) // way of declaring data input by user
// console.log(myCreatedDate);

// let myCreatedDate = new Date (2023 , 0, 23 , 5, 3) //declaring the yyyy/mm/dd and time hr//mm/ss
// console.log(myCreatedDate);

let myCreatedDate = new Date ('02-14-2024')
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // can be usefull when we need to make quiz and polls for checking the time in milliseconds
console.log(myTimeStamp); // time in milliseonds

console.log(myCreatedDate.getTime()); // returns the value stored in milliseconds 

console.log (Math.floor(Date.now()/1000)); // this is used to convert milliseconds to seconds by div 1000 nd math floor will round off the nos.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()) ;
console.log(newDate.getDay()) ; // this starts from monday tues .....
console.log(newDate.getTime()) ;

newDate.toLocaleString('default' ,{
  weekday: 'long'
})