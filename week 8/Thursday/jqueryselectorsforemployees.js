
// <tbody> in html needs an id="table"
// <tbody id="table">
//  the employee start
  var empStartDate = moment.unix(startDate).format("MM/DD/YY");

  
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