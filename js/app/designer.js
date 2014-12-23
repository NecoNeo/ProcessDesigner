define(['jquery', 'config', 'canvas', 'tools', 'node', 'line'],//'json!config/config.json'
    function ($, Config, Canvas, Tools, Node, Line) {
        "use strict";
        var VERSION = "1.0 beta",
            CONFIG = Config,
            DOM_DESIGNER_ID = "designer",
            DOM_CANVAS_ID = "canvas",
            DOM_TOOLS_ID = "tools";

        var Designer = function () {
            this.nodeObjects = [];
            this.lineObjects = [];
            this.currentObject = null;
            this.init();
        };

        Designer.prototype = {
            constructor: Designer,
            designer: null,

            nodeObjects: null,
            lineObjects: null,
            $dom: null,

            canvas          : null,
            menu            : null, //not loaded
            nodeList        : null, //not loaded
            options         : {},   //not loaded
            properties      : null, //not loaded
            tools           : null,

            init: function () {
                var designer = Designer.prototype.designer = this;
                this.options = CONFIG;

                this._createDom();

                //initialization of the parts of the designer
                this.canvas = Canvas(this, DOM_CANVAS_ID);
                this.tools = Tools(this, DOM_TOOLS_ID);

                console.log("Designer's version: " + VERSION);
                //debug
                window.command = function (params) {
                    return designer.command.apply(designer, arguments);
                };
            },

            _createDom: function () {
                $("body").empty();
                this.$dom = $("<div></div>").attr("id", DOM_DESIGNER_ID).addClass(DOM_DESIGNER_ID).appendTo($("body"));
                this.$dom.append($("<div></div>").attr("id", DOM_TOOLS_ID).addClass(DOM_TOOLS_ID));
                this.$dom.append($("<div></div>").attr("id", DOM_CANVAS_ID).addClass(DOM_CANVAS_ID));
            },

            command: function (commandString, params) {
                switch (commandString) {
                    case "createNode": //demo
                        var node = new Node(this, params);
                        return node;
                        break;
                    default:
                        console.log('Undefined command.');
                        break;
                }
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