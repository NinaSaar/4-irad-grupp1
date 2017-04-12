class Game {
	// Connect four game

	constructor(
		board
	) {
		board = new Board();
	}

	makeMove() {
		let arr = ["R","R","R","R"," "," "];
		board.replaceColumn(1,arr);
		let winner = board.checkBoard();
		let message = " ";

		if (winner === "R" | winner === "r") {
			message = "Röd har vunnit!";
		}
		else {
			if (winner === "Y" | winner === "y") {
				message = "Gul har vunnit!";
			}
		}
	}


}