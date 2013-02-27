/*jslint browser: true*/
/*global $, jQuery*/

	$(document).ready(function() {
	    $('.top-bar').waypoint('sticky', {
	        wrapper: '<div class="sticky-wrapper" />',
	        stuckClass: 'fixie'
	    });
	
	    function scroll(x, y) {
	        $(x).on("click", function(event) {
	            event.preventDefault();
	            console.log("Hello World");
	            $(y).ScrollTo();
	        })
	    }
	    scroll(".work", "#work");
	    scroll(".meetus", "#meetus");
	    scroll(".contact", "#contact");
	    
	    imgRotator();
	    
	    $(".imgHover").hover(function imgHover() {
	        var imgTitle = $(this).next("img").attr("title");
	        var imgHeight = $(this).next("img").css("height");
	        var imgWidth = $(this).next("img").css("width");
	        /* $('#txtRotate').text('Cool Kids'); */
	        $('.imgHover').css({
	            'height': imgHeight,
	            'width': imgWidth
	        });
	        $(this).stop().animate({
	            opacity: .7
	        }, "slow").append('<h3 class="biggie">' + imgTitle + '</h3>');
	    }, function() {
	        $(this).stop().animate({
	            opacity: 0
	        }, "slow").children().remove();
	    });
	});
	
	$(".showImage").hover(function() {
	    console.log("hello world");
	    $(".placeImage").addClass("imgHover");
	    $("imgHover").css({
	        "width": "450px",
	        "height": "150px"
	    })
	}, function() {
	    $(".placeImage").removeClass("imgHover");
	});

	function imgRotator(){
	/*--- builds phrases dynamically in divs on load ---*/
		phraseloop();
	/*--- Image Rotation Magic ---*/	
		if($('.textItem').length > 0)
	     {
	         $('.textItem:first').addClass('current').fadeIn(1000);
	         setInterval('textRotate()', 3000);
	     }
	 }
	 
     function textRotate() {
     
         var current = $('#txtRotate > .current');
         if(current.next().length == 0)
         {
             current.removeClass('current').fadeOut(1000);
             $('.textItem:first').addClass('current').fadeIn(1000);
         }
         else
         {
             current.removeClass('current').fadeOut(1000);
             current.next().addClass('current').fadeIn(1000);
         }	
      }
		/*--- Array of Phrases to add to the rotation and the loop to push the phrases into seperate spans ---*/
	 function phraseloop(){
		var phrases = ['Creatives', 'Nerds', 'Researchers', 'Technology Driven', 'Motivated', 'Ambitious', 'Focused', 'Dorky', 'Forever Learning'];
		
		for (var i=0; i < phrases.length; i++){
		  $('<span/>', {class: 'textItem', text: phrases[i] }).appendTo('#txtRotate');
	 	}
	 }