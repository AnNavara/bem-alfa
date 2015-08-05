
var review = document.querySelectorAll(".review__img-link");
var certi = document.querySelectorAll(".certificates__popup");
var popup_pics = document.querySelector(".popup");
var popup_img = document.querySelector(".popup__img");
var popup_close = document.querySelector(".popup__close");

for (i = 0; i < review.length; ++i) {
  review[i].addEventListener("click", function(e) {
		e.preventDefault();
		e = e || window.event;
		var target = e.target || e.srcElement;
		if (target.tagName === "IMG")
		popup_pics.classList.add("popup--active");
		console.log(target.parentElement);
		popup_img.setAttribute("src", target.parentElement.getAttribute("href"));
		console.log(target.parentElement.getAttribute("href"));
	}, false);
}

for (i = 0; i < certi.length; ++i) {
  certi[i].addEventListener("click", function(e) {
		e.preventDefault();
		e = e || window.event;
		var target = e.target || e.srcElement;
		if (target.tagName === "IMG")
		popup_pics.classList.add("popup--active");
		console.log(target.parentElement);
		popup_img.setAttribute("src", target.parentElement.getAttribute("href"));
		console.log(target.parentElement.getAttribute("href"));
	}, false);
}

popup_close.addEventListener("click", function(e) {
	e.preventDefault();
	e = e || window.event;
	var target = e.target || e.srcElement;
	console.log(target.parentElement.parentElement.parentElement);
	target.parentElement.parentElement.parentElement.classList.remove("popup--active");
}, false);
