import {OrderRestService} from "../general/rest-services/orderRestService.service";
import {Order} from "../general/interfaces/order.interface";

export class OrderService {
  private order: any = {
    id: null,
    name: '',
    customer: '',
    position: '',
    color: '',
    date: '',
    express: '',      //express czy nie
    lastUpdate: '',
    parentId: null
  };

  constructor(private orderRestService: OrderRestService, private $uibModal: any) {

  }


  save(order: Order): any {
    //this.orderRestService.save(order);
  }

  delete(id: number): any {
    //this.orderRestService.delete(id);
  }

  changeType(id: number): any {
    return this.orderRestService.changeType(id);
  }

  findOne(id: number): any {
    return this.orderRestService.getOrder(id);
  }

  findAll(): any {
    return this.orderRestService.getOrders();
  }

  openModal(order) {
    var that = this;

    let modalObject = {
      animation: true,
      controller: 'OrderModalCtrl',
      controllerAs: 'orderModalCtrl',
      templateUrl: 'order-mgmt/components-modal/order-modal.tpl.html',
      size: 'md',
      resolve: {
        order: order
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
