$(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 }
        },
        navText: [
          "<div class='blog-slider__leftArrow'><img src='left arrow.png'></div>",
          "<div class='blog-slider__rightArrow'><img src='right arrow.png'></div>"
        ]
      });
    });