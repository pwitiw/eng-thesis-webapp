import {Order} from "../../general/interfaces/order.interface";
import {OrderService} from "../order.service";
import {ComponentsModalCtrl} from "../components-modal/components-modal.controller";
import {ComponentsModalService} from "../components-modal/components-modal.service";

export class OrderOverviewCtrl {
  orders: Order[];

  constructor(private orderService: OrderService) {
    this.orders = orderService.getOrders();
  }

  delete(id: number): void {
    this.orderService.delete(id);
  }

  synchronize():void {
    this.orderService.openModal();
  }
}
