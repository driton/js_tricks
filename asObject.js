
function executeThis(param){
	//alert(param);

	var splited = param.split("?");
	var first   = splited[0].trim().replace('(','').replace(')','');
	var second  = splited[1].trim().replace('}','').replace('{','').split(",");
	
	

	var preSecond  = splited[1] // OBJ

	var isAnyArrayInsideSecond = preSecond.indexOf("[");
	
	//Check if any array symbol Assigned
	if ( isAnyArrayInsideSecond === -1 ){
		

		try {
		   eval(`var preSecondType = ${preSecond}`);

		   if (typeof preSecondType === 'object') {

				str = 'switch('+first+') { ';

				for (i = 0; i < second.length; i++){

					if ( i == second.length - 1) {

						str += ' ' + second[i] +';';

					}else{

						str += 'case ' + second[i] +'; break; ';

					}
				}

				str += ' }';
				console.log(str);
				return str;

			}else{
				return null;
				}

		} catch (e) {
		    if (e instanceof SyntaxError) {
		        console.log(e.message);
		    }
		}

 	
	
	}else{
		return null;
	}
}

var e = executeThis('("hello") ? {1: "Verheiratet", "hello" : "Geschiden" , 3 : "In eine Beziehung", default: "Unknown"}');
console.log(eval(e));


/*********** Generated Code *********/

/*
switch("hello") { 
	case 1 : 
		"Verheiratet"; 
		break; 
	case "hello" : 
		"Geschiden" ; 
		break; 
	case  3 : 
		"In eine Beziehung"; 
		break;   
	default: "Unknown"; 
}
*/
