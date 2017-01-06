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
    OrderService.prototype.edit = function (id, order) {
        this.orderRestService.edit(id, order);
    };
    OrderService.prototype.delete = function (id) {
        this.orderRestService.delete(id);
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
                var newOrder = {
                    id: result.id,
                    name: result.name,
                    customer: result.customer,
                    position: result.position,
                    date: result.date,
                    express: result.express,
                    active: result.active
                };
                that.edit(result.id, newOrder);
            }, 
            //dismiss
            function (result) {
            });
        });
    };
    OrderService.prototype.openComponentModal = function (components) {
        var that = this;
        var modalObject = {
            animation: true,
            controller: 'ComponentsModalCtrl',
            controllerAs: 'componentsModalCtrl',
            templateUrl: 'order-mgmt/components-modal/components-modal.tpl.html',
            size: 'lg',
            resolve: {
                components: function () {
                    return components;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFhRSxzQkFBb0IsZ0JBQWtDLEVBQVUsaUJBQW9DLEVBQVUsU0FBYztRQUF4RyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFacEgsVUFBSyxHQUFRO1lBQ25CLEVBQUUsRUFBRSxJQUFJO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixRQUFRLEVBQUUsRUFBRTtZQUNaLFFBQVEsRUFBRSxFQUFFO1lBQ1osSUFBSSxFQUFFLEVBQUU7WUFDUixPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUM7SUFJRixDQUFDO0lBR0QsMkJBQUksR0FBSixVQUFLLEVBQVUsRUFBRSxLQUFZO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELHFDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsU0FBUztZQUMzRCxJQUFJLFdBQVcsR0FBRztnQkFDaEIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsVUFBVSxFQUFFLGdCQUFnQjtnQkFDNUIsWUFBWSxFQUFFLGdCQUFnQjtnQkFDOUIsV0FBVyxFQUFFLGtEQUFrRDtnQkFDL0QsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFO29CQUNQLEtBQUssRUFBRTt3QkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNmLENBQUM7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULE1BQU0sQ0FBQyxTQUFTLENBQUM7b0JBQ25CLENBQUM7aUJBQ0Y7YUFDRixDQUFDO1lBR0YsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFHckQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ3ZCLE9BQU87WUFDUCxVQUFVLE1BQU07Z0JBQ2QsSUFBSSxRQUFRLEdBQUc7b0JBQ2IsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO29CQUNiLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtvQkFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO29CQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7b0JBQ3pCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtvQkFDakIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO29CQUN2QixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07aUJBQ3RCLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFTLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFDRCxTQUFTO1lBQ1QsVUFBVSxNQUFNO1lBRWhCLENBQUMsQ0FDRixDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QseUNBQWtCLEdBQWxCLFVBQW1CLFVBQVU7UUFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksV0FBVyxHQUFHO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLHFCQUFxQjtZQUNqQyxZQUFZLEVBQUUscUJBQXFCO1lBQ25DLFdBQVcsRUFBRSx1REFBdUQ7WUFDcEUsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUU7Z0JBQ1AsVUFBVSxFQUFFO29CQUNWLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQ3BCLENBQUM7YUFDRjtTQUNGLENBQUM7UUFFRixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyRCxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUk7UUFDdkIsT0FBTztRQUNQLFVBQVUsTUFBTTtRQUVoQixDQUFDO1FBQ0QsU0FBUztRQUNULFVBQVUsTUFBTTtRQUVoQixDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUFFSCxtQkFBQztBQUFELENBdkhBLEFBdUhDLElBQUE7QUF2SFksb0JBQVksZUF1SHhCLENBQUEiLCJmaWxlIjoib3JkZXItbWdtdC9vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
