requirejs.config({
    baseUrl: "./",
    paths: {
        'jquery'        : 'js/lib/jquery-1.11.1.min',
        'raphael'       : 'js/lib/raphael-min',
        'text'          : 'js/lib/text',
        'json'          : 'js/lib/json',
        'config'        : 'config/config',
        'designer'      : 'js/app/designer',
        'viewer'        : 'js/app/viewer',
        'canvas'        : 'js/app/canvas',
        'node'          : 'js/app/node',
        'line'          : 'js/app/line',
        'tools'         : 'js/app/tools',
        'properties'    : 'js/app/properties'
    },
    // shim: {
    //     'raphael': {
    //         exports: 'Raphael',
    //         init: function () {}
    //     }
    // },
    optimizeAllPluginResources: true
});

requirejs(['jquery', 'raphael', 'designer'], function ($, Raphael, Designer) {
    "use strict";
    $.noConflict(true);
    // console.log('Clean JQuery:' + (delete window.$));
    // console.log('Clean Raphael:' + (delete window.Raphael));
    // console.log($);
    // console.log(Raphael);
    delete window.$;
    delete window.Raphael;
    console.log('App Starting...');
    Designer();
});