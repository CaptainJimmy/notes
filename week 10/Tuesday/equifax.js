var fs = require("fs");

var input = process.argv;
var action = input[2];
var account = input[3];
var amount = input[4];
var outputfile = "equifax.txt";




switch (action) {

    case "newaccount":
        if (account) {
            fs.appendFile(outputfile, account + ",0", function(error) {

                if (error) {
                    console.log("ERROR")
                }
            })
        } else if (!account) {
            console.log("NEEDS NEW ACCOUNT NAME");
        };
        break;

    case "deposit":
        if (account && amount) {
            fs.readFile(outputfile, "utf8", function(error, data) {
                if (error) {
                    console.log(error);
                } else {
                    var dataArr = data.split(",");
                    var newAmount = parseFloat(dataArr[1]) + parseFloat(amount);
                    console.log(dataArr);
                    console.log(newAmount);
                    fs.writeFile(outputfile, account + "," + newAmount, function(error) {
                        if (error) {
                            console.log(error)
                        };
                    });


                };

            });

        };
        break;

    case "total":

        if (account) {
            fs.readFile(outputfile, "utf8", function(error, data) {
                if (error) {
                    console.log(error);
                } else {
                    var dataArr = data.split(",");
                    var accountBalanace = dataArr[1];
                    console.log("Your Account Total is: " + accountBalanace);
                }
            });
        } else {
            console.log("No ACcount Name");
        };
        break;

    case "withdraw":
        if (account) {
           			 fs.readFile(outputfile, "utf8", function(error, data) {
               			     if (error) {console.log(error);}

               			     else {
                       				 var dataArr = data.split(",");
                       				 var oldAmount = dataArr[1];
                       				 var account = dataArr[0];
                       				 var newAmount = parseFloat(oldAmount) - parseFloat(amount)
                        			
                        			fs.writeFile(outputfile, account + "," + newAmount, function(error) {
                        				if (error) {
                        					console.log(error);
                        				};
                        			});
                        		};
                    });

		}
 else {            console.log("No ACcount Name");
                };
                //end switch case        
            };