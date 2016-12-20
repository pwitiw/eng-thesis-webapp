import {Order} from "../../general/interfaces/order.interface";
import {OrderService} from "../order.service";
import {ComponentsModalCtrl} from "../components-modal/components-modal.controller";

export class OrderOverviewCtrl {
  orders: Order[];

  constructor(private orderService: OrderService, private $modal: ng.ui.bootstrap.IModalService) {
    this.orders = orderService.getOrders();
  }

  delete(id: number): void {
    this.orderService.delete(id);
  }

  synchronize():void {
    var modalInstance: ng.ui.bootstrap.IModalServiceInstance = this.$modal.open({
      templateUrl: 'components-modal.html',
      controller: ComponentsModalCtrl,
      bindToController: true,
      controllerAs: 'c',
    });

    modalInstance.result.then((selectedItem) => {
    });
  }
}
