"use strict";
var WorkerOverviewCtrl = (function () {
    function WorkerOverviewCtrl(workerService) {
        this.workerService = workerService;
        this.displayed = [];
        this.itemsByPage = 5;
        this.paginationSizes = [5, 10, 15, 20, 25];
        this.findPositions();
        this.findAll();
    }
    WorkerOverviewCtrl.prototype.findPositions = function () {
        var that = this;
        this.workerService.findPositions().then(function (response) {
            that.positions = response.data;
        });
    };
    WorkerOverviewCtrl.prototype.findAll = function () {
        var that = this;
        this.workerService.findAll().then(function (data) {
            that.worker = data;
        });
    };
    WorkerOverviewCtrl.prototype.delete = function (id) {
        var that = this;
        this.workerService.delete(id).then(function () {
            var index = that.worker.findIndex(function (worker) { return worker.id === id; });
            that.worker.splice(index, 1);
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
    WorkerOverviewCtrl.prototype.addUser = function () {
        var that = this;
        this.workerService.openModal({}, this.positions).then(
        //close
        function (result) {
            that.workerService.save(result);
            that.worker.push(result);
        }, 
        //dismiss
        function (result) {
        });
    };
    WorkerOverviewCtrl.prototype.editUser = function (id) {
        var that = this;
        this.workerService.findOne(id).then(function (worker) {
            that.workerService.openModal(worker, that.positions).then(
            //close
            function (result) {
                that.workerService.update(result.id, result);
                var index = that.worker.findIndex(function (worker) { return worker.id === result.id; });
                that.updateArray(result, index);
            }, 
            //dismiss
            function (result) {
            });
        });
    };
    return WorkerOverviewCtrl;
}());
exports.WorkerOverviewCtrl = WorkerOverviewCtrl;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci1vdmVydmlldy93b3JrZXItb3ZlcnZpZXcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFPRSw0QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFMeEMsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQU1yQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDBDQUFhLEdBQWI7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxRQUFRO1lBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxtQ0FBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLE1BQWMsRUFBRSxLQUFLO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDO0lBRUQsb0NBQU8sR0FBUDtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUk7UUFDbEQsT0FBTztRQUNQLFVBQVUsTUFBTTtZQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFTLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCxTQUFTO1FBQ1QsVUFBVSxNQUFNO1FBRWhCLENBQUMsQ0FDRixDQUFBO0lBQ0gsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxFQUFVO1FBQ2pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxNQUFNO1lBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSTtZQUN2RCxPQUFPO1lBQ1AsVUFBVSxNQUFNO2dCQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQVUsTUFBTSxDQUFDLENBQUM7Z0JBQ3JELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxXQUFXLENBQVMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUFDRCxTQUFTO1lBQ1QsVUFBVSxNQUFNO1lBRWhCLENBQUMsQ0FDRixDQUFBO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQWpGQSxBQWlGQyxJQUFBO0FBakZZLDBCQUFrQixxQkFpRjlCLENBQUEiLCJmaWxlIjoid29ya2VyLW1nbXQvd29ya2VyLW92ZXJ2aWV3L3dvcmtlci1vdmVydmlldy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
