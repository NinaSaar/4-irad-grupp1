class Game {
		// Connect four game

		constructor(
			player1,
			player2
		) {
			this.board = new Board();
			this.player1 = player1;
			this.player2 = player2;
			this.turn = 0;
			this.playerArrow = document.getElementById("player-arrow");
		}


	draw(board) {
		for (i = 0; i < board.numberOfColumns; i++) {
			for (ii = 0; ii < board.numberOfRows; ii++) {
				if (board.columns[i][ii] == "R" | board.columns[i][ii] == "r") {
					$('p.b' + ii + i).html('<img src="Foton/brick_red.png">');
				}
				else if (board.columns[i][ii] == "Y" | board.columns[i][ii] == "y"){
					$('p.b' + ii + i).html('<img src="Foton/brick_ylw.png">');
				}
				else {
					$('p.b' + ii + i).html('<img src="Foton/brick_whi.png">');
				}
			}
		} 
	}

	notify_gameover (){
		//dummie hook
		$('#avsluta-spel .modal-header #title').text("Spelare x vann");
	     
	    $('#avsluta-spel').modal({backdrop: 'static', keyboard: false});


	}


	//Returns which player's turn it is
	whoToPlay (){
		if(this.turn % 2 ==0){
			return this.player1;
		}else{
			return this.player2;
		}
	}

	//Updates arrow on screen
	updateArrow(){
		if(this.whoToPlay() === this.player1){
			this.playerArrow.src = "Foton/arrowleft.png"
			document.getElementById("player-arrow").src = "Foton/arrowleft.png"
		}else{
			this.playerArrow.src = "Foton/arrowright.png"
		}
	}


	winnerFound(winner){
		document.getElementById("msg-winner").innerHTML = winner.getName();
		document.getElementById("msg-round").innerHTML = this.turn;
		$('#game-over').modal('show');
	}

	/*logic for making a move
	* If the move is possible it adds coin to board and updates UI,
	* checks if there is a winner
	* Adds a turn and updates arrow
	*/
	makeMove(col){
		if(this.board.isMovePossible(col)){
			this.board.addCoin(col, this.whoToPlay().getColor());
			this.turn++;
			if(this.board.checkBoard() === "Y"){
				this.winnerFound(this.player2);
			}else if(this.board.checkBoard() === "R"){
				this.winnerFound(this.player1);
			}else{
				this.updateArrow();
			}
		}else{

			$('#varna-full-column').modal('show')
		}
	}
	clearBoard(){
		this.board.clearBoard();
	}
}
//$(draw)