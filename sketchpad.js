var gridSize = 4;
var unitSize = 0;

// calls the makeGrid function once the document is loaded
$(document).ready(function() {
		makeGrid();
});

// creates a dynamically sized grid based on user input
function makeGrid() {
	// adds a div with the class gridUnit if i is less than gridUnit
	for(var i = 0; i < gridSize * gridSize; i++) {
		$("#sketch_container").append("<div class='gridUnit'></div>");
	}
	// calculates the unitSize of each gridUnit(500/gridSize)
	unitSize = 500/gridSize;
	// dynamically sizes gridUnit divs
	$(".gridUnit").css({
		"width": unitSize,
		"height": unitSize,
	});
}