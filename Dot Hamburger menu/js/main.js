// slider
$(function(){
	var setImg = '.slider';
	var fadeSpeed = 1500;
	var switchDelay = 5000;
 
	$(setImg).children('img').css({opacity:'0'});
	$(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);
 
	setInterval(function(){
		$(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
	},switchDelay);
});


// back to top
const $win = $(window);
const back = $('#back');

$(function () {
      const $win = $(window);
      const $backToTop = $('#back');  
      $win.scroll(function () {
      if ($win.scrollTop() > 50) {
      $backToTop.show();
      } else {
      $backToTop.hide();
      }
    })
  });
  
  back.on('click',function(){
    
    $('html, body').animate({scrollTop: 0}, 200);
  });


