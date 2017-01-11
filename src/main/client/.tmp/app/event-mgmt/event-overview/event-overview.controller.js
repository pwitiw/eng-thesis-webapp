"use strict";
var EventOverviewCtrl = (function () {
    function EventOverviewCtrl(eventService, toastService, $stateParams) {
        this.eventService = eventService;
        this.toastService = toastService;
        this.displayed = [];
        this.id = $stateParams.id;
        this.itemsByPage = 5;
        this.paginationSizes = [5, 10, 15, 20, 25];
        if (this.id == "") {
            this.findAll();
        }
        else {
            this.findForId(this.id);
        }
    }
    EventOverviewCtrl.prototype.findAll = function () {
        var that = this;
        this.eventService.findAll().then(function (response) {
            if (response.status == 200) {
                that.events = response.data;
            }
            else {
                that.toastService.showSimpleToast("error", "Wystąpił błąd podczas wczytywania danych");
            }
        });
    };
    EventOverviewCtrl.prototype.findForId = function (id) {
        var that = this;
        this.eventService.findForWorker(id).then(function (response) {
            if (response.status == 200) {
                that.events = response.data;
            }
            else {
                that.toastService.showSimpleToast("error", "Wystąpił błąd podczas wczytywania danych");
            }
        });
    };
    EventOverviewCtrl.prototype.delete = function (orderId, positionId) {
        var that = this;
        this.eventService.delete(orderId, positionId).then(function (response) {
            if (response.status == 200) {
                var index = that.events.findIndex(response.data);
                that.events.splice(index, 1);
                that.toastService.showSimpleToast("success", "Element zostal usunięty");
            }
            else {
                that.toastService.showSimpleToast("error", "Wystąpił błąd podczas usuwania danych");
            }
        });
    };
    EventOverviewCtrl.prototype.updatePagination = function (size) {
        this.itemsByPage = size;
    };
    return EventOverviewCtrl;
}());
exports.EventOverviewCtrl = EventOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQtb3ZlcnZpZXcvZXZlbnQtb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFRRSwyQkFBb0IsWUFBMEIsRUFBVSxZQUEwQixFQUFFLFlBQVk7UUFBNUUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUwxRSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBTXJCLElBQUksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQztJQUVILENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsUUFBUTtZQUNoRCxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLDBDQUEwQyxDQUFDLENBQUE7WUFDeEYsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2xCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxRQUFRO1lBQ3hELEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQzlCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsMENBQTBDLENBQUMsQ0FBQTtZQUN4RixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsa0NBQU0sR0FBTixVQUFPLE9BQWUsRUFBRSxVQUFrQjtRQUN4QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLFFBQVE7WUFDbEUsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLHlCQUF5QixDQUFDLENBQUE7WUFDekUsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSx1Q0FBdUMsQ0FBQyxDQUFBO1lBQ3JGLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQTFEQSxBQTBEQyxJQUFBO0FBMURZLHlCQUFpQixvQkEwRDdCLENBQUEiLCJmaWxlIjoiZXZlbnQtbWdtdC9ldmVudC1vdmVydmlldy9ldmVudC1vdmVydmlldy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
