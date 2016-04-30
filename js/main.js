jQuery(document).ready(function() {
	jQuery('.slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: true,
		  fade: true,
		  autoplay: true,
		  autoplaySpeed: 12000,
			});
			
			jQuery('.apply').click(function(event) {
				event.preventDefault();
				jQuery('.blackout').fadeIn(400,
					function(){
						jQuery('.pop-up')
							.css('display', 'block')
							.animate({opacity: 1, top: '50%'}, 200);
					});
			});
			jQuery('.blackout, .cancel').click(function(){
				jQuery('.pop-up')
					.animate({opacity: 0, top: '45%'}, 200,
						function(){
							jQuery(this).css('display', 'none');
							jQuery('.blackout').fadeOut(400);

						});
			});


			(function( $ ){
	
//// ---> Проверка на существование элемента на странице
jQuery.fn.exists = function() {
   return jQuery(this).length;
}

//	Phone Mask
jQuery(function() {
  
  if(jQuery('#phone').exists()){
    
    jQuery('#phone').each(function(){
      jQuery(this).mask("(999) 999-99-99");
    });
    
  }
  
  if(jQuery('.application-form').exists()){
    
    var form = $('.application-form'),
      btn = form.find('.btn-submit');
    
    form.find('.rfield').addClass('empty_field');
  
    setInterval(function(){
    
      if($('#phone').exists()){
        var pmc = $('#phone');
        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
          pmc.addClass('empty_field');
        } else {
            pmc.removeClass('empty_field');
        }
      }
      
      var sizeEmpty = form.find('.empty_field').size();
      
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
      
    },200);

    btn.click(function(){
      if($(this).hasClass('disabled')){
        return false
      } else {
        form.submit();
      }
    });
    
  }

});

})( jQuery );

});