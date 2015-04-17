if ('undefined' === typeof markdown)
    throw new Error('Markdown.js is required');
(function($, markdown) {
    $('.markdown[data-markdown]').each(function(index, element){
        $.get($(this).attr('data-markdown'), function (data) {
            $(element).html(markdown.toHTML(data));
        });
    });
}(window.jQuery, window.markdown));
