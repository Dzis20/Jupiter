$(document).ready(function() {
   $('.burger-menu').click(function(event) {
       $('.burger-menu,.header-nav,.header-btn').toggleClass('active');
       $('body').toggleClass('lock');
   });
});