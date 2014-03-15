(function( $, win, doc ) {
    "use strict";

    var
        resume = doc.getElementById('resume'),
        showResume = doc.getElementById('show-resume'),
        closeResume = doc.getElementById('close-resume');

    function close() {
        if ($(resume).hasClass('visible')) {
            $(resume).addClass('fadeOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('visible fadeOutUp');
            });
        }
    }

    $(closeResume).on('click', function(e) {
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
        $(resume).addClass('visible fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('fadeInDown');
        });
    });

})(jQuery, window, document);