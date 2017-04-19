class Player {
	// Connect four player

	constructor(
		name,
		playerNumber,
		human
	) {
		this.name = name;
		this.playerNumber = playerNumber;
		this.human = human;
		if (this.playerNumber === 1) {
			this.color = "R";
		}
		else {
			this.color = "Y";
		}
	}
}