$(document).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.totop').fadeIn(300);
        } else {
            $('.totop').fadeOut(300);
        }
    });
    $('.totop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    new WOW().init();
    $(function() {
        $('a.scroll[href*="#"]').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500, 'linear');
        });
    });
});
