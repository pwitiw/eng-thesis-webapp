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
        return this.workerRestService.save(worker);
    };
    WorkerService.prototype.update = function (id, worker) {
        return this.workerRestService.update(id, worker);
    };
    WorkerService.prototype.deleteModal = function () {
        var that = this;
        var modalObject = {
            animation: true,
            controller: 'DeleteModalCtrl',
            controllerAs: 'deleteModalCtrl',
            templateUrl: 'general/template/delete-modal.tpl.html',
            size: 'sm',
            backdrop: 'static',
            resolve: {
                text: function () {
                    return 'Czy chcesz usunąć pracownika?';
                }
            }
        };
        return that.$uibModal.open(modalObject).result;
    };
    WorkerService.prototype.delete = function (id) {
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
    };
    WorkerService.prototype.openModal = function (worker, positions) {
        var that = this;
        var modalObject = {
            animation: true,
            controller: 'WorkerModalCtrl',
            controllerAs: 'workerModalCtrl',
            templateUrl: 'worker-mgmt/worker-modal/worker-modal.tpl.html',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQTtJQVdFLHVCQUFvQixpQkFBb0MsRUFBVSxTQUFjO1FBQTVELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBVmhGLHNCQUFzQjtRQUNkLFNBQUksR0FBUTtZQUNsQixNQUFNLEVBQUUsSUFBSTtZQUNaLEVBQUUsRUFBRSxJQUFJO1lBQ1IsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsRUFBRTtZQUNSLE9BQU8sRUFBRSxFQUFFO1lBQ1gsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO0lBSUYsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxNQUFjO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBVSxFQUFFLE1BQWM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksV0FBVyxHQUFHO1lBQ2hCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLGlCQUFpQjtZQUM3QixZQUFZLEVBQUUsaUJBQWlCO1lBQy9CLFdBQVcsRUFBRSx3Q0FBd0M7WUFDckQsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFO29CQUNKLE1BQU0sQ0FBQywrQkFBK0IsQ0FBQztnQkFDekMsQ0FBQzthQUNGO1NBQ0YsQ0FBQztRQUdGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDakQsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFBO0lBQzlDLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxNQUFNLEVBQUUsU0FBUztRQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxXQUFXLEdBQUc7WUFDaEIsU0FBUyxFQUFFLElBQUk7WUFDZixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFlBQVksRUFBRSxpQkFBaUI7WUFDL0IsV0FBVyxFQUFFLGdEQUFnRDtZQUM3RCxJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUU7b0JBQ0osTUFBTSxDQUFDLE1BQU0sQ0FBQTtnQkFDZixDQUFDO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNuQixDQUFDO2FBQ0Y7U0FDRixDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNqRCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQWxGQSxBQWtGQyxJQUFBO0FBbEZZLHFCQUFhLGdCQWtGekIsQ0FBQSIsImZpbGUiOiJ3b3JrZXItbWdtdC93b3JrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
