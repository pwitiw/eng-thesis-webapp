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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQTtJQVdFLHVCQUFvQixpQkFBb0MsRUFBVSxTQUFjO1FBQTVELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBVmhGLHNCQUFzQjtRQUNkLFNBQUksR0FBUTtZQUNsQixNQUFNLEVBQUUsSUFBSTtZQUNaLEVBQUUsRUFBRSxJQUFJO1lBQ1IsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsRUFBRTtZQUNSLE9BQU8sRUFBRSxFQUFFO1lBQ1gsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO0lBSUYsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxNQUFjO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUV0RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBVSxFQUFFLE1BQWM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsNENBQTRDO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0Msb0JBQW9CO0lBQ3RCLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsTUFBTTtRQUNkLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsU0FBUztZQUMzRCxJQUFJLFdBQVcsR0FBRztnQkFDaEIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsVUFBVSxFQUFFLGlCQUFpQjtnQkFDN0IsWUFBWSxFQUFFLGlCQUFpQjtnQkFDL0IsV0FBVyxFQUFFLG9EQUFvRDtnQkFDakUsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUU7d0JBQ0osTUFBTSxDQUFDLE1BQU0sQ0FBQTtvQkFDZixDQUFDO29CQUNELFNBQVMsRUFBRTt3QkFDVCxNQUFNLENBQUMsU0FBUyxDQUFDO29CQUNuQixDQUFDO2lCQUNGO2FBQ0YsQ0FBQztZQUVGLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXJELGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUN2QixPQUFPO1lBQ1AsVUFBVSxNQUFNO2dCQUNkLElBQUksU0FBUyxHQUFHO29CQUNkLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtvQkFDYixNQUFNLEVBQUUsQ0FBQztvQkFDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7b0JBQ2pCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtvQkFDakIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO29CQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7aUJBQzFCLENBQUM7Z0JBQ0YsRUFBRSxDQUFBLENBQUUsT0FBTyxNQUFNLENBQUMsRUFBRSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLLElBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzVELElBQUksQ0FBQyxJQUFJLENBQVMsU0FBUyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFVLFNBQVMsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO1lBRUgsQ0FBQztZQUNELFNBQVM7WUFDVCxVQUFVLE1BQU07WUFFaEIsQ0FBQyxDQUNGLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxvQkFBQztBQUFELENBdkZBLEFBdUZDLElBQUE7QUF2RlkscUJBQWEsZ0JBdUZ6QixDQUFBIiwiZmlsZSI6Indvcmtlci1tZ210L3dvcmtlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
