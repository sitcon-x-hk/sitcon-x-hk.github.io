(function ($) {
    var url = document.URL.replace(window.location.protocol + '//').split('/')[2];
    if ('' === url)
        url = 'brand';
    $('.navbar a#' + url).addClass('nav-highlight');
}(window.jQuery));
