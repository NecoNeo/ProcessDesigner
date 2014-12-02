define(['jquery', 'config', 'canvas'],//'json!config/config.json'
    function ($, Config, Canvas) {
        "use strict";
        var version = "1.0 beta";

        var Designer = function () {
            this.init();
        };

        Designer.prototype = {
            constructor: Designer,
            designer: null,

            canvas          : null,
            menu            : null,
            nodeList        : null,
            options         : {},
            properties      : null,
            tools           : null,

            init: function () {
                Designer.prototype.designer = this;
                this.options = Config;
                this.canvas = Canvas();
                console.log('Designer version: ' + version);
                console.log(this.options);
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