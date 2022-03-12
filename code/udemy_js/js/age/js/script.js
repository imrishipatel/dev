//challenge 1: Your Age in days
function ageInDays(){
    var birthYear = prompt("What year were you born at?");
    var currentYear = prompt("What year is it right now?"); 
    var ageInDays = (currentYear - birthYear) * 365 ; 
    var h1 = document.createElement('h1') ; //we create a new attribute in js 
    //we create a text node which is to be displayed on the web page.
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old.') ;
    //
    h1.setAttribute('id', 'ageInDays') ; 
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove(); 
}