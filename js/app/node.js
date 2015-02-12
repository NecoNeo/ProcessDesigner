define(['jquery', 'line', 'config'], function ($, Line, Config) {
    "use strict";

    var DEFAULT_NODE_TYPE = "mission";

    var Node = function (app, params) {
        this.app = app;
        var node = this.init(params);
    };

    Node.prototype = {
        constructor: Node,

        //behavior

        init: function (params) {
            var paper = this.app.canvas.paper;
            var nodeType = (!params || !params.nodeType) ? DEFAULT_NODE_TYPE: params.nodeType;
            var x = (!params || !params.x) ? 0 : params.x;
            var y = (!params || !params.y) ? 0 : params.y;

            this._attribute = $.extend(true, {}, Config.nodes["_COMMON"]["node"], Config.nodes[nodeType]["node"]);
            this._data = $.extend(true, {}, Config.nodes["_COMMON"]["data"], Config.nodes[nodeType]["data"]);
            
            console.log(this._attribute);

            this.group = paper.group();
            this.rect = paper.rect().attr(this._attribute.attr).attr({"x": x}).attr({"y": y});
            this.text = paper.text(x, y + 25, this._data.nodeName.value)
                        .attr(this._attribute.text);

            this.group.add(this.rect);
            this.group.add(this.text);
        },

        move: function () {},

        foucs: function () {},

        blur: function () {},

        //event

        click: function () {},

        drag: function () {},

        debug: function () {}
    };

    return Node;
});