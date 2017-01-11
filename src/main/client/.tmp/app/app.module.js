/// <reference path="../typings/index.d.ts" />
"use strict";
var angular = require('angular');
require('../bower_components/angular-smart-table/dist/smart-table.min.js');
require('angular-ui-router');
require('templates');
//import 'angular-translate';
require('templates');
require('angular-ui-bootstrap');
var order_mgmt_module_1 = require('./order-mgmt/order-mgmt.module');
var worker_mgmt_module_1 = require('./worker-mgmt/worker-mgmt.module');
var event_mgmt_module_1 = require('./event-mgmt/event-mgmt.module');
var customer_mgmt_module_1 = require('./customer-mgmt/customer-mgmt.module');
var main_page_module_1 = require('./main-page/main-page.module');
angular.module('app', [
    main_page_module_1["default"],
    order_mgmt_module_1["default"],
    worker_mgmt_module_1["default"],
    event_mgmt_module_1["default"],
    customer_mgmt_module_1["default"],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOztBQUU5QyxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNuQyxRQUFPLGlFQUFpRSxDQUFDLENBQUE7QUFDekUsUUFBTyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzNCLFFBQU8sV0FBVyxDQUFDLENBQUE7QUFDbkIsNkJBQTZCO0FBQzdCLFFBQU8sV0FBVyxDQUFDLENBQUE7QUFDbkIsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBSzlCLGtDQUFnQyxnQ0FDaEMsQ0FBQyxDQUQrRDtBQUNoRSxtQ0FBaUMsa0NBQ2pDLENBQUMsQ0FEa0U7QUFDbkUsa0NBQWdDLGdDQUNoQyxDQUFDLENBRCtEO0FBQ2hFLHFDQUFtQyxzQ0FDbkMsQ0FBQyxDQUR3RTtBQUN6RSxpQ0FBK0IsOEJBQy9CLENBQUMsQ0FENEQ7QUFHN0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7SUFDcEIsNkJBQWtCO0lBQ2xCLDhCQUFtQjtJQUNuQiwrQkFBb0I7SUFDcEIsOEJBQW1CO0lBQ25CLGlDQUFzQjtJQUN0QixhQUFhO0lBQ2IsY0FBYztDQUNmLENBQUM7S0FDQyxNQUFNLENBQUMsVUFBVSxrQkFBc0MsRUFBRSxpQkFBb0M7SUFDNUYseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQyw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLGtEQUFrRDtJQUNsRCx5QkFBeUI7SUFDekIsUUFBUTtJQUNSLFFBQVE7SUFDUixLQUFLO0lBQ0wsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBSSw2REFBNkQ7QUFDdEcsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
