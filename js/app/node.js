define(['jquery', 'line'], function ($, Line) {
    "use strict";
    var Node = function () {};

    Node.prototype = {
        constructor: Node,

        //behavior

        init: function () {},

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