"use strict";
var event_service_1 = require("./event.service");
var eventRestService_service_1 = require("../general/rest-services/eventRestService.service");
var event_overview_state_def_1 = require("./event-overview/event-overview.state-def");
var event_overview_controller_1 = require("./event-overview/event-overview.controller");
var eventMgmtModule = angular.module('event-mgmt', ['ui.router'])
    .config(function ($stateProvider) {
    event_overview_state_def_1.addEventOverviewStateDef($stateProvider);
})
    .controller('eventOverviewCtrl', event_overview_controller_1.EventOverviewCtrl)
    .service('eventService', event_service_1.EventService)
    .service('eventRestService', eventRestService_service_1.EventRestService);
exports.__esModule = true;
exports["default"] = eventMgmtModule.name;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQtbWdtdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHlDQUErQixtREFBbUQsQ0FBQyxDQUFBO0FBQ25GLHlDQUF1QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ25GLDBDQUFnQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBRzdFLElBQUksZUFBZSxHQUFZLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDdkUsTUFBTSxDQUFDLFVBQVUsY0FBOEI7SUFDOUMsbURBQXdCLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDMUMsQ0FBQyxDQUFDO0tBQ0QsVUFBVSxDQUFDLG1CQUFtQixFQUFFLDZDQUFpQixDQUFDO0tBQ2xELE9BQU8sQ0FBQyxjQUFjLEVBQUUsNEJBQVksQ0FBQztLQUNyQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsMkNBQWdCLENBQUMsQ0FBQztBQUNqRDtxQkFBZSxlQUFlLENBQUMsSUFBSSxDQUFDIiwiZmlsZSI6ImV2ZW50LW1nbXQvZXZlbnQtbWdtdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
