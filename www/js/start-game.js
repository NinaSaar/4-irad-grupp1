$(function(){
	$(".start-game-btn").click(readStartForm);
});

function readStartForm() {
	let spelare1 = $('#spelare1').val();
	let spelare2 = $('#spelare2').val();


	if(spelare1 === "" || spelare2 === ""){
		//alert("Skriv in namn på båda spelarna!");
		$('#varna-ej-namn').modal('show') 
	}
	else {
	    $(".page").hide();
	    $("#play").show();
	}

	/*let click = confirm("Press a button");
	if (click == true) {
	    x = "You pressed OK!";
	} else {
	    x = "You pressed Cancel!";
	}*/

}


