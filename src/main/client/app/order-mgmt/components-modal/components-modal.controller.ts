import {Order} from "../../general/interfaces/order.interface";
import {OrderService} from "../order.service";
export class ComponentsModalCtrl {
  orders: Order[];

  constructor(private orderService: OrderService) {
    this.orders = orderService.getOrders();
  }

  delete(id: number): void {
    this.orderService.delete(id);
  }
}
