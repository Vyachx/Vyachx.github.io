$(document).ready(function(){
 $('.content-item__arrow').click(function(){
  $(this).parent().toggleClass('content-item_open');
  return false;
 });
});
