"use strict";
var OrderOverviewCtrl = (function () {
    function OrderOverviewCtrl(orderService) {
        this.orderService = orderService;
        this.displayed = [];
        this.itemsByPage = 5;
        this.paginationSizes = [5, 10, 15, 20, 25];
        this.findAll();
    }
    OrderOverviewCtrl.prototype.findAll = function () {
        var that = this;
        this.orderService.findAll().then(function (data) {
            that.orders = data;
        });
    };
    OrderOverviewCtrl.prototype.delete = function (id) {
        this.orderService.delete(id);
    };
    OrderOverviewCtrl.prototype.synchronize = function () {
        this.orderService.openModal();
    };
    OrderOverviewCtrl.prototype.updatePagination = function (size) {
        this.itemsByPage = size;
    };
    OrderOverviewCtrl.prototype.changeType = function (id) {
        var that = this;
        this.orderService.changeType(id).then(function (data) {
            var index = that.orders.findIndex(function (order) { return order.id === id; });
            that.orders[index].active ? that.orders[index].active = false : that.orders[index].active = true;
        });
    };
    OrderOverviewCtrl.prototype.addOrder = function () {
        this.orderService.openModal();
    };
    OrderOverviewCtrl.prototype.editOrder = function (id) {
        var that = this;
        this.orderService.findOne(id).then(function (data) {
            that.orderService.openModal(data);
        });
    };
    return OrderOverviewCtrl;
}());
exports.OrderOverviewCtrl = OrderOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXItb3ZlcnZpZXcvb3JkZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0E7SUFPRSwyQkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFMOUMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQU1iLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLElBQVk7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ25CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ2pELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuRyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLEVBQVU7UUFDbEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQWxEQSxBQWtEQyxJQUFBO0FBbERZLHlCQUFpQixvQkFrRDdCLENBQUEiLCJmaWxlIjoib3JkZXItbWdtdC9vcmRlci1vdmVydmlldy9vcmRlci1vdmVydmlldy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
