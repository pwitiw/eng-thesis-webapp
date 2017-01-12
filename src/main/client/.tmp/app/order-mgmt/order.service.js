"use strict";
var OrderService = (function () {
    function OrderService(orderRestService, workerRestService, customerRestService, $uibModal) {
        this.orderRestService = orderRestService;
        this.workerRestService = workerRestService;
        this.customerRestService = customerRestService;
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
    OrderService.prototype.findCustomers = function () {
        return this.customerRestService.getCustomers();
    };
    OrderService.prototype.openModal = function (order, positions, customers) {
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
                },
                customers: function () {
                    return customers;
                }
            }
        };
        return that.$uibModal.open(modalObject).result;
    };
    OrderService.prototype.openComponentModal = function (order, orderName) {
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
                },
                orderName: function () {
                    return orderName;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0E7SUFFRSxzQkFBb0IsZ0JBQWtDLEVBQVUsaUJBQW9DLEVBQVUsbUJBQXdDLEVBQVUsU0FBYztRQUExSixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFLO0lBRTlLLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLEVBQVUsRUFBRSxLQUFZO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLEVBQVU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQscUNBQWMsR0FBZCxVQUFlLEVBQVU7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELG9DQUFhLEdBQWI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUztRQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxXQUFXLEdBQUc7WUFDaEIsU0FBUyxFQUFFLElBQUk7WUFDZixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7WUFDOUIsV0FBVyxFQUFFLGtEQUFrRDtZQUMvRCxJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUU7b0JBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDZixDQUFDO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNuQixDQUFDO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNuQixDQUFDO2FBQ0Y7U0FDRixDQUFDO1FBR0YsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNqRCxDQUFDO0lBR0QseUNBQWtCLEdBQWxCLFVBQW1CLEtBQUssRUFBRSxTQUFTO1FBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLFdBQVcsR0FBRztZQUNoQixTQUFTLEVBQUUsSUFBSTtZQUNmLFVBQVUsRUFBRSxxQkFBcUI7WUFDakMsWUFBWSxFQUFFLHFCQUFxQjtZQUNuQyxXQUFXLEVBQUUsdURBQXVEO1lBQ3BFLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRTtvQkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNmLENBQUM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ25CLENBQUM7YUFDRjtTQUNGLENBQUM7UUFFRixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyRCxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUk7UUFDdkIsT0FBTztRQUNQLFVBQVUsTUFBTTtRQUVoQixDQUFDO1FBQ0QsU0FBUztRQUNULFVBQVUsTUFBTTtRQUVoQixDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUFFSCxtQkFBQztBQUFELENBeEdBLEFBd0dDLElBQUE7QUF4R1ksb0JBQVksZUF3R3hCLENBQUEiLCJmaWxlIjoib3JkZXItbWdtdC9vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
