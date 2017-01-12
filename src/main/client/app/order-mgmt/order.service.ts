import {OrderRestService} from "../general/rest-services/orderRestService.service";
import {WorkerRestService} from "../general/rest-services/workerRestService.service";
import {CustomerRestService} from "../general/rest-services/customerRestService.service";
import {Order} from "../general/interfaces/order.interface";

export class OrderService {

  constructor(private orderRestService: OrderRestService, private workerRestService: WorkerRestService, private customerRestService: CustomerRestService, private $uibModal: any) {

  }

  synchronize(): any {
    return this.orderRestService.synchronize();
  }

  edit(id: number, order: Order): any {
    return this.orderRestService.edit(id, order);
  }

  delete(id: number): any {
    return this.orderRestService.delete(id);
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

  findComponents(id: number): any {
    return this.orderRestService.getComponent(id);
  }

  findPositions(): any{
    return this.workerRestService.getPositions();
  }

  findCustomers(): any {
    return this.customerRestService.getCustomers();
  }

  openModal(order, positions, customers) {
    var that = this;

    let modalObject = {
      animation: true,
      controller: 'OrderModalCtrl',
      controllerAs: 'orderModalCtrl',
      templateUrl: 'order-mgmt/components-modal/order-modal.tpl.html',
      size: 'md',
      backdrop: 'static',
      resolve: {
        order: function() {
          return order;
        },
        positions: function(){
          return positions;
        },
        customers: function(){
          return customers;
        }
      }
    };


    return that.$uibModal.open(modalObject).result;
  }


  openComponentModal(order, orderName) {
    var that = this;

    let modalObject = {
      animation: true,
      controller: 'ComponentsModalCtrl',
      controllerAs: 'componentsModalCtrl',
      templateUrl: 'order-mgmt/components-modal/components-modal.tpl.html',
      size: 'lg',
      backdrop: 'static',
      resolve: {
        order: function() {
          return order;
        },
        orderName: function(){
          return orderName;
        }
      }
    };

    var modalInstance = this.$uibModal.open(modalObject);

    modalInstance.result.then(
      //close
      function (result) {

      },
      //dismiss
      function (result) {

      }
    )
  }

}
