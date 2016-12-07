"use strict";
/**
 * Created by PWITIW on 2016-12-06.
 */
function addEventOverviewStateDef($stateProvider) {
    return $stateProvider.state('event-overview', {
        url: '/event-mgmt/events',
        templateUrl: 'event-mgmt/event-overview/event-overview.html',
        controller: 'EventOverviewCtrl',
        controllerAs: 'eventOverviewCtrl',
        resolve: {
            /* @ngInject */
            events: function (eventService) {
                // return orderService.findAll();
                return;
            }
        }
    });
}
exports.addEventOverviewStateDef = addEventOverviewStateDef;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQtb3ZlcnZpZXcvZXZlbnQtb3ZlcnZpZXcuc3RhdGUtZGVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQTs7R0FFRztBQUVILGtDQUF5QyxjQUE4QjtJQUNyRSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtRQUM1QyxHQUFHLEVBQUUsb0JBQW9CO1FBQ3pCLFdBQVcsRUFBRSwrQ0FBK0M7UUFDNUQsVUFBVSxFQUFFLG1CQUFtQjtRQUMvQixZQUFZLEVBQUUsbUJBQW1CO1FBQ2pDLE9BQU8sRUFBRTtZQUNQLGVBQWU7WUFDZCxNQUFNLEVBQUUsVUFBVSxZQUEwQjtnQkFDNUMsaUNBQWlDO2dCQUNqQyxNQUFNLENBQUU7WUFDUixDQUFDO1NBQ0g7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDO0FBZGUsZ0NBQXdCLDJCQWN2QyxDQUFBIiwiZmlsZSI6ImV2ZW50LW1nbXQvZXZlbnQtb3ZlcnZpZXcvZXZlbnQtb3ZlcnZpZXcuc3RhdGUtZGVmLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
