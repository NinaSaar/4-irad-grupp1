class Board {
	// Connect four game board that has 7 columns and 6 rows.
	// In this class the board is an array with 7 objects (columns).
	// Each object is an array with 6 elements.
	// Each element represents one slot and should 
	// contain " " for empty, "R" for red coin or "Y" for yellow coin.

	constructor() {
		this.columns = [
			[" "," "," "," "," "," "],
			[" "," "," "," "," "," "],
			[" "," "," "," "," "," "],
			[" "," "," "," "," "," "],
			[" "," "," "," "," "," "],
			[" "," "," "," "," "," "],
			[" "," "," "," "," "," "]
		];
		this.numberOfColumns = 7;
		this.numberOfRows = 6;
		this.winner = " ";
	}

	replaceColumn(columnNumber,column) {
		// replace one column in columns array with new values
		// takes number of column (1-7) and an array with 6 elements
		
		if (columnNumber > 0 & columnNumber < 8 & column.length === 6) {
			this.columns[columnNumber] = column;
		}
	}

	checkBoard() {
		// check the connect four game board vertically, horizontally and diagonally to 
		// see if there are four coins with the same colour in a row.
		// returns ?

		let result;
		let i;
		let j;

		// check vertically (columns)
		for (let column of this.columns) {
			result = this.findFourInRow(column);
			if (result > -1) {
				return this.winner;
			}
		}

		// check horizontally (rows)
		for (i = 0;i < this.numberOfRows;i++) {
			result = this.findFourInRow(this.getHorizontalRow(i));
			if (result > -1) {
				return this.winner;
			}
		}

		// check diagonally from left to right upwards
		i = 0;
		j = 3;

		do {
			result = this.findFourInRow(this.getDiagonalRowUp(i,j));
			if (result > -1) {
				return this.winner;
			}

			if (j < this.numberOfRows - 1) {
				j++;
			}
			else {
				i++;
			}
		} while (i < this.numberOfColumns - 3);

		// check diagonally from left to right downwards
		i = 0;
		j = 2;

		do {
			result = this.findFourInRow(this.getDiagonalRowDown(i,j));
			if (result > -1) {
				return this.winner;
			}

			if (j > 0) {
				j--;
			}
			else {
				i++;
			}
		} while (i < this.numberOfColumns - 3);

		return this.winner;
	}

	getHorizontalRow(rowIndex) {
		// Fetches values for one row horizontally on the board
		// and puts them into an array in order.
		// Takes index for the row.
		// Returns an array with 7 values.

		let arr = [];

		for (let i = 0;i < this.numberOfColumns;i++) {
			arr.push(this.columns[i][rowIndex]);
		}

		return arr;
	}

	getDiagonalRowUp(startCol,startRow) {
		// Fetches values for one row diagonally on the board
		// and puts them into an array in order.
		// takes indexes for the column and row where to start fetching.
		// returns an array with different number of values.

		let col = startCol;
		let row = startRow;
		let arr = [];

		do {
			arr.push(this.columns[col][row]);
			col++;
			row--;
		} while (col < this.numberOfColumns & row >= 0);

		return arr;
	}

	getDiagonalRowDown(startCol,startRow) {
		// Fetches values for one row diagonally on the board
		// and puts them into an array in order.
		// takes indexes for the column and row where to start fetching.
		// returns an array with different number of values.

		let col = startCol;
		let row = startRow;
		let arr = [];

		do {
			arr.push(this.columns[col][row]);
			col++;
			row++;
		} while (col < this.numberOfColumns & row < this.numberOfRows);

		return arr;
	}

	findFourInRow(array) {
		// check if an array contains four elements in a row with the same "color" ("R" or "Y")
		// takes an array of any length that contains the values " ", "R", "r", "Y" or "y"
		// returns index of the first element if four in a row is found or -1 if four in a row is not found

		let fourInRow = -1;

		if (array.length > 3) {

			for (let i = 0;i < array.length - 3 & fourInRow === -1;i++) {
				if ((array[i] === "R" | array[i] === "r" | array[i] === "Y" | array[i] === "y") & 
					array[i + 1] === array[i] & array[i + 2] === array[i] & array[i + 3] === array[i]) {

					fourInRow = i;
					this.winner = array[i];
				}
			}
		}

		return fourInRow;
	}
	// Adds "R" or "Y" coin in correct cell
	addCoin(column, coin){
		let arr = this.columns[column];
		for(let i = 0; i<arr.length;i++){
			if(arr[i]===" "){
				this.columns[column][i] = coin;
				this.addToBoard(column, i, coin);
				break;
			}
		}
	}

	// Changes the board to reflect an added coin
	addToBoard(column, row, coin){
		let id = "c"+column+"r"+row;
		if(coin === "R"){
			document.getElementById(id).src = "Foton/brick_red.png";
		}else if (coin === "Y") {
			document.getElementById(id).src = "Foton/brick_ylw.png";
		}else{
			document.getElementById(id).src = "Foton/brick_whi.png";
		}
	}

	// Checks if a move is possible to do
	// a move is not possible to do if a column is filled with coins
	isMovePossible(column){
		let arr = this.columns[column];
		for(let i = 0; i<arr.length;i++){
			if(arr[i]===" "){
				return true;
			}
		}
		return false;
	}

	clearBoard(){
		for(let i=0; i<this.columns.length; i++){
			let r = this.columns[i];
			for(let j=0; j<r.length; j++){
				this.addToBoard(i,j,"");
			}
		}
	}
}