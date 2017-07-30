$(document).ready(function ( ) {
	
	var menu = document.querySelector('#menu'),
			drawer = document.querySelector('.nav'),
			email = document.querySelector('#email'),
			main = document.querySelector('#main');
	
	//open and close the menu
	menu.addEventListener('click', function(e) {
  	drawer.classList.toggle('open');
		//e.stopPropagation();
  
	});
	
	//open email
	email.addEventListener('click', function() {

    window.location.href = "mailto:fujisawakyle@gmail.com";
				
 	});
	
	main.addEventListener('click', function () {
		$('#drawer').removeClass('open');
	});
	
})