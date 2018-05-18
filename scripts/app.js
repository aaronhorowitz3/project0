console.log('sanity check! you\'re totally not insane... ')

// smooth scroll from nav to different sections
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 85
    }, 650);
    return false;
});
