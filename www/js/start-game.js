let game;

$(function(){
	$(".start-game-btn").click(readStartForm);
	$(".restart-game").click(readStartForm);
	$(".close-game").click(closeGame);
});

function readStartForm() {
<<<<<<< Updated upstream
	if(document.getElementById("hs-cb").checked){
		/***
		/* TODO: Anropa funktion för att spara resultat
		*/
	}
=======
	console.log("HOPP")
>>>>>>> Stashed changes
	let spelare1 = $('#spelare1').val();
	let spelare2 = $('#spelare2').val();


	$('#game-over').modal('hide');
	if(spelare1 === "" || spelare2 === ""){
		//alert("Skriv in namn på båda spelarna!");
		$('#varna-ej-namn').modal('show') 
	}
	else {
		// Show play game page
		location.hash = "#play";
	    let player1;
	    let player2;
	    if(game!=null){
	    	console.log("not null");
	    	console.log(game.player1.getName());
	    	if(game.player1.getColor()==="R"){
		    	player1 = new Player(game.player2.getName(), 2, true);
		    	player2 = new Player(game.player1.getName(), 1, true);
	    	}else{
		    	player1 = new Player(game.player2.getName(), 1, true);
		    	player2 = new Player(game.player1.getName(), 2, true);
	    	}
	    }else{
			player1 = new Player(spelare1,1,true);
			player2 = new Player(spelare2,2,true);
	    }
	    // Create 2 human player objects with specified names

		// Create game object
	    game = new Game(player1,player2);
	    game.clearBoard();
	    game.updateArrow();

	    document.getElementById("first-player").innerHTML = game.player1.getName();
	    document.getElementById("first-player").className = "player"+game.player1.getColor();
	    document.getElementById("second-player").innerHTML = game.player2.getName();
	    document.getElementById("second-player").className = "player"+game.player2.getColor();
	}

}

function closeGame(){
	$('#game-over').modal('hide');
	location.hash = "#start";
}



$(function(){
	$(".col0").click(function(){
		testFunction(0);
	});
});
$(function(){
	$(".col1").click(function(){
		testFunction(1);
	});
});
$(function(){
	$(".col2").click(function(){
		testFunction(2);
	});
});
$(function(){
	$(".col3").click(function(){
		testFunction(3);
	});
});
$(function(){
	$(".col4").click(function(){
		testFunction(4);
	});
});
$(function(){
	$(".col5").click(function(){
		testFunction(5);
	});
});
$(function(){
	$(".col6").click(function(){
		testFunction(6);
	});
});
$(function(){
	$(".msg-new-game").click(function(){
		newGame();
	});
});

function newGame(){
	console.log("clicked");
	game.newGame();
}

function testFunction(column) {
	game.makeMove(column);
}

