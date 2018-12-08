// Global Variables
//-----------------------------------------------------------
var blueCrystal = 0;
var greenCrystal = 0;
var redCrystal = 0;
var purpleCrystal = 0;
// Scores
var totalScore = 0;
var computerScore = 0;


var winsCount = 0;
var lossCount = 0;

//-----------------------------------------------------------
// We get a random number between 19 & 120 for computerscore and 
// a random number between 1 & 12 for each Crystal!

var computerRandomNumber = function(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
var randomNumbers = function() {
    computerScore = computerRandomNumber(19,120);
    blueCrystal = computerRandomNumber(1,12);
    greenCrystal = computerRandomNumber(1,12);
    redCrystal = computerRandomNumber(1,12);
    purpleCrystal = computerRandomNumber(1,12);
}

function updateBrowser() {
    $("#computerScore").text(computerScore);
    $("#wins").text(winsCount);
    $("#losses").text(lossCount);
    $("#totalScoreIs").text(totalScore);

}
    

$(document).ready(function() {
    randomNumbers();
    addCrystalValuesImages();
    $(".crystal-image").on( "click", function() {
        var crystalValue = $(this).attr("value");
        var crystalNumber = parseInt(crystalValue);
        totalScore = totalScore + crystalNumber;
        updateBrowser();
        if(computerScore === totalScore) {
            alert("You Win");
            winsCount++;
            updateBrowser();  
            totalScore = 0;
            randomNumbers();
            updateBrowser();


        }else if(totalScore > computerScore) {
            alert("You Lost");
            lossCount++;
            updateBrowser();
            totalScore = 0;
            randomNumbers();
            updateBrowser();
        }
       

    });
})

function addCrystalValuesImages() {
    $("#blue").attr("value", blueCrystal)
    $("#green").attr("value", greenCrystal)
    $("#red").attr("value", redCrystal)
    $("#purple").attr("value", purpleCrystal)
}
    


