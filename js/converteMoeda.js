function valueToString(value){
	return ("R$ "+value.toFixed(2)).replace(".",",");
}

function stringToValue(string){
	return parseFloat(string.replace("R$ ","").replace(",","."));
}