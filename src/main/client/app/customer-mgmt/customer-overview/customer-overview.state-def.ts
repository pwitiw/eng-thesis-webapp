import IStateProvider = angular.ui.IStateProvider;
import {CustomerService} from "../customer.service";
/**
 * Created by PWITIW on 2016-12-06.
 */

export function addCustomerOverviewStateDef($stateProvider: IStateProvider) {
  return $stateProvider.state('customer-overview', {
    url: '/customer-mgmt/customers',
    templateUrl: 'customer-mgmt/customer-overview/customer-overview.html',
    controller: 'CustomerOverviewCtrl',
    controllerAs: 'customerOverviewCtrl',
    resolve: {
      /* @ngInject */
      books: function (customerService: CustomerService) {
        return ;
      }
    }
  })
}
