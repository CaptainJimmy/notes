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

$("#employeeAdd").on("submit", function(event){
event.preventDefault();

name = $("#employeeName").val().trim();
role = $("#employeeRole").val().trim();
payRate = $("#monthlyRate").val().trim();
startDate = $("#date").val();
//var monthsWorked = moment(startDate).fromNow("MM/DD/YYYY");

var exportStartdate = moment.unix(startDate, "X");
console.log(exportStartdate);

// console.log(name);
// console.log(role);
// console.log(payRate);
// console.log(startDate);
console.log(monthsWorked);

database.ref().push({
	name: name,
	role: role,
	payRate: payRate,
	startDate: exportStartDate,
	monthsWorked: monthsWorked
});

database.ref().on("child_added", function(childSnapshot) {

  

  
  // the months worked calculator
  var empMonthsDate = moment().diff(moment.unix(empStartDate, "X"), "months");
  

  // total billed rate calculator
  var empBilledTotal = empMonthsDate * payRate;

  
var newRow=$('<tr>')
newRow.append(
	$('<td>').text(employeeNameListener)
	$('<td>').text(roleListener),
	$('<td>').text(empStartDate),
	$('<td>').text(empMonthsDate),
	$('<td>').text(monthlyRateListener),
	$('<td>').text(empBilledTotal)
	);
$('#table').append(newRow);
// $(".wellsGoHere").append("<div class='well'><span id='name'> " + childSnapshot.val().name +
// 								        " </span><span id='email'> " + childSnapshot.val().role +
// 								        " </span><span id='age'> " + childSnapshot.val().payRate +
// 								        " </span><span id='comment'> " + childSnapshot.val().startDate +
// 								        " </span><span id='monthsWorked'> " + monthsWorked + "</div>");

})

});