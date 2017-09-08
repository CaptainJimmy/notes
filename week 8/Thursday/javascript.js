var config = {
    apiKey: "AIzaSyAaePSkASMPRYwSH5YcBf60Z6bJiSNTSTQ",
    authDomain: "thursday-e5136.firebaseapp.com",
    databaseURL: "https://thursday-e5136.firebaseio.com",
    projectId: "thursday-e5136",
    storageBucket: "thursday-e5136.appspot.com",
    messagingSenderId: "227898078859"
  };

firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var role = "";
var startDate = "";
var payRate = "";
// var monthsWorked = 
// var totalBilled = payRate * monthsWorked;


$("#employeeAdd").on("submit", function(event){
event.preventDefault();

name = $("#employeeName").val().trim();
role = $("#employeeRole").val().trim();
payRate = $("#monthlyRate").val().trim();
startDate = $("#date").val();// startDate = $("#start-year-input").val();
// endYear = $("#end-year-input").val();

// console.log(name);
// console.log(role);
// console.log(payRate);
// console.log(startDate);

database.ref().push({
	name: name,
	role: role,
	payRate: payRate,
	startDate: startDate
});

database.ref().on("child_added", function(childSnapshot) {

console.log(childSnapshot.val().name);

// var newWell = $('<div>').addClass("well well-lg").text(childSnapshot.val().name);
// $("")
})


});