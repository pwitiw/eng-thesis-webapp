import IStateProvider = angular.ui.IStateProvider;
import {IStateParamsService} from "angular-ui-router";
import ILocationService = angular.ILocationService;
/**
 * Created by PWITIW on 2016-11-09.
 */

export function addMainPageStateDef($stateProvider: IStateProvider) {
  let url = '/';

  return $stateProvider.state('main-page', {
      url: url,
      templateUrl: 'main-page/main-page.html'
    }
  )
}
