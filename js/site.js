$(".ui.dropdown").dropdown();
$(".item").popup({ on: "click", position: "bottom left" });
$(function () {
  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    adaptiveHeight: true,
    pager: false,
  });
  $(".slider1").bxSlider({
    slideWidth: 500,
    minSlides: 2,
    maxSlides: 3,
    slideMargin: 10,
    pager: false,
  });
});
