// Create the illusion of a function like and dislike
$(".thumbs-up").click(function() {
  $('.thumbs-up').toggleClass('active');
  $('.thumbs-down').removeClass('active');
});

$(".thumbs-down").click(function() {
  $('.thumbs-down').toggleClass('active');
  $('.thumbs-up').removeClass('active');
});

var brewing = $("svg.brewing > *");
var brew = $("#brewing");
var bgBeer = $("rect#rect-orange");
var beer = $("rect#rect-white-2");
var brewText = $("#brew-text");
var bubble = $(".bubble-group");

// Create the brewing animation
brewing.on("click", function() {
  brew.addClass('brewing-scale-active');
  bgBeer.addClass('brewing-background-active');
  beer.addClass('brewing-background-2-active');
  bubble.addClass('bubble-group-active');
  brewText.text('Brewing…')
});

// Create the illusion of loading the random beer page
function delay (URL) {
  setTimeout( function() {
    window.location = URL
  }, 2500 );
}
