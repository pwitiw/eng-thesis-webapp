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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQTtJQXlCRSx1QkFBb0IsaUJBQW9DLEVBQVUsU0FBYztRQUE1RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBSztRQXhCaEYsc0JBQXNCO1FBQ2QsU0FBSSxHQUFRO1lBQ2xCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsT0FBTyxFQUFFLEVBQUU7WUFDWCxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7UUFDRix1QkFBdUI7UUFDZixXQUFNLEdBQWE7WUFDekIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDOUUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUM7WUFDaEYsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUM7WUFDakYsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUM7WUFDM0UsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUM7WUFDN0UsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUM7WUFDcEYsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDL0UsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDbEYsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDcEYsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDakYsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDakYsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDL0UsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDL0UsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxF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
