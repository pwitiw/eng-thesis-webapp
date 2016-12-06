"use strict";
var WorkerOverviewCtrl = (function () {
    function WorkerOverviewCtrl(workers, workerService) {
        this.workers = workers;
        this.workerService = workerService;
    }
    WorkerOverviewCtrl.prototype.delete = function (id) {
        this.workerService.delete(id);
    };
    return WorkerOverviewCtrl;
}());
exports.WorkerOverviewCtrl = WorkerOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci1vdmVydmlldy93b3JrZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7SUFJRSw0QkFBb0IsT0FBaUIsRUFBVSxhQUE0QjtRQUF2RCxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDM0UsQ0FBQztJQUVELG1DQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSwwQkFBa0IscUJBVTlCLENBQUEiLCJmaWxlIjoid29ya2VyLW1nbXQvd29ya2VyLW92ZXJ2aWV3L3dvcmtlci1vdmVydmlldy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
