"use strict";
var OrderService = (function () {
    function OrderService(orderRestService, workerRestService, $uibModal) {
        this.orderRestService = orderRestService;
        this.workerRestService = workerRestService;
        this.$uibModal = $uibModal;
    }
    OrderService.prototype.synchronize = function () {
        return this.orderRestService.synchronize();
    };
    OrderService.prototype.edit = function (id, order) {
        return this.orderRestService.edit(id, order);
    };
    OrderService.prototype.delete = function (id) {
        return this.orderRestService.delete(id);
    };
    OrderService.prototype.changeType = function (id) {
        return this.orderRestService.changeType(id);
    };
    OrderService.prototype.findOne = function (id) {
        return this.orderRestService.getOrder(id);
    };
    OrderService.prototype.findAll = function () {
        return this.orderRestService.getOrders();
    };
    OrderService.prototype.findComponents = function (id) {
        return this.orderRestService.getComponent(id);
    };
    OrderService.prototype.findPositions = function () {
        return this.workerRestService.getPositions();
    };
    OrderService.prototype.openModal = function (order, positions) {
        var that = this;
        var modalObject = {
            animation: true,
            controller: 'OrderModalCtrl',
            controllerAs: 'orderModalCtrl',
            templateUrl: 'order-mgmt/components-modal/order-modal.tpl.html',
            size: 'md',
            backdrop: 'static',
            resolve: {
                order: function () {
                    return order;
                },
                positions: function () {
                    return positions;
                }
            }
        };
        return that.$uibModal.open(modalObject).result;
    };
    OrderService.prototype.openComponentModal = function (order) {
        var that = this;
        var modalObject = {
            animation: true,
            controller: 'ComponentsModalCtrl',
            controllerAs: 'componentsModalCtrl',
            templateUrl: 'order-mgmt/components-modal/components-modal.tpl.html',
            size: 'lg',
            backdrop: 'static',
            resolve: {
                order: function () {
                    return order;
                }
            }
        };
        var modalInstance = this.$uibModal.open(modalObject);
        modalInstance.result.then(
        //close
        function (result) {
        }, 
        //dismiss
        function (result) {
        });
    };
    return OrderService;
}());
exports.OrderService = OrderService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFFRSxzQkFBb0IsZ0JBQWtDLEVBQVUsaUJBQW9DLEVBQVUsU0FBYztRQUF4RyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQUs7SUFFNUgsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssRUFBVSxFQUFFLEtBQVk7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsRUFBVTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxxQ0FBYyxHQUFkLFVBQWUsRUFBVTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxLQUFLLEVBQUUsU0FBUztRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxXQUFXLEdBQUc7WUFDaEIsU0FBUyxFQUFFLElBQUk7WUFDZixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7WUFDOUIsV0FBVyxFQUFFLGtEQUFrRDtZQUMvRCxJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUU7b0JBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDZixDQUFDO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNuQixDQUFDO2FBQ0Y7U0FDRixDQUFDO1FBR0YsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNqRCxDQUFDO0lBR0QseUNBQWtCLEdBQWxCLFVBQW1CLEtBQUs7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksV0FBVyxHQUFHO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLHFCQUFxQjtZQUNqQyxZQUFZLEVBQUUscUJBQXFCO1lBQ25DLFdBQVcsRUFBRSx1REFBdUQ7WUFDcEUsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFO29CQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2YsQ0FBQzthQUNGO1NBQ0YsQ0FBQztRQUVGLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJELGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUN2QixPQUFPO1FBQ1AsVUFBVSxNQUFNO1FBRWhCLENBQUM7UUFDRCxTQUFTO1FBQ1QsVUFBVSxNQUFNO1FBRWhCLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVILG1CQUFDO0FBQUQsQ0E5RkEsQUE4RkMsSUFBQTtBQTlGWSxvQkFBWSxlQThGeEIsQ0FBQSIsImZpbGUiOiJvcmRlci1tZ210L29yZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
