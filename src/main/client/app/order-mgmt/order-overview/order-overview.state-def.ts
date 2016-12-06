import IStateProvider = angular.ui.IStateProvider;
import { OrderService} from "../order.service";
/**
 * Created by PWITIW on 2016-12-06.
 */

export function addOrderOverviewStateDef($stateProvider: IStateProvider) {
  return $stateProvider.state('order-overview', {
    url: '/order-mgmt/orders',
    templateUrl: 'order-mgmt/order-overview/order-overview.html',
    controller: 'OrderOverviewCtrl',
    controllerAs: 'orderOverviewCtrl',
    resolve: {
      /* @ngInject */
       books: function (orderService: OrderService) {
       // return orderService.findAll();
       return ;
       }
    }
  })
}
