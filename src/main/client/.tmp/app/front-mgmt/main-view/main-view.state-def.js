"use strict";
/**
 * Created by PWITIW on 2016-12-06.
 */
function addMainViewStateDef($stateProvider) {
    return $stateProvider.state('order-overview', {
        url: '/',
        templateUrl: 'order-mgmt/order-overview/order-overview.html',
        controller: 'OrderOverviewCtrl',
        controllerAs: 'orderOverviewCtrl',
        resolve: {
            /* @ngInject */
            books: function (orderService) {
                // return orderService.findAll();
                return;
            }
        }
    });
}
exports.addMainViewStateDef = addMainViewStateDef;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250LW1nbXQvbWFpbi12aWV3L21haW4tdmlldy5zdGF0ZS1kZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBOztHQUVHO0FBRUgsNkJBQW9DLGNBQThCO0lBQ2hFLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFO1FBQzVDLEdBQUcsRUFBRSxHQUFHO1FBQ1IsV0FBVyxFQUFFLCtDQUErQztRQUM1RCxVQUFVLEVBQUUsbUJBQW1CO1FBQy9CLFlBQVksRUFBRSxtQkFBbUI7UUFDakMsT0FBTyxFQUFFO1lBQ1AsZUFBZTtZQUNkLEtBQUssRUFBRSxVQUFVLFlBQTBCO2dCQUMzQyxpQ0FBaUM7Z0JBQ2pDLE1BQU0sQ0FBRTtZQUNSLENBQUM7U0FDSDtLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFkZSwyQkFBbUIsc0JBY2xDLENBQUEiLCJmaWxlIjoiZnJvbnQtbWdtdC9tYWluLXZpZXcvbWFpbi12aWV3LnN0YXRlLWRlZi5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
