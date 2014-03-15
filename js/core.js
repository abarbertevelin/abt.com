(function( $, win, doc ) {
    "use strict";

    var
        resume = doc.getElementById('resume'),
        showResume = doc.getElementById('show-resume'),
        closeResume = doc.getElementById('close-resume');

	$(closeResume).on('click', function(e) {
        e.preventDefault();
        $(resume).addClass('fadeOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('visible fadeOutUp');
        });
    });

    $(showResume).on('click', function(e) {
        e.preventDefault();
        $(resume).addClass('visible fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('fadeInDown');
        });
    });

})(jQuery, window, document);