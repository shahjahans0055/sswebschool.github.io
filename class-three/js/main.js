(function($){
	"use strict";
	jQuery(document).ready(function($){
		$(".case-studies-carousel").owlCarousel({
			items:3,
			margin:30,
			loop:true,
			dots:true,
			nav:false
		});
				
		$(".testimonial-carusel").owlCarousel({
			items:1,
			loop:true,
			dots:true,
			nav:false
		});
		
	});
	jQuery(window).load(function(){
		
	});
	
}(jQuery));