//console.log('hello');
//console.log('hello');
//alert('yoo');

//alert('hello rishi');

var b = 'smoothy';
console.log(b);

var number = 45 ; 
console.log(number);


//var age = prompt('What is your age?'); 

//document.getElementById('someText').innerHTML = age;

//Numbers

var num1 = 5 ; 
var num2 = 5.7 ;
console.log(5 * 10) ;  
console.log(50 / 5) ;  
num1 = num1 + 1 ; 
num1++;
num1--;
console.log(num1);

console.log(num1 % 6);
console.log(num1 / 6);

// increment and decrement by any number you want

var num = 12;
num += 10; 
console.log(num); 

num -= 3 ; 
console.log(num);

//functions 

function fun(){
    console.log('this is a function.');
}

//call
fun();

/*
function greeting(yourName){
    //var name = prompt('what is your name?'); 
    var result = 'Hello ' + yourName ; 
    console.log(result) ; 
}
var name = prompt('what is your name?'); 
greeting(name);
*/

//functions with arguments

function sumNumber(a, b){
    var result = a + b ;
    console.log(result);
}

sumNumber(5, 15);
sumNumber('Hello ', "Rishi");


//while loops 

/*
var n = 0; 
while(n < 10){
    n += 1 ; 
    console.log(n);
}

*/

// for loops 
/*
for(let num = 0; num < 10 ; num++){
    console.log(num);
}
*/

//Data types 
let yourAge = 22 ; //number 
let yourName = 'Bob' ; //string
let name = {forst: 'Jane', last: 'Doe'} ; //object 
let truth = false ; //boolean 
let groceries = ['apple', 'bnana','oranges']; //array 
let random ; //undefined variable 
let nothing = null ; // value null 

//strings 

let fruit = 'banana' ; 
let moreFruits = 'banana\napple'; //new line 
console.log(moreFruits); 

console.log(fruit.length);
console.log(fruit.indexOf('b')) ; 
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase()); 
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2)); 
console.log(fruit[2]);
console.log(fruit.split(',')); //split by comma 
console.log(fruit.split('')); //split by character 

//Array

let abc = ['banana', 'apple', 'pineapple', 'orange']; 
abc = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(abc[2]); //access values of an array at index 2 

abc[0] = 'pear'; 
//console.log(fruits); 

for (let i = 0 ; i < abc.length ; i++) {
    console.log(abc[i]) ; 
}

//array common methods 
console.log('to string: ' , abc.toString());
console.log(abc.join(' * ')) ; 
console.log(abc, abc.pop(), abc);  // remove
console.log(abc.push('blackberries'), abc); // appends 
console.log(abc[4]);
abc[4] = 'new fruit' ; 
console.log(abc);
abc.shift() ; //remove the first element from the array 
console.log(abc);
abc.unshift("mossambi"); // add first element to an array
console.log(abc);


let vegetables = ['asparagus', 'tomatoes', 'brocolli'] ; 
let allGroceries = abc.concat(vegetables) ;
console.log(allGroceries.slice(1, 4)) ; 
console.log(allGroceries.reverse());

let someNumbers = [5, 12, 34, 53, 6, 89, 23, 69] ; 

console.log(someNumbers.sort(function(a,b){return b - a})); // sorted in descending order 
console.log(someNumbers.sort(function(a,b){return a - b})); // sorted in ascending order 


let emptyArray = new Array();

for (let num = 0 ; num <= 10 ; num++){
    emptyArray.push(num); 
}

console.log(emptyArray);

//objects in JS 

let student = {
    first: 'Refresh',
    last: 'Qazi',
    age: 22, 
    height: 170,

    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age ; 
    }
};
console.log(student.first); 
console.log(student.last);
student.first = 'notRafeh'; //change the value of first in student 
console.log(student.first); 
student.age++; 
console.log(student.age);
console.log(student.studentInfo());


//if else condition, control flow 

var age = 45 ; 

if((age >= 18) && (age <= 35)){
    status = 'target demographic' ; 
    console.log(status) ; 
}
else{
    status = 'Not my audience' ; 
    console.log(status) ; 
}

//switch statements 
//difference between weekdays and weekends 
//0 SUnday 
//6 saturday 


switch(6){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend'; 
        break; 
    case 6:
        text = 'weekend' ; 
        break;
    default:
        text = 'weekday';
}

console.log(text);