"use strict";
var WorkerService = (function () {
    function WorkerService(workerRestService) {
        this.workerRestService = workerRestService;
        this.worker = [
            { code: 101, firstName: 'Adam', surname: 'Ugfsfd', position: "Pakowacz" },
            { code: 102, firstName: 'Artur', surname: 'Ksdfsdfds', position: "Monter" },
            { code: 103, firstName: 'Andrzej', surname: 'VCfdf', position: "Cokolwiek" },
            { code: 104, firstName: 'Alojzy', surname: 'Zse', position: "Siedzi" },
            { code: 105, firstName: 'Bernard', surname: 'Qwa', position: "CosRobi" },
            { code: 106, firstName: 'Kazimierz', surname: 'Ifd', position: "ResztaPakuje" },
            { code: 107, firstName: 'Wiesław', surname: 'Tdfd', position: "Pakowacz" },
            { code: 108, firstName: 'Stanisław', surname: 'Sdasd', position: "Pakowacz" },
            { code: 109, firstName: 'Włodzimierz', surname: 'Marrr', position: "Pakowacz" },
            { code: 110, firstName: 'Amadeusz', surname: 'Adss', position: "Pakowacz" },
            { code: 111, firstName: 'Konstanty', surname: 'Kss', position: "Pakowacz" },
            { code: 112, firstName: 'Hira', surname: 'Huytew', position: "Pakowacz" },
            { code: 113, firstName: 'Michał', surname: 'Sass', position: "Pakowacz" },
            { code: 114, firstName: 'Tomasz', surname: 'Kus', position: "Pakowacz" },
            { code: 115, firstName: 'Pali', surname: 'Woda', position: "Pakowacz" },
        ];
    }
    WorkerService.prototype.getWorker = function () {
        return this.worker;
    };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci1tZ210L3dvcmtlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQTtJQWtCRSx1QkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFqQmhELFdBQU0sR0FBYTtZQUN6QixFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDdkUsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDO1lBQ3pFLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQztZQUMxRSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUM7WUFDcEUsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDO1lBQ3RFLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQztZQUM3RSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDeEUsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO1lBQzNFLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztZQUM3RSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDekUsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO1lBQ3pFLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztZQUN2RSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7WUFDdkUsRUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO1lBQ3RFLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztTQUN0RSxDQUFDO0lBR0YsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLE1BQWM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0Msb0JBQW9CO0lBQ3RCLENBQUM7SUFDSCxvQkFBQztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ1kscUJBQWEsZ0JBMEN6QixDQUFBIiwiZmlsZSI6Indvcmtlci1tZ210L3dvcmtlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
