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
        this.workerRestService.save(worker);
    };
    WorkerService.prototype.update = function (id, worker) {
        this.workerRestService.update(id, worker);
    };
    WorkerService.prototype.delete = function (id) {
        //this.worker.pop(); //usuwa ostatni element
        return this.workerRestService.delete(id);
    };
    WorkerService.prototype.findOne = function (id) {
        return this.workerRestService.getWorker(id);
    };
    WorkerService.prototype.findAll = function () {
        return this.workerRestService.getWorkers();
        //return this.books;
    };
    WorkerService.prototype.openModal = function (worker) {
        var that = this;
        this.workerRestService.getPositions().then(function (positions) {
            var modalObject = {
                animation: true,
                controller: 'WorkerModalCtrl',
                controllerAs: 'workerModalCtrl',
                templateUrl: 'worker-mgmt/components-modal/worker-modal.tpl.html',
                size: 'md',
                resolve: {
                    user: function () {
                        return worker;
                    },
                    positions: function () {
                        return positions;
                    }
                }
            };
            var modalInstance = that.$uibModal.open(modalObject);
            modalInstance.result.then(
            //close
            function (result) {
                var newWorker = {
                    id: result.id,
                    active: 1,
                    code: result.code,
                    name: result.name,
                    surname: result.surname,
                    position: result.position
                };
                if (typeof result.id === 'undefined' || result.id === null) {
                    that.save(newWorker);
                }
                else {
                    that.update(result.id, newWorker);
                }
            }, 
            //dismiss
            function (result) {
            });
        });
    };
    return WorkerService;
}());
exports.WorkerService = WorkerService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQTtJQVdFLHVCQUFvQixpQkFBb0MsRUFBVSxTQUFjO1FBQTVELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBVmhGLHNCQUFzQjtRQUNkLFNBQUksR0FBUTtZQUNsQixNQUFNLEVBQUUsSUFBSTtZQUNaLEVBQUUsRUFBRSxJQUFJO1lBQ1IsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsRUFBRTtZQUNSLE9BQU8sRUFBRSxFQUFFO1lBQ1gsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO0lBSUYsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxNQUFjO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxFQUFVLEVBQUUsTUFBYztRQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEVBQVU7UUFDZiw0Q0FBNEM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQyxvQkFBb0I7SUFDdEIsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxTQUFTO1lBQzNELElBQUksV0FBVyxHQUFHO2dCQUNoQixTQUFTLEVBQUUsSUFBSTtnQkFDZixVQUFVLEVBQUUsaUJBQWlCO2dCQUM3QixZQUFZLEVBQUUsaUJBQWlCO2dCQUMvQixXQUFXLEVBQUUsb0RBQW9EO2dCQUNqRSxJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFO3dCQUNKLE1BQU0sQ0FBQyxNQUFNLENBQUE7b0JBQ2YsQ0FBQztvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsTUFBTSxDQUFDLFNBQVMsQ0FBQztvQkFDbkIsQ0FBQztpQkFDRjthQUNGLENBQUM7WUFFRixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVyRCxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDdkIsT0FBTztZQUNQLFVBQVUsTUFBTTtnQkFDZCxJQUFJLFNBQVMsR0FBRztvQkFDZCxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7b0JBQ2IsTUFBTSxFQUFFLENBQUM7b0JBQ1QsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO29CQUNqQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7b0JBQ2pCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztvQkFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO2lCQUMxQixDQUFDO2dCQUNGLEVBQUUsQ0FBQSxDQUFFLE9BQU8sTUFBTSxDQUFDLEVBQUUsS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxJQUFLLENBQUMsQ0FBQyxDQUFDO29CQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFTLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBVSxTQUFTLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztZQUVILENBQUM7WUFDRCxTQUFTO1lBQ1QsVUFBVSxNQUFNO1lBRWhCLENBQUMsQ0FDRixDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQXBGQSxBQW9GQyxJQUFBO0FBcEZZLHFCQUFhLGdCQW9GekIsQ0FBQSIsImZpbGUiOiJ3b3JrZXItbWdtdC93b3JrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvYXBwIn0=
