$(document).ready(function() {

  // VARIABLE DECLARATION
  var answer = Math.floor(Math.random() * (101 - 1) + 1);
  var text_shows_distance_guess = $("main p");
  var num_of_guesses = 0;

  // FUNCTION DECLARATION
  function compareBothNums(secret_num, user_num, guesses) {
    if (secret_num > user_num) {
      text_shows_distance_guess.text("My number is higher than " + user_num);
    } else if (secret_num < user_num) {
      text_shows_distance_guess.text("My number is lower than " + user_num);
    } else if (secret_num == user_num) {
      text_shows_distance_guess.text("You guessed it! It took you " + guesses + " guesses.");
      $("#guess").attr("disabled", "disabled");
    }
  }

  function validNum(number_of_user) {
    if (number_of_user > 100 || number_of_user < 1 || isNaN(number_of_user)) {
      return false;
    } else {
      return true;
    }
  }

  function gameCoreFunctions(user_choice) {
      if (validNum(user_choice)) {
        compareBothNums(answer, user_choice, num_of_guesses);
      } else {
        text_shows_distance_guess.text("Enter a valid number between 1 and 100 and only numbers");
      }
    }

  // NEW GAME CLICK EVENT
  $("a").on("click", function(e) {
    e.preventDefault();

    //reset variables
    answer = Math.floor(Math.random() * (101 - 1) + 1);
    num_of_guesses = 0;
    $("#guess").removeAttr('disabled').val(" ");
    text_shows_distance_guess.text("Guess a number from 1 to 100");
  })

  // #guess_btn CLICK EVENT
  $("#guess_btn").on("click", function(e) {
    e.preventDefault();
    var user_choice = $("#guess").val();
    num_of_guesses++;

    gameCoreFunctions(user_choice);
  })

}) // END OUTER PARENTHESIS
