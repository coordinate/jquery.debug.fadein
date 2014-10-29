/*
 *
 * Copyright (c) 2014-2015 Coordinate (http://coordinate.sinaapp.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version 1.0
 *
 */

;(function($) {
    var sum = 0,
    opts = {
        dom: $('<div id="fdebug"/>'),
        time_fade: 3000,
        time_delay: 200,
        distance_moved: 60,
        height_interval: 20
    };

    $.extend({
        fdebug_init: function (options) {
            opts = $.extend(opts, options);
        },
        fdebug: function (level) {
            var args = Array.prototype.slice.call( arguments, 1),
                time = opts.time_fade + opts.time_delay*sum;

            $('#fdebug').length || opts.dom.appendTo('body');

            $('<div/>').
                addClass('fdebug-' + level).
                html( '<b>[' + level + '] </b>' + args ).
                css('top', sum++*opts.height_interval + 'px').
                appendTo('#fdebug').
                animate({
                    top: "-=" + (opts.distance_moved + opts.height_interval*sum) + "px"
                }, {duration: time, queue: false}).
                animate({
                    opacity: 1
                }, time*0.5, function() {
                    $(this).animate({opacity:0}, time*0.5, function() {
                        $(this).remove();
                        sum--;
                    });
                });
        }
    });
})(jQuery);

