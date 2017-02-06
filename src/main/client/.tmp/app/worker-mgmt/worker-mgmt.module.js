"use strict";
var worker_service_1 = require("./worker.service");
var workerRestService_service_1 = require("../general/rest-services/workerRestService.service");
var worker_overview_controller_1 = require("./worker-overview/worker-overview.controller");
var worker_overview_state_def_1 = require("./worker-overview/worker-overview.state-def");
var worker_modal_controller_1 = require("./worker-modal/worker-modal.controller");
var toast_service_1 = require("../general/toast/toast.service");
var workerMgmtModule = angular.module('worker-mgmt', ['ui.router', 'ui.bootstrap'])
    .config(function ($stateProvider) {
    worker_overview_state_def_1.addWorkerOverviewStateDef($stateProvider);
})
    .controller('WorkerOverviewCtrl', worker_overview_controller_1.WorkerOverviewCtrl)
    .controller('WorkerModalCtrl', worker_modal_controller_1.WorkerModalCtrl)
    .service('workerService', worker_service_1.WorkerService)
    .service('workerRestService', workerRestService_service_1.WorkerRestService)
    .service('toastService', toast_service_1.ToastService);
exports.__esModule = true;
exports["default"] = workerMgmtModule.name;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci1tZ210Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MsMENBQWdDLG9EQUFvRCxDQUFDLENBQUE7QUFDckYsMkNBQWlDLDhDQUE4QyxDQUFDLENBQUE7QUFDaEYsMENBQXdDLDZDQUE2QyxDQUFDLENBQUE7QUFDdEYsd0NBQThCLHdDQUF3QyxDQUFDLENBQUE7QUFDdkUsOEJBQTJCLGdDQUFnQyxDQUFDLENBQUE7QUFFNUQsSUFBSSxnQkFBZ0IsR0FBWSxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztLQUN6RixNQUFNLENBQUMsVUFBVSxjQUE4QjtJQUM5QyxxREFBeUIsQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUMzQyxDQUFDLENBQUM7S0FDRCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsK0NBQWtCLENBQUM7S0FDcEQsVUFBVSxDQUFDLGlCQUFpQixFQUFFLHlDQUFlLENBQUM7S0FDOUMsT0FBTyxDQUFDLGVBQWUsRUFBRSw4QkFBYSxDQUFDO0tBQ3ZDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSw2Q0FBaUIsQ0FBQztLQUMvQyxPQUFPLENBQUMsY0FBYyxFQUFFLDRCQUFZLENBQUMsQ0FBQztBQUN6QztxQkFBZSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMiLCJmaWxlIjoid29ya2VyLW1nbXQvd29ya2VyLW1nbXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
