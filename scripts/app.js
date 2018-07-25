
// smooth scroll from navs to different sections
// top nav
$('#stickyNav a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top - 85
}, 700);
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

// nav background change
   if (distanceScrolled > 1) {
      $('#stickyNav').addClass('stickyNavScrolled');
      $('#stickyNav').removeClass('stickyNavTop');
   } else {
      $('#stickyNav').removeClass('stickyNavScrolled');
      $('#stickyNav').addClass('stickyNavTop');
   };
// applying bottom border class to each respective nav anchor
  if (distanceScrolled > 638) {
    $('#stickyNavAbout').addClass('scrolledTo');
    $('#stickyNavAbout').removeClass('nonFocus');
  } else {
    $('#stickyNavAbout').removeClass('scrolledTo');
    $('#stickyNavAbout').addClass('nonFocus');
  };
  if (distanceScrolled > 1050) {
    $('#stickyNavAbout').removeClass('scrolledTo');
    $('#stickyNavAbout').addClass('nonFocus');
    $('#stickyNavProjects').addClass('scrolledTo');
    $('#stickyNavProjects').removeClass('nonFocus');
  } else {
    $('#stickyNavProjects').removeClass('scrolledTo');
    $('#stickyNavProjects').addClass('nonFocus');
  };
  if (distanceScrolled > 1530) {
    $('#stickyNavProjects').removeClass('scrolledTo');
    $('#stickyNavProjects').addClass('nonFocus');
    $('#stickyNavTestimonials').addClass('scrolledTo');
    $('#stickyNavTestimonials').removeClass('nonFocus');
  } else {
    $('#stickyNavTestimonials').removeClass('scrolledTo');
    $('#stickyNavTestimonials').addClass('nonFocus');
  };
  if (distanceScrolled > 1872) {
    $('#stickyNavTestimonials').removeClass('scrolledTo');
    $('#stickyNavTestimonials').addClass('nonFocus');
    $('#stickyNavContact').addClass('scrolledTo');
    $('#stickyNavContact').removeClass('nonFocus');
  } else {
    $('#stickyNavContact').removeClass('scrolledTo');
    $('#stickyNavContact').addClass('nonFocus');
  };
})

$('#stickyNavAbout').on('click', function(){
  $('#stickyNavProjects #stickyNavTestimonials #stickyNavContact').removeClass('scrolledTo');
})

$('#stickyNavProjects').on('click', function(){
  $('#stickyNavAbout #stickyNavTestimonials #stickyNavContact').removeClass('scrolledTo');
})

$('#stickyNavTestimonials').on('click', function(){
  $('#stickyNavProjects #stickyNavAbout #stickyNavContact').removeClass('scrolledTo');
})

$('#stickyNavContact').on('click', function(){
  $('#stickyNavProjects #stickyNavTestimonials #stickyNavAbout').removeClass('scrolledTo');
})
