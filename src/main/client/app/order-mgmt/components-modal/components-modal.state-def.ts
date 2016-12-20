import IStateProvider = angular.ui.IStateProvider;
import { OrderService} from "../order.service";
/**
 * Created by PWITIW on 2016-12-06.
 */

export function addOrderOverviewStateDef($stateProvider: IStateProvider) {
  return $stateProvider.state('components-modal', {
    url: '/order-mgmt/orders/{id}/components',
    templateUrl: 'order-mgmt/components-module/-component-modal.html',
    controller: 'ComponentsModalCtrl',
    controllerAs: 'componentsModalCtrl',
    resolve: {
      /* @ngInject */
       books: function (orderService: OrderService) {
       // return orderService.findAll();
       return ;
       }
    }
  })
}
