$(document).ready(function ( ) {
	
	//tie
	
	
var setBoard, winner, player = null, setBoard, random,
			count;
function xWins() {
	$("#winPrompt").html('X wins!');
	$("#winPrompt").css({"background":"rgba(84, 124, 143, 0.94)"});
	$("#winPrompt").show();
	$("#playPrompt").show();
	$("#promptOuter").show();
	count = 0;
}
function oWins() {
	$("#winPrompt").html('O wins!');
	$("#winPrompt").css({"background":"rgba(84, 124, 143, 0.94)"});
	$("#winPrompt").show();
	$("#playPrompt").show();
	$("#promptOuter").show();
	count = 0;
}
function tieGame() {
	$("#winPrompt").html('Tie!');
	$("#winPrompt").css({"background":"rgba(84, 124, 143, 0.94)"});
	$("#winPrompt").show();
	$("#playPrompt").show();
	$("#promptOuter").show();
}
	function generateRandom(){
		return Math.floor(Math.random() * 9 + 1);
	}

	//set up board
function startBoard(){ 
	winner = 0;
	count = 0;
	setBoard = [
		['', '', ''],
		['', '', ''],
		['', '', '']
	]
		
			$("#box1").prop("disabled",false);
			$("#box2").prop("disabled",false);
			$("#box3").prop("disabled",false);
			$("#box4").prop("disabled",false);
			$("#box5").prop("disabled",false);
			$("#box6").prop("disabled",false);
			$("#box7").prop("disabled",false);
			$("#box8").prop("disabled",false);
			$("#box9").prop("disabled",false);
			$("#box1").removeClass('disabled');
			$("#box2").removeClass('disabled');
			$("#box3").removeClass('disabled');
			$("#box4").removeClass('disabled');
			$("#box5").removeClass('disabled');
			$("#box6").removeClass('disabled');
			$("#box7").removeClass('disabled');
			$("#box8").removeClass('disabled');
			$("#box9").removeClass('disabled');
		$("#box1").html('');
		$("#box2").html('');
		$("#box3").html('');
		$("#box4").html('');
		$("#box5").html('');
		$("#box6").html('');
		$("#box7").html('');
		$("#box8").html('');
		$("#box9").html('');
		$("#diagonal1Win, #diagonal2Win, #column1Win, #column2Win, #column3Win, #row1Win, #row2Win, #row3Win, #winPrompt").hide();
		$("#prompt, #promptOuter").show();
		
	$("#playButton").on("click", function () {
		$("#playPrompt").hide();
		startBoard();
	});
	
	$("#oButton").on("click", function () {
		$("#prompt, #promptOuter").hide();
		player = 0;
	});
	
	$("#xButton").on("click", function () {
		$("#prompt, #promptOuter").hide();
		player = 1;
	});
	}
	//set up buttons
function updateBoard() {
	//update the board

	//box 1
	$("#box1").on("click", function () {
		if (!($("#box1").hasClass('disabled'))) {
			 $("#box1").prop("disabled",true);
			$("#box1").addClass('disabled');
			if (player === 0) {
				$("#box1").html('O');
				setBoard[0][0] = 'O';
			}
			else {
				$("#box1").html('X');
				setBoard[0][0] = 'X';
			}
			count +=1;
			checkWin();
			if (count > 0){
				
				playAI();
			}
		}								
	});
	//box 2
	$("#box2").on("click", function () {
		if (!($("#box2").hasClass('disabled'))) {
			$("#box2").prop("disabled",true);
			$("#box2").addClass('disabled');
			if (player === 0) {
				$("#box2").html('O');
				setBoard[0][1] = 'O';
			}
			else {
				$("#box2").html('X');
				setBoard[0][1] = 'X';
			}			
			count +=1;
			checkWin();
			if (count > 0){
				playAI();
			}
		}			
	});
		//box 3
	$("#box3").on("click", function () {
		if (!($("#box3").hasClass('disabled'))) {
			$("#box3").prop("disabled",true);
			$("#box3").addClass('disabled');
			if (player === 0) {
				$("#box3").html('O');
				setBoard[0][2] = 'O';
			}
			else {
				$("#box3").html('X');
				setBoard[0][2] = 'X';
			}		
			count +=1;
			checkWin();
			if (count > 0){
				playAI();
			}
			
		}			
	});
		//box 4
	$("#box4").on("click", function () {
		if (!($("#box4").hasClass('disabled'))) {
			$("#box4").prop("disabled",true);
			$("#box4").addClass('disabled');
			if (player === 0) {
				$("#box4").html('O');
				setBoard[1][0] = 'O';
			}
			else {
				$("#box4").html('X');
				setBoard[1][0] = 'X';
			}			
			count +=1;
			checkWin();
			if (count > 0){
				playAI();
			}
		}			
	});
		//box 5
	$("#box5").on("click", function () {
		if (!($("#box5").hasClass('disabled'))) {
			$("#box5").prop("disabled",true);
			$("#box5").addClass('disabled');
			if (player === 0) {
				$("#box5").html('O');
				setBoard[1][1] = 'O';
			}
			else {
				$("#box5").html('X');
				setBoard[1][1] = 'X';
			}			
			count +=1;
			checkWin();
			if (count > 0){
				playAI();
			}
		}			
	});
		//box 6
	$("#box6").on("click", function () {
		if (!($("#box6").hasClass('disabled'))) {
			$("#box6").prop("disabled",true);
			$("#box6").addClass('disabled');
			if (player === 0) {
				$("#box6").html('O');
				setBoard[1][2] = 'O';
			}
			else {
				$("#box6").html('X');
				setBoard[1][2] = 'X';
			}		
			count +=1;
			checkWin();
			if (count > 0){
				playAI();
			}
		}			
	});
		//box 7
	$("#box7").on("click", function () {
		if (!($("#box7").hasClass('disabled'))) {
			$("#box7").prop("disabled",true);
			$("#box7").addClass('disabled');
			if (player === 0) {
				$("#box7").html('O');
				setBoard[2][0] = 'O';
			}
			else {
				$("#box7").html('X');
				setBoard[2][0] = 'X';
			}				
			count +=1;
			checkWin();
			if (count > 0){
				playAI();
			}
		}			
	});
		//box 8
	$("#box8").on("click", function () {
		if (!($("#box8").hasClass('disabled'))) {
			$("#box8").prop("disabled",true);
			$("#box8").addClass('disabled');
			if (player === 0) {
				$("#box8").html('O');
				setBoard[2][1] = 'O';
			}
			else {
				$("#box8").html('X');
				setBoard[2][1] = 'X';
			}		
			count +=1;
			checkWin();
			if (count > 0){
				playAI();
			}
		}			
	});
		//box 9
	$("#box9").on("click", function () {
		if (!($("#box9").hasClass('disabled'))) {
			$("#box9").prop("disabled",true);
			$("#box9").addClass('disabled');
			if (player === 0) {
				$("#box9").html('O');
				setBoard[2][2] = 'O';
			}
			else {
				$("#box9").html('X');
				setBoard[2][2] = 'X';
			}				
			count +=1;
			checkWin();
			if (count > 0){
				playAI();
			}
		}			
	});
}	
	
function rowCheck (i) {
	if (i === 0) {
				$("#row1Win").css({"position":"absolute","height":"260px","width":"10px","background":"rgba(0, 0, 0, 0.71)","top":"-82px","left":"145px","transform": "rotate(90deg)","z-index": "1"});
				$("#row1Win").show();
			}
			else if (i == 1) {
				$("#row2Win").css({"position":"absolute","height":"260px","width":"10px","background":"rgba(0, 0, 0, 0.71)","top":"19px","left":"145px","transform": "rotate(90deg)","z-index": "1"});
				$("#row2Win").show();			 
			}
			else if (i == 2){
				$("#row2Win").css({"position":"absolute","height":"260px","width":"10px","background":"rgba(0, 0, 0, 0.71)","top":"121px","left":"145px","transform": "rotate(90deg)","z-index": "1"});
				$("#row2Win").show();	
				$("#row3Win").show();
			}
}	
function colCheck (i) {
	if (i === 0) {
				$("#column1Win").css({"position":"absolute","height":"260px","width":"10px","background":"rgba(0, 0, 0, 0.71)","top":"20px","left":"44px","z-index":"1"});
				$("#column1Win").show();
			}
			else if (i == 1) {
				$("#column2Win").css({"position":"absolute","height":"260px","width":"10px","background":"rgba(0, 0, 0, 0.71)","top":"20px","left":"145px","z-index":"1"});
				$("#column2Win").show();			 
			}
			else if (i == 2){
				$("#column3Win").css({"position":"absolute","height":"260px","width":"10px","background":"rgba(0, 0, 0, 0.71)","top":"20px","left":"246px","z-index":"1"});
				$("#column3Win").show();
			}
}
function diagonal1Win () {
	$("#diagonal1Win").css({"position":"absolute","height":"350px","width":"10px","background":"rgba(0, 0, 0, 0.71)","top":"-25px","left":"145px","transform":"rotate(-45deg)","z-index":"1"});
	$("#diagonal1Win").show();
}
function diagonal2Win () {
	$("#diagonal2Win").css({"position":"absolute","height":"350px","width":"10px","background":"rgba(0, 0, 0, 0.71)","top":"-25px","left":"144px","transform":"rotate(45deg)","z-index":"1"});
	$("#diagonal2Win").show();
}
	//check for a winner
function checkWin() {
	//straight wins
	for (var i=0;i<3;i++){
		// check rows
		if (setBoard[i][0] == 'X' && setBoard[i][1] == 'X' && setBoard[i][2] == 'X'){
			rowCheck(i);
			
					winner = 1;
					xWins();
					
		} 
		else if(setBoard[i][0] == 'O' && setBoard[i][1] == 'O' && setBoard[i][2] == 'O') {
			rowCheck(i);
			
					winner = 1;
					oWins();
				
		}
		// check columns
		else if (setBoard[0][i] == 'X' && setBoard[1][i] == 'X' && setBoard[2][i] == 'X'){
			colCheck(i);
			winner = 1;
			xWins();
		} 
		else if(setBoard[0][i] == 'O' && setBoard[1][i] == 'O' && setBoard[2][i] == 'O'){
			colCheck(i);
			winner = 1;
			oWins();
		}
	}
	//diagonal wins
	if (setBoard[0][0] == 'X' && setBoard[1][1] == 'X' && setBoard[2][2] == 'X'){
			
			diagonal1Win();
			winner = 1;
			xWins();
		} 
		else if(setBoard[0][0] == 'O' && setBoard[1][1] == 'O' && setBoard[2][2] == 'O') {
			diagonal1Win();
			winner = 1;
			oWins();
		}
	else if (setBoard[2][0] == 'X' && setBoard[1][1] == 'X' && setBoard[0][2] == 'X'){
			diagonal2Win();
			winner = 1;
			xWins();
		} 
		else if(setBoard[2][0] == 'O' && setBoard[1][1] == 'O' && setBoard[0][2] == 'O') {
			diagonal2Win();
			winner = 1;
			oWins();
		}
	else if (winner == 0 && count == 10) {
		tieGame();
	}
	//switch to other player
	//end for game loop
	}
	
function playAI() {
	count++;
	random = generateRandom();
	var aiMove = "#box" + random;
	if (player == 0){
		while ($(aiMove).hasClass('disabled')){
			random = generateRandom();
			aiMove = "#box" + random;
		}
		$(aiMove).html('X');
		$(aiMove).addClass('disabled');
		switch (random) {
			case 1:
				setBoard[0][0] = 'X';
				break;
			case 2:
				setBoard[0][1] = 'X';
				break;
			case 3:
				setBoard[0][2] = 'X';
				break;
			case 4:
				setBoard[1][0] = 'X';
				break;
			case 5:
				setBoard[1][1] = 'X';
				break;
			case 6:
				setBoard[1][2] = 'X';
				break;
			case 7:
				setBoard[2][0] = 'X';
				break;
			case 8:
				setBoard[2][1] = 'X';
				break;
			case 9:
				setBoard[2][2] = 'X';
				break;	
		}
	}
	if (player == 1){
		while (($(aiMove).hasClass('disabled')) && count <9 ){
			random = generateRandom();
			aiMove = "#box" + random;
		}
		$(aiMove).html('O');
		$(aiMove).addClass('disabled');
		switch (random) {
			case 1:
				setBoard[0][0] = 'O';
				break;
			case 2:
				setBoard[0][1] = 'O';
				break;
			case 3:
				setBoard[0][2] = 'O';
				break;
			case 4:
				setBoard[1][0] = 'O';
				break;
			case 5:
				setBoard[1][1] = 'O';
				break;
			case 6:
				setBoard[1][2] = 'O';
				break;
			case 7:
				setBoard[2][0] = 'O';
				break;
			case 8:
				setBoard[2][1] = 'O';
				break;
			case 9:
				setBoard[2][2] = 'O';
				break;	
		}
	}
	checkWin();
}
	$("#playPrompt").show();
	startBoard();	
	updateBoard();

	
	
	
})