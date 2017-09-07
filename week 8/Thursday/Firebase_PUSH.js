<!DOCTYPE html>

<html lang="en-us">

<head>

  <meta charset="UTF-8">
  <title>Sign-Up Today!</title>

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

  <!-- LINK TO FIREBASE GOES HERE -->
  <script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>

</head>

<body>

  <div class="container">

    <br>

    <!-- Jumbotron -->
    <div class="jumbotron">
      <h1 class="text-center">Sign-Up Today!</h1>
    </div>

    <div class="row">

      <!-- Sign-Up Panel-->
      <div class="col-lg-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">New Member Sign-Up</h3>
          </div>
          <div class="panel-body">

            <!-- Sign-up Form (note the various input "types")-->

            <form role="form">
              <div class="form-group">
                <label for="name-input">Name:</label>
                <input class="form-control" id="name-input" type="text">
              </div>
              <div class="form-group">
                <label for="email-input">Email:</label>
                <input class="form-control" id="email-input" type="email">
              </div>
              <div class="form-group">
                <label for="age-input">Age:</label>
                <input class="form-control" id="age-input" type="number">
              </div>
              <div class="form-group">
                <label for="comment-input">How did you hear about us?</label>
                <textarea class="form-control" rows="5" id="comment-input"></textarea>
              </div>
              <button class="btn btn-default" id="add-user" type="submit">Submit</button>
            </form>

          </div>

        </div>

      </div>

      <!-- Most Recent Member Panel -->
      <div class="col-lg-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Most Recent Member</h3>
          </div>
          <div class="panel-body" id="recent-member">
            <h2 id="name-display"></h2>
            <h4 id="email-display"></h4>
            <h4 id="age-display"></h4>
            <p id="comment-display"></p>
          </div>
        </div>
      </div>

    </div>

  </div>

  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery.js"></script>

  <!-- Script -->
  <script>
    // ========================================== START CODING BELOW!!

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCQZuBojph7bYmNnxDGqg-Vr7dn4MvI0Xc",
      authDomain: "class-b241f.firebaseapp.com",
      databaseURL: "https://class-b241f.firebaseio.com",
      projectId: "class-b241f",
      storageBucket: "class-b241f.appspot.com",
      messagingSenderId: "721576404382"
    };
    firebase.initializeApp(config);

    // Create a variable to reference the database.
    var database = firebase.database();

    // Initial Values
    var name = "";
    var email = "";
    var age = 0;
    var comment = "";

    // Capture Button Click
    $("#add-user").on("click", function(event) {
      event.preventDefault();

      // Grabbed values from text boxes
      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      age = $("#age-input").val().trim();
      comment = $("#comment-input").val().trim();

      // Code for handling the push
      database.ref().push({
        name: name,
        email: email,
        age: age,
        comment: comment,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

    });

    // Firebase watcher + initial loader + order/limit HINT: .on("child_added"
    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
      // storing the snapshot.val() in a variable for convenience
      var sv = snapshot.val();

      // Console.loging the last user's data
      console.log(sv.name);
      console.log(sv.email);
      console.log(sv.age);
      console.log(sv.comment);

      // Change the HTML to reflect
      $("#name-display").html(sv.name);
      $("#email-display").html(sv.email);
      $("#age-display").html(sv.age);
      $("#comment-display").html(sv.comment);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
  </script>

</body>

</html>
