"use strict";
/// <reference path="../typings/globals/angular/index.d.ts" />
var angular = require('angular');
require('angular-ui-router');
require('templates');
var book_mgmt_module_1 = require('./book-mgmt/book-mgmt.module');
var order_mgmt_module_1 = require('./order-mgmt/order-mgmt.module');
var worker_mgmt_module_1 = require('./worker-mgmt/worker-mgmt.module');
angular.module('app', [book_mgmt_module_1["default"], order_mgmt_module_1["default"], worker_mgmt_module_1["default"]])
    .config(function ($urlRouterProvider, $locationProvider) {
    // $urlRouterProvider.when('', '/book-mgmt/book');
    $locationProvider.html5Mode(false); //tutaj zeby mozna bylo z # cos todo dopytac o co kaman z tym
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhEQUE4RDtBQUM5RCxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUNuQyxRQUFPLG1CQUFtQixDQUFDLENBQUE7QUFDM0IsUUFBTyxXQUFXLENBQUMsQ0FBQTtBQUluQixpQ0FBK0IsOEJBQy9CLENBQUMsQ0FENEQ7QUFDN0Qsa0NBQWdDLGdDQUNoQyxDQUFDLENBRCtEO0FBQ2hFLG1DQUFpQyxrQ0FFakMsQ0FBQyxDQUZrRTtBQUVuRSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLDZCQUFrQixFQUFDLDhCQUFtQixFQUFFLCtCQUFvQixDQUFDLENBQUM7S0FDbEYsTUFBTSxDQUFDLFVBQVUsa0JBQXFDLEVBQUUsaUJBQW1DO0lBQzFGLGtEQUFrRDtJQUNsRCxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBSSw2REFBNkQ7QUFDdEcsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
