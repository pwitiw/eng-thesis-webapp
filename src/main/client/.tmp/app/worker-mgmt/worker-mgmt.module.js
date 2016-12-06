"use strict";
var worker_service_1 = require("./worker.service");
var workerRestService_service_1 = require("../general/rest-services/workerRestService.service");
var worker_overview_controller_1 = require("./worker-overview/worker-overview.controller");
var worker_overview_state_def_1 = require("./worker-overview/worker-overview.state-def");
var workerMgmtModule = angular.module('worker-mgmt', ['ui.router'])
    .config(function ($stateProvider) {
    worker_overview_state_def_1.addWorkerOverviewStateDef($stateProvider);
})
    .controller('WorkerOverviewCtrl', worker_overview_controller_1.WorkerOverviewCtrl)
    .service('workerService', worker_service_1.WorkerService)
    .service('workerRestService', workerRestService_service_1.WorkerRestService);
exports.__esModule = true;
exports["default"] = workerMgmtModule.name;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci1tZ210Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MsMENBQWdDLG9EQUFvRCxDQUFDLENBQUE7QUFDckYsMkNBQWlDLDhDQUE4QyxDQUFDLENBQUE7QUFDaEYsMENBQXdDLDZDQUE2QyxDQUFDLENBQUE7QUFHdEYsSUFBSSxnQkFBZ0IsR0FBWSxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3pFLE1BQU0sQ0FBQyxVQUFVLGNBQThCO0lBQzlDLHFEQUF5QixDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQzNDLENBQUMsQ0FBQztLQUNELFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSwrQ0FBa0IsQ0FBQztLQUNwRCxPQUFPLENBQUMsZUFBZSxFQUFFLDhCQUFhLENBQUM7S0FDdkMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLDZDQUFpQixDQUFDLENBQUM7QUFDbkQ7cUJBQWUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDIiwiZmlsZSI6Indvcmtlci1tZ210L3dvcmtlci1tZ210Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
