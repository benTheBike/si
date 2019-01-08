// Variables
var helpOpen;
var configOpen;

window.onload = function() {
	// Define variables
	helpOpen = false;
	configOpen = false;
	console.log("window.onload function done");
}

// Opens the help info
function help() {
	if (helpOpen) {
		console.log("Opening help");
		document.getElementById("help-box").style.display = "none";
		document.getElementById("help-btn").innerHTML = "Help";
		document.getElementById("help-btn").style.fontWeight = "";
		helpOpen = false;
	} else {
		console.log("Closing help");
		document.getElementById("help-box").style.display = "block";
		document.getElementById("help-btn").innerHTML = "Close help";
		document.getElementById("help-btn").style.fontWeight = "bold";
		helpOpen = true;
	}
}

// Opens the config box
function configure() {
	// Close anything else that might be open. Hide extra controls, and make reset button visible.
	if (helpOpen) {
		help();
		console.log("Closed help");
	}
	
	document.getElementById("help-btn").parentNode.removeChild(document.getElementById("help-btn"));
	document.getElementById("config-btn").parentNode.removeChild(document.getElementById("config-btn"));
	document.getElementById("reset-btn").style.display = "inline";
	console.log("Removed help-btn & config-btn from DOM. Made reset-btn visible");
	
	
	// Make config-box visibile
	document.getElementById("config-box").style.display = "block";
	console.log("Made config-box visible");
}

// Starts the marquees
function start() {
	console.log("Starting");
	
	var imgUrl = document.getElementById("image-url-field").value;
	
	document.getElementById("config-box").parentNode.removeChild(document.getElementById("config-box"));
	document.getElementById("footer").parentNode.removeChild(document.getElementById("footer"));
	console.log("Removed config-box & footer from DOM");
	
	var marqueeHTML;
	var marqueeSpeed = 10;
	
	for (i = 0; i < 51; i++) { // Make 50 marquees
		marqueeHTML = "<marquee scrollamount='" + marqueeSpeed + "'><img src='" + imgUrl + "'></marquee>";
		document.getElementById("marquee-injection").innerHTML += marqueeHTML;
		marqueeSpeed += 15;
		console.log("Injected marquee #" + i + ", @ scrollspeed=" + marqueeSpeed);
	}
}

// Reloads the page
function reset() {
	window.location.href = window.location.href; // Lol
}
