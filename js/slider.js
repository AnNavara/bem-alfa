$(document).ready(function(){
	$(".offer .sale-item").removeClass("sale-item--no-js");
});

$(document).ready(function(){
  $(".about-slider__wrapper").slick({
		dots: false,
		arrows: true,
		prevArrow: false,
		nextArrow: $(".about-slider__next"),
		infinite: true,
		speed: 600,
		slidesToShow: 2,
		centerMode: false,
		variableWidth: true
  });
});

$(".offer__wrapper").slick({
  dots: false,
	prevArrow: $(".offer__btn--left"),
	nextArrow: $(".offer__btn--right"),
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
    // {
    //   breakpoint: 920,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    //   }
    // }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
