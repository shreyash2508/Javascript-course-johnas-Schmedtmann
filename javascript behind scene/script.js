'use Strict' ;

///////////////////////////////////////
// Scoping in Practice

function calcAge(birthyear){
    const age= 2037 - birthyear;
    
    function printAge(){
        const output= `you are ${age} born in ${birthyear}`
        console.log(output);
    }
    printAge();
    if (birthyear>=1991 && birthyear <=1996){
        var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2,3));
    }


    console.log(add(2,3));
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
    return age;
}

const FirstName= "Jonas";
calcAge(1991);