$(document).ready(function(){
	//when the user clicks on a project picture, it shows the links for the code and site
	$('.card').on('click', function(){
		if($(this).children('.card-front').hasClass('hidden')){
			$(this).children('.card-back').slideUp(200);
			$(this).children('.card-back').addClass('hidden');
			// $('.card-front').show(150);
			$(this).children('.card-front').removeClass('hidden');

		} else {
			// $('.card-front').hide(500);
			$(this).children('.card-front').addClass('hidden');
			$(this).children('.card-back').slideDown(200);
			$(this).children('.card-back').removeClass('hidden');
		}
		
	});
	//when the user mousenter
	$('.card').hover(
		function(){
			// $('.card-front').hide(500);
			$(this).children('.card-front').addClass('hidden');
			$(this).children('.card-back').slideDown(200);
			$(this).children('.card-back').removeClass('hidden');
		},
		function(){
			$(this).children('.card-back').slideUp(200);
			$(this).children('.card-back').addClass('hidden');
			// $('.card-front').show(150);
			$(this).children('.card-front').removeClass('hidden');
		}
	);

	//when using a small screen, the navbar changes to a hamburger
	//when the hamburger is clicked, it opens the menu
	$('.burger-nav').on('click', function(){
		$('.navbar ul').toggleClass('open');
	});

	//up button appears when scrolled a certain point 
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.fa-stack').show(300);
 		} else {
 			$('.fa-stack').hide(300);
 		}
 	});
 
 	//up button effect that scrolls up
 	$('.fa-stack').click(function(event) {
 		event.preventDefault();
 		$('html, body').animate({scrollTop: 0}, 300);
 		return false;
 	})



});



