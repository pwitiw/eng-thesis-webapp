"use strict";
var WorkerService = (function () {
    function WorkerService(workerRestService, $uibModal) {
        this.workerRestService = workerRestService;
        this.$uibModal = $uibModal;
        //DO edycji pracownika
        this.user = {
            firstName: "",
            surname: "",
            position: ""
        };
        //zamiast restowego api
        this.worker = [
            { id: 1, code: 101, firstName: 'Adam', surname: 'Ugfsfd', position: "Pakowacz" },
            { id: 2, code: 102, firstName: 'Artur', surname: 'Ksdfsdfds', position: "Monter" },
            { id: 3, code: 103, firstName: 'Andrzej', surname: 'VCfdf', position: "Cokolwiek" },
            { id: 4, code: 104, firstName: 'Alojzy', surname: 'Zse', position: "Siedzi" },
            { id: 5, code: 105, firstName: 'Bernard', surname: 'Qwa', position: "CosRobi" },
            { id: 6, code: 106, firstName: 'Kazimierz', surname: 'Ifd', position: "ResztaPakuje" },
            { id: 7, code: 107, firstName: 'Wiesław', surname: 'Tdfd', position: "Pakowacz" },
            { id: 8, code: 108, firstName: 'Stanisław', surname: 'Sdasd', position: "Pakowacz" },
            { id: 9, code: 109, firstName: 'Włodzimierz', surname: 'Marrr', position: "Pakowacz" },
            { id: 10, code: 110, firstName: 'Amadeusz', surname: 'Adss', position: "Pakowacz" },
            { id: 11, code: 111, firstName: 'Konstanty', surname: 'Kss', position: "Pakowacz" },
            { id: 12, code: 112, firstName: 'Hira', surname: 'Huytew', position: "Pakowacz" },
            { id: 13, code: 113, firstName: 'Michał', surname: 'Sass', position: "Pakowacz" },
            { id: 14, code: 114, firstName: 'Tomasz', surname: 'Kus', position: "Pakowacz" },
            { id: 15, code: 115, firstName: 'Pali', surname: 'Woda', position: "Pakowacz" },
        ];
    }
    //tylko, jak nie ma restowegoapi
    WorkerService.prototype.getWorker = function () {
        return this.worker;
    };
    WorkerService.prototype.save = function (worker) {
        this.worker.push(worker);
        //this.workerRestService.save(worker);
    };
    WorkerService.prototype.delete = function (id) {
        this.worker.pop(); //usuwa ostatni element
        //this.workerRestService.delete(id);
    };
    WorkerService.prototype.findOne = function (id) {
        //TODO zamiast this.worker[id-1] dajesz this.workerRestService.getWorker(id)
        var worker = this.worker[id - 1]; //-1, bo tablica obecnie
        this.user = {
            firstName: worker.firstName,
            surname: worker.surname,
            position: worker.position
        };
        //return this.workerRestService.getWorker(id);
    };
    WorkerService.prototype.findAll = function () {
        return this.workerRestService.getWorkers();
        //return this.books;
    };
    WorkerService.prototype.clearUser = function () {
        this.user = {
            firstName: "",
            surname: "",
            position: ""
        };
    };
    WorkerService.prototype.openModal = function () {
        var that = this;
        var modalObject = {
            animation: true,
            controller: 'WorkerModalCtrl',
            controllerAs: 'workerModalCtrl',
            templateUrl: 'worker-mgmt/components-modal/worker-modal.tpl.html',
            size: 'md',
            resolve: {
                user: that.user
            }
        };
        var modalInstance = this.$uibModal.open(modalObject);
        modalInstance.result.then(
        //close
        function (result) {
            var newWorker = {
                code: 234,
                firstName: result.firstName,
                surname: result.surname,
                position: result.position
            };
            that.save(newWorker);
        }, 
        //dismiss
        function (result) {
        });
    };
    return WorkerService;
}());
exports.WorkerService = WorkerService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQTtJQXlCRSx1QkFBb0IsaUJBQW9DLEVBQVUsU0FBYztRQUE1RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBSztRQXhCaEYsc0JBQXNCO1FBQ2QsU0FBSSxHQUFHO1lBQ2IsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztRQUNGLHVCQUF1QjtRQUNmLFdBQU0sR0FBYTtZQUN6QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztZQUM5RSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQztZQUNoRixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQztZQUNqRixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQztZQUMzRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQztZQUM3RSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQztZQUNwRixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztZQUMvRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztZQUNsRixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztZQUNwRixFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztZQUNqRixFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztZQUNqRixFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztZQUMvRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztZQUMvRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVB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
