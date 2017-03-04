"use strict";
var OrderService = (function () {
    function OrderService(orderRestService, workerRestService, customerRestService, $uibModal, toastService) {
        this.orderRestService = orderRestService;
        this.workerRestService = workerRestService;
        this.customerRestService = customerRestService;
        this.$uibModal = $uibModal;
        this.toastService = toastService;
        this.DELETE_ORDER_TEXT = 'Jesteś pewien, że chcesz usunąć zamówienie?';
        this.POSITIONS = this.findPositions().then(function (response) {
            return response.data;
        });
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
    OrderService.prototype.performDeleteOrder = function (id, callbackFn) {
        var _this = this;
        var result = false, modalObject = {
            animation: true,
            controller: 'DeleteModalCtrl',
            controllerAs: 'deleteModalCtrl',
            templateUrl: 'general/template/delete-modal.tpl.html',
            size: 'md',
            backdrop: 'static',
            resolve: {
                text: function () {
                    return _this.DELETE_ORDER_TEXT;
                }
            }
        };
        this.$uibModal.open(modalObject).result.then(function (deleteAction) {
            if (deleteAction) {
                return _this.delete(id).then(function (response) {
                    if (response.status == 200) {
                        _this.toastService.showSimpleToast("success", "Poprawnie usunięto zamówienie.");
                        callbackFn();
                    }
                    else
                        _this.toastService.showSimpleToast("error", response.data.message);
                });
            }
        });
    };
    OrderService.prototype.editOrderModal = function (order, positions, customers) {
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
        return this.$uibModal.open(modalObject).result;
    };
    OrderService.prototype.editComponentModal = function (order, orderName) {
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
            console.log(result);
        }, 
        //dismiss
        function (result) {
            console.log(result);
        });
    };
    return OrderService;
}());
exports.OrderService = OrderService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBT0E7SUFLRSxzQkFBb0IsZ0JBQWtDLEVBQ2xDLGlCQUFvQyxFQUNwQyxtQkFBd0MsRUFDeEMsU0FBYyxFQUNkLFlBQTBCO1FBSjFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQVB0QyxzQkFBaUIsR0FBRyw2Q0FBNkMsQ0FBQztRQVF4RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ2pELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssRUFBVSxFQUFFLEtBQVk7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTyw2QkFBTSxHQUFkLFVBQWUsRUFBVTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLEVBQVU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2hCLE1B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QVUsRUFBRSxxQkFBcUI7WUFDakMsWUFBWSxFQUFFLHFCQUFxQjtZQUNuQyxXQUFXLEVBQUUsdURBQXVEO1lBQ3BFLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRTtvQkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNmLENBQUM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ25CLENBQUM7YUFDRjtTQUNGLENBQUM7UUFFRixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyRCxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUk7UUFDdkIsT0FBTztRQUNQLFVBQVUsTUFBTTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUNELFNBQVM7UUFDVCxVQUFVLE1BQU07WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVILG1CQUFDO0FBQUQsQ0ExSUEsQUEwSUMsSUFBQTtBQTFJWSxvQkFBWSxlQTBJeEIsQ0FBQSIsImZpbGUiOiJvcmRlci1tZ210L29yZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
