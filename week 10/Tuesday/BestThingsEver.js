//# Best Things Ever

//## File

//* [`best_things_ever.txt`](Unsolved/best_things_ever.txt)

//## Instructions

//* Create a Node application that reads the `best_things_ever.txt` file, parses the comma separated elements, and ultimately console logs each element in the file on separate lines.

// * Your final output should look something like this:

//   ```
//   lazy boy recliner
//     massage
//     meditation
//     hot shower
//     cheese fondue
//     hot coffee with cashew milk
//     kitten falling asleep on my lap
//   ```

// ### Hints

var fs = require("fs");

// This block of code will create a file called "movies.txt".
// It will then print "Inceptwion, Die Hard" in the file
fs.readFile("bestThingsEver.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }
 var dataArr = data.split(",");
 for (var i=0; i<dataArr.length;i++){
 	console.log(dataArr[i].trim());
}
 });
