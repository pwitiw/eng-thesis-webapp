"use strict";
var WorkerRestService = (function () {
    function WorkerRestService($http) {
        this.$http = $http;
        this.restServiceUrl = 'http://localhost:8080';
    }
    WorkerRestService.prototype.getPositions = function () {
        return this.$http.get(this.restServiceUrl + '/workers/positions')
            .then(function (response) {
            return response.data;
        });
    };
    WorkerRestService.prototype.getWorkers = function () {
        return this.$http.get(this.restServiceUrl + '/workers/')
            .then(function (response) {
            return response.data;
        });
    };
    WorkerRestService.prototype.getWorker = function (id) {
        return this.$http.get(this.restServiceUrl + '/workers/' + id)
            .then(function (response) {
            return response.data;
        });
    };
    WorkerRestService.prototype.save = function (worker) {
        var config;
        return this.$http.post(this.restServiceUrl + '/workers', worker)
            .then(function (response) {
            return response.data;
        });
    };
    WorkerRestService.prototype.update = function (id, worker) {
        var config;
        return this.$http.put(this.restServiceUrl + '/workers/' + id, worker)
            .then(function (response) {
            return response.data;
        });
    };
    WorkerRestService.prototype.delete = function (id) {
        var config;
        return this.$http.delete(this.restServiceUrl + '/workers/' + id)
            .then(function (response) {
            return response.data;
        });
    };
    return WorkerRestService;
}());
exports.WorkerRestService = WorkerRestService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy93b3JrZXJSZXN0U2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQTtJQUdFLDJCQUFvQixLQUFtQjtRQUFuQixVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsdUJBQXVCLENBQUM7SUFDaEQsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQzthQUM5RCxJQUFJLENBQUMsVUFBQyxRQUE4QztZQUNuRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO2FBQ3JELElBQUksQ0FBQyxVQUFDLFFBQThDO1lBQ25ELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELHFDQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsR0FBQyxFQUFFLENBQUM7YUFDeEQsSUFBSSxDQUFDLFVBQUMsUUFBNkM7WUFDbEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsZ0NBQUksR0FBSixVQUFLLE1BQWM7UUFDakIsSUFBSSxNQUE4QixDQUFDO1FBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsRUFBRSxNQUFNLENBQUM7YUFDN0QsSUFBSSxDQUFDLFVBQUMsUUFBb0M7WUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsa0NBQU0sR0FBTixVQUFPLEVBQVUsRUFBRSxNQUFjO1FBQy9CLElBQUksTUFBOEIsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLEdBQUcsRUFBRSxFQUFFLE1BQU0sQ0FBQzthQUNsRSxJQUFJLENBQUMsVUFBQyxRQUFvQztZQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sRUFBUztRQUNkLElBQUksTUFBOEIsQ0FBQztRQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLEdBQUcsRUFBRSxDQUFDO2FBQzdELElBQUksQ0FBQyxVQUFDLFFBQW9DO1lBQ3pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVILHdCQUFDO0FBQUQsQ0FwREEsQUFvREMsSUFBQTtBQXBEWSx5QkFBaUIsb0JBb0Q3QixDQUFBIiwiZmlsZSI6ImdlbmVyYWwvcmVzdC1zZXJ2aWNlcy93b3JrZXJSZXN0U2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9hcHAifQ==
