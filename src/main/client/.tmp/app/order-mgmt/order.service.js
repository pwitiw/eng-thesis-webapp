"use strict";
var OrderService = (function () {
    function OrderService(orderRestService, $uibModal) {
        this.orderRestService = orderRestService;
        this.$uibModal = $uibModal;
        this.order = {
            orderId: '',
            customer: '',
            color: '',
            position: '',
            type: '',
            date: ''
        };
        this.orders = [
            {
                id: 1,
                orderId: '001TW',
                customer: 'Bootstrap',
                color: 'RAL2010',
                position: 'FREZERNIA',
                type: 'express',
                date: '20 - 04 - 2017'
            },
            {
                id: 2,
                orderId: '002TW',
                customer: 'Angular',
                color: 'RAL2610',
                position: 'FREZERNIA',
                type: 'normalny',
                date: '20 - 04 - 2017'
            },
            {
                id: 3,
                orderId: '003TW',
                customer: 'CHmiel',
                color: 'RAL2010',
                position: 'FREZERNIA',
                type: 'express',
                date: '20 - 04 - 2017'
            },
            {
                id: 4,
                orderId: '004TW',
                customer: 'Angular',
                color: 'RAL2310',
                position: 'FREZERNIA',
                type: 'normalny',
                date: '20 - 04 - 2017'
            },
            {
                id: 5,
                orderId: '005TW',
                customer: 'Angular',
                color: 'RAL2010',
                position: 'FREZERNIA',
                type: 'normalny',
                date: '20 - 04 - 2017'
            },
            {
                id: 6,
                orderId: '006TW',
                customer: 'CHmiel',
                color: 'RAL2010',
                position: 'FREZERNIA',
                type: 'normalny',
                date: '20 - 04 - 2017'
            }
        ];
        this.sequencer = 1;
    }
    OrderService.prototype.getOrders = function () {
        return this.orders;
    };
    OrderService.prototype.save = function (order) {
        this.orders.push(order);
        //this.orderRestService.save(order);
    };
    OrderService.prototype.delete = function (id) {
        this.orders.pop();
        //this.orderRestService.delete(id);
    };
    OrderService.prototype.findOne = function (id) {
        var order = this.orders[id - 1]; //-1, bo tablica obecnie
        this.order = {
            orderId: order.orderId,
            customer: order.customer,
            color: order.color,
            position: order.position,
            type: order.type,
            date: order.date
        };
        //return this.orderRestService.getOrder(id);
    };
    OrderService.prototype.findAll = function () {
        return this.orderRestService.getOrders();
        //return this.books;
    };
    OrderService.prototype.clearOrder = function () {
        this.order = {
            orderId: '',
            customer: '',
            color: '',
            position: '',
            type: '',
            date: ''
        };
    };
    OrderService.prototype.openModal = function () {
        var that = this;
        var modalObject = {
            animation: true,
            controller: 'OrderModalCtrl',
            controllerAs: 'orderModalCtrl',
            templateUrl: 'order-mgmt/components-modal/order-modal.tpl.html',
            size: 'md',
            resolve: {
                order: that.order
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFxRUUsc0JBQW9CLGdCQUFrQyxFQUFVLFNBQWM7UUFBMUQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFwRXRFLFVBQUssR0FBUTtZQUNuQixPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsRUFBRTtZQUNaLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO1FBRU0sV0FBTSxHQUFZO1lBQ3hCO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixRQUFRLEVBQUUsV0FBVztnQkFDckIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxnQkFBZ0I7YUFDdkI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLEtBQUssRUFBRSxTQUFTO2dCQUNoQixRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRSxnQkFBZ0I7YUFDdkI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLEtBQUssRUFBRSxTQUFTO2dCQUNoQixRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRSxnQkFBZ0I7YUFDdkI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLEtBQUssRUFBRSxTQUFTO2dCQUNoQixRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRSxnQkFBZ0I7YUFDdkI7U0FFRixDQUFDO1FBQ00sY0FBUyxHQUFHLENBQUMsQ0FBQztJQUl0QixDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssS0FBWTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLG9DQUFvQztJQUN0QyxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG1DQUFtQztJQUNyQyxDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDaEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ2pCLENBQUM7UUFDRiw0Q0FBNEM7SUFDOUMsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pDLG9CQUFvQjtJQUN0QixDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsRUFBRTtZQUNaLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO0lBQ0osQ0FBQztJQUVELGdDQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxXQUFXLEdBQUc7WUFDaEIsU0FBUyxFQUFFLElBQUk7WUFDZixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7WUFDOUIsV0FBVyxFQUFFLGtEQUFrRDtZQUMvRCxJQUFJLEVBQUUsSUFBSTtZQUNWLE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDbEI7U0FDRixDQUFDO1FBRUYsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFckQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1FBQ3ZCLE9BQU87UUFDUCxVQUFVLE1BQU07WUFDZCxJQUFJLFFBQVEsR0FBRztnQkFDYixFQUFFLEVBQUUsRUFBRTtnQkFDTixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87Z0JBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtnQkFDekIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO2dCQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7Z0JBQ3pCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2FBQ2xCLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFRLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCxTQUFTO1FBQ1QsVUFBVSxNQUFNO1FBRWhCLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUdILG1CQUFDO0FBQUQsQ0ExSkEsQUEwSkMsSUFBQTtBQTFKWSxvQkFBWSxlQTBKeEIsQ0FBQSIsImZpbGUiOiJvcmRlci1tZ210L29yZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
