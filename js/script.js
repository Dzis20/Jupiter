$(document).ready(function() {
   $('.burger-menu').click(function(event) {
       $('.burger-menu,.header-nav,.header-btn').toggleClass('active');
       $('body').toggleClass('lock');
   });
});

$(document).ready(function() {
    $('.footer-btn').click(function(event) {
        $('body').toggleClass('light-theme');
        $('body').toggleClass('dark-theme');

        $('.header-top').toggleClass('header-top-lt');
        $('.header-top').toggleClass('header-top-dt');

        $('.main-nav').toggleClass('main-nav-lt');
        $('.main-nav').toggleClass('main-nav-dt');

        $('.header-nav').toggleClass('header-nav-lt');
        $('.header-nav').toggleClass('header-nav-dt');

        $('.btn').toggleClass('btn-lt');
        $('.btn').toggleClass('btn-dt');

        $('.other-btn').toggleClass('btn-lt');
        $('.other-btn').toggleClass('btn-dt');

        $('.popular-item').toggleClass('popular-item-lt');
        $('.popular-item').toggleClass('popular-item-dt');

        $('.popular-item-img').toggleClass('popular-item-img-lt');
        $('.popular-item-img').toggleClass('popular-item-img-dt');

        $('.popular-item-btn').toggleClass('popular-item-btn-lt');
        $('.popular-item-btn').toggleClass('popular-item-btn-dt');

        $('.footer-top').toggleClass('footer-top-lt');
        $('.footer-top').toggleClass('footer-top-dt');

        $('.footer-menu').toggleClass('footer-menu-lt');
        $('.footer-menu').toggleClass('footer-menu-dt');

        



        // $('.header-top').removeClass('header-top');
        // $('.header-top').addClass('header-top-dt');

        // $('.header-top').toggleClass('header-top-dt');
        // $('.header-top').toggleClass('header-top');
        // $('.header-top-dt').toggleClass('header-top');
        // // $('.header-top-dt').toggleClass('header-top-dt');
    })
})