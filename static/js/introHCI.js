'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("Experience Chan! It's not a lot of questions.\nToo many questions is the Chan disease.\nThe best way is just to observe the noise of the world.\nThe answer to your questions?\nAsk your own heart. ");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

$("a.thumbnail").click(projectClick);
$("a.thumbnail").closest(".project").append("<div class='project-description'><p>Description of the project.</p></div>");
// $(".project-description").hide();

function projectClick(e) {
    e.preventDefault();
    // $(this).css("background-color", "#7fff00");
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	description.fadeToggle();
}