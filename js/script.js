(function() {
	$(document).ready(function(){
		$(".offer .sale-item").removeClass("sale-item--no-js");
	});

	$(document).ready(function(){
	  $(".about-slider__wrapper").slick({
			dots: true,
			dotsClass: "about-slider__btns",
			arrows: true,
			prevArrow: false,
			nextArrow: $(".about-slider__next"),
			infinite: true,
			speed: 600,
			slidesToShow: 1,
			centerMode: false,
			variableWidth: true,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 760,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: false,
					}
				}
			]
	  });
	});

	$(document).ready(function(){
		$(".js-spec__slide").slick({
		  dots: false,
			prevArrow: $(".js-spec__btn--l"),
			nextArrow: $(".js-spec__btn--r"),
			draggable: false,
		  infinite: false,
		  speed: 600,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  responsive: [
		    {
		      breakpoint: 1120,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
		  ]
		});
	});

	$(document).ready(function(){
		$(".js-3d__slide").slick({
		  dots: false,
			prevArrow: $(".js-3d__btn--l"),
			nextArrow: $(".js-3d__btn--r"),
			draggable: false,
		  infinite: false,
		  speed: 600,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  responsive: [
		    {
		      breakpoint: 1120,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
		  ]
		});
	});

	$(document).ready(function(){
		$(".js-certi__slide").slick({
		  dots: false,
			prevArrow: $(".js-certi__btn--l"),
			nextArrow: $(".js-certi__btn--r"),
			draggable: false,
		  infinite: false,
		  speed: 600,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		});
	});

	$(document).ready(function(){
		$(".js-testimony__slide").slick({
		  dots: false,
			prevArrow: $(".js-testimony__btn--l"),
			nextArrow: $(".js-testimony__btn--r"),
			draggable: false,
		  infinite: false,
		  speed: 600,
		  slidesToShow: 5,
		  slidesToScroll: 5,
			responsive: [
				{
					breakpoint: 1120,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				},
				{
					breakpoint: 920,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	});

	$(document).ready(function(){
		$(".js-similar__slide").slick({
		  dots: false,
			prevArrow: $(".js-similar__btn--l"),
			nextArrow: $(".js-similar__btn--r"),
			draggable: false,
		  infinite: false,
		  speed: 600,
		  slidesToShow: 4,
		  slidesToScroll: 4,
			responsive: [
				{
					breakpoint: 1120,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	});
})();

(function() {
	$(document).ready(function(){
	  var call = document.querySelectorAll(".page-header__ask-call");
	  var popup_call = document.querySelector(".popup--ask-call");

	  for (i = 0; i < call.length ; ++i) {
	    call[i].addEventListener("click", function(e) {
	      e.preventDefault();
	      e = e || window.event;
	      popup_call.classList.add("popup--active");
	    }, false);
	  }

	  var mistake = document.querySelector(".report-mistake");
	  var popup_mistake = document.querySelector(".popup--mistake");

	  if (typeof mistake != "undefined") {
	    mistake.addEventListener("click", function(e) {
	    	e.preventDefault();
	    	e = e || window.event;
	      popup_mistake.classList.add("popup--active");
	    }, false);
	  }

	  var popup_close_all = document.querySelectorAll(".js-popup-close");

	  for (i = 0; i < popup_close_all.length; ++i) {
	    popup_close_all[i].addEventListener("click", function(e) {
	    	e.preventDefault();
				var popup_active = document.querySelectorAll(".popup--active");
				for (i = 0; i < popup_active.length; ++i){
					popup_active[i].classList.remove("popup--active");
				}
	    }, false);
	  }

	  var certi = document.querySelectorAll(".certificates__popup");

	  for (i = 0; i < certi.length; ++i) {
	    certi[i].addEventListener("click", function(e) {
	  		e.preventDefault();
	  		e = e || window.event;
	  		var target = e.target || e.srcElement;
	  		if (target.tagName === "IMG")
	  		popup_pics.classList.add("popup--active");
	  		popup_img.setAttribute("src", target.parentElement.getAttribute("href"));
	  	}, false);
	  }

	  var add = document.querySelector(".filter-build__add");
	  var popup_add = document.querySelector(".popup--add-property");

	  if (typeof add != "undefined") {
	    add.addEventListener("click", function(e) {
	      e.preventDefault();
	      e = e || window.event;
	      popup_add.classList.add("popup--active");
	    }, false);
	  }
	});
})();

(function(){
		var estate_img = document.querySelectorAll(".js-estate-img");
		pop_img(estate_img);

		var testimony = document.querySelectorAll(".testimony__img");
		pop_img(testimony);

		var review = document.querySelectorAll(".review__img-link");
		pop_img(review);


		var popup_pics = document.querySelector(".js-popup--img");
		var popup_img = document.querySelector(".popup__img");

		function pop_img(img) {
			for (i = 0; i < img.length; ++i) {
				img[i].addEventListener("click", function(e) {
					e.preventDefault();
					e = e || window.event;
					var target = e.target || e.srcElement;
					if (target.tagName === "IMG")
					popup_pics.classList.add("popup--active");
					popup_img.setAttribute("src", target.parentElement.getAttribute("href"));
				}, false);
			}
		}
})();

(function() {
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

	var partners = document.querySelectorAll(".partners");
	var partners_active = document.querySelectorAll(".partners--active");
	var partners_btn = document.querySelector(".partners__all");

	if (partners.length > 0){
		partners_btn.querySelector(".inner-heading").innerHTML =  "Смотреть ещё " + (partners.length - partners_active.length) + " банков";
		show(partners_btn, partners, "partners--active", "partners__all--hidden");
	}


	var imgs = document.querySelectorAll(".estate-card__img");
	var imgs_active = document.querySelectorAll(".estate-card__img--active");
	var imgs_btn = document.querySelector(".estate-card__more");

	if (imgs.length > 0){
		imgs_btn.innerHTML =  "...и ещё " + (imgs.length - imgs_active.length) + " фотографии";
		show(imgs_btn, imgs, "estate-card__img--active", "estate-card__more--hidden");
	}
})();

(function() {

	if (!("FormData" in window)) {
		return;
	}

	var form = document.querySelectorAll(".popup__container--form");

  for (i = 0; i < form.length; ++i) {
		form[i].addEventListener("submit", function(event) {
			event.preventDefault();

			var data = new FormData(form[i]);

			request(data, function(response) {
				console.log(response);
			});
		});
	}

	function request(data, fn) {
		var xhr = new XMLHttpRequest();

		xhr.open("post", "/send?" + (new Date()).getTime());

		xhr.addEventListener("readystatechange", function() {
			if (xhr.readyState == 4) {
				fn(xhr.resposeText);
				}
		});

		xhr.send(data);
		console.log(data);
	}
})();
