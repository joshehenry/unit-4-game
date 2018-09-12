//set where window will randomly generate number
window.onload = generateRandomNumber; 
var totalScore = 0; 
var randNum = 0;
function generateRandomNumber() {
randNum = Math.floor(Math.random()* 10) + 120; 
    
    document.getElementById("randnum").innerHTML = "Target Score: " + randNum++; 
console.log('randNum', randNum);  
}


var wins = 0;
var losses = 0;
var cTwoValue = Math.floor(Math.random() * 1) + 10;
var cThreeValue = Math.floor(Math.random() * 1) + 5;
var cFourValue = Math.floor(Math.random() * 1) + 9;
var cOneValue = Math.floor(Math.random() * 1) + 6;

totalScore += randNum;





//Remainder of pseudo-code 
//Increment user clicks to crystals to correlate to increase of points
//Set statements to trigger events when score reaches a certain threshold to end game via alert
//Shorthand Javascript statements to incorporate JQuery

$('#c1').on('click', function() {

console.log('clickc1');

totalScore += cOneValue;

document.getElementById('ts').innerText = (totalScore += cOneValue);

console.log("totalscore", totalScore); 

if (totalScore > randNum) {

    losses++;

document.getElementById("loss").innerText = ("Losses: " + losses++);
                
}

else (randNum === totalScore) 

    wins++;

document.getElementById("wins").innerText = ("Wins: " + wins++);
}

);

$('#c2').on('click', function() {

    console.log('clickc2');
    
    totalScore += cOneValue;

    document.getElementById('ts').innerText = (totalScore += cTwoValue);
    
    console.log("totalscore", totalScore); 

    if (totalScore > randNum) {

        losses++;
    
    document.getElementById("loss").innerText = ("Losses: " + losses++);
                    
    }
    
    else (randNum === totalScore) 
    
        wins++;
    
    document.getElementById("wins").innerText = ("Wins: " + wins++);
    }
    
    );

    $('#c3').on('click', function() {

        console.log('clickc3');
        
        totalScore += cOneValue;

        document.getElementById('ts').innerText = (totalScore += cThreeValue);
        
        console.log("totalscore", totalScore); 

        if (totalScore > randNum) {

            losses++;
        
        document.getElementById("loss").innerText = ("Losses: " + losses++);
                        
        }
        
        else (randNum === totalScore) 
        
            wins++;
        
        document.getElementById("wins").innerText = ("Wins: " + wins++);
        
        
        });

        $('#c4').on('click', function() {

            console.log('clickc4');
            
            totalScore += cOneValue;

            document.getElementById('ts').innerText = (totalScore += cFourValue);
            
            console.log("totalscore", totalScore); 

            if (totalScore > randNum) {

                losses++;
            
            document.getElementById("loss").innerText = ("Losses: " + losses++);
                            
            }
            
            else (randNum === totalScore) 
            
                wins++;
            
            document.getElementById("wins").innerText = ("Wins: " + wins++);
            }
            
            );

           