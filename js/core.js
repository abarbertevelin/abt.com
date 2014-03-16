(function( $, win, doc ) {
    "use strict";

    var
        intro = doc.getElementById('intro'),
        overlay = doc.getElementById('overlay'),
        resume = doc.getElementById('resume'),
        showResume = doc.getElementById('show-resume'),
        closeResume = doc.getElementById('close-resume');

    function close() {
        if ($(resume).hasClass('visible')) {
            $(overlay).removeClass('visible');
            $(intro).removeClass('fadeOut').addClass('fadeIn');
            $(resume).addClass('fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('visible fadeOutDown');
            });
        }
    }

    $(closeResume).on('click', function(e) {
        e.preventDefault();
        close();
    });

    $(overlay).on('click', function(e) {
        e.preventDefault();
        close();
    });

    $(doc.documentElement).keyup(function (event) {
        if (event.keyCode === 27) {
            close();
        }
    });

    $(showResume).on('click', function(e) {
        e.preventDefault();
        $(overlay).addClass('visible');
        $(intro).removeClass('fadeIn').addClass('fadeOut');
        $(resume).addClass('visible fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('fadeInDown fadeIn');
        });
    });

    win.onresize = function() {
        if (win.innerWidth <= 600) { 
            close();
        }
    };

})(jQuery, window, document);