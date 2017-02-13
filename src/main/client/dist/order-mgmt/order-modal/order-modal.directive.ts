import {OrderModalCtrl} from "./order-modal.controller";
export function OrderModalDirective(){
  return{
    restrict: 'E',
    templateUrl: 'order-mgmt/order-modal/order-modal.html',
    controller: 'OrderModalCtrl',
    controllerAs: 'orderModalCtrl',
    //  scope: {
    // details: '=',
    // updateStatistik: '&',
    // hasEditRole: '='                    tutaj sa parametry jakie wchodza do dyrektywy
    //}//,

  };
}
