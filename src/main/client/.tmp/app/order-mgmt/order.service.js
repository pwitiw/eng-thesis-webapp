"use strict";
var OrderService = (function () {
    function OrderService(orderRestService, workerRestService, $uibModal) {
        this.orderRestService = orderRestService;
        this.workerRestService = workerRestService;
        this.$uibModal = $uibModal;
        this.order = {
            id: null,
            name: '',
            customer: '',
            position: '',
            date: '',
            express: null,
            lastUpdate: '',
            parentId: null,
            active: null
        };
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
    OrderService.prototype.openModal = function (order) {
        var that = this;
        this.workerRestService.getPositions().then(function (positions) {
            var modalObject = {
                animation: true,
                controller: 'OrderModalCtrl',
                controllerAs: 'orderModalCtrl',
                templateUrl: 'order-mgmt/components-modal/order-modal.tpl.html',
                size: 'md',
                resolve: {
                    order: function () {
                        return order;
                    },
                    positions: function () {
                        return positions;
                    }
                }
            };
            var modalInstance = that.$uibModal.open(modalObject);
            modalInstance.result.then(
            //close
            function (result) {
                that.edit(result.id, result);
            }, 
            //dismiss
            function (result) {
            });
        });
    };
    OrderService.prototype.openComponentModal = function (order) {
        var that = this;
        var modalObject = {
            animation: true,
            controller: 'ComponentsModalCtrl',
            controllerAs: 'componentsModalCtrl',
            templateUrl: 'order-mgmt/components-modal/components-modal.tpl.html',
            size: 'lg',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFhRSxzQkFBb0IsZ0JBQWtDLEVBQVUsaUJBQW9DLEVBQVUsU0FBYztRQUF4RyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFacEgsVUFBSyxHQUFRO1lBQ25CLEVBQUUsRUFBRSxJQUFJO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osSUFBSSxFQUFFLEVBQUU7WUFDUixPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUM7SUFJRixDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxFQUFVLEVBQUUsS0FBWTtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELHFDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsU0FBUztZQUMzRCxJQUFJLFdBQVcsR0FBRztnQkFDaEIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsVUFBVSxFQUFFLGdCQUFnQjtnQkFDNUIsWUFBWSxFQUFFLGdCQUFnQjtnQkFDOUIsV0FBVyxFQUFFLGtEQUFrRDtnQkFDL0QsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFO29CQUNQLEtBQUssRUFBRTt3QkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNmLENBQUM7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULE1BQU0sQ0FBQyxTQUFTLENBQUM7b0JBQ25CLENBQUM7aUJBQ0Y7YUFDRixDQUFDO1lBR0YsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFHckQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ3ZCLE9BQU87WUFDUCxVQUFVLE1BQU07Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFTLE1BQU0sQ0FBQyxDQUFBO1lBQ3JDLENBQUM7WUFDRCxTQUFTO1lBQ1QsVUFBVSxNQUFNO1lBRWhCLENBQUMsQ0FDRixDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QseUNBQWtCLEdBQWxCLFVBQW1CLEtBQUs7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksV0FBVyxHQUFHO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLHFCQUFxQjtZQUNqQyxZQUFZLEVBQUUscUJBQXFCO1lBQ25DLFdBQVcsRUFBRSx1REFBdUQ7WUFDcEUsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFO29CQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2YsQ0FBQzthQUNGO1NBQ0YsQ0FBQztRQUVGLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJELGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUN2QixPQUFPO1FBQ1AsVUFBVSxNQUFNO1FBRWhCLENBQUM7UUFDRCxTQUFTO1FBQ1QsVUFBVSxNQUFNO1FBRWhCLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVILG1CQUFDO0FBQUQsQ0FqSEEsQUFpSEMsSUFBQTtBQWpIWSxvQkFBWSxlQWlIeEIsQ0FBQSIsImZpbGUiOiJvcmRlci1tZ210L29yZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
