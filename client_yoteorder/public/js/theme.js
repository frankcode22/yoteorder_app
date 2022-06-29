/* 

Theme Name: Favland - SaaS & Software HTML5 Template
Author: uichamp
E-mail: support@uichmap.com

--

Copyright 2020 uichamp.com

*/


(function ($) {
    "use strict";
    var Favland = {};

    var $document = $(document);

    // Check if function exists
    $.fn.exists = function () {
        return this.length > 0;
    };

    // WAVE EFFECT
    Favland.waves = function () {
        Waves.attach(".waves-effect");
        Waves.init();
    };

    // TOOLTIP
    Favland.tooltip = function () {
        $('[data-toggle="tooltip"]').tooltip();
    };

    // POPOVER
    Favland.popover = function () {
        $('[data-toggle="popover"]').popover();
    };

    // AOS
    Favland.AOS = function () {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    };

    // TOGGLE PASSWORD
    Favland.togglePassword = function () {
        if ($('.pw-btn-toggle').exists()) {
            $(document).on('click', '.pw-btn-toggle', function () {
                $(this).toggleClass("icon-eye icon-eye-off");

            var input = $(".password");
                input.attr('type') === 'password' ? input.attr('type', 'text') : input.attr('type', 'password')
            });
        }
    };

    // BOOTSTRAP CAROUSEL
    Favland.bootstrapCarousel = function () {
        $('.carousel').carousel({
            interval: 2000
        })
    }

    // SHUFFLE
    Favland.shuffle = function () {
        if ($('.masonry-grid').exists()) {
            // Shuffle
            var Shuffle = window.Shuffle;
            var myShuffle = new Shuffle(document.querySelector('.masonry-grid'), {
                itemSelector: '.masonry-grid-item',
                sizer: '.my-sizer-element',
                buffer: 1,
            });

        }
    };

    // PARALLAX BANNER
    Favland.parallaxBanner = function () {
        if ($('.parallax-banner-img').exists()) {
            var image = document.getElementsByClassName('parallax-banner-img');
            new simpleParallax(image, {
                delay: .6,
                scale: 1.5,
                transition: 'cubic-bezier(0,0,0,1)'
            });
        }
    };

    // PRICING
    Favland.pricing = function () {
        var Prices = (function () {
            // Variables
            var priceSwitcher = document.querySelectorAll('[data-toggle="price"]');


            // Methods
            function init(elem) {
                // Inner variables
                var targetElem = elem.getAttribute('data-target'),
                    target = document.querySelectorAll(targetElem);

                elem.addEventListener('click', function () {
                    // Inner variables
                    var switchedValues = elem.getAttribute('data-switcher');

                    [].forEach.call(target, function (t, i) {
                        var from = 0,
                            to = t.getAttribute('data-' + switchedValues);

                        var counter = new CountUp(t, from, to);

                        if (!counter.error) {
                            counter.start();
                        }
                    });
                }, false);
            }


            // Events
            if (priceSwitcher.length > 0) {
                [].forEach.call(priceSwitcher, function (el, i) {
                    init(el);
                });
            }
        }());
    };

    // LINK GROUP
    Favland.LinkGroup = function () {
        var LinkGroup = (function () {
            // Variables
            var linkGroup = document.querySelectorAll('[data-link-group]');


            // Methods
            function init(elem) {
                elem.addEventListener('click', function (e) {
                    // Inner variables
                    var linkGroupName = elem.getAttribute('data-link-group'),
                        linkGroups = document.querySelectorAll('[data-link-group="' + linkGroupName + '"]');

                    [].forEach.call(linkGroups, function (el, i) {
                        el.classList.remove('active');
                    });
                    elem.classList.add('active');

                    if (elem.getAttribute("href") && elem.getAttribute("href").slice(0, 1) == "#") {
                        e.preventDefault();
                    }
                }, false);
            }


            // Events
            if (linkGroup.length > 0) {
                [].forEach.call(linkGroup, function (el, i) {
                    init(el);
                });
            }
        }());
    };


    // Navbar Toggler
    $(".navbar-toggler").click(function(e) {
        $("body").toggleClass('offcanvas-stop-scrolling');
      });
                    
        


    $document.ready(function () {
        Favland.waves();
        Favland.tooltip();
        Favland.popover();
        Favland.AOS();
        Favland.togglePassword();
        Favland.bootstrapCarousel();
        Favland.shuffle();
        Favland.parallaxBanner();
        Favland.pricing();
        Favland.LinkGroup();
    });

})(jQuery);

