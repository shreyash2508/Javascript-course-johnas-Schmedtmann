'use strict'

// //Default Parameters
// const bookings=[];

// const createBooking= function (flightNum,numPassengers,price){
// const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');

// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// ///////////////////////////////////////
// // How Passing Arguments Works: Values vs. Reference
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport===24739479284){
//         alert('checkedIn');
//     }else{
//         alert('Wrong Passport');
//     }
// };

// checkIn(flight,jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000000000);
//   };
  
//   newPassport(jonas);
//   checkIn(flight, jonas);

// ///////////////////////////////////////
// // Functions Accepting Callback Functions

// const oneWord= function(str){
//     return str.replace(/ /g,'').tolowercase();
// };

// const upperFirstWord=function(str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
//   };

// // Higher-order function
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
  
//     console.log(`Transformed by: ${fn.name}`);
//   };
  
//   transformer('JavaScript is the best!', upperFirstWord);
//   transformer('JavaScript is the best!', oneWord);

//   // JS uses callbacks all the time
// const high5 = function () {
//     console.log('👋');
//   };
//   ['Jonas', 'Martha', 'Adam'].forEach(high5);

// ///////////////////////////////////////
// // Functions Returning Functions
// const greet = function (greeting) {
//     return function (name) {
//       console.log(`${greeting} ${name}`);
//     };
//   };
  
//   const greeterHey = greet('Hey');
//   greeterHey('Jonas');
//   greeterHey('Steven');
  
//   greet('Hello')('Jonas');

///////////////////////////////////////
// The call and apply Methods

const lufthansa={
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum,name){
        console.log(`${name}booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight:`${this.iataCode}${flightNum}`,name});
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);