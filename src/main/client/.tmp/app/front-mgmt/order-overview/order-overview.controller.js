"use strict";
var OrderOverviewCtrl = (function () {
    function OrderOverviewCtrl(books, orderService) {
        this.books = books;
        this.orderService = orderService;
    }
    OrderOverviewCtrl.prototype.delete = function (id) {
        this.orderService.delete(id);
    };
    return OrderOverviewCtrl;
}());
exports.OrderOverviewCtrl = OrderOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250LW1nbXQvb3JkZXItb3ZlcnZpZXcvb3JkZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFFRSwyQkFBb0IsS0FBYyxFQUFVLFlBQTBCO1FBQWxELFVBQUssR0FBTCxLQUFLLENBQVM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUV0RSxDQUFDO0lBRUQsa0NBQU0sR0FBTixVQUFPLEVBQVM7UUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHlCQUFpQixvQkFTN0IsQ0FBQSIsImZpbGUiOiJmcm9udC1tZ210L29yZGVyLW92ZXJ2aWV3L29yZGVyLW92ZXJ2aWV3LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
