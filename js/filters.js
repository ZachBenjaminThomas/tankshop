// Filters for Product Content

$(".filter").click(function() {

	// Get the target filter from the clicked item
    var target = $(this).attr("target-filter");

    // Mark the clicked item as an active filter
    $(this).toggleClass("active-filter");

    // Build up selector based on all currently selected filters.
    var targetString = "";
    var noActiveFilters = $(".active-filter").length;

    // 
    $(".active-filter").each(function() {
    	targetString += "." + $(this).attr("target-filter");
    })


   	// Make all cards disappear
    if(targetString != "") {

    	$(".product-card").addClass("filtered");

    	// Allow items matching all filters to reappear.
    	$(targetString).removeClass("filtered"); // Consider animation here

    } else {

    	// Make all cards reappear if no filters present
    	$(".product-card").removeClass("filtered");

    }
 })