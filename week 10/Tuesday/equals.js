var a=process.argv[2];
var b=process.argv[3];


if (a===b ){
	console.log(true);
}
else{console.log(false);}

var amod=a%7;
var bmod=b%7;

if (amod === bmod && amod === 0) { console.log("both arguments are multiples of 7")}

else if (amod===0) { console.log("a is a mult of 7");}

else if (bmod===0) {console.log("b is a mult of 7");};