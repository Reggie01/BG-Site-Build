/*jslint browser: true*/
/*global $, jQuery*/
$(".showImage").hover(function () {
    "use strict";
    $(".placeImage").addClass("imgHover");
    $("imgHover").css({
        "width": "450px",
        "height": "150px"
    });
}, function () {
    "use strict";
    $(".placeImage").removeClass("imgHover");
});

function phraseloop() {
    "use strict";
    var phrases = ['Creatives', 'Nerds', 'Researchers', 'Technology Driven'
    , 'Motivated', 'Ambitious', 'Focused', 'Dorky', 'Forever Learning'];
    for (var i = 0; i < phrases.length; i++) {
        $('<span/>', {
            class: 'textItem',
            text: phrases[i]
        }).appendTo('#txtRotate');
    }
}

function imgRotator() {
    "use strict";
    phraseloop(); /*--- Image Rotation Magic ---*/
    if ($('.textItem').length > 0) {
        $('.textItem:first').addClass('current').fadeIn(1000);
        setInterval('textRotate()', 3000);
    }
}

function textRotate() {
    var current = $('#txtRotate > .current');
    if (current.next().length == 0) {
        current.removeClass('current').fadeOut(1000);
        $('.textItem:first').addClass('current').fadeIn(1000);
    } else {
        current.removeClass('current').fadeOut(1000);
        current.next().addClass('current').fadeIn(1000);
    }
}

$(document).ready(function () {
    "use strict";
    $('.top-bar').waypoint('sticky', {
        wrapper: '<div class="sticky-wrapper" />',
        stuckClass: 'fixie'
    });

    function addColor(w, z) {
        var x = ".meetus > a, .contact > a, .work > a, .about > a",
            y = "blue";
        $(w).waypoint(function () {
            $(x).removeClass(y);
            $(z).addClass(y);
        });
    }
    addColor(".about", ".about > a");
    addColor("#work", ".work > a");
    addColor("#meetus", ".meetus > a");
    addColor("#contact", ".contact > a");

    function scroll(x, y) {
        $(x).on("click", function (event) {
            event.preventDefault();
            $(y).ScrollTo();
        });
    }
    scroll(".work", "#work");
    scroll(".meetus", "#meetus");
    scroll(".contact", "#contact");
    imgRotator();
    $(".imgHover").hover(function imgHover() {
        var imgTitle, imgHeight, imgWidth;
        imgTitle = $(this).next("img").attr("title");
        imgHeight = $(this).next("img").css("height");
        imgWidth = $(this).next("img").css("width");
        $('.imgHover').css({
            'height': imgHeight,
            'width': imgWidth
        });
        $(this).stop().animate({
            opacity: 0.7
        }, "slow").append('<h3 class="biggie">' + imgTitle + '</h3>');
    }, function () {
        $(this).stop().animate({
            opacity: 0
        }, "slow").children().remove();
    });

    $('#slideShim').cycle({ 
		fx:     'fade',
		speed:  1500,
		timeout: 4000,
		prev:   '#back',
		next:   '#forward',
		pause:  1,
		pager:  '#pager'
	});
});
