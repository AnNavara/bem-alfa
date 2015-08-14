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

function show(btn, items, items_class, btn_class) {
	btn.addEventListener("click", function(e) {
		e.preventDefault();
		for (i = 0; i < items.length; ++i){
				items[i].classList.add(items_class);
		}
		btn.classList.add(btn_class);
	}, false);
}

(function(){
	var partners = document.querySelectorAll(".partners");
	var partners_active = document.querySelectorAll(".partners--active");
	var partners_btn = document.querySelector(".partners__all");

	if (partners.length > 0){
		partners_btn.querySelector(".inner-heading").innerHTML =  "Смотреть ещё " + (partners.length - partners_active.length) + " банков";
		show(partners_btn, partners, "partners--active", "partners__all--hidden");
	}
})();


(function(){
	var imgs = document.querySelectorAll(".estate-card__img");
	var imgs_active = document.querySelectorAll(".estate-card__img--active");
	var imgs_btn = document.querySelector(".estate-card__more");

	if (imgs.length > 0){
		imgs_btn.innerHTML =  "...и ещё " + (imgs.length - imgs_active.length) + " фотографии";
		show(imgs_btn, imgs, "estate-card__img--active", "estate-card__more--hidden");
	}
})();
