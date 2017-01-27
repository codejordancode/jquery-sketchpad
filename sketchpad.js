var gridSize = 100; // between 1-100 works best

// creates a dynamically sized grid based on user input
function makeGrid() {

	// adds a div with the class gridUnit if i is less than gridUnit, increments i, and reevaluates
	for(var i = 0; i < gridSize * gridSize; i++) {
		$("#sketch_container").append("<div class='gridUnit'></div>");
	}

	// calculates the unitSize of each gridUnit(500/gridSize)
	var unitSize = 500/gridSize;

	// dynamically sizes gridUnit divs
	$(".gridUnit").css({
		"width": unitSize,
		"height": unitSize,
	});

	// creates the pen effect when a gridUnit is moused over
	$(".gridUnit").mouseover(function() {
		$(this).css({
			"background-color": "black"
		});
	});

	// creates the pencil effect when a gridUnit is moused over
	$(".gridUnit").mouseover(function() {
		$(this).css({
			opacity: function(index, value) {
				return parseFloat(value) + 0.1;
			}
		});
	});
}

// calls the makeGrid function once the document is loaded
$(document).ready(function() {
		makeGrid();
});