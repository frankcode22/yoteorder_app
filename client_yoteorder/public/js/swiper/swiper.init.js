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


    // BLOG CAROUSEL
    Favland.blogCarousel = function () {
        var blogCarousel = new Swiper('.blog-carousel', {
            direction: 'horizontal',
            loop: true,
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },

        })
    };

    // CUSTOMER STORIES
    Favland.customerStories = function () {
        var customerStories = new Swiper('.customers-stories', {
            // Optional parameters
            slidesPerView: 'auto',
            direction: 'horizontal',
            loop: true,
            // mousewheel: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        })
    };

    // LIFE AT Favland
    Favland.LifeFavland = function () {
        var LifeFavland = new Swiper('.life-at-favland', {
            // Optional parameters
            spaceBetween: 30,
            cssMode: false,
            slidesPerView: '1',
            grabCursor: true,
            direction: 'horizontal',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    };

    // TEAM ONE CAROUSEL
    Favland.teamOneCarousel = function () {
        var teamOne = new Swiper('.team-slider-one', {
            // Optional parameters
            spaceBetween: 30,
            slidesPerView: '3',
            slidesPerGroup: 3,
            grabCursor: true,
            direction: 'horizontal',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },

        })
    };

    // UPCOMING EVENT CAROUSEL
    Favland.upcomingEventCarousel = function () {
        var upcomingEventCarousel = new Swiper('.event-details-carousel', {
            spaceBetween: 30,
            loop: true,
            dynamicBullets: true,
            grabCursor: false,
            direction: 'horizontal',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 4500,
                disableOnInteraction: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },

        })
    };

    // UPCOMING EVENT CAROUSEL
    Favland.sponserCarousel = function () {
        var sponserCarousel = new Swiper('.sponser-carousel', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });

    };

    // UPCOMING EVENT CAROUSEL
    Favland.clientCcarouselSingle = function () {
        var clientCcarouselSingle = new Swiper('.client-carousel-single', {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    };

    

    $document.ready(function () {
        Favland.blogCarousel();
        Favland.customerStories();
        Favland.LifeFavland();
        Favland.teamOneCarousel();
        Favland.upcomingEventCarousel();
        Favland.sponserCarousel();
        Favland.clientCcarouselSingle();
    });

})(jQuery);