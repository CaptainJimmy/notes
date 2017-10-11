// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
// Load the NPM Package inquirer
var inquirer = require("inquirer");
var weather = require("weather-js");
var chalk = require("chalk");
// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Set your password",
      name: "password"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirmPW",
      default: true
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "Which town would you like the weather for?",
      choices: ["Philadelphia PA", "Howell NJ", "Denver NC","Somerset NJ","Gunter TX"],
      name: "weatherTown"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirmWeather",
      default: true
    }
  ]).then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log(inquirerResponse.weatherTown + " is now your query.\n");
      weather.find({ search: inquirerResponse.weatherTown, degreeType: "F" }, function(err, result) {
        console.log("");
        console.log("Weather Forecast: "+inquirerResponse.weatherTown );
        console.log("-------------------------------------------------------------------");
        console.log("Current Temperature: " + result[0].current.temperature + " F");
        console.log("Sky: " + result[0].current.skytext);
        console.log("Tomorrow's Forecast: Low of " + result[0].forecast[1].low + "F, High of " + result[0].forecast[1].high + "F");
        console.log("");
        });
      }

    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });
