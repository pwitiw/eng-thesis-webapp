import {OrderRestService} from "../general/rest-services/orderRestService.service";
import {Order} from "../general/interfaces/order.interface";

export class OrderService {
  private order: any = {
    orderId: '',
    customer: '',
    color: '',
    position: '',
    type: '',
    date: ''
  };

  private orders: Order[] = [
    {
      id: 1,
      orderId: '001TW',
      customer: 'Bootstrap',
      color: 'RAL2010',
      position: 'FREZERNIA',
      type: 'express',
      date: '20 - 04 - 2017'
    },
    {
      id: 2,
      orderId: '002TW',
      customer: 'Angular',
      color: 'RAL2610',
      position: 'FREZERNIA',
      type: 'normalny',
      date: '20 - 04 - 2017'
    },
    {
      id: 3,
      orderId: '003TW',
      customer: 'CHmiel',
      color: 'RAL2010',
      position: 'FREZERNIA',
      type: 'express',
      date: '20 - 04 - 2017'
    },
    {
      id: 4,
      orderId: '004TW',
      customer: 'Angular',
      color: 'RAL2310',
      position: 'FREZERNIA',
      type: 'normalny',
      date: '20 - 04 - 2017'
    },
    {
      id: 5,
      orderId: '005TW',
      customer: 'Angular',
      color: 'RAL2010',
      position: 'FREZERNIA',
      type: 'normalny',
      date: '20 - 04 - 2017'
    },
    {
      id: 6,
      orderId: '006TW',
      customer: 'CHmiel',
      color: 'RAL2010',
      position: 'FREZERNIA',
      type: 'normalny',
      date: '20 - 04 - 2017'
    }

  ];
  private sequencer = 1;

  constructor(private orderRestService: OrderRestService, private $uibModal: any) {

  }

  getOrders(): Order[] {
    return this.orders;
  }

  save(order: Order): any {
    this.orders.push(order);
    //this.orderRestService.save(order);
  }

  delete(id: number): any {
    this.orders.pop();
    //this.orderRestService.delete(id);
  }

  findOne(id: number): any {
    var order = this.orders[id-1]; //-1, bo tablica obecnie
    this.order = {
      orderId: order.orderId,
      customer: order.customer,
      color: order.color,
      position: order.position,
      type: order.type,
      date: order.date
    };
    //return this.orderRestService.getOrder(id);
  }

  findAll(): any {
    return this.orderRestService.getOrders();
    //return this.books;
  }

  clearOrder(): void {
    this.order = {
      orderId: '',
      customer: '',
      color: '',
      position: '',
      type: '',
      date: ''
    };
  }

  openModal() {
    var that = this;

    let modalObject = {
      animation: true,
      controller: 'OrderModalCtrl',
      controllerAs: 'orderModalCtrl',
      templateUrl: 'order-mgmt/components-modal/order-modal.tpl.html',
      size: 'md',
      resolve: {
        order: that.order
      }
    };

    var modalInstance = this.$uibModal.open(modalObject);

    modalInstance.result.then(
      //close
      function (result) {
        let newOrder = {
          id: 78,
          orderId: result.orderId,
          customer: result.customer,
          color: result.color,
          position: result.position,
          type: result.type,
          date: result.date
        };
        that.save(<Order>newOrder);
      },
      //dismiss
      function (result) {

      }
    )
  }


}
