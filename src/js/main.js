$(document).ready(function () {


    var ablai = $('#slider');
    ablai.owlCarousel({
        items: 1,
        loop: true,
        dots: false
    });
// Go to the next item
    $('.owlNextBtn').click(function() {
        ablai.trigger('next.owl.carousel');
    });
// Go to the previous item
    $('.owlPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        ablai.trigger('prev.owl.carousel', [300]);
    });

    $('ul.catalog-tabs__caption').on('click', 'li:not(.catalog-tabs__tab_active)', function() {
        $(this)
            .addClass('catalog-tabs__tab_active').siblings().removeClass('catalog-tabs__tab_active')
            .closest('div.catalog-tabs').find('div.catalog-tabs__content').removeClass('catalog-tabs__content_active').eq($(this).index()).addClass('catalog-tabs__content_active');
    });

    $('.catalog-card__moreBtnBtn').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-card__item').eq(i).addClass('.catalog-card__item_active')
            $('.catalog-card__hidden').eq(i).addClass('.catalog-card__hidden_active')
        })
    })

    // popup for consult
    $('.header-info__callBackBtn, .home__btn').on('click', function () {
        $('.overlay, .popup, .form-consult, .thanks').fadeIn('slow')
    });

    $('.popup__close').on('click', function () {
        $('.overlay, .popup, .form-consult').fadeOut('slow')
    });

    // popup for thanks
    $('.consultation__btn, .form-consult__btn').on('click', function () {
        $('.form-consult').fadeOut('fast')
        $('.overlay, .popup, .thanks').fadeIn()
    });

});