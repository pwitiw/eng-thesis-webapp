import {OrderRestService} from "../general/rest-services/orderRestService.service";
import {WorkerRestService} from "../general/rest-services/workerRestService.service";
import {Order} from "../general/interfaces/order.interface";

export class OrderService {
  private order: any = {
    id: null,
    name: '',
    customer: '',
    position: '',
    date: '',
    express: null,      //express czy nie
    lastUpdate: '',
    parentId: null,
    active: null
  };

  constructor(private orderRestService: OrderRestService, private workerRestService: WorkerRestService, private $uibModal: any) {

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

  openModal(order) {
    var that = this;

    this.workerRestService.getPositions().then(function(positions){
      let modalObject = {
        animation: true,
        controller: 'OrderModalCtrl',
        controllerAs: 'orderModalCtrl',
        templateUrl: 'order-mgmt/components-modal/order-modal.tpl.html',
        size: 'md',
        resolve: {
          order: function() {
            return order;
          },
          positions: function(){
            return positions;
          }
        }
      };


      var modalInstance = that.$uibModal.open(modalObject);


      modalInstance.result.then(
        //close
        function (result) {
          that.edit(result.id, <Order>result)
        },
        //dismiss
        function (result) {

        }
      )
    });
  }


  openComponentModal(order) {
    var that = this;

    let modalObject = {
      animation: true,
      controller: 'ComponentsModalCtrl',
      controllerAs: 'componentsModalCtrl',
      templateUrl: 'order-mgmt/components-modal/components-modal.tpl.html',
      size: 'lg',
      resolve: {
        order: function() {
          return order;
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
