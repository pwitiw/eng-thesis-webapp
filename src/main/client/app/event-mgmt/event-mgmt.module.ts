/// <reference path="../../typings/globals/angular/index.d.ts" />
import IModule = angular.IModule;
import {IStateProvider} from "angular-ui-router";
import {EventService} from "./event.service";
import {EventRestService} from "../general/rest-services/eventRestService.service";
import {addEventOverviewStateDef} from "./event-overview/event-overview.state-def";
import {EventOverviewCtrl} from "./event-overview/event-overview.controller";


let eventMgmtModule: IModule = angular.module('event-mgmt', ['ui.router'])
  .config(function ($stateProvider: IStateProvider) {
    addEventOverviewStateDef($stateProvider)
  })
  .controller('eventOverviewCtrl', EventOverviewCtrl)
  .service('eventService', EventService)
  .service('eventRestService', EventRestService);
export default eventMgmtModule.name;
