
// smooth scroll from navs to different sections
// top nav
$('#stickyNav a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top - 85
  }, 1000);
  return false;
});

// responsive side nav
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

// applying bottom border class to each respective nav anchor
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
  if (distanceScrolled > 1890) {
    $('#stickyNavTestimonials').removeClass('scrolledTo');
    $('#stickyNavContact').addClass('scrolledTo');
  } else {
    $('#stickyNavContact').removeClass('scrolledTo');
  };
})

$('#stickyNavAbout').on('click', function(){
  $('#stickyNavProjects').removeClass('scrolledTo');
  $('#stickyNavTestimonials').removeClass('scrolledTo');
  $('#stickyNavContact').removeClass('scrolledTo');
})

$('#stickyNavProjects').on('click', function(){
  $('#stickyNavAbout').removeClass('scrolledTo');
  $('#stickyNavTestimonials').removeClass('scrolledTo');
  $('#stickyNavContact').removeClass('scrolledTo');
})

$('#stickyNavTestimonials').on('click', function(){
  $('#stickyNavProjects').removeClass('scrolledTo');
  $('#stickyNavAbout').removeClass('scrolledTo');
  $('#stickyNavContact').removeClass('scrolledTo');
})

$('#stickyNavContact').on('click', function(){
  $('#stickyNavProjects').removeClass('scrolledTo');
  $('#stickyNavTestimonials').removeClass('scrolledTo');
  $('#stickyNavAbout').removeClass('scrolledTo');
})
