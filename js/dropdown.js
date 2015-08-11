var control = document.querySelector(".navigation__control");
var close = document.querySelector(".navigation__link--close");
var dropdown = document.querySelector(".navigation__container");
var menu_toogler = document.querySelector(".menu__link--toogle");
var menu_container = document.querySelector(".menu__container");

control.addEventListener("click", function(e) {
	e.preventDefault();
	dropdown.classList.toggle("navigation__container--active");
});

close.addEventListener("click", function(e) {
	e.preventDefault();
	dropdown.classList.remove("navigation__container--active");
});

menu_toogler.addEventListener("click", function(e) {
	e.preventDefault();
	menu_container.classList.toggle("menu__container--active");
});

(function(){
	var partners = document.querySelectorAll(".partners");
	var partners_active = document.querySelectorAll(".partners--active");
	var partners_btn = document.querySelector(".partners__all");

	partners_btn.querySelector(".inner-heading").innerHTML =  "Смотреть ещё " + (partners.length - partners_active.length) + " банков";

	partners_btn.addEventListener("click", function(e) {
		e.preventDefault();
		for (i = 0; i < partners.length; ++i){
				partners[i].classList.add("partners--active");
		}
		partners_btn.classList.add("partners__all--hidden");
	}, false);
})();
