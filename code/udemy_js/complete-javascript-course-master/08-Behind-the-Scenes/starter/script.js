'use strict';

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Rishi',
//   age: 22,
// };

// const friend = me;

// friend.age = 27;

// console.log('Me: ', me);
// console.log('Friend:', friend);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage: ', jessica);
console.log('After Marriage: ', marriedJessica);

//copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
