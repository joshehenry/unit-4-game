//set where window will randomly generate number
window.onload = generateRandomNumber; 
var totalScore = 0; 
var randNum = 0;
function generateRandomNumber() {
randNum = Math.floor(Math.random()* 10) + 120; 
    
   $("#randnum").text("Target Score : " + randNum++); 
console.log('randNum', randNum);  
}

    

var wins = 0;
var losses = 0;
var cTwoValue = Math.floor(Math.random() * 1) + 10;
var cThreeValue = Math.floor(Math.random() * 1) + 5;
var cFourValue = Math.floor(Math.random() * 1) + 15;
var cOneValue = Math.floor(Math.random() * 1) + 20;

$('#wins').text("Wins: " + wins);
$('#loss').text("Losses: " + losses);

totalScore = randNum + totalScore

//Remainder of pseudo-code 
//Increment user clicks to crystals to correlate to increase of points
//Set statements to trigger events when score reaches a certain threshold to end game via alert
//Shorthand Javascript statements to incorporate JQuery
//Declare a function for reset



function reset(){
        randNum = Math.floor(Math.random()*101+19);
        console.log(randNum);
        $('#randnum').text("Target Score : " + randNum);
        cOneValue= Math.floor(Math.random()*11+1);
        cTwoValue= Math.floor(Math.random()*11+1);
        cThreeValue= Math.floor(Math.random()*11+1);
        cFourValue= Math.floor(Math.random()*11+1);
        totalScore = 0;
        //after 5 wins or losses, the game completely starts over
        $('#ts').text("Total Score: " + totalScore);
        if (wins == 5 || losses == 5) {
            alert("Thanks for playing!");
            location.reload();
        }

        } 

function win(){

    //alert("Winner!");
    wins++;
    $("#wins").text("Wins: " + wins);
    reset();
}

function loss(){

    //alert("Loser!");
    losses++;
    $("#loss").text("Losses: " + losses);
    reset();
}


$('#c1').on('click', function() {


totalScore = totalScore + cOneValue;
console.log(cOneValue);
$('#ts').text("Total Score: " + totalScore);

console.log("totalscore", totalScore); 

//if (wins == 5 || losses == 5);
//alert("Game Over!");
//location.reload();
//changed series of if statements to else ifs for each button click
if (totalScore == randNum) {

    win();
                
}

else if (totalScore > randNum) 

    
    loss();
    
}

);

$('#c2').on('click', function() {

    console.log(cTwoValue);
    
    totalScore = totalScore + cTwoValue;

    //if (wins == 5 || losses == 5);
//alert("Game Over!");
//location.reload();

    $('#ts').text("Total Score: " + totalScore);
    
    console.log("totalscore", totalScore); 

    if (totalScore == randNum) {

        win();
                    
    }
    
    else if (totalScore > randNum) 
    
        loss();
    
    }
    
    );

    $('#c3').on('click', function() {
        //if (wins == 5 || losses == 5);
        //alert("Game Over!");
        //location.reload();
        console.log(cThreeValue);
        
        totalScore = cThreeValue + totalScore

        $('#ts').text("Total Score: " + totalScore);
        
        console.log("totalscore", totalScore); 

        if (totalScore == randNum) {
            win();
        
       
                        
        }
        
       else if (totalScore > randNum) 
    
            loss();
        
        
        });

        $('#c4').on('click', function() {

            //if (wins == 5 || losses == 5);
            //alert("Game Over!");
            //location.reload();

            console.log(cFourValue);
            
            totalScore = cFourValue + totalScore;

            $('#ts').text("Total Score: " + totalScore);
            
            console.log("totalscore", totalScore); 

            if (totalScore == randNum) {

                win();            
                            
            }
            
            else if (totalScore > randNum) 
            
                loss();
            
    
            })


            ;
