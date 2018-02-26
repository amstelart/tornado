// Если на проекте jQuery
$( document ).ready(function() {
  $(".main-slider").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    responsive : {
      1355 : {
        nav: true,
      }
    }
  });
  $(".image-gallery").owlCarousel({
    items: 5,
    nav: false,
    loop: false,
    margin: 30,
    center: false,
    responsive : {
      0 : {
        items: 2,
        loop: true,
        center: true,
      },
      480 : {
        items: 2,
        loop: true
      },
      768 : {
        items: 4,
        loop: true
      },
      992 : {
        items: 4,
        loop: true
      },
      1200 : {
        items: 5,
      },
      1800 : {
        items: 5,
      }
    }
  });
  $(".owl-carousel").owlCarousel({
    items: 3,
    nav: false,
    loop: false,
    margin: 30,
    center: false,
    responsive : {
      0 : {
        items: 1,
        loop: true,
        center: true,
      },
      480 : {
        items: 1,
        loop: true
      },
      768 : {
        items: 2,
        loop: true
      },
      992 : {
        items: 2,
        loop: true
      },
      1200 : {
        items: 3,
      },
      1800 : {
        items: 3,
      }
    }
  });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
