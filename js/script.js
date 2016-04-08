// Gets total amount of slides
count = $(".slide").length;
p = count - 1;
n = count - 2;
// Sets the slide-container and individual slide size
$(".slide-container").css("width", 100 * count + "%");
$(".slide").css("width", 100 / count + "%");

// Conditional statement for clicking next
var curr = 0;
$(".next").click(function(e) {
  e.preventDefault();
  if (curr > n) {
    curr = 0;
  } else {
    curr++;
  }
  $(".slide-container").css({
    marginLeft: curr * -100 + "%"
  });
});

// Conditional statement for clicking prev
$(".prev").click(function(e) {
  e.preventDefault();
  if (curr < 1) {
    curr = p;
  } else {
    curr--;
  }
  $(".slide-container").css({
    marginLeft: curr * -100 + "%"
  });
});

//pxgradient
$(window).bind('load', function() {

	$('.js-gradient').pxgradient({
		step: 2,
		colors: ['#0087d9','#005dbd'],
		dir: 'y'
	});

	$('.js-dotted').dotdotdot();
});
