function ageCalculator(){
    var birthYear = prompt('Enter your birth year!');
    var currentYear = prompt('Enter the current year.'); 

    if(currentYear < birthYear){
        currentYear = prompt('Please enter a year greater than ' + birthYear);
    }

    var age = (currentYear - birthYear) * 365 ; 
    var h1 = document.createElement('h1') ; 
    var textAns = document.createTextNode('Your approximate age is ' + age + ' days.') ;
    h1.setAttribute('id', 'ageCalculator') ;
    h1.appendChild(textAns) ; 
    document.getElementById('flex-box-result').appendChild(h1) ; 
}

function reset(){
    document.getElementById('flex-box-result').remove();
    document.createElement('h1');
    ageCalculator();
}