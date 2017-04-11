window.onhashchange = switchPage;

function switchPage() {
	console.log("switchPage");
	$(".page").hide();
	let l = location.hash;
	if(!l) {
		l = '#start';
	}
	$(l).show();
}
