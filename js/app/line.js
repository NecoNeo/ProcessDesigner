define(['jquery'], function ($) {
    "use strict";

    var Line = function (app, params) {
        this.app = app;
        this.init(params);
    };

    Line.prototype = {
        constructor: Line,
        
        init: function () {}
    };

    return Line;
});