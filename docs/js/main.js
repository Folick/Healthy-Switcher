$(function () {
  $(".hamburger").on("click", function (e) {
    $(this).toggleClass("is-active"),
      e.preventDefault(),
      $(".header__menu-list").toggleClass("is-active")
  });
  $('a[href^="#"]').click(function () {
    let anchor = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(anchor).offset().top
    }, 600);
  });
  $('.about__slider').slick({
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/left-arrow.svg" alt="left"></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/right-arrow.svg" alt="right"></button>',
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    responsive: [{
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          autoplay: 900,
          arrows: false,
        }
      },
    ],
  });
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#scrollTop').fadeIn();
    } else {
      $('#scrollTop').fadeOut();
    }
  });
  $("#scrollTop").click(function () {
    $('html ,body').animate({
      scrollTop: 0
    }, 800);
  });
});