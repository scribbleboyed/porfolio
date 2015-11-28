$(document).ready(function(){
  $('.your-class').slick({
  	fade: true
  });
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $('#navigation').removeClass('nav-top');
        $('#navigation').addClass('nav-scroll');
    } else {
    	$('#navigation').addClass('nav-top');
        $('#navigation').removeClass('nav-scroll');
    }
});
