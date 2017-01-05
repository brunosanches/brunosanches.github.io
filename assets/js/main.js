//Use Strict Mode
(function($) {
  "use strict";

//Begin - Window Load
$(window).load(function(){


	//==============___Page Loader___================
  $('#page-loader').delay(300).fadeOut(400, function(){

  });

  $('#loader-name').addClass('loader-left');
  $('#loader-job').addClass('loader-right');
  $('#loader-animation').addClass('loader-hide');

});

//Begin - Document Ready
$(document).ready(function(){

  //==============___Page Loader___================
  $('#loading-wraper').fadeIn(300);

  //==============___Scrollbars___================
  $('.section-vcardbody').perfectScrollbar({
    wheelSpeed: 0.9
  });

  //End - Document Ready
});

//End - Use Strict mode
})(jQuery);