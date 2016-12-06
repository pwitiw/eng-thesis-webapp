import {Order} from "../../general/interfaces/order.interface";
import {OrderService} from "../order.service";
export class OrderOverviewCtrl {
  order: Order;
  sda ='test';
  constructor(private books: Order[], private orderService: OrderService) {

  }

  delete(id: number): void {
    this.orderService.delete(id);
  }
}
