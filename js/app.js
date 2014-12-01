requirejs.config({
    baseUrl: './',
    paths: {
        'jquery'        : 'js/lib/jquery-1.11.1.min',
        'raphael'       : 'js/lib/raphael-min',
        'text'          : 'js/lib/text',
        'designer'      : 'js/app/designer'
    },
    // shim: {
    //     'raphael': {
    //         exports: 'Raphael',
    //         init: function () {}
    //     }
    // },
    //optimizeAllPluginResources: true
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