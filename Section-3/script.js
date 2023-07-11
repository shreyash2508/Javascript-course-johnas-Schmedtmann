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

// //Arrays 

// const friends=['Kshitij','Akshat','Vedant'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(y);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Aniruddh';
// console.log(friends);

// const calcAge = function (birthYeah) {
//    return 2037 - birthYeah;
// }

// const years= [1990,1967,2002,2008,2010];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// //Array Methods
// const friends = ['Michael', 'Steven', 'Peter'];

// //Add elements
// friends.push('Jay');
// friends.unshift('John');
// console.log(friends);

// //Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// // Introduction to Objects
// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven']
// ];

//Bracket and dot notation
//  const Shreyash = {
//    firstName: 'Shreyash',
//    lastName: 'Upadhyay',
//    age: 2023 - 2002,
//    job: 'Software Developer',
//    friends: ['Michael', 'Peter', 'Steven']
//  };

// console.log(Shreyash);
// console.log(Shreyash.firstName);
// console.log(Shreyash[`lastName`]);

// const nameKey = 'Name';
// console.log(Shreyash['first' + nameKey]);
// console.log(Shreyash['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Shreyash? Choose between firstName, lastName, age, job, and friends');
// console.log (Shreyash[interestedIn]); //Here dot operator will throw undefined

// if (Shreyash[interestedIn]) {
//   console.log(Shreyash[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }
// Shreyash.location= 'India';
// console.log(Shreyash);


//Object Methods
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//  // calcAge: function (birthYeah) {
//   //   return 2037 - birthYeah;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//   }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);


//The for Loop
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// Looping Arrays, Breaking and Continuing

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
// ];
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from jonas array
//   console.log(jonas[i]);

//   types[i]=typeof jonas[i];
//   types.push(typeof jonas[i]);

// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// //Break and COntinue
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;

//   console.log(jonas[i], typeof jonas[i]);
// }

// Looping Backwards and Loops in Loops
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}