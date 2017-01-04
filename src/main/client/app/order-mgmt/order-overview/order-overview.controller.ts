import {Order} from "../../general/interfaces/order.interface";
import {OrderService} from "../order.service";
import {ComponentsModalCtrl} from "../components-modal/components-modal.controller";
import {ComponentsModalService} from "../components-modal/components-modal.service";

export class OrderOverviewCtrl {
  orders: Order[];
  displayed = [];
  itemsByPage: number;
  paginationSizes: any;


  constructor(private orderService: OrderService) {
    this.itemsByPage = 5;
    this.paginationSizes = [5, 10, 15, 20, 25];
    this.findAll();
  }

  findAll(): void {
    var that = this;
    this.orderService.findAll().then(function(data) {
      that.orders = data;
    })
  }

  delete(id: number): void {
    this.orderService.delete(id);
  }

  synchronize():void {
    this.orderService.openModal();
  }

  updatePagination(size: number): void {
    this.itemsByPage = size;
  }

  changeType(id: number): void {
    var that = this;
    this.orderService.changeType(id).then(function(data) {
      var index = that.orders.findIndex(order => order.id === id);
      that.orders[index].active ? that.orders[index].active = false : that.orders[index].active = true;
    })
  }

  addOrder(): void {
    this.orderService.openModal();
  }

  editOrder(id: number): void {
    var that = this;
    this.orderService.findOne(id).then(function(data){
      that.orderService.openModal(data);
    });
  }
}
