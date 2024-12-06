"use strict";
$(document).ready(function () {
  $(".homepage__slides").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    onTranslate: function (event) {
      $(".single__slide--item h2, .single__slide--item p").removeClass(
        "animate__animated animate__fadeInUp"
      );
      $(".single__slide--item a").removeClass(
        "animate__animated animate__fadeInDown"
      );
    },
    onTranslated: function (event) {
      var activeSlideIndex = event.item.index;

      // Animate only the current active slide
      $(".owl-item")
        .eq(activeSlideIndex)
        .find(".single__slide--item h2, .single__slide--item p")
        .addClass("animate__animated animate__fadeInUp");
      $(".single__slide--item a").removeClass(
        "animate__animated animate__fadeInDown"
      );
      $(".single__slide--item a").addClass(
        "animate__animated animate__fadeInDown"
      );
    },
  });

  $(".gallery__lightbox").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  new WOW().init();
});

$(window).on("load", function () {
  $(".factorian__slide--preloader-wrap").fadeOut("slow", function () {
    $(this).remove(); // Optionally remove the preloader from the DOM
  });
});

$(window).on("load", function () {
  $(".factorian__site--preloader").fadeOut("slow", function () {
    $(this).remove(); // Optional: Removes preloader from DOM after fading out
  });
});
