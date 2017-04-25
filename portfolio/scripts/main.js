$(document).ready(function ( ) {
	
	var menu = document.querySelector('#menu');
	var menuClose =
	document.querySelector('#menuClose')
  var main = document.querySelector('main');
	var drawer = document.querySelector('.nav');
	
	menu.addEventListener('click', function(e) {
        drawer.classList.toggle('open');
				main.classList.toggle('open');
				e.stopPropagation();
				$(".menuButton").css("display","none");
      });
      menuClose.addEventListener('click', function() {
      	drawer.classList.remove('open');
				main.classList.remove('open');
				$(".menuButton").css("display","inline-block");
				
      });
	
   /* $("#menu").on("click", function (e) {
			$('.nav').classList.toggle('open');
			e.stopPropagation();
			$('#homeSection').html('yooo');
		});
	
		$('main').on('click', function () {
			$('#drawer').classList.remove('open');
		});*/
})