/*

let country = "India";
let continent = "Asia";
let population = 1.35;

console.log(country);
console.log(continent);
console.log(population);
console.log(typeof country);
console.log(typeof 'Rishi');

javaScriptIsFun = 'YES!';



console.log(typeof null);

let isIsland = true;
let language = "English";
const year = 1999;
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);
console.log(year);

population /= 2;

console.log(population);

population += 1;
console.log(population);

*/


/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y, x, y, x, y, x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/

/*
let markHeight = 1.69;
let markWeight = 78;

let johnHeight = 1.95;
let johnWeight = 92;

*/



//coding challenge 1

/*
let markHeight = 1.88;
let markWeight = 95;

let johnHeight = 1.76;
let johnWeight = 85;

function calculateBMI(weight, height) {
    const BMI = weight / (height ** 2);

    return BMI;
}

console.log('Marks BMI: ' + calculateBMI(markWeight, markHeight));
console.log('Johns BMI: ' + calculateBMI(johnWeight, johnHeight));

const BMIMark = calculateBMI(markWeight, markHeight);
const BMIJohn = calculateBMI(johnWeight, johnHeight);

const markHigherBMI = (BMIMark > BMIJohn);
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
}
else {
    console.log("John's BMI is higher than Mark's!");
}

*/

/*
const firstName = 'Rishi';
const job = 'teacher';
const birthyear = 1991;
const currentYear = 2037;
const jonas = "I'm " + firstName + ', a ' + (currentYear - birthyear) + ' years old ' + job + '!';

console.log(jonas);

const jonasNew = 'I am ${ firstName }, a ${ currentYear - birthYear} year old ${ job } !';
console.log(jonasNew);

console.log('Just a regular string...');
console.log('String with \n\
multiple \n\
lines');

*/


/*
const age = '123' < 57;
console.log(age);

if (age >= 18) {
    console.log('Rishi can get a drivers licence!!!');
}
else {
    const yearsLeft = 18 - age;
    console.log('Rishi is too young to get a drivers licence. Wait another ${yearsLeft} years.');
}

const birthYear = 2021;
let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);

*/

/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(Number('Rishi') + 18);

console.log(String(23), 23);



//type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3);
console.log('23' / 2);
console.log('23' > '12');


let n = '1' + 1; //string 11
n -= 1; // 11 - 1
console.log(n);


*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Rishi'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("don't spend it  all ;");
}
else {
    console.log("you should get a job!");
}

let height = 1;
if (height) {
    console.log("YAY! Height is defined.");
}
else {
    console.log("Height is UNDEFINED");
}

const age = 18;
if (age === 18) {
    console.log("")
}