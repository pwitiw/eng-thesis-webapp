"use strict";
var event_service_1 = require("./event.service");
var eventRestService_service_1 = require("../general/rest-services/eventRestService.service");
var event_overview_controller_1 = require("./event-overview/event-overview.controller");
var event_overview_state_def_1 = require("./event-overview/event-overview.state-def");
var custom_table_directive_1 = require("../general/directives/custom-table/custom-table.directive");
var eventMgmtModule = angular.module('event-mgmt', ['ui.router'])
    .config(function ($stateProvider) {
    event_overview_state_def_1.addEventOverviewStateDef($stateProvider);
})
    .controller('EventOverviewCtrl', event_overview_controller_1.EventOverviewCtrl)
    .directive('customTable', custom_table_directive_1.CustomTableDirectiveFactory)
    .service('eventService', event_service_1.EventService)
    .service('eventRestService', eventRestService_service_1.EventRestService);
exports.__esModule = true;
exports["default"] = eventMgmtModule.name;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQtbWdtdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHlDQUErQixtREFBbUQsQ0FBQyxDQUFBO0FBQ25GLDBDQUFnQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBQzdFLHlDQUF1QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ25GLHVDQUEwQywyREFBMkQsQ0FBQyxDQUFBO0FBR3RHLElBQUksZUFBZSxHQUFZLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDdkUsTUFBTSxDQUFDLFVBQVUsY0FBOEI7SUFDOUMsbURBQXdCLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDMUMsQ0FBQyxDQUFDO0tBQ0QsVUFBVSxDQUFDLG1CQUFtQixFQUFFLDZDQUFpQixDQUFDO0tBQ2xELFNBQVMsQ0FBQyxhQUFhLEVBQUUsb0RBQTJCLENBQUM7S0FDckQsT0FBTyxDQUFDLGNBQWMsRUFBRSw0QkFBWSxDQUFDO0tBQ3JDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSwyQ0FBZ0IsQ0FBQyxDQUFDO0FBQ2pEO3FCQUFlLGVBQWUsQ0FBQyxJQUFJLENBQUMiLCJmaWxlIjoiZXZlbnQtbWdtdC9ldmVudC1tZ210Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
