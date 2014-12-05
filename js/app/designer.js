define(['jquery', 'config', 'canvas', 'tools'],//'json!config/config.json'
    function ($, Config, Canvas, Tools) {
        "use strict";
        var VERSION = "1.0 beta",
            CONFIG = Config,
            DOM_DESIGNER_ID = "designer",
            DOM_CANVAS_ID = "canvas",
            DOM_TOOLS_ID = "tools";

        var Designer = function () {
            this.init();
        };

        Designer.prototype = {
            constructor: Designer,
            designer: null,
            $dom: null,

            canvas          : null,
            menu            : null, //not loaded
            nodeList        : null, //not loaded
            options         : {},   //not loaded
            properties      : null, //not loaded
            tools           : null,

            init: function () {
                Designer.prototype.designer = this;
                this.options = CONFIG;

                this._createDom();

                this.canvas = Canvas(this, DOM_CANVAS_ID);
                this.tools = Tools(this, DOM_TOOLS_ID);

                console.log("Designer's version: " + VERSION);
            },

            _createDom: function () {
                $("body").empty();
                this.$dom = $("<div></div>").attr("id", DOM_DESIGNER_ID).addClass(DOM_DESIGNER_ID).appendTo($("body"));
                this.$dom.append($("<div></div>").attr("id", DOM_TOOLS_ID).addClass(DOM_TOOLS_ID));
                this.$dom.append($("<div></div>").attr("id", DOM_CANVAS_ID).addClass(DOM_CANVAS_ID));
            },

            _debug: function () {
                var json = $.extend(true, {}, CONFIG.nodes._COMMON, CONFIG.nodes.start);
                console.log(json);
            }
        };

        var DesignerFactory = function () {
            if (Designer.prototype.designer) {
                return Designer.prototype.designer;
            } else {
                return new Designer();
            }
        };

        return DesignerFactory;
    }
);