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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQtb3ZlcnZpZXcvZXZlbnQtb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFPRSwyQkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFKdEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUtyQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVqQixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsa0NBQU0sR0FBTixVQUFPLE9BQWUsRUFBRSxVQUFrQjtRQUN4QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDOUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDRDQUFnQixHQUFoQixVQUFpQixJQUFZO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFDSCx3QkFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1kseUJBQWlCLG9CQWdDN0IsQ0FBQSIsImZpbGUiOiJldmVudC1tZ210L2V2ZW50LW92ZXJ2aWV3L2V2ZW50LW92ZXJ2aWV3LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
