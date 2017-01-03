/// <reference path="../typings/index.d.ts" />
"use strict";
var angular = require('angular');
require('../bower_components/angular-smart-table/dist/smart-table.min.js');
require('angular-ui-router');
require('templates');
require('angular-ui-bootstrap');
var book_mgmt_module_1 = require('./book-mgmt/book-mgmt.module');
var order_mgmt_module_1 = require('./order-mgmt/order-mgmt.module');
var worker_mgmt_module_1 = require('./worker-mgmt/worker-mgmt.module');
var event_mgmt_module_1 = require('./event-mgmt/event-mgmt.module');
var main_page_module_1 = require('./main-page/main-page.module');
var login_page_module_1 = require('./login-page/login-page.module');
angular.module('app', [
    login_page_module_1["default"],
    main_page_module_1["default"],
    book_mgmt_module_1["default"],
    order_mgmt_module_1["default"],
    worker_mgmt_module_1["default"],
    event_mgmt_module_1["default"],
    'smart-table',
    'ui.bootstrap'
])
    .config(function ($urlRouterProvider, $locationProvider) {
    //todo to import,$translateProvider : any
    // let configureTranslations = function(){
    //   $translateProvider.useStaticFilesLoader({
    //     files: [
    //       {prefix: 'general/i18n/frontwit-labels-',
    //       suffix: '.json'}
    //     ]
    //   });
    // };
    $urlRouterProvider.when('', '/home');
    $locationProvider.html5Mode(false); //tutaj zeby mozna bylo z # cos todo dopytac o co kaman z tym
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOztBQUU5QyxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNuQyxRQUFPLGlFQUFpRSxDQUFDLENBQUE7QUFDekUsUUFBTyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzNCLFFBQU8sV0FBVyxDQUFDLENBQUE7QUFDbkIsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBSzlCLGlDQUErQiw4QkFDL0IsQ0FBQyxDQUQ0RDtBQUM3RCxrQ0FBZ0MsZ0NBQ2hDLENBQUMsQ0FEK0Q7QUFDaEUsbUNBQWlDLGtDQUNqQyxDQUFDLENBRGtFO0FBQ25FLGtDQUFnQyxnQ0FDaEMsQ0FBQyxDQUQrRDtBQUNoRSxpQ0FBK0IsOEJBQy9CLENBQUMsQ0FENEQ7QUFDN0Qsa0NBQWdDLGdDQUVoQyxDQUFDLENBRitEO0FBSWhFLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ3BCLDhCQUFtQjtJQUNuQiw2QkFBa0I7SUFDbEIsNkJBQWtCO0lBQ2xCLDhCQUFtQjtJQUNuQiwrQkFBb0I7SUFDcEIsOEJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0NBQ2YsQ0FBQztLQUNDLE1BQU0sQ0FBQyxVQUFVLGtCQUFzQyxFQUFFLGlCQUFvQztJQUM1Rix5Q0FBeUM7SUFDekMsMENBQTBDO0lBQzFDLDhDQUE4QztJQUM5QyxlQUFlO0lBQ2Ysa0RBQWtEO0lBQ2xELHlCQUF5QjtJQUN6QixRQUFRO0lBQ1IsUUFBUTtJQUNSLEtBQUs7SUFDTCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFJLDZEQUE2RDtBQUN0RyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
