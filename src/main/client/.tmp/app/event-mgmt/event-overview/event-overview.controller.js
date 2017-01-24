"use strict";
var EventOverviewCtrl = (function () {
    function EventOverviewCtrl(eventService, toastService, $stateParams) {
        this.eventService = eventService;
        this.toastService = toastService;
        this.displayed = [];
        this.id = $stateParams.id;
        this.paginationSizes = [10, 10, 15, 20, 25];
        this.itemsByPage = 10; //this.paginationSizes[0];
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
                that.events = response.data.events;
                that.name = response.data.name + " " + response.data.surname;
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
                var index = that.events.findIndex(function (event) { return (event.orderId === orderId) && (event.positionId === positionId); });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LW1nbXQvZXZlbnQtb3ZlcnZpZXcvZXZlbnQtb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFTRSwyQkFBb0IsWUFBMEIsRUFBVSxZQUEwQixFQUFFLFlBQVk7UUFBNUUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU4xRSxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBT3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUEsMEJBQTBCO1FBQ2hELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQztJQUVILENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsUUFBUTtZQUNoRCxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM5QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLDBDQUEwQyxDQUFDLENBQUE7WUFDeEYsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2xCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxRQUFRO1lBQ3hELEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDL0QsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSwwQ0FBMEMsQ0FBQyxDQUFBO1lBQ3hGLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sT0FBZSxFQUFFLFVBQWtCO1FBQ3hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsUUFBUTtZQUNsRSxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsRUFBaEUsQ0FBZ0UsQ0FBQyxDQUFDO2dCQUM3RyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSx5QkFBeUIsQ0FBQyxDQUFBO1lBQ3pFLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsdUNBQXVDLENBQUMsQ0FBQTtZQUNyRixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsNENBQWdCLEdBQWhCLFVBQWlCLElBQVk7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0E1REEsQUE0REMsSUFBQTtBQTVEWSx5QkFBaUIsb0JBNEQ3QixDQUFBIiwiZmlsZSI6ImV2ZW50LW1nbXQvZXZlbnQtb3ZlcnZpZXcvZXZlbnQtb3ZlcnZpZXcuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
