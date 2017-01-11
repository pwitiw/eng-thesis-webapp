"use strict";
var OrderOverviewCtrl = (function () {
    function OrderOverviewCtrl(orderService, $uibModal, toastService) {
        this.orderService = orderService;
        this.$uibModal = $uibModal;
        this.toastService = toastService;
        this.displayed = [];
        this.itemsByPage = 5;
        this.paginationSizes = [5, 10, 15, 20, 25];
        this.findAll();
        this.findPositions();
    }
    OrderOverviewCtrl.prototype.findAll = function () {
        var that = this;
        this.orderService.findAll().then(function (response) {
            if (response.status == 200) {
                that.orders = response.data;
            }
        });
    };
    OrderOverviewCtrl.prototype.findPositions = function () {
        var that = this;
        this.orderService.findPositions().then(function (response) {
            if (response.status == 200) {
                that.positions = response.data;
            }
        });
    };
    OrderOverviewCtrl.prototype.delete = function (id) {
        var that = this;
        this.orderService.delete(id).then(function (response) {
            if (response.status == 200) {
                var index = that.orders.findIndex(function (order) { return order.id === id; });
                that.orders.splice(index, 1);
            }
        });
    };
    OrderOverviewCtrl.prototype.synchronize = function () {
        //this.orderService.openModal();
        alert("Synchronizacja");
    };
    OrderOverviewCtrl.prototype.changeType = function (id) {
        var that = this;
        this.orderService.changeType(id).then(function (response) {
            if (response.status == 200) {
                var index = that.orders.findIndex(function (order) { return order.id === id; });
                that.orders[index].active ? that.orders[index].active = false : that.orders[index].active = true;
            }
        });
    };
    OrderOverviewCtrl.prototype.editOrder = function (id) {
        var that = this;
        this.orderService.findOne(id).then(function (findOneResponse) {
            if (findOneResponse.status == 200) {
                that.orderService.openModal(findOneResponse.data, that.positions).then(function (resultModal) {
                    that.orderService.edit(resultModal.id, resultModal).then(function (editResponse) {
                        if (editResponse.status == 200) {
                            var index = that.orders.findIndex(function (order) { return order.id === resultModal.id; });
                            that.updateArray(index, resultModal);
                        }
                    });
                });
            }
        });
    };
    OrderOverviewCtrl.prototype.openComponents = function (id, orderName) {
        var that = this;
        this.orderService.findOne(id).then(function (response) {
            if (response.status == 200) {
                that.orderService.openComponentModal(response.data, orderName);
            }
        });
    };
    OrderOverviewCtrl.prototype.updatePagination = function (size) {
        this.itemsByPage = size;
    };
    OrderOverviewCtrl.prototype.updateArray = function (index, order) {
        this.orders[index].name = order.name;
        this.orders[index].customer = order.customer;
        this.orders[index].position = order.position;
        this.orders[index].color = order.color;
        this.orders[index].date = order.date;
        this.orders[index].express = order.express;
        this.orders[index].active = order.active;
    };
    return OrderOverviewCtrl;
}());
exports.OrderOverviewCtrl = OrderOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXItb3ZlcnZpZXcvb3JkZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUE7SUFPRSwyQkFBb0IsWUFBMEIsRUFBVSxTQUFjLEVBQVUsWUFBMEI7UUFBdEYsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFMbEcsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQU1yQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLFFBQVE7WUFDaEQsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDOUIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHlDQUFhLEdBQWI7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxRQUFRO1lBQ3RELEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxR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
