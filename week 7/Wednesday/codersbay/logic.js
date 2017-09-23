// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

  var config = {
    apiKey: "AIzaSyBj0DCXfcgPeS5MDbVkKMoiPRNiF5kO_gY",
    authDomain: "wednesday-class-feab5.firebaseapp.com",
    databaseURL: "https://wednesday-class-feab5.firebaseio.com",
    projectId: "wednesday-class-feab5",
    storageBucket: "wednesday-class-feab5.appspot.com",
    messagingSenderId: "879822735607"
  };
  firebase.initializeApp(config);
// Assign the reference to the database to a variable named 'database'
//var database = ...

var database=firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the local data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the local variables for highBidder equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...
    highPrice=database.snapshot.val().highPrice;
    highBidder=database.snapshot.val().highPrice;

    // change the HTML to reflect the newly updated local values (most recent information from firebase)
      $('#highest-bidder').html(highBidder);
      $('#highest-price').html(highPrice);

    // Print the local data to the console.
    console.log(highPrice);
    console.log(highBidder);

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {
    highBidder=$('#highest-bidder').val();
    highPrice=$('#highest-bidder').val();
    // Change the HTML to reflect the local value in firebase
    $('#highest-bidder').html(highBidder);
    $('#highest-price').html(highPrice);
    // Print the local data to the console.
console.log(highBidder);
console.log(highPrice);

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
var bidderPrice=$('#bidder-price').val();
var bidderName=$('#bidder-name').val();
  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      bidderPrice: bidderPrice,
      bidderName: bidderName
     });

    // Log the new High Price
console.log(bidderPrice);
console.log(bidderName);

    // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)
highBidder=bidderName;
highPrice=bidderPrice;

    // Change the HTML to reflect the new high price and bidder
 $('#highest-bidder').html(highBidder);
      $('#highest-price').html(highPrice);

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
