"use strict";
var OrderService = (function () {
    function OrderService(orderRestService) {
        this.orderRestService = orderRestService;
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
    return OrderService;
}());
exports.OrderService = OrderService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUE0REUsc0JBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBM0Q5QyxXQUFNLEdBQVk7WUFDeEI7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxnQkFBZ0I7YUFDdkI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLEtBQUssRUFBRSxTQUFTO2dCQUNoQixRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRSxnQkFBZ0I7YUFDdkI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxTQUFTO2dCQUNoQixRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLGdCQUFnQjthQUN2QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLGdCQUFnQjthQUN2QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLGdCQUFnQjthQUN2QjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLGdCQUFnQjthQUN2QjtTQUVGLENBQUM7UUFDTSxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBSXRCLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxLQUFZO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekMsb0JBQW9CO0lBQ3RCLENBQUM7SUFDSCxtQkFBQztBQUFELENBcEZBLEFBb0ZDLElBQUE7QUFwRlksb0JBQVksZUFvRnhCLENBQUEiLCJmaWxlIjoib3JkZXItbWdtdC9vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
