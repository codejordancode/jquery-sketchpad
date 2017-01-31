var gridLength = 25; // between 1-100 works best

// creates a dynamically sized grid based on user input
function makeGrid() {
	// adds a div with the class gridUnit if i is less than gridUnit, increments i, and reevaluates
	for(var i = 0; i < gridLength * gridLength; i++) {
		$("#sketch_container").append("<div class='gridUnit'></div>");
	}
	// calculates the unitSize of each gridUnit(500/gridSize)
	var unitSize = 500/gridLength;
	// dynamically sizes gridUnit divs
	$(".gridUnit").css({
		"width": unitSize,
		"height": unitSize,
		"display": "inline-block",
	});
}

// creates the pen() effect when a gridUnit is moused over	
function pen() {
	$(".gridUnit").hover(function() {
		$(this).css({
			"opacity": "1",
			"background-color": "black"
		});
	});
}

// creates the crayon() effect when the button is clicked
function crayon() {
	// selects random RGB color for crayon effect
	function getRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var j = 0; j < 6; j++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	// triggers getRandomColor() when a gridUnit is moused over
	$(".gridUnit").hover(function() {
		$(this).css({
			"opacity": "1",
			"background-color": getRandomColor()
		});
	});
}

// creates eraser() effect
function eraser() {
	$(".gridUnit").hover(function() {
		$(this).css({
			"opacity": "0",
			"background-color": "black"
		});
	});
}

// clears the grid when the clear button is clicked
function clear_grid() {
	$(".gridUnit").css({"opacity": "0"});
}

// sets the gridLength equal to user input
function selectSize() {
	$().event(); 
}

// calls the makeGrid() and pen functions once the document is loaded
$(document).ready(function() {
		makeGrid();
		pen();
});