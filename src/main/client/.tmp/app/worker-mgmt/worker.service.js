"use strict";
var WorkerService = (function () {
    function WorkerService(workerRestService) {
        this.workerRestService = workerRestService;
        this.worker = [
            { id: 1, title: 'Angular', author: 'Henryk Sienkiewicz' },
            { id: 2, title: 'Java', author: 'Maria Konopnicka' },
            { id: 3, title: 'Programming mysteries', author: 'Paulo Coelho' }
        ];
    }
    WorkerService.prototype.save = function (worker) {
        this.workerRestService.save(worker);
    };
    WorkerService.prototype.delete = function (id) {
        this.workerRestService.delete(id);
    };
    WorkerService.prototype.findOne = function (id) {
        return this.workerRestService.getWorker(id);
    };
    WorkerService.prototype.findAll = function () {
        return this.workerRestService.getWorkers();
        //return this.books;
    };
    return WorkerService;
}());
exports.WorkerService = WorkerService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQTtJQU1FLHVCQUFvQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUxoRCxXQUFNLEdBQWE7WUFDekIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFDO1lBQ3ZELEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBQztZQUNsRCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUM7U0FDaEUsQ0FBQztJQUdGLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssTUFBYztRQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQyxvQkFBb0I7SUFDdEIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSxxQkFBYSxnQkEwQnpCLENBQUEiLCJmaWxlIjoid29ya2VyLW1nbXQvd29ya2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2FwcCJ9
