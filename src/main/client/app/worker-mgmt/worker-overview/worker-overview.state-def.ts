import IStateProvider = angular.ui.IStateProvider;
import {WorkerService} from "../worker.service";
/**
 * Created by PWITIW on 2016-12-06.
 */

export function addWorkerOverviewStateDef($stateProvider: IStateProvider) {
  return $stateProvider.state('worker-overview', {
    url: '/worker-mgmt/workers',
    templateUrl: 'worker-mgmt/worker-overview/worker-overview.html',
    controller: 'WorkerOverviewCtrl',
    controllerAs: 'workerOverviewCtrl',
    resolve: {
      /* @ngInject */
       books: function (workerService: WorkerService) {
       // return orderService.findAll();
       return ;
       }
    }
  })
}
