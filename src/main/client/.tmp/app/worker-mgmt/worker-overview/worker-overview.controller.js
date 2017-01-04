"use strict";
var WorkerOverviewCtrl = (function () {
    function WorkerOverviewCtrl(workerService) {
        this.workerService = workerService;
        this.displayed = [];
        this.itemsByPage = 5;
        this.paginationSizes = [5, 10, 15, 20, 25];
        this.findAll();
    }
    WorkerOverviewCtrl.prototype.findAll = function () {
        var that = this;
        this.workerService.findAll().then(function (data) {
            that.worker = data;
        });
    };
    WorkerOverviewCtrl.prototype.delete = function (id) {
        var that = this;
        this.workerService.delete(id).then(function () {
            var index = that.worker.findIndex(function (worker) { return worker.id === id; });
            that.worker.splice(index, 1);
        });
    };
    WorkerOverviewCtrl.prototype.updatePagination = function (size) {
        this.itemsByPage = size;
    };
    WorkerOverviewCtrl.prototype.addUser = function () {
        this.workerService.openModal();
    };
    WorkerOverviewCtrl.prototype.editUser = function (id) {
        var that = this;
        this.workerService.findOne(id).then(function (worker) {
            that.workerService.openModal(worker);
        });
    };
    return WorkerOverviewCtrl;
}());
exports.WorkerOverviewCtrl = WorkerOverviewCtrl;
utr;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci1vdmVydmlldy93b3JrZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFNRSw0QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFKeEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUtyQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsb0NBQU8sR0FBUDtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsbUNBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQWdCLEdBQWhCLFVBQWlCLElBQVk7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELG9DQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxxQ0FBUSxHQUFSLFVBQVMsRUFBVTtRQUNqQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsTUFBTTtZQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx5QkFBQztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ1ksMEJBQWtCLHFCQTBDOUIsQ0FBQTtBQUNELEdBQUcsQ0FBQSIsImZpbGUiOiJ3b3JrZXItbWdtdC93b3JrZXItb3ZlcnZpZXcvd29ya2VyLW92ZXJ2aWV3LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
