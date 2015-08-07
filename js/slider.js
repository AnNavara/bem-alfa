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
		variableWidth: true
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
			}
		]
	});
});
