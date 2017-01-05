$(document).ready(function() {

  // Ace Projects

  $('.aceSub1, .aceSub2').on("click", function() {
    var loc = $(this).attr("src");
    $('.aceResponsiveHero').attr("src", loc);
  });

  $('.aceOldSub1, .aceOldSub2').on("click", function() {
    var loc = $(this).attr("src");
    $('.aceHero').attr("src", loc);
  });

  $('.embraceSub1, .embraceSub2').on("click", function() {
    var loc = $(this).attr("src");
    $('.embraceHero').attr("src", loc);
  });

  $('.quanta1, .quanta2').on("click", function() {
    var loc = $(this).attr("src");
    $('.quantaImaging').attr("src", loc);
  });

  $('.patternLab1, .patternLab2').on("click", function() {
    var loc = $(this).attr("src");
    $('.patternLab').attr("src", loc);
  });


  var $nav_header    = $(window),
    header_height  = $('.body-container').height(),
    hero_height    = $(window).height(),
    offset_val     = hero_height - header_height;


  function navSlide() {
    var scroll_top = $(window).scrollTop();

    if (scroll_top >= offset_val) { // the detection!
      $('.basic-container--animate').removeClass();
    }
  }

  $(window).scroll(navSlide);

  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});




});
