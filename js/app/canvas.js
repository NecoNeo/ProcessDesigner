define(['jquery', 'raphael'], function ($, Raphael) {
    "use strict";
    var Canvas = function () {
        this.init();
    };

    Canvas.prototype = {
        constructor: Canvas,
        obj: null,
        options: {},
        paper: null,
        init: function () {
            this.paper = Raphael(10, 50, 320, 200);
            Canvas.prototype.obj = this;
            console.log('Raphael initialized.');
        }
    };

    var CanvasFactory = function () {
        if (Canvas.prototype.obj) {
            return Canvas.prototype.obj;
        } else {
            return new Canvas();
        }
    };

    return CanvasFactory;
});