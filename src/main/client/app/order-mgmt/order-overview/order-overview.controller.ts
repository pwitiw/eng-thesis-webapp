import {Order} from "../../general/interfaces/order.interface";
import {OrderService} from "../order.service";
import {ComponentsModalCtrl} from "../components-modal/components-modal.controller";
import {ComponentsModalService} from "../components-modal/components-modal.service";

export class OrderOverviewCtrl {
  private orders: Order[];
  private displayed = [];
  private itemsByPage: number;
  private paginationSizes: any;
  private positions: any;

  constructor(private orderService: OrderService, private $uibModal: any) {
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
      }
    })
  }

  findPositions() {
    var that = this;
    this.orderService.findPositions().then(function(response) {
      if(response.status == 200) {
        that.positions = response.data;
      }
    });
  }

  delete(id: number): void {
    var that = this;
    this.orderService.delete(id).then(function(response) {
      if(response.status == 200) {
        var index = that.orders.findIndex(order => order.id === id);
        that.orders.splice(index, 1);
      }
    })
  }

  synchronize():void {
    //this.orderService.openModal();
    alert("Synchronizacja");
  }

  changeType(id: number): void {
    var that = this;
    this.orderService.changeType(id).then(function(response) {
      if(response.status == 200) {
        var index = that.orders.findIndex(order => order.id === id);
        that.orders[index].active ? that.orders[index].active = false : that.orders[index].active = true;
      }
    })
  }


  editOrder(id: number): void {
    var that = this;
    this.orderService.findOne(id).then(function(findOneResponse){
      if(findOneResponse.status == 200) {
        that.orderService.openModal(findOneResponse.data, that.positions).then(function (resultModal) {
          that.orderService.edit(resultModal.id, resultModal).then(function (editResponse) {
            if(editResponse.status == 200) {
              var index = that.orders.findIndex(order => order.id === resultModal.id);
              that.updateArray(index, <Order> resultModal);
            }
          });
        });
      }
    });
  }

  openComponents(id: number): void{
    var that = this;
    this.orderService.findOne(id).then(function(response) {
      if(response.status == 200) {
        that.orderService.openComponentModal(response.data)
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
