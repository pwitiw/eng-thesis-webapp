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
            else {
                that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania zamówień");
            }
        });
    };
    OrderOverviewCtrl.prototype.findPositions = function () {
        var that = this;
        this.orderService.findPositions().then(function (response) {
            if (response.status == 200) {
                that.positions = response.data;
            }
            else {
                that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania pozycji");
            }
        });
    };
    OrderOverviewCtrl.prototype.delete = function (id) {
        var that = this;
        this.orderService.delete(id).then(function (response) {
            if (response.status == 200) {
                var index = that.orders.findIndex(function (order) { return order.id === id; });
                that.orders.splice(index, 1);
                that.toastService.showSimpleToast("success", "Poprawnie usunięto zamówienie");
            }
            else {
                that.toastService.showSimpleToast("error", "Wystąpił błąd podczas usuwania zamówienia");
            }
        });
    };
    OrderOverviewCtrl.prototype.synchronize = function () {
        var that = this;
        this.orderService.synchronize().then(function (response) {
            if (response.status == 200) {
                that.findAll();
                that.toastService.showSimpleToast("success", "Poprawnie zsynchronizowano zamówienia, pobrano " + response.data.size() + " zamówień");
            }
            else {
                that.toastService.showSimpleToast("error", "Wystąpił błąd podczas synchronizacji zamówień");
            }
        });
    };
    OrderOverviewCtrl.prototype.changeType = function (id) {
        var that = this;
        this.orderService.changeType(id).then(function (response) {
            if (response.status == 200) {
                var index = that.orders.findIndex(function (order) { return order.id === id; });
                that.orders[index].active ? that.orders[index].active = false : that.orders[index].active = true;
                that.toastService.showSimpleToast("success", "Poprawnie zmieniono status zamówienia");
            }
            else {
                that.toastService.showSimpleToast("error", "Wystąpił błąd podczas zmiany statusu zamówienia");
            }
        });
    };
    OrderOverviewCtrl.prototype.editOrder = function (id) {
        var that = this;
        this.orderService.findOne(id).then(function (findOneResponse) {
            if (findOneResponse.status == 200) {
                that.orderService.findCustomers().then(function (customerResponse) {
                    if (customerResponse.status == 200) {
                        that.orderService.openModal(findOneResponse.data, that.positions, customerResponse.data).then(function (resultModal) {
                            that.orderService.edit(resultModal.id, resultModal).then(function (editResponse) {
                                if (editResponse.status == 200) {
                                    var index = that.orders.findIndex(function (order) { return order.id === resultModal.id; });
                                    that.updateArray(index, resultModal);
                                    that.toastService.showSimpleToast("success", "Zamówienie zostało zaktualizowane");
                                }
                                else {
                                    that.toastService.showSimpleToast("error", "Wystąpił błąd podczas zapisywania zamówienia");
                                }
                            });
                        });
                    }
                    else {
                        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania klientów");
                    }
                });
            }
            else {
                that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania danych zamówienia");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXItb3ZlcnZpZXcvb3JkZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUE7SUFPRSwyQkFBb0IsWUFBMEIsRUFBVSxTQUFjLEVBQVUsWUFBMEI7UUFBdEYsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFMbEcsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQU1yQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLFFBQVE7WUFDaEQsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDOUIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSwyQ0FBMkMsQ0FBQyxDQUFDO1lBQzFGLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCx5Q0FBYSxHQUFiO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMs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QUs7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMzQyxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQTVIQSxBQTRIQyxJQUFBO0FBNUhZLHlCQUFpQixvQkE0SDdCLENBQUEiLCJmaWxlIjoib3JkZXItbWdtdC9vcmRlci1vdmVydmlldy9vcmRlci1vdmVydmlldy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
