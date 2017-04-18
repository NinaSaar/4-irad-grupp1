class Game {
	// Connect four game

	constructor(
		board
	) {
		board = new Board();
	}
}

function draw(board) {
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

$(draw)