$(document).ready(function(){
   $( "#about" ).click(function() {
			$('.about-window').removeClass('hide-left').addClass('show-left');
	 });
	
	 $( ".close-button" ).click(function() {
			$('.about-window').removeClass('show-left').addClass('hide-left');
	 });
		
});

