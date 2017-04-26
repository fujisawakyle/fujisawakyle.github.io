$(document).ready(function ( ) {
	
	var menu = document.querySelector('#menu');
	var drawer = document.querySelector('.nav');
	
	menu.addEventListener('click', function(e) {
  
		drawer.classList.toggle('open');
		e.stopPropagation();
  
	});
	menuClose.addEventListener('click', function() {
  
		drawer.classList.remove('open');
				
 	});
	
})