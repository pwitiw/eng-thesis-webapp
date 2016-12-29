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
    this.orders = orderService.getOrders();
    this.itemsByPage = 5;
    this.paginationSizes = [5, 10, 15, 20, 25];
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

  addOrder(): void {
    this.orderService.clearOrder();
    this.orderService.openModal();
  }

  editOrder(id: number): void {
    this.orderService.findOne(id);
    this.orderService.openModal();
  }
}
