//  the employee start
  var empStartDate = moment.unix(startDate).format("MM/DD/YY");

  
  // the months worked calculator
  var empMonthsDate = moment().diff(moment.unix(empStartDate, "X"), "months");
  

  // total billed rate calculator
  var empBilledTotal = empMonthsDate * payRate;