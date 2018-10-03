$(document).ready(function () {
    //user clicks on start to get game going
    $('#startButton').on("click", function () {
        //hide the start button so user doesn't mess up with timer
        $('#startButton').hide();

        //timer text
        $('#quiz-area').append(
            '<div class="timer"><h2>You have <span class="time-Text">5</span> second to answer!</h2></div>'
           );

        //Timer code
        var isTimerOn = false;
        var timeCountDown = 5; // seconds

        if (isTimerOn == false) {
            var timer = setInterval(function () {
                timeCountDown--;
                $('.time-Text').text(timeCountDown);
                //the questions and annswers array
                var questions = [{
                    question: "What does Mark say?",
                    answers: [
                        "bop bop",
                        "I like that energy",
                        "Waluigi, obviously",
                        "all of the above"
                    ],
                    correctAnswer: 0
                }, {
                    question: "Where am I?",
                    answers: [
                        "Zoo",
                        "On the beach",
                        "Sitting in a tree",
                        "Minding my own bizwax, stop asking"
                    ],
                    correctAnswer: 3    
                }
                ]; //ENDS the questions and annswers array 
                   //declaring a new var for the quiz area for use in for loop
                   var askQuestion = $('#quiz-area');
                   //loop through the questions array
                   for (var i = 0; i < questions.length; i++) {
                       //show questions in quiz-area
                    askQuestion.append("<h2>" + questions[i].question + "</h2>");

                    //loop through the answers array
                    for (var j = 0; j < questions[i].answers.length; j++) {
                        //add the radio buttons for user to select answer
                        askQuestion.append("<input type='radio'" + i + "' value='" +
                       questions[i].answers[j] + "' '>" + questions[i].answers[j]);
                    }
               
                
              };

              
              askQuestion.append("<button id='done'>Done</button>");


                if (timeCountDown <= 0) {
                    //game has ended.  stop clock so it does not go into negatives
                    clearInterval(timer);
                    //clear the message about time left
                   // $('#quiz-area').empty();
                    //new instructions to start a new game
                    $('#quiz-area').append('<div class="timer"><h2>Start a new game!</h2></div>');
                    //show the start button again
                    $('#startButton').show(); //this is not working.  come back to it

                    //maybe let the user know that they won or lost
                    console.log("call something to show the results of the game")
                    //  create a new function that gets the results of the gane
                    //getResult(); good name for this function

                }
            }, 1000);
            isTimerOn = true;

        }

    });





}); //the document when ready ends here