export function CustomTableDirectiveFactory(){
  return{
    //restrict: 'E',
     templateUrl: 'general/directives/custom-table/custom-table.directive.tpl.html',
   // templateUrl: 'order-mgmt/order-overview/order-overview.html',
  //  scope: {
      // details: '=',
      // updateStatistik: '&',
      // hasEditRole: '='                    tutaj sa parametry jakie wchodza do dyrektywy
    //}//,
    //controllerAs: 'eaDetailsStatistics',
    //controller: EaDetailsStatisticsDirectiveCtrl
  };
}
