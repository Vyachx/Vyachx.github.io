$(document).ready(function () {
    $('.content-item__arrow').click(function () {
        $(this).parent().toggleClass('content-item_open');
        return false;
    });

    $('.header-burger').click(function () {
        $('.wrap-menu').toggleClass('vis');
        $('.header-comparison').toggleClass('vis');
        $('.header-lk').toggleClass('vis');
        $('.header-menu').toggleClass('vis');
        $('.header-body__logo').toggleClass('vis');
        $('.header-contact').toggleClass('vis');
        $('.header-contact').toggleClass('pos');
        return false;
    });
    
     $('.bfooter-section__item').click(function () {
        $(this).children().toggleClass('bfooter-item__text_open');
        return false;
    });
    

    
});
