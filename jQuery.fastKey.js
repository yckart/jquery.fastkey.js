/*!
* jQuery.fastKey.js 0.1 - https://github.com/yckart/fastKey
* Fire keyevents much faster
*
* Copyright (c) 2012 Yannick Albert (http://yckart.com) | @yckart #fastkey
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
* 2012/10/07
*/
;(function($, window, document, undefined) {

    $.fastKey = function(key, fun, options) {return $.fn.fastKey(key, fun, options);};
    $.fn.fastKey = function(key, fun, options) {

        o = $.extend({}, $.fn.fastKey.options, options);

        var keys = {},
            iterater = function() {
                for (var code in keys) {
                    if (!keys.hasOwnProperty(code)) {continue;}
                    switch (code) {
                    case key:
                        fun();
                    }
                }
            };

        setInterval(iterater, o.interval);

        $(document).keydown(function(e) {
            keys[e.keyCode] = true;
            if (o.preventDefault && e.keyCode == key) {
                e.preventDefault();
            }
        });

        $(document).keyup(function(e) {
            delete keys[e.keyCode];
        });
    };

    $.fn.fastKey.options = {
        interval: 10,
        preventDefault: true
    };

})(jQuery, window, document);