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

// $(window).scroll(function() {
//     $('.drop-down').click(function() {
//         $('html, body').stop().animate({scrollBottom: 0}, 300); 
//     })
// });

$(function(){
	$('.fa-angle-down').click(function(){
		$('html, body').animate({scrollTop: 520}, 1000);
		return false;
	});
});