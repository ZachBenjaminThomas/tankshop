// Filters for Product Content

$(".filter").click(function() {

	// Get the target filter from the clicked item
    var target = $(this).attr("target-filter");

    // Mark the clicked item as an active filter
    $(this).toggleClass("active-filter");

    // Deal with product type filters
    if($(this).hasClass("product-filter")){
        if($(".product-filter.active-filter").length > 1){
            $(".product-filter").removeClass("active-filter");
            $(this).addClass("active-filter");
        }
    }

    // Deal with brand type filters
    if($(this).hasClass("brand-filter")){
        if($(".brand-filter.active-filter").length > 1){
            $(".brand-filter").removeClass("active-filter");
            $(this).addClass("active-filter");
        }
    }

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