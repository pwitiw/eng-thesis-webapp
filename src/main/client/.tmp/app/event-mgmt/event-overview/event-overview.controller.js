"use strict";
var EventOverviewCtrl = (function () {
    function EventOverviewCtrl(eventService) {
        this.eventService = eventService;
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
        this.delete(orderId, positionId).then(function (data) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQtb3ZlcnZpZXcvZXZlbnQtb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFPRSwyQkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFKOUMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUtiLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRWpCLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sT0FBZSxFQUFFLFVBQWtCO1FBQ3hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ2pELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLHlCQUFpQixvQkFnQzdCLENBQUEiLCJmaWxlIjoiZXZlbnQtbWdtdC9ldmVudC1vdmVydmlldy9ldmVudC1vdmVydmlldy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
