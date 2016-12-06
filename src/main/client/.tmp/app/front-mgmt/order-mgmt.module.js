"use strict";
var order_service_1 = require("./order.service");
var OrderRestService_service_1 = require("../general/rest-services/OrderRestService.service");
var order_overview_state_def_1 = require("./order-overview/order-overview.state-def");
var order_overview_controller_1 = require("./order-overview/order-overview.controller");
var orderMgmtModule = angular.module('order-mgmt', ['ui.router'])
    .config(function ($stateProvider) {
    order_overview_state_def_1.addOrderOverviewStateDef($stateProvider);
})
    .controller('OrderOverviewCtrl', order_overview_controller_1.OrderOverviewCtrl)
    .service('orderService', order_service_1.OrderService)
    .service('orderRestService', OrderRestService_service_1.OrderRestService);
exports.__esModule = true;
exports["default"] = orderMgmtModule.name;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250LW1nbXQvb3JkZXItbWdtdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLHlDQUErQixtREFBbUQsQ0FBQyxDQUFBO0FBQ25GLHlDQUF1QywyQ0FBMkMsQ0FBQyxDQUFBO0FBQ25GLDBDQUFnQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBRzdFLElBQUksZUFBZSxHQUFZLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDdkUsTUFBTSxDQUFDLFVBQVUsY0FBOEI7SUFDOUMsbURBQXdCLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDMUMsQ0FBQyxDQUFDO0tBQ0QsVUFBVSxDQUFDLG1CQUFtQixFQUFFLDZDQUFpQixDQUFDO0tBQ2xELE9BQU8sQ0FBQyxjQUFjLEVBQUUsNEJBQVksQ0FBQztLQUNyQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsMkNBQWdCLENBQUMsQ0FBQztBQUNqRDtxQkFBZSxlQUFlLENBQUMsSUFBSSxDQUFDIiwiZmlsZSI6ImZyb250LW1nbXQvb3JkZXItbWdtdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
