"use strict";
var WorkerOverviewCtrl = (function () {
    function WorkerOverviewCtrl(workerService) {
        this.workerService = workerService;
        this.displayed = [];
        this.itemsByPage = 5;
        this.worker = workerService.getWorker(); //TODO dajesz potem workerService.getWorker().findAll()
        this.paginationSizes = [5, 10, 15, 20, 25];
    }
    WorkerOverviewCtrl.prototype.delete = function (id) {
        alert("Usuniety z id = " + id);
        this.workerService.delete(id);
    };
    WorkerOverviewCtrl.prototype.updatePagination = function (size) {
        this.itemsByPage = size;
    };
    WorkerOverviewCtrl.prototype.addUser = function () {
        this.workerService.clearUser();
        this.workerService.openModal();
    };
    WorkerOverviewCtrl.prototype.editUser = function (id) {
        this.workerService.findOne(id);
        this.workerService.openModal();
    };
    return WorkerOverviewCtrl;
}());
exports.WorkerOverviewCtrl = WorkerOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci1vdmVydmlldy93b3JrZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFNRSw0QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFKaEQsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUtiLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsdURBQXVEO1FBQ2hHLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsb0NBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLEVBQVU7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQTlCQSxBQThCQyxJQUFBO0FBOUJZLDBCQUFrQixxQkE4QjlCLENBQUEiLCJmaWxlIjoid29ya2VyLW1nbXQvd29ya2VyLW92ZXJ2aWV3L3dvcmtlci1vdmVydmlldy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
