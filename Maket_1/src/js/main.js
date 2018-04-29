//=require components/**.*
$(window).ready(function(){
    menuShow();
    
    $('.intro-list').flickity({
        cellAling:'left',
        contain: true,
        prevNextButtons: false
    });
    
     $('.features-items').flickity({
        cellAling:'left',
        contain: true,
        prevNextButtons: false
    });
    
    $('.team-people').flickity({
        cellAling:'left',
        contain: true,
        prevNextButtons: false
    });

    filter();
})