var control = document.querySelector(".navigation__control");
var dropdown = document.querySelector(".navigation__container");

control.addEventListener("click", function(e) {
	e.preventDefault();
	dropdown.classList.toggle("navigation__container--active");
});
