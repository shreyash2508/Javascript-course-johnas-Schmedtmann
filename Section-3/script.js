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

// fruitprocessor(8,0);

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


//Arrow Function
  const calcAge3 = birthYeah => 2037 - birthYeah;
  const age3 = calcAge3(1991);
  console.log(age3);
  
  const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
  }
  
  console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));
  