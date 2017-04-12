window.onhashchange = switchPage;

function switchPage() {
	$(".page").hide();
	let l = location.hash;
	if(!l) {
		l = '#start';
	}
	$(l).show();
}

// prevent scrolling down
// when clicking hash we are already on
$(function(){
	$('header nav a').click(function(){
		// the native browser behavior is to
		// scroll to the div with the id
		// corresponding to a hash;

		// also click events are run before this

		// so to fix the problem - wait (a supershort while)
		// - then reset the scroll position

		setTimeout(function(){
			window.scrollTo(0,0)
		},0);
	});
});