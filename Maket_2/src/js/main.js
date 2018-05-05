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
        
        return false;
    });
});
