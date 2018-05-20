console.log('sanity check! you\'re totally not insane... ')

// smooth scroll from nav to different sections
$('#stickyNav a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 85
    }, 650);
    return false;
});

// carousel initialization
// $(document).ready(function(){
//    $('.carousel').carousel();

// zoom add-on
 // });


 // carousel autoplay
// $('.carousel').carousel();
//  setInterval(function() {
//    $('.carousel').carousel('next');
//  }, 2000);
//

$(document).ready(function(){
  $('.materialboxed').materialbox();
    var carousel_interval = 1000;
    $('.carousel').carousel();
    var int;
    function run(){
        int = setInterval(function()
        {
            $('.carousel').carousel('next');
        }, carousel_interval);
    }
    function stop(){
    clearInterval(int);
    }
    $('.carousel').hover(stop, run);
    run();
    });
