"use strict";
/**
 * Created by PWITIW on 2016-12-06.
 */
function addWorkerOverviewStateDef($stateProvider) {
    return $stateProvider.state('worker-overview', {
        url: '/worker-mgmt/workers',
        templateUrl: 'worker-mgmt/worker-overview/worker-overview.html',
        controller: 'WorkerOverviewCtrl',
        controllerAs: 'workerOverviewCtrl',
        resolve: {
            /* @ngInject */
            books: function (workerService) {
                // return orderService.findAll();
                return;
            }
        }
    });
}
exports.addWorkerOverviewStateDef = addWorkerOverviewStateDef;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci1vdmVydmlldy93b3JrZXItb3ZlcnZpZXcuc3RhdGUtZGVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTs7R0FFRztBQUVILG1DQUEwQyxjQUE4QjtJQUN0RSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtRQUM3QyxHQUFHLEVBQUUsc0JBQXNCO1FBQzNCLFdBQVcsRUFBRSxrREFBa0Q7UUFDL0QsVUFBVSxFQUFFLG9CQUFvQjtRQUNoQyxZQUFZLEVBQUUsb0JBQW9CO1FBQ2xDLE9BQU8sRUFBRTtZQUNQLGVBQWU7WUFDZCxLQUFLLEVBQUUsVUFBVSxhQUE0QjtnQkFDN0MsaUNBQWlDO2dCQUNqQyxNQUFNLENBQUU7WUFDUixDQUFDO1NBQ0g7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDO0FBZGUsaUNBQXlCLDRCQWN4QyxDQUFBIiwiZmlsZSI6Indvcmtlci1tZ210L3dvcmtlci1vdmVydmlldy93b3JrZXItb3ZlcnZpZXcuc3RhdGUtZGVmLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
