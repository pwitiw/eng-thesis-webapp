/// <reference path="../../typings/globals/angular/index.d.ts" />
import IModule = angular.IModule;
import {IStateProvider} from "angular-ui-router";
import {WorkerService} from "./worker.service";
import {WorkerRestService} from "../general/rest-services/workerRestService.service";
import {WorkerOverviewCtrl} from "./worker-overview/worker-overview.controller";
import {addWorkerOverviewStateDef} from "./worker-overview/worker-overview.state-def";


let workerMgmtModule: IModule = angular.module('worker-mgmt', ['ui.router'])
  .config(function ($stateProvider: IStateProvider) {
    addWorkerOverviewStateDef($stateProvider)
  })
  .controller('WorkerOverviewCtrl', WorkerOverviewCtrl)
  .service('workerService', WorkerService)
  .service('workerRestService', WorkerRestService);
export default workerMgmtModule.name;

