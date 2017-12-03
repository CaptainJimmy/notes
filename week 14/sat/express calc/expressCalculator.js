// Dependencies
var express = require("express");

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:first/:second", function(req, res) {

  // TODO parse out the variables from the request
  var first=parseInt(req.params.first);
  var second=parseInt(req.params.second);
  var operation=req.params.operation;

  console.log(operation + " " + first + " " + second);

  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)

  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      // Add your logic here. Pun intended.
      result=first+second
      break;
    case "subtract":
      // Subtract logic
            result=first-second

      break;
    case "multiply":
            result=first*second

      // Multiply
      break;
    case "divide":
            result=first/second

      // Divide
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(3002);
