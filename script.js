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


// single object
// that has all the questions as variables within the object

// var planet = {
//     // Properties are made up of key-value pairs
//     name: "Earth",
//     age: "4.543 billion years",
//     moons: 1,
//     isPopulated: true,
//     population: "7.594 billion"
//   };


//give button a class?
//button text should change to start over and on next click reset the screen.
//button should hide during timer and reappear at the start of function endGame

//Sundays ToDo:
//Reset button works  -done
//Start button disappears -done
//Reset button appears -done
//first question card gets created, alters score and timer

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
var timeS1 = document.querySelector(".timer");
var mainS1 = document.getElementById("main");
var headS1 = document.getElementById("head");
var textS1 = document.getElementById("text");

var mode = "startJS"

var secondsLeft = 10

const questions = {
};
    
var q1 = {
    question: "I'm cute as a ",
    correntAnswer: "Button",
    a: "Main",
    b: "Header",
    c: "Button",
    d: "Div"
};
var q2 = {
    question: "Heres my second question",
    correntAnswer: "o",
    a: "Ramen",
    b: "Pizza",
    c: "Popcorn",
    d: "Peanuts"
}
var q3 = {
    question: "Heres my third question",
    correntAnswer: "o",
    a: "Pop",
    b: "Bob",
    c: "Eats",
    d: "Pizza"
};

questions.content1= q1;
questions.content2= q2;
questions.content3= q3;

console.log(questions)
console.log(questions.content1.a);

//function to start asking questions
function askQuestions(){
    textS1.textContent = questions.content1.question;
    text.appendChild(orderedAnswers);
    orderedAnswers.appendChild(li1);
    orderedAnswers.appendChild(li2);
    orderedAnswers.appendChild(li3);
    orderedAnswers.appendChild(li4);
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);
    a1.textContent = questions.content1.a;
    a2.textContent = questions.content1.b;
    a3.textContent = questions.content1.c;
    a4.textContent = questions.content1.d;

    a1.addEventListener("click", endGame)
}

//function for timer 
function startTimer(){
    start.style.visibility = "hidden";
    secondsLeft = 10
    var timerInterval = setInterval(function() {
        secondsLeft--;                                              //decreases seconds left DISPLAY by 1
        timeS1.textContent = secondsLeft + " seconds remains.";     //displays the seconds left and text seconds remaining.

        if(secondsLeft ===0) {                                      //if statement that watches for secondsLeft to hit zero
            clearInterval(timerInterval);                           //ends the countdown procedure
            endGame();                                              //moves screen to end

        }
    }, 1000);
}
 

//function to create gave over screen
function endGame(){                                                  //end screen
    headS1.textContent = "Game Over"
    textS1.textContent = "Here's your score"
    start.textContent = "Restart Quiz?";
    start.style.visibility = "visible";
}

start.addEventListener("click", askQuestions);
start.addEventListener("click", startTimer);
// var timer
// var 
// var
// var 



