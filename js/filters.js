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
    const mainTitleOffset = $("#title").height();
    const paddingOffset = parseInt($("#product-filters").css("padding-top"));
    const subTitleOffset = $("#product-filters h2").first().outerHeight();
    const fillerOffset = $("#filler-section").height();

    if(startScreenPosition >= mainTitleOffset + paddingOffset + subTitleOffset){  
        window.scrollTo(0,mainTitleOffset + paddingOffset+subTitleOffset+fillerOffset);
    }
    
 })


// Parsing incoming URL strings to automatically apply filters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const target = urlParams.get('target')

if(target != null) {
    $("[target-filter='"+target+"']").click();
}

// Scroll behaviour to widen the filter bar after page has scrolled
$(document).scroll(function(){

    if($( window ).width() > 768){
        const targetPaddingReduction = 30;
        const effectLimit = 25;
        const startPoint = $("#title").outerHeight() + parseInt($("#product-filters").css("padding-top")) + $("#product-filters h2").first().outerHeight();
        
        if(startPoint <= $(document).scrollTop()){
            let differential = $(document).scrollTop() - startPoint;
            console.log(differential)
            if(differential < effectLimit){
                let currentPadding = 20 + (((effectLimit - differential)/effectLimit)*targetPaddingReduction)
                $("#product-filters").css("padding-left",String(currentPadding)+"px");
                $("#product-filters").css("padding-right",String(currentPadding)+"px");
            }else{
                $("#product-filters").css("padding-left","20px")
                $("#product-filters").css("padding-right","20px")
            }
        }else{
            $("#product-filters").css("padding-left","50px")
            $("#product-filters").css("padding-right","50px")
        }
    }else{
        const targetPaddingReduction = 20;
        const effectLimit = 50;
        const startPoint = $("#title").outerHeight() + parseInt($("#product-filters").css("padding-top")) + $("#product-filters h2").first().outerHeight();
        
        if(startPoint <= $(document).scrollTop()){
            let differential = $(document).scrollTop() - startPoint;
            console.log(differential)
            if(differential <= effectLimit){
                let currentPadding = 15 + (((effectLimit - differential)/effectLimit)*targetPaddingReduction)
                $("#product-filters").css("padding-left",String(currentPadding)+"px");
                $("#product-filters").css("padding-right",String(currentPadding)+"px");
            }else{
                $("#product-filters").css("padding-left","15px")
                $("#product-filters").css("padding-right","15px")
            }
        }else{
            $("#product-filters").css("padding-left","35px")
            $("#product-filters").css("padding-right","35px")
        } 
    }
})