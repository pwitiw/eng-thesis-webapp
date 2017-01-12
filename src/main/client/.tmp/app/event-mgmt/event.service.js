"use strict";
var EventService = (function () {
    function EventService(eventRestService, workerRestService) {
        this.eventRestService = eventRestService;
        this.workerRestService = workerRestService;
    }
    EventService.prototype.delete = function (orderId, positionId) {
        return this.eventRestService.delete(orderId, positionId);
    };
    EventService.prototype.findAll = function () {
        return this.eventRestService.getEvents();
    };
    EventService.prototype.findForWorker = function (id) {
        return this.workerRestService.getEvents(id);
    };
    return EventService;
}());
exports.EventService = EventService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFDRSxzQkFBb0IsZ0JBQWtDLEVBQVUsaUJBQW9DO1FBQWhGLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBRXBHLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sT0FBZSxFQUFFLFVBQWtCO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxFQUFTO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDSCxtQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksb0JBQVksZUFnQnhCLENBQUEiLCJmaWxlIjoiZXZlbnQtbWdtdC9ldmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
