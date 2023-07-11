'use strict';

///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// Functions
function logger() {
    console.log('My name is Jonas');

}

// calling / running / invoking function
logger();
logger();
logger();

// function fruitprocessor(apple,oranges){
//     console.log(apple,oranges);
//     const juice= `Juice with ${apple} apples and ${oranges} oranges.`;
//     console.log(juice);
// }

// console.log(fruitprocessor(8,0));

// // Function declaration
// function calcAge1(birthYeah) {
//     return 2037 - birthYeah;
//   }
//   const age1 = calcAge1(1991);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
//   }
//   const age2 = calcAge2(1991);
  
//   console.log(age1, age2);


// Arrow Function
// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);
  
// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }
  
// console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));

//Function calling other functions

function cutFruitPieces(fruit){
  return fruit*4;
}

function fruitprocessor(apples,oranges){
   console.log(apples,oranges);
   const applepiece= cutFruitPieces(apples);
   const orangepiece= cutFruitPieces(oranges);

   const juice= `Juice with ${applepiece} pieces of apples and ${orangepiece} pieces of oranges.`;
   return(juice);
}

console.log(fruitprocessor(2,3));

// //Reviewing Functions

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah,_firstname) {
//      const age = calcAge(birthYeah);
//      const retirement = 65 - age;

// if (retirement>0){
//   console.log (`${_firstname} will retire in ${retirement} years` )
//   return (retirement);
// }
// else{
//   console.log(`${_firstname} has already retired`)
//   return -1;
// }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));

//Arrays 

const friends=['Kshitij','Akshat','Vedant'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = 'Aniruddh';
console.log(friends);

const calcAge = function (birthYeah) {
   return 2037 - birthYeah;
}

const years= [1990,1967,2002,2008,2010];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);