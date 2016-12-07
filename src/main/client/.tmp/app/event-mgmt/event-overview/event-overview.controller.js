"use strict";
var EventOverviewCtrl = (function () {
    function EventOverviewCtrl(eventService) {
        this.eventService = eventService;
        this.sda = 'test';
    }
    EventOverviewCtrl.prototype.delete = function (id) {
        this.eventService.delete(id);
    };
    return EventOverviewCtrl;
}());
exports.EventOverviewCtrl = EventOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQtb3ZlcnZpZXcvZXZlbnQtb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFJRSwyQkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFGOUMsUUFBRyxHQUFHLE1BQU0sQ0FBQztJQUliLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDSCx3QkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFkseUJBQWlCLG9CQVc3QixDQUFBIiwiZmlsZSI6ImV2ZW50LW1nbXQvZXZlbnQtb3ZlcnZpZXcvZXZlbnQtb3ZlcnZpZXcuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
