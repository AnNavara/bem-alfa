
var review = document.querySelectorAll(".review__img-link");
var certi = document.querySelectorAll(".certificates__popup");
var testimony = document.querySelectorAll(".testimony__img");
var popup_pics = document.querySelector(".js-popup--img");
var popup_img = document.querySelector(".popup__img");

var popup_close_all = document.querySelectorAll(".popup__close");

var mistake = document.querySelector(".report-mistake");
var popup_mistake = document.querySelector(".popup--mistake");

var call = document.querySelector(".page-header__ask-call");
var popup_call = document.querySelector(".popup--ask-call");

call.addEventListener("click", function(e) {
	e.preventDefault();
	e = e || window.event;
  popup_call.classList.add("popup--active");
}, false);

mistake.addEventListener("click", function(e) {
	e.preventDefault();
	e = e || window.event;
  popup_mistake.classList.add("popup--active");
}, false);

mistake.addEventListener("click", function(e) {
	e.preventDefault();
	e = e || window.event;
  popup_mistake.classList.add("popup--active");
}, false);

for (i = 0; i < testimony.length; ++i) {
  testimony[i].addEventListener("click", function(e) {
		e.preventDefault();
		e = e || window.event;
		var target = e.target || e.srcElement;
		if (target.tagName === "IMG")
		popup_pics.classList.add("popup--active");
		popup_img.setAttribute("src", target.parentElement.getAttribute("href"));
	}, false);
}


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

for (i = 0; i < popup_close_all.length; ++i) {
  popup_close_all[i].addEventListener("click", function(e) {
  	e.preventDefault();
  	e = e || window.event;
  	var target = e.target || e.srcElement;
  	console.log(target.parentElement.parentElement.parentElement);
  	target.parentElement.parentElement.parentElement.classList.remove("popup--active");
  }, false);
}
