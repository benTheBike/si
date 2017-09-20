// Variables
var url;
var img;
var imgHeight;
var imgWidth;
var statusBox;

// Check for URL parameters on window load.
// If no image is provided, display text in 'status' and wait for user to supply one.
// If image is given, but no dimensions, use default image size.
window.onload = function() {
	url = window.location.href;
	statusBox = document.getElementById("status");
	statusBox.innerHTML = "Window initialization done";
}

// Opens the configure box.
function showConfigure() {
	document.getElementById("configure-box").style.display = "block";
	statusBox.innerHTML = "Configuration box open";
}

// Sets image and closes configure box.
function setImage() {
	img = document.getElementById("image-url-field").value;
	document.getElementById("configure-box").style.display = "none";
	document.getElementById("start-btn").style.display = "inline";
	statusBox.innerHTML = "Set image";
}

// Starts the program
function start() {
	statusBox.innerHTML = "Started";
	var scrollSpeed = 10;
	for (i = 0; i < 20; i++) {
		document.getElementById("marquee-zone").innerHTML += "<marquee scrollamount='" + scrollSpeed + "'><img height='300' width='300' src='" + img + "'></img></marquee>";
		scrollSpeed = scrollSpeed + 5;
	}
	document.getElementById("reset-btn").style.display = "inline";
	document.getElementById("configure-btn").style.display = "none";
	document.getElementById("start-btn").style.display = "none";
}

// Reset
function reset() {
	window.location.href = "index.html"; // Just reloads the page
}