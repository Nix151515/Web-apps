
// Update the clock
setInterval(timer, 100);

function timer() {

    var date = new Date();
	
	// Calculating the degrees based on the actual minute or second
	var s = (date.getSeconds() / 60) * 360 + 180;
	var m = (date.getMinutes() / 60) * 360 + 180;
	
	var hourConvertor = date.getHours();
	
	// Translating our from 1-24 to 1-12 
	if (hourConvertor > 12) {
		hourConvertor -= 12;
	} 
	else 
		if (hourConvertor === 0) {
		   hourConvertor = 12;
		}
	
	// Calculating the degrees based on the actual hour
	var h = (hourConvertor / 12)*360 + 180;
	
	// Update the values
	document.getElementById("seconds").style.transform = "rotate("+s+"deg)";
	document.getElementById("minutes").style.transform = "rotate("+m+"deg)";
	document.getElementById("hours").style.transform = "rotate("+h+"deg)";
	
	// Digital Clock
    document.getElementById("clockD").innerHTML = date.toLocaleTimeString();
	
}