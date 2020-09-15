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