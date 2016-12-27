"use strict";
var WorkerOverviewCtrl = (function () {
    function WorkerOverviewCtrl(workerService) {
        this.workerService = workerService;
        this.displayed = [];
        this.itemsByPage = 5;
        this.worker = workerService.getWorker();
        this.paginationSizes = [5, 10, 15, 20, 25];
    }
    WorkerOverviewCtrl.prototype.delete = function (id) {
        alert("Usuniety z id = " + id);
        this.workerService.delete(id);
    };
    WorkerOverviewCtrl.prototype.updatePagination = function (size) {
        this.itemsByPage = size;
    };
    WorkerOverviewCtrl.prototype.add = function (code, firstName, surname, position) {
        var newWorker = {
            code: code,
            firstName: firstName,
            surname: surname,
            position: position
        };
        this.workerService.save(newWorker);
    };
    return WorkerOverviewCtrl;
}());
exports.WorkerOverviewCtrl = WorkerOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci1vdmVydmlldy93b3JrZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFNRSw0QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFKaEQsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUtiLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0NBQUcsR0FBSCxVQUFJLElBQVksRUFBRSxTQUFpQixFQUFFLE9BQWUsRUFBRSxRQUFnQjtRQUNwRSxJQUFJLFNBQVMsR0FBRztZQUNkLElBQUksRUFBRSxJQUFJO1lBQ1YsU0FBUyxFQUFFLFNBQVM7WUFDcEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFTLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDSCx5QkFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlksMEJBQWtCLHFCQStCOUIsQ0FBQSIsImZpbGUiOiJ3b3JrZXItbWdtdC93b3JrZXItb3ZlcnZpZXcvd29ya2VyLW92ZXJ2aWV3LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
