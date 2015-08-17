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

	  var add = document.querySelectorAll(".filter-build__add");
	  var popup_add = document.querySelector(".popup--add-property");

	  for (i = 0; 0 < add.length; ++i) {
	    add[i].addEventListener("click", function(e) {
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
