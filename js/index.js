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

// Filter Link Behaviour

$(".filter").mouseenter(function(){
	var type = $(this).attr("type");
	$("[type='"+type+"']").not(this).animate({opacity: '0.2'}, 50);
})

$(".filter").mouseleave(function(){
	var type = $(this).attr("type");
	$("[type='"+type+"']").animate({opacity: '1'}, 50);
})

// Page Top Link Behaviour in Section Icons

$(".section-title").mouseenter(function(){
	$(this).children(".section-icon").css("color","var(--logo-primary-color)")
	$(this).children(".up-link").css("display","inline")
})

$(".section-title").mouseleave(function(){
	$(this).children(".up-link").css("display","none")
	$(this).children(".section-icon").css("color","white")
})

$(".up-link").click(function(){
	$(window).scrollTop(0);
})