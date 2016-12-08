"use strict";
var WorkerOverviewCtrl = (function () {
    function WorkerOverviewCtrl(workerService) {
        this.workerService = workerService;
        this.abc = 'test';
        //this.worker = workerService.findOne(2);
    }
    WorkerOverviewCtrl.prototype.delete = function (id) {
        this.workerService.delete(id);
    };
    return WorkerOverviewCtrl;
}());
exports.WorkerOverviewCtrl = WorkerOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci1vdmVydmlldy93b3JrZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFJRSw0QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFGaEQsUUFBRyxHQUFDLE1BQU0sQ0FBRTtRQUdWLHlDQUF5QztJQUMzQyxDQUFDO0lBRUQsbUNBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLDBCQUFrQixxQkFXOUIsQ0FBQSIsImZpbGUiOiJ3b3JrZXItbWdtdC93b3JrZXItb3ZlcnZpZXcvd29ya2VyLW92ZXJ2aWV3LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
