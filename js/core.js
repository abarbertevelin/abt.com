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
            $(resume).addClass('fadeOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('visible fadeOutUp');
                $(intro).removeClass('fadeOut').addClass('fadeIn');
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
        $(intro).removeClass('fadeInLeft').addClass('fadeOut');
        $(resume).addClass('visible fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('fadeInDown fadeIn');
        });
    });

})(jQuery, window, document);