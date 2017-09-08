//Game Questions
var theQuestions = [
  "Which superhero is called the Dark Knight?",
  "Which superhero can crawl on walls?",
  "What planet is Superman from?"
]

// Choices
var choices0 = ["Batman", "Spider-Man", "Superman", "Howard the Duck"]

var choices1 = ["James", "John", "Adham", "Jamie"]

// Correct Answer
var answer = ["Batman", "Spider-Man"]

var a = 0
console.log("JS file has been read")

// Start the Game with the 1st Question
$(document).ready(function() {
  $("#start-button").on("click", function() {
    $("#opening-screen").empty()
    console.log("Opening Screen Emptied")
    $("#questions").html(theQuestions[a])
    $("#choices").html(
      '<label><input type="radio" id= "option1" value="Batman" name="choice"> Batman</label><br> <label><input type="radio" name= "choice" value= "0"> Superman</label><br><label><input type="radio" name="choice" value= "0"> Wonder Woman</label><br> <label><input type="radio" name="choice" value= "0"> Martian Manhunter</label>'
    )
    $("#submit-button").html('<input type="submit" value="Submit">')
  })

  //Submit Your Answer And Cycle Through Questions
  $("#submit-button").on("click", function() {
    console.log("clicked")
    var choice = $('input[name="choice"]:checked')
    console.log(choice.val())
    a++
    $("#questions").html(theQuestions[a])
    console.log(a)
    if (a === 1) {
      console.log("hello")
      $("#choices").html(
        '<label><input type="radio" id= "option1" value="0" name="choice"> Thor </label><br> <label><input type="radio" name= "choice" value= "0"> Captain America </label><br> <label><input type="radio" name="choice" value= "0"> Iron Man </label><br> <label><input type="radio" name="choice"> Spider-Man </label>'
      )
    }

    if (a === 2) {
      console.log("hello")
      $("#choices").html(
        '<label><input type="radio" id= "option1" value="0" name="choice"> Hydrogen </label><br> <label><input type="radio" name= "choice"> Krypton </label><br> <label><input type="radio" name="choice" value= "0"> SupermanLand </label><br><label><input type="radio" name="choice" value= "0"> Oxygen </label>'
      )
    }
  })

  // Check the right answer function
  function rightAnswer() {}
})
