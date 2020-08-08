$(function () {
  $('.about__slider').slick({
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/left-arrow.svg" alt="left"></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/right-arrow.svg" alt="right"></button>',
    arrows: true,
    infinite: true,
    slidesToShow: 2,
  });
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
});