"use strict";
var WorkerService = (function () {
    function WorkerService(workerRestService, $uibModal) {
        this.workerRestService = workerRestService;
        this.$uibModal = $uibModal;
        //DO edycji pracownika
        this.user = {
            active: null,
            id: null,
            code: null,
            name: "",
            surname: "",
            position: ""
        };
    }
    WorkerService.prototype.save = function (worker) {
        this.workerRestService.save(worker).then(function (data) {
        });
    };
    WorkerService.prototype.update = function (id, worker) {
        this.workerRestService.update(id, worker);
    };
    WorkerService.prototype.delete = function (id) {
        //this.worker.pop(); //usuwa ostatni element
        return this.workerRestService.delete(id);
    };
    WorkerService.prototype.findPositions = function () {
        return this.workerRestService.getPositions();
    };
    WorkerService.prototype.findOne = function (id) {
        return this.workerRestService.getWorker(id);
    };
    WorkerService.prototype.findAll = function () {
        return this.workerRestService.getWorkers();
        //return this.books;
    };
    WorkerService.prototype.openModal = function (worker, positions) {
        var that = this;
        var modalObject = {
            animation: true,
            controller: 'WorkerModalCtrl',
            controllerAs: 'workerModalCtrl',
            templateUrl: 'worker-mgmt/components-modal/worker-modal.tpl.html',
            size: 'md',
            backdrop: 'static',
            resolve: {
                user: function () {
                    return worker;
                },
                positions: function () {
                    return positions;
                }
            }
        };
        return that.$uibModal.open(modalObject).result;
    };
    return WorkerService;
}());
exports.WorkerService = WorkerService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQTtJQVdFLHVCQUFvQixpQkFBb0MsRUFBVSxTQUFjO1FBQTVELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBVmhGLHNCQUFzQjtRQUNkLFNBQUksR0FBUTtZQUNsQixNQUFNLEVBQUUsSUFBSTtZQUNaLEVBQUUsRUFBRSxJQUFJO1lBQ1IsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsRUFBRTtZQUNSLE9BQU8sRUFBRSxFQUFFO1lBQ1gsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO0lBSUYsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxNQUFjO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUV0RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBVSxFQUFFLE1BQWM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsNENBQTRDO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLEVBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNDLG9CQUFvQjtJQUN0QixDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLE1BQU0sRUFBRSxTQUFTO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVkLElBQUksV0FBVyxHQUFHO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1lBQy9CLFdBQVcsRUFBRSxvREFBb0Q7WUFDakUsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFO29CQUNKLE1BQU0sQ0FBQyxNQUFNLENBQUE7Z0JBQ2YsQ0FBQztnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDbkIsQ0FBQzthQUNGO1NBQ0YsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbkQsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FqRUEsQUFpRUMsSUFBQTtBQWpFWSxxQkFBYSxnQkFpRXpCLENBQUEiLCJmaWxlIjoid29ya2VyLW1nbXQvd29ya2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
