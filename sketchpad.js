$(document).ready(function() {
	view.makeGrid(16);
  $("#selectSize").on('click', view.selectSize);
  $("#pen").on('click', handlers.pen);
  $("#crayon").on('click', handlers.crayon);
  $("#eraser").on('click', handlers.eraser);
  $("#clear").on('click', view.clearGrid);
});



var view = {
    makeGrid: function(gridLength) {  
      // generate grid based on user input
	    for(var i = 0; i < gridLength * gridLength; i++) {
		    $("#sketchContainer").append("<div class='gridUnit'></div>");
  	  }
      // calculate size of each grid unit base off the length of div#sketchContainer(500px)
	    var unitSize = 500/gridLength;
	    $(".gridUnit").css({
		    "width": unitSize,
		    "height": unitSize,
		    "opacity": "0",
		    "background-color": "black"
	    });
      handlers.pen();
    },
    selectSize: function() {
      // set the user's input as a number inside 'userSize'
	    var userSize = prompt("Enter the number of squares per side; 8-32 works best.");
      // if user input is not a number, prompt them for a number
	    while(isNaN(userSize) === true) {
		    userSize = prompt("Please enter a number for the grid size");
	    }
      // remake the grid using the user's input for size
	    view.makeGrid(userSize);
	    handlers.pen();
    },
    clearGrid: function() {
	    $(".gridUnit").css({"opacity": "0"});
      handlers.pen();
    }
}

var handlers = {
  pen: function() {
	  $(".gridUnit").hover(function() {
		  $(this).css({
			  "opacity": "1",
			  "background-color": "black"
		  });
	  });
  },
  crayon: function() {
	  // selects random RGB color for crayon effect
	  function getRandomColor() {
		  var letters = "0123456789ABCDEF";
		  var color = "#";
		  for (var j = 0; j < 6; j++) {
			  color += letters[Math.floor(Math.random() * 16)];
		  }
		  return color;
	  }
	  // apply random color to div.gridUnit on mouse hover
	  $(".gridUnit").hover(function() {
		  $(this).css({
			  "opacity": "1",
			  "background-color": getRandomColor()
		  });
	  });
  },
  eraser: function() {
	  $(".gridUnit").hover(function() {
		  $(this).css({
			  "opacity": "0",
			  "background-color": "black"
		  });
	  });
  }
}