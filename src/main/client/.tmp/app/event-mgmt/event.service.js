"use strict";
var EventService = (function () {
    function EventService(eventRestService) {
        this.eventRestService = eventRestService;
    }
    EventService.prototype.delete = function (orderId, positionId) {
        return this.eventRestService.deleteEvent(orderId, positionId);
    };
    EventService.prototype.findAll = function () {
        return this.eventRestService.getEvents();
    };
    return EventService;
}());
exports.EventService = EventService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFDRSxzQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFdEQsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxPQUFlLEVBQUUsVUFBa0I7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFHRCw4QkFBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLG9CQUFZLGVBYXhCLENBQUEiLCJmaWxlIjoiZXZlbnQtbWdtdC9ldmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
