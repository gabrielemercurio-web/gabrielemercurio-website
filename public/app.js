/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  }); // *** Hamburger Menu OPEN e CLOSE + LINK

  $(".fa-bars").click(function () {
    $(".hamburger-menu").addClass("active");
  });
  $(".fa-times").click(function () {
    $(".hamburger-menu").removeClass("active");
  });
  $('.hamburger-menu .hb-about').click(function () {
    $(".hamburger-menu").removeClass("active");
  });
  $('.hamburger-menu .hb-work').click(function () {
    $(".hamburger-menu").removeClass("active");
  });
  $('.hamburger-menu .hb-skills').click(function () {
    $(".hamburger-menu").removeClass("active");
  });
  $('.hamburger-menu .hb-form').click(function () {
    $(".hamburger-menu").removeClass("active");
  }); // *** AUTO-SLIDER *** BACK *** NEXT
  // Ogni 3 secondi le slide si alternano

  function slideSwitch() {
    var img_corrente = $('.visible'); // recupero il pallino corrente

    var testo_corrente = $('.slider-text.active');
    img_corrente.removeClass('visible'); // tolgo la classe active al pallino corrente

    testo_corrente.removeClass('active');
    img_successiva = img_corrente.next('img'); // recupero il pallino successivo

    var testo_successivo = testo_corrente.next('.slider-text');

    if (img_successiva.length != 0) {
      img_successiva.addClass('visible');
      testo_successivo.addClass("active");
    } else {
      img_successiva = $('img:first-child');
      img_successiva.addClass('visible');
      $("span.slider-text:first-of-type").addClass("active");
    }
  }

  ;
  var theInterval;

  function startSlide() {
    theInterval = setInterval(slideSwitch, 3000);
  }

  function stopSlide() {
    clearInterval(theInterval);
  }

  $(function () {
    startSlide();
    $(".slide").hover(function () {
      stopSlide();
    }, function () {
      startSlide();
    });
  }); // *** Slider con immagini che scorrono cliccando sulle freccie
  // intercettare il click sulla classe .next

  $('.next').click(function () {
    // intercettare l'immagine con la classe .visible
    var img_corrente = $('img.visible');
    var testo_corrente = $(".slider-text.active"); // rimuovo la classe .visible all'img corrente

    img_corrente.removeClass('visible');
    testo_corrente.removeClass("active"); // intercettare l'immagine successiva

    var img_successiva = img_corrente.next('img');
    var testo_successivo = testo_corrente.next(".slider-text"); // aggiungo la classe .visible a img_successiva
    // Se img_successiva è l'ultima si ricomincia da capo

    if (img_successiva.length != 0) {
      img_successiva.addClass('visible');
      testo_successivo.addClass("active");
    } else {
      img_successiva = $('img:first-child');
      img_successiva.addClass('visible');
      $("span.slider-text:first-of-type").addClass("active");
    }
  }); // intercettare il click sulla classe .prev

  $('.back').click(function () {
    // intercettare l'immagine con la classe .visible
    var img_corrente = $('img.visible');
    var testo_corrente = $(".slider-text.active"); // rimuovo la classe .visible all'img corrente

    img_corrente.removeClass('visible');
    testo_corrente.removeClass("active"); // intercettare l'immagine successiva

    var img_precedente = img_corrente.prev('img');
    var testo_precedente = testo_corrente.prev(".slider-text"); // aggiungo la classe .visible a img_successiva
    // Se img_successiva è l'ultima si ricomincia da capo

    if (img_precedente.length != 0) {
      img_precedente.addClass('visible');
      testo_precedente.addClass("active");
    } else {
      img_precedente = $("img:last-of-type");
      img_precedente.addClass('visible');
      $("span.slider-text:last-of-type").addClass("active");
    }
  }); // *** ANIMATION ON SCROLL ANCHOR <a>
  // Add smooth scrolling to all <a> links

  $("a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault(); // Store hash

      var hash = this.hash; // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 120
      }, function () {// Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    } // End if

  }); // Add smooth scrolling to icon a.scroll-top in body

  $("scroll-top").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault(); // Store hash

      var hash = this.hash; // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {// Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    } // End if

  }); // ***      SLIDER LOGO WITH slick.js
  // $('.autoplay').slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  // });
}); // Chiusura document.ready

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Gabriele/Desktop/LAVORO/Personal Branding/SitoWeb/my_web_site/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/Gabriele/Desktop/LAVORO/Personal Branding/SitoWeb/my_web_site/src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });