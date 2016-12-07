"use strict";
var OrderOverviewCtrl = (function () {
    function OrderOverviewCtrl(orderService) {
        this.orderService = orderService;
        this.orders = orderService.getOrders();
    }
    OrderOverviewCtrl.prototype.delete = function (id) {
        this.orderService.delete(id);
    };
    return OrderOverviewCtrl;
}());
exports.OrderOverviewCtrl = OrderOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXItb3ZlcnZpZXcvb3JkZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFJRSwyQkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSx5QkFBaUIsb0JBVzdCLENBQUEiLCJmaWxlIjoib3JkZXItbWdtdC9vcmRlci1vdmVydmlldy9vcmRlci1vdmVydmlldy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
