var j=0;
var k=0;

for (var i=0; i<100; i++) {

	if (j==3 && k==5) {
		console.log("fizzbuzz");
		j=0;
		k=0;
	}

	else if (j==3){
		console.log("fizz");
		j=0;
	}
	else if (k==5){
		console.log("buzz");
		k=0;
	}
	else {
		console.log(i);
		j++;
		k++;
	}
}
