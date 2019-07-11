// FAHRENHEIT TO CELSIUS CALCULATOR
'use strict'

// GLOBAL VARIABLES

// EVENT LISTENERS

document.getElementById("app").addEventListener('click',Mario);
document.getElementById("pap").addEventListener('click',link);
document.getElementById("att").addEventListener('click',attack);
document.getElementById("battle").addEventListener('click',battle);

// EVENT FUNCTRIONS
function Mario(){
    document.getElementById("iron").src= "images/mario.png";
    document.querySelector("html").style.backgroundColor= "pink";
    document.querySelector("body").style.backgroundColor="red";
    document.getElementById("link").innerHTML= "The Mushroom Kingdom";
    document.getElementById("ink").innerHTML= "Princess Peach";
    document.getElementById("nk").innerHTML= "King Bopwser";
    
}

function link(){
    document.getElementById("iron").src= "images/link.png";
    document.querySelector("html").style.backgroundColor="green";
    document.querySelector("body").style.backgroundColor="lightgreen";
    document.getElementById("link").innerHTML="Hyrule";
    document.getElementById("ink").innerHTML="Princess Zelda";
    document.getElementById("nk").innerHTML="Ganon";


}

function attack(){

    let marioStrength = Number(document.getElementById("mar").value);
    let marioDefense = Number(document.getElementById("ma").value);
    let linkStrengh = Number(document.getElementById("lin").value);
    let linkDefense = Number(document.getElementById("li").value);
    let mar = 2*marioStrength / linkDefense + 5;
    let lin = (linkStrengh + 15 ) / marioDefense;

    document.getElementById("lattack").innerHTML = lin;
    document.getElementById("mattack").innerHTML = mar;

}

function battle(){
    let one = document.getElementById("one").value;
    let two = document.getElementById("two").value;
    let three = document.getElementById("three").value;
    document.getElementById("end").innerHTML = "Mario used " + one + " to hit Link in his " + two + " while yelling " + three + ".";
}