'use strict'

///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
  
    // Never to this!
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
  };