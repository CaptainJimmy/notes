var arg2 = process.argv[2];
var arg3 = parseFloat(process.argv[3]);
var arg4 = parseFloat(process.argv[4]);


switch(arg2){

	case "add": 
	console.log(arg3 + arg4)

	break;
	
	case "sub":
	console.log(arg3 - arg4);
	break;
	

	case "mult":
		console.log(arg3 * arg4);
	break;
	

	case "div":
		console.log(arg3 / arg4);
	
	break;

	case "rem": 
		var answer=arg3 % arg4;
		console.log(answer);
		break;

	case "pow":
		var answer=Math.pow(arg3,arg4);
		console.log(answer);
		break;

	default:
	console.log('error you dimwit');

}

