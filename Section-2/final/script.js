/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstname="Matlida";
console.log(firstname);
console.log(firstname);
console.log(firstname);


let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

//////////////////////////

////////////////////////////////////
// let, const and var
// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;
// // const job;

const now = 2037;
const ageJonas = now - 2031;
const ageSarah = now - 2011;
console.log(ageJonas, ageSarah);

// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2


// //Addition operators
// const firstName = 'Shreyash';
// const lastName = 'Upadhyay';
// console.log(firstName + ' ' + lastName);

// //Assignment operators
// let x= 10 + 5;
// x+=10; //x=x+10;
// x*=4;
// x++;
// x--;
// console.log(x);

// //Comparison operators
// console.log (ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// operator precedence

// const now = 2037;
// const ageJonas= now - 2031;
// const ageSarah= now - 2011;

// console.log(now-2031 > now-2011);
// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

const aged = 15;

if (aged >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - aged;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old'); //they both are same thanks to coercion.
// console.log('23' - '10' - 3);
// console.log('23' / '2');

let n = '1' + 1; // '11' Number gets converted to a string 
n = n - 1;
console.log(n);  //

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// // The switch Statement
// const day = 'friday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// The Conditional (Ternary) Operator
// Old method
const age = 15;
age >= 18 ? console.log('I like to drink wine 🍷'): 
console.log('I like to drink water 💧');

//New method 
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);