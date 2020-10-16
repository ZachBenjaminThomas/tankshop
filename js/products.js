// Sticky heading for products page

// Get the header
var header = $("#product-filters");

// Get the offset position of the navbar
var sticky = header.offset().top;

// Get the original padding of the product card section
var originalPadding = parseInt($("#product-cards").css("padding-top"));
var filtersHeight = parseInt($("#product-filters").outerHeight());

// When the user scrolls the page, execute myFunction
window.onscroll = function(){ 

	//console.log(defaultPadding);

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	if (window.pageYOffset > sticky) {
		header.addClass("sticky");
		$("#product-cards").css("padding-top", filtersHeight + originalPadding);
	} else {
		header.removeClass("sticky");
		$("#product-cards").css("padding-top", originalPadding);
	}

};

// Corrections when window is resized
window.onresize = function(){

	originalPadding = parseInt($("#product-cards").css("padding-top"));
	filtersHeight = parseInt($("#product-filters").outerHeight());

}


