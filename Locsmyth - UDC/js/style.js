//stores Logos
$(document).ready(function(){
    $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
        pauseOnHover: false,
        responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }]
    });
  });

//store logo end


// Product Slider
$('.slider').slick({
    dots: false,
    infinite: true,
    arrows:true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1 ,
    padding: 0,
    nextArrow:'<i class="fa-solid fa-chevron-right"></i>',
    prevArrow:'<i class="fa-solid fa-chevron-left"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: false ,
          prevArrow: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false ,
          prevArrow: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

// Product Slider End


//Product Details page
  $('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    verticalSwiping:true,
    asNavFor: '.slider-navigation'
  });
  $('.slider-navigation').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-main',
    dots: false,
    arrows:false,
    vertical:true,
    focusOnSelect: true
  });
  // Product Detail page

// Testimonials Slider
$('.sliderTest').slick({
  dots: true,
  infinite: true,
  arrows:false,
  autoplay: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  // nextArrow:'<i class="fa-solid fa-chevron-right"></i>',
  // prevArrow:'<i class="fa-solid fa-chevron-left"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
