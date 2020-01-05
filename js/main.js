$(function() {
  // Toggle open
  $(".sideNav li").on("click", function(e) {
    $(this)
      .find(".dropDown")
      .slideToggle();
    $(this)
      .siblings()
      .find(".dropDown")
      .slideUp();
    $(this)
      .find("span")
      .toggleClass("open");
    $(this)
      .siblings()
      .find("span")
      .removeClass("open");
    e.stopPropagation();
  });

  // open Side Nav
  $(".menuTriger").on("click", function() {
    $(".sideNav").toggleClass("open");
    $(".navover").toggleClass("open");
    $("body").css("overflow", "hidden");
    setTimeout(function() {
      $(".sideNav").addClass("origin");
    }, 500);
  });

  // Close Side Nav
  $(".navover, .close1").on("click", function() {
    if ($(".sideNav").hasClass("open")) {
      $(".navover").removeClass("open");
      $(".sideNav").toggleClass("open");
      // $(".sideNav").toggleClass("origin");
      $("body").css("overflow", "auto");
      setTimeout(function() {
        $(".sideNav").removeClass("origin");
      }, 600);
    }
  });

  // Search
  $(".searchTriger .lnr-magnifier").on("click", function() {
    $("form.search").addClass("open");
    $("html").css("overflow-y", "hidden");
    $("form.search input").focus();
    $(".navover").toggleClass("open");
  })

  $(".navover").on("click", function() {
    $(this).removeClass("open");
    $("form.search").removeClass("open");
    $("html").css("overflow-y", "auto");
  })

  // Sticky Navbar
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= $(".navBar").innerHeight() / 2) {
      $(".navBar").addClass("scroll");
    } else {
      $(".navBar").removeClass("scroll");
    }
  });

  // Main Slider
  $(".main-slider .owl-carousel").owlCarousel({
    // autoplay: true,
    rtl: true,
    loop: true,
    nav: false,
    items: 1,
    dots: true,
    smartSpeed: 1000
  });

  // clients Slider
  $(".clients .owl-carousel").owlCarousel({
    // autoplay: true,
    rtl: true,
    loop: true,
    nav: true,
    items: 7,
    dots: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 5
      },
      1200: {
        items: 7
      }
    },
    navText: ["<span></span>", "<span></span>"]
  });

  $(".customers .owl-carousel").owlCarousel({
    // autoplay: true,
    rtl: true,
    loop: true,
    nav: true,
    items: 6,
    dots: true,
    margin: 30,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3,
        margin: 40,
        stagePadding: 40
      },
      991: {
        items: 4,
        margin: 40,
        stagePadding: 40
      },
      1000: {
        items: 6
      }
    },
    navText: [
      "<span class='lnr lnr-chevron-right'></span>",
      "<span class='lnr lnr-chevron-left'></span>"
    ]
  });

  //footer accordion
  if ($(window).width() < 992) {
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $(".foot-links button").on("click", function() {
    $(this).toggleClass("trans");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find(".collapse")
      .collapse("hide");
    $(this)
      .parent()
      .parent()
      .siblings()
      .find("button")
      .removeClass("trans");
  });

  // Preloder
  $(window).on("load", function() {
    $("html").css("overflow-y", "auto");
    $(".preloader").fadeOut(400, function() {
      $(this).remove()
    });
  });

  // Animation On Scroll
  AOS.init({
    once: true
  });
});
