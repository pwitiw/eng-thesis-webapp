"use strict";
var WorkerOverviewCtrl = (function () {
    function WorkerOverviewCtrl(workerService, toastService) {
        this.workerService = workerService;
        this.toastService = toastService;
        this.displayed = [];
        this.itemsByPage = 5;
        this.paginationSizes = [5, 10, 15, 20, 25];
        this.findPositions();
        this.findAll();
    }
    WorkerOverviewCtrl.prototype.findPositions = function () {
        var that = this;
        this.workerService.findPositions().then(function (response) {
            if (response.status == 200) {
                that.positions = response.data;
            }
            else {
                that.toastService.showSimpleToast("error", "Wystąpił błąd podczas wczytywania pozycji");
            }
        });
    };
    WorkerOverviewCtrl.prototype.findAll = function () {
        var that = this;
        this.workerService.findAll().then(function (response) {
            if (response.status == 200) {
                that.worker = response.data;
            }
            else {
                that.toastService.showSimpleToast("error", "Wystąpił błąd podczas wczytywania pracowników");
            }
        });
    };
    WorkerOverviewCtrl.prototype.delete = function (id) {
        var that = this;
        this.workerService.deleteModal().then(function (resultModal) {
            that.workerService.delete(id).then(function (response) {
                if (response.status == 200) {
                    var index = that.worker.findIndex(function (worker) { return worker.id === id; });
                    that.worker.splice(index, 1);
                    that.toastService.showSimpleToast("success", "Pracownik został usunięty");
                }
                else {
                    that.toastService.showSimpleToast("error", "Wystąpił błąd podczas usuwania pracownika");
                }
            });
        });
    };
    WorkerOverviewCtrl.prototype.addUser = function () {
        var that = this;
        this.workerService.openModal({}, this.positions).then(
        //close
        function (result) {
            that.workerService.save(result).then(function (response) {
                if (response.status == 200) {
                    that.worker.push(response.data);
                    that.toastService.showSimpleToast("success", "Pracownik został dodany");
                }
                else {
                    that.toastService.showSimpleToast("error", "Wystąpił błąd podczas dodawania pracownika");
                }
            });
        }, 
        //dismiss
        function (result) {
        });
    };
    WorkerOverviewCtrl.prototype.editUser = function (id) {
        var that = this;
        this.workerService.findOne(id).then(function (responseWorker) {
            if (responseWorker.status == 200) {
                that.workerService.openModal(responseWorker.data, that.positions).then(
                //close
                function (result) {
                    that.workerService.update(result.id, result).then(function (response) {
                        if (response.status == 200) {
                            var index = that.worker.findIndex(function (worker) { return worker.id === result.id; });
                            that.updateArray(result, index);
                            that.toastService.showSimpleToast("success", "Dane pracownika zostały zaktualizowane");
                        }
                        else {
                            that.toastService.showSimpleToast("error", "Wystąpił błąd podczas edycji pracownika");
                        }
                    });
                }, 
                //dismiss
                function (result) {
                });
            }
            else {
                that.toastService.showSimpleToast("error", "Wystąpił błąd podczas pobierania danych pracownika");
            }
        });
    };
    WorkerOverviewCtrl.prototype.updatePagination = function (size) {
        this.itemsByPage = size;
    };
    WorkerOverviewCtrl.prototype.updateArray = function (worker, index) {
        this.worker[index].name = worker.name;
        this.worker[index].surname = worker.surname;
        this.worker[index].position = worker.position;
        this.worker[index].code = worker.code;
        this.worker[index].active = worker.active;
    };
    return WorkerOverviewCtrl;
}());
exports.WorkerOverviewCtrl = WorkerOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci1vdmVydmlldy93b3JrZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0E7SUFPRSw0QkFBb0IsYUFBNEIsRUFBVSxZQUEwQjtRQUFoRSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBTDVFLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFNckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCwwQ0FBYSxHQUFiO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsUUFBUTtZQUN2RCxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLDJDQUEyQyxDQUFDLENBQUM7WUFDMUYsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFPLEdBQVA7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxRQUFRO1lBQ2pELEVBQUUsQ0FBQSxDQUFDLFFBQVEs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TUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQVUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsUUFBUTt3QkFDMUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDOzRCQUNyRSxJQUFJLENBQUMsV0FBVyxDQUFTLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzs0QkFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLHdDQUF3QyxDQUFDLENBQUM7d0JBQ3pGLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLHlDQUF5QyxDQUFDLENBQUM7d0JBQ3hGLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxTQUFTO2dCQUNULFVBQVUsTUFBTTtnQkFFaEIsQ0FBQyxDQUNGLENBQUE7WUFDSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLG9EQUFvRCxDQUFDLENBQUM7WUFDbkcsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFnQixHQUFoQixVQUFpQixJQUFZO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksTUFBYyxFQUFFLEtBQUs7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzVDLENBQUM7SUFFSCx5QkFBQztBQUFELENBaEhBLEFBZ0hDLElBQUE7QUFoSFksMEJBQWtCLHFCQWdIOUIsQ0FBQSIsImZpbGUiOiJ3b3JrZXItbWdtdC93b3JrZXItb3ZlcnZpZXcvd29ya2VyLW92ZXJ2aWV3LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
