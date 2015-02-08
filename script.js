$(document).ready(function(){

	// Scrolls
	$('#navigate-home').click(function(e){
		e.preventDefault();
		$('html, body').animate({
		    scrollTop: $("#home").offset().top}, 700);
	});
	$('.navbar-brand').click(function(e){
		e.preventDefault();
		$('html, body').animate({
		    scrollTop: $("#home").offset().top}, 700);
	});
	$('#navigate-studies').click(function(e){
		e.preventDefault();
		$('html, body').animate({
		    scrollTop: $("#studies").offset().top}, 700);
	});
	$('#navigate-projects').click(function(e){
		e.preventDefault();
		$('html, body').animate({
		    scrollTop: $("#projects").offset().top}, 700);
	});
	$('#navigate-about').click(function(e){
		e.preventDefault();
		$('html, body').animate({
		    scrollTop: $("#about").offset().top}, 700);
	});

	// Navigation Bar buttons control
	$(".nav li a").click(function() {
		$(this).parent().parent().find('.active').removeClass('active');
    	$(this).parent().addClass('active');
	});	

});
