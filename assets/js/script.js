

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
var start = document.querySelector("#start");
var submit = document.querySelector("#submit");
var timeS1 = document.querySelector("#timer");
var timeBox = document.querySelector("#timerbox");
var mainS1 = document.getElementById("main");
var headS1 = document.getElementById("head");
var textS1 = document.getElementById("text");
var scoreBox = document.querySelector("#scorebox");
var scoreTitle = document.querySelector("#scoreTitle");
var scoreNumber = document.querySelector("#score");
var hsBox = document.querySelector("#hsbox");
var formEl = document.querySelector("#name");
var initials = document.querySelector("#username");
var hsTrack = document.querySelector("#userscores")

// var highScoreDisplayName = querySelector("#name");
// var highScoreDisplayScore = querySelector("#userscores");

// var newScore = localStorage.getItem("new_score");
// var newScore = localStorage.getItem("New Score");
var NewHS = JSON.parse(localStorage.getItem("newScore")) || [];


// var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));

console.log(scoreBox);
//variables for used to track score, timer, and state of page
var secondsLeft;
var score = 0;

scoreNumber.textContent = score;

scoreBox.style.visibility = "hidden";
timeBox.style.display = "none";
hsBox.style.display = "none";
timeBox.style.display = "none";
scoreBox.style.visibility = "hidden";
formEl.style.visibility = "hidden"; 
hsBox.style.display = "none";
start.style.visibility = "visible";



//creating object to hold all question information
const questions = {
};
    
var q1 = {
    question: "Your cute as a ",
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



function addScore(){
    score++
    console.log(score);
    scoreNumber.textContent = score;
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
    timeBox.style.display = "block";
    scoreBox.style.visibility = "visible";
    start.style.visibility = "hidden";

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
    startTimer();
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
function endGame(timerInterval){                        //end screen
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


    scoreBox.style.display = "block";
    scoreNumber.style.display = "block";
    timeBox.style.display = "none";
    formEl.style.visibility = "visible";
    headS1.textContent = "Game Over";
    textS1.textContent = 'Your score = ' + score;
    start.textContent = "Restart Quiz?";
    start.style.visibility = "visible";
    hsBox.style.display = "block";
    submit.style.display = "block";

}


start.addEventListener("click", askQuestions);


// function buildHSList() {
//     // var scoreContainer = document.createElement("div");

//     NewHS.forEach(function ({ player, newScore }) {
//         var list = document.createElement("ul");
//         hsBox.appendChild(list);
//         var li = document.createElement("li");
//         li.textContent = (player + "-" + newScore);
//         list.appendChild(li);
//     });
// }
// //     start.addEventListener("click", deleteScore(scoreContainer))


// // };

// // function deleteScore(scoreContainer){
// //     scoreContainer.remove();
// //     askQuestions();
// // };


// submit.addEventListener("click", function(event) {
//     event.preventDefault();
//     var playerScore = {
//         player: initials.value,
//         newScore: score
//     }
//     console.log(playerScore);
//     NewHS.push(playerScore);
//     console.log(NewHS);
//     localStorage.setItem("newScore", JSON.stringify(NewHS));
//     buildHSList();
//     submit.style.display = "none";
// });

