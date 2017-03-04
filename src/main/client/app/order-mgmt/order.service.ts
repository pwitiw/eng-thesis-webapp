import {OrderRestService} from "../general/rest-services/orderRestService.service";
import {WorkerRestService} from "../general/rest-services/workerRestService.service";
import {CustomerRestService} from "../general/rest-services/customerRestService.service";
import {Order} from "../general/interfaces/order.interface";
import {ToastService} from "../general/toast/toast.service";
import IPromise = angular.IPromise;

export class OrderService {

  private DELETE_ORDER_TEXT = 'Jesteś pewien, że chcesz usunąć zamówienie?';
  private POSITIONS: string[];

  constructor(private orderRestService: OrderRestService,
              private workerRestService: WorkerRestService,
              private customerRestService: CustomerRestService,
              private $uibModal: any,
              private toastService: ToastService) {
    this.POSITIONS = this.findPositions().then(response=> {
      return response.data
    });
  }

  synchronize(): any {
    return this.orderRestService.synchronize();
  }

  edit(id: number, order: Order): any {
    return this.orderRestService.edit(id, order);
  }

  private delete(id: number): any {
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

  findPositions(): any {
    return this.workerRestService.getPositions();
  }

  findCustomers(): any {
    return this.customerRestService.getCustomers();
  }

  performDeleteOrder(id: number, callbackFn: any): any {
    let result = false,
      modalObject = {
        animation: true,
        controller: 'DeleteModalCtrl',
        controllerAs: 'deleteModalCtrl',
        templateUrl: 'general/template/delete-modal.tpl.html',
        size: 'md',
        backdrop: 'static',
        resolve: {
          text: () => {
            return this.DELETE_ORDER_TEXT;
          }
        }
      };

    this.$uibModal.open(modalObject).result.then(deleteAction => {
      if (deleteAction) {
        return this.delete(id).then(response=> {
          if (response.status == 200) {
            this.toastService.showSimpleToast("success", "Poprawnie usunięto zamówienie.");
            callbackFn();
          }
          else
            this.toastService.showSimpleToast("error", response.data.message);
        })
      }
    });
  }

  editOrderModal(order, positions, customers) {
    let modalObject = {
      animation: true,
      controller: 'OrderModalCtrl',
      controllerAs: 'orderModalCtrl',
      templateUrl: 'order-mgmt/order-modal/order-modal.tpl.html',
      // template:'<order-modal></order-modal>',
      size: 'md',
      backdrop: 'static',
      resolve: {
        order: function () {
          return order;
        },
        positions: function () {
          return positions;
        },
        customers: function () {
          return customers;
        }
      }
    };
    return this.$uibModal.open(modalObject).result;
  }

  editComponentModal(order, orderName) {

    let modalObject = {
      animation: true,
      controller: 'ComponentsModalCtrl',
      controllerAs: 'componentsModalCtrl',
      templateUrl: 'order-mgmt/components-modal/components-modal.tpl.html',
      size: 'lg',
      backdrop: 'static',
      resolve: {
        order: function () {
          return order;
        },
        orderName: function () {
          return orderName;
        }
      }
    };

    var modalInstance = this.$uibModal.open(modalObject);

    modalInstance.result.then(
      //close
      function (result) {
        console.log(result);
      },
      //dismiss
      function (result) {
        console.log(result);
      }
    )
  }

}
