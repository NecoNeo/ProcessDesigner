define(['jquery', 'config'], function ($, Config) {
    "use strict";
    var configNodes = [];
    for (var toolItem in Config["nodes"]) {
        if (toolItem == "_COMMON") continue;
        configNodes.push(Config["nodes"][toolItem]["tools"]);
    }

    var Tools = function (designer, domId) {
        this.state = null;
        this.designer = designer;
        this.$dom = $("#" + domId).bind("selectstart", function () {return false;});
        this.init();
    };

    Tools.prototype = {
        constructor: Tools,
        obj: null,
        options: {},

        init: function () {
            Tools.prototype.obj = this;
            this.renderTools();
            console.log('Tools Object initialized.');
        },

        renderTools: function () {
            var toolsObj = this;
            $(configNodes).map(function () {
                var $nodeButton = $("<div></div>");
                $nodeButton.append($("<img src='"+this.image+"' />")).append($("<span> "+this.text+"</span>"));
                $nodeButton.click(function () {});
                toolsObj.$dom.append($nodeButton);
            });
        },

        clickNodes: function () {},

        dragNodes: function () {}
    };

    var ToolsFactory = function (designer, domId) {
        if (Tools.prototype.obj) {
            return Tools.prototype.obj;
        } else {
            return new Tools(designer, domId);
        }
    };

    return ToolsFactory;
});