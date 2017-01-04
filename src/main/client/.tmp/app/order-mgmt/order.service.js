"use strict";
var OrderService = (function () {
    function OrderService(orderRestService, $uibModal) {
        this.orderRestService = orderRestService;
        this.$uibModal = $uibModal;
        this.order = {
            id: null,
            name: '',
            customer: '',
            position: '',
            color: '',
            date: '',
            express: '',
            lastUpdate: '',
            parentId: null
        };
    }
    OrderService.prototype.save = function (order) {
        //this.orderRestService.save(order);
    };
    OrderService.prototype.delete = function (id) {
        //this.orderRestService.delete(id);
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
    OrderService.prototype.openModal = function (order) {
        var that = this;
        var modalObject = {
            animation: true,
            controller: 'OrderModalCtrl',
            controllerAs: 'orderModalCtrl',
            templateUrl: 'order-mgmt/components-modal/order-modal.tpl.html',
            size: 'md',
            resolve: {
                order: order
            }
        };
        var modalInstance = this.$uibModal.open(modalObject);
        modalInstance.result.then(
        //close
        function (result) {
            var newOrder = {
                id: 78,
                orderId: result.orderId,
                customer: result.customer,
                color: result.color,
                position: result.position,
                type: result.type,
                date: result.date
            };
            that.save(newOrder);
        }, 
        //dismiss
        function (result) {
        });
    };
    return OrderService;
}());
exports.OrderService = OrderService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFhRSxzQkFBb0IsZ0JBQWtDLEVBQVUsU0FBYztRQUExRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBSztRQVp0RSxVQUFLLEdBQVE7WUFDbkIsRUFBRSxFQUFFLElBQUk7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLFFBQVEsRUFBRSxFQUFFO1lBQ1osUUFBUSxFQUFFLEVBQUU7WUFDWixLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxFQUFFO1lBQ1IsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsRUFBRTtZQUNkLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztJQUlGLENBQUM7SUFHRCwyQkFBSSxHQUFKLFVBQUssS0FBWTtRQUNmLG9DQUFvQztJQUN0QyxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixtQ0FBbUM7SUFDckMsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksV0FBVyxHQUFHO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixZQUFZLEVBQUUsZ0JBQWdCO1lBQzlCLFdBQVcsRUFBRSxrREFBa0Q7WUFDL0QsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFLEtBQUs7YUFDYjtTQUNGLENBQUM7UUFFRixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyRCxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUk7UUFDdkIsT0FBTztRQUNQLFVBQVUsTUFBTTtZQUNkLElBQUksUUFBUSxHQUFHO2dCQUNiLEVBQUUsRUFBRSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztnQkFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO2dCQUN6QixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7Z0JBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtnQkFDekIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2dCQUNqQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7YUFDbEIsQ0FBQztZQUNGLElBQUksQ0FBQyxJQUFJLENBQVEsUUFBUSxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUNELFNBQVM7UUFDVCxVQUFVLE1BQU07UUFFaEIsQ0FBQyxDQUNGLENBQUE7SUFDSCxDQUFDO0lBR0gsbUJBQUM7QUFBRCxDQTVFQSxBQTRFQyxJQUFBO0FBNUVZLG9CQUFZLGVBNEV4QixDQUFBIiwiZmlsZSI6Im9yZGVyLW1nbXQvb3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
