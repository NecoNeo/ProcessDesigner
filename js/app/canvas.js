define(['jquery', 'raphael', 'node', 'line', 'config'], function ($, Raphael, Node, Line, Config) {
    "use strict";

    var CANVAS_WIDTH = 2200,
        CANVAS_HEIGHT = 1500,
        CANVAS_BACKGROUND_COLOR = "#fafbef",
        GRID_SIZE = Config.gridSize,
        GRID_STROKE = "#d0d7f0";

    var Canvas = function (designer, domId) {
        this.designer = designer;
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
            if (Canvas.prototype.obj) return null;
            Canvas.prototype.obj = this;
            this.paper = Raphael(domId, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.createGrid();
            this.$dom.click(function () {
                canvasObj.click();
            });
            console.log('Canvas Object initialized.');
        },

        createGrid: function () {
            this.gridSet = this.paper.set();
            for (var x = GRID_SIZE; x < CANVAS_WIDTH; x += GRID_SIZE) {
                var L = "M" + x + " 0L" + x + " " + CANVAS_HEIGHT;
                this.gridSet.push(this.paper.path(L).attr("stroke", GRID_STROKE));
            }
            for (var y = GRID_SIZE; y < CANVAS_HEIGHT; y += GRID_SIZE) {
                var L = "M0 " + y + "L" + CANVAS_WIDTH + " " + y;
                this.gridSet.push(this.paper.path(L).attr("stroke", GRID_STROKE));
            }
            console.log('Grid created.');
        },

        click: function () {
            console.log('Paper clicked.');
        }
    };

    var CanvasFactory = function (designer, domId) {
        if (Canvas.prototype.obj) {
            console.log('Tools already exists.');
            return Canvas.prototype.obj;
        } else {
            return new Canvas(designer, domId);
        }
    };

    return CanvasFactory;
});