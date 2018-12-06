// Toggle nav
$(function (){
$('.burger').on('click', function(e){
e.preventDefault();
$(this).toggleClass('active');
$('.overlay').toggleClass('visible');
});
})(jQuery);

