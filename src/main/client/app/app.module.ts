/// <reference path="../typings/index.d.ts" />
// import 'jquery';
import * as angular from 'angular';
import '../bower_components/angular-smart-table/dist/smart-table.min.js';
import 'angular-ui-router';
import 'templates';


import ILocationProvider = angular.ILocationProvider;
import IUrlRouterProvider = angular.ui.IUrlRouterProvider;

import bookMgmtModuleName from './book-mgmt/book-mgmt.module'
import orderMgmtModuleName from './order-mgmt/order-mgmt.module'
import workerMgmtModuleName from './worker-mgmt/worker-mgmt.module'
import eventMgmtModuleName from './event-mgmt/event-mgmt.module'
import mainPageModuleName from './main-page/main-page.module'

angular.module('app', [mainPageModuleName, bookMgmtModuleName,orderMgmtModuleName, workerMgmtModuleName, eventMgmtModuleName, 'smart-table'])
  .config(function ($urlRouterProvider:IUrlRouterProvider, $locationProvider:ILocationProvider) {
    // $urlRouterProvider.when('', '/book-mgmt/book');
    $locationProvider.html5Mode(false);    //tutaj zeby mozna bylo z # cos todo dopytac o co kaman z tym
  });
