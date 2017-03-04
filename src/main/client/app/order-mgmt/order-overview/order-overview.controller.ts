import {Order} from "../../general/interfaces/order.interface";
import {OrderService} from "../order.service";

export class OrderOverviewCtrl {
  private orders: Order[];
  private itemsByPage: number;
  private paginationSizes = [25, 50, 75, 100, 150];
  private positions: any;
  private maxDate: Date;

  constructor(private orderService: OrderService) {
    this.itemsByPage = this.paginationSizes[0];
    this.findAll();
    this.findPositions();
    this.maxDate = new Date();
  }

  findAll(): void {
    var that = this;
    this.orderService.findAll().then(function (response) {
      if (response.status == 200) {
        that.orders = response.data;
      } else {
//        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania zamówień");
      }
    })
  }

  findPositions() {
    var that = this;
    this.orderService.findPositions().then(function (response) {
      if (response.status == 200) {
        that.positions = response.data;
      } else {
        //       that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania pozycji");
      }
    });
  }

  delete(id: number): void {
    this.orderService.performDeleteOrder(id, this.deleteOrderFromList);
  }

  private deleteOrderFromList(id: number) {
    var index = this.orders.findIndex(order => order.id === id);
    this.orders.splice(index, 1);
  }

  // delete(id: number): void {
  //   var that = this;
  //   this.orderService.deleteModal(id).then(function (resultModal) {
  //     that.orderService.delete(id).then(function (response) {
  //       if (response.status == 200) {
  //         var index = that.orders.findIndex(order => order.id === id);
  //         that.orders.splice(index, 1);
  //         that.toastService.showSimpleToast("success", "Poprawnie usunięto zamówienie");
  //       } else {
  //         that.toastService.showSimpleToast("error", "Wystąpił błąd podczas usuwania zamówienia");
  //       }
  //     })
  //   })
  // }

  synchronize(): void {
    var that = this;
    this.orderService.synchronize().then(function (response) {
      if (response.status == 200) {
        that.findAll();
        //  that.toastService.showSimpleToast("success", "Poprawnie zsynchronizowano zamówienia, pobrano " + response.data.length + " zamówień");
      } else {
        //   that.toastService.showSimpleToast("error", "Wystąpił błąd podczas synchronizacji zamówień");
      }
    })
  }

  changeType(id: number): void {
    var that = this;
    this.orderService.changeType(id).then(function (response) {
      if (response.status == 200) {
        var index = that.orders.findIndex(order => order.id === id);
        that.orders[index].active ? that.orders[index].active = false : that.orders[index].active = true;
        //   that.toastService.showSimpleToast("success", "Poprawnie zmieniono status zamówienia");
      } else {
        //     that.toastService.showSimpleToast("error", "Wystąpił błąd podczas zmiany statusu zamówienia");
      }
    })
  }


  editOrder(id: number): void {
    var that = this;
    this.orderService.findOne(id).then(function (findOneResponse) {
      if (findOneResponse.status == 200) {
        that.orderService.findCustomers().then(function (customerResponse) {
          if (customerResponse.status == 200) {
            that.orderService.editOrderModal(findOneResponse.data, that.positions, customerResponse.data).then(function (resultModal) {
              that.orderService.edit(resultModal.id, resultModal).then(function (editResponse) {
                if (editResponse.status == 200) {
                  var index = that.orders.findIndex(order => order.id === resultModal.id);
                  that.updateArray(index, <Order> resultModal);
                  //         that.toastService.showSimpleToast("success", "Zamówienie zostało zaktualizowane");
                } else {
                  //         that.toastService.showSimpleToast("error", "Wystąpił błąd podczas zapisywania zamówienia");
                }
              });
            });
          } else {
            //    that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania klientów");
          }
        });
      } else {
        //  that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania danych zamówienia");
      }
    });
  }

  openComponents(id: number, orderName: string): void {
    var that = this;
    this.orderService.findOne(id).then(function (response) {
      if (response.status == 200) {
        that.orderService.editComponentModal(response.data, orderName)
      }
    })
  }

  updatePagination(size: number): void {
    this.itemsByPage = size;
  }

  updateArray(index, order): void {
    this.orders[index].name = order.name;
    this.orders[index].customer = order.customer;
    this.orders[index].position = order.position;
    this.orders[index].color = order.color;
    this.orders[index].date = order.date;
    this.orders[index].express = order.express;
    this.orders[index].active = order.active;
  }
}
