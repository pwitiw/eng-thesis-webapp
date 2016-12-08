import IStateProvider = angular.ui.IStateProvider;
import {IStateParamsService} from "angular-ui-router";
import ILocationService = angular.ILocationService;
/**
 * Created by PWITIW on 2016-12-06.
 */

export function addEventOverviewStateDef($stateProvider: IStateProvider) {
  return $stateProvider.state('event-overview', {
    url: '/event-mgmt/events',
    templateUrl: 'event-mgmt/event-overview/event-overview.html',
    controller: 'EventOverviewCtrl',
    controllerAs: 'eventOverviewCtrl'
  })
}
