$(document).ready(function() {
  function game() {
    //Game Questions
    var theQuestions = [
      "Which superhero is called the Dark Knight?",
      "Which superhero can crawl on walls?",
      "What planet is Superman from?"
    ]

    //Timer
    var number = 5

    //Number of Submit Clicks
    var numClicks = 0

    //Number of Right Answers
    var answersRight = 0

    //Timer
    function run() {
      intervalId = setInterval(decrement, 1000)
    }

    //Running the Timer & Resetting the game
    function decrement() {
      //  Decrease number by one.
      number--

      //  Show the number in the #timer tag.
      $("#timer").html("<h2>" + "Timer: " + number + "</h2>")

      //  Once number hits zero or you get through the game...
      if (number === 0 || numClicks === 3) {
        //  ...run the stop function.
        console.log(answersRight + "<---Number of Right Answers")
        $("#game-screen").empty()

        //Display Score
        $("#right-answers").html("Correct Answers: " + answersRight)
        $("#wrong-answers").html(
          "Wrong Answers: " + (theQuestions.length - answersRight)
        )
        resetGame()
      }
    }

    console.log("JS file has been read")

    //Reset the game function
    function resetGame() {
      var playAgain = confirm("Would you like to play again?")
      if (playAgain === true) {
        console.log("Game Restarting")
        $("#main-screen").empty()
        var restart = $("<div id = 'start-button'>Restart</div>")
        $("#main-screen").append(restart)
      } else {
        $("#main-screen").empty()
        alert("Thanks for playing")
      }
    }

    // Check the right answer function
    function rightAnswer(click) {
      if (click.val() === "1") {
        answersRight++
      }
    }

    $("#start-button").on("click", function() {
      $("#opening-screen").empty()
      console.log("Opening Screen Emptied")
      $("#questions").html(theQuestions[numClicks])

      run()

      //// Start the Game with the 1st Question
      $("#choices").html(
        '<label><input type="radio" id= "option1" value="1" name="choice"> Batman</label><br> <label><input type="radio" name= "choice" value= "0"> Superman</label><br><label><input type="radio" name="choice" value= "0"> Wonder Woman</label><br> <label><input type="radio" name="choice" value= "0"> Martian Manhunter</label>'
      )
      $("#submit-button").html('<input type="submit" value="Submit">')

      //Submit Your Answer And Cycle Through Questions
      $("#submit-button").on("click", function() {
        //Retrieve Value
        console.log("clicked")
        // var choice = $('input[name="choice"]:checked')
        // console.log(choice.val())
        var choice = $('input[name="choice"]:checked')

        rightAnswer(choice)

        numClicks++
        $("#questions").html(theQuestions[numClicks])
        console.log(numClicks)

        //Second Question
        if (numClicks === 1) {
          $("#choices").html(
            '<label><input type="radio" id= "option1" value="0" name="choice"> Thor </label><br> <label><input type="radio" name= "choice" value= "0"> Captain America </label><br> <label><input type="radio" name="choice" value= "0"> Iron Man </label><br> <label><input type="radio" name="choice" value="1"> Spider-Man </label>'
          )
        }

        //Third Question
        if (numClicks === 2) {
          $("#choices").html(
            '<label><input type="radio" id= "option1" value="0" name="choice"> Hydrogen </label><br> <label><input type="radio" name= "choice" value ="1"> Krypton </label><br> <label><input type="radio" name="choice" value= "0"> SupermanLand </label><br><label><input type="radio" name="choice" value= "0"> Oxygen </label>'
          )
        }
      })
      // //Final Screen
      // if (numClicks === 3) {
      //   console.log(answersRight + "<---Number of Right Answers")
      //   $("#game-screen").empty()
      //   $("#right-answers").html("Correct Answers: " + answersRight)
      //   $("#wrong-answers").html(
      //     "Wrong Answers: " + (theQuestions.length - answersRight)
      //   )
      // }
    })

    // Timer function
  }

  game()
})
