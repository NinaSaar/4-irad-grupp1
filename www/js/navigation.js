window.onhashchange = switchPage;

$(switchPage);

function switchPage() {
	$(".page").hide();
	let l = location.hash;
	if(!l) {
		l = '#start';
	}
	$(l).show();

	makeMenuChoiceActive(l);
}

function makeMenuChoiceActive(l){

  // Remove the class active from a li tags
  // in the menu
  $('header nav li').removeClass('active');

  // Find a-tag that is inside a nav-tag 
  // that in turn is inside a header-tag
  // but only if the href attribute has the
  // value stored in the variable l

  // If we have found the a tag, 
  // find it's parent (a li-tag) and add
  // the class active to it
  
  $('header nav a[href="' + l + '"]')
    .parent().addClass('active');

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