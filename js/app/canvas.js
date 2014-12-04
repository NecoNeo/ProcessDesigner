define(['jquery', 'raphael', 'node', 'line'], function ($, Raphael, Node, Line) {
    "use strict";

    var Canvas = function (designer, domId, canvasWidth, canvasHeight) {
        this.designer = designer;
        this.$dom = $("#" + domId).bind("selectstart", function () {return false;}).css("background-color", "#efffe0");
        this.init(domId, canvasWidth, canvasHeight);
    };

    Canvas.prototype = {
        constructor: Canvas,
        obj: null,
        options: {},

        paper: null,

        init: function (domId, canvasWidth, canvasHeight) {
            var canvasObj = this;
            if (Canvas.prototype.obj) return null;
            Canvas.prototype.obj = this;
            this.paper = Raphael(domId, canvasWidth, canvasHeight);
            this.$dom.click(function () {
                canvasObj.click();
            });
            console.log('Canvas Object initialized.');
            console.log(this.designer);
        },

        click: function () {
            console.log('Paper clicked.');
        }
    };

    var CanvasFactory = function (designer, domId, canvasWidth, canvasHeight) {
        if (Canvas.prototype.obj) {
            console.log('Tools already exists.');
            return Canvas.prototype.obj;
        } else {
            return new Canvas(designer, domId, canvasWidth, canvasHeight);
        }
    };

    return CanvasFactory;
});