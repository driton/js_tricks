var e;
function executeThis(param){
	//alert(param);

	var splited = param.split("?");
	var first   = splited[0].trim().replace('(','').replace(')','');
	var second  = splited[1].trim().replace('}','').replace('{','').split(",");

	str = 'switch('+first+') { ';

	for (i = 0; i < second.length; i++){
		
		if ( i == second.length - 1) {
			str += ' ' + second[i] +';';
			break;
		}else{
			str += 'case ' + second[i] +'; break; ';
		}
	}

	str += ' }';
	dir(str);
	return str;
}

e = executeThis('(3) ? {1 : "Verheiratet", 2 : "Geschiden" , 3 : "In eine Beziehung", default: "Unknown"}');
eval(e);





var e = '(2)?["Verheiratet", "Geschiden", "In eine Beziehung", "Unknown"]';

function sCase(param){

	var splited = param.split("?");
	var first   = splited[0].trim().replace('(','').replace(')','');
	var second  = splited[1].trim().replace(']','').replace('[','').split(",");

	str = 'switch('+first+') { ';

	for (i = 0; i < second.length; i++){
		
		if ( i == second.length - 1) {
			str += ' default: ' + second[i] +';';
			break;
		}else{
			str += 'case '+i +' : ' + second[i] +'; break; ';
		}
	}

	str += ' }';
	dir(str);

	return str;

}
eval(sCase(e));