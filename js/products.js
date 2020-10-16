// Sticky heading for products page

// Get the header
var header = $("#product-filters");

// Get the offset position of the navbar
var headerOffset = header.offset().top;

// Get the original padding of the product card section
var originalPadding = parseInt($("#product-cards").css("padding-top"));
var filtersHeight = parseInt($("#product-filters").outerHeight());

// Get the original menu position
var navBarHeight = $("#title").outerHeight();

// When the user scrolls the page, execute myFunction
window.onscroll = function(){ 

	console.log("Y Offset " + pageYOffset);
	console.log("Header Offset " + header.offset().top);

	// Correction for expanded navbar
	if(navBarHeight !== $("#title").outerHeight()){
		navBarHeight = $("#title").outerHeight();
		headerOffset = header.offset().top;
	}

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	if (window.pageYOffset > headerOffset) {
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


