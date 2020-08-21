$(document).ready(function () {

    // SKYCKY NAV-MENU ON SCROLL
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $('nav.menu').addClass('stycky');
        } else {
            $('nav.menu').removeClass('stycky');
        }
    });

    // Hamburger Menu OPEN e CLOSE
    $(".fa-bars").click(function () {
        $(".hamburger-menu").addClass("active");
        $('.images').hide();
    });

    $(".fa-times").click(function () {
        $(".hamburger-menu").removeClass("active");
        $('.images').show();
    });

});