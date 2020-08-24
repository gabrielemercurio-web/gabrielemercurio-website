$(document).ready(function () {

    // *** SKYCKY NAV-MENU ON SCROLL
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {

            $('.container').addClass('stycky');
            $('body a').addClass('scroll-top');

        } else {
            $('.container').removeClass('stycky');
            $('body a').removeClass('scroll-top');
        }
    });



    // *** Hamburger Menu OPEN e CLOSE
    $(".fa-bars").click(function () {
        $(".hamburger-menu").addClass("active");
        $('.images').hide();
    });

    $(".fa-times").click(function () {
        $(".hamburger-menu").removeClass("active");
        $('.images').show();
    });



    // *** AUTO-SLIDER *** BACK *** NEXT
    // Ogni 3 secondi le slide si alternano

    function slideSwitch() {

        var img_corrente = $('.visible');
        // recupero il pallino corrente
        var testo_corrente = $('.slider-text.active');

        img_corrente.removeClass('visible');
        // tolgo la classe active al pallino corrente
        testo_corrente.removeClass('active');

        img_successiva = img_corrente.next('img');
        // recupero il pallino successivo
        var testo_successivo = testo_corrente.next('.slider-text');

        if (img_successiva.length != 0) {
            img_successiva.addClass('visible');
            testo_successivo.addClass("active");
        } else {
            img_successiva = $('img:first-child');
            img_successiva.addClass('visible');
            $("span.slider-text:first-of-type").addClass("active");
        }
    };

    var theInterval;

    function startSlide() {
        theInterval = setInterval(slideSwitch, 3000);
    }

    function stopSlide() {
        clearInterval(theInterval);
    }

    $(function () {
        startSlide();
        $(".slide").hover(
            function () {
                stopSlide();
            },
            function () {
                startSlide();
            }
        );
    });

    // *** Slider con immagini che scorrono cliccando sulle freccie

    // intercettare il click sulla classe .next
    $('.next').click(function () {
        // intercettare l'immagine con la classe .visible
        var img_corrente = $('img.visible');
        var testo_corrente = $(".slider-text.active");

        // rimuovo la classe .visible all'img corrente
        img_corrente.removeClass('visible');
        testo_corrente.removeClass("active");

        // intercettare l'immagine successiva
        var img_successiva = img_corrente.next('img');
        var testo_successivo = testo_corrente.next(".slider-text");

        // aggiungo la classe .visible a img_successiva
        // Se img_successiva è l'ultima si ricomincia da capo
        if (img_successiva.length != 0) {
            img_successiva.addClass('visible');
            testo_successivo.addClass("active");
        } else {
            img_successiva = $('img:first-child');
            img_successiva.addClass('visible');
            $("span.slider-text:first-of-type").addClass("active");
        }
    })

    // intercettare il click sulla classe .prev
    $('.back').click(function () {
        // intercettare l'immagine con la classe .visible
        var img_corrente = $('img.visible');
        var testo_corrente = $(".slider-text.active");

        // rimuovo la classe .visible all'img corrente
        img_corrente.removeClass('visible');
        testo_corrente.removeClass("active");

        // intercettare l'immagine successiva
        var img_precedente = img_corrente.prev('img');
        var testo_precedente = testo_corrente.prev(".slider-text");
        // aggiungo la classe .visible a img_successiva
        // Se img_successiva è l'ultima si ricomincia da capo
        if (img_precedente.length != 0) {
            img_precedente.addClass('visible');
            testo_precedente.addClass("active");
        } else {
            img_precedente = $("img:last-of-type");
            img_precedente.addClass('visible');
            $("span.slider-text:last-of-type").addClass("active");
        }
    })



    // *** ANIMATION ON SCROLL ANCHOR <a>

    // Add smooth scrolling to all <a> links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 120
            }, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        } // End if
    });

    // Add smooth scrolling to icon a.scroll-top in body
    $("scroll-top").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        } // End if
    });



    // ***      SLIDER LOGO WITH slick.js

    // $('.autoplay').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // });




}); // Chiusura document.ready