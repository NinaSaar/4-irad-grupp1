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
		// Show play game page
	    $(".page").hide();
	    $("#play").show();
	    document.getElementById("testspelare").innerHTML = spelare1;
	}

	/*let click = confirm("Press a button");
	if (click == true) {
	    x = "You pressed OK!";
	} else {
	    x = "You pressed Cancel!";
	}*/

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


function testFunction(column) {
	console.log(column);
}
