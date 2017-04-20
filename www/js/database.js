function getHighScoreList() {
	new RunSqlQuery(
	  'top10HighScores',
	  function(response){
	  	for (let i = 0;i < response.length & i < 10;i++) {
		    $("#hs-rank-"+i).html((i + 1));
		    $("#hs-name-"+i).html(response[i].player_name);
		    $("#hs-score-"+i).html(response[i].score);
		    $("#hs-date-"+i).html(response[i].high_score_date.substring(0,10));
		}
  	})
}

function insertHighScore(name,score) {
	new RunSqlQuery(
		'addHighScore',
		{player_name: name, score: score},
		function(response){
			console.log('addHighScore',response);
		}
	)
}