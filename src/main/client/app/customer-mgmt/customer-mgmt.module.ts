/// <reference path="../../typings/globals/angular/index.d.ts" />
import IModule = angular.IModule;
import {IStateProvider} from "angular-ui-router";

import {CustomerService} from "./customer.service";
import {CustomerRestService} from "../general/rest-services/customerRestService.service";
import {CustomerOverviewCtrl} from "./customer-overview/customer-overview.controller";
import {addCustomerOverviewStateDef} from "./customer-overview/customer-overview.state-def";
import {CustomerModalCtrl} from "./components-modal/customer-modal.controller";
import {ToastService} from "../general/toast/toast.service";

let customerMgmtModule: IModule = angular.module('customer-mgmt', ['ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider: IStateProvider) {
    addCustomerOverviewStateDef($stateProvider)
  })
  .controller('CustomerOverviewCtrl', CustomerOverviewCtrl)
  .controller('CustomerModalCtrl', CustomerModalCtrl)
  .service('customerService', CustomerService)
  .service('customerRestService', CustomerRestService)
  .service('toastService', ToastService);
export default customerMgmtModule.name;

