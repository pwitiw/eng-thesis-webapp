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
            resolve: {
                text: function () {
                    return 'Jesteś pewien, że chcesz usunąć zamówienie?';
                }
            }
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
            templateUrl: 'order-mgmt/order-modal/order-modal.tpl.html',
            // template:'<order-modal></order-modal>',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0E7SUFFRSxzQkFBb0IsZ0JBQWtDLEVBQ2xDLGlCQUFvQyxFQUNwQyxtQkFBd0MsRUFDeEMsU0FBYztRQUhkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGNBQVMsR0FBVCxTQUFTLENBQUs7SUFFbEMsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssRUFBVSxFQUFFLEtBQVk7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksV0FBVyxHQUFHO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1lBQy9CLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFO29CQUNKLE1BQU0sQ0FBQyw2Q0FBNkMsQ0FBQztnQkFDdkQsQ0FBQzthQUNGO1NBQ0YsQ0FBQztRQUdGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDakQsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxN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
