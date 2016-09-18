/*jslint browser: true, devel: true, node: true, nomen: true, plusplus: true*/
/*global $, jQuery*/

(function () {

  "use strict";
  
  // Require jQuery
  global.$                = require("jquery");
    
  var shared              = require("./shared"),
      debounce            = require('debounce');
      
  //  require("swiper");
  //  require("fullpage.js");
  
  // Modernizr tests
  // require('browsernizr/test/webgl');
  // require('browsernizr/test/workers/webworkers');
  // require('browsernizr/test/webrtc/peerconnection');
  // require('browsernizr/test/storage/localstorage');
  // require('browsernizr/test/audio/webaudio');
  // require('browsernizr/test/websockets');
  // var Modernizr = require('browsernizr');
  
  $(function () {
    
    console.log("READY");

    var lastScrollTop = 0, delta = 100;
    var currentImg = 1;
    var maxLength = $('.content').length;
    

    $('html, body').animate({
      'scrollTop' : $('#img-' + currentImg + '').offset().top - ( $(window).height() - $('#img-' + currentImg + '').height() ) / 2
    }, 200);

    console.log("This many images: " + maxLength);

    function scrollNext() {

      if( currentImg < maxLength ){
        currentImg ++;  
        $('html, body').animate({
          'scrollTop' : $('#img-' + currentImg + '').offset().top - ( $(window).height() - $('#img-' + currentImg + '').height() ) / 2
        }, 500);
      } else {
        currentImg = maxLength;
        e.preventDefault();
      }
    }

    function scrollPrev(){
      if( currentImg > 0 ){
        currentImg --;
        $('html, body').animate({
          'scrollTop' : $('#img-' + currentImg + '').offset().top - ( $(window).height() - $('#img-' + currentImg + '').height() ) / 2
        }, 500);
      } else {
        currentImg == 0;
      }
      console.log(currentImg);
    }

    $(document).keydown(function(e){

      switch(e.which) {

        case 38: // up
        scrollPrev();
        break;

        case 40: // down
        scrollNext();
        break;

        default: return; // exit this handler for other keys
        }
      e.preventDefault(); // prevent the default action (scroll / move caret)

    });

    // $(window).scroll(function(event){

    //   event.preventDefault();

    //    var st = $(this).scrollTop();
       
    //    if( Math.abs(lastScrollTop - st) <= delta ) 
    //         return;  
          
    //    if (st > lastScrollTop ){
    //       scrollNext();

    //    } else {   
    //       scrollPrev();

    //    }
    //    lastScrollTop = st;
    // });

  });

}());