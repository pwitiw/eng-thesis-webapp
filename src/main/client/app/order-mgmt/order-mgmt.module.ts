/// <reference path="../../typings/globals/angular/index.d.ts" />
import * as angular from 'angular';
import IModule = angular.IModule;
import {IStateProvider} from "angular-ui-router";
import {OrderService} from "./order.service";
import {OrderRestService} from "../general/rest-services/orderRestService.service";
import {OrderOverviewCtrl} from "./order-overview/order-overview.controller";
import {addOrderOverviewStateDef} from "./order-overview/order-overview.state-def";
import {OrderModalCtrl} from "./components-modal/order-modal.controller";
import {ComponentsModalCtrl} from "./components-modal/components-modal.controller";
import {ToastService} from "../general/toast/toast.service";

let orderMgmtModule: IModule = angular.module('order-mgmt', [
  'ui.router', 'ui.bootstrap'
])
  .config(function ($stateProvider: IStateProvider) {
    addOrderOverviewStateDef($stateProvider)
  })
  .controller('OrderOverviewCtrl', OrderOverviewCtrl)
  .controller('OrderModalCtrl', OrderModalCtrl)
  .controller('ComponentsModalCtrl', ComponentsModalCtrl)
  .service('orderService', OrderService)
  .service('orderRestService', OrderRestService)
  .service('toastService', ToastService);
export default orderMgmtModule.name;
