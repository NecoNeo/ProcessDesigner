define(['jquery', 'snap', 'config'], function ($, Snap, Config) {
    "use strict";

    var CANVAS_WIDTH = 2200,
        CANVAS_HEIGHT = 1500,
        CANVAS_BACKGROUND_COLOR = "#fafbef",
        GRID_SIZE = Config.gridSize,
        GRID_STROKE = "#d0d7f0";

    var Canvas = function (app, domId) {
        this.app = app;
        this.$dom = $("#" + domId).bind("selectstart", function () {return false;}).css("background-color", CANVAS_BACKGROUND_COLOR);
        this.init(domId);
    };

    Canvas.prototype = {
        constructor: Canvas,
        obj: null,
        options: {},

        paper: null,

        init: function (domId) {
            var canvasObj = this;
            var svg = $("#" + domId).find("svg")[0];
            if (Canvas.prototype.obj) return null;
            Canvas.prototype.obj = this;
            $(svg).attr("width", CANVAS_WIDTH).attr("height", CANVAS_HEIGHT);
            this.paper = Snap(svg);
            this.createGrid();
            this.$dom.click(function () {
                canvasObj.click();
            });
            return this.obj;
            console.log('Canvas Object initialized.');
        },

        createGrid: function () {
            var p = this.paper.path("M0 10L0 0L10 0").attr({
                    fill: "none",
                    stroke: "#e0e0e0",
                    strokeWidth: 1
                });
            p = p.pattern(0, 0, 10, 10);
            this.grid = this.paper.rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.grid.attr({
                fill: p
            });
            console.log('Grid created.');
        },

        click: function () {
            console.log('Paper clicked.');
        }
    };

    var CanvasFactory = function (app, domId) {
        if (Canvas.prototype.obj) {
            console.log('Tools already exists.');
            return Canvas.prototype.obj;
        } else {
            return new Canvas(app, domId);
        }
    };

    return CanvasFactory;
});