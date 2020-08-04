var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer
// if we click on the start/reset
document.getElementById("startreset").onclick = 
function(){
    // if we playing
    if (playing == true){
        location.reload(); //reload page
    }else{ // if we are not playing

        // change mode to playing
        playing = true;

        // set score to 0
        score = 0;

        document.getElementById("scorevalue").innerHTML = score;
        
        // show countdown
        show("timeremaining");
        timeremaining = 60;

        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        // hide game over box
        hide("gameover")
        // change start button to reset

        document.getElementById("startreset").innerHTML = "Reset Game";

        // start countdown
        startCountdown();

        // generate a new Q&A
        generateQA();

    }
}

// clicking on the answer box

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
        // check if we are playing
        if(playing == true){ //yes
            if(this.innerHTML == correctAnswer){
                //correct answer
    
                //increase score by
                score+=10;
    
                document.getElementById("scorevalue").innerHTML = score;
    
                //hide wrong box and show correct box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                }, 1000);
    
                generateQA();
            }else{
                //wrong answer
                hide("correct"),
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                }, 1000);
            }
        }
    }
}

// functions

// start counter
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){
            stopCountdown();

            show("gameover");

            document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>Your score is "+ score +".</p>";

            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing == false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}

// stop counter
function stopCountdown(){
    clearInterval(action);
}

// Hide element
function hide(id){
    document.getElementById(id).style.display = "none";
}

// show elements
function show(id){
    document.getElementById(id).style.display = "block";
}

// generate multiple questions and answers
function generateQA(){
    var x = 1+ Math.round(9* Math.random());
    var y = 1+ Math.round(9* Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;

    var correctPosition = 1+ Math.round(3* Math.random());

    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; // fill one box with the correct

    // fill other boxes with wrong answers

    var answers = [correctAnswer];

    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer; 
           do{
            
                wrongAnswer = (1+ Math.round(9* Math.random()))*(1+ Math.round(9* Math.random())); //wrong answer
               
           } while(answers.indexOf(wrongAnswer)>-1)

            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);

        }
    }

}
