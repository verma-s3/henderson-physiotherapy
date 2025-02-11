jQuery(document).ready(function ($) {
  $('#toggle').click(function () {
    $(this).toggleClass('active');
    $('header').toggleClass('header-color');
    $('#overlay').toggleClass('open');
    $('html').toggleClass('hidden');
     if ($('header').hasClass('fixed-header')) {
      $('header').toggleClass('overlay-header');
    }
  });

  // Closes overlay menu after clicking on the menu link
  $('#site-navigation3 ul li a').on("click", function (e) {
    $('#toggle').click();
  });

  // $('.overlay-menu li.menu-item-29').click(function () {
  //   $('li.menu-item-29 ul').slideToggle("ease-in-out");
  //   $('li.menu-item-29  a img').toggleClass("show");
  // });

  fixedHeaderOnScroll();
  //*** Fixed header ***
  function fixedHeaderOnScroll() {
    var heroHeight = window.innerHeight;
    // console.log(heroHeight);
    if ($(this).scrollTop() >= heroHeight) {// If page is scrolled more than 50px
      $('header').addClass('fixed-header');    // Fade in the arrow
    } else {
      $('header').removeClass('fixed-header');   // Else fade out the arrow
    }
  }
  $(window).scroll(function () {
    fixedHeaderOnScroll();
  });

  $(window).resize(function () {
    fixedHeaderOnScroll();
    conditionsTreat();
  });


  AOS.init({
    duration: 1200,
    easing: 'ease-in-quad',
    disable: 'mobile',
    once: true
  });

  function readMore($readmore) {
    var $this = $readmore;
    var $moreText = $this.prev().find(".more-text");

    if ($moreText.is(":visible")) {
      $moreText.slideUp();
      $this.html("Read More");
    } else {
      $moreText.slideDown();
      $this.html("Read Less");
    }
  }

  function readText($readmore) {
    var $this = $readmore;
    var $moreText = $this.prev().find(".more-text");
    var $mainText = $this.prev().find(".main-text");

    if ($moreText.is(":visible")) {
      $moreText.hide();
      $mainText.show();
      $this.html("Read More");
    } else {
      $moreText.show();
      $mainText.hide();
      $this.html("Read Less");
    }
  }

  $(".team-content .read-more").click(function () {
    readMore($(this));
  });

  $(".features .read-more").click(function () {
    readText($(this));
  });

  $(".conditions-details .list-items .read-more").click(function () {
    readText($(this));
  });

  // frequesnt Questions and Answers
  $('.faq-answer').hide();
  $(".faq-button").first().addClass("is-active").children(".faq-answer").show();

  $(function () {

    $(".faq-button").click(function () {

      // Cancel the siblings
      $(this)
        .siblings(".faq-button")
        .removeClass("is-active")
        .children(".faq-answer")
        .slideUp();


      // Toggle the item
      $(this)
        .toggleClass("is-active")
        .children(".faq-answer")
        .slideToggle("ease-out");
    });
  });

  //Slick SLider
  $('.gallery-slider').slick({
    dots: false,
    infinite: true,
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

  //Slick SLider
  $('.news-slider').slick({
    dots: false,
    infinite: false,
    prevArrow: $('.prevArrow'),
    nextArrow: $('.nextArrow'),
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  //service-slider-homepage
  $('.service-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // speed: 500,
    // fade: true,
    cssEase: 'linear',
    asNavFor: '.service-slider-nav'
  });
  $('.service-slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.service-slider-main',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true
  });

  // slick carousel go to slide on hover
  $('.service-slider-nav .slick-slide').hover(function () {
    var index = $(this).data('index');
    $('.service-slider-main .slick-slide').slick('slickGoTo', index);
  });

  // On click, navigate to a new page
  $('.service-slider-nav .slick-slide').click(function () {
    var url = $(this).data('url');
    if (url) {
      window.location.href = url;
    }
  });

  //hero-slider
  //service-slider-homepage
  $('.home-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    asNavFor: '.home-slider-nav'
  });
  $('.home-slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.home-slider',
    dots: true,
    arrows: false,
    speed: 1000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
  });

  //conditions
  var baseUrl = window.location.origin + '/';
  var screenWidth = $(window).width();
  var divCount = $('.conditions-details .list-details .list-items').length;

  function conditionsTreat() {
    if ((window.location.href == baseUrl) && (screenWidth <= 768)) {
      console.log(true)
      if (divCount > 6) {
        $('.conditions-details .list-details .list-items').slice(6).hide();
      }
      $('.view-all-btn').click(function () {
        $('.conditions-details .list-details .list-items').slice(6).slideToggle('slow');
        if ($('.view-all-btn').text() == "View All") {
          $('.view-all-btn').text("View Less");
        } else {
          $('.view-all-btn').text("View All");
        }

      });
    }
  }

  conditionsTreat();





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
