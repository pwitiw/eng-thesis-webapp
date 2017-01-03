import IStateProvider = angular.ui.IStateProvider;
import {IStateParamsService} from "angular-ui-router";
import ILocationService = angular.ILocationService;
/**
 * Created by PWITIW on 2016-12-31.
 */

export function addLoginPageStateDef($stateProvider: IStateProvider) {
  let url = '/login';

  return $stateProvider.state('login-page', {
      url: url,
      templateUrl: 'login-page/login-page.html'
    }
  )
}
