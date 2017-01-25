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
    OrderService.prototype.deleteModal = function () {
        var that = this;
        var modalObject = {
            animation: true,
            controller: 'DeleteModalCtrl',
            controllerAs: 'deleteModalCtrl',
            templateUrl: 'general/template/delete-modal.tpl.html',
            size: 'sm',
            backdrop: 'static',
            resolve: {}
        };
        return that.$uibModal.open(modalObject).result;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0E7SUFFRSxzQkFBb0IsZ0JBQWtDLEVBQ2xDLGlCQUFvQyxFQUNwQyxtQkFBd0MsRUFDeEMsU0FBYztRQUhkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGNBQVMsR0FBVCxTQUFTLENBQUs7SUFFbEMsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssRUFBVSxFQUFFLEtBQVk7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksV0FBVyxHQUFHO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1lBQy9CLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixPQUFPLEVBQUUsRUFDUjtTQUNGLENBQUM7UUFHRixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2pELENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcs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
