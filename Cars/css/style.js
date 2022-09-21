document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


// Model Show

$(window).on('load', function() {
  $('#exampleModalToggle').modal('show');
});

$('.my2').click(function(){
  $(".modal-footer").addClass('d-none');
});
$('.my3').click(function(){
  $(".modal-footer").addClass('d-none');
});


// cookie-banner__button js-accept-cookies

// button close cookies

$('.cookie-banner__button').click(function(){
  $(".cookies-btn").addClass('d-none');
});

// button close cookies close


  //Get the button
  var mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // only a single banner picture slide at a time. 
  $('.single-item').slick({
    dots:true,
  });


  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
    



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
        breakpoint: 800,
        settings: {
          slidesToShow: 3
        }
      }, 
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2
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
        breakpoint: 800,
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
