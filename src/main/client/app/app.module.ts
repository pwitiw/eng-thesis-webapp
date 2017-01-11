/// <reference path="../typings/index.d.ts" />

import * as angular from 'angular';
import '../bower_components/angular-smart-table/dist/smart-table.min.js';
import '../bower_components/angular-aria/angular-aria.js';
import '../bower_components/angular-animate/angular-animate.js';
import '../bower_components/angular-material/angular-material.js';
import 'angular-ui-router';
import 'templates';
import 'angular-ui-bootstrap';

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
  'ngMaterial'
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

