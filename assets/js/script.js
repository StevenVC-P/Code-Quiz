// GIVEN I am taking a code quiz
// WHEN I click the start button  - done
// THEN a timer starts and I am presented with a question  -done
// WHEN I answer a question  - done
// THEN I am presented with another question -done
// WHEN I answer a question incorrectly  - done
// THEN time is subtracted from the clock - done
// WHEN all questions are answered or the timer reaches 0  - done
// THEN the game is over  - done
// WHEN the game is over  - done
// THEN I can save my initials and my score

//Whats going on here?
//quiz needs a landing page
//a button to start the quiz
    //and dont forget the timer
//change the page to the question and remove the previous content
    //each question needs some text
        //some possible answer buttons
            // one is right
                //right one adds to the score and moves to the next question
            // rest are wrong
                //wrong ones decrease the timers and moves to the next question
//some more questions
//after all questions or timer hits zero go to score screen
//get a score a screen
    //allow user to add intitals
//move to record screen
    //show record of all past attempts
    //allow user to restart the quiz

//give button a class?
//button text should change to start over and on next click reset the screen.
//button should hide during timer and reappear at the start of function endGame

//Sundays ToDo:
//Reset button works  -done
//Start button disappears -done
//Reset button appears -done
//first question card gets created, alters score and timer


//What needs to happen for a score to increase?
//1) An answer must be given  -done
//2) The answer chosen must match the correct answer -done
//3) A message needs to be created
//4) Message needs to sent to the tracker
//5) tracker needs to receive the message
//6) tracker increases the score

//creating variables for items to add to html buttons, score screen maybe?
var orderedAnswers = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");

//creating accessable variables for tags in HTML
var startS1 = document.querySelector("#start");
var timeS1 = document.querySelector("#timer");
var mainS1 = document.getElementById("main");
var headS1 = document.getElementById("head");
var textS1 = document.getElementById("text");
var scoreBox = document.getElementById("scorebox");
var scoreTitle = document.getElementById("scoreTitle");
var scoreNumber = document.getElementById("score");

//variables for used to track score, timer, and state of page
var mode = "startJS";
var secondsLeft;
var score;

//creating object to hold all question information
const questions = {
};
    
var q1 = {
    question: "I'm cute as a ",
    a: "Main",
    b: "Header",
    c: "Button",
    d: "Div"
};
var q2 = {
    question: "What is the best way to resolve coding problems",
    a: "Google it",
    b: "Work with classmates",
    c: "Go to office hours",
    d: "All of the Above"
}
var q3 = {
    question: "Which will header tag will create the largest default text size?",
    a: "<h1>",
    b: "<h2>",
    c: "<h3>",
    d: "<h4>"
};

var q4 = {
    question: "Which of these is an example of a Method",
    a: "++",
    b: ".push",
    c: "<Main>",
    d: "display:"
};

var q5 = {
    question: "Which variable is best suited for holding multiple data types",
    a: "booleans",
    b: "strings",
    c: "objects",
    d: "arrays"
};

questions.content1= q1;
questions.content2= q2;
questions.content3= q3;
questions.content4= q4;
questions.content5= q5;

//tracking if working
console.log(questions);
console.log(questions.content5.a);
console.log(score);

//function to start asking questions
function scoreTracker(){
    scoreBox.style.visibility="visible"
    scoreBox.textContent = score;
}

function addScore(){
    score++
    console.log(score);
}

function decreaseTimer(){
    secondsLeft = secondsLeft - 15;

}

function orderListButtons(){
    text.appendChild(orderedAnswers);
    orderedAnswers.appendChild(li1);
    orderedAnswers.appendChild(li2);
    orderedAnswers.appendChild(li3);
    orderedAnswers.appendChild(li4);
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);
}
//Creates question content and fills in Changes content to Question One
function askQuestions(){
    score = 0;
    headS1.textContent = "Welcome to Dat Code Quiz!";
    textS1.textContent = questions.content1.question;

    orderListButtons();

    a1.textContent = questions.content1.a;
    a2.textContent = questions.content1.b;
    a3.textContent = questions.content1.c;
    a4.textContent = questions.content1.d;

    a3.addEventListener("click", addScore);
    a1.addEventListener("click", decreaseTimer);
    a2.addEventListener("click", decreaseTimer);
    a4.addEventListener("click", decreaseTimer);
    a1.addEventListener("click", questionTwo);
    a2.addEventListener("click", questionTwo);
    a3.addEventListener("click", questionTwo);
    a4.addEventListener("click", questionTwo);
};

//Changes content to Question Two
function questionTwo(){
    textS1.textContent = questions.content2.question;

    orderListButtons();

    a1.textContent = questions.content2.a;
    a2.textContent = questions.content2.b;
    a3.textContent = questions.content2.c;
    a4.textContent = questions.content2.d;

    //removes previousEvent Listener
    a3.removeEventListener("click", addScore);
    a1.removeEventListener("click", decreaseTimer);
    a2.removeEventListener("click", decreaseTimer);
    a4.removeEventListener("click", decreaseTimer);
    a1.removeEventListener("click", questionTwo);
    a2.removeEventListener("click", questionTwo);
    a3.removeEventListener("click", questionTwo);
    a4.removeEventListener("click", questionTwo);

    //sets new EventListener
    a4.addEventListener("click", addScore);
    a1.addEventListener("click", decreaseTimer);
    a2.addEventListener("click", decreaseTimer);
    a3.addEventListener("click", decreaseTimer);
    a1.addEventListener("click", questionThree);
    a2.addEventListener("click", questionThree);
    a3.addEventListener("click", questionThree);
    a4.addEventListener("click", questionThree);
};

//Changes content to Question Three
function questionThree(){
    textS1.textContent = questions.content3.question;

    orderListButtons();

    a1.textContent = questions.content3.a;
    a2.textContent = questions.content3.b;
    a3.textContent = questions.content3.c;
    a4.textContent = questions.content3.d;

    a4.removeEventListener("click", addScore);
    a1.removeEventListener("click", decreaseTimer);
    a2.removeEventListener("click", decreaseTimer);
    a3.removeEventListener("click", decreaseTimer);
    a1.removeEventListener("click", questionThree);
    a2.removeEventListener("click", questionThree);
    a3.removeEventListener("click", questionThree);
    a4.removeEventListener("click", questionThree);

    a1.addEventListener("click", addScore);
    a2.addEventListener("click", decreaseTimer);
    a3.addEventListener("click", decreaseTimer);
    a4.addEventListener("click", decreaseTimer);
    a1.addEventListener("click", questionFour);
    a2.addEventListener("click", questionFour);
    a3.addEventListener("click", questionFour);
    a4.addEventListener("click", questionFour);
};

//Changes content to Question Four
function questionFour(){
    textS1.textContent = questions.content4.question;

    orderListButtons();

    a1.textContent = questions.content4.a;
    a2.textContent = questions.content4.b;
    a3.textContent = questions.content4.c;
    a4.textContent = questions.content4.d;

    a1.removeEventListener("click", addScore);
    a2.removeEventListener("click", decreaseTimer);
    a3.removeEventListener("click", decreaseTimer);
    a4.removeEventListener("click", decreaseTimer);
    a1.removeEventListener("click", questionFour);
    a2.removeEventListener("click", questionFour);
    a3.removeEventListener("click", questionFour);
    a4.removeEventListener("click", questionFour);

    a2.addEventListener("click", addScore);
    a1.addEventListener("click", decreaseTimer);
    a3.addEventListener("click", decreaseTimer);
    a4.addEventListener("click", decreaseTimer);
    a1.addEventListener("click", questionFive);
    a2.addEventListener("click", questionFive);
    a3.addEventListener("click", questionFive);
    a4.addEventListener("click", questionFive);
};

//Changes content to Question Five
function questionFive(){
    textS1.textContent = questions.content5.question;

    orderListButtons();

    a1.textContent = questions.content5.a;
    a2.textContent = questions.content5.b;
    a3.textContent = questions.content5.c;
    a4.textContent = questions.content5.d;

    a2.removeEventListener("click", addScore);
    a1.removeEventListener("click", decreaseTimer);
    a3.removeEventListener("click", decreaseTimer);
    a4.removeEventListener("click", decreaseTimer);
    a1.removeEventListener("click", questionFive);
    a2.removeEventListener("click", questionFive);
    a3.removeEventListener("click", questionFive);
    a4.removeEventListener("click", questionFive);

    a3.addEventListener("click", addScore);
    a1.addEventListener("click", decreaseTimer);
    a2.addEventListener("click", decreaseTimer);
    a4.addEventListener("click", decreaseTimer);
    a1.addEventListener("click", endGame);
    a2.addEventListener("click", endGame);
    a3.addEventListener("click", endGame);
    a4.addEventListener("click", endGame);
};

//function for timer 
function startTimer(){
    start.style.visibility = "hidden";
    secondsLeft = 90
    var timerInterval = setInterval(function() {
        secondsLeft--;                                              //decreases seconds left DISPLAY by 1
        timeS1.style="text-align:center;";
        timeS1.textContent = secondsLeft + " seconds remains.";     //displays the seconds left and text seconds remaining.

        if(secondsLeft <= 0) {                                       //if statement that watches for secondsLeft to hit zero
            clearInterval(timerInterval);                           //ends the countdown procedure
            endGame();                                              //moves screen to end
            return timerInterval
        }
    }, 1000);
    return timerInterval
}

//function to create gave over screen
function endGame(secondLeft, timerInterval){                        //end screen
    secondsLeft = 0;                                     
    clearInterval(timerInterval);  
    a3.removeEventListener("click", addScore);
    a1.removeEventListener("click", decreaseTimer);
    a2.removeEventListener("click", decreaseTimer);
    a4.removeEventListener("click", decreaseTimer);
    a1.removeEventListener("click", endGame);
    a2.removeEventListener("click", endGame);
    a3.removeEventListener("click", endGame);
    a4.removeEventListener("click", endGame);

    scoreBox.style.visibility = "hidden";
    timeS1.style.visibility = "hidden";
    headS1.textContent = "Game Over";
    textS1.textContent = 'Here is your score = ' + score;
    start.textContent = "Restart Quiz?";
    start.style.visibility = "visible";
    return
}

start.addEventListener("click", askQuestions);
start.addEventListener("click", startTimer);
start.addEventListener("click", scoreTracker);



