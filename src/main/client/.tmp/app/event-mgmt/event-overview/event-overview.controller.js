"use strict";
var EventOverviewCtrl = (function () {
    function EventOverviewCtrl(eventService, toastService) {
        this.eventService = eventService;
        this.toastService = toastService;
        this.displayed = [];
        this.itemsByPage = 5;
        this.paginationSizes = [5, 10, 15, 20, 25];
        this.findAll();
    }
    EventOverviewCtrl.prototype.findAll = function () {
        var that = this;
        this.eventService.findAll().then(function (data) {
            that.events = data;
        });
    };
    EventOverviewCtrl.prototype.delete = function (orderId, positionId) {
        var that = this;
        this.eventService.delete(orderId, positionId).then(function (data) {
            var index = that.events.findIndex(data);
            that.events.splice(index, 1);
        });
    };
    EventOverviewCtrl.prototype.updatePagination = function (size) {
        this.itemsByPage = size;
    };
    return EventOverviewCtrl;
}());
exports.EventOverviewCtrl = EventOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQtb3ZlcnZpZXcvZXZlbnQtb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFPRSwyQkFBb0IsWUFBMEIsRUFBVSxZQUEwQjtRQUE5RCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSjFFLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFLckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFakIsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxPQUFlLEVBQUUsVUFBa0I7UUFDeEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQzlELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLHlCQUFpQixvQkFnQzdCLENBQUEiLCJmaWxlIjoiZXZlbnQtbWdtdC9ldmVudC1vdmVydmlldy9ldmVudC1vdmVydmlldy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
