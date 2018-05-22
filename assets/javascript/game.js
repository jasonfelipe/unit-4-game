//Rules

//crsytals = 1 - 12
//random guess number = 19 - 120
//4 crystal buttons
//1 goal number
//----------------------------------------------
//game is pretty much blackjack
//computer picks a random number
//4 crystals gets a random number
//4 crystals have a button, each adding to one another when clicked
//if number goes over computer's value, it's game over
//if number gets to computer's exact number, player wins

//---------------------------------------------------------------
//psuedo code
//4 crystals, 4 buttons, 4 randomly generated numbers 1-12
//1 big number, our goalNumber
//each crystal has a button, that when it's clicked, the userCollected value goes up
//when goalNumber = userCollected that mean a win++
//when goalNumber > userCollected that means a lose++


//variables needed
// crystals to hold our random generated numbers
// a goal number that is also randomly generated
// 4 buttons
// a score

//____________________________________________
$(document).ready(function(){


//--------Variables----------------


var crystals = ["blue", "green", "orange", "red" ] //No clue what this is for yet

//What the player needs to get up to.
var goalNumber = Math.floor((Math.random() * 101)+19);

//This generates crystal numbers! 
var crystalNumbers = [];
while (crystalNumbers.length < 4){
    var randomNumber = Math.floor((Math.random() * 12) +1);    
    if (crystalNumbers.indexOf(randomNumber) >-1) continue;
    crystalNumbers[crystalNumbers.length] = randomNumber;
}
console.log (crystalNumbers)

blueCrystal = crystalNumbers[0];
greenCrystal = crystalNumbers[1];
orangeCrystal = crystalNumbers[2];
redCrystal = crystalNumbers[3];

var gatheredCrystals = 0
var wins = 0
var losses = 0

//the HTML text.
$('#numberLimit').html( 'Gather this many crystals: ' + goalNumber
                        + '<br>' + 'You have gathered: ' + gatheredCrystals + ' crystals!')
$('#userScore').html("Wins: " + wins + "<br>" + "Losses: " + losses)

//------CRYSTALS----------------------

//------
$("#crystal-1").on("click", function(){
    console.log("blue is " + blueCrystal);
});
//--------
$("#crystal-2").on("click", function(){
    console.log("green is " + greenCrystal);
});
//--------
$("#crystal-3").on("click", function(){
    console.log("orange is " + orangeCrystal);
});
//--------
$("#crystal-4").on("click", function(){
    console.log("red is " + redCrystal);

});

//______________________________________________


//-------Game Logic----------------------

function gathering() {
    if (gatheredCrystals > goalNumber){
        losses++
        alert ("YOU LOSE");
        console.log(losses)

    }

}




























}); 