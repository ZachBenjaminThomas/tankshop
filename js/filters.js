// Filters for Product Content

$(".filter").click(function() {

    // Record starting screen positions
    startScreenPosition = $(document).scrollTop();

	// Get the target filter from the clicked item
    var target = $(this).attr("target-filter");

    // Get the filter type
    var type = $(this).attr("filter-type");

    // Mark the clicked item as an active filter
    $(this).toggleClass("active-filter");

    // Check for category specific sections
    if($("#"+target).length > 0) {

        // Remove all category specific sections first
        $(".category-specific[filter-type='"+type+"']").addClass("filtered");

        // Display any category specific sections on the product page
        if($(this).hasClass("active-filter")){
            $("#"+target).removeClass("filtered");  
        }
    } else {
        $(".category-specific[filter-type='"+type+"']").addClass("filtered");
    }

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

    $(".active-filter").each(function() {
    	targetString += "." + $(this).attr("target-filter");
    })


   	// Make all cards disappear
    if(targetString != "") {

    	$(".product-card").addClass("filtered");

    	// Allow items matching all filters to reappear.
    	$(targetString).removeClass("filtered"); // Consider animation here

        // If no items are visible display a "Not found" message.
        if($("#product-cards .card").not(".filtered").length === 0) {
            $("#notfoundmessage").removeClass("filtered");
        } else {
            $("#notfoundmessage").addClass("filtered");
        }

    } else {

    	// Make all cards reappear if no filters present
    	$(".product-card").removeClass("filtered");

        // Remove the not found message too    
        $("#notfoundmessage").addClass("filtered");

    }

    // Return to top of product card section
    if(startScreenPosition >= $("#title").height()){  
        window.scrollTo(0,$("#title").height()+parseInt($("#product-filters").css("padding-top"))+50);
    }
    
 })


// Parsing incoming URL strings to automatically apply filters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const target = urlParams.get('target')

if(target != null) {
    $("[target-filter='"+target+"']").click();
}