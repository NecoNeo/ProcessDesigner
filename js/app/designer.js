define(['jquery', 'raphael', 'text!config/config.json'],
    function ($, Raphael, Config) {
        "use strict";
        return function () {
            console.log(JSON.parse(Config));
        };
    }
);