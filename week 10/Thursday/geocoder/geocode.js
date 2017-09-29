// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================
var args = process.argv.slice(2).join(" ");
// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require('geocoder');
const chalk = require('chalk');


// other method
//var args = process.argv;
//
//var argArray=[];
//for (var i=2; i<args.length ; i++){
 //argArray.push(args[i]);
 //}
 //console.log(chalk.red(argArray));
 //var newArray=argArray.join(' ');
 //console.log(chalk.cyan(newArray));

// Geocoding
geocoder.geocode(args, function ( err, data ) {
  if (err) {console.log(err);}
  // do something with data
  else { console.log(chalk.yellow.bold(JSON.stringify(data.results,null,2)));
  }
});


// Take in the command line arguments




// Build your address as an array or string




// Then use Geocoder NPM to geocode the address
