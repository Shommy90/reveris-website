function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
}

function slides() {
    var slides = 4

    if (getWidth() < 500) {
      slides = 2
    }

    return slides
  }


// $('.startup-slider').slick({
//     slidesToShow: slides(),
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
// });