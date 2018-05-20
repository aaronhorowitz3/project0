console.log('sanity check! you\'re totally not insane... ')

// smooth scroll from nav to different sections
$('#stickyNav a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 85
    }, 650);
    return false;
});

// carousel initiation
$(document).ready(function(){
  $('.materialboxed').materialbox();
    var carousel_interval = 3000;
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
