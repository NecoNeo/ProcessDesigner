requirejs.config({
    baseUrl: "./",
    paths: {
        'jquery'        : 'js/lib/jquery-1.11.1.min',
        'snap'          : 'js/lib/snap.svg',
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

requirejs(['jquery', 'snap', 'designer'], function ($, Snap, Designer) {
    "use strict";
    console.log('App Starting...\n\n');
    //$.noConflict(true);
    //delete window.$;
    Designer();
});

//Viewer();