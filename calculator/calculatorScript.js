
// Update the display with the value selected (number or sign)
function show(x) {
    document.getElementById("screen").value += x;
}

// Calculate the result ( pressing = )
function result()
{
	 document.getElementById("screen").value = 
			eval(document.getElementById("screen").value);
}

// Erase the display (CE)
function erase()
{
	document.getElementById("screen").value ="";
	document.getElementById("screen").placeholder = "0";
}