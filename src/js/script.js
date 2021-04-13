$(function () {

    $('.burger-btn').on('click', function () {
        $('.burger-btn').toggleClass('burger-btn--active');
        $('.mobile-menu').toggleClass('mobile-menu--active');
    });

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slider__btn slider__btn--prev"></button>',
        nextArrow: '<button class="slider__btn slider__btn--next"></button>',
        dots: true,
        //centerMode: true,
        //centerPadding: '60px',
        //variableWidth: true,
        //autoplay: true,
        //autoplaySpeed: 2000,
        //fade: true,
        //appendArrows: ,
        //appendDots: ,
        //rtl: true,
        //mobileFirst: true,
        //rows: 2,
        //slidesPerRow: 1,
        responsive: [
            {
                //breakpoint: ,
                settings: {

                }
            },
        ]
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $('.tabs__content').removeClass('tabs__content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs__content--active');

        //$('.').slick('setPosition');
    });

    $('.some-class').on('click', function () {
        $(this).toggleClass('some-class--active');
        $(this).siblings().slideToggle('200');
    });

    $("a[href^='#']").click(function () {
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top + "px" });
        return false;
    });

    $("input[name=phone]").mask("+375 (99) 999-99-99");

});



