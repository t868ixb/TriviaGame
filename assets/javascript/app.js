//create questions in an array
var myQuestions = [
    {
        question: "What does Mark say?",
        answers: ["bop bop", "I like that energy", "two powers claps", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "Where am I?",
        answers: ["Zoo", "On the beach", "Sitting in a tree", "Minding my own bizwax, stop asking"],
        correctAnswer: "Minding my own bizwax, stop asking"
    },
    {
        question: "What do you call two Chicago hot dogs with the 'works'?",
        answers: ["red hots", "a snack", "a salad", "breakfast"],
        correctAnswer: "a salad"
    }];




// Countdown time in seconds
var timeCountDown = 15;

// Counts for right, wrong, and unanswered q's
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

$(document).ready(function () {
    $("#doneButton").hide();
    $("#results-area").hide();

    $("#startButton").on("click", function () {
        console.log("who you clickin???")
        // Hide the start button from the user
        $("#startButton").hide();
        $("#results-area").hide();
        //$("#showTimer").text("you have" + timeCountDown + "seconds to play");
        // $("#showTimer").text("Seconds remaining..." + timeCountDown);
        displayQuestions();
        startTimer();
        console.log("after calling startTimer function " + timeCountDown);

    });

    $("#doneButton").on("click", function () {
        console.log("you DONE??")
        // Hide the done button from the user
        $("#doneButton").hide();
        $("#startButton").show();
        clearInterval(timer);

        checkAnswers(); //checks the answers and shows the results
        resetGame();
    });

    //start timer function
    function startTimer() {
        timer = setInterval(function () {
            timeCountDown--;
            // $("#showTimer").text(timeCountDown);
            $("#showTimer").show();
            $("#howTo").hide();
            $("#showTimer").text("Seconds remaining..." + timeCountDown);
            //  $("#showTimer").html("<h2>" + timeCountDown + "</h2>");
            if (timeCountDown === 0) {
                console.log("times up!!");
                clearInterval(timer);
                checkAnswers();
                resetGame();
            }
        }, 1000);

    };

    //function to display all the questions
    //loop through the questions array
    function displayQuestions() {
        $("#start-game").remove();
        $("#doneButton").show();
        for (var i = 0; i < myQuestions.length; i++) {
            $("#allQuestions").append("<h2>" + "<br>" + myQuestions[i].question + "</h2>");
            for (var j = 0; j < myQuestions[i].answers.length; j++) {
                $("#allQuestions").append("<input type='radio' name='question" + i + "'value='" + myQuestions[i].answers[j] + "'>" + myQuestions[i].answers[j] + "<br>");
            }
        }
    };
    //if a question was not answered, up the wrong counter
    //if a question was answered incorrectly, up the wrong counter
    //if a question was answered correctly, up the correct counter
    function checkAnswers() {
        for (var a = 0; a < myQuestions.length; a++) {

            var userAnswer = $("input[name=question" + a + "]:checked").val();
            console.log("user answer is " + userAnswer);


            if (userAnswer === myQuestions[a].correctAnswer) { //here is where I'm having an issue
                correctCount++;
               // console.log(myQuestions[a].correctAnswer);
            } else if (userAnswer === undefined) {
                unansweredCount++;

            }


            else {
                wrongCount++;
            }
            
        }
        console.log("correct count is  " + correctCount);
        console.log("wrong count is  " + wrongCount);
        console.log("unanswered count is  " + unansweredCount);



        //display the results
        //reset the game
        //show the start button
        //what else? maybe show the questions that were answered incorectly?  version 2.0 perhaps
        $("#results-area").show();
        $("#correct_answers").text("Correct Answers: " + correctCount);
        $("#wrong_answers").text("Incorrect Answers: " + wrongCount);
        $("#not_answered").text("Unanswered questions: " + unansweredCount);

        resetGame()
    };

    function resetGame() {
        //reset the game so it's ready for next play
        $("#allQuestions").empty();
        timeCountDown = 15;
        $("#startButton").show();
        $("#doneButton").hide();
        $("#showTimer").hide();
        $("#howTo").show();
        correctCount = 0;
        wrongCount = 0;
        unansweredCount = 0;
        // myQuestions.question[0];

    };

}); //end of document ready function