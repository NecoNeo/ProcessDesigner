define(['jquery', 'raphael', 'config'],//'json!config/config.json'
    function ($, Raphael, Config) {
        "use strict";
        var version = "1.0 beta";

        var Viewer = function () {
            this.init();
        };

        Viewer.prototype = {
            constructor: Viewer,
            viewer: null,
            init: function () {
                Viewer.prototype.viewer = this;
                console.log('Viewer version: ' + version);
                console.log(Config);
            }
        };

        var ViewerFactory = function () {
            if (Viewer.prototype.viewer) {
                return Viewer.prototype.viewer;
            } else {
                return new Viewer();
            }
        };

        return ViewerFactory;
    }
);