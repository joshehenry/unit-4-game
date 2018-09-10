//set where window will randomly generate number
window.onload = generateRandomNumber; 
function generateRandomNumber() {

    document.getElementById("randnum").innerHTML = "Target Score: " + randNum++; 

}

function clickFunction() {

       userC = document.getElementById("ts").innerHTML = Math.floor(Math.random() *10) + 14;
       randNum ++;
       console.log(userC);
       
    }
//initialized variables for the start of the game
var wins = 0;
var losses = 0;
var randNum = Math.floor(Math.random() * 19) + 120;
//attempted to get score to increment by adding the userC and randNum variables together
var totalScore = randNum ++; 
console.log(totalScore);

//series of if statements to count wins and losses. 
if (randNum > totalScore) {

    losses++;

document.getElementById("loss").innerText = ("Losses: " + losses++);
                
}

if (randNum < totalScore) {

    wins++;

document.getElementById("wins").innerText = ("Wins: " + wins++);
}

console.log(randNum);
if (totalScore > randNum) {
    

}
//Remainder of pseudo-code 
//Increment user clicks to crystals to correlate to increase of points
//Set statements to trigger events when score reaches a certain threshold to end game via alert
//Shorthand Javascript statements to incorporate JQuery