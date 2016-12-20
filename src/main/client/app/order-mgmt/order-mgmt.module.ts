/// <reference path="../../typings/globals/angular/index.d.ts" />
import * as angular from 'angular';
import IModule = angular.IModule;
import {IStateProvider} from "angular-ui-router";
import {OrderService} from "./order.service";
import {OrderRestService} from "../general/rest-services/orderRestService.service";
import {OrderOverviewCtrl} from "./order-overview/order-overview.controller";
import {addOrderOverviewStateDef} from "./order-overview/order-overview.state-def";


let orderMgmtModule: IModule = angular.module('order-mgmt', [
  'ui.router', 'ui.bootstrap'
])
  .config(function ($stateProvider: IStateProvider) {
    addOrderOverviewStateDef($stateProvider)
  })
  .controller('OrderOverviewCtrl', OrderOverviewCtrl)
  .service('orderService', OrderService)
  .service('orderRestService', OrderRestService);
export default orderMgmtModule.name;
