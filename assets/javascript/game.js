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


var crystals = ["red", "blue", "green", "purple" ] //No clue what this is for yet
var goalNumber = Math.floor((Math.random() * 101)+19);

//there's got to be a better way!
var crystalNumber1 = Math.floor((Math.random() * 11)+1);
var crystalNumber2 = Math.floor((Math.random() * 11)+1);
var crystalNumber3 = Math.floor((Math.random() * 11)+1);
var crystalNumber4 = Math.floor((Math.random() * 11)+1);


var gatheredCrystals = 0
var wins = 0
var losses = 0

//------CRYSTALS----------------------

//------
$("#crystal-1").on("click", function(){
    console.log("red is " + crystalNumber1);
});
//--------
$("#crystal-2").on("click", function(){
    console.log("blue is " + crystalNumber2);
});
//--------
$("#crystal-3").on("click", function(){
    console.log("green is " + crystalNumber3);
});
//--------
$("#crystal-4").on("click", function(){
    console.log("purple is " + crystalNumber4);
    crystalNumber4+gatheredCrystals
});

//______________________________________________




function gathering() {
    if (gatheredCrystals > goalNumber){
        losses++
        alert ("YOU LOSE");
        console.log(losses)

    }

}




























}); 