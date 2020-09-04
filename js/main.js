$(document).ready(function(){
	//Copyright year dynamically added
	$('.copy').append(`<p>${new Date().getFullYear()}. All rights reserved.</p>`);

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



