var control = document.querySelector(".navigation__control");
var close = document.querySelector(".navigation__link--close");
var dropdown = document.querySelector(".navigation__container");

control.addEventListener("click", function(e) {
	e.preventDefault();
	dropdown.classList.toggle("navigation__container--active");
});

close.addEventListener("click", function(e) {
	e.preventDefault();
	dropdown.classList.remove("navigation__container--active");
});
