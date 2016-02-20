
$(document).ready(function() {

	var speed = 500;
	var autoSlide = "True";
	var autoSlide_speed = 3000;

	function nextSlide() {
		$(".active").removeClass("active").addClass("oldActive");
		if($(".oldActive").is(":last-child")) {
			$(".slides").first().addClass("active");
		}
		else {

			$(".oldActive").next().addClass("active");
		}

		$(".slides").fadeOut(speed);
		$(".active").fadeIn(speed);
		$(".oldActive").removeClass("oldActive");
	}

	//Initial setup - Adding the active class
	$(".slides").first().addClass("active");

	//Hide all slides
	$(".slides").hide();
	$(".active").fadeIn();

	$("#next").click(function() {

		nextSlide();

	});

	$("#prev").click(function() {
		$(".active").removeClass("active").addClass("oldActive");
		if($(".oldActive").is(":first-child")) {
			$(".slides").last().addClass("active");
		}
		else {

			$(".oldActive").prev().addClass("active");
		}

		$(".slides").fadeOut(speed);
		$(".active").fadeIn(speed);
		$(".oldActive").removeClass("oldActive");

	});

	if(autoSlide == "True") {
		setInterval(function() {
			nextSlide();
		}, 3000);
	}

});
