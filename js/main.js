$(document).ready(function(){
	//when the user clicks on a project picture, it shows the links for the code and site
	$('.card').on('click', function(){
		if($(this).children('.card-front').hasClass('hidden')){
			console.log('.card-front is hidden');
			$(this).children('.card-back').slideUp(200);
			$(this).children('.card-back').addClass('hidden');
			// $('.card-front').show(150);
			$(this).children('.card-front').removeClass('hidden');

		} else {
			console.log('.card-back is hidden');
			// $('.card-front').hide(500);
			$(this).children('.card-front').addClass('hidden');
			$(this).children('.card-back').slideDown(200);
			$(this).children('.card-back').removeClass('hidden');
		}
		
	});

	//when using a small screen, the navbar changes to a hamburger
	//when the hamburger is clicked, it opens the menu
	$('.burger-nav').on('click', function(){
		$('.navbar ul').toggleClass('open');
	});

	// Send form to my email
	var messageForm = "";
	$(".send").on("click", function(){
	  messageForm = $("form").serialize();
	  $.ajax({
	    url: "https://formspree.io/contact@valeriaoshiro.com", 
	    method: "POST",
	    data: { message: messageForm },
	    dataType: "json"
	  });
	  alert("Thank you for the email. We'll be in touch promptly.");
	  return false;
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



