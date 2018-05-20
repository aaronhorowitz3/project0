
// smooth scroll from nav to different sections
$('#stickyNav a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 85
    }, 1000);
    return false;
});

$('.sidenav li a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 1000);
  return false;
})

// carousel, sidenav initiation
$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
    var carousel_interval = 4500;
    $('.carousel').carousel();
    var int;
    function run(){
        int = setInterval(function()
        {
            $('.carousel').carousel('next');
        }, carousel_interval);
    }

// carousel pause
    function stop(){
    clearInterval(int);
    }
    $('.carousel').hover(stop, run);
    run();
    });

    $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
  });

// calculating distance scrolled
$(window).on('scroll', function(){
  var distanceScrolled = $(window).scrollTop();
  console.log(distanceScrolled);
  if (distanceScrolled > 638) {
    $('#stickyNavAbout').addClass('scrolledTo');
  } else {
    $('#stickyNavAbout').removeClass('scrolledTo');
  };
  if (distanceScrolled > 1050) {
    $('#stickyNavAbout').removeClass('scrolledTo');
    $('#stickyNavProjects').addClass('scrolledTo');
  } else {
    $('#stickyNavProjects').removeClass('scrolledTo');
  };
  if (distanceScrolled > 1541) {
    $('#stickyNavProjects').removeClass('scrolledTo');
    $('#stickyNavTestimonials').addClass('scrolledTo');
  } else {
    $('#stickyNavTestimonials').removeClass('scrolledTo');
  };
  if (distanceScrolled > 1642) {
    $('#stickyNavTestimonials').removeClass('scrolledTo');
    $('#stickyNavContact').addClass('scrolledTo');
  } else {
    $('#stickyNavContact').removeClass('scrolledTo');
  };
})
