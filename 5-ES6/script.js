// LET AND CONST
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/
/*
// ES5
function driversLicence5(passedTest) {
  if (passedTest) {
    // console.log(firstName);
    var firstName = 'John';
    var yearOfBirth = 1990;
  }
  console.log(
    firstName +
      ', born in ' +
      yearOfBirth +
      ' is now officialy allowed to drive a car'
  );
}

driversLicence5(true);

// ES6
function driversLicence6(passedTest) {
  //   console.log(firstName);
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }
  console.log(
    firstName +
      ', born in ' +
      yearOfBirth +
      ' is now officialy allowed to drive a car'
  );
}

driversLicence6(true);

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

// With var 'i' will be overwritten - output 0 1 2 3 4 and 5, not 23
*/

// BLOCKS AND IIFEs
// ES6
/*
{
  const a = 1;
  let b = 2;
  var c = 3;
}

console.log(a + b);
console.log(c);

// ES5
(function() {
  var c = 3;
})();

console.log(c);
*/

// STRINGS

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2019 - year;
}

// ES5
console.log(
  'This is ' +
    firstName +
    ' ' +
    lastName +
    '. He was born in ' +
    yearOfBirth +
    '. Today, he is ' +
    calcAge(yearOfBirth) +
    ' years old.'
);

// ES6
console.log(
  `This is ${firstName} ${lastName}. He was born is ${yearOfBirth}. Today, he is ${calcAge(
    yearOfBirth
  )} years old.`
);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
