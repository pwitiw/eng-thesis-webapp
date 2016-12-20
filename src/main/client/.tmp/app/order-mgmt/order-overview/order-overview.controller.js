"use strict";
var components_modal_controller_1 = require("../components-modal/components-modal.controller");
var OrderOverviewCtrl = (function () {
    function OrderOverviewCtrl(orderService, $modal) {
        this.orderService = orderService;
        this.$modal = $modal;
        this.orders = orderService.getOrders();
    }
    OrderOverviewCtrl.prototype.delete = function (id) {
        this.orderService.delete(id);
    };
    OrderOverviewCtrl.prototype.synchronize = function () {
        var modalInstance = this.$modal.open({
            templateUrl: 'components-modal.html',
            controller: components_modal_controller_1.ComponentsModalCtrl,
            bindToController: true,
            controllerAs: 'c'
        });
        modalInstance.result.then(function (selectedItem) {
        });
    };
    return OrderOverviewCtrl;
}());
exports.OrderOverviewCtrl = OrderOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXItb3ZlcnZpZXcvb3JkZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsNENBQWtDLGlEQUFpRCxDQUFDLENBQUE7QUFFcEY7SUFHRSwyQkFBb0IsWUFBMEIsRUFBVSxNQUFxQztRQUF6RSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQStCO1FBQzNGLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsSUFBSSxhQUFhLEdBQTBDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzFFLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsVUFBVSxFQUFFLGlEQUFtQjtZQUMvQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLFlBQVksRUFBRSxHQUFHO1NBQ2xCLENBQUMsQ0FBQztRQUVILGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsWUFBWTtRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx3QkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0QlkseUJBQWlCLG9CQXNCN0IsQ0FBQSIsImZpbGUiOiJvcmRlci1tZ210L29yZGVyLW92ZXJ2aWV3L29yZGVyLW92ZXJ2aWV3LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
