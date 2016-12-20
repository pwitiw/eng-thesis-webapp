/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';
import '../bower_components/angular-smart-table/dist/smart-table.min.js';
import 'angular-ui-router';
import 'templates';
//import 'angular-translate';
import 'templates';
import 'angular-ui-bootstrap';

import ILocationProvider = angular.ILocationProvider;
import IUrlRouterProvider = angular.ui.IUrlRouterProvider;

import bookMgmtModuleName from './book-mgmt/book-mgmt.module'
import orderMgmtModuleName from './order-mgmt/order-mgmt.module'
import workerMgmtModuleName from './worker-mgmt/worker-mgmt.module'
import eventMgmtModuleName from './event-mgmt/event-mgmt.module'
import mainPageModuleName from './main-page/main-page.module'
import any = jasmine.any;

angular.module('app', [
  mainPageModuleName,
  bookMgmtModuleName,
  orderMgmtModuleName,
  workerMgmtModuleName,
  eventMgmtModuleName,
  'smart-table',
  'ui.bootstrap'
])
  .config(function ($urlRouterProvider: IUrlRouterProvider, $locationProvider: ILocationProvider) {
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
    $locationProvider.html5Mode(false);    //tutaj zeby mozna bylo z # cos todo dopytac o co kaman z tym
  });

