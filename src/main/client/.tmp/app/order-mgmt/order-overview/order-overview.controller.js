"use strict";
var OrderOverviewCtrl = (function () {
    function OrderOverviewCtrl(books, orderService) {
        this.books = books;
        this.orderService = orderService;
        this.sda = 'test';
    }
    OrderOverviewCtrl.prototype.delete = function (id) {
        this.orderService.delete(id);
    };
    return OrderOverviewCtrl;
}());
exports.OrderOverviewCtrl = OrderOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXItb3ZlcnZpZXcvb3JkZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFHRSwyQkFBb0IsS0FBYyxFQUFVLFlBQTBCO1FBQWxELFVBQUssR0FBTCxLQUFLLENBQVM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUR0RSxRQUFHLEdBQUUsTUFBTSxDQUFDO0lBR1osQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSx5QkFBaUIsb0JBVTdCLENBQUEiLCJmaWxlIjoib3JkZXItbWdtdC9vcmRlci1vdmVydmlldy9vcmRlci1vdmVydmlldy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
