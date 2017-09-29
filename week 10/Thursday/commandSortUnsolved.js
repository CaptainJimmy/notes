// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ==========================================================================================
var newArray = process.argv;
var argArray = [];

for (var i=2; i<newArray.length ; i++){
	//console.log(newArray[i]);
	argArray.push(newArray[i]);
}
console.log(argArray);

argArray.sort(function(a, b){return a - b});
	
console.log(argArray);