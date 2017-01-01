function executeThis(param){
	//alert(param);

	var splited = param.split("?");
	var condition   = splited[0].trim().replace('(','').replace(')','');

	var secondOther  = splited[1].trim().replace('}','').replace('{','').split(",");

	var second  = '';
	
for (i = 0 ; i < secondOther.length; i ++){
	if (secondOther[i].indexOf("||" !== -1)){
		if ( i == secondOther.length - 1) {
			second += secondOther[i];
		}else{
			var temp = secondOther[i].split(":");

			if (temp.indexOf("|" !== -1)) {
			var tempSecond = temp[0].split("|");
				
				for (j = 0; j < tempSecond.length; j++){
					if (typeof tempSecond[j] != 'undefined'){
						second += tempSecond[j] + " : " + temp[1] + ',';
					}
				}
			}
		}
	}else{
		if ( i == secondOther.length - 1) {
			second += secondOther[i];
		}else{
				second +=  secondOther[i] + ',';	
		}
	}

}
second = '{'+second+'}';
eval(`var preSecondType = ${second}`);

second = second.trim().replace('}','').replace('{','').split(",");

	var preSecond  = second // OBJ

	var isAnyArrayInsideSecond = preSecond.indexOf("[");
	
	//Check if any array symbol Assigned
	if ( isAnyArrayInsideSecond === -1 ){
				str = 'switch('+condition+') { \n';

				var firstValue;
				var  lastValue;
				for (i = 0; i < second.length; i++){
					firstValue = second[i]
					lastValue =  second[i+1];

					if ( i == second.length - 1) {

						str += ' ' + second[i] +';\n';

					}else{
							str += '\tcase ' + second[i] +'; \n\t\tbreak;\n ';
					}
				}

				str += ' \n}';
				console.log(str);
				return str;
	
	}else{
		return error();
	}
}

var resul1 = executeThis('(true) ? {1: "One value", "hello"  : "Hello Horld" , true : "This is true", default: "Unknown"}');
var resul2 = executeThis('("hello") ? {1: "Verheiratet", "hello" : "Geschiden" , 3 : "In eine Beziehung", default: "Unknown"}');
var resul3 = executeThis('(2) ? {1 | 2: "One ore two", "hello" | 5 : "Hello or Five" , true|2 : "This is true", default: "Unknown"}');
console.log(eval(resul1));
console.log(eval(resul2));
console.log(eval(resul3));

/*********** Generated Code *********/

/*
switch(true) { 
	case 1 :  "One value"; 
		break;
 	case  "hello"   :  "Hello Horld" ; 
		break;
 	case  true  :  "This is true"; 
		break;
   default: "Unknown";
 
}
switch("hello") { 
	case 1 :  "Verheiratet"; 
		break;
 	case  "hello"  :  "Geschiden" ; 
		break;
 	case  3  :  "In eine Beziehung"; 
		break;
   default: "Unknown";
 
}

switch(2) { 
	case 1  :  "One ore two"; 
		break;
 	case  2 :  "One ore two"; 
		break;
 	case  "hello"  :  "Hello or Five" ; 
		break;
 	case  5  :  "Hello or Five" ; 
		break;
 	case  true :  "This is true"; 
		break;
 	case 2  :  "This is true"; 
		break;
   default: "Unknown";
 
}
This is true
Geschiden
One ore two
*/