"use strict";
/// <reference path="../../typings/globals/angular/index.d.ts" />
var angular = require('angular');
var order_service_1 = require("./order.service");
var orderRestService_service_1 = require("../general/rest-services/orderRestService.service");
var order_overview_controller_1 = require("./order-overview/order-overview.controller");
var order_overview_state_def_1 = require("./order-overview/order-overview.state-def");
var order_modal_controller_1 = require("./order-modal/order-modal.controller");
var delete_modal_controller_1 = require("../general/template/delete-modal.controller");
var components_modal_controller_1 = require("./components-modal/components-modal.controller");
var toast_service_1 = require("../general/toast/toast.service");
var order_modal_directive_1 = require("./order-modal/order-modal.directive");
var orderMgmtModule = angular.module('order-mgmt', [
    'ui.router', 'ui.bootstrap'
])
    .config(function ($stateProvider) {
    order_overview_state_def_1.addOrderOverviewStateDef($stateProvider);
})
    .controller('OrderOverviewCtrl', order_overview_controller_1.OrderOverviewCtrl)
    .controller('OrderModalCtrl', order_modal_controller_1.OrderModalCtrl)
    .controller('ComponentsModalCtrl', components_modal_controller_1.ComponentsModalCtrl)
    .controller('DeleteModalCtrl', delete_modal_controller_1.DeleteModalCtrl)
    .service('orderService', order_service_1.OrderService)
    .service('orderRestService', orderRestService_service_1.OrderRestService)
    .service('toastService', toast_service_1.ToastService)
    .directive('orderModal', order_modal_directive_1.OrderModalDirective);
exports.__esModule = true;
exports["default"] = orderMgmtModule.name;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXItbWdtdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlFQUFpRTtBQUNqRSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUduQyw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx5Q0FBK0IsbURBQW1ELENBQUMsQ0FBQTtBQUNuRiwwQ0FBZ0MsNENBQTRDLENBQUMsQ0FBQTtBQUM3RSx5Q0FBdUMsMkNBQTJDLENBQUMsQ0FBQTtBQUNuRix1Q0FBNkIsc0NBQXNDLENBQUMsQ0FBQTtBQUNwRSx3Q0FBOEIsNkNBQTZDLENBQUMsQ0FBQTtBQUM1RSw0Q0FBa0MsZ0RBQWdELENBQUMsQ0FBQTtBQUNuRiw4QkFBMkIsZ0NBQWdDLENBQUMsQ0FBQTtBQUM1RCxzQ0FBa0MscUNBQXFDLENBQUMsQ0FBQTtBQUV4RSxJQUFJLGVBQWUsR0FBWSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtJQUMxRCxXQUFXLEVBQUUsY0FBYztDQUM1QixDQUFDO0tBQ0MsTUFBTSxDQUFDLFVBQVUsY0FBOEI7SUFDOUMsbURBQXdCLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDMUMsQ0FBQyxDQUFDO0tBQ0QsVUFBVSxDQUFDLG1CQUFtQixFQUFFLDZDQUFpQixDQUFDO0tBQ2xELFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSx1Q0FBYyxDQUFDO0tBQzVDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxpREFBbUIsQ0FBQztLQUN0RCxVQUFVLENBQUMsaUJBQWlCLEVBQUUseUNBQWUsQ0FBQztLQUM5QyxPQUFPLENBQUMsY0FBYyxFQUFFLDRCQUFZLENBQUM7S0FDckMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLDJDQUFnQixDQUFDO0tBQzdDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsNEJBQVksQ0FBQztLQUNyQyxTQUFTLENBQUMsWUFBWSxFQUFDLDJDQUFtQixDQUFDLENBQUM7QUFDL0M7cUJBQWUsZUFBZSxDQUFDLElBQUksQ0FBQyIsImZpbGUiOiJvcmRlci1tZ210L29yZGVyLW1nbXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
