import {OrderRestService} from "../general/rest-services/orderRestService.service";
import {Order} from "../general/interfaces/order.interface";

export class OrderService {
  private order: Order[] = [
    {id: 1, title: 'Angular', author: 'Henryk Sienkiewicz'},
    {id: 2, title: 'Java', author: 'Maria Konopnicka'},
    {id: 3, title: 'Programming mysteries', author: 'Paulo Coelho'}
  ];
  private sequencer = 1;

  constructor(private orderRestService: OrderRestService) {

  }

  save(order: Order): any {
    this.orderRestService.save(order);
  }

  delete(id: number): any {
    this.orderRestService.delete(id);
  }

  findOne(id: number): any {
    return this.orderRestService.getOrder(id);
  }

  findAll(): any {
    return this.orderRestService.getOrders();
    //return this.books;
  }
}
