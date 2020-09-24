$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('.drop-up').is(':hidden')) {
            $('.drop-up').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('.drop-up').stop(true, false).fadeOut('fast'); }
});
$('.drop-up').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 300);
});