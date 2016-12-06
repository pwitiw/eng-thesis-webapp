"use strict";
/**
 * Created by PWITIW on 2016-12-06.
 */
function addOrderOverviewStateDef($stateProvider) {
    return $stateProvider.state('order-overview', {
        url: '/order-mgmt/orders',
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
exports.addOrderOverviewStateDef = addOrderOverviewStateDef;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb250LW1nbXQvb3JkZXItb3ZlcnZpZXcvb3JkZXItb3ZlcnZpZXcuc3RhdGUtZGVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTs7R0FFRztBQUVILGtDQUF5QyxjQUE4QjtJQUNyRSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtRQUM1QyxHQUFHLEVBQUUsb0JBQW9CO1FBQ3pCLFdBQVcsRUFBRSwrQ0FBK0M7UUFDNUQsVUFBVSxFQUFFLG1CQUFtQjtRQUMvQixZQUFZLEVBQUUsbUJBQW1CO1FBQ2pDLE9BQU8sRUFBRTtZQUNQLGVBQWU7WUFDZCxLQUFLLEVBQUUsVUFBVSxZQUEwQjtnQkFDM0MsaUNBQWlDO2dCQUNqQyxNQUFNLENBQUU7WUFDUixDQUFDO1NBQ0g7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDO0FBZGUsZ0NBQXdCLDJCQWN2QyxDQUFBIiwiZmlsZSI6ImZyb250LW1nbXQvb3JkZXItb3ZlcnZpZXcvb3JkZXItb3ZlcnZpZXcuc3RhdGUtZGVmLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
