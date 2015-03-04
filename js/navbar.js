!function ($) {
    'use strict';
    $(function () {

        var $body = $(document.body);
        var $window = $(window);

        $('html').niceScroll();
        $body.scrollspy({
            target: '.navbar-nav'
        });

        $window.on('load', function () {
            $body.scrollspy('refresh');
        });

        $('.navbar a').click(function (event) {
            event.preventDefault();
            $('body').scrollTo($($(this).attr('href')) , 1000);
            $('.navbar a').removeClass('nav-highlight');
            $(this).addClass('nav-highlight');
        })
    });
}(window.jQuery);
