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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS9ldmVudC1vdmVydmlldy5zdGF0ZS1kZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBOztHQUVHO0FBRUgsa0NBQXlDLGNBQThCO0lBQ3JFLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFO1FBQzVDLEdBQUcsRUFBRSxvQkFBb0I7UUFDekIsV0FBVyxFQUFFLCtDQUErQztRQUM1RCxVQUFVLEVBQUUsbUJBQW1CO1FBQy9CLFlBQVksRUFBRSxtQkFBbUI7UUFDakMsT0FBTyxFQUFFO1lBQ1AsZUFBZTtZQUNkLE1BQU0sRUFBRSxVQUFVLFlBQTBCO2dCQUM1QyxpQ0FBaUM7Z0JBQ2pDLE1BQU0sQ0FBRTtZQUNSLENBQUM7U0FDSDtLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFkZSxnQ0FBd0IsMkJBY3ZDLENBQUEiLCJmaWxlIjoibWFpbi1wYWdlL2V2ZW50LW92ZXJ2aWV3LnN0YXRlLWRlZi5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
