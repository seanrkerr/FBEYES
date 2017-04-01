$(document).ready(function () {
    var homeSwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        prevButton: $('.swiper-arrow--prev'),
        nextButton: $('.swiper-arrow--next'),
        pagination: $('.swiper-pagination')
    });

    $('.menu-link').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.nav').toggleClass('hidden');
    });
});