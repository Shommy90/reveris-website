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
    var slides = 3

    if (getWidth() > 768) {
      slides = 3
    } 
    if (getWidth() > 1600) {
      slides = 4
    }
    if (getWidth() < 769) {
      slides = 2
    }
    if (getWidth() < 500) {
      slides = 1
    }

    return slides
  }

  $('.autoplay').slick({
    slidesToShow: slides(),
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  });