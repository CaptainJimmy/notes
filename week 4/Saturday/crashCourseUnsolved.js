// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable

var variable="stuff"


// 2. ARRAYS
// ==========================================================

// Create an array of five strings

var array = ["string1","string2","string3","string4","string5"];



// Create an array of five numbers

var numArray = [1,2,3,4,5];


// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"
for (var i=0;i<5;i++){
	console.log("My name is Bob five times");
}


// Create a for loop that loops through your five string array
for (var i=0;i<array.length;i++){
	console.log(array[i]);
}



// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function

function math(){
	var x=6;
	var y=2;
	var answer= x / y;
	console.log(answer);
}
math();

// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function
function arrayFoo(){
	for (var j=0;j<numArray.length;j++){
		console.log(numArray[j]);
	}
}

arrayFoo();

// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object
var fooFooFoo = {
	foo: "that",
	chicken: "shoes",
	cheese: "fun",
	hipsters: "smelly",
	}




// Console log any three of the properties in that object
console.log(fooFooFoo.foo + fooFooFoo.chicken + fooFooFoo.cheese);


// Create an Array of 5 Objects
var arrayObject = {

poultry: {
	chicken: {
		feathers: "white", 
		beak: "orange",
		feet: {
			shoes: {
				sneakers: "false",
			}
		}
	},
	turkey: "yes",
}
};

// Console log 3 properties for every one of the five objects

console.log( arrayObject.poultry.chicken.feathers );
console.log (arrayObject.poultry.turkey);
console.log (arrayObject.poultry.chicken.beak);


// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.

$(".button").on("click",function (){ 
  var thisEqual = 888;
console.log(thisEqual);
});



// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.
