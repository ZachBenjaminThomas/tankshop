// Nav Bar Hover Behaviour

[...document.getElementsByClassName('nav-item')].forEach(function(item){
	item.addEventListener("mouseenter", function () {
		this.firstElementChild.firstElementChild.style.color = getComputedStyle(document.documentElement).getPropertyValue("--logo-secondary-color");
	})
});

[...document.getElementsByClassName('nav-item')].forEach(function(item){
	item.addEventListener("mouseleave", function () {
		this.firstElementChild.firstElementChild.style.color = getComputedStyle(document.documentElement).getPropertyValue("--secondary-bg-color");
	})
});

// Filters for Product Content

$(".filter").click(function() {

	// Get the target filter from the clicked item
    var target = $(this).attr("target-filter");

    // Mark the clicked item as an active filter
    $(this).toggleClass("active-filter");

    // Build up selector based on all currently selected filters.
    var targetString = "";
    var noActiveFilters = $(".active-filter").length;

    // for(var i=0;i<=noActiveFilters;i++) {
    // 	targetString = targetString + "." + $(".active-filter").get(i).attr("target-filter");
    // }
    $(".active-filter").each(function() {
    	targetString += "." + $(this).attr("target-filter");
    })


   	// Make all cards disappear
    $(".product-card").addClass("filtered");

    // Allow items matching all filters to reappear.
    $(targetString).removeClass("filtered"); // Consider animation here
    })