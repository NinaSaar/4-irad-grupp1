let game;

$(function(){
	$(".start-game-btn").click(readStartForm);
	$(".restart-game").click(newGame);
	$(".close-game").click(closeGame);
	$(".col0").click(function(){
		moveListner(0);
	});
	$(".col1").click(function(){
		moveListner(1);
	});
	$(".col2").click(function(){
		moveListner(2);
	});
	$(".col3").click(function(){
		moveListner(3);
	});
	$(".col4").click(function(){
		moveListner(4);
	});
	$(".col5").click(function(){
		moveListner(5);
	});
	$(".col6").click(function(){
		moveListner(6);
	});
});

//reads the player name form and then calls startGame
function readStartForm() {

	let spelare1 = $('#spelare1').val();
	let spelare2 = $('#spelare2').val();


	$('#game-over').modal('hide');
	if(spelare1 === "" || spelare2 === ""){
		//alert("Skriv in namn på båda spelarna!");
		$('#varna-ej-namn').modal('show') 
	}
	else {
		let player1 = new Player(spelare1, 1, true);
		let player2 = new Player(spelare2, 2, !(document.getElementById("is-computer").checked));

	    startGame(player1, player2);
	}

}

//called by modal, saves game if it's checked and then returns to start
function closeGame(){
	if(document.getElementById("hs-cb").checked){
		insertHighScore(document.getElementById("msg-winner").innerHTML, (document.getElementById("msg-round").innerHTML/1));
	}
	location.hash = "#start";
}

//starts a new game
function startGame(player1, player2){
	location.hash = "#play";

	game = new Game(player1, player2);
	game.clearBoard();
	game.updateArrow();

	document.getElementById("first-player").innerHTML = game.player1.getName();
	document.getElementById("first-player").className = "player"+game.player1.getColor();
	document.getElementById("second-player").innerHTML = game.player2.getName();
	document.getElementById("second-player").className = "player"+game.player2.getColor();
}

//this function changes the form to computer if the checkbox is checked
function changePlayer2(){
	if(document.getElementById("is-computer").checked){
		document.getElementById("spelare2").disabled = true;
		document.getElementById("spelare2").value = "Dator";
	}else{
		document.getElementById("spelare2").disabled = false;
		document.getElementById("spelare2").value = "";
	}
}

//called by modal if user decides to play a new game with the same people
function newGame(){
	if(document.getElementById("hs-cb").checked){
		insertHighScore(document.getElementById("msg-winner").innerHTML, (document.getElementById("msg-round").innerHTML/1));
	}
	startGame(game.player2, game.player1);
}

//called by the columns on the board when a player makes a move
function moveListner(column) {
	game.makeMove(column);
}