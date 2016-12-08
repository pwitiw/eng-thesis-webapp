"use strict";
/// <reference path="../typings/index.d.ts" />
// import 'jquery';
var angular = require('angular');
require('angular-ui-router');
require('templates');
var book_mgmt_module_1 = require('./book-mgmt/book-mgmt.module');
var order_mgmt_module_1 = require('./order-mgmt/order-mgmt.module');
var worker_mgmt_module_1 = require('./worker-mgmt/worker-mgmt.module');
var event_mgmt_module_1 = require('./event-mgmt/event-mgmt.module');
var main_page_module_1 = require('./main-page/main-page.module');
angular.module('app', [main_page_module_1["default"], book_mgmt_module_1["default"], order_mgmt_module_1["default"], worker_mgmt_module_1["default"], event_mgmt_module_1["default"]])
    .config(function ($urlRouterProvider, $locationProvider) {
    // $urlRouterProvider.when('', '/book-mgmt/book');
    $locationProvider.html5Mode(false); //tutaj zeby mozna bylo z # cos todo dopytac o co kaman z tym
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4QztBQUM5QyxtQkFBbUI7QUFDbkIsSUFBWSxPQUFPLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFDbkMsUUFBTyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzNCLFFBQU8sV0FBVyxDQUFDLENBQUE7QUFNbkIsaUNBQStCLDhCQUMvQixDQUFDLENBRDREO0FBQzdELGtDQUFnQyxnQ0FDaEMsQ0FBQyxDQUQrRDtBQUNoRSxtQ0FBaUMsa0NBQ2pDLENBQUMsQ0FEa0U7QUFDbkUsa0NBQWdDLGdDQUNoQyxDQUFDLENBRCtEO0FBQ2hFLGlDQUErQiw4QkFFL0IsQ0FBQyxDQUY0RDtBQUU3RCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLDZCQUFrQixFQUFFLDZCQUFrQixFQUFDLDhCQUFtQixFQUFFLCtCQUFvQixFQUFFLDhCQUFtQixDQUFDLENBQUM7S0FDM0gsTUFBTSxDQUFDLFVBQVUsa0JBQXFDLEVBQUUsaUJBQW1DO0lBQzFGLGtEQUFrRDtJQUNsRCxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBSSw2REFBNkQ7QUFDdEcsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
