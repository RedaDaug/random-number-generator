function randomGenerator(){
	
	var n = Math.random();
	n = n*100;
	n = Math.floor(n) + 1;
	
	document.getElementById("results").innerHTML = n;
	
}