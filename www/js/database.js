function getHighScoreList() {
	// runs SQL Query to get top 10 high scores from database
	// and presents it on the high score page
	new RunSqlQuery(
		'top10HighScores',
		function(response){
		  	for (let i = 0;i < response.length & i < 10;i++) {
			    $("#hs-rank-"+i).html((i + 1));
			    $("#hs-name-"+i).html(response[i].player_name);
			    $("#hs-score-"+i).html(response[i].score);
			    $("#hs-date-"+i).html(response[i].high_score_date.substring(0,10));
			}
		}
	)
}

function insertHighScore(name,score) {
	// runs SQL Query to add a player to the high score list
	new RunSqlQuery(
		'addHighScore',
		{player_name: name, score: score},
		function(response){
		}
	)
}

function maxTop10HighScore(score,callbackFunc) {
	// runs SQL Query to get top 10 high scores from database
	// and checks if the player should be added to the high score list
	new RunSqlQuery(
		'top10HighScores',
		function(response){
	  		let result = false;
	  		if (score <= response[response.length -1].score | response.length < 10) {
	  			result = true;
	  		}
	  		callbackFunc(result);
		}
  	)
}
