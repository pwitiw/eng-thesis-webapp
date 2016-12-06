"use strict";
var OrderService = (function () {
    function OrderService(orderRestService) {
        this.orderRestService = orderRestService;
        this.order = [
            { id: 1, title: 'Angular', author: 'Henryk Sienkiewicz' },
            { id: 2, title: 'Java', author: 'Maria Konopnicka' },
            { id: 3, title: 'Programming mysteries', author: 'Paulo Coelho' }
        ];
        this.sequencer = 1;
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250LW1nbXQvb3JkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFRRSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQOUMsVUFBSyxHQUFZO1lBQ3ZCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBQztZQUN2RCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUM7WUFDbEQsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDO1NBQ2hFLENBQUM7UUFDTSxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBSXRCLENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssS0FBWTtRQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pDLG9CQUFvQjtJQUN0QixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBNUJZLG9CQUFZLGVBNEJ4QixDQUFBIiwiZmlsZSI6ImZyb250LW1nbXQvb3JkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
