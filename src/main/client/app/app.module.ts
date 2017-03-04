/// <reference path="../typings/index.d.ts" />



import * as angular from 'angular';

import 'angular-smart-table';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-loading-bar';
import 'angular-ui-router';
import 'templates';
import 'angular-ui-bootstrap';
import 'bootstrap';


import ILocationProvider = angular.ILocationProvider;
import IUrlRouterProvider = angular.ui.IUrlRouterProvider;
import orderMgmtModuleName from './order-mgmt/order-mgmt.module'
import workerMgmtModuleName from './worker-mgmt/worker-mgmt.module'
import eventMgmtModuleName from './event-mgmt/event-mgmt.module'
import customerMgmtModuleName from './customer-mgmt/customer-mgmt.module'
import mainPageModuleName from './main-page/main-page.module'
import loginPageModuleName from './login-page/login-page.module'

import any = jasmine.any;

angular.module('app', [
  loginPageModuleName,
  mainPageModuleName,
  orderMgmtModuleName,
  workerMgmtModuleName,
  eventMgmtModuleName,
  customerMgmtModuleName,
  'smart-table',
  'ui.bootstrap',
  'ngMaterial',
  'ngAnimate',
  'angular-loading-bar'
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

