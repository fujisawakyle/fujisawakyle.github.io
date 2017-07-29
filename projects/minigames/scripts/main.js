
	
	var menu = document.querySelector('#menu'),
			topBar = document.querySelector('#topBar'),
			main = document.querySelector('#mainSection'),
			drawer = document.querySelector('.gameNav'),
			simonToggle = document.querySelector('#simonToggle'),
			allToggle = document.querySelector('#allToggle'),
			simonGame = document.querySelector('#simonGame'),
			tttGame = document.querySelector('#tttGame'),
			tttToggle = document.querySelector('#tttToggle');
	
	//open and close the menu
	allToggle.addEventListener('mouseover', function(e) {
  	$('#drawer').addClass('open');
		//e.stopPropagation();
  
	});

	topBar.addEventListener('click', function () {
		$('#drawer').removeClass('open');
	});

	main.addEventListener('mouseover', function(e) {
  	$('#drawer').removeClass('open');
		//e.stopPropagation();
  
	});
	
	function playSimon () {
		$('#allGames,#tictactoeContainer').hide();
		
		$('#simonContainer').show()
	};

	function playTTT () {
		$('#allGames, #simonContainer').hide();
		
		$('#tictactoeContainer').show()
	}
	allToggle.addEventListener('click', function () {
		
		$("#greenSound")[0].currentTime=0;
		$("#redSound")[0].currentTime=0;
		$("#yellowSound")[0].currentTime=0;
		$("#blueSound")[0].currentTime=0;
		startNew();
		$('#allGames').show();
		$('#simonContainer, #tictactoeContainer').hide();
		
		if (gameCount < 10){
					$("#screen").html("0" + (gameCount + 1))	
				} else {
					$("#screen").html((gameCount + 1));
				}
	
	});
	simonGame.addEventListener('click', function () {
		playSimon();
	});
	simonToggle.addEventListener('click', function () {
		playSimon();
	});
	
	tttGame.addEventListener('click', function () {
		playTTT();
	});

	tttToggle.addEventListener('click', function () {
		playTTT();
	})
	
	$('#simonContainer, #tictactoeContainer').hide();
	
