jQuery(document).ready(function($) {
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('header').toggleClass('header-color');
    $('#overlay').toggleClass('open');
    $('html').toggleClass('hidden');
   });

 
    // Closes overlay menu after clicking on the menu link
    $('#site-navigation3 ul li a').on("click", function (e) {
        $('#toggle').click();
    });
         
    // AOS.init({
    //     duration: 1200,
    //     easing:'ease-in-quad',
    //     disable: 'mobile',
    //     once: true
    // });

      $(".team-content .read-more").click(function () {
          var $this = $(this);
          var $moreText = $this.prev().find(".more-text");
  
          if ($moreText.is(":visible")) {
              $moreText.slideUp();
              $this.html("Read More");
          } else {
              $moreText.slideDown();
              $this.html("Read Less");
          }
      });
  
 


  

  
  //*** Flexslider ***
  // var $flexslider = $('.flex-slider');
  // $flexslider.flexslider({
  //   smoothHeight: false,
  //   slideshow: true,
  //   arrows: false,
  //   dots: true,
  //   controlNav: true,
  //   directionNav: true,
  //   slideshowSpeed: 5000,
  //   useCSS: false /* Chrome fix*/
  // });// End Flexslider



  //Slick SLider
  $('.gallery-slider').slick({
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    // fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  
});
  
$('[data-fancybox="galleryImages"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});
