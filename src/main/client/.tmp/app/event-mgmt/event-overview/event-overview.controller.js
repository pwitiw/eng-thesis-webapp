"use strict";
var EventOverviewCtrl = (function () {
    function EventOverviewCtrl(eventService) {
        this.eventService = eventService;
        this.sample = 'sampmle';
        // this.events = eventService.getEvent();
    }
    EventOverviewCtrl.prototype.delete = function (id) {
        this.eventService.delete(id);
    };
    return EventOverviewCtrl;
}());
exports.EventOverviewCtrl = EventOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQtb3ZlcnZpZXcvZXZlbnQtb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFJRSwyQkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFGOUMsV0FBTSxHQUFDLFNBQVMsQ0FBQztRQUdmLHlDQUF5QztJQUMzQyxDQUFDO0lBRUQsa0NBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLHlCQUFpQixvQkFXN0IsQ0FBQSIsImZpbGUiOiJldmVudC1tZ210L2V2ZW50LW92ZXJ2aWV3L2V2ZW50LW92ZXJ2aWV3LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
