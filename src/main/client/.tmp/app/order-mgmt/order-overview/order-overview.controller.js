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
        this.maxDate = new Date();
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
                that.toastService.showSimpleToast("success", "Poprawnie zsynchronizowano zamówienia, pobrano " + response.data.length + " zamówień");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLW1nbXQvb3JkZXItb3ZlcnZpZXcvb3JkZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUE7SUFRRSwyQkFBb0IsWUFBMEIsRUFBVSxTQUFjLEVBQVUsWUFBMEI7UUFBdEYsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFObEcsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQU9yQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxRQUFRO1lBQ2hELEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsMkNBQTJDLENBQUMsQ0FBQztZQUMxRixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJ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MUIsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUUsS0FBSztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNDLENBQUM7SUFDSCx3QkFBQztBQUFELENBOUhBLEFBOEhDLElBQUE7QUE5SFkseUJBQWlCLG9CQThIN0IsQ0FBQSIsImZpbGUiOiJvcmRlci1tZ210L29yZGVyLW92ZXJ2aWV3L29yZGVyLW92ZXJ2aWV3LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
