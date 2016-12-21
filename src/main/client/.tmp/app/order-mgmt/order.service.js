"use strict";
var OrderService = (function () {
    function OrderService(orderRestService, $uibModal) {
        this.orderRestService = orderRestService;
        this.$uibModal = $uibModal;
        this.orders = [
            {
                id: 1,
                orderId: '001TW',
                customer: 'Bootstrap',
                color: 'RAL2010',
                position: 'FREZERNIA',
                type: 'EXPRESS',
                date: '20 - 04 - 2017'
            },
            {
                id: 2,
                orderId: '002TW',
                customer: 'Angular',
                color: 'RAL2610',
                position: 'FREZERNIA',
                type: 'NORMALNY',
                date: '20 - 04 - 2017'
            },
            {
                id: 3,
                orderId: '003TW',
                customer: 'CHmiel',
                color: 'RAL2010',
                position: 'FREZERNIA',
                type: 'EXPRESS',
                date: '20 - 04 - 2017'
            },
            {
                id: 4,
                orderId: '004TW',
                customer: 'Angular',
                color: 'RAL2310',
                position: 'FREZERNIA',
                type: 'NORMALNY',
                date: '20 - 04 - 2017'
            },
            {
                id: 5,
                orderId: '005TW',
                customer: 'Angular',
                color: 'RAL2010',
                position: 'FREZERNIA',
                type: 'NORMALNY',
                date: '20 - 04 - 2017'
            },
            {
                id: 6,
                orderId: '006TW',
                customer: 'CHmiel',
                color: 'RAL2010',
                position: 'FREZERNIA',
                type: 'NORMALNY',
                date: '20 - 04 - 2017'
            }
        ];
        this.sequencer = 1;
    }
    OrderService.prototype.getOrders = function () {
        return this.orders;
    };
    OrderService.prototype.save = function (order) {
        this.orderRestService.save(order);
    };
    OrderService.prototype.delete = function (id) {
        this.orderRestService.delete(id);
    };
    OrderService.prototype.findOne = function (id) {
        return this.orderRestService.getOrder(id);
    };
    OrderService.prototype.findAll = function () {
        return this.orderRestService.getOrders();
        //return this.books;
    };
    OrderService.prototype.openModal = function () {
        var modalObject = {
            animation: true,
            controller: 'ComponentsModalCtrl',
            controllerAs: 'componentsModalCtrl',
            templateUrl: 'order-mgmt/components-modal/components-modal.html',
            size: 'md',
            resolve: {}
        };
        return this.$uibModal.open(modalObject);
    };
    return OrderService;
}());
exports.OrderService = OrderService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUE0REUsc0JBQW9CLGdCQUFrQyxFQUFVLFNBQWM7UUFBMUQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQUs7UUEzRHRFLFdBQU0sR0FBWTtZQUN4QjtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLEtBQUssRUFBRSxTQUFTO2dCQUNoQixRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLGdCQUFnQjthQUN2QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLGdCQUFnQjthQUN2QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCO1NBRUYsQ0FBQztRQUNNLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFJdEIsQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLEtBQVk7UUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QyxvQkFBb0I7SUFDdEIsQ0FBQztJQUdELGdDQUFTLEdBQVQ7UUFDRSxJQUFJLFdBQVcsR0FBRztZQUNoQixTQUFTLEVBQUUsSUFBSTtZQUNmLFVBQVUsRUFBRSxxQkFBcUI7WUFDakMsWUFBWSxFQUFFLHFCQUFxQjtZQUNuQyxXQUFXLEVBQUUsbURBQW1EO1lBQ2hFLElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFFLEVBZ0JSO1NBQ0YsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBR0gsbUJBQUM7QUFBRCxDQW5IQSxBQW1IQyxJQUFBO0FBbkhZLG9CQUFZLGVBbUh4QixDQUFBIiwiZmlsZSI6Im9yZGVyLW1nbXQvb3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
