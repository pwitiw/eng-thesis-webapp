import {Order} from "../../general/interfaces/order.interface";
import {OrderService} from "../order.service";
import {ComponentsModalCtrl} from "../components-modal/components-modal.controller";
import {ComponentsModalService} from "../components-modal/components-modal.service";
import {ToastService} from "../../general/toast/toast.service";

export class OrderOverviewCtrl {
  private orders: Order[];
  private displayed = [];
  private itemsByPage: number;
  private paginationSizes: any;
  private positions: any;

  constructor(private orderService: OrderService, private $uibModal: any, private toastService: ToastService) {
    this.itemsByPage = 5;
    this.paginationSizes = [5, 10, 15, 20, 25];
    this.findAll();
    this.findPositions();
  }

  findAll(): void {
    var that = this;
    this.orderService.findAll().then(function(response) {
      if(response.status == 200) {
        that.orders = response.data;
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania zamówień");
      }
    })
  }

  findPositions() {
    var that = this;
    this.orderService.findPositions().then(function(response) {
      if(response.status == 200) {
        that.positions = response.data;
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania pozycji");
      }
    });
  }

  delete(id: number): void {
    var that = this;
    this.orderService.delete(id).then(function(response) {
      if(response.status == 200) {
        var index = that.orders.findIndex(order => order.id === id);
        that.orders.splice(index, 1);
        that.toastService.showSimpleToast("success", "Poprawnie usunięto zamówienie");
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas usuwania zamówienia");
      }
    })
  }

  synchronize():void {
    var that = this;
    this.orderService.synchronize().then(function(response) {
      if(response.status == 200) {
        that.orders = response.data;
        that.toastService.showSimpleToast("success", "Poprawnie zsynchronizowano zamówienia, pobrano " + response.data.size() + " zamówień");
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas synchronizacji zamówień");
      }
    })
  }

  changeType(id: number): void {
    var that = this;
    this.orderService.changeType(id).then(function(response) {
      if(response.status == 200) {
        var index = that.orders.findIndex(order => order.id === id);
        that.orders[index].active ? that.orders[index].active = false : that.orders[index].active = true;
        that.toastService.showSimpleToast("success", "Poprawnie zmieniono status zamówienia");
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas zmiany statusu zamówienia");
      }
    })
  }


  editOrder(id: number): void {
    var that = this;
    this.orderService.findOne(id).then(function(findOneResponse){
      if(findOneResponse.status == 200) {
        that.orderService.findCustomers().then(function(customerResponse) {
          if(customerResponse.status == 200) {
            that.orderService.openModal(findOneResponse.data, that.positions, customerResponse.data).then(function (resultModal) {
              that.orderService.edit(resultModal.id, resultModal).then(function (editResponse) {
                if (editResponse.status == 200) {
                  var index = that.orders.findIndex(order => order.id === resultModal.id);
                  that.updateArray(index, <Order> resultModal);
                  that.toastService.showSimpleToast("success", "Zamówienie zostało zaktualizowane");
                } else {
                  that.toastService.showSimpleToast("error", "Wystąpił błąd podczas zapisywania zamówienia");
                }
              });
            });
          } else {
            that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania klientów");
          }
        });
      } else {
        that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania danych zamówienia");
      }
    });
  }

  openComponents(id: number, orderName: string): void{
    var that = this;
    this.orderService.findOne(id).then(function(response) {
      if(response.status == 200) {
        that.orderService.openComponentModal(response.data, orderName)
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
