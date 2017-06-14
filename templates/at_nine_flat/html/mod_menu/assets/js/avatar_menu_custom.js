jQuery(window).load(function(){
(function( $ ) {
function menuHover() {
var activeMenuItem;
var speed = 500;
if ( $('.avatar-main-menu .active').length !== 0 ) {
activeMenuItem = $('.avatar-main-menu .active');
}
if ( activeMenuItem.length !== 0 ) {
var menuSlider = $('.avatar-main-menu-slider');
// Grap width from the active menu item
var w = activeMenuItem.outerWidth();
menuSlider.width(w + 'px');
var left = activeMenuItem.position().left;
menuSlider.animate({left: left});
// Move on hover
$('.avatar-main-menu > li').hover( function() {
var w = $(this).outerWidth();
var left = $(this).position().left;
menuSlider.stop().animate( {
width: w,
left: left
}, speed); }, function() {
menuSlider.stop().animate( {
width: w,
left: left
}, speed); });
}
}
menuHover();
$(window).resize(function(e) 
{
menuHover();
});
})( jQuery, window, document );
});