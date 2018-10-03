
$(document).ready(function () {


    //need a start button when user opens the site
    //need a timer at the start of the game which starts when the button is pressed



    $('#startButton').on("click", function () {
        $('#startButton').hide();
        var counter = 6; //one higher than what I want to display to user
        setInterval(function () {
            counter--; //reduces the timer
            if (counter >= 0) {
                span = document.getElementById("countDown");
                span.innerHTML = counter;
                var myQuestions = [{
                        question: "What does Mark say?",
                        answers: {
                            a: "bop bop",
                            b: "I like that energy",
                            c: "Waluigi, obviously",
                            d: "all of the above"
                        },
                        correctAnswer: "a"
                    },{
                        question: "Where am I?",
                        answers: {
                            a: "Zoo",
                            b: "On the beach",
                            c: "Sitting in a tree",
                            d: "Minding my own bizwax, stop asking"
                        },
                        correctAnswer: "d"
                    }];
                for (i = 0; i < myQuestions.length; i++);
                $("#questions").append(myQuestions + '<br>');
                // for (i=0; i<myQuestions.length; i++);  
                // $.each(myQuestions, function (index,value) {
                //     $("#questions").append(index + value + '<br>');
                //     // $("#questions").html(myQuestions);
                // });
            }
            if (counter === 0) {
                console.log('sorry, out of time');
                clearInterval(counter);
                $('#startButton').show();
            }












    //     }, 1000); //on click button ends here
    }); //the document when ready ends here









    //Do code for showing the number of seconds here
    //the html should display the timer counting down
    //questions should appear on the page for users to select an anwer for
    ///need an array to hold the questions
    //answer choices should be present for the user to select from
    ///need an array to hold the answers ?? how if each question has multiple answers?  what if I display the choices and only track the correct answer?
    ///only one choice (answer) should be allowed to be selected
    //if the timer reaches the end before the user completes all responses: 
    ///show a screen with a try again message "you too slow"
    ///show how many questions were answered correctly
    ////need an array holding the corret answers?  
    ///show how many questions were answered incorrectly
    //if the the user clicks down before the toimer goes off, 
    ///show a screen with a congratulations "you beat the clock"
    ///show how many questions were answered correctly
    ///need a variable to hold this^^
    ///show how many questions were answered incorrectly
    ///need a variable to hold this^^








});  //end of document ready
